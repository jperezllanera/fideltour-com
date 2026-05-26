# ADR-004 — Fideltour ONE como marca de producto + /cdp-para-hoteles reconstruida sobre el dossier

- **Status**: Accepted
- **Date**: 2026-05-26
- **Sprint**: 0
- **Deciders**: Raiko (owner) + claude (senior advisor)

## Context

Llega el dossier corporativo "Glosario agéntico · Fideltour ONE" preparado para Agoratech 2026 — 15 fichas con una narrativa nueva muy potente: era agéntica, agente de venta, agente de contexto, **Fideltour ONE como producto unificado de 12 módulos en una tarifa**, y la frase ancla "El hotelero que domina el dato, domina la venta directa".

El dossier choca de frente con la regla 3 de [`CLAUDE.md`](../../CLAUDE.md): *"agéntico solo aparece como atributo táctico puntual, nunca como identidad ni categoría"*. El dossier usa "CDP agéntico" como categoría literal — exactamente lo que la regla prohíbe.

A la vez, el sitio público tenía:

- `/cdp-para-hoteles/` con 6 secciones bespoke (problema / qué es / beneficios / multicanalidad / CTA) — funcional pero sin gancho narrativo.
- Mega-menú con `FeaturedCard` apuntando a `/#plataforma` (ancla en home), no a la landing pillar.
- Home con `LoyaltyLadderSection` (imagen única de la escalera) como sección central — visualmente plano, sin densidad de información.
- Naming de producto fragmentado: "Fideltour", "Fideltour CDP", "el CDP de Fideltour" usados intercambiablemente.

Decisión a tomar: ¿se cambia la regla de marca para abrazar "CDP agéntico", o se traduce el dossier al lenguaje canónico?

## Decision

**Se mantiene la regla 3** y se traduce el dossier:

1. **"CDP agéntico" → "CDP para hoteles"** en toda la landing.
2. **"agéntico" se permite como atributo táctico**: `era agéntica`, `agente de venta`, `agente de contexto`, `ola agéntica`, `reserva agéntica`. Nunca como categoría aplicada a Fideltour (`Fideltour es un CDP agéntico` está prohibido; `Fideltour es un CDP para hoteles con agente de venta` está permitido).
3. **Fideltour ONE entra como marca de producto** — el nombre del plan/oferta que incluye los 12 módulos del CDP bajo una sola tarifa. Convive con "Fideltour CDP" como categoría.
4. **`/cdp-para-hoteles/` se reconstruye sobre el dossier** — 11 secciones que recorren los 15 slides en orden argumental, conservando la voz editorial pero con la categoría canónica.
5. **FeaturedCard del mega-menú** pasa de `/#plataforma` a `/cdp-para-hoteles/` — el vídeo de CDP lleva ahora a la pillar real.
6. **`brand-guard` actualiza su WARN list** (no su FAIL) para tolerar "agéntico" como atributo, fallar solo si se usa como categoría aplicada a CDP/plataforma.

## Alternativas consideradas

### Alt A — Abrazar "CDP agéntico" como categoría (descartado)

Pros:
- Cero traducción del dossier. Cero fricción narrativa.
- Aprovecha el momento de mercado (Google I/O 2026, OTAs agénticas) para diferenciarse.

Contras (decisivos):
- Rompe la coherencia con las 22 landings de módulo, los blogs (≈60 menciones de "CDP" canónico) y el SEO trabajado (`docs/seo/keyword-map.csv` apunta a "CDP para hoteles").
- "Agéntico" es vocabulario de moda 2025-2026. "CDP" es categoría de Gartner desde 2016. Apostar la identidad a una palabra de 18 meses es frágil.
- Equipos legales B2B hoteleros auditan vocabulario en RFPs; "agéntico" no es término reconocido por procurement, "CDP" sí.

Veredicto: incoherente con la inversión SEO + comercial ya hecha.

### Alt B — Ignorar el dossier (descartado)

Mantener la landing actual de `/cdp-para-hoteles/`.

Veredicto: pierde el mejor material narrativo del año. Los 15 slides están ya escritos con voz editorial fuerte ("La reserva de hotel está a punto de cambiar. Otra vez.", "El contexto no se enciende. Se acumula."). Tirarlos es desperdicio.

### Alt C — Traducir el dossier preservando la regla (elegido)

El dossier es **material narrativo**, no un mandato de naming. Se conserva su voz, su estructura argumental y sus stats (Phocuswright 51%→36%, 6%→15%, 80% anónimo). Se sustituyen las dos o tres ocurrencias de "CDP agéntico" por "CDP para hoteles". Se introduce "Fideltour ONE" donde el dossier lo posiciona como producto. El resto del vocabulario agéntico ("agente de venta", "era agéntica") entra como atributo táctico.

Coste de traducción: bajo (3-4 sustituciones de cadena).
Ganancia: la voz del dossier + la disciplina del sistema de naming.

## Consequences

### Inmediatas (esta sesión)

- 11 secciones nuevas en `components/sections/cdp-*.tsx` reemplazando 6 bespoke. Net +998 / −279 líneas.
- `lib/content/cdp.ts` reescrito con estructuras nuevas: `cdpEras`, `cdpSources`, `cdpModules`, `cdpTimeline`, `cdpStats`, `cdpHeroFeatured`, `cdpFaq` ampliada a 6 preguntas (incluye "qué es CDP para hoteles", "qué incluye Fideltour ONE", "CDP vs CRM").
- `lib/content/site.ts:32` — `platformFeatured.ctaHref` pasa de `/#plataforma` a `/cdp-para-hoteles/`.
- Home rediseñada con 7 jugadas que beben del dossier (hero `.h-mega`, stats en pastilla CRM-to-CDP, `LoyaltyLadderSection` sustituida por `CdpModulesSection`, final-CTA con "El contexto no se enciende. Se acumula.").
- `brand-guard.sh` reporta 0 FAIL · 2 WARN tras los cambios (la WARN sobre "agéntico" es informacional, no bloquea).

### Para el equipo

- Cualquier copy nuevo que use "Fideltour ONE" debe tratarlo como **marca de producto, no como categoría**. La categoría sigue siendo "CDP para hoteles".
- Cualquier copy con "agéntico" debe ser tactical attribute. Si dudás, no lo uses — la regla bisturí es: si la frase puede reescribirse sin "agéntico" sin perder sentido, "agéntico" sobra.
- Stats Phocuswright (51%→36%, 6%→15%) y stats Fideltour (50M / 20M+ / 10M) son **canónicos** del sitio público. Si un dato cambia, se cambia en `lib/content/cdp.ts` y se propaga.
- La `LoyaltyLadderSection` queda **desconectada de la home** pero sigue importable (se usa en otras landings). El componente sigue vivo; solo se sacó de `app/page.tsx`.

### Para el SEO

- La URL pillar `/cdp-para-hoteles/` mantiene `canonical`, sigue siendo destino canónico desde todas las module landings (ver [`docs/seo/internal-linking.md`](../seo/internal-linking.md)).
- Cambio de `title` y `description` en el `metadata` de la página puede mover ranking. Monitorizar GSC 4-6 semanas tras deploy.
- Los 60 enlaces internos a `/cdp-para-hoteles/` que ya existen siguen válidos.

## Open questions / parqueado

- **WhatsApp QR demo del slide 14 del dossier** — pendiente `wa.me` oficial. Hoy quitado de la landing. Cuando se cablee, va al final justo antes del CTA "El contexto no se enciende".
- **Stats Fideltour (50M / 20M+ / 10M)** — confirmar con marketing que son las cifras oficiales para uso público antes de promocionar la landing.
- **"Fideltour ONE" en el resto del sitio** — la categoría sigue siendo "CDP para hoteles" pero el branding del producto podría unificarse a "ONE" en el header, footer y meta tags. Decisión postergada hasta validar adopción interna.
