# Agent_Pi

Extensiones para [Pi Coding Agent](https://github.com/mariozechner/pi).

| Extensión | Carpeta | Qué hace |
|-----------|---------|----------|
| `web_fetch` | [`extensions/web-fetch/`](extensions/web-fetch/) | Descarga texto de URLs HTTP/HTTPS públicas |
| `web_search` | [`extensions/web-search/`](extensions/web-search/) | Busca en DuckDuckGo sin API key |
| `browser_open` | [`extensions/browser-playwright/`](extensions/browser-playwright/) | Abre URLs en navegador headless con Playwright |
| Banners | [`extensions/banners/`](extensions/banners/) | Banners ASCII art para personalizar el inicio de Pi |

## Instalación

```bash
git clone https://github.com/estepaoscar/Agent_Pi.git ~/.pi/agent/extensions/agent-pi
cd ~/.pi/agent/extensions/agent-pi/extensions/browser-playwright && npm install --omit=dev
```

Reinicia Pi o ejecuta `/reload`.

## Banners

En [`extensions/banners/`](extensions/banners/) encontrarás varios banners ASCII art.

Para activar uno, pídele a Agent Pi que lo copie a `~/.pi/agent/extensions/` y ejecute `/reload`, o hazlo manualmente:

```bash
cp ~/.pi/agent/extensions/agent-pi/extensions/banners/hackerchuela_v1.ts ~/.pi/agent/extensions/
```

Luego `/reload` dentro de Pi.

## Actualización

```bash
cd ~/.pi/agent/extensions/agent-pi && git pull && /reload
```

> Las extensiones se ejecutan con los permisos del proceso de Pi. Revisa el código antes de instalarlo.