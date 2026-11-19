# `web_search`

Busca en DuckDuckGo y devuelve títulos, URLs y fragmentos. Sin API key, cuenta ni navegador.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `query` | string (1–500) | Consulta de búsqueda |
| `count` | int (1–10) | Resultados a devolver (default 5) |

## Uso

> "Busca documentación sobre extensiones de Pi."

## Limitaciones

Usa el HTML público de DuckDuckGo. Puede fallar por límites temporales, CAPTCHA o cambios en el HTML.

## Seguridad

Títulos, URLs y fragmentos son contenido externo no confiable.

## Más info

[`web-search.md`](web-search.md)