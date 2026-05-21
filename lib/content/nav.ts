export type NavLink = { label: string; href: string; description?: string };

export const platformGroups: {
  title: string;
  description: string;
  items: NavLink[];
}[] = [
  {
    title: "Data Import",
    description: "Conecta y unifica todas tus fuentes de datos hoteleros.",
    items: [
      { label: "Conectores PMS", href: "#", description: "Integración con tu PMS y channel manager." },
      { label: "Booking engine", href: "#", description: "Captura cada paso del funnel de reserva directa." },
      { label: "Web & apps", href: "#", description: "Tracking en sitio, app y kioscos." },
      { label: "Fuentes offline", href: "#", description: "Recepción, F&B, spa, eventos." },
    ],
  },
  {
    title: "Data Intelligence",
    description: "Convierte datos en conocimiento accionable del cliente.",
    items: [
      { label: "Perfil unificado", href: "#", description: "Identidad única por huésped y por hogar." },
      { label: "Segmentación", href: "#", description: "Audiencias dinámicas en tiempo real." },
      { label: "Scoring y predicciones", href: "#", description: "Probabilidad de reserva, churn y upsell." },
      { label: "Atribución", href: "#", description: "Del touchpoint al ingreso confirmado." },
    ],
  },
  {
    title: "Data Activation",
    description: "Activa el dato en cada canal con criterio hotelero.",
    items: [
      { label: "Email & SMS", href: "#", description: "Campañas y ciclos de vida del huésped." },
      { label: "Push & WhatsApp", href: "#", description: "Mensajería conversacional in-stay." },
      { label: "Personalización web", href: "#", description: "Contenido y ofertas adaptadas en directo." },
      { label: "Ads & audiencias", href: "#", description: "Sincroniza segmentos con Meta, Google y TTD." },
    ],
  },
  {
    title: "Multicanalidad",
    description: "Una sola conversación con el huésped, esté donde esté.",
    items: [
      { label: "Orquestación", href: "#", description: "Flujos cross-canal sin colisiones." },
      { label: "Inbox unificado", href: "#", description: "Email, chat, WhatsApp y voz en un lugar." },
      { label: "Centro de preferencias", href: "#", description: "Consentimiento y opt-ins gobernados." },
      { label: "Analítica omnicanal", href: "#", description: "Atribución y revenue por canal." },
    ],
  },
];

export const topNavLinks: NavLink[] = [
  { label: "Clientes", href: "#clientes" },
  { label: "Recursos", href: "#recursos" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Contacto", href: "#contacto" },
  { label: "Blog", href: "#blog" },
];
