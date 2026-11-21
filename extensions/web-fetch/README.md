# `web_fetch` — extensión para Pi

Descarga el contenido textual de una URL HTTP/HTTPS pública y lo convierte a texto plano. Sin navegador, con validación de seguridad.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `url` | `string` | URL absoluta HTTP o HTTPS |
| `maxChars` | `int` opcional (1–20 000) | Máximo de caracteres de salida (por defecto 12 000) |

## Cambios recientes

- ✅ **Caché en memoria** (TTL 5 min) — evita descargar la misma URL repetidamente
- ✅ **Errores corregidos** — `Number.parseInt` → `parseInt` (x2), `Buffer.isBuffer` → `typeof` |
- ✅ **Eliminados promptSnippet/promptGuidelines duplicados** — ya los inyecta Pi desde la descripción

## Seguridad (protección contra SSRF)

| Protección | Detalle |
|------------|---------|
| Solo HTTP/HTTPS | Rechaza cualquier otro protocolo |
| Sin credenciales en URL | Bloquea `user:password@host` |
| Puertos estándar | Solo 80 y 443 |
| IPs privadas | Bloquea 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 127.0.0.0/8, etc. |
| IPv6 restringido | Solo espacio global-unicast (2000::/3) |
| DNS fijado | La IP resuelta se fija en el socket; evita DNS rebinding |
| Redirecciones validadas | Cada redirección vuelve a pasar todas las validaciones |
| Sin localhost | Bloquea `localhost`, `*.localhost`, `*.local` |

## Limitaciones

- Solo GET (no soporta POST, cookies ni formularios)
- Límite de 1 MB por respuesta
- Máximo 5 redirecciones
- Timeout de 30 segundos
- Solo acepta HTML, texto plano, JSON y XML
- Páginas con JavaScript no se renderizan (solo se devuelve el HTML fuente convertido a texto)

## Uso desde Pi

```
web_fetch(url="https://example.com")
web_fetch(url="https://example.com", maxChars=5000)
```

## Más información

Documentación técnica en [`web-fetch.md`](web-fetch.md) (pendiente de crear).