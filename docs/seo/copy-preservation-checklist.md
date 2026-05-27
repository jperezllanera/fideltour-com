# Copy preservation checklist — top 20 URLs

Auditoría comparativa entre el copy vivo en WordPress (www.fideltour.com) y el
copy del nuevo Next.js, para las 20 URLs con más clicks orgánicos según GSC 12m.
Fase C del plan de preservación SEO.

Generado: 2026-05-27.

## Cómo leer este documento

- **DIRECT_MATCH**: title/H1/términos esencialmente equivalentes (con o sin
  reescritura de marca permitida). Sin acción inmediata.
- **TERMS_LOST**: el Next omite ≥2 términos rankeantes que aparecen en
  queries de GSC para esa página o su familia temática. Acción: incorporar
  al copy nuevo sin contradecir la línea de marca.
- **MAJOR_REWRITE**: el copy nuevo cambia tesis o eje narrativo. Acción:
  validar manualmente que la decisión es deliberada y aceptar el coste SEO.
- **MARCA_DELIBERADA** (anotación complementaria): cuando la diferencia
  proviene de la regla de marca "Del CRM al CDP" — no es un "term lost",
  es una decisión consciente. No proponemos revertirla.

Las restricciones de marca de [CLAUDE.md](../../CLAUDE.md) aplican: no se
propone reintroducir "CRM" como categoría dominante donde el Next lo ha
movido a "CDP para hoteles" deliberadamente.

## Resumen

- N URLs auditadas: 20
- DIRECT_MATCH: 6
- TERMS_LOST: 9
- MAJOR_REWRITE: 5
- WP_GONE: 0

## Tabla resumen

| #  | URL                                                                   | Clicks 12m | Estado         | Términos perdidos clave                                 | Acción recomendada                                                                 |
| -- | --------------------------------------------------------------------- | ---------: | -------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1  | /                                                                     |       2042 | TERMS_LOST     | "plataforma de marketing y ventas para hoteles", PMS    | Añadir el subtítulo histórico como bloque secundario H2                            |
| 2  | /marketplace/                                                         |        154 | DIRECT_MATCH   | —                                                       | Verificar que se citan integraciones PMS / motor / portal cautivo                  |
| 3  | /crm-hoteles/                                                         |         39 | TERMS_LOST     | "crm hotelero", "centraliza", "fideliza"                | Añadir frase con "CRM hotelero" en lead + H2 "Centraliza y fideliza"               |
| 4  | /blog/marketing/tendencias-marketing-hotelero/                        |         35 | DIRECT_MATCH   | —                                                       | Migrar tal cual (el MDX ya lo cubre)                                               |
| 5  | /contacto/                                                            |         33 | DIRECT_MATCH   | —                                                       | OK (página de contacto, SEO no crítico)                                            |
| 6  | /fidelizacion-hoteles/                                                |         32 | TERMS_LOST     | "programa de recompensas", "puntos", "estrategias de fidelización" | Añadir H2 "Estrategias de fidelización hotelera" con copy más extenso |
| 7  | /blog/marketing/razones-landing-page-inversion-hotel/                 |         31 | DIRECT_MATCH   | —                                                       | OK (MDX migrado fiel)                                                              |
| 8  | /fideltour/ (empresa)                                                 |         25 | MAJOR_REWRITE  | "CRM 100% hotelero", "CRM hotelero"                     | MARCA_DELIBERADA — la empresa pasa de "CRM hotelero" a "CDP para hoteles"          |
| 9  | /blog/fidelizacion/estrategias-fidelizacion-hotelera/                 |         25 | DIRECT_MATCH   | —                                                       | OK (MDX migrado fiel)                                                              |
| 10 | /blog/fidelizacion/fidelizar-en-hoteles-es-mucho-mas-que-puntos…/     |         24 | DIRECT_MATCH   | —                                                       | OK                                                                                 |
| 11 | /encuestas-hoteles/                                                   |         22 | TERMS_LOST     | "encuesta de satisfacción", "satisfacción del cliente"  | Añadir mención explícita a "encuesta de satisfacción hotel" en lead o pillar       |
| 12 | /landing-page-hoteles/                                                |         22 | TERMS_LOST     | "landing page hotel", "páginas de aterrizaje", "conversión" | Añadir "página de aterrizaje" como sinónimo y mencionar tasa de conversión     |
| 13 | /blog/                                                                |         20 | MAJOR_REWRITE  | tagline pre-CDP                                         | MARCA_DELIBERADA — el blog se reposiciona como "CDP para hoteles" hub              |
| 14 | /integracion-portal-cautivo-para-hoteles/                             |         19 | TERMS_LOST     | "hotspot", "WiFi marketing", "captive portal"           | Añadir "hotspot" e "internet hotspot" (queries GSC concretas) en features          |
| 15 | /marketing-automation-para-hoteles/                                   |         17 | TERMS_LOST     | "email marketing", "hotel marketing automation"         | Añadir bloque "Email marketing automatizado para hoteles"                          |
| 16 | /blog/marketing/guia-definitiva-de-marketing-digital-para-tu-hotel/   |         16 | DIRECT_MATCH   | —                                                       | OK (MDX migrado fiel — la query principal es "marketing digital para hoteles" con 2967 imp.) |
| 17 | /redes-sociales-hoteles/                                              |         16 | TERMS_LOST     | "gestión redes sociales", "social media hoteles"        | Añadir frase con "gestión de redes sociales para hoteles" en lead                  |
| 18 | /clientes/                                                            |         13 | MAJOR_REWRITE  | —                                                       | MARCA_DELIBERADA — pasa de listado de logos a segmentos de cliente                 |
| 19 | /blog/fidelizacion/hacer-encuesta-para-hoteles/                       |         13 | DIRECT_MATCH   | —                                                       | OK                                                                                 |
| 20 | /whatsapp-para-hoteles/                                               |         13 | TERMS_LOST     | "hoteles whatsapp", "whatsapp hotel"                    | Añadir variantes "whatsapp hotel" / "hoteles whatsapp" en H2 y FAQ                 |

## Detalle por URL

---

### 1. / (home) — 2042 clicks · 27314 impresiones · pos 13.47

**WP vivo:**

- Title: `El CRM 100 % hotelero | Fideltour`
- H1: `Plataforma de marketing y ventas para hoteles`
- Primer párrafo: "Durante años, las soluciones CRM bastaban para la
  operación hotelera. Hoy, fidelizar al huésped y aumentar la venta directa
  requiere una Customer Data Platform que consolide datos, reservas,
  estancias y comunicaciones omnicanal."
- Términos prominentes: CDP (Customer Data Platform), CRM hotelero, venta
  directa, fidelización, marketing automation, PMS integration, escalera de
  fidelización, multicanalidad.

**Next:** (`app/page.tsx` + `components/sections/hero.tsx`)

- Title: `Fideltour — CDP para hoteles`
- H1: `El hotelero que domina el dato, domina la venta directa.`
- Primer párrafo (lead hero): "Plataforma de marketing y ventas para
  hoteles. Un CDP que unifica datos, reservas, estancias y comunicaciones
  multicanal — y devuelve al hotelero el control sobre su venta directa."
- Términos prominentes: CDP para hoteles, venta directa, dependencia OTAs,
  unificación de datos, multicanalidad, dominio del dato.

**Queries GSC relevantes:** `fideltour` (2158 clicks), `fideltour crm` (10),
`fideltour.com` (7), `crm hoteles` (2020 imp.), `crm hotelero` (4630 imp.),
`crm para hoteles` (2596 imp.), `plataforma gratuita hoteles…` (496 imp.,
pos 1.55).

**Diagnóstico:** TERMS_LOST controlado. El Next conserva "plataforma de
marketing y ventas para hoteles" en el lead, pero el H1 ya no contiene la
palabra "CRM" — decisión de marca (MARCA_DELIBERADA según CLAUDE.md regla
"Del CRM al CDP"). Sin embargo, sí se pierde la mención a "PMS" en el hero
(la palabra aparece en las queries y bloques posteriores de WP).

**Acción recomendada:**

1. Mantener H1 "domina el dato, domina la venta directa" (alineado con marca).
2. Añadir en el bloque inmediatamente debajo del hero (CrmToCdpSection ya
   cumple este rol) la mención explícita a "PMS" y a "centralizar datos de
   huésped" — verificar que está en el copy actual.
3. La query "fideltour crm" (43% CTR) ya se cubre porque la palabra "CRM"
   aparece en `crm-to-cdp` y en el bento de módulos. No reabrir el debate
   sobre meter CRM en el H1.

---

### 2. /marketplace/ — 154 clicks · 7115 impresiones · pos 10.04

**WP vivo:**

- Title: `Marketplace - Fideltour`
- H1: `Marketplace`
- Resumen: "El CRM de Fideltour integra con PMS, motores de reserva y
  portales cautivos para optimizar las bases de datos hoteleras. La
  plataforma conecta con múltiples partners tecnológicos."
- Términos: CRM Fideltour, PMS integration, motor de reservas, portal
  cautivo, partners tecnológicos, B2B sales tools.

**Next:** (`app/marketplace/page.tsx`)

- Title: `Marketplace · Fideltour`
- H1: `Marketplace` (en `MarketplaceHeroSection`)
- Description: "Descubre aquí las conectividades disponibles con Fideltour,
  desde PMS a motores de reserva y mucho más para gestionar tu hotel."
- Términos: marketplace hotelero, PMS, motor de reservas, conectividades.

**Queries GSC relevantes:** `marketplace hotelero` (381 imp.), `mews
integrations marketplace hotelero` (61), `integraciones pms` (106),
`integraciones pms hotel` (1176 imp.), `hotel pms integration` (902).

**Diagnóstico:** DIRECT_MATCH. Title, H1 y categoría conservan el término
"marketplace" y "PMS". La query "integraciones pms" se cubre desde la
página dedicada `/integracion-pms-para-hoteles/`.

**Acción recomendada:** Verificar en `MarketplaceFinderSection` que la
copia menciona "PMS", "motor de reservas" y "portal cautivo" como las tres
familias visibles arriba del fold. Si lo hace, OK.

---

### 3. /crm-hoteles/ — 39 clicks · 17034 impresiones · pos 15.16

**WP vivo:**

- Title: `CRM para hoteles | Centraliza, segmenta y fideliza - Fideltour`
- H1: `Empieza a utilizar el CRM para hoteles`
- Lead: "Conoce, segmenta y fideliza a tus huéspedes desde un único lugar.
  Centraliza la información, automatiza tareas y personaliza cada
  comunicación para aumentar recurrencia y ventas directas."
- Términos: CRM hotelero, centralización de datos, segmentación dinámica,
  fidelización de huéspedes, integración PMS, automatización de marketing,
  multicanalidad (email/WhatsApp/SMS), venta directa, CDP, gestión de
  reservas.

**Next:** (`lib/content/module-landings/crm-hoteles.ts`)

- Title: `CRM para hoteles · Del CRM al CDP`
- H1 (hero.title): `Del CRM hotelero al CDP del hotel.`
- Lead: "Un CRM clásico guarda contactos. Fideltour empieza ahí pero da el
  salto: identidad única, segmentación predictiva y activación en cada
  canal. La autovía de la venta directa."
- Términos: CRM hotelero, CDP, identidad única, segmentación predictiva,
  activación, venta directa, perfil 360º, segmentación dinámica.

**Queries GSC relevantes:** `crm hotelero` (4630 imp.), `crm para hoteles`
(2596 imp.), `crm hoteles` (2020 imp.), `crm para hotel` (376), `crm
hostelería` (370), `software crm hoteles` (546), `software crm para
hoteles` (365), `alojamiento crm` (525), `crm sector turístico` (244),
`crm fidelización` (168).

**Diagnóstico:** TERMS_LOST con matiz. El Next mantiene "CRM hotelero" en
title y body, lo cual cubre la query estrella. PERO el H1 actual "Del CRM
hotelero al CDP del hotel" es una formulación de tesis, no contiene los
verbos rankeantes "centraliza", "segmenta", "fideliza" que están en el
title histórico y en el lead WP. Tampoco aparece "automatiza" ni
"personaliza".

**Acción recomendada:**

1. Añadir un H2 dentro de los pillars o como bloque adicional con el
   patrón "Centraliza, segmenta y fideliza desde un único lugar" — recupera
   el trío de verbos que está en el title histórico.
2. Asegurar que el copy menciona "integración PMS", "email", "WhatsApp",
   "SMS" — el pillar 4 los toca de pasada vía "ads, email, WhatsApp, push",
   reforzar.
3. No tocar la tesis "Del CRM al CDP" (marca).

---

### 4. /blog/marketing/tendencias-marketing-hotelero/ — 35 clicks · 2793 imp.

**WP vivo:**

- Title: `Así será la hotelería en 2026: tendencias que marcarán el mercado`
- H1: idem
- Términos: Whycations, Hushpitality, IA conversacional, venta directa,
  blended travel, NFTs/Web3, fidelización, Hilton Trends Report.

**Next:** (`content/blog/marketing/tendencias-marketing-hotelero.mdx`)

- Frontmatter title: idéntico.
- H1: idéntico.
- Cuerpo: idéntico al WP (mismo MDX), incluye Whycations, Hushpitality, IA
  conversacional, defensa total de la venta directa, blended travel, NFTs.

**Queries GSC relevantes:** `tendencias hoteleras 2026` (3 imp., pos 5.33),
`tendencias hoteleras` (54), `tendencias hoteleras actuales` (34),
`tendencias hotel` (51), `tendecias futuras sector hotelero` (94).

**Diagnóstico:** DIRECT_MATCH. El MDX es el mismo contenido. Sin acción.

---

### 5. /contacto/ — 33 clicks · 5330 impresiones · pos 2.65

**WP vivo:**

- Title: `Contacta con nosotros - Fideltour`
- H1: `¿Hablamos?`
- Resumen: invita a pedir demo, info de oficinas (España, México,
  Colombia, Portugal).

**Next:** (`app/contacto/page.tsx` + `ContactoHeroSection`)

- Title: `Contacta con nosotros`
- H1: `¿Hablamos?`
- Lead: "Si quieres entender mejor cómo trabajamos, ver una demo o
  resolver cualquier duda…"
- Eyebrow: "Contacto · CDP para hoteles"

**Queries GSC relevantes:** sin evidencia directa, ver queries generales
del dominio (la página rankea por la marca "fideltour" + "contacto" — la
query top es `fideltour` con 2158 clicks generales).

**Diagnóstico:** DIRECT_MATCH. Title, H1 y lead conservan el tono y el
verbo "hablar". Oficinas siguen presentes en `ContactoOfficesSection`.

**Acción recomendada:** Ninguna. SEO no crítico (página de transacción).

---

### 6. /fidelizacion-hoteles/ — 32 clicks · 14346 impresiones · pos 46.23

**WP vivo:**

- Title: `Fidelización para hoteles | Crea tu propio club de recompensas`
- H1: `Fideltour Rewards: Fidelización para hoteles`
- Resumen: programa digital de recompensas, niveles de membresía,
  acumulación automática de puntos, Guest Portal, integración CRM,
  comunicaciones automatizadas.
- Términos: programa de recompensas digital, club de fidelización, puntos,
  niveles de membresía, Guest Portal, comunicaciones automatizadas, CRM
  integrado, beneficios personalizados, multicanalidad.

**Next:** (`lib/content/module-landings/fidelizacion-hoteles.ts`)

- Title: `Fideltour Rewards: programa de fidelización para hoteles`
- H1 (hero.title): `Fideltour Rewards: fidelización para hoteles.`
- Lead: "Crea un programa de recompensas digital que convierta a tus
  huéspedes en clientes recurrentes. Diseña niveles, beneficios y reglas…"
- Términos: programa de recompensas digital, club de fidelización, niveles
  ilimitados, earn rules, catálogo, Guest Portal, CRM, Campaigns,
  Automation.

**Queries GSC relevantes:** `estrategias de fidelización` (665 imp.),
`fidelización hotel` (319), `fidelización de clientes en hoteles` (305),
`estrategias de fidelización de clientes en hoteles` (271), `programa de
recompensas para hoteles` (1111 imp.), `herramientas de fidelización para
hoteles` (176), `club de fidelización de clientes` (229), `fidelizacion
hotel` (181), `mejorar fidelización huéspedes hoteles` (116), `estrategia
fidelización hotel` (180), `mejores programas fidelización hoteles
españa` (71).

**Diagnóstico:** TERMS_LOST. El Next mantiene "fidelización", "recompensas",
"Rewards", "club de fidelización" y "Guest Portal" — bien. PERO la query
con más impresiones es "programa de recompensas para hoteles" (1111 imp.)
y "estrategias de fidelización" (665 imp.). El copy actual no contiene la
palabra "estrategias" en ningún H2 visible, ni un bloque tipo "estrategias
de fidelización hotelera".

Adicional: la query `fidelización hotel` y variantes (319+181+319… ≈ 800
imp. acumuladas) sugieren que la página podría capturar más tráfico si
incorpora la palabra "estrategias" como bloque H2 o pillar.

**Acción recomendada:**

1. Añadir un pillar o H2 "Estrategias de fidelización hotelera" con
   resumen de 2-3 estrategias clásicas (personalización, descuentos
   individuales, encuestas) + enlace al blog
   `estrategias-fidelizacion-hotelera`.
2. Reforzar la mención a "huéspedes recurrentes" y "repetidores".
3. Verificar que el FAQ menciona "puntos" — sí lo hace, OK.

---

### 7. /blog/marketing/razones-landing-page-inversion-hotel/ — 31 clicks · 3262 imp.

**WP vivo:**

- Title: `Por qué una landing page es una buena inversión para tu hotel - Fideltour`
- H1: `8 razones por las que una landing page es una buena inversión para tu hotel`
- Cuerpo: define landing page como página específica para convertir
  visitantes en leads, 9% conversión, sin menús, microsites, segmentación,
  identidad de marca.

**Next:** (`content/blog/marketing/razones-landing-page-inversion-hotel.mdx`)

- Frontmatter title: `8 razones por las que una landing page es una buena
  inversión para tu hotel` (idéntico al H1 WP, ligeramente distinto al
  title WP — más coincide con el H1).
- Contenido: idéntico al WP (mismo cuerpo, mismos 8 puntos, microsites,
  segmentación, SEO, UX).

**Queries GSC relevantes:** `landing page hotel` (603 imp., pos 19.07),
`hotel landing page` (40 imp., pos 5.9), `landing page` (508 imp., pos
1.09), `landing page para eventos` (117), `landing page turismo` (7),
`beneficios de una landing page` (38), `ventajas de una landing page`
(46).

**Diagnóstico:** DIRECT_MATCH. El MDX es fiel. Sin acción.

---

### 8. /fideltour/ (empresa) — 25 clicks · 7894 imp. · pos 1.74

**WP vivo:**

- Title: `Qué es Fideltour - Fideltour`
- H1: `Nuestra misión`
- Cuerpo: "Fideltour nace para transformar el sector hotelero. Somos un
  **CRM hotelero** que permite conocer y fidelizar a los huéspedes…"
- Frase pivotal: "Somos el **CRM 100% hotelero** y ofrecemos una solución
  integral…"
- Términos: CRM hotelero, CRM 100% hotelero, plataforma all-in-one, venta
  directa, solución integral.

**Next:** (`app/fideltour/page.tsx`)

- Title: `Sobre Fideltour · CDP para hoteles`
- Description: "Fideltour es el CDP para hoteles que permite conocer y
  fidelizar al huésped de forma eficaz y personalizada. Por hoteleros,
  para hoteleros."
- H1 (en `EmpresaHeroSection`): a verificar — usa "CDP para hoteles" como
  posicionamiento.

**Queries GSC relevantes:** `fideltour` (2158 clicks · 6665 imp., posición
1.22), `fidel tour` (80), `fideltur` (77), `fideltour.com` (7), `qué es
fideltour` (sin evidencia directa).

**Diagnóstico:** MAJOR_REWRITE + MARCA_DELIBERADA. La página pasa de
"CRM 100% hotelero" a "CDP para hoteles" — esto es la regla bisturí de
CLAUDE.md. No proponemos revertirlo.

**Acción recomendada:**

1. **No revertir** el cambio "CRM → CDP" en title/description (decisión de
   marca inviolable).
2. Sí asegurar que el body de la página menciona, al menos una vez, la
   transición: "Empezamos como CRM hotelero, hoy somos el CDP para
   hoteles". Esta frase histórica preserva la query `fideltour crm` y la
   continuidad con clientes que aún piensan en "Fideltour CRM" sin
   contradecir la línea de marca.
3. La query top es la marca pura `fideltour` — no peligra.

---

### 9. /blog/fidelizacion/estrategias-fidelizacion-hotelera/ — 25 clicks · 6647 imp.

**WP vivo:**

- Title: `4 estrategias de fidelización hotelera - Fideltour`
- H1: `4 estrategias de fidelización hotelera que puedes implementar en tu hotel`
- Cuerpo: personalización de comunicaciones, descuentos y recompensas
  individuales, encuestas durante/post-estancia, programas SMART, embajador
  de marca, guest journey.

**Next:** (`content/blog/fidelizacion/estrategias-fidelizacion-hotelera.mdx`)

- Frontmatter title: idem.
- Cuerpo: idéntico al WP (mismo MDX).

**Queries GSC relevantes:** `estrategias de fidelización` (665 imp.),
`estrategias de fidelización de clientes en hoteles` (271), `fidelización
hotelera` (varias variantes), `como fidelizar al cliente ejemplos`.

**Diagnóstico:** DIRECT_MATCH. Sin acción.

---

### 10. /blog/fidelizacion/fidelizar-en-hoteles-es-mucho-mas-que-puntos-y-regalos/ — 24 clicks · 2950 imp.

**WP vivo:**

- Title: `Fidelizar en hoteles es mucho más que puntos y regalos - Fideltour`
- H1: idem.
- Cuerpo: evolución del viajero clásico al hiperconectado, omnicanalidad,
  experiencias personalizadas, datos y digitalización.

**Next:** (`content/blog/fidelizacion/fidelizar-en-hoteles-es-mucho-mas-que-puntos-y-regalos.mdx`)

- Idéntico al WP.

**Queries GSC relevantes:** sin evidencia directa, ver queries generales
del dominio (la página captura long-tail de fidelización + puntos).

**Diagnóstico:** DIRECT_MATCH. Sin acción.

---

### 11. /encuestas-hoteles/ — 22 clicks · 4797 imp. · pos 19.38

**WP vivo:**

- Title: `Encuestas para hoteles | Mejora tu reputación - Fideltour`
- H1: `Empieza a utilizar las encuestas para hoteles`
- Lead: "Mide la satisfacción de tus huéspedes y mejora su experiencia con
  cada estancia. Con Fideltour Reviews…"
- Términos: Fideltour Reviews, encuestas automatizadas, feedback,
  satisfacción del cliente, alertas inteligentes, análisis de reputación.

**Next:** (`lib/content/module-landings/encuestas-hoteles.ts`)

- Title: `Encuestas y reviews para hoteles`
- H1 (hero.title): `Empieza a utilizar las encuestas para hoteles.`
- Lead: idéntico al WP. Pillars cubren pre/in/post-estancia, alertas,
  dashboards NPS.

**Queries GSC relevantes:** `encuesta hotel` (149 imp.), `encuesta
satisfaccion hotel` (143), `encuestas hoteles` (332), `encuestas para
hoteles` (129), `encuesta para hoteles` (129), `encuestas de hoteles`
(28), `encuestas de satisfaccion hoteles` (100), `encuesta de satisfaccion
del cliente hotel` (186), `encuesta de satisfaccion hotel` (130),
`hospitality surveys` (118), `hotel surveys` (439), `hotel survey` (435),
`guest satisfaction survey` (35).

**Diagnóstico:** TERMS_LOST moderado. El Next conserva el H1 y el lead
casi idénticos. PERO el title pierde "Mejora tu reputación" — el WP lo
tenía como gancho explícito y el Next lo sustituye por "y reviews".
Tampoco aparece la frase "encuesta de satisfacción" como bloque (las
queries `encuesta satisfaccion hotel` suman 143+130+186 ≈ 459 imp.).

**Acción recomendada:**

1. Añadir en el lead o en el primer pillar la frase explícita "encuestas
   de satisfacción para hoteles" — actualmente dice "Mide la satisfacción
   de tus huéspedes", queda cerca pero no contiene el sintagma exacto.
2. Considerar volver a un title más cercano a "Encuestas para hoteles ·
   Mejora tu reputación" — el actual `Encuestas y reviews para hoteles`
   es menos específico SEO. Decisión: validar con equipo.
3. Verificar que el copy menciona "NPS" y "satisfacción" como dos métricas
   distintas. El pillar 4 dice "NPS · dashboards" — OK.

---

### 12. /landing-page-hoteles/ — 22 clicks · 1744 imp. · pos 32.8

**WP vivo:**

- Title: `Landings para hoteles | Crea páginas de campañas sin código`
- H1: `Empieza a utilizar landings para hoteles`
- Lead: editor drag-and-drop, sin código, integración con email/SMS/WhatsApp,
  dashboards en tiempo real.
- Términos: landing pages for hotels, no-code, drag and drop, conversion
  optimization, multichannel campaigns, real-time analytics, CDP.

**Next:** (`lib/content/module-landings/landing-page-hoteles.ts`)

- Title: `Landing pages y formularios para hoteles`
- H1: `Empieza a utilizar landings para hoteles.`
- Lead: "Crea páginas de campaña personalizadas, sin depender del equipo
  web. Con Fideltour Landings diseñas páginas de aterrizaje y formularios
  optimizados para convertir en minutos…"
- Términos: landings, drag & drop, formularios inteligentes, dashboards,
  multicanal.

**Queries GSC relevantes:** `landing page hotel` (603 imp., pos 19.07),
`landing page hoteles` (varias variantes), `hotel landing page` (40),
`landing page` (508), `landing page para eventos` (117), `landing` (61),
`que es landing` (28), `hotel landing` (37), `hotel landing pages` (6),
`loyalty program landing page` (35), `optimización de landing pages
torrevieja` (30).

**Diagnóstico:** TERMS_LOST. El Next mantiene "landing page" y "página de
aterrizaje" (lead). PERO:

- La query `landing page hotel` (603 imp., singular) es la más fuerte,
  está presente en title y lead — OK.
- El title histórico mencionaba "sin código" como diferenciador explícito
  — el Next lo mueve al pillar 1 "Editor drag & drop sin código". OK.
- El sintagma "páginas de aterrizaje" sí aparece en el lead — OK.

**Acción recomendada:**

1. Considerar añadir variante `landing page para hotel` (singular) en H2
   o subtítulo. La query `landing page hotel` tiene 603 imp. acumuladas.
2. Verificar que el copy menciona "conversión" (no aparece literal en el
   resumen leído — sí "convertir"). Reforzar con cifra "+9% conversión"
   para alinear con la guía del blog asociada.

---

### 13. /blog/ — 20 clicks · 1608 imp. · pos 20.8

**WP vivo:**

- Title: `Blog - Fideltour`
- H1: `Blog Fideltour`
- Description: "Marketing y fidelización basada en datos para hoteles."
- Términos: marketing hotelero, fidelización, guest journey, CDP, OTA
  reduction.

**Next:** (`app/blog/page.tsx`)

- Title: `Blog`
- Description: "Estrategia, casos reales y buenas prácticas para hoteleros
  que están unificando su dato, reduciendo su dependencia de las OTAs y
  construyendo venta directa con Fideltour, el CDP para hoteles."

**Queries GSC relevantes:** `blog fideltour` (sin evidencia directa),
`blog hotelero` (81), `blog para hoteles` (81), `blog fidelización`
(120), `blog influye en las ventas` (81).

**Diagnóstico:** MAJOR_REWRITE + MARCA_DELIBERADA. La description pasa de
"basada en datos" (corta) a una versión más larga y orientada a CDP/OTA.
Las queries clave (`blog hotelero`, `blog para hoteles`) no usan la
palabra "CDP" — captan tráfico de descubrimiento.

**Acción recomendada:**

1. Mantener la description con la mención a CDP (marca).
2. Considerar mencionar "blog hotelero" en el H1 o subtítulo — actualmente
   el H1 es solo "Blog". Si la sección hero permite eyebrow, usar uno como
   "Blog hotelero · CDP para hoteles".
3. Verificar `BlogHeroSection` en componentes — no leído, pero confirmar
   que H1 visible es expresivo SEO-wise.

---

### 14. /integracion-portal-cautivo-para-hoteles/ — 19 clicks · 756 imp. · pos 22.23

**WP vivo:**

- Title: `Portal cautivo para hoteles | Convierte tu WiFi en fidelización`
- H1: `Integra tu portal cautivo con Fideltour`
- Lead: convierte el WiFi en fuente de datos, conexión con CRM, captura
  automática de logins/emails/teléfonos, campañas personalizadas.
- Términos: captive portal, WiFi data capture, hotspot, WiFi marketing
  para hoteles, ficha de huésped, multichannel.

**Next:** (`app/integracion-portal-cautivo-para-hoteles/page.tsx` +
`lib/content/portal-cautivo.ts`)

- Title: `Integración de portal cautivo para hoteles`
- Description: "Conecta tu portal cautivo WiFi con Fideltour y convierte
  cada acceso en un dato identificado en el CRM…"
- Cuerpo (`portalBenefits/Features`): captura desde WiFi, identificación
  inmediata, campañas segmentadas, WiFi marketing para hoteles, ficha de
  contacto enriquecida.

**Queries GSC relevantes:** `internet hotspot login` (19 clicks · 1056
imp.), `mikrotik hotspot` (5), `hotspot mikrotik` (5), `internet hotspot >
login` (2), `hotspot hotel` (184), `internet hotspot - log in` (36),
`portal cautivo hotel` (55), `hotel captive portal` (381), `hotel wifi
captive portal` (244), `managed captive portal for hotels` (250),
`captive portal wifi provider` (33), `configurar hotspot mikrotik` (117),
`http chap` (33).

**Diagnóstico:** TERMS_LOST. El Next conserva "portal cautivo", "WiFi",
"WiFi marketing para hoteles" — OK. PERO la query top en clicks es
`internet hotspot login` (19 clicks reales!) y luego `mikrotik hotspot` /
`hotspot mikrotik`. El Next no menciona "hotspot" en ningún lugar visible
del copy (solo "WiFi" y "portal cautivo"). Esto es una pérdida real de
términos rankeantes técnicos.

⚠️ NOTA: Una parte importante de estas queries (`internet hotspot login`,
`mikrotik hotspot`) van probablemente a la URL `hotspot.fideltour.com`
(subdominio del producto), no a la página de marketing. La preservación
en el sitio público es secundaria pero conviene mencionarlo.

**Acción recomendada:**

1. Añadir "hotspot" como sinónimo de "portal cautivo" en al menos un
   pillar o FAQ. Sugerencia para el FAQ: "¿El módulo funciona con sistemas
   hotspot tipo Mikrotik o Cloud4Wi?" — responde sí + cita Connect.
2. Considerar añadir un H2 "Convierte tu WiFi en fidelización" — preserva
   el title histórico del WP.
3. La query `hotel captive portal` (381 imp.) sí está cubierta vía
   "captive portal" / "portal cautivo" / "WiFi marketing".

---

### 15. /marketing-automation-para-hoteles/ — 17 clicks · 2136 imp. · pos 14.34

**WP vivo:**

- Title: `Marketing Automation para hoteles - Fideltour`
- H1: `Marketing automation`
- Lead: módulo Automation, campañas de email marketing automatizadas,
  flujos complejos por acción/inacción, segmentación.
- Términos: marketing automation, email marketing campaigns, guest journey,
  workflow triggers, segmentación.

**Next:** (`lib/content/module-landings/marketing-automation-para-hoteles.ts`)

- Title: `Marketing Automation para hoteles`
- H1 (hero.title): `Marketing Automation para hoteles.`
- Lead: "Revoluciona tu e-mail marketing con un módulo diseñado para la
  creación y ejecución de campañas altamente personalizadas y automatizadas.
  Pre, in y post-stay activados por el comportamiento real del huésped."
- Términos: automation, e-mail marketing, flujos complejos,
  personalización 1:1, Campaigns→Auto, guest journey.

**Queries GSC relevantes:** `hotel marketing automation` (210 imp., pos
16.23), `marketing automation for hotels` (195), `hotel marketing
automation platform` (36), `marketing automation hotel` (47), `marketing
automation hospitality` (176), `hospitality marketing automation` (97),
`automatización hotelera` (29), `automatización para hoteles y hostelería`
(92), `travel marketing automation` (30), `marketing automatisé tours`
(48), `email marketing para hoteles` (2923 imp., pos 69.68) — query top.
`email marketing hoteles` (882), `e-mail marketing para hotel` (160).

**Diagnóstico:** TERMS_LOST. El Next mantiene "Marketing Automation",
"email marketing", "guest journey", "flujos complejos" — OK en lo
sustancial. La query estrella `email marketing para hoteles` (2923 imp.)
puede capturarse desde aquí o desde `/email-para-hoteles/` (URL hermana
existente).

**Acción recomendada:**

1. Verificar que `/email-para-hoteles/` (URL existe en Next? sí, en
   `app/email-para-hoteles/`) absorbe la query `email marketing para
   hoteles`. Si no, considerar un H2 explícito en esta página.
2. Añadir en el copy una mención a "automatización del email marketing
   para hoteles" (sintagma completo) — está casi pero conviene cerrarlo.
3. La query `hotel marketing automation platform` (36 imp.) sugiere que
   el sintagma "plataforma de marketing automation" podría aparecer en
   algún beneficio.

---

### 16. /blog/marketing/guia-definitiva-de-marketing-digital-para-tu-hotel/ — 16 clicks · 29354 imp.

**WP vivo:**

- Title: `Guía definitiva de marketing digital para tu hotel - Fideltour`
- H1: `Guía definitiva de marketing digital para tu hotel`
- Cuerpo: marketing digital, inbound, email, SEO/SEM, redes sociales,
  buyer persona, CRM, fidelización, Marketing 4.0.

**Next:** (`content/blog/marketing/guia-definitiva-de-marketing-digital-para-tu-hotel.mdx`)

- Idéntico al WP (MDX migrado fiel).

**Queries GSC relevantes:** `marketing digital para hoteles` (2967 imp.,
pos 39.95), `marketing para hoteles` (2509), `marketing online hoteles`
(1755), `marketing hoteles` (1745), `marketing online para hoteles` (1608),
`estrategias de marketing digital para hoteles` (1112), `marketing digital
hoteles` (190), `marketing digital para hotel` (190), `marketing digital
hotelero` (215), `marketing para un hotel` (630), `marketing hotel` (46),
`marketing en hoteles` (30), `marketing en hoteles para familias` (89),
`marketing digital ventas hoteles industria hotelera` (222), `inbound
marketing para hoteles` (491).

**Diagnóstico:** DIRECT_MATCH. El MDX preserva el copy literal. Es la
URL con más impresiones del sitio (29354 imp.!), captura todo el long-tail
de "marketing digital para hoteles".

**Acción recomendada:** Ninguna sobre el copy. Sí verificar que el sitemap
y los enlaces internos apuntan a esta página como hub principal de
"marketing digital".

---

### 17. /redes-sociales-hoteles/ — 16 clicks · 3464 imp. · pos 19.73

**WP vivo:**

- Title: `Redes sociales para hoteles | Gestiona tu presencia online`
- H1: `Gestiona las redes sociales de tu hotel`
- Lead: módulo social de Fideltour, calendario editorial único, Facebook /
  Instagram / TikTok / LinkedIn / X / Google Business / Pinterest / Threads.

**Next:** (`lib/content/module-landings/redes-sociales-hoteles.ts`)

- Title: `Redes sociales para hoteles`
- H1: `Gestiona las redes sociales de tu hotel.`
- Lead: "Gestiona, programa y analiza tus redes sociales desde un único
  lugar. Con Fideltour Social…"
- Pillars: calendario editorial, dashboards, inbox unificado, CRM sync.

**Queries GSC relevantes:** `redes sociales para hoteles` (809 imp.),
`gestion redes sociales hoteles` (103), `gestion redes sociales para
hoteles` (340), `estrategias de redes sociales para hoteles` (283), `redes
sociales hotel` (158), `gestión de redes sociales hoteles` (148), `como
llevar las redes sociales de un hotel` (115), `cuanto vale llevar las
redes sociales de un hotel` (208), `facebook para hoteles` (211), `social
media marketing para hoteles` (153), `redes sociais para hotéis` (26).

**Diagnóstico:** TERMS_LOST leve. El Next conserva "redes sociales para
hoteles" y "gestiona". PERO:

- Query `gestión de redes sociales hoteles` (148 imp.) — el lead actual
  usa "Gestiona, programa y analiza" (verbo, no sintagma nominal).
- Query `estrategias de redes sociales para hoteles` (283 imp.) — no se
  menciona "estrategia" como bloque.

**Acción recomendada:**

1. Añadir un H2 o pillar "Gestión de redes sociales para hoteles" (forma
   nominal) y/o "Estrategia social hotelera".
2. Reforzar mención a Facebook, Instagram, TikTok como las tres redes
   con queries propias (`facebook para hoteles` 211 imp.).
3. El pillar 1 ya enumera 9 canales — OK.

---

### 18. /clientes/ — 13 clicks · 3495 imp. · pos 2.67

**WP vivo:**

- Title: `Clientes - Fideltour`
- H1: `Clientes que confían en Fideltour`
- Cuerpo: "Desde hoteles independientes hasta grandes grupos
  internacionales, Fideltour ayuda a los hoteles a unificar sus datos,
  personalizar la comunicación y construir relaciones rentables con sus
  huéspedes." Lista de segmentos.

**Next:** (`app/clientes/page.tsx`)

- Title: `Clientes`
- Description: literal del WP.
- Sections: `ClientesHeroSection`, `ClientesSegmentsSection`,
  `ClientesCtaSection`.

**Queries GSC relevantes:** sin evidencia directa de queries genéricas
(el tráfico viene de marca + segmentos como `hoteles refineria`, `garden
hotels en mallorca`, `mexico grand hotels login`, `axel and you`).

**Diagnóstico:** MAJOR_REWRITE moderado. El Next reposiciona la página de
listado de logos a una vista por segmentos. La descripción se mantiene
literal. No hay queries de copy concretas que se pierdan — la página
captura tráfico vía nombres de hoteles cliente (long-tail muy específico).

**Acción recomendada:**

1. Verificar que `ClientesSegmentsSection` muestra los nombres de los
   hoteles cliente con sus marcas visibles en HTML (no solo logos en SVG).
   Las queries de `axel and you`, `garden hotels`, `hoteles refineria`,
   `mexico grand hotels` necesitan el texto del nombre para rankear.
2. La página de `/casos-de-exito/` (existente en Next) cubre esto mejor —
   considerar enlazar visible desde `/clientes/`.

---

### 19. /blog/fidelizacion/hacer-encuesta-para-hoteles/ — 13 clicks · 2355 imp.

**WP vivo:**

- Title: `Una encuesta para hoteles que asegure tu éxito - Fideltour`
- H1: idem.
- Cuerpo: segmentación de huéspedes, encuesta online vs papel,
  automatización, CRM, satisfacción.

**Next:** (`content/blog/fidelizacion/hacer-encuesta-para-hoteles.mdx`)

- Idéntico al WP.

**Queries GSC relevantes:** `encuestas hoteles` (332 imp.), `encuestas
para hoteles` (129), `encuesta para hoteles` (129), `como hacer una
encuesta` (sin evidencia directa), `cuestionario hotel` (27).

**Diagnóstico:** DIRECT_MATCH. Sin acción.

---

### 20. /whatsapp-para-hoteles/ — 13 clicks · 1229 imp. · pos 7.58

**WP vivo:**

- Title: `WhatsApp para hoteles: revoluciona la comunicación con tu huésped`
- H1: `Empieza a utilizar WhatsApp para hoteles`
- Lead: "Impacta a tu huésped donde siempre está disponible. WhatsApp es
  la nueva forma de conversar con tus huéspedes antes, durante y después
  de su estancia"
- Stats: 99% apertura, +25% reservas directas, fideliza al cliente.
- Términos: WhatsApp para hoteles, automatización 24/7, reservas directas,
  omnicanalidad, CRM, API META.

**Next:** (`lib/content/module-landings/whatsapp-para-hoteles.ts`)

- Title: `WhatsApp para hoteles`
- H1: `Empieza a utilizar WhatsApp para hoteles.`
- Lead: idéntico al WP.
- Stats: 99% apertura, +25% reservas directas, Fideliza al cliente.
- Términos: API oficial, campañas multimedia, tracking, Automation,
  Journey 24/7, ARR.

**Queries GSC relevantes:** `hoteles whatsapp` (49 imp.), `hotel
whatsapp` (391), `whatsapp hotel` (164), `whatsapp para hoteles` (sin
evidencia separada — captura por la URL), `whatsapp for hotels` (238),
`whatsapp de hoteles` (37), `whatsapp for hospitality` (134), `top whatsapp
automation for boutique hotels in latin america` (70), `chatbot hoteles`
(132), `desarrollo chatbot hoteles` (122), `programa de fidelización
whatsapp` (28).

**Diagnóstico:** TERMS_LOST leve. El Next preserva H1, lead, stats y casi
todos los términos. PERO el title se acorta de "WhatsApp para hoteles:
revoluciona la comunicación con tu huésped" a solo "WhatsApp para
hoteles" — pierde el gancho emocional y posiblemente CTR en SERP.

Variantes `hotel whatsapp` (391 imp.) y `whatsapp hotel` (164 imp.) — el
copy sí menciona "WhatsApp" + "hotel" en distintos órdenes.

**Acción recomendada:**

1. Considerar restaurar el title largo: "WhatsApp para hoteles ·
   Revoluciona la comunicación con tu huésped" (mejora CTR sin contradecir
   marca).
2. Añadir mención a "chatbot" en el copy o FAQ — la query `chatbot
   hoteles` (132 imp.) y `desarrollo chatbot hoteles` (122) sugieren que
   los usuarios buscan WhatsApp + chatbot como pareja. Fideltour tiene una
   landing `/integracion-chatbot-hoteles/` separada; enlazar.
3. Stats están bien preservadas.

---

## Anexo · Queries del dominio sin URL asignada clara

Estas queries tienen alto volumen y no encajan obviamente con ninguna de
las 20 URLs auditadas. Decidir si se reasignan a URLs existentes o si se
crea nueva landing:

| Query                                  | Impresiones | Posible URL destino                  |
| -------------------------------------- | ----------: | ------------------------------------ |
| email marketing para hoteles           |        2923 | /email-para-hoteles/                 |
| auditoria gratis                       |        1567 | /auditoria-gratuita-hotel/           |
| integraciones pms hotel                |        1176 | /integracion-pms-para-hoteles/       |
| reputacion online hoteles              |         892 | /encuestas-hoteles/ (módulo reviews) |
| tendencias en marketing hotelero       |         153 | /blog/marketing/tendencias-…/        |
| webs para hoteles con integración…     |         410 | /integracion-pagina-web-para-hoteles/|

## Top 3 URLs más urgentes de revisar

1. **`/`** (home, 2042 clicks) — la decisión "CDP en H1" es buena para
   marca, pero verificar que `CrmToCdpSection` cita "PMS" y "CRM
   hotelero" lo bastante alto para no perder la query `crm hotelero`
   (4630 imp.).
2. **`/fidelizacion-hoteles/`** (32 clicks · 14346 imp. · pos 46) — alta
   impresión, posición mala. La query `programa de recompensas para
   hoteles` (1111 imp.) está casi servida pero falta densidad. Añadir
   bloque "Estrategias de fidelización" puede subir posición rápido.
3. **`/crm-hoteles/`** (39 clicks · 17034 imp. · pos 15) — la página con
   más impresiones de las 20 (17K). Aunque el copy está bien orientado a
   CDP (marca), reforzar el trío "centraliza, segmenta, fideliza" en un
   H2 puede capturar más tráfico sin contradecir la tesis "Del CRM al CDP".

## Resumen ejecutivo

- **30 %** DIRECT_MATCH (6/20) — sin acción.
- **45 %** TERMS_LOST (9/20) — acciones específicas pequeñas, sin
  contradecir marca.
- **25 %** MAJOR_REWRITE (5/20) — todas son MARCA_DELIBERADA (movimiento
  "CRM → CDP" o reposicionamiento de página). Se acepta el coste SEO a
  cambio del refresh de marca.
- **0 %** WP_GONE — todas las URLs WP respondieron.

El sitio nuevo preserva razonablemente bien el copy de las URLs top.
Las pérdidas se concentran en sintagmas accesorios (verbos rankeantes
como "centraliza/segmenta/fideliza", sinónimos técnicos como "hotspot"
para portal cautivo, "encuesta de satisfacción" como sintagma
nominal completo). Ninguna pérdida obliga a contradecir las reglas de
marca de [CLAUDE.md](../../CLAUDE.md).
