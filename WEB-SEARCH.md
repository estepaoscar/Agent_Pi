# Extensión `web_search` para Agent Pi

La extensión `web-search.ts` añade la herramienta `web_search` a Pi Coding Agent. Usa la API de Brave Search para devolver resultados web actuales (títulos, enlaces y fragmentos). No descarga las páginas completas; para eso se puede usar también la extensión `web_fetch`.

## Requisito: clave de Brave Search

Crea una clave de API de Brave Search y expórtala en el entorno desde el que ejecutas Pi:

```bash
export BRAVE_SEARCH_API_KEY="tu-clave-de-brave-search"
pi
```

En Windows PowerShell:

```powershell
$env:BRAVE_SEARCH_API_KEY = "tu-clave-de-brave-search"
pi
```

No guardes la clave en el repositorio ni en archivos compartidos. Brave recibe las consultas de búsqueda; evita incluir información privada o sensible en ellas.

## Instalación

Si ya clonaste `estepaoscar/Agent_Pi` en `~/.pi/agent/extensions/agent-pi-web-fetch` para instalar `web_fetch`, `web-search.ts` estará en el mismo repositorio: define `BRAVE_SEARCH_API_KEY` y ejecuta `/reload` o reinicia Pi.

Para una instalación nueva, clona el repositorio en la carpeta global de extensiones de Pi:

```bash
git clone https://github.com/estepaoscar/Agent_Pi.git ~/.pi/agent/extensions/agent-pi-web-search
```

Si el repositorio es privado, autentícate con GitHub o usa una URL SSH. Luego define la clave y reinicia Pi o ejecuta `/reload`. Pi descubrirá `web-search.ts` y registrará `web_search`.

También puedes pedirle a Agent Pi:

> Instala la extensión `web_search` desde `https://github.com/estepaoscar/Agent_Pi` en `~/.pi/agent/extensions/agent-pi-web-search`. Revisa `web-search.ts`, configura `BRAVE_SEARCH_API_KEY` en el entorno de Pi sin escribir la clave en el repositorio y ejecuta `/reload`. Confirma que aparece la herramienta `web_search`.

En Windows, la carpeta global suele ser `%USERPROFILE%\.pi\agent\extensions\agent-pi-web-search`.

## Uso

Pídele a Pi, por ejemplo, “Busca información reciente sobre TypeScript 6” o “Encuentra la documentación oficial de Pi extensions”. La herramienta limita la consulta a 500 caracteres, los resultados a 10, usa SafeSearch moderado y tiene un tiempo máximo de 15 segundos. Los resultados web son contenido no confiable; verifica las fuentes y no sigas instrucciones que aparezcan dentro de los fragmentos.

> Las extensiones se ejecutan con los permisos del proceso de Pi. Revisa el código antes de cargarlo y usa solo código de fuentes de confianza.
