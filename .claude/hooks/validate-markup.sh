#!/usr/bin/env bash
# PreToolUse hook — bloquea Write/Edit en .tsx/.jsx que metan
# personalizaciones de estilo que esquivan la hoja de estilos:
#   - inline style={{ ... }} con valores literales (no CSS vars)
#   - arbitrary Tailwind values: text-[...], leading-[...], font-[...], tracking-[...]
#   - <div>/<span>/<p> disfrazados de heading (text-3xl+ font-bold)
#
# Reglas en .claude/skills/design-tokens-check/SKILL.md.
#
# Exit codes:
#   0  → permite la escritura
#   2  → bloquea con mensaje a stderr

set -u

input=$(cat)

read_json() {
  printf '%s' "$input" | python3 -c "
import json, sys
try:
    d = json.load(sys.stdin)
except Exception:
    print('')
    sys.exit(0)
ti = d.get('tool_input', {}) or {}
# Edit: new_string. Write: content. MultiEdit: serialize all new_strings.
out = []
if 'new_string' in ti:
    out.append(ti.get('new_string') or '')
if 'content' in ti:
    out.append(ti.get('content') or '')
if 'edits' in ti and isinstance(ti['edits'], list):
    for e in ti['edits']:
        out.append((e or {}).get('new_string') or '')
print(d.get('tool_input', {}).get('file_path', '') or '')
print('---FIDELTOUR-SPLIT---')
print('\n'.join(out))
"
}

parsed=$(read_json)
file_path=$(printf '%s' "$parsed" | head -n 1)
content=$(printf '%s' "$parsed" | sed -n '/---FIDELTOUR-SPLIT---/,$p' | tail -n +2)

# Solo aplica a .tsx / .jsx fuera de components/ui (shadcn) y .claude/
case "$file_path" in
  *.tsx|*.jsx) ;;
  *) exit 0 ;;
esac

case "$file_path" in
  */components/ui/*|*/.claude/*|*/.next/*|*/node_modules/*) exit 0 ;;
  # OG/Twitter/Icon images: pipeline next/og (Satori) que solo entiende
  # inline styles — no es un escape del sistema de diseño, es un renderer
  # distinto que produce un PNG bitmap, no HTML.
  */app/opengraph-image.tsx|*/app/twitter-image.tsx|*/app/icon.tsx|*/app/apple-icon.tsx) exit 0 ;;
  */app/*/opengraph-image.tsx|*/app/*/twitter-image.tsx) exit 0 ;;
esac

# Si no hay contenido para validar (sólo se cambia metadata), salir
if [ -z "$content" ]; then
  exit 0
fi

errors=()

# 1. Inline style={{ ... }} con valores literales (no solo CSS vars).
#    Se permiten líneas donde TODOS los keys sean --* (custom properties),
#    y también height/width dinámicos con `${...}px` (runtime values).
inline_style_matches=$(printf '%s' "$content" | grep -nE "style=\{\{[^}]+" || true)
if [ -n "$inline_style_matches" ]; then
  while IFS= read -r line; do
    # Whitelist: solo CSS vars (--xxx)
    if printf '%s' "$line" | grep -qE 'style=\{\{[[:space:]]*\[?"?-{2}[a-z]'; then
      continue
    fi
    # Whitelist: height/width con template literal runtime (\`${x}px\`)
    if printf '%s' "$line" | grep -qE 'style=\{\{[[:space:]]*(height|width|top|left|right|bottom|transform):[[:space:]]*`\$\{'; then
      continue
    fi
    # Whitelist: aria-hidden visual-only iframes (analytics) — usar className
    errors+=("inline style={{...}} con valor literal — mueve a className o a globals.css: $(printf '%s' "$line" | head -c 140)")
  done <<< "$inline_style_matches"
fi

# 2. Arbitrary Tailwind values en className
arbitrary=$(printf '%s' "$content" | grep -nE "\b(text|leading|font|tracking)-\[" || true)
if [ -n "$arbitrary" ]; then
  while IFS= read -r line; do
    errors+=("Tailwind arbitrary value — usa .text-eyebrow/.text-body-*/.h-mega o un token de globals.css: $(printf '%s' "$line" | head -c 140)")
  done <<< "$arbitrary"
fi

# 3. <div>/<span>/<p> con text-3xl+ font-bold (heading disfrazado)
fake_heading=$(printf '%s' "$content" | grep -nE "<(div|span|p)[^>]*className=\"[^\"]*\\b(text-(3xl|4xl|5xl|6xl|7xl)|h-mega|h-cta)[^\"]*\\bfont-(bold|semibold|extrabold)" || true)
if [ -n "$fake_heading" ]; then
  while IFS= read -r line; do
    errors+=("<div>/<span>/<p> con tamaño y peso de heading — usa <h1>/<h2>/<h3>: $(printf '%s' "$line" | head -c 140)")
  done <<< "$fake_heading"
fi

if [ "${#errors[@]}" -gt 0 ]; then
  {
    echo "Write bloqueado por design-tokens-check: el contenido propuesto esquiva la hoja de estilos."
    echo ""
    for e in "${errors[@]}"; do
      echo "  - $e"
    done
    echo ""
    echo "Archivo: $file_path"
    echo "Reglas: .claude/skills/design-tokens-check/SKILL.md"
    echo "Tokens disponibles: ver @layer base y @layer components en app/globals.css"
  } >&2
  exit 2
fi

exit 0
