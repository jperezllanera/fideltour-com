#!/usr/bin/env bash
# PreToolUse hook — valida que los ficheros creados bajo public/ cumplen las
# convenciones SEO/branding de Fideltour. Reglas en
# .claude/skills/seo-assets/SKILL.md.
#
# Exit codes:
#   0  → permite el Write
#   2  → bloquea el Write (mensaje a stderr)
#
# Input: JSON por stdin con shape { tool_input: { file_path: "..." } }

set -u

input=$(cat)

file_path=$(printf '%s' "$input" | python3 -c "
import json, sys
try:
    d = json.load(sys.stdin)
except Exception:
    print('')
    sys.exit(0)
print(d.get('tool_input', {}).get('file_path', '') or '')
")

# Sin file_path → no aplica
if [ -z "$file_path" ]; then
  exit 0
fi

# Solo validamos public/. Fuera de ahí, las convenciones son distintas
# (rutas de Next.js, archivos de config, etc.).
case "$file_path" in
  */public/*) ;;
  *) exit 0 ;;
esac

basename=$(basename "$file_path")

# Excepciones permitidas tal cual
case "$basename" in
  favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|README.md|.DS_Store|.gitkeep)
    exit 0
    ;;
esac

stem="${basename%.*}"
ext="${basename##*.}"
ext_lower=$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')

errors=()

# 1. Caracteres permitidos: a-z 0-9 - .
#    Bloquea mayúsculas, espacios, guiones bajos, acentos, ñ, símbolos.
if LC_ALL=C printf '%s' "$basename" | grep -qE '[^a-z0-9.-]'; then
  if printf '%s' "$basename" | grep -q '_'; then
    errors+=("contiene guion bajo (_) — usa guion medio (-)")
  fi
  if printf '%s' "$basename" | LC_ALL=C grep -qE '[A-Z]'; then
    errors+=("contiene mayúsculas — usa solo minúsculas")
  fi
  if printf '%s' "$basename" | grep -q ' '; then
    errors+=("contiene espacios — usa guiones (-)")
  fi
  # Cualquier otro caracter no permitido (acentos, ñ, símbolos…)
  rest=$(LC_ALL=C printf '%s' "$basename" | tr -d 'a-z0-9._-' | tr -d '[:upper:][:space:]_')
  if [ -n "$rest" ]; then
    errors+=("contiene caracteres no permitidos ($(printf '%s' "$rest" | head -c 20)) — usa solo a-z 0-9 y -")
  fi
fi

# 2. Sin guion al inicio/final ni dobles
if printf '%s' "$stem" | grep -qE '^-|-$|--'; then
  errors+=("guiones mal colocados (al inicio, al final o duplicados)")
fi

# 3. Longitud del stem
stem_len=${#stem}
if [ "$stem_len" -lt 3 ]; then
  errors+=("nombre demasiado corto ($stem_len chars) — sé descriptivo (≥3)")
fi
if [ "$stem_len" -gt 60 ]; then
  errors+=("nombre demasiado largo ($stem_len chars) — acorta a ≤60")
fi

# 4. Slugs genéricos prohibidos al inicio
generic_regex='^(img|image|foto|photo|picture|screenshot|captura|untitled|sin-titulo|sin-nombre|new-file|new-|nuevo-|temp|tmp|asset|file|copy|copia)'
if printf '%s' "$stem" | LC_ALL=C grep -qiE "$generic_regex"; then
  errors+=("slug genérico — empieza por un descriptor SEO real (p.ej. cliente-, caso-, sello-, hero-, bloque-)")
fi

# 5. Extensiones
case "$ext_lower" in
  webp|avif|svg|png|jpg|ico) ;;
  jpeg)
    errors+=("extensión .jpeg — normaliza a .jpg")
    ;;
  gif|bmp|tiff|tif|heic|heif)
    errors+=("extensión .$ext_lower no permitida en public/ — usa webp/avif/svg/png/jpg")
    ;;
  "$basename")
    # No tiene extensión (stem == basename completo)
    errors+=("sin extensión — añade .webp/.svg/.png/.jpg según corresponda")
    ;;
  *)
    errors+=("extensión .$ext_lower no reconocida — usa webp/avif/svg/png/jpg")
    ;;
esac

if [ "${#errors[@]}" -gt 0 ]; then
  {
    echo "Write bloqueado por seo-assets: el nombre '$basename' incumple las convenciones de Fideltour."
    echo ""
    for e in "${errors[@]}"; do
      echo "  - $e"
    done
    echo ""
    echo "Ruta: $file_path"
    echo "Reglas: .claude/skills/seo-assets/SKILL.md"
    echo "Plantilla: {familia}-{slug-descriptivo}.{webp|svg|png|jpg}"
  } >&2
  exit 2
fi

exit 0
