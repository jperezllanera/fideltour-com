# Fideltour Design System — referencia oficial

Este documento es la copia local del manifiesto de marca compartido por el
equipo. Las reglas que listamos aquí son la fuente de verdad para
decisiones de marca; CLAUDE.md y `app/globals.css` son los que las
**implementan** en este repo.

> Nota operativa: el documento original menciona un token lime/chartreuse
> (`#B4D335`) para resaltado de palabras clave. **No lo usamos** —
> decisión explícita: en este proyecto solo el cian/turquesa (la anilla)
> actúa como acento. Ningún verde.

---

## ¿Quién es Fideltour?

Fideltour es una plataforma B2B SaaS (CRM + CDP) creada por y para
hoteleros. Conecta, conoce y fideliza al cliente del hotel, ayudando a
las cadenas y hoteles independientes a unificar sus datos propios,
segmentar a sus huéspedes y aumentar la venta directa reduciendo
dependencia de OTAs.

Módulos: CRM, CDP, Identity, Campaigns, Automation, Rewards, Reporting/BI.

Posicionamiento: "El CRM 100 % hotelero". Mejor CRM de Europa (European
Technology Awards).

Audiencia: equipos de marketing, revenue, dirección y CRM en cadenas y
hoteles independientes (España, LATAM, África, Asia).

---

## Tono y voz

Español neutro, profesional pero cercano, directo y orientado a
resultados de negocio. La voz es la de un compañero hotelero que
entiende el día a día de la propiedad.

- **Tuteo siempre.** "Aumenta tus ventas directas".
- **Primera persona del plural** cuando habla la marca.
- **"Tu hotel", "tus huéspedes", "tu equipo"** — lector protagonista.
- Frases cortas, verbos en imperativo o infinitivo para CTAs.
- Listas de tres: "Conecta, conoce y fideliza" es la firma.
- Cifras concretas: "15-30 % más venta directa", "WhatsApp 99 % apertura".
- Sentence case en cuerpo y UI. Acrónimos en mayúsculas: CRM, CDP, OTA…
- **Sin emojis** en producto, decks ni contratos.
- **Sin separadores ornamentales** (`═══`, `▬▬▬`).

### Vocabulario
- **Huésped** > "cliente" para el usuario final del hotel.
- **Hotelero/a** > "cliente" para el comprador B2B.
- Venta directa, fidelización, dato propio, dato anónimo, guest journey,
  upselling segmentado, omnicanalidad, pre/durante/post-estancia.
- "Por y para hoteleros" — tagline recurrente.
- "Escalera de la fidelización" — metáfora propia (CRM → CDP).

### Resaltado
- Una palabra clave por frase recibe color **cian** (la anilla,
  `var(--brand)` en este repo). **No verde, no lime.**
- O bien una palabra recibe la **anilla turquesa** alrededor.
- **Brackets** `> CHECKLIST <` en eyebrows y etiquetas de sección.

---

## Color — paleta y reglas

| Token oficial | Hex | Token en este repo | Rol |
|---|---|---|---|
| `--ft-navy-900` | `#06182B` | (no implementado) | Fondos hero más profundos |
| `--ft-navy-800` | `#0A2540` | `--brand-navy` (cobalto #1A4A7E) | Color base dominante |
| `--ft-navy-700` | `#0D2B47` | `--brand-navy-deep` (#0F3560) | Variante navy |
| `--ft-cyan-500` | `#4EC5C5` | `--brand` (cian #25CAD2) | **Acento — la anilla** |
| ~~`--ft-lime-400`~~ | ~~`#B4D335`~~ | **DESCARTADO** | ~~Resaltado de palabras clave~~ |
| `--ft-white` | `#FFFFFF` | `--neutral-50` | Texto sobre navy |
| `--ft-gray-100` | `#E8ECEF` | `--neutral-100` / `--muted` | Fondos secundarios claros |

**Reglas:**
- **Navy = fondo dominante.** El sistema respira con grandes superficies
  de navy y blanco.
- **Cian = accent, no fondo.** Es la anilla — para acentos significativos
  (palabras-ancla, eyebrows, bordes activos, métricas pequeñas).
- **Nada de verde / lime / mint.** No para texto, no para fondos, no
  para iconos.
- **Sin gradientes saturados.** El único gradiente permitido es el de
  CTA (cian → azul medio), suave.

---

## Tipografía

- **Familia única: GothamRnd** (geométrica). Pesos: Light 300, Book 400,
  Medium 500, Bold 700.
- En este repo el sustituto activo es **Nunito** (decisión ya tomada en
  `app/fonts.ts`). Si llegan los OTFs de GothamRnd se migra.
- Máximo 2 pesos por bloque. Bold + Book.
- Jerarquía por tamaño, no por peso.
- Sentence case en cuerpo, no Title Case en español.

---

## Espaciado, radios, sombras

- 8pt grid.
- Radios generosos: 12 / 20 / 28 px y pill 999 px para botones.
- **No hay esquinas a 0** — todo tiene curvatura (eco de la anilla).
- Sombras suaves, en modo oscuro con base navy `#06182B` (no negro puro).

---

## Imágenes y fotografía

- Alta calidad del entorno hotelero (recepción, huéspedes, móvil, equipo).
- Overlay navy semitransparente sobre toda fotografía pública.
- Estilo cinematográfico, contraste medio-alto, premium pero humano.
- Personas reales en contexto. Sin stock genérico evidente.
- Sin grano excesivo, sin filtros vintage, sin b&n.

## Motivos gráficos

1. **Anilla turquesa** — círculo abierto. Para rodear palabras-ancla,
   fechas señaladas, iconos protagonistas, retratos.
2. **Brackets `> texto <`** en eyebrows.
3. **Líneas finas blancas** (1 px, 14 % alpha) sobre navy.
4. **Iconos minimalistas** (lucide-react, stroke 1.5–2 px, sin relleno).
5. **Botones pill** plano o con degradado sutil cian → azul.

## Animación

- Duraciones cortas: 140 / 220 / 420 ms.
- Easing `cubic-bezier(0.20, 0.80, 0.20, 1.00)` — out, snappy.
- Sin bounces, sin spring elásticos.

## Iconografía

- **Lucide** (línea fina). Stroke uniforme, geometría limpia.
- Tamaño base 20 px UI densa, 24 px UI normal, 32 px cabeceras.
- Color hereda `currentColor`. En navy se usa blanco al 72 %.
- Un icono puede aparecer rodeado por la anilla cian cuando es
  protagonista.

## Logos

- `light` — wordmark gris-oscuro + anilla turquesa, sobre fondo claro.
- `dark` — wordmark blanco + anilla turquesa, sobre fondo oscuro.
- `anilla` — solo el símbolo, para favicon o piezas pequeñas.

**Reglas del logo:**
- Nunca rellenar la anilla.
- Nunca distorsionar.
- Nunca recolorear: gris-oscuro o blanco para wordmark; cian para
  anilla. Punto.

---

## Qué evitar

- Emojis decorativos en piezas serias.
- Separadores ornamentales (`═══`, viñetas glifo).
- Gradientes saturados (rosa-morado, naranja-amarillo).
- Verde / lime / mint en cualquier rol.
- Ilustraciones cartoon o flat-design genérico.
- Fotografía de stock evidente.
- Mezclar más de 2 pesos tipográficos en un mismo bloque.
- Esquinas duras a 0 px.

---

*Última actualización: 2026-05-26 — adoptada la regla "no verde, solo
cian" tras compartir el design system oficial.*
