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
  /**
   * URL del PDF (u otro asset) que se entrega cuando el lead ya rellenó
   * el formulario. Vacío hoy: cuando senior conecte la entrega real
   * (S3 firmado, HubSpot file, etc.), basta con pegar aquí la URL y el
   * trigger de descarga se activa solo.
   *
   * TODO senior: rellenar con la URL real de cada ebook.
   */
  assetUrl?: string;
};

/* TODO copy: las descripciones son placeholders inferidos del título del PDF.
   Repásalas con marketing y reescribe para que cada una venda la pieza con
   honestidad (qué resuelve, a quién va dirigida, qué se lleva el lead). */
export const recursosEbooks: RecursosEbook[] = [
  {
    slug: "guest-journey",
    eyebrow: "Ebook · 01",
    title: "Mapa del Guest Journey",
    description:
      "Mapea las etapas del recorrido del huésped y descubre dónde se pierde valor cuando el dato no fluye entre canales.",
    pages: 30,
    cover: "/ebooks/ebook-guest-journey-cover.webp",
    coverAlt:
      "Portada del ebook Mapa del Guest Journey de Fideltour Academy",
    assetUrl: "/ebooks/ebook-guest-journey.pdf",
  },
  {
    slug: "reputacion-online",
    eyebrow: "Ebook · 02",
    title: "Guía para mejorar y mantener tu reputación online",
    description:
      "Cómo escuchar, responder y aprender de las reseñas para que tu reputación trabaje a favor del directo en vez de en contra.",
    pages: 31,
    cover: "/ebooks/ebook-reputacion-online-cover.webp",
    coverAlt:
      "Portada del ebook Guía para mejorar y mantener tu reputación online de Fideltour Academy",
    assetUrl: "/ebooks/ebook-reputacion-online.pdf",
  },
  {
    slug: "venta-directa",
    eyebrow: "Ebook · 03",
    title: "Acciones para incentivar la venta directa",
    description:
      "Tácticas concretas para mover al huésped del clic en una OTA al clic en tu motor: incentivos, contenido y momentos clave.",
    pages: 18,
    cover: "/ebooks/ebook-venta-directa-cover.webp",
    coverAlt:
      "Portada del ebook Acciones para incentivar la venta directa de Fideltour Academy",
    assetUrl: "/ebooks/ebook-venta-directa.pdf",
  },
  {
    slug: "calendario-comunicaciones-2026",
    eyebrow: "Recurso · 04",
    title: "Calendario de comunicaciones 2026",
    description:
      "El plan editorial del año en un solo documento: fechas clave, campañas y temas para que el equipo de marketing del hotel no improvise.",
    pages: 15,
    cover: "/ebooks/ebook-calendario-comunicaciones-2026-cover.webp",
    coverAlt:
      "Portada del Calendario de comunicaciones 2026 de Fideltour Academy",
    assetUrl: "/ebooks/ebook-calendario-comunicaciones-2026.pdf",
  },
];

/* Los vídeos de /recursos se sirven desde lib/content/videos.ts mediante
   `getHighlightedVideos()` — la sección hace un highlight del catálogo
   real (con miniaturas de YouTube), sin lista paralela. */
