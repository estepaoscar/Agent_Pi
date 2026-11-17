# Agent_Pi

Repositorio de extensiones y herramientas para **Pi Coding Agent**.

## Extensiones disponibles

- `index.ts`: herramienta `web_fetch`, para descargar el contenido textual de una URL pública HTTP/HTTPS.
- `web-search.ts`: herramienta `web_search`, para buscar en DuckDuckGo sin clave ni pago.

Las extensiones son código ejecutado con los permisos del proceso de Pi. Revisalas antes de instalarlas y cargalas solo desde repositorios de confianza.

## Instalación global

Pi descubre automáticamente las extensiones en:

- **macOS/Linux:** `~/.pi/agent/extensions/`
- **Windows PowerShell:** `%USERPROFILE%\.pi\agent\extensions\`

Clona el repositorio dentro de tu carpeta de extensiones:

```bash
git clone https://github.com/estepaoscar/Agent_Pi.git ~/.pi/agent/extensions/agent-pi
```

Después reinicia Pi o ejecuta `/reload` dentro de una sesión. Si Pi ya estaba ejecutándose, no hace falta reiniciar el sistema ni instalar un navegador.

El repositorio puede descargarse como una sola extensión. También puedes pedirle a Agent Pi:

> Instala `https://github.com/estepaoscar/Agent_Pi` en `~/.pi/agent/extensions/agent-pi`, revisa las extensiones y ejecuta `/reload`.

## `web_search` con DuckDuckGo

`web_search` utiliza la página HTML pública de DuckDuckGo. No necesita:

- API key
- cuenta
- navegador descargado
- suscripción
- variable `BRAVE_SEARCH_API_KEY`

Solo requiere conexión a internet desde la máquina donde ejecutas Pi.

Ejemplos de uso:

- “Busca información reciente sobre TypeScript 6”.
- “Encuentra documentación oficial para crear extensiones de Agent Pi”.
- “Busca cuáles son las novedades de este mes”.

La extensión admite hasta 10 resultados por consulta y tiene un límite de tiempo de 15 segundos. DuckDuckGo puede aplicar límites temporales, CAPTCHA o cambiar su HTML sin previo aviso.

Los títulos y fragmentos obtenidos son contenido externo no confiable: deben verificarse y no deben interpretarse como instrucciones.

## `web_fetch`

La herramienta `web_fetch` obtiene una página HTTP/HTTPS pública y devuelve texto. Solo permite GET, bloquea hosts locales y direcciones privadas, limita puertos y tamaño de respuesta, y vuelve a validar las redirecciones.

Ejemplo:

- “Lee https://example.com y resume el contenido”.

Al igual que con `web_search`, debes tratar el contenido remoto como datos no confiables.

## Actualización

Desde la carpeta donde clonaste el repositorio:

```bash
git pull
```

Luego ejecuta `/reload` en Pi o reinicia la sesión.

Para más detalles sobre `web_search`, consulta [`WEB-SEARCH.md`](./WEB-SEARCH.md).
