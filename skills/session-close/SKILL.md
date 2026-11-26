---
name: session-close
description: "Se ejecuta cuando el usuario anuncia que terminará sesión: resumen ISO + actualización de context.md"
---

# Skill: session-close
Se ejecuta cuando el usuario anuncia que terminará sesión: resumen ISO + actualización de context.md

## 1. Resumen de sesión
- Archivo `AAAA-MM-DD_Descripción_Versión.md` (ej. `sesion_v1.md`)
- Contenido: tema, archivos tocados, tareas realizadas, pendientes
- Si ya existe: sube versión (v1 → v2)

## 2. context.md
- Si no existe: crear con secciones `Decisiones importantes`, `Parámetros finales`, `Configuraciones`, `Notas relevantes`
- Si existe: por cada dato decide **complementar**, **validar** o **renovar** (preserva lo previo salvo que sea obsoleto)

Ejecutar ambas operaciones antes de confirmar el cierre. Avisar al usuario qué resumiste y qué actualizaste.