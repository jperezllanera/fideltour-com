# Estrategia de backlinks — Fideltour

El on-page es solo la mitad. Para una categoría nueva como "CDP para hoteles" en español, los **backlinks pesan más** que el on-page. Sin link building activo, las 45 URLs del [keyword-map](./keyword-map.csv) tendrán techo bajo.

## Diagnóstico inicial

**Pendiente**: el equipo debe auditar el perfil de backlinks actual de fideltour.com antes de invertir. Sin Ahrefs/Semrush propios:

1. Usar https://ahrefs.com/backlink-checker (gratis, hasta 100 backlinks).
2. Usar https://www.semrush.com/backlinks-tool/ (con cuenta gratuita).
3. Google Search Console → Links → Top linking sites.

Apuntar en este doc:
- **Total backlinks actuales**: ?
- **Dominios referidos únicos**: ?
- **Domain Rating estimado**: ?
- **Top 5 enlaces de mayor autoridad recibidos**: ?

Sin esta foto, optimizamos a ciegas.

## 7 tácticas concretas por orden de ROI esperado

### 1. Listings sectoriales hoteleros (ROI alto, esfuerzo bajo)

Directorios y marketplaces donde tu competencia ya está pero tú probablemente no:

- **HotelTechReport** (hoteltechreport.com) — el referente. Reseñas + categorías. Cada listing da do-follow + tráfico cualificado.
- **Hospitality Net** (hospitalitynet.org) — directorio + sección de press releases.
- **Hospitality Tech** (hospitalitytech.com) — listings + news submissions.
- **Hotel Business** (hotelbusiness.com) — vendor directory.
- **Skift** (skift.com) — listings premium + posibilidad de PR.
- **PhocusWire** (phocuswire.com) — vendor profiles + news.
- **TecnoHotelNews** (tecnohotelnews.com, ES) — referente español.
- **Hosteltur** (hosteltur.com, ES) — directorio + revista digital.

**Acción concreta**: rellenar el perfil de Fideltour en los 8 listings anteriores en orden. ETA: 2-3 horas/listing. Total: ~20 horas de trabajo para conseguir 8 dofollow de DR 50-70.

### 2. Guest posts en blogs sectoriales hoteleros (ROI alto, esfuerzo medio)

Identificar 10-15 blogs hoteleros hispanos donde proponer 1 post como guest author:

- **TecnoHotelNews** — acepta colaboraciones.
- **Hosteltur** — sección de opinión.
- **CincoTendencias** (tecnología hotelera).
- **HotelClub** o blogs de cadenas (Riu, NH, Meliá tienen blogs corporativos).
- Blogs personales de revenue managers / consultores hoteleros con audiencia.

**Acción**: lista de 15 blogs con email del editor + propuesta de tema personalizada por blog (no plantilla). Conversion rate típica: 1 de cada 5 acepta. Objetivo: 3 guest posts/trimestre.

### 3. Backlinks desde partners (ROI alto, esfuerzo MUY bajo)

[`/partners/`](../../app/partners/page.tsx) ya existe. Cada partner debe enlazar a Fideltour desde su sitio. Hoy probablemente no lo hacen.

**Acción**:
1. Lista de partners actuales (PMS conectados en marketplace, agencias colaboradoras).
2. Email a cada uno pidiendo el enlace recíproco con anchor sugerido.
3. Modelo: "Conectado con Fideltour, la CDP para hoteles" o "Integración disponible con Fideltour CDP".
4. Quid pro quo: tu marketplace los lista a ellos con enlace dofollow → ellos te enlazan desde su página de integraciones.

ETA: 4 horas para emails. Conversion ~50%. Si tienes 30 partners: 15 backlinks dofollow rápidos.

### 4. PR sectorial activo (ROI medio, esfuerzo medio)

Cada hito de la empresa = oportunidad de PR.

- **Funding rounds, premios, certificaciones** → press release distribuido en hospitalitytech / hospitalitynet / hosteltur. Cada uno deja 1-3 enlaces.
- **Lanzamientos de módulos** → news a TecnoHotelNews y blogs sectoriales.
- **Estudios propios** (ver táctica 5) → press release sectorial.

**Acción**: calendar PR trimestral con 1 hito por trimestre. Sin lista de hitos, no hay PR.

### 5. Linkable assets — estudios y reports (ROI muy alto, esfuerzo alto)

Activo único que **genera links pasivamente durante años**. Ejemplos para Fideltour:

- **"Informe anual de venta directa hotelera en España 2026"** — datos de los hoteles de tu base de clientes (anonimizados). Cualquier post sectorial que hable de venta directa va a citarte.
- **"Benchmark CDP/CRM hotelero — 2026"** — comparativa objetiva del mercado.
- **"Encuesta a 200 hoteleros: dónde está el dato hoy"** — encuesta propia + insights.

**Estructura**: landing dedicada (no blog), formulario opcional de email, PDF descargable, infografía compartible.

**ETA**: 4-6 semanas/estudio. Coste alto pero backlinks duran 3-5 años. ROI a 24 meses muy positivo.

**Asignación URL**: candidato `/recursos/{nombre-estudio}/` o `/recursos/informes/{slug}/`.

### 6. Broken link building (ROI medio, esfuerzo medio)

Encontrar enlaces rotos en sitios sectoriales que apunten a competidores ya extintos o páginas 404, y proponerse como reemplazo.

**Herramienta**: extensión Check My Links + búsqueda manual en los 8 sitios sectoriales del punto 1.

**Conversion**: ~10%. Si encuentras 30 broken links relevantes/trimestre, consigues ~3 backlinks.

### 7. HARO / Connectively / Featured.com (ROI bajo-medio, esfuerzo bajo)

Plataformas donde periodistas piden expert quotes. Inscribirse y responder cuando sale algo sobre hostelería, OTAs, fidelización digital, turismo, IA en hospitality.

**ETA**: 30 min/día revisando peticiones. Conversion: 1 de cada 20 responses publicado. Esfuerzo continuo, no proyecto.

## Lo que NO hacer

- ❌ Comprar backlinks de marketplaces tipo Fiverr/SEOclerks. **Penalización Google segura**.
- ❌ Intercambios masivos de links con sitios fuera del nicho hotelero. No aportan autoridad y diluyen el tema.
- ❌ PBNs (Private Blog Networks). Riesgo de desindexación.
- ❌ Comentarios spam en blogs ajenos con tu link. Inútil + daña marca.
- ❌ Guest posts en blogs de bajo DR (<20) con audiencia genérica. Pierdes tiempo.

## Objetivos numéricos (a confirmar tras diagnóstico)

| Métrica | T1 | T2 | T3 | T4 (12 meses) |
|---------|----|----|----|---------------|
| Listings sectoriales activos | 4 | 8 | 8 | 10 |
| Guest posts publicados | 1 | 3 | 5 | 8-10 |
| Backlinks de partners | 5 | 15 | 25 | 30+ |
| Backlinks totales nuevos/trimestre | 10 | 25 | 40 | 50 |
| Dominios referidos únicos nuevos | 8 | 18 | 30 | 40 |
| Linkable asset publicado | 0 | 1 (estudio) | 1 (benchmark) | 1 (encuesta) |

## Tabla de prioridades

Si solo se puede hacer **una** táctica este trimestre, hacer **#3 (partners)** — máximo ROI por hora invertida.

Si se pueden hacer **tres**, sumar **#1 (listings)** y **#2 (guest posts)** — alta tracción inicial.

Si la empresa puede invertir en un estudio anual, **#5 (linkable assets)** es la palanca a 12-24 meses.

## Responsables (a definir)

| Rol | Tareas |
|-----|--------|
| Owner backlinks | Coordinar todas las tácticas, reportar mensual |
| Outreach (guest posts + partners) | Emails personalizados, seguimiento |
| Content para guest posts y estudios | Redacción + diseño |
| Tracker | Auditoría mensual del perfil con Ahrefs/SC |

Sin un owner asignado, la estrategia es papel mojado.

## Verificación mensual

Primer lunes de cada mes:
1. Run Ahrefs backlink checker → comparar vs mes anterior.
2. GSC → Links → exportar top linking sites.
3. Anotar en este doc o spreadsheet: nuevos dominios referidos, anchors recibidos, páginas de Fideltour más enlazadas.
4. Identificar enlaces tóxicos (sitios spam) y disavow en GSC si aparecen.
