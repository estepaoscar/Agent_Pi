/**
 * HACKERCHUELA Session Extension
 *
 * Replaces Pi's startup header with an ASCII ART banner "HACKERCHUELA"
 * every time a new session starts. The banner appears at the very top,
 * above the chat, centered and in green.
 *
 * Place this file in ~/.pi/agent/extensions/ for global auto-discovery.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// Fixed ANSI colors, independent of the active theme.
const GREEN = "\x1b[32m"; // central text
const WHITE = "\x1b[97m"; // side logos (columns 1-15 and 85-100)
const RESET = "\x1b[0m";

// Column boundaries (1-indexed, inclusive) for the white side logos.
const SIDE_LEFT_END = 15; // columns 1..15 -> white
const SIDE_RIGHT_START = 85; // columns 85..end -> white

// ASCII art for HACKERCHUELA. One element per line. Trailing spaces are
// trimmed so centering uses the real visible width. Leading spaces are kept
// because they are part of the artwork.
const HACKERCHUELA_BANNER: string[] = [
	"",
	"   █     █                                                                              █     █",
	"   ▀█▄ ▄█▀      ██ ██ ▄███▄ ▄███ ██ ▄█ ████ ████▄ ▄███ ██ ██ ██ ██ ▄███ ██   ▄███▄      ▀█▄ ▄█▀",
	" ▄████████▄     ██ ██ ██ ██ ██   ██ █  ██   ██  █ ██   ██ ██ ██ ██ ██   ██   ██ ██    ▄████████▄",
	"████ ███ ████   █████ ██ ██ ██   ███   ███  █████ ██   █████ ██ ██ ███  ██   ██ ██   ████ ███ ████",
	"█▀█████████▀█   ██ ██ █████ ██   ██ ██ ██   ██ █  ██   ██ ██ ██ ██ ██   ██   █████   █▀█████████▀█",
	"█  █▀   ▀█  █   ██ ██ ██ ██ ▀███ ██ ██ ████ ██ ██ ▀███ ██ ██ █████ ▀███ ████ ██ ██   █  █▀   ▀█  █",
	" ▄█▀     ▀█▄                                                                          ▄█▀     ▀█▄",
	"",
];

export default function (pi: ExtensionAPI) {
	pi.on("session_start", async (_event, ctx) => {
		// setHeader only makes sense in the TUI.
		if (ctx.mode === "tui") {
			ctx.ui.setHeader((_tui, _theme) => ({
				invalidate() {},
				render(width: number): string[] {
					// Center each line horizontally within the available width.
					const bannerWidth = Math.max(...HACKERCHUELA_BANNER.map((l) => l.length));
					const leftPad = Math.max(0, Math.floor((width - bannerWidth) / 2));
					const pad = " ".repeat(leftPad);

					return HACKERCHUELA_BANNER.map((line) => {
						// Pad to a uniform width so column slicing is consistent.
						const padded = line.padEnd(bannerWidth, " ");
						// Split into: left logo (white) | center text (green) | right logo (white).
						const left = padded.slice(0, SIDE_LEFT_END);
						const middle = padded.slice(SIDE_LEFT_END, SIDE_RIGHT_START - 1);
						const right = padded.slice(SIDE_RIGHT_START - 1);
						return `${pad}${WHITE}${left}${GREEN}${middle}${WHITE}${right}${RESET}`;
					});
				},
			}));
		}

		console.log("[hackerchuela extension] Session started - header banner applied");
	});

	// Restore the built-in header when the session ends.
	pi.on("session_shutdown", async (_event, ctx) => {
		if (ctx.mode === "tui") {
			ctx.ui.setHeader(undefined);
		}
	});
}
