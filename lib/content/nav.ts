import {
  getModuleCategoriesWithEntries,
  moduleCategoryDescriptions,
  moduleCategoryLabels,
} from "./module-landings";

export type NavLink = { label: string; href: string; description?: string };

/**
 * Grupos del mega-menú "Plataforma" — las cuatro familias reales del
 * catálogo Fideltour. Se derivan del índice de `module-landings` para
 * que añadir o renombrar un módulo solo requiera tocar ese fichero.
 *
 *   Data Import → ingesta del dato (PMS, motor, web, chatbot…).
 *   Data Intelligence → identidad, segmentación, predicción.
 *   Data Activation → campañas, automatización, fidelización.
 *   Multicanalidad → email, WhatsApp, SMS, push.
 *
 * Algunos slugs aún no tienen página migrada — se mantienen en el menú
 * para que la nav sea completa; el link 404 hasta que migremos la landing
 * (tarea pendiente, ver `lib/content/module-landings/index.ts`).
 */
export const platformGroups: {
  title: string;
  description: string;
  items: NavLink[];
}[] = getModuleCategoriesWithEntries().map(({ category, entries }) => ({
  title: moduleCategoryLabels[category],
  description: moduleCategoryDescriptions[category],
  items: entries.map((entry) => ({
    label: entry.label,
    href: `/${entry.slug}/`,
    description: entry.description,
  })),
}));

export const platformFeatured = {
  eyebrow: "CDP para hoteles",
  title: "Del CRM al CDP",
  description:
    "El hotelero que domina el dato, domina la venta directa.",
  ctaLabel: "Ver plataforma",
  ctaHref: "/#plataforma",
  /* ID del vídeo de YouTube embebido en el mega-menú. Se usa el dominio
     youtube-nocookie.com en el iframe para no setear cookies de tracking
     hasta que el usuario reproduzca. */
  youtubeId: "2nEg-0mQVyc",
};

export const topNavLinks: NavLink[] = [
  { label: "Clientes", href: "/clientes" },
  { label: "Recursos", href: "/recursos" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Contacto", href: "/contacto" },
  { label: "Blog", href: "/blog" },
];
