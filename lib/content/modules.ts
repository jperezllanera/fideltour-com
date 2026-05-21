export type BentoModule = {
  id: string;
  label: string;
  title: string;
  description: string;
  /** Tailwind classes para tamaño en el grid xl (12 cols) */
  span: string;
  /** Etiqueta-dato corta en el área visual (Instrument Mono) */
  metric?: string;
};

/**
 * 12 módulos del CDP — placeholder editable.
 * El orden + span define el ritmo visual del bento (asimétrico, mobile-first).
 */
export const bentoModules: BentoModule[] = [
  {
    id: "01",
    label: "MODULE_01",
    title: "Perfil unificado",
    description: "Identidad única por huésped y hogar, con histórico de reservas y estancias consolidado.",
    span: "xl:col-span-5 xl:row-span-2",
    metric: "1 huésped · n estancias",
  },
  {
    id: "02",
    label: "MODULE_02",
    title: "Reservas y estancias",
    description: "Toda la actividad del PMS y booking engine en un solo timeline.",
    span: "xl:col-span-4",
    metric: "PMS · BE · OTAs",
  },
  {
    id: "03",
    label: "MODULE_03",
    title: "Segmentación dinámica",
    description: "Audiencias que se recalculan en tiempo real cuando cambia el comportamiento.",
    span: "xl:col-span-3",
    metric: "Recompute · 60 s",
  },
  {
    id: "04",
    label: "MODULE_04",
    title: "Scoring predictivo",
    description: "Probabilidad de reserva, riesgo de churn y potencial de upsell por huésped.",
    span: "xl:col-span-3",
    metric: "P(reserva) · 0.87",
  },
  {
    id: "05",
    label: "MODULE_05",
    title: "Email & SMS",
    description: "Ciclos de vida del huésped antes, durante y después de la estancia.",
    span: "xl:col-span-3",
    metric: "Lifecycle · 12 pasos",
  },
  {
    id: "06",
    label: "MODULE_06",
    title: "WhatsApp & Push",
    description: "Conversación in-stay con orquestación contextual.",
    span: "xl:col-span-3",
    metric: "Conversational · in-stay",
  },
  {
    id: "07",
    label: "MODULE_07",
    title: "Personalización web",
    description: "Contenido, ofertas y precios adaptados al perfil del visitante en directo.",
    span: "xl:col-span-3",
    metric: "On-site · real-time",
  },
  {
    id: "08",
    label: "MODULE_08",
    title: "Audiencias Ads",
    description: "Sincroniza segmentos a Meta, Google y The Trade Desk con consentimiento.",
    span: "xl:col-span-4 xl:row-span-2",
    metric: "Meta · Google · TTD",
  },
  {
    id: "09",
    label: "MODULE_09",
    title: "Atribución revenue",
    description: "Del touchpoint al ingreso confirmado, por canal y campaña.",
    span: "xl:col-span-4",
    metric: "€ por canal",
  },
  {
    id: "10",
    label: "MODULE_10",
    title: "Consentimiento & RGPD",
    description: "Centro de preferencias y gobierno del dato por huésped.",
    span: "xl:col-span-4",
    metric: "GDPR · opt-in granular",
  },
  {
    id: "11",
    label: "MODULE_11",
    title: "Inbox unificado",
    description: "Email, chat, WhatsApp y voz en una sola conversación por huésped.",
    span: "xl:col-span-4",
    metric: "Omni · 1 thread",
  },
  {
    id: "12",
    label: "MODULE_12",
    title: "Analítica omnicanal",
    description: "Dashboards listos para revenue, marketing y operaciones.",
    span: "xl:col-span-4",
    metric: "Dashboards · live",
  },
];
