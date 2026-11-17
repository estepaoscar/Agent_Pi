# Agent_Pi

Extensiones para Pi Coding Agent.

## `web_fetch`

La extensión `index.ts` registra la herramienta `web_fetch`, que descarga páginas públicas HTTP/HTTPS y devuelve texto. Solo admite GET, limita la respuesta a 1 MB, el tiempo de solicitud a 15 segundos y la salida a 20.000 caracteres. Rechaza hosts/IP no públicos, puertos no estándar y vuelve a validar cada redirección. El contenido devuelto se marca como no confiable.

> Las extensiones de Pi ejecutan código con los permisos del proceso de Pi. Revisa el código antes de instalarlo y cárgalo solo si confías en este repositorio.

### Instalar en la configuración local de Pi

Pi descubre extensiones globales en `~/.pi/agent/extensions/`. Clona este repositorio como una extensión con `index.ts` en la raíz:

```bash
git clone https://github.com/estepaoscar/Agent_Pi.git ~/.pi/agent/extensions/agent-pi-web-fetch
```

Si el repositorio es privado, inicia sesión en GitHub o usa una URL SSH. Luego reinicia Pi o ejecuta `/reload`. La herramienta estará disponible como `web_fetch`.

También puedes pedirle a Agent Pi que lo haga con este texto:

> Instala la extensión de `https://github.com/estepaoscar/Agent_Pi` en `~/.pi/agent/extensions/agent-pi-web-fetch`. Antes de cargarla, revisa `index.ts`; después reinicia Pi o ejecuta `/reload` y confirma que aparece la herramienta `web_fetch`.

En Windows, la carpeta global suele ser `%USERPROFILE%\.pi\agent\extensions\agent-pi-web-fetch`; clona el repositorio allí y reinicia Pi o usa `/reload`.
