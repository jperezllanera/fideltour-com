/**
 * Env vars tipadas + validadas en build time.
 *
 * Usar siempre `env.X` en lugar de `process.env.X` directo. Si una var
 * falta o tiene formato incorrecto, el build falla con mensaje claro
 * indicando qué var y qué se esperaba. Esto evita los errores
 * silenciosos típicos donde analytics no arranca y nadie se entera.
 *
 * Para añadir una var:
 *   1. Decide si es `server` (solo backend) o `client` (expuesta al
 *      bundle, debe llevar prefijo `NEXT_PUBLIC_`).
 *   2. Añádela al schema correspondiente con su Zod schema.
 *   3. Añádela en `runtimeEnv` (necesario porque Next.js inyecta vars
 *      en build time y el bundler las recorta).
 *   4. Documéntala en `.env.example`.
 */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    /**
     * Entorno lógico del deploy (independiente de NODE_ENV).
     * Coolify lo setea via env var de service. Se usa para decidir si
     * indexamos (production) o bloqueamos crawlers (preview/staging).
     */
    APP_ENV: z
      .enum(["development", "preview", "staging", "production"])
      .default("development"),

    // DB (Sprint 4+ — opcional hasta entonces)
    DATABASE_URL: z.string().url().optional(),
    DATABASE_URL_READONLY: z.string().url().optional(),

    // Origen del contenido — controla si los loaders leen filesystem o CMS.
    CONTENT_SOURCE: z.enum(["filesystem", "cms"]).default("filesystem"),

    // Payload (Sprint 4+)
    PAYLOAD_SECRET: z.string().min(32).optional(),
    PAYLOAD_PUBLIC_SERVER_URL: z.string().url().optional(),
    PAYLOAD_REVALIDATE_SECRET: z.string().min(16).optional(),

    // Cloudflare R2 (assets)
    CLOUDFLARE_R2_ACCOUNT_ID: z.string().optional(),
    CLOUDFLARE_R2_ACCESS_KEY_ID: z.string().optional(),
    CLOUDFLARE_R2_SECRET_ACCESS_KEY: z.string().optional(),
    CLOUDFLARE_R2_BUCKET: z.string().optional(),

    // imgproxy
    IMGPROXY_URL: z.string().url().optional(),
    IMGPROXY_KEY: z.string().optional(),
    IMGPROXY_SALT: z.string().optional(),

    // Redis cache
    REDIS_URL: z.string().url().optional(),

    // GrowthBook server-side
    GROWTHBOOK_API_HOST: z.string().url().optional(),

    // Sentry build-time (sourcemaps upload)
    SENTRY_AUTH_TOKEN: z.string().optional(),
    SENTRY_ORG: z.string().optional(),
    SENTRY_PROJECT: z.string().optional(),
  },

  client: {
    // Site
    NEXT_PUBLIC_SITE_URL: z.string().url(),

    // Analytics privacy-first (Plausible self-hosted)
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
    NEXT_PUBLIC_PLAUSIBLE_API_HOST: z.string().url().optional(),

    // Tracking legacy consent-gated
    NEXT_PUBLIC_GTM_ID: z
      .string()
      .regex(/^GTM-[A-Z0-9]+$/, "GTM ID debe tener formato GTM-XXXXXXX")
      .optional(),
    NEXT_PUBLIC_COOKIEBOT_ID: z
      .string()
      .uuid("Cookiebot ID debe ser UUID")
      .optional(),

    // Feature flags
    NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY: z.string().optional(),

    // Observability
    NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
    NEXT_PUBLIC_SENTRY_RELEASE: z.string().optional(),

    // Verification codes (Google Search Console + Bing Webmaster Tools)
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
    NEXT_PUBLIC_BING_SITE_VERIFICATION: z.string().optional(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    APP_ENV: process.env.APP_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_URL_READONLY: process.env.DATABASE_URL_READONLY,
    CONTENT_SOURCE: process.env.CONTENT_SOURCE,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    PAYLOAD_PUBLIC_SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    PAYLOAD_REVALIDATE_SECRET: process.env.PAYLOAD_REVALIDATE_SECRET,
    CLOUDFLARE_R2_ACCOUNT_ID: process.env.CLOUDFLARE_R2_ACCOUNT_ID,
    CLOUDFLARE_R2_ACCESS_KEY_ID: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    CLOUDFLARE_R2_SECRET_ACCESS_KEY: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
    CLOUDFLARE_R2_BUCKET: process.env.CLOUDFLARE_R2_BUCKET,
    IMGPROXY_URL: process.env.IMGPROXY_URL,
    IMGPROXY_KEY: process.env.IMGPROXY_KEY,
    IMGPROXY_SALT: process.env.IMGPROXY_SALT,
    REDIS_URL: process.env.REDIS_URL,
    GROWTHBOOK_API_HOST: process.env.GROWTHBOOK_API_HOST,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,

    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    NEXT_PUBLIC_PLAUSIBLE_API_HOST: process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_COOKIEBOT_ID: process.env.NEXT_PUBLIC_COOKIEBOT_ID,
    NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY:
      process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_RELEASE: process.env.NEXT_PUBLIC_SENTRY_RELEASE,
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    NEXT_PUBLIC_BING_SITE_VERIFICATION:
      process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  },

  // Permite que vars opcionales puedan llegar como string vacío sin
  // que Zod las marque como inválidas.
  emptyStringAsUndefined: true,

  // Si saltamos validation en dev (e.g., para arrancar sin .env.local),
  // poner SKIP_ENV_VALIDATION=true. NO usar en prod.
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
