# Método de validación de keywords — Guía para el equipo

Esta guía explica cómo validar el volumen y la dificultad de las keywords propuestas en `keyword-map.csv` usando **Google Keyword Planner** (gratis). Tiempo estimado: 30-45 min para las 37 URLs del alcance inicial.

## Antes de empezar

**Necesitas**:
- Una cuenta de Google (cualquier Gmail sirve).
- Acceso a Google Ads (`ads.google.com`).
- El CSV `keyword-map.csv` abierto en Sheets/Excel.

**No necesitas**:
- Pagar una campaña activa (puedes usar Keyword Planner sin gasto).
- Tarjeta de crédito (si te la pide al crear cuenta, elige "Modo experto" → "Configurar sin campaña").

## Paso 1 — Acceder a Keyword Planner

1. Entra a https://ads.google.com.
2. Si es tu primera vez: clica "Modo experto" (no "Modo simplificado") al crear la cuenta. Te permite saltar la creación de campaña.
3. Una vez dentro: menú superior → **Herramientas** → **Planificación** → **Planificador de palabras clave**.
4. Elige **"Obtener volumen de búsquedas y previsiones"** (la opción de la derecha).

## Paso 2 — Configurar mercado y idioma

En la ventana de Keyword Planner:

1. **Pega las keywords** (una por línea) del CSV — columna `kw_principal` + `kw_secundarias` (separar por línea, no por `|`).
2. Clica "Empezar".
3. En la página de resultados, busca arriba a la izquierda los filtros de **Ubicaciones** e **Idiomas**:
   - **Ubicaciones**: añade España, Colombia, México (cada una por separado para tener volúmenes desglosados — Google permite agrupar pero perdemos detalle por mercado).
   - **Idiomas**: Español.
   - **Redes**: solo "Google" (no "Socios de búsqueda").

**Importante**: para tener volúmenes desglosados por mercado, **repite la consulta 3 veces** cambiando solo la Ubicación: una para España, una para Colombia, una para México. Apunta el rango devuelto en cada caso.

## Paso 3 — Interpretar los rangos de volumen

Google Keyword Planner sin campaña activa devuelve **rangos**, no números exactos:

| Rango mostrado | Interpretación |
|---|---|
| `0 – 10` | Sin volumen útil. Descartar o reasignar. |
| `10 – 100` | Long-tail real. Apta si KD bajo y la intención es transaccional/comercial. |
| `100 – 1K` | Sweet spot para B2B hotelero hispano. Rango típico de las KW de Fideltour. |
| `1K – 10K` | Volumen interesante pero suele venir con KD alto o intención mixta. Validar SERP manualmente. |
| `10K – 100K` | Sospechoso para un nicho hotelero. Probablemente la KW es demasiado genérica → revisa que cumpla la regla del nicho. |
| `100K+` | Casi seguro genérica sin nicho. Descartar (ver regla en plan). |

**Truco para obtener números exactos**: si activas una campaña con presupuesto mínimo (€1/día) durante 24h, Keyword Planner empieza a devolver números exactos. Si necesitas precisión, vale la pena. Si no, los rangos son suficientes para priorizar.

## Paso 4 — Estimar dificultad (KD)

Keyword Planner **no da KD** directamente. Para estimarla sin Ahrefs/Semrush:

1. Mira la columna **"Competencia"** que devuelve Keyword Planner: Baja / Media / Alta.
   - "Competencia" en KP mide competencia **de anuncios**, no orgánica. Es proxy imperfecto pero útil.
2. Mira **"Puja en la parte superior de la página (rango bajo / alto)"**:
   - Pujas altas → mercado competitivo (señal de KD alto orgánico).
   - Pujas bajas → mercado tranquilo (señal de KD bajo, pero también puede indicar poca demanda).
3. **Validación manual de SERP**:
   - Busca la KW en Google.es en modo incógnito.
   - Cuenta resultados orgánicos:
     - Si los 10 primeros son **competidores directos** (Revinate, Cendyn, etc.) → KD alto.
     - Si los 10 primeros son **blogs sectoriales o long-tail** → KD bajo a medio.
     - Si los 10 primeros son **Wikipedia, glosarios y resultados genéricos** → la KW no tiene intención hotelera real, descartar.
   - Anota cualquier "People Also Ask" o featured snippet — son oportunidades de rich result.

**Escala simplificada para Fideltour** (sin herramienta pro):

| Señales | KD estimado | Etiqueta CSV |
|---|---|---|
| Competidores directos en top 5 + puja alta | 60-80 | "Alto" |
| Mezcla blog/competidor + puja media | 30-50 | "Medio" |
| Blogs long-tail + puja baja + sin competidor en top 5 | 10-30 | "Bajo" |

## Paso 5 — Rellenar el CSV

Por cada fila del CSV, completa:

- `volumen_es` — rango devuelto en KP con Ubicación España.
- `volumen_co` — ídem Colombia.
- `volumen_mx` — ídem México.
- `kd` — etiqueta Bajo/Medio/Alto según escala anterior.
- `notes` — anota lo que detectes:
  - Si la KW propuesta tiene un sinónimo con más volumen, anótalo.
  - Si dos URLs del CSV compiten por KW similares (cannibalization risk), márcalo.
  - Si la SERP sugiere que la intención real es otra (e.g. "qué es CDP" devuelve mayoría posts educativos → es informational, no commercial).

## Paso 6 — Decisiones a tomar después

Tras rellenar el CSV, identifica:

1. **KW a descartar** (volumen < 10 en los 3 mercados) → marcar fila como "DESCARTAR" en `notes`.
2. **KW a reasignar** (volumen alto pero intención no encaja con la URL) → proponer otra URL en `notes`.
3. **KW a confirmar como P0** (volumen útil + KD asumible + alineación URL + nicho hotelero) → estas son las que vamos a perseguir activamente en Fase 4.
4. **KW nuevas que aparezcan** (mientras explorabas, KP sugiere otras frases relacionadas con mayor volumen) → añadir filas al CSV.

## Paso 7 — Review conjunta (yo + equipo)

Cuando tengas el CSV rellenado:

1. Compártelo conmigo.
2. Hacemos cannibalization check sistemático: `cut -d',' -f4 keyword-map.csv | sort | uniq -d` debe devolver vacío.
3. Ajustamos KW principales según hallazgos del equipo.
4. Decidimos prioridad final (P0/P1/P2) por URL.
5. Commit del CSV en `main` = **firma de Fase 0**.

A partir de ahí podemos arrancar la **Fase 4 del plan SEO v2**: reescribir titles, descriptions y heros de las landings basados en las KW firmadas.

## Recursos adicionales

- **Google Trends** (https://trends.google.es): para comparar 2-4 KW entre sí y ver estacionalidad por mercado. Útil cuando dudas entre dos variantes ("CRM hotelero" vs "CRM para hoteles").
- **AnswerThePublic** (https://answerthepublic.com): te da preguntas reales que la gente formula sobre una KW seed. Insumo directo para enriquecer FAQ schemas (gap 🟠 #5 del plan v2).
- **SERP manual en incógnito**: la fuente más fiable para entender intención real. Hazla siempre antes de marcar una KW como P0.
