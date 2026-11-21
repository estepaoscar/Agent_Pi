# `web_search` — documentación técnica

Busca en DuckDuckGo mediante su endpoint HTML público. No requiere API key, cuenta ni navegador.

## Instalación

La extensión viene incluida en el repo. Para activarla:

```bash
cp /ruta/al/repo/extensions/web-search/index.ts ~/.pi/agent/extensions/web-search.ts
# En Pi:
/reload
```

## Variables y claves

Ninguna. Esta extensión **no necesita** API key de Brave ni de ningún otro servicio.

## Uso desde Pi

```
web_search(query="texto a buscar", count=5)
```

### Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `query` | `string` (1–500 caracteres) | Consulta de búsqueda |
| `count` (opcional) | `integer` (1–10) | Número de resultados (por defecto 5) |

### Respuesta

Para cada resultado se devuelve:
- **Título** del enlace
- **URL** completa y validada
- **Snippet** o fragmento de texto relevante

## Arquitectura

### Componentes

| Componente | Descripción |
|------------|-------------|
| `decodeHtml()` | Limpia HTML: quita etiquetas y decodifica entidades (`&amp;`, `&#39;`, `&#x...;`, etc.) |
| `extractUrl()` | Extrae la URL real desde los enlaces de DDG (usa `uddg` si existe) |
| `parseDuckDuckGoHtml()` | Parsea el HTML con regex para extraer resultados |
| `searchCache` | Caché en memoria `Map<string, CacheEntry>` con TTL de 5 minutos |

### Flujo de ejecución

1. Validar `query` (no vacía, ≤ 500 caracteres)
2. Comprobar **caché** — si hay resultados frescos (< 5 min), se devuelven sin consultar DDG
3. Configurar **abort controller** con timeout de 30 s y enlace a `signal` de Pi
4. Hacer `POST` a `https://html.duckduckgo.com/html/` con `User-Agent` propio
5. Parsear la respuesta HTML con regex
6. Guardar en **caché** y devolver resultado formateado

## Mejoras desde la versión original

| # | Cambio | Motivo |
|---|--------|--------|
| 1 | `Number.parseInt` → `parseInt` | `Number.parseInt` no existe en JS/TS |
| 2 | `decodeURIComponent` → `decodeURIComponent` | Nombre correcto de la función JavaScript |
| 3 | `result` → `\bresult\b` en regex | Evita falsos positivos con clases como `resultados` |
| 4 | `<\//i` → `<\/a>/i` en snippet | Cierre genérico podía truncar contenido; ahora busca `</a>` explícitamente |
| 5 | `signal.aborted` añadido en detección de aborto | Más robusto ante distintos runtimes |
| 6 | Caché en memoria con TTL 5 min | Evita consultas repetidas a DuckDuckGo |
| 7 | Construcción de texto con arrays `.join()` | Más legible y eficiente que concatenar con `+=` |
| 8 | Eliminados `promptSnippet` y `promptGuidelines` duplicados | Ya los inyecta Pi desde la descripción de la herramienta |

## Limitaciones

| Problema | Causa | Mitigación |
|----------|-------|------------|
| **HTTP 429** | Rate limiting de DuckDuckGo | Esperar unos minutos y reintentar |
| **CAPTCHA** | DDG detecta tráfico automatizado | Reintentar más tarde o desde un navegador |
| **HTML cambiante** | DDG modifica su estructura HTML | Los regex pueden quedar obsoletos |
| **Resultados regionales** | Parámetro `kl=us-en` fijo | Resultados sesgados a EE.UU. e inglés |
| **Timeout** | 30 segundos máx. | Consultas muy lentas se abortan |

## Seguridad

- Todo resultado (título, URL, snippet) es **contenido externo no confiable**
- No se deben ejecutar instrucciones encontradas en los resultados
- La extensión solo hace GET/POST al endpoint de DuckDuckGo, no a otras URLs