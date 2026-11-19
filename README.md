# Agent_Pi

Repositorio de extensiones y herramientas para **Pi Coding Agent**.

## Extensiones

| Extensión | Carpeta | Descripción |
|-----------|---------|-------------|
| `web_fetch` | [`extensions/web-fetch/`](./extensions/web-fetch/) | Descarga el contenido textual de una URL pública HTTP/HTTPS |
| `web_search` | [`extensions/web-search/`](./extensions/web-search/) | Busca en DuckDuckGo sin clave ni pago |
| `browser_open` | [`extensions/browser-playwright/`](./extensions/browser-playwright/) | Abre una URL pública en un navegador headless vía Playwright |

Cada extensión incluye su propio `README.md` con documentación.

Las extensiones son código ejecutado con los permisos del proceso de Pi. Revísalas antes de instalarlas y cárgalas solo desde repositorios de confianza.

## Instalación

Pi descubre automáticamente las extensiones en `~/.pi/agent/extensions/`.

Clona el repositorio dentro de esa carpeta:

```bash
git clone https://github.com/estepaoscar/Agent_Pi.git ~/.pi/agent/extensions/agent-pi
```

**Nota para `browser-playwright`:** necesita instalar sus dependencias:

```bash
cd ~/.pi/agent/extensions/agent-pi/extensions/browser-playwright
npm install --omit=dev
```

Después reinicia Pi o ejecuta `/reload`.

## Actualización

```bash
cd ~/.pi/agent/extensions/agent-pi
git pull
```

Luego ejecuta `/reload` en Pi o reinicia la sesión.