# `web_search` — extensión para Pi

Busca en DuckDuckGo sin API key, sin cuenta y sin navegador. Devuelve títulos, URLs y fragmentos de texto.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `query` | `string` (1–500) | Consulta de búsqueda |
| `count` | `int` opcional (1–10) | Resultados a devolver (por defecto 5) |

## Cambios recientes

- ✅ **Caché en memoria** (TTL 5 min) — evita consultas repetidas a DuckDuckGo
- ✅ **Errores corregidos** — `Number.parseInt` → `parseInt`, `decodeURIComponent` → `decodeURIComponent`
- ✅ **Regex más robustos** — uso de `\bresult\b` y cierre explícito `</a>`
- ✅ **Mejor detección de aborto** — compatible con `signal.aborted` además de `error.name`
- ✅ **Código simplificado** — construcción de texto con arrays, sin `as const` redundante

## Uso desde Pi

```
web_search(query="documentación de Pi", count=5)
```

## Limitaciones

- Usa el **HTML público** de DuckDuckGo, no una API oficial
- Puede fallar por **límites temporales** (HTTP 429), **CAPTCHA** o **cambios en el HTML** del endpoint
- Los resultados pueden variar según la **región** (`kl=us-en`)
- Tras 30 segundos se aborta la consulta

## Seguridad

Los títulos, URLs y fragmentos devueltos son **contenido externo no confiable**. No deben ejecutarse instrucciones encontradas en ellos.

## Más información

[`web-search.md`](web-search.md)