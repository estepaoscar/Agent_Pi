---
name: project-structure
description: "Crea la estructura base de un proyecto para Agent Pi: AGENTS.md, .agents/skills/ y la guía para definir skills. Úsala al organizar, inicializar o reorganizar una carpeta de trabajo, o al añadir skills nuevas."
---

# Estructura de proyectos para Agent Pi

## Estructura a crear

```
<nombre-proyecto>/
├── AGENTS.md            ← en la raíz, contexto que Pi carga siempre
└── .agents/
    └── skills/
        └── <nombre-skill>/SKILL.md   ← una carpeta por skill; su SKILL.md dentro
```

- `AGENTS.md` va en la raíz, no dentro de `.agents/`.
- Una carpeta por skill, cada una con su `SKILL.md`. No se ponen `SKILL.md` sueltos.
- `scripts/`, `references/`, `assets/` dentro de una skill son opcionales.
- El `name` del frontmatter debe coincidir con el nombre de su carpeta.
- Ruta por ubicación: global en `~/.pi/agent/skills/<skill>/SKILL.md`; de proyecto en `carpeta-proyecto/.agents/skills/<skill>/SKILL.md`.

## Paso 1: Pregunta antes de crear

No crees nada aún. Pregunta al usuario, en su idioma y tono: carpeta/nombre del proyecto, lenguaje/stack, comandos de arranque y pruebas, idioma y tono de comunicación, convenciones de código, skills que necesita y qué hace cada una, si son de proyecto o globales. No inventes respuestas; si no sabe algo, deja el placeholder. Confirma antes de crear.

## Paso 2: Crea los archivos con esa información

1. Crea `AGENTS.md` con los datos que dio el usuario, en su idioma y tono.
2. Por cada skill pedida, crea `<ruta>/<nombre>/SKILL.md` (proyecto o global según corresponda) con frontmatter `name` + `description` e instrucciones basadas en lo que contó.
3. Muestra el árbol de lo creado.
