# Internal linking strategy — Fideltour

Topic clustering explícito: qué URL enlaza a cuál, con qué anchor text y desde qué bloque. Sin esto, las 45 URLs del [keyword-map](./keyword-map.csv) son islas para Google.

## Principios

1. **Pillar pages reciben enlaces, no los dan** — la home y `/cdp-para-hoteles/` reciben links desde todas las module landings, no al revés. Esto concentra autoridad en las URLs comerciales más importantes.
2. **Cluster interno**: cada módulo enlaza a sus 5 hermanos de la misma categoría (Data Import/Intelligence/Activation/Multicanalidad). Esto ya lo hace [`ModuleRelated`](../../components/sections/module-landing/module-related.tsx) automáticamente — verificar que mete las 5 hermanas, no solo 3.
3. **Blog → módulo**: cada blog post enlaza al módulo principal del que habla, con anchor descriptivo (no "haz clic aquí"). Anchor = KW principal del módulo destino.
4. **Casos → módulo**: cada caso de éxito enlaza al módulo que activó la transformación. Ya soportado en [`ModuleCaseProof`](../../components/sections/module-landing/module-case-proof.tsx) (relación módulo → caso); falta el inverso (caso → módulo).
5. **Comparativos → home + pillar**: anchor "CDP para hoteles" desde cada post comparativo a `/` o `/cdp-para-hoteles/`. Refuerza el ranking de la KW principal.

## Mapa de enlaces — bloque por bloque

### Home `/`
- **Recibe** desde: todas las module landings (mega-menú), footer, blog posts (logo + nav), casos.
- **Enlaza a**: pillar `/cdp-para-hoteles/`, los 4 hubs de categoría del mega-menú, `/contacto/`, `/clientes/`, `/blog/`.
- **Anchor recomendado a `/cdp-para-hoteles/`**: "qué es un CDP hotelero" (alineado a KW destino, no a la categoría que ya está aquí).

### Pillar `/cdp-para-hoteles/`
- **Recibe** desde: todas las module landings (sección "Vuelve al CDP" o equivalente — ahora mismo NO existe, gap).
- **Enlaza a**: 4 categorías → 4 modules destacados, `/auditoria-gratuita-hotel/`, `/contacto/`.
- **Anchor recomendado a módulos**: la KW principal del módulo destino ("integración PMS para hoteles", "CRM para hoteles", etc.).

### Cluster Data Import (6 módulos)
| Origen | Destinos internos | Anchor recomendado |
|--------|-------------------|---------------------|
| `/integracion-pms-para-hoteles/` | resto 5 + `/cdp-para-hoteles/` | "integración motor de reservas para hoteles", "chatbot para hoteles", etc. + "CDP para hoteles" |
| `/integracion-motor-de-reservas-para-hoteles/` | resto 5 + `/cdp-para-hoteles/` | Idem |
| (resto siguen mismo patrón) | | |

**Enlaces cross-cluster** (Data Import → otras categorías):
- `/integracion-pms-para-hoteles/` → `/crm-hoteles/` (anchor: "CRM para hoteles") — el dato del PMS alimenta el CRM.
- `/integracion-motor-de-reservas-para-hoteles/` → `/marketing-automation-para-hoteles/` (anchor: "marketing automation para hoteles") — abandonos de reserva activan flujos.
- `/integracion-pagina-web-para-hoteles/` → `/redes-sociales-hoteles/` (anchor: "audiencias ads hotel") — datos web alimentan audiencias.

### Cluster Data Intelligence (6 módulos)
| Origen | Cross-cluster recomendado |
|--------|---------------------------|
| `/crm-hoteles/` | → `/email-para-hoteles/` (anchor: "email marketing para hoteles") + `/fidelizacion-hoteles/` (anchor: "programa de fidelización para hoteles") |
| `/guest-id-para-hoteles/` | → `/integracion-pagina-web-para-hoteles/` + `/integracion-portal-cautivo-para-hoteles/` |
| `/inteligencia-artificial-para-hoteles/` | → `/crm-hoteles/` + `/marketing-automation-para-hoteles/` |
| `/encuestas-hoteles/` | → `/crm-hoteles/` + `/email-para-hoteles/` |
| `/reporting-y-analytics-para-hoteles/` | → `/marketing-hoteles/` + `/integracion-bi-hoteles/` (diferenciación explícita en copy) |
| `/b2b-para-hoteles/` | → `/crm-hoteles/` + `/marketplace/` |

### Cluster Data Activation (6 módulos)
| Origen | Cross-cluster recomendado |
|--------|---------------------------|
| `/marketing-hoteles/` | → `/email-para-hoteles/` + `/whatsapp-para-hoteles/` + `/redes-sociales-hoteles/` |
| `/marketing-automation-para-hoteles/` | → `/crm-hoteles/` + `/email-para-hoteles/` + `/integracion-motor-de-reservas-para-hoteles/` |
| `/fidelizacion-hoteles/` | → `/crm-hoteles/` + `/email-para-hoteles/` + `/whatsapp-para-hoteles/` |
| `/landing-page-hoteles/` | → `/marketing-automation-para-hoteles/` + `/integracion-pagina-web-para-hoteles/` |
| `/redes-sociales-hoteles/` | → `/integracion-pagina-web-para-hoteles/` + `/guest-id-para-hoteles/` |
| `/experiencias-para-hoteles/` | → `/fidelizacion-hoteles/` + `/email-para-hoteles/` |

### Cluster Multicanalidad (5 módulos)
| Origen | Cross-cluster recomendado |
|--------|---------------------------|
| `/email-para-hoteles/` | → `/marketing-automation-para-hoteles/` + `/crm-hoteles/` + `/whatsapp-para-hoteles/` |
| `/whatsapp-para-hoteles/` | → `/email-para-hoteles/` + `/crm-hoteles/` + `/sms-para-hoteles/` |
| `/sms-para-hoteles/` | → `/email-para-hoteles/` + `/whatsapp-para-hoteles/` |
| `/web-push-para-hoteles/` y `/app-push-para-hoteles/` | → `/marketing-automation-para-hoteles/` + `/email-para-hoteles/` |

### Blog pillars (5 reservados)
Cada blog post **debe** enlazar a:
- 2-3 module landings de las que trata el tema (anchor = KW principal del módulo).
- El pillar `/cdp-para-hoteles/` 1 vez (anchor: "CDP para hoteles" o "plataforma de datos hotelera").
- 1 lead magnet (`/auditoria-gratuita-hotel/` o `/contacto/`) en el CTA final.

| Post | Enlaza a módulos | Enlaza a CTA |
|------|------------------|---------------|
| `/blog/marketing/como-aumentar-venta-directa-hotel/` | `/integracion-motor-de-reservas-para-hoteles/`, `/marketing-automation-para-hoteles/`, `/fidelizacion-hoteles/` | `/auditoria-gratuita-hotel/` |
| `/blog/marketing/como-reducir-dependencia-ota-hoteles/` | `/integracion-motor-de-reservas-para-hoteles/`, `/email-para-hoteles/`, `/fidelizacion-hoteles/` | `/auditoria-gratuita-hotel/` |
| `/blog/fidelizacion/estrategia-fidelizacion-hotelera/` | `/fidelizacion-hoteles/`, `/crm-hoteles/`, `/email-para-hoteles/` | `/contacto/` |
| `/blog/crm/como-unificar-datos-hotel-cdp/` | `/crm-hoteles/`, `/guest-id-para-hoteles/`, `/integracion-pms-para-hoteles/` | `/cdp-para-hoteles/` + `/contacto/` |
| `/blog/fideltour/que-es-venta-directa-hotelera/` | `/integracion-motor-de-reservas-para-hoteles/`, `/marketing-hoteles/` | `/cdp-para-hoteles/` |

### Blog comparativos (4 reservados)
Cada post **debe** enlazar a:
- Home `/` (anchor: "CDP para hoteles") al menos 1 vez.
- 2-3 módulos donde Fideltour gana al competidor (anchor = KW módulo).
- `/clientes/` (social proof, anchor: "hoteles que usan Fideltour").
- CTA a `/contacto/` o `/auditoria-gratuita-hotel/`.

### Casos de éxito `/casos-de-exito/[slug]/`
Cada caso debe enlazar a:
- 1-2 module landings que activaron la transformación (anchor = KW módulo).
- Otro caso relacionado del mismo segmento (cross-link entre casos).
- `/contacto/` con anchor "solicita una demo" o equivalente.

**Gap actual**: el componente `ModuleCaseProof` ya inyecta el caso en el módulo, pero **el caso individual NO enlaza de vuelta al módulo**. Implementar en Fase 2 plan v2.

## Reglas de anchor text

1. **NO usar** anchors genéricos: "haz clic aquí", "más info", "leer más", "saber más", "este artículo".
2. **SÍ usar** la KW principal del destino (definida en [keyword-map.csv](./keyword-map.csv)) o una variación natural.
3. **Variar anchors** del mismo destino: no repetir 5 veces "CDP para hoteles" en un solo post — alternar con "plataforma de datos hotelera", "Fideltour", "nuestra CDP".
4. **Anchor text dentro del cuerpo, no solo en CTAs** — Google da menos peso a links de menús/footers que a links dentro de párrafos editoriales.

## Verificación

Tras implementar Fase 4 (reescritura de copy) ejecutar:
```bash
# ¿Algún módulo no recibe enlaces desde otro módulo?
grep -rE 'href="/[a-z-]+(para-hoteles|hoteles)/"' components/ app/ | \
  awk -F'href="' '{print $2}' | cut -d'"' -f1 | sort | uniq -c | sort -n
# Cualquier URL con count 0 está huérfana.

# ¿Hay anchors genéricos?
grep -rE '>(haz clic|más info|leer más|saber más)<' components/ app/
# Debe devolver vacío.
```

Añadir esto como regla del `seo-check` (Fase 3 plan v2).
