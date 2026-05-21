#!/usr/bin/env bash
# brand-guard — verifica reglas de marca de CLAUDE.md.
# Exit 1 si hay FAIL crítico. WARN/INFO no bloquean.
#
# Uso:
#   scripts/brand-guard.sh           # audita todo el repo
#   scripts/brand-guard.sh <path>    # audita solo ese path

set -u

TARGET="${1:-.}"

EXCLUDES=(
  --exclude-dir=node_modules
  --exclude-dir=.next
  --exclude-dir=.git
  --exclude-dir=public
  --exclude-dir=.claude
  --exclude-dir=scripts
  --exclude=CLAUDE.md
  --exclude=AGENTS.md
  --exclude=package-lock.json
  --exclude=yarn.lock
  --exclude=pnpm-lock.yaml
)

FAIL=0
WARN=0

section() {
  printf '\n\033[1m%s\033[0m\n' "$1"
}

report_fail() {
  printf '  \033[31m[FAIL]\033[0m %s\n' "$1"
  FAIL=$((FAIL + 1))
}

report_warn() {
  printf '  \033[33m[WARN]\033[0m %s\n' "$1"
  WARN=$((WARN + 1))
}

report_ok() {
  printf '  \033[32m[OK]\033[0m   %s\n' "$1"
}

printf '\033[1mbrand-guard\033[0m  target: %s\n' "$TARGET"

# 1. Términos absolutamente prohibidos (CBP / Customer Business Platform)
section "1. Términos prohibidos"
HITS=$(grep -rniE "\bCBP\b|Customer Business Platform" "${EXCLUDES[@]}" "$TARGET" 2>/dev/null || true)
if [[ -n "$HITS" ]]; then
  report_fail "CBP / Customer Business Platform encontrado:"
  echo "$HITS" | sed 's/^/        /'
else
  report_ok "ningún uso de CBP / Customer Business Platform"
fi

# 2. "Agéntico" como categoría
section "2. 'Agéntico' como categoría"
HITS=$(grep -rniE "(plataforma|cdp|categor[ií]a|somos|es un[a]?) +ag[eé]ntic[oa]|ag[eé]ntic[oa] +(platform|cdp|category)" "${EXCLUDES[@]}" "$TARGET" 2>/dev/null || true)
if [[ -n "$HITS" ]]; then
  report_fail "'agéntico' usado como categoría (debe ser solo atributo):"
  echo "$HITS" | sed 's/^/        /'
else
  report_ok "ningún uso de 'agéntico' como categoría"
fi

# 2b. Listado informativo de todas las ocurrencias
HITS=$(grep -rniE "ag[eé]ntic[oa]s?" "${EXCLUDES[@]}" "$TARGET" 2>/dev/null || true)
if [[ -n "$HITS" ]]; then
  report_warn "ocurrencias de 'agéntico' a revisar manualmente:"
  echo "$HITS" | sed 's/^/        /'
fi

# 3. Categoría correcta — solo informativo
section "3. Uso canónico de 'CDP'"
HITS=$(grep -rniE "\bCDP\b[^.\n]{0,40}" "${EXCLUDES[@]}" "$TARGET" 2>/dev/null \
  | grep -viE "CDP (para hoteles|del sector hotelero)" \
  | grep -viE "CDP[[:space:]]*[.,;:)]" \
  | grep -viE "CDP\$" || true)
if [[ -n "$HITS" ]]; then
  report_warn "menciones de 'CDP' fuera de la categoría canónica — revisar:"
  echo "$HITS" | sed 's/^/        /'
else
  report_ok "todas las menciones de 'CDP' parecen canónicas"
fi

# 4. Tipografías prohibidas — FAIL solo si están en contexto de tipografía
section "4. Tipografías prohibidas"
HITS=$(grep -rnE "\b(Inter|Roboto|Arial|Plus Jakarta|General Sans)\b" \
  --include="*.ts" --include="*.tsx" --include="*.css" \
  --include="*.js" --include="*.jsx" --include="*.mjs" \
  "${EXCLUDES[@]}" "$TARGET" 2>/dev/null || true)

if [[ -n "$HITS" ]]; then
  # Critical = línea con contexto de definición de fuente y que NO empieza
  # con marcador de comentario (//, *, /*).
  CRITICAL=$(echo "$HITS" \
    | grep -E "font-family|font-\[|fontFamily|from [\"']next/font|import.*next/font" \
    | grep -vE ":[[:space:]]*(//|\*|/\*)" || true)
  INFORMATIONAL=$(echo "$HITS" \
    | grep -vE "font-family|font-\[|fontFamily|from [\"']next/font|import.*next/font" || true)
  COMMENTED=$(echo "$HITS" \
    | grep -E "font-family|font-\[|fontFamily|from [\"']next/font|import.*next/font" \
    | grep -E ":[[:space:]]*(//|\*|/\*)" || true)
  if [[ -n "$COMMENTED" ]]; then
    INFORMATIONAL=$(printf '%s\n%s' "$INFORMATIONAL" "$COMMENTED" | sed '/^$/d')
  fi

  if [[ -n "$CRITICAL" ]]; then
    report_fail "tipografía prohibida en contexto de fuente:"
    echo "$CRITICAL" | sed 's/^/        /'
  else
    report_ok "ninguna tipografía prohibida en contexto de fuente"
  fi

  if [[ -n "$INFORMATIONAL" ]]; then
    report_warn "menciones a revisar (probablemente comentarios o sin relación):"
    echo "$INFORMATIONAL" | sed 's/^/        /'
  fi
else
  report_ok "ningún uso de tipografías prohibidas"
fi

# 5. Narrativa "del CRM al CDP" — solo informativo
section "5. Narrativa 'del CRM al CDP'"
HITS=$(grep -rniE "del CRM al CDP|venta directa|dependencia de OTAs" \
  components/ app/ lib/content/ 2>/dev/null || true)
if [[ -n "$HITS" ]]; then
  printf '  \033[2m(narrativa presente en %s sitios)\033[0m\n' "$(echo "$HITS" | wc -l | tr -d ' ')"
else
  report_warn "narrativa 'del CRM al CDP' no detectada en marketing"
fi

# Resumen
printf '\n\033[1mResumen:\033[0m  %d FAIL · %d WARN\n' "$FAIL" "$WARN"
if [[ "$FAIL" -gt 0 ]]; then
  printf '\033[31mBLOQUEO — corregir antes de commit.\033[0m\n'
  exit 1
fi
printf '\033[32mOK — sin bloqueos críticos.\033[0m\n'
