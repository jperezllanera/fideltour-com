import {
  Compass,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { BlogCategorySlug } from "@/lib/content/blog";

/* ──────────────────────────────────────────────────────────────────────
   Propuestas de valor (3 bullets bajo el hero)
   ────────────────────────────────────────────────────────────────────── */

export type RecursosValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const recursosValues: RecursosValue[] = [
  {
    title: "Casos reales, no recetas genéricas",
    description:
      "Cada contenido nace de un problema concreto resuelto con un hotel real, no de un manual de marketing prestado de otro sector.",
    icon: Sparkles,
  },
  {
    title: "Pensado para que entiendas el porqué",
    description:
      "Explicamos qué ocurre en cada hotel y por qué, para que tomes decisiones con criterio en lugar de copiar tácticas a ciegas.",
    icon: Compass,
  },
  {
    title: "Aplicable a tu operación diaria",
    description:
      "Recursos prácticos pensados para tu PMS, tu motor de reservas y tu equipo de recepción y marketing — no para diapositivas de keynote.",
    icon: Workflow,
  },
];

/* ──────────────────────────────────────────────────────────────────────
   Artículos destacados (3 tiles que enlazan a posts reales del blog)
   ----------------------------------------------------------------------
   Solo definimos category + slug + eyebrow. El título, excerpt, cover
   image y autor se leen del MDX real vía `getPostBySlug` desde la
   sección. Así una sola fuente de verdad y la cover viaja con el post.
   ────────────────────────────────────────────────────────────────────── */

export type RecursosArticleRef = {
  category: BlogCategorySlug;
  slug: string;
  eyebrow: string;
};

export const recursosArticleRefs: RecursosArticleRef[] = [
  {
    category: "marketing",
    slug: "guia-definitiva-de-marketing-digital-para-tu-hotel",
    eyebrow: "Guías",
  },
  {
    category: "marketing",
    slug: "como-mejorar-la-reputacion-online",
    eyebrow: "Consejos",
  },
  {
    category: "marketing",
    slug: "fitur-claves-que-mas-se-repiten-para-2026",
    eyebrow: "Tendencias",
  },
];

/* ──────────────────────────────────────────────────────────────────────
   Ebooks (3 placeholders gated — el endpoint real lo cierra senior)
   ────────────────────────────────────────────────────────────────────── */

export type RecursosEbook = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  pages: number;
  /**
   * Portada del ebook en /public/ebooks/. Las imágenes son copias
   * SEO-friendly de mockups ya usados en los posts del blog. Cuando
   * marketing entregue artes definitivas, basta con reemplazar el WebP
   * en su ruta — el nombre de archivo se mantiene.
   */
  cover: string;
  coverAlt: string;
};

export const recursosEbooks: RecursosEbook[] = [
  {
    slug: "guest-journey",
    eyebrow: "Ebook · 01",
    title: "Guest Journey: del primer clic al recurring guest",
    description:
      "Mapea las 7 etapas del recorrido del huésped y descubre dónde se pierde valor cuando el dato no fluye entre canales.",
    pages: 38,
    cover: "/ebooks/ebook-guest-journey-cover.webp",
    coverAlt:
      "Portada del ebook Guest Journey de Fideltour: del primer clic al recurring guest",
  },
  {
    slug: "tendencias-sector",
    eyebrow: "Ebook · 02",
    title: "Tendencias del sector hotelero",
    description:
      "Los movimientos que están marcando el próximo ciclo: dato propio, automatización con criterio y venta directa rentable.",
    pages: 32,
    cover: "/ebooks/ebook-tendencias-sector-cover.webp",
    coverAlt:
      "Portada del ebook Tendencias del sector hotelero por Fideltour",
  },
  {
    slug: "planificacion-estrategica",
    eyebrow: "Ebook · 03",
    title: "Planificación estratégica para hoteleros",
    description:
      "Cómo aterrizar una hoja de ruta de fidelización realista: de los datos que ya tienes a los segmentos que mueven la cuenta de explotación.",
    pages: 44,
    cover: "/ebooks/ebook-planificacion-estrategica-cover.webp",
    coverAlt:
      "Portada del ebook Planificación estratégica para hoteleros por Fideltour",
  },
];

/* Los vídeos de /recursos se sirven desde lib/content/videos.ts mediante
   `getHighlightedVideos()` — la sección hace un highlight del catálogo
   real (con miniaturas de YouTube), sin lista paralela. */
