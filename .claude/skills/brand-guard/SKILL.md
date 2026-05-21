---
name: brand-guard
description: Verifica que el código y el copy cumplen las reglas de marca de Fideltour (categoría, prohibiciones, narrativa). Usar antes de commit cuando se haya tocado copy, secciones, navegación o contenido en lib/content/, o bajo demanda con "/brand-guard".
---

# brand-guard

Auditoría de cumplimiento de las reglas de marca definidas en `CLAUDE.md`.

## Alcance

Por defecto, audita el código de la app excluyendo:
`node_modules`, `.next`, `.git`, `public/`, `.claude/` (esta skill se
auto-matchearía), `CLAUDE.md` y `AGENTS.md` (documentan las reglas), y
lockfiles (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`).

Si el usuario pasa un path concreto, audita solo ese path.

**Flags de exclusión estándar** (copiar inline en cada `grep`, NO usar
variables de shell — el harness no las preserva fiable entre líneas):

```
--exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git
--exclude-dir=public --exclude-dir=.claude
--exclude=CLAUDE.md --exclude=AGENTS.md
--exclude=package-lock.json --exclude=yarn.lock --exclude=pnpm-lock.yaml
```

## Checks (en este orden)

### 1. Términos absolutamente prohibidos

Cualquier match es un **FAIL crítico**:

```bash
grep -rniE "\bCBP\b|Customer Business Platform" \
  --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git \
  --exclude-dir=public --exclude-dir=.claude \
  --exclude=CLAUDE.md --exclude=AGENTS.md \
  --exclude=package-lock.json --exclude=yarn.lock --exclude=pnpm-lock.yaml \
  .
```

### 2. "Agéntico" como categoría (no como atributo)

`agéntico` solo puede aparecer como adjetivo táctico puntual. **Nunca** en
estos patrones (case-insensitive). FAIL si hay match:

```bash
grep -rniE "(plataforma|cdp|categor[ií]a|somos|es un[a]?) +ag[eé]ntic[oa]|ag[eé]ntic[oa] +(platform|cdp|category)" \
  --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git \
  --exclude-dir=public --exclude-dir=.claude \
  --exclude=CLAUDE.md --exclude=AGENTS.md \
  --exclude=package-lock.json --exclude=yarn.lock --exclude=pnpm-lock.yaml \
  .
```

Lista también todas las ocurrencias de `agéntic*` como **INFO** para que el
revisor humano juzgue si están bien usadas:

```bash
grep -rniE "ag[eé]ntic[oa]s?" --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git \
  --exclude-dir=public --exclude-dir=.claude \
  --exclude=CLAUDE.md --exclude=AGENTS.md \
  --exclude=package-lock.json --exclude=yarn.lock --exclude=pnpm-lock.yaml \
  .
```

### 3. Categoría correcta

La categoría literal debe ser **"CDP para hoteles"** o **"CDP del sector
hotelero"**. Marca como **WARN** cualquier `CDP` seguido inmediatamente de
algo distinto a "para hoteles" o "del sector hotelero":

```bash
grep -rniE "\bCDP\b[^.\n]{0,40}" --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git \
  --exclude-dir=public --exclude-dir=.claude \
  --exclude=CLAUDE.md --exclude=AGENTS.md \
  --exclude=package-lock.json --exclude=yarn.lock --exclude=pnpm-lock.yaml \
  . \
  | grep -viE "CDP (para hoteles|del sector hotelero)" \
  | grep -viE "CDP\b[[:space:]]*[.,;:)]"
```

Las menciones de `CDP` aisladas (sin contexto de categoría) son aceptables;
solo las flag si parecen estar redefiniendo la categoría.

### 4. Tipografías prohibidas en código

**Importante**: usar `\b` para evitar falsos positivos (`Inter` matchea
`Internacionales`, `pointer-events`, etc.).

```bash
grep -rnE "\b(Inter|Roboto|Arial|Plus Jakarta|General Sans)\b" \
  --include="*.ts" --include="*.tsx" --include="*.css" \
  --include="*.js" --include="*.jsx" --include="*.mjs" \
  --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git \
  --exclude-dir=public --exclude-dir=.claude \
  --exclude=CLAUDE.md --exclude=AGENTS.md \
  --exclude=package-lock.json --exclude=yarn.lock --exclude=pnpm-lock.yaml \
  .
```

Para cada match, lee el contexto y degrada a **INFO** si es:
- Un comentario (`//`, `/*`, `*`) explicando algo (ej. "como General Sans en…").
- Una string sin relación con tipografía (improbable pero posible).

Cada match en contexto de `font-family`, `next/font`, clase `font-[...]`,
import, etc. es **FAIL**.

### 5. Narrativa "Del CRM al CDP"

Esto es informativo, no FAIL. Comprueba si aparece la narrativa central en
las páginas de marketing y reporta su presencia o ausencia:

```bash
grep -rniE "del CRM al CDP|venta directa|dependencia de OTAs" \
  components/ app/ lib/content/
```

## Formato de salida

Estructura el reporte así, sin emojis:

```
brand-guard report
==================

[FAIL]  Términos prohibidos (CBP / Customer Business Platform)
  - <archivo>:<línea>  <fragmento>
  - ...
  (o "ninguno" si está limpio)

[WARN]  "Agéntico" — revisar uso
  - <archivo>:<línea>  <fragmento>

[WARN]  CDP usado fuera de categoría canónica
  - <archivo>:<línea>  <fragmento>

[FAIL]  Tipografías prohibidas
  - <archivo>:<línea>  <fragmento>

[INFO]  Narrativa "del CRM al CDP"
  - <archivo>:<línea>  <fragmento>

Resumen: X FAIL, Y WARN
```

Si hay 0 FAIL, termina con: `OK — sin bloqueos críticos.`
Si hay FAIL, termina con: `BLOQUEO — corregir antes de commit.`

## Notas para el agente

- **No** intentes "arreglar" los fallos automáticamente. Solo reporta.
- Si el usuario pide `/brand-guard fix`, entonces propón un diff por cada
  FAIL y espera confirmación antes de aplicar.
- Si encuentras un caso ambiguo (ej. "agéntico" en un comentario técnico,
  no en copy), márcalo como WARN con nota: "posible falso positivo, revisar
  contexto".
