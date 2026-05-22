# Calendario editorial — Blog Fideltour

Hoja de ruta de publicación de los **9 blog posts reservados** del [keyword-map](./keyword-map.csv) + cadencia continua para alimentar el blog tras esa primera tanda.

## Principios

1. **Primero los P0** — los 4 posts P0 son los que sostienen la captación orgánica top-of-funnel. Sin estos, la inversión en módulos es invisible.
2. **Cadencia mínima sostenible** — 2 posts/mes es el mínimo viable. Menos = el blog se considera abandonado. Más sin recursos = abandono futuro.
3. **Cada post debe tener internal linking según [internal-linking.md](./internal-linking.md)** — un post sin links salientes a módulos no convierte.
4. **Longitud objetivo**: 1.500-2.500 palabras para pillars, 800-1.200 para posts tácticos. Por debajo de 800 no rankea.
5. **Schema `Article` ya inyectado** vía [`BlogPostingJsonLd`](../../components/seo/json-ld.tsx) — no hace falta añadir nada técnico por post.

## Calendario primer trimestre (T1 2026)

### Mes 1 — Top-of-funnel core

**Post 1 — Semana 1**
- URL: `/blog/marketing/como-aumentar-venta-directa-hotel/`
- KW: `cómo aumentar venta directa hotel` (P0)
- Tipo: Pillar long-form (2.000+ palabras)
- Outline:
  1. Por qué la venta directa es la batalla del 2026 (3-5 estadísticas sector).
  2. Las 5 palancas: precio paritario, fidelización, contacto pre-estancia, motor de reservas optimizado, datos unificados.
  3. Caso real: cliente español que pasó del 25% al 45% directa.
  4. Cómo Fideltour ayuda en cada palanca (links a módulos).
  5. CTA `/auditoria-gratuita-hotel/`.
- Internal links salientes (3 módulos + 1 CTA): ver `internal-linking.md`.
- Autor sugerido: alguien con perfil revenue management hotelero (no marketing genérico).

**Post 2 — Semana 3**
- URL: `/blog/marketing/como-reducir-dependencia-ota-hoteles/`
- KW: `cómo reducir dependencia OTAs` (P0)
- Tipo: Pillar long-form
- Outline:
  1. El verdadero coste de Booking.com (15-25% comisión + dependencia algorítmica).
  2. Las 4 razones por las que un hotel cae en dependencia OTA.
  3. Roadmap de 12 meses para reducir del 70% al 40% OTA.
  4. Errores típicos al intentar "matar las OTAs".
  5. CTA `/auditoria-gratuita-hotel/`.

### Mes 2 — Top-of-funnel mid-tier

**Post 3 — Semana 1**
- URL: `/blog/fidelizacion/estrategia-fidelizacion-hotelera/`
- KW: `estrategia fidelización hotel` (P1)
- Tipo: Pillar (1.800 palabras)

**Post 4 — Semana 3**
- URL: `/blog/crm/como-unificar-datos-hotel-cdp/`
- KW: `cómo unificar datos hotel` (P1)
- Tipo: Pillar técnico

### Mes 3 — Awareness + primer comparativo

**Post 5 — Semana 1**
- URL: `/blog/fideltour/que-es-venta-directa-hotelera/`
- KW: `qué es venta directa hotelera` (P2)
- Tipo: Glosario / definición (800-1.200 palabras)

**Post 6 — Semana 3**
- URL: `/blog/crm/alternativa-revinate-cdp-hoteles/`
- KW: `alternativa a Revinate` (P1, **requiere review legal previa**)
- Tipo: Comparativo objetivo (no promocional)
- Estructura sugerida: 1) qué es Revinate, 2) puntos fuertes, 3) limitaciones, 4) cuándo Fideltour encaja mejor, 5) cuándo NO (honestidad gana confianza).
- ⚠️ **Bloquear publicación hasta que legal apruebe el uso del nombre Revinate**.

## Calendario T2 2026 (Mes 4-6)

### Mes 4
- **Post 7**: `/blog/crm/alternativa-cendyn-cdp-hoteles-espanol/` — KW `alternativa a Cendyn` (P1, legal previa).
- **Post 8 (continuidad)**: Post táctico de la categoría más visitada. Ejemplo: "5 emails que todo hotel debería enviar antes del check-in" — ataca `email-para-hoteles` long-tail.

### Mes 5
- **Post 9**: `/blog/crm/fideltour-vs-cendyn-comparativa/` — KW `Fideltour vs Cendyn` (P2, legal previa).
- **Post 10**: Caso de éxito story — formato editorial (`/casos-de-exito/`), no blog. Ejemplo: cliente que recuperó 30% de revenue tras unificar datos.

### Mes 6
- **Post 11**: `/blog/crm/alternativa-dailypoint-cdp-hoteles/` — KW `alternativa a dailypoint` (P2, legal previa).
- **Post 12**: Pillar adicional o táctico — decidir en review trimestral.

## Cadencia continua post-T2 (a partir de Mes 7)

**2 posts/mes mínimo**, alternando:

| Tipo de post | Frecuencia objetivo | Ejemplos |
|--------------|---------------------|----------|
| Pillar long-form | 1 cada 2 meses | Guía completa de [tema], ranking de [solución] para hoteles |
| Táctico mid-tail | 2/mes | "5 plantillas de email para [evento]", "Cómo configurar [proceso]" |
| Comparativo | 1 cada 3 meses | "X vs Y vs Z para hoteles" — siempre con legal previa |
| Caso de éxito | 1/mes (`/casos-de-exito/`, no `/blog/`) | Storytelling de cliente |
| Trend / opinión | 1 cada 2 meses | "Qué cambia en 2026 para hoteleros con IA generativa" |

**Mes objetivo conservador**: 2 publicaciones nuevas + 1 caso de éxito + 1 refresh de post existente. Total: 4 piezas/mes.

## Refresh de posts antiguos

Cada post tiene **fecha de caducidad implícita**. Tras 12 meses:
- Si rankea top 3 → actualizar datos y republicar (mantiene autoridad).
- Si rankea 4-20 → reescribir intro + añadir secciones nuevas → republicar como "Actualizado [mes año]".
- Si rankea >20 → considerar desindexar y consolidar autoridad en otro post relacionado (301 redirect).

## Responsables (a definir)

Cada post necesita owner asignado. Pendiente de input del equipo:

| Rol | Responsable |
|-----|-------------|
| Editor jefe (decide qué se publica) | ? |
| Redactores (1-2 personas externas + internos) | ? |
| Revisión técnica/producto (marca línea) | ? |
| Revisión legal (comparativos) | ? |
| Publicación + SEO check | ? |

Sin owners asignados, el calendario es papel mojado. Esta es la primera cosa que el equipo de marketing debe cerrar.

## Métricas de éxito (a fijar)

Pendiente de input del equipo. Sugerencia base:

| Métrica | Target conservador 6 meses | Target ambicioso 12 meses |
|---------|----------------------------|---------------------------|
| Sesiones orgánicas blog | +200% vs baseline | +500% |
| Posts en top 10 Google | 3-5 | 10-15 |
| Conversión blog → demo | 0.5% | 2% |
| Backlinks ganados | 10 | 40+ |
| Email subscribers desde blog | 100 | 500 |

## Próximos pasos para activar el calendario

1. Asignar owner editorial.
2. Asignar redactor para Posts 1-2 (los P0 críticos).
3. Lanzar revisión legal de comparativos para desbloquear Posts 6, 7, 9, 11.
4. Confirmar baseline actual de sesiones orgánicas en GA4 para fijar targets reales.
5. Establecer el "definition of done" para un post: longitud, links salientes según `internal-linking.md`, schema, imagen OG, etc.
