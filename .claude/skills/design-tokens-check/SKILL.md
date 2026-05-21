---
name: design-tokens-check
description: Verifica que el código respeta el sistema de diseño Aurora Bento (tokens de globals.css, sin colores HEX sueltos, sin paletas prohibidas, color de marca como acento no como fondo). Usar tras editar componentes/secciones o bajo demanda con "/design-tokens-check".
---

# design-tokens-check

Auditoría de cumplimiento del sistema de diseño "Aurora Bento" definido en
`app/globals.css` y `CLAUDE.md`.

## Alcance

Audita por defecto `app/`, `components/` y cualquier `.css` fuera de
`node_modules`/`.next`. Si el usuario pasa un path, audita solo ese path.

## Checks

### 1. Colores HEX o RGB sueltos en componentes

Los HEX/RGB/HSL solo deberían vivir en `app/globals.css` (definición de
tokens). En `.tsx`/`.ts`/`.jsx` deben usarse clases Tailwind que apunten a
tokens (`bg-background`, `text-foreground`, `bg-primary`, etc.) o variables
CSS (`var(--neutral-100)`).

```bash
grep -rnE "#[0-9a-fA-F]{3,8}\b|rgb\(|rgba\(|hsl\(|hsla\(" \
  --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/
```

Para cada match, clasifica según contexto:

- **FAIL**: valor de color en estilo inline o variable de estilo
  (`style={{ color: '#ff0000' }}`, `const accent = "#ff6b35"`).
- **WARN**: HEX/RGB dentro de una clase arbitraria Tailwind
  (`bg-[radial-gradient(...rgba(...)...)]`, `drop-shadow-[...rgba(0,0,0,0.35)]`).
  Suele ser legítimo para efectos puntuales (sombras, gradientes mesh) pero
  conviene revisar si podría tokenizarse.
- **INFO**: HEX en comentarios (`// #575756`, `* tokens del logo:`). No
  ejecutado, solo documental.
- **Ignorar**: `components/brand/logo.tsx` — es placeholder explícitamente
  documentado en CLAUDE.md como TODO hasta tener SVG real.

### 2. Paletas Tailwind prohibidas

El acento es el color de marca. Paletas genéricas como `purple-*`,
`indigo-*`, `violet-*`, `fuchsia-*` están prohibidas (degradados morados
genéricos). También `blue-*`, `green-*`, `red-*` etc. cuando se usan como
fondo de secciones grandes — escala neutra cálida y `primary` son la regla.

```bash
grep -rnE "\b(bg|text|border|ring|from|to|via)-(purple|indigo|violet|fuchsia)-[0-9]{2,3}\b" \
  --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/
```

Cada match es **FAIL**.

Para otras paletas Tailwind (`slate-*`, `gray-*`, `zinc-*`, `blue-*`,
`emerald-*`, etc.), reporta como **WARN** — pueden ser válidas en gráficos
o iconos puntuales, pero suelen indicar que no se está usando el token
semántico.

```bash
grep -rnE "\b(bg|text|border|ring)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|rose|pink)-[0-9]{2,3}\b" \
  --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/
```

### 3. Color de marca como fondo dominante

`bg-primary` aplicado a un `<section>` o a un contenedor que ocupa casi
toda la pantalla es un anti-patrón: el color de marca es **acento**, no
fondo dominante. Marca como **WARN** cualquier uso de `bg-primary`
combinado con un `<section`, `min-h-screen`, `h-screen` o clases de
contenedor grande:

```bash
grep -rnE "bg-primary" \
  --include="*.tsx" --include="*.jsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/
```

Para cada match, lee el contexto (±5 líneas) y decide:
- `<button>`, `<Button>`, `bg-primary text-primary-foreground` en CTA → **OK**.
- Bordes activos, badges, métricas, indicadores → **OK**.
- `<section className="... bg-primary ...">` → **FAIL**.
- Contenedor con `min-h-screen` o similar + `bg-primary` → **FAIL**.

### 4. Degradados sospechosos

Cualquier `bg-gradient-*` con paletas prohibidas o que no use tokens del
sistema:

```bash
grep -rnE "bg-gradient-(to|from)-|bg-\[linear-gradient" \
  --include="*.tsx" --include="*.jsx" --include="*.css" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/
```

Reporta como **INFO** todos los degradados encontrados. **FAIL** si
incluyen paletas de § 2.

### 5. Radios y sombras fuera del sistema

El sistema define `--radius`, `var(--shadow-soft)`, `var(--shadow-bento)`,
`var(--shadow-elevated)`. Usos arbitrarios sugieren desviación:

```bash
grep -rnE "\brounded-(none|sm|md|lg|xl|2xl|3xl|full)\b|\bshadow-(sm|md|lg|xl|2xl|inner|none)\b|\brounded-\[|\bshadow-\[" \
  --include="*.tsx" --include="*.jsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/
```

Reporta como **INFO** (no FAIL — Tailwind defaults a veces son aceptables).
Solo marca como **WARN** los `rounded-[...]` y `shadow-[...]` arbitrarios.

### 6. Tipografías fuera de las dos familias permitidas

`font-sans` (Nunito) y `font-mono` (Instrument Mono) son las únicas.
`font-serif`, `font-[Inter]`, `font-[Roboto]`, etc. son FAIL:

```bash
grep -rnE "\bfont-(serif|\[)" \
  --include="*.tsx" --include="*.jsx" --include="*.css" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/
```

### 7. Inline `style={{}}` en JSX

Cada propiedad CSS debe vivir en `app/globals.css` o expresarse vía Tailwind
utility apuntando a tokens. El único uso legítimo de `style={{}}` es pasar
un **valor de runtime** que CSS no puede conocer (índice de animación,
altura dinámica de iframe, etc.) **y solo como variable CSS**, no como
declaración de estilo directa.

```bash
grep -rnE "style=\{\{" \
  --include="*.tsx" --include="*.jsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/ | grep -v "components/ui/"
```

Clasificar cada match:

- **OK**: `style={{ ["--i" as never]: i }}` o cualquier `style` que solo
  setee custom properties (`--*`). El CSS las consume.
- **OK**: `style={{ height: \`${x}px\` }}` donde `x` es un valor runtime
  imposible de tokenizar (dimensión calculada por React state). Acompañar
  siempre con un comentario explicando por qué.
- **FAIL**: cualquier `style={{ color, backgroundColor, fontSize, fontWeight,
  margin, padding, display, visibility }}` con valores literales — debe
  ser className apuntando a token o utility de Tailwind.

### 8. Arbitrary Tailwind values (`text-[XXpx]`, `leading-[X.XX]`, `font-[XXX]`, `tracking-[X.XX]`)

El sistema define `.text-eyebrow`, `.text-eyebrow-sm`, `.text-2xs`,
`.text-body-sm`, `.text-body-md`, y headings base. Cualquier
`text-[11px]`/`text-[44px]`/`leading-[1.05]` indica que se está esquivando
el sistema:

```bash
grep -rnE "\b(text|leading|font|tracking)-\[" \
  --include="*.tsx" --include="*.jsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/ | grep -v "components/ui/"
```

Cada match es **FAIL** salvo:

- Valores ya catalogados como excepción (mostrar `globals.css` para confirmar).
- Si el match está dentro de un `cn()` proveniente de un componente shadcn
  bajo `components/ui/`, degradar a **WARN**.

### 9. Headings semánticos (`<h1>`/`<h2>`/`<h3>`) — no `<div>` disfrazados

Texto de gran tamaño debe vivir en un heading real para SEO y accesibilidad.
Un `<div>` o `<span>` con `text-3xl font-bold` (o más) es **FAIL**:

```bash
grep -rnE "<(div|span|p)[^>]*className=\"[^\"]*\\b(text-(2xl|3xl|4xl|5xl|6xl|7xl)|h-mega|h-cta)[^\"]*\\bfont-(bold|semibold|extrabold)" \
  --include="*.tsx" --include="*.jsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/ | grep -v "components/ui/"
```

Cualquier match: convertir el elemento al `<hN>` que toque por jerarquía
(sin saltar niveles).

### 10. Headings con clases redundantes de la base

Los `h1`/`h2`/`h3`/`h4` ya reciben `font-sans`, `font-bold`, `tracking-tight`
y `color: brand-navy` desde `@layer base`. Repetir esas clases en el JSX
es ruido:

```bash
grep -rnE "<h[1-4][^>]*className=\"[^\"]*\\b(font-sans|font-bold|tracking-tight|text-brand-navy)\\b" \
  --include="*.tsx" --include="*.jsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/ | grep -v "components/ui/"
```

Cada match es **WARN** (no rompe nada visualmente, pero hay que limpiar
para que el `@layer base` siga siendo la única fuente de verdad).

## Formato de salida

```
design-tokens-check report
==========================

[FAIL]  Colores HEX/RGB sueltos
  - <archivo>:<línea>  <fragmento>

[FAIL]  Paletas prohibidas (purple/indigo/violet/fuchsia)
  - <archivo>:<línea>  <fragmento>

[WARN]  Otras paletas Tailwind (probablemente deberían usar token)
  - <archivo>:<línea>  <fragmento>

[WARN]  bg-primary como fondo dominante
  - <archivo>:<línea>  <fragmento>

[FAIL]  Tipografías fuera del sistema
  - <archivo>:<línea>  <fragmento>

[FAIL]  Inline style={{}} con valores literales (no CSS vars)
  - <archivo>:<línea>  <fragmento>

[FAIL]  Arbitrary Tailwind values (text-[XXpx], leading-[X.XX], font-[XXX], tracking-[X.XX])
  - <archivo>:<línea>  <fragmento>

[FAIL]  <div>/<span>/<p> disfrazado de heading (text-3xl+ font-bold)
  - <archivo>:<línea>  <fragmento>

[WARN]  Heading con clases redundantes de la base
  - <archivo>:<línea>  <fragmento>

[INFO]  Degradados detectados
  - <archivo>:<línea>  <fragmento>

[WARN]  Radios/sombras arbitrarias
  - <archivo>:<línea>  <fragmento>

Resumen: X FAIL, Y WARN, Z INFO
```

Si hay 0 FAIL: `OK — sin bloqueos críticos.`
Si hay FAIL: `BLOQUEO — corregir antes de commit.`

## Notas para el agente

- **Excepciones legítimas**: `app/globals.css` puede tener HEX/RGB (define
  los tokens). No la audites en § 1.
- **No autofix**. Reporta y, si el usuario pide `/design-tokens-check fix`,
  propón diffs uno a uno con sustitución sugerida (`#FF6B35` → `var(--brand-primary)`,
  `bg-purple-500` → `bg-primary`, etc.) y espera confirmación.
- Si el componente es de `components/ui/` (shadcn auto-generado), las
  paletas `slate`/`gray`/`zinc` suelen venir de la plantilla — degrada
  a **INFO** en ese path.
