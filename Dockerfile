# syntax=docker/dockerfile:1

# ================================
# Base image con Node.js
# ================================
# node:24-slim para alinear con .node-version=24 (Next 16 exige Node >=20.9).
FROM node:24-slim AS base
WORKDIR /app
# No instalar git hooks de husky dentro de la imagen (no hay .git aquí).
ENV HUSKY=0
ENV NEXT_TELEMETRY_DISABLED=1

# ================================
# Dependencies stage
# ================================
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ================================
# Builder stage
# ================================
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ─── Variables build-time ───────────────────────────────────────────────
# Las NEXT_PUBLIC_* se incrustan en el bundle JS durante `next build` (no se
# leen en runtime). APP_ENV decide robots.txt/sitemap.xml, que se
# prerenderizan en build (rutas estáticas). Por eso TODAS estas deben llegar
# como build args, no basta con el panel de runtime de Coolify.
#
# En Coolify: cada una marcada como "Build Variable" (Build Time) en el
# service. Los valores NO viven en el repo — aquí solo se declaran los huecos.
# Si APP_ENV no se pasa, env.ts cae a "development" y robots.txt bloquea a
# todos los bots (fail-safe: nunca indexa por accidente). Producción DEBE
# setear APP_ENV=production. NEXT_PUBLIC_SITE_URL es obligatoria: si falta,
# el build falla a propósito (forcing function).
ARG NEXT_PUBLIC_SITE_URL
ARG APP_ENV
ARG NEXT_PUBLIC_PLAUSIBLE_DOMAIN
ARG NEXT_PUBLIC_PLAUSIBLE_API_HOST
ARG NEXT_PUBLIC_GTM_ID
ARG NEXT_PUBLIC_COOKIEBOT_ID
ARG NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY
ARG NEXT_PUBLIC_SENTRY_DSN
ARG NEXT_PUBLIC_SENTRY_RELEASE
ARG NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
ARG NEXT_PUBLIC_BING_SITE_VERIFICATION

ENV NODE_ENV=production \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    APP_ENV=$APP_ENV \
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN=$NEXT_PUBLIC_PLAUSIBLE_DOMAIN \
    NEXT_PUBLIC_PLAUSIBLE_API_HOST=$NEXT_PUBLIC_PLAUSIBLE_API_HOST \
    NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID \
    NEXT_PUBLIC_COOKIEBOT_ID=$NEXT_PUBLIC_COOKIEBOT_ID \
    NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY=$NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY \
    NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN \
    NEXT_PUBLIC_SENTRY_RELEASE=$NEXT_PUBLIC_SENTRY_RELEASE \
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=$NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION \
    NEXT_PUBLIC_BING_SITE_VERIFICATION=$NEXT_PUBLIC_BING_SITE_VERIFICATION

RUN npm run build

# ================================
# Production stage (runner)
# ================================
FROM base AS runner
ENV NODE_ENV=production

# Usuario no-root
RUN groupadd --gid 1001 nodejs \
    && useradd --uid 1001 --gid 1001 --no-create-home --shell /bin/bash nextjs

# Output standalone de Next.js: public/ y .next/static/ NO se copian solos,
# hay que traerlos a mano junto al server.js minimal.
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# El blog es 100% SSG (generateStaticParams + RSS force-static), así que el
# contenido se prerenderiza en build. Copiamos content/ como seguro por si
# alguna ruta pasa a dinámica/ISR en el futuro.
COPY --from=builder --chown=nextjs:nodejs /app/content ./content

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Si el server no responde 200 en la home en 40s, Coolify marca el deploy KO.
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

CMD ["node", "server.js"]
