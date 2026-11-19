# Agent_Pi

Extensiones para [Pi Coding Agent](https://github.com/mariozechner/pi).

| Extensión | Carpeta | Qué hace |
|-----------|---------|----------|
| `web_fetch` | [`extensions/web-fetch/`](extensions/web-fetch/) | Descarga texto de URLs HTTP/HTTPS públicas |
| `web_search` | [`extensions/web-search/`](extensions/web-search/) | Busca en DuckDuckGo sin API key |
| `browser_open` | [`extensions/browser-playwright/`](extensions/browser-playwright/) | Abre URLs en navegador headless con Playwright |
| Banners | [`extensions/banners/`](extensions/banners/) | Banners ASCII art para personalizar el inicio de Pi |

## Instalación en una máquina nueva

```bash
git clone https://github.com/estepaoscar/Agent_Pi.git ~/.pi/agent/extensions/agent-pi
```

Si vas a usar `browser_open`:

```bash
cd ~/.pi/agent/extensions/agent-pi/extensions/browser-playwright
npm install --omit=dev
```

Reinicia Pi o ejecuta `/reload`.

## Mantener actualizado en varias máquinas

GitHub es la fuente de verdad. En cualquier máquina:

```bash
cd ~/.pi/agent/extensions/agent-pi && git pull
```

Luego `/reload` dentro de Pi.

Para subir cambios desde cualquier máquina:

```bash
cd ~/.pi/agent/extensions/agent-pi
git add -A
git commit -m "descripción del cambio"
git push
```

En las otras máquinas solo hace falta `git pull`.

## Banners

En [`extensions/banners/`](extensions/banners/) encontrarás varios banners.

Para activar uno, copialo a la carpeta de extensiones de Pi:

```bash
cp ~/.pi/agent/extensions/agent-pi/extensions/banners/hackerchuela_v1.ts ~/.pi/agent/extensions/
```

Luego `/reload`. Para cambiar de banner, reemplaza el archivo y vuelve a ejecutar `/reload`.

> Las extensiones se ejecutan con los permisos del proceso de Pi. Revisa el código antes de instalarlo.