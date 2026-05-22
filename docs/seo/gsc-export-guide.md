# Guía — Exportar datos de Google Search Console

Esta guía explica cómo exportar los 2 datasets que Claude necesita para completar la Fase A del [plan de preservación](./migration-preservation.md):

1. **GSC Pages 12m** — URLs del sitio con tráfico orgánico de los últimos 12 meses.
2. **GSC Queries 12m** — palabras clave por las que el sitio rankea.

Tiempo estimado: 15-20 minutos.

## Antes de empezar

- Tienes acceso a https://search.google.com/search-console.
- La propiedad `fideltour.com` está verificada (o `https://www.fideltour.com`).
- Si hay varias propiedades (`fideltour.com`, `www.fideltour.com`, `sc-domain:fideltour.com`), usa la `sc-domain:` siempre — captura todo el dominio sin discriminar subdominio o protocolo.

---

## 1. Exportar GSC Pages 12m

### Paso 1.1 — Acceder al informe de rendimiento

1. Entra a https://search.google.com/search-console.
2. En el selector superior izquierdo, elige la propiedad `fideltour.com`.
3. Menú izquierdo → **Rendimiento** → **Resultados de la búsqueda**.

### Paso 1.2 — Configurar el rango de fechas

1. En la barra superior del informe, busca el chip de **Fecha** (suele decir "Últimos 3 meses" por defecto).
2. Haz clic en ese chip.
3. Selecciona **Personalizar**.
4. Configura:
   - **Desde**: hoy menos 12 meses (ej. si hoy es 22/05/2026 → 22/05/2025).
   - **Hasta**: hoy.
5. Aplicar.

**Nota**: GSC solo conserva 16 meses de histórico. Si la migración WP es muy reciente, puede que tengas datos completos hasta dentro de 1 año.

### Paso 1.3 — Activar todas las métricas

Encima del gráfico hay 4 chips: **Clics totales**, **Impresiones totales**, **CTR medio**, **Posición media**.

Asegúrate de que los **4 están activos** (azul intenso). Por defecto, "CTR medio" y "Posición media" pueden estar desactivados — actívalos.

### Paso 1.4 — Cambiar la vista a "Páginas"

Debajo del gráfico hay pestañas: **Consultas**, **Páginas**, **Países**, **Dispositivos**, **Apariencia en la Búsqueda**, **Fechas**.

Haz clic en **Páginas**.

Esto muestra una tabla con una fila por URL del sitio + columnas: Clics, Impresiones, CTR, Posición.

### Paso 1.5 — Exportar

1. Esquina superior derecha del informe → botón **Exportar**.
2. Elige una de estas opciones:
   - **Descargar CSV** (recomendado para pasarme el archivo).
   - **Google Sheets** (si prefieres compartir un Sheet).
   - **Excel**.
3. El archivo descargado se llama típicamente `Resultados de la búsqueda.csv` o similar.
4. Renómbralo a `gsc-pages-12m.csv` y guárdalo en `docs/seo/legacy/` (gitignorado si tiene info sensible).

### Resultado esperado

CSV con columnas:
```
URL | Clics | Impresiones | CTR | Posición
```

Probablemente 50-300 filas (una por cada URL que ha tenido al menos una impresión en 12 meses).

---

## 2. Exportar GSC Queries 12m

### Paso 2.1 — Misma pantalla, cambiar vista

Sin salir del informe de Rendimiento, sin cambiar las fechas:

Pestañas debajo del gráfico → haz clic en **Consultas** (la primera).

### Paso 2.2 — Exportar

1. Mismo botón **Exportar** arriba a la derecha.
2. Descargar como CSV.
3. Renombrar a `gsc-queries-12m.csv`. Guardar en `docs/seo/legacy/`.

### Resultado esperado

CSV con columnas:
```
Consulta | Clics | Impresiones | CTR | Posición
```

Cada fila es una query única que ha mostrado el sitio en SERPs.

**Limitación importante**: GSC anonimiza queries con bajo volumen ("anonymized queries"). En la tabla aparecen como `[Anonimizado]` o simplemente no salen. Los totales del gráfico arriba SIEMPRE son mayores que la suma de la tabla — esto es normal.

---

## 3. (BONUS) Exportar Queries por URL — el dataset más útil

Lo realmente potente para la preservación es saber **qué queries rankea cada URL**. Esto se hace URL por URL:

### Paso 3.1 — Filtrar por URL

1. Estando en la vista **Páginas** (paso 1.4).
2. Haz clic en la fila de una URL concreta (no en la URL en sí; en cualquier celda de la fila).
3. GSC añade automáticamente un filtro de **Página exacta = [esa URL]** arriba del informe.
4. Cambia la vista debajo del gráfico de **Páginas** a **Consultas**.
5. Ahora la tabla muestra las queries que rankean específicamente para esa URL.
6. Exporta CSV.
7. Renómbralo a `gsc-queries-[slug-url].csv`. Por ejemplo: `gsc-queries-crm-hoteles.csv`.

### ¿Para qué URLs hacer esto?

Para las **top 20 con más clics** (ya las viste en el paso 1.4 — ordena la tabla por Clics descendente).

**Si son muchas y manual es tedioso**: usar la API de GSC. Te explico al final.

---

## 4. (BONUS) Exportar backlinks

### Paso 4.1 — Top linking sites

Menú izquierdo → **Enlaces** → en la sección de la derecha "Sitios web con más enlaces" → **MÁS** → botón **Exportar enlaces externos**.

Descarga un ZIP con varios CSVs incluyendo:
- `Más sitios enlazadores.csv` (dominios que enlazan a fideltour.com)
- `Páginas más enlazadas.csv` (URLs nuestras con más backlinks)
- `Textos de enlace principales.csv` (anchor text recibido)

Guárdalo en `docs/seo/legacy/gsc-backlinks/`.

---

## 5. Cómo pasarme los archivos

Tres opciones, ordenadas por preferencia:

1. **Mejor**: subirlos a `docs/seo/legacy/` en este repo (en una rama nueva o local). Yo los leeré directamente con la herramienta Read.
2. **Si tienen info sensible**: pega aquí en el chat las primeras 50 filas del CSV en formato texto. Yo puedo procesar eso aunque no sea ideal.
3. **Si son archivos pequeños**: pega el contenido completo en el chat.

**Importante para privacidad**: los CSVs pueden contener URLs internas/staging que no deberían ser públicas. Si subes a este repo, considera añadir `docs/seo/legacy/*.csv` al `.gitignore` antes de hacer commit.

---

## 6. (AVANZADO) Automatizar via API de GSC

Si vais a hacer esto a menudo, vale la pena la API:

1. Habilitar **Google Search Console API** en Google Cloud Console.
2. Crear credenciales OAuth o Service Account.
3. Usar la biblioteca de Python `google-api-python-client` o Node `googleapis`.
4. Endpoint: `searchanalytics.query` con `dimensions: ["page", "query"]`.

Esto da datos no anonimizados (con muestreo grande) y permite scripts reproducibles. Fuera del scope de esta migración, pero útil a futuro.

---

## Mi checklist tras tener los CSVs

Cuando me pases (o suba a `docs/seo/legacy/`):
- `gsc-pages-12m.csv`
- `gsc-queries-12m.csv`

Yo haré:
1. Identifico las 20-30 URLs WP con más clics → priorización por impacto real.
2. Cruzo cada URL con [proposed-redirects.md](./proposed-redirects.md) → confirmo que tiene redirect específico (no cae al catch-all).
3. Añado reglas específicas para URLs EN/PT-PT que tengan tráfico real (si las hay).
4. Cruzo `gsc-queries-12m.csv` con [keyword-map.csv](./keyword-map.csv) → valido cuáles de mis KW propuestas coinciden con queries reales. Las que no coincidan, revisamos.
5. Genero `docs/seo/url-inventory.csv` consolidado con tráfico real por URL.

## Atajos si tienes prisa

Si los pasos detallados son demasiado, lo MÍNIMO necesario para arrancar Fase B (mapping definitivo):

1. Exportar `gsc-pages-12m.csv` (paso 1).
2. Pasármelo o subirlo al repo.

Con eso ya puedo refinar los redirects con datos reales. El paso 2 (queries) y 3 (queries por URL) son útiles pero no bloqueantes para los redirects — sí para validar el `keyword-map.csv` de la fase de optimización futura.
