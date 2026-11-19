# `browser_open`

Abre una URL pública en un navegador headless (Chrome/Chromium/Edge) usando `playwright-core`. No descarga Chromium, no necesita API keys.

## Instalación

```bash
cd ~/.pi/agent/extensions/agent-pi/extensions/browser-playwright
npm install --omit=dev
```

Si no detecta el navegador automáticamente:

```bash
PI_CHROME_PATH="/ruta/al/chrome" pi
```

## Uso

> "Abre https://example.com y dime el título y el texto principal."
> "Abre https://example.com, haz una captura de pantalla."

La captura (opcional, `screenshot: true`) se guarda en `.pi-screenshots/`.

## Límites

- Solo HTTP/HTTPS en puertos estándar
- Sin WebSockets, service workers ni descargas
- Timeout: 30 s total, 25 s navegación
- Texto devuelto: 12 000 caracteres máximo
- No hereda cookies ni sesiones del perfil habitual

## Seguridad

El contenido de la página no es confiable. El aislamiento del navegador no es perfecto contra DNS rebinding. Carga solo si confías en el código.