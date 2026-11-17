# Extensión `web_search` para Agent Pi

La extensión `web-search.ts` añade la herramienta `web_search` a Pi Coding Agent.

- Busca mediante DuckDuckGo.
- No usa una API pagada ni requiere clave.
- No controla Chrome ni necesita que descargues DuckDuckGo como navegador.
- Solo necesita conexión a internet y el código de la extensión cargado en Pi.

No descarga el contenido completo de las páginas encontradas. Para leer una URL concreta, usa también `web_fetch`.

## Instalación

Asegúrate de tener este repositorio clonado dentro de la carpeta global de extensiones de Pi:

```bash
git clone https://github.com/estepaoscar/Agent_Pi.git ~/.pi/agent/extensions/agent-pi
```

En Windows PowerShell, usa:

```powershell
git clone https://github.com/estepaoscar/Agent_Pi.git "$env:USERPROFILE\.pi\agent\extensions\agent-pi"
```

Después ejecuta `/reload` dentro de Pi o reinicia la aplicación. Pi detectará `web-search.ts` y registrará la herramienta `web_search`.

## Variables y claves

No se requiere ninguna clave ni variable de entorno.

No debes configurar `BRAVE_SEARCH_API_KEY` para esta versión: el archivo `web-search.ts` actual consulta DuckDuckGo HTML directamente.

## Uso

Pídele a Pi, por ejemplo:

- “Busca información reciente sobre TypeScript 6”.
- “Busca documentación oficial sobre extensiones de Pi”.
- “Encuentra noticias actuales sobre inteligencia artificial”.

Parámetros disponibles:

- `query`: consulta de búsqueda, hasta 500 caracteres.
- `count`: cantidad de resultados entre 1 y 10; predeterminado 5.

La respuesta incluye título, URL y fragmento de cada resultado.

## Limitaciones

DuckDuckGo no ofrece mediante esta implementación una API oficial de clave gratuita. La extensión consulta el endpoint HTML público, por lo que puede verse afectada por:

- límites temporales de solicitudes;
- desafíos CAPTCHA;
- cambios en el HTML;
- resultados incompletos;
- variaciones regionales;
- bloqueo temporal por red o proveedor.

Si la búsqueda falla, espera unos minutos y vuelve a intentarlo. Para resultados comerciales más fiables, se puede sustituir esta extensión por una integración con una API de búsqueda oficial.

## Seguridad

Trata títulos, URLs y fragmentos como contenido externo no confiable. No sigas instrucciones presentes dentro de los resultados y verifica las fuentes antes de usarlas.

Las extensiones se ejecutan con los permisos del proceso de Pi. Revisa `web-search.ts` antes de cargarlo y usa solo código de repositorios confiables.

## Actualización

```bash
cd ~/.pi/agent/extensions/agent-pi
git pull
```

En Pi ejecuta `/reload` o reinicia la sesión.
