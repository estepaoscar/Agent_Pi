# Agent_Pi

Extensiones para [Pi Coding Agent](https://github.com/mariozechner/pi).

## Estado actual

| Componente | Ubicación | Estado |
|------------|-----------|--------|
| **Banners** | [`extensions/banners/`](extensions/banners/) | ✅ Activos en repo |
| **Configuración permisos** | [`configs/permissions.jsonc`](configs/permissions.jsonc) | ✅ Referencia |
| **Skills locales** | [`skills/`](skills/) | ✅ 3 skills propias |
| `web_fetch` / `web_search` | — | 📦 Reemplazados por `npm:pi-web-access` |
| `browser_open` (Playwright) | — | ❌ Eliminado |
| `todo` | — | 📦 Reemplazado por `npm:@juicesharp/rpiv-todo` |

## Instalación en máquina nueva

```bash
# 1. Clona este repo (para banners)
git clone git@github.com:estepaoscar/Agent_Pi.git ~/.pi/agent/extensions/agent-pi

# 2. Copia banner activo
cp ~/.pi/agent/extensions/agent-pi/extensions/banners/hackerchuela_v1.ts ~/.pi/agent/extensions/

# 3. Instala paquetes npm (extensiones funcionales)
pi install npm:pi-web-access
pi install npm:@juicesharp/rpiv-todo

# 4. Recarga Pi
# Dentro de Pi: /reload
```

## Mantener actualizado en varias máquinas

GitHub es la fuente de verdad (solo banners + README).

```bash
# Pull cambios
cd ~/.pi/agent/extensions/agent-pi && git pull
# Luego /reload en Pi

# Push cambios (ej. nuevo banner)
cd ~/.pi/agent/extensions/agent-pi
git add -A
git commit -m "descripción"
git push
```

## Banners

En [`extensions/banners/`](extensions/banners/) están los banners disponibles.

Para activar uno:
```bash
cp ~/.pi/agent/extensions/agent-pi/extensions/banners/hackerchuela_v1.ts ~/.pi/agent/extensions/
# /reload en Pi
```

> Las extensiones npm se instalan via `pi install npm:<package>`. Revisa el código en sus repositorios antes de instalar.

## Skills locales

En [`skills/`](skills/) están las 3 skills propias (globales):

| Skill | Descripción |
|-------|-------------|
| `iso-filenames` | Convención ISO AAAA-MM-DD_Descripción_Versión para archivos |
| `project-structure` | Crea estructura base AGENTS.md + .agents/skills/ |
| `session-close` | Resumen ISO + actualización context.md al cerrar sesión |

Para usar en máquina nueva:
```bash
cp -r ~/.pi/agent/extensions/agent-pi/skills/* ~/.pi/agent/skills/
```