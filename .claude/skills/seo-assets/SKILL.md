---
name: seo-assets
description: Convenciones de nomenclatura SEO-friendly para assets en public/ (kebab-case, prefijos por familia, extensiones óptimas, alt text obligatorio). Usar al añadir, renombrar o auditar imágenes/iconos del sitio, o bajo demanda con "/seo-assets".
---

# seo-assets

Reglas y auditoría de nomenclatura/SEO para todos los assets servidos desde
`public/`. Complementa al hook `PreToolUse` definido en
`.claude/hooks/validate-filename.sh`, que **bloquea** Write de ficheros mal
nombrados antes de que lleguen al disco.

## Por qué importa

- Google indexa el nombre del fichero como señal de relevancia. `IMG_1234.JPG`
  no posiciona; `hero-dashboard-fidelidad-hotelera.webp` sí.
- Vercel/Next sirve mejor formatos modernos (`webp`/`avif`) con menos peso.
- Nombres consistentes evitan duplicados (`logo.png` vs `Logo.PNG` vs
  `logo-1.png`) y facilitan refactors.
- El branding hotelero exige slugs reconocibles (`cliente-hipotels`, no
  `client-2`).
- Imágenes ligeras = LCP rápido = mejor posicionamiento + menos coste de
  Vercel image optimization en cada request.

## Presupuestos de peso por familia (cumplir SIEMPRE)

| Familia                | Calidad WebP   | Budget    | Resolución máxima recomendada |
| ---------------------- | -------------- | --------- | ----------------------------- |
| `cliente-*`            | q=90 + alpha   | ≤30 KB    | 320 px ancho (logos pequeños) |
| `marketplace/*`        | q=90 + alpha   | ≤30 KB    | 320 px ancho                  |
| `sello-*`              | q=90 + alpha   | ≤25 KB    | 240 px ancho                  |
| `caso-*`               | q=72-78        | ≤80 KB    | 600 px ancho                  |
| `hero-*`               | q=82 + alpha   | ≤200 KB   | 1200 px ancho                 |
| `bloque-*`             | q=82 + alpha   | ≤200 KB   | 1024 px ancho                 |
| `escalera-*`           | q=78-85 + alpha| ≤80 KB    | 1200 px (desktop) / 600 px (mobile) |
| `fideltour-logo`       | q=90 + alpha   | ≤15 KB    | 600 px ancho                  |

**Verificación automática**: el script `scripts/convert-images.mjs --audit`
recorre `public/` y falla con `exit 1` si encuentra:

- Algún `.png`/`.jpg` que no esté en la whitelist (solo `fideltour-logo.png`
  por ahora — el PNG ya es más ligero que su WebP equivalente).
- Algún `.webp` por encima de su budget de familia.

Está cableado en `.husky/pre-commit` como `npm run check-images`. Si lo
fallas no podrás hacer commit hasta convertir / optimizar.

## Convenciones (las hace cumplir el hook)

### Caracteres permitidos en el basename

- **Sí**: `a-z`, `0-9`, `-` (guion medio), `.` (solo para la extensión).
- **No**: mayúsculas, espacios, guiones bajos (`_`), acentos, `ñ`, símbolos.
- Sin guion al inicio/final, sin guiones dobles (`--`).
- Longitud del stem (sin extensión): **3–60 caracteres**.

### Extensiones aceptadas

| Extensión | Uso recomendado                                                  |
| --------- | ---------------------------------------------------------------- |
| `.webp`   | **Default**. Fotos, screenshots, ilustraciones, logos rasterizados |
| `.avif`   | Fotos de alto contraste / grandes (opcional, raro)                |
| `.svg`    | Logos vectoriales, iconos, sellos                                 |
| `.png`    | Excepcional. Solo cuando WebP equivalente es MÁS pesado          |
| `.jpg`    | Legados sin convertir aún. Convertir cuanto antes a `.webp`      |
| `.ico`    | Solo `favicon.ico`                                                |

- **Default: WebP**. Toda imagen nueva entra como `.webp` salvo justificación
  (SVG vectorial, PNG donde sea más ligero, ICO de favicon).
- **Prohibido `.jpeg`** — siempre `.jpg` y si llega así, convertir a `.webp`.
- **Prohibido `.gif`** — usar vídeo o animación CSS.
- **Prohibido `.bmp`, `.tiff`, `.heic`** en `public/`.

## Flujo cuando llega una imagen nueva

1. Mete el original donde sea (recomendación: `public/brand/` con el slug
   definitivo según las familias de la tabla de prefijos).
2. Ejecuta `node scripts/convert-images.mjs`. El script:
   - Convierte cada `.png`/`.jpg` a `.webp` con la calidad de su familia.
   - Reporta tabla "antes → después" y marca los que se pasan de budget.
   - **No** borra originales por defecto (revisa primero el reporte).
3. Verifica que las dimensiones son adecuadas. Si una imagen viene a 2048 px
   y solo se usa a 400 px de display, redimensiónala con:
   ```bash
   node -e "import('sharp').then(({default:s})=>s('public/brand/foo.webp').resize({width:800}).webp({quality:82}).toFile('public/brand/foo-resized.webp'))"
   ```
   Y reemplaza el original.
4. `node scripts/convert-images.mjs --delete` para borrar `.png`/`.jpg`
   originales una vez verificados (los `.webp` se quedan).
5. Actualiza referencias en `.tsx`/`.ts` (`.png` → `.webp`).
6. `npm run check-images` — debe pasar. Si falla, redimensiona o baja
   calidad hasta entrar en budget.
7. `npm run build` para confirmar.

**Excepciones a la conversión** (mantener como PNG):

- `fideltour-logo.png` — el PNG ya es más ligero que el WebP equivalente
  (paletizado óptimo).
- Cualquier asset donde la conversión genere un fichero MÁS pesado: el
  script lo reporta. En ese caso, mantén el PNG y añade el basename a
  `PNG_WHITELIST` en `scripts/convert-images.mjs`.

### Slugs genéricos prohibidos

El hook bloquea cualquier basename que empiece por:

```
image, img, foto, photo, picture, screenshot, captura,
untitled, sin-titulo, sin-nombre, new-file, new-, temp, tmp,
asset, file, copy, copia
```

### Prefijos por familia (en `public/brand/`)

Convención actual del repo (mantener):

| Prefijo               | Qué representa                          | Ejemplo                            |
| --------------------- | --------------------------------------- | ---------------------------------- |
| `cliente-{marca}`     | Logo de cliente hotelero                | `cliente-hipotels.png`             |
| `caso-{slug-hotel}`   | Imagen de caso de éxito                 | `caso-gf-costa-adeje.jpg`          |
| `sello-{programa}`    | Sello institucional (CDTI, ENISA, UE)   | `sello-cdti.png`                   |
| `hero-{contexto}`     | Asset principal de hero                 | `hero-mockup-dispositivos.png`     |
| `bloque-{seccion}`    | Ilustración de bloque de sección        | `bloque-dudas.png`                 |
| `escalera-{variante}` | Diagrama de la escalera de fidelización | `escalera-fidelizacion-desktop.png`|
| `fideltour-{tipo}`    | Asset de marca propio                   | `fideltour-logo.png`               |

Si necesitas una familia nueva, añádela aquí **antes** de subir el primer
fichero.

### Excepciones permitidas

El hook no valida:

- `favicon.ico`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`,
  `README.md`, `.DS_Store`.
- Rutas fuera de `public/` (los nombres de ruta de Next.js tienen sus
  propias convenciones: `page.tsx`, `layout.tsx`, `[slug]/page.tsx`).

## Cómo escribir un nombre correcto

Plantilla mental:

```
{familia}-{slug-descriptivo-en-kebab}.{ext-óptima}
```

Ejemplos buenos:

- `cliente-eurostars.svg` (logo vectorial)
- `caso-ohtels-gran-almeria.webp` (caso de éxito, formato moderno)
- `hero-dashboard-fidelidad-hotelera.webp`
- `sello-pyme-innovadora.png` (transparencia preservada)

Ejemplos malos (el hook bloquea):

- `IMG_2843.JPG` → genérico, mayúsculas, sin slug
- `Logo Hipotels.png` → espacio, mayúsculas
- `foto_hotel_1.jpeg` → guion bajo, slug genérico, extensión incorrecta
- `caso_oh-tels.jpg` → guion bajo mezclado con guion medio
- `nuevo-cliente.png` → empieza por slug genérico (`new-` equivalente)

## Acompañamiento en el código

El nombre del fichero es la mitad del SEO. La otra mitad es cómo se referencia:

1. **`<Image>` de `next/image` siempre con `alt` descriptivo** (no vacío,
   no `"imagen"`). Si el asset es decorativo puro, usar `alt=""` y
   `aria-hidden`. Verifica con:

   ```bash
   grep -rnE "<Image[^>]*>" --include="*.tsx" --include="*.ts" \
     components/ app/ | grep -vE 'alt=' \
     && echo "[FAIL] Image sin alt" || echo "[OK] todas las Image llevan alt"
   ```

2. **`width`/`height` explícitos** en `<Image>` para evitar CLS.

3. **`priority` solo en LCP** (hero principal). El resto debe ser lazy.

## Auditoría manual

### 1. Ficheros con nombres no conformes

```bash
find public/ -type f \
  ! -name 'favicon.ico' ! -name 'robots.txt' ! -name 'sitemap.xml' \
  ! -name 'manifest.webmanifest' ! -name 'README.md' ! -name '.DS_Store' \
  | grep -E '[A-Z]| |_|\.jpeg$|\.gif$|\.bmp$|\.heic$|\.tiff$' \
  || echo "[OK] todos los nombres en public/ son conformes"
```

### 2. Slugs genéricos colados

```bash
find public/ -type f -iregex '.*\(IMG\|image\|foto\|photo\|screenshot\|untitled\|temp\|copy\)[^/]*' \
  || echo "[OK] sin slugs genéricos"
```

### 3. PNG pesados que deberían ser WebP

```bash
find public/ -type f -name "*.png" -size +200k \
  -exec ls -lh {} \; \
  | awk '{print $5, $9}' \
  || echo "[OK] sin PNG >200KB"
```

### 4. JPEG pendiente de normalizar a JPG

```bash
find public/ -type f -iname "*.jpeg"
```

## Formato del reporte

Cuando se invoca `/seo-assets` o se ejecuta auditoría completa:

```
seo-assets report
=================

[FAIL]  Nombres no conformes (mayúsculas, espacios, guion bajo, ext prohibida)
  - <ruta>  <motivo>
  (o "ninguno")

[FAIL]  Slugs genéricos
  - <ruta>  empieza por <prefijo>

[WARN]  PNG >200KB candidatos a .webp
  - <ruta>  <tamaño>

[WARN]  Extensión .jpeg pendiente de renombrar a .jpg
  - <ruta>

[INFO]  Cobertura de alt text en <Image>
  - X de Y Image llevan alt no vacío

Resumen: X FAIL, Y WARN
```

Si hay 0 FAIL: `OK — assets conformes.`
Si hay FAIL: `BLOQUEO — renombrar/optimizar antes de commit.`

## Notas para el agente

- **No** renombres ficheros automáticamente. Para renombrar usa `git mv` y
  espera confirmación del usuario (rompe referencias).
- Si el hook bloquea un Write legítimo (caso raro), propón al usuario añadir
  el patrón a la lista de excepciones en `.claude/hooks/validate-filename.sh`,
  **no** desactives el hook.
- Para renombres masivos, genera primero un diff de `git mv` propuesto y
  espera revisión.
