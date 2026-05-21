import {
  BookOpenText,
  Compass,
  LineChart,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";

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
   Artículos destacados (3 tiles que enlazan al blog)
   ────────────────────────────────────────────────────────────────────── */

export type RecursosArticleTeaser = {
  eyebrow: string;
  title: string;
  excerpt: string;
  href: string;
  icon: LucideIcon;
};

export const recursosArticles: RecursosArticleTeaser[] = [
  {
    eyebrow: "Guías",
    title: "Marketing digital para hoteles",
    excerpt:
      "Cómo estructurar la captación, la fidelización y la venta directa cuando el dato del huésped vive disperso entre PMS, motor y CRM.",
    href: "/blog/marketing/",
    icon: BookOpenText,
  },
  {
    eyebrow: "Consejos",
    title: "Cómo mejorar la reputación online de tu hotel",
    excerpt:
      "Del review en TripAdvisor al NPS post-estancia: rutinas y automatismos para que la voz del huésped trabaje a favor de la venta directa.",
    href: "/blog/fidelizacion/",
    icon: TrendingUp,
  },
  {
    eyebrow: "Tendencias",
    title: "Cómo será la hotelería en 2026",
    excerpt:
      "Dato unificado, personalización en tiempo real y menos dependencia de OTAs. Lo que ya están haciendo los hoteleros que dominan el dato.",
    href: "/blog/fideltour/",
    icon: LineChart,
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
   * Anchor al formulario de captura visible en la propia página.
   * TODO senior: sustituir por endpoint real de descarga + lead capture
   * cuando marketing decida la stack (HubSpot, Brevo, custom).
   */
  href: string;
};

export const recursosEbooks: RecursosEbook[] = [
  {
    slug: "guest-journey",
    eyebrow: "Ebook · 01",
    title: "Guest Journey: del primer clic al recurring guest",
    description:
      "Mapea las 7 etapas del recorrido del huésped y descubre dónde se pierde valor cuando el dato no fluye entre canales.",
    pages: 38,
    href: "#captura",
  },
  {
    slug: "tendencias-sector",
    eyebrow: "Ebook · 02",
    title: "Tendencias del sector hotelero",
    description:
      "Los movimientos que están marcando el próximo ciclo: dato propio, automatización con criterio y venta directa rentable.",
    pages: 32,
    href: "#captura",
  },
  {
    slug: "planificacion-estrategica",
    eyebrow: "Ebook · 03",
    title: "Planificación estratégica para hoteleros",
    description:
      "Cómo aterrizar una hoja de ruta de fidelización realista: de los datos que ya tienes a los segmentos que mueven la cuenta de explotación.",
    pages: 44,
    href: "#captura",
  },
];

/* ──────────────────────────────────────────────────────────────────────
   Vídeos (7 tiles — FidelTalks y cápsulas formativas)
   ────────────────────────────────────────────────────────────────────── */

export type RecursosVideo = {
  slug: string;
  category: "FidelTalks" | "Cápsula" | "Caso real";
  title: string;
  description: string;
  duration: string;
  /**
   * TODO senior: enlazar al embed real de YouTube/Spotify cuando se
   * publique la página de detalle de cada vídeo.
   */
  href: string;
};

export const recursosVideos: RecursosVideo[] = [
  {
    slug: "automatiza-guest-journey",
    category: "Cápsula",
    title: "Automatiza el guest journey",
    description:
      "Cómo orquestar mensajes pre, durante y post estancia sin saturar al huésped ni colisionar con el equipo de recepción.",
    duration: "6 min",
    href: "/recursos/nuestros-videos-crm-hotelero/",
  },
  {
    slug: "unifica-tus-datos",
    category: "Cápsula",
    title: "Unifica tus datos hoteleros",
    description:
      "Por qué el perfil unificado del huésped es la pieza que falta para que tu marketing deje de ir a ciegas.",
    duration: "5 min",
    href: "/recursos/nuestros-videos-crm-hotelero/",
  },
  {
    slug: "fideltalks-venta-directa",
    category: "FidelTalks",
    title: "FidelTalks · Reducir la dependencia de las OTAs",
    description:
      "Conversación con un director de hotel independiente sobre cómo recuperar margen sin renunciar a la ocupación.",
    duration: "22 min",
    href: "/recursos/nuestros-videos-crm-hotelero/",
  },
  {
    slug: "fideltalks-segmentacion",
    category: "FidelTalks",
    title: "FidelTalks · Segmentar con criterio hotelero",
    description:
      "Cómo construir audiencias dinámicas que entienden el ciclo del huésped en lugar de heredar segmentos de e-commerce.",
    duration: "18 min",
    href: "/recursos/nuestros-videos-crm-hotelero/",
  },
  {
    slug: "fideltalks-revenue-personalizacion",
    category: "FidelTalks",
    title: "FidelTalks · Revenue y personalización",
    description:
      "Cuándo personalizar el precio, cuándo personalizar la oferta y por qué confundirlos cuesta dinero al hotel.",
    duration: "24 min",
    href: "/recursos/nuestros-videos-crm-hotelero/",
  },
  {
    slug: "caso-grupo-hotelero-costa",
    category: "Caso real",
    title: "Caso real · Grupo hotelero en costa",
    description:
      "De 30+ hojas Excel sueltas a un único perfil del huésped en 90 días, contado por el propio equipo de marketing.",
    duration: "9 min",
    href: "/recursos/nuestros-videos-crm-hotelero/",
  },
  {
    slug: "capsula-del-crm-al-cdp",
    category: "Cápsula",
    title: "Del CRM al CDP en hotelería",
    description:
      "Qué diferencia un CRM hotelero de un CDP para hoteles y por qué la diferencia se nota en la cuenta de explotación.",
    duration: "7 min",
    href: "/recursos/nuestros-videos-crm-hotelero/",
  },
];

export const recursosVideoIcon: LucideIcon = PlayCircle;
