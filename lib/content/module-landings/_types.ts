import type { LucideIcon } from "lucide-react";

export const moduleCategoryOrder = [
  "data-import",
  "data-intelligence",
  "data-activation",
  "multicanalidad",
] as const;

export type ModuleCategory = (typeof moduleCategoryOrder)[number];

export const moduleCategoryLabels: Record<ModuleCategory, string> = {
  "data-import": "Data Import",
  "data-intelligence": "Data Intelligence",
  "data-activation": "Data Activation",
  multicanalidad: "Multicanalidad",
};

export const moduleCategoryDescriptions: Record<ModuleCategory, string> = {
  "data-import":
    "Conecta cualquier fuente del hotel — PMS, motor, web, chatbot — y unifica el dato en tiempo real.",
  "data-intelligence":
    "Identidad única por huésped, segmentación y predicciones para decidir con criterio hotelero.",
  "data-activation":
    "Activa el dato en campañas, automatización, fidelización y experiencias que generan venta directa.",
  multicanalidad:
    "Habla con el huésped en cada canal — email, WhatsApp, SMS, push web y app — desde un solo perfil.",
};

/**
 * Entrada mínima usada por el mega-menú y el sitemap.
 * Las 23 entradas viven en `index.ts` aunque la landing aún no exista,
 * para que la navegación pueda mostrarlas. Una landing publicada amplía
 * esta entrada con el objeto `ModuleLanding` completo.
 */
export type ModuleNavEntry = {
  /** Slug WP exacto — preserva SEO. Ej. "integracion-pms-para-hoteles". */
  slug: string;
  /** Texto corto del menú. Ej. "PMS". */
  label: string;
  /** Una línea (3-6 palabras) que aparece bajo el label en el mega-menú. */
  description: string;
  category: ModuleCategory;
};

export type ModuleMiniCard = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type ModulePillar = {
  title: string;
  description: string;
  metric?: string;
};

export type ModuleBenefit = {
  title: string;
  description: string;
};

export type ModuleFaqItem = {
  question: string;
  answer: string;
};

export type ModuleLanding = {
  slug: string;
  category: ModuleCategory;
  /** Cómo aparece en el mega-menú. */
  navLabel: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    /**
     * Subcadena exacta de `title` que se renderiza con `text-brand`.
     * Si no se aporta, el título va en color base del heading.
     */
    titleAccent?: string;
    lead: string;
    /** Texto del CTA principal. Por defecto "Solicita una DEMO gratis". */
    ctaLabel?: string;
  };
  miniCards: ModuleMiniCard[];
  pillars: ModulePillar[];
  benefits: ModuleBenefit[];
  faq: ModuleFaqItem[];
  /**
   * Slug del caso de éxito (en `lib/content/casos.ts`) que se mostrará
   * como prueba social entre los módulos relacionados y la FAQ. Opcional —
   * si no se indica, la sección no se renderiza.
   */
  relatedCaso?: string;
};
