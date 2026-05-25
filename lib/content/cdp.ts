import {
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  Database,
  Gift,
  Layers,
  Mail,
  MessageCircle,
  MessagesSquare,
  Plug2,
  Send,
  Sparkles,
  Star,
  UserCheck,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   /cdp-para-hoteles — landing pillar de categoría
   ----------------------------------------------------------------------
   Construida sobre el dossier de Agoratech 2026 "Glosario agéntico ·
   Fideltour ONE". El término "agéntico" se usa solo como atributo
   táctico (era agéntica, agente de venta, agente de contexto), nunca
   como categoría — la categoría literal es "CDP para hoteles".

   Estructura del relato (15 slides → 11 secciones):
     1. Hero — "La reserva está a punto de cambiar".
     2. Era shift — ayer/hoy/mañana, qué activo gana cada era.
     3. Sales agent — tu motor de reservas conversa, necesita contexto.
     4. Three sources — integraciones, aplicaciones, canales.
     5. Anonymous traffic — el 80% que tu CRM no ve.
     6. Context comparison — la misma IA, dos resultados.
     7. Ecosystem — el CDP es el centro del ecosistema del dato.
     8. Modules — 12 módulos, una sola tarifa: Fideltour ONE.
     9. Timeline — 25 años de cambio de activo.
    10. Stats — 50M huéspedes, 20M reservas, 10M teléfonos.
    11. Final CTA — "el contexto no se enciende, se acumula".

   TODO senior: el CTA principal redirige a /contacto. Cuando exista el
   formulario embebido propio, sustituir el href.
   ────────────────────────────────────────────────────────────────────── */

export type CdpEra = {
  kicker: "Ayer" | "Hoy" | "Mañana";
  name: string;
  description: string;
  asset: string;
  highlight?: boolean;
};

export const cdpEras: CdpEra[] = [
  {
    kicker: "Ayer",
    name: "El buscador.",
    description:
      "Diez pestañas abiertas comparando a mano. El huésped llegaba al hotel después de mirar precios y fotos uno por uno.",
    asset: "Posicionamiento",
  },
  {
    kicker: "Hoy",
    name: "El asistente.",
    description:
      "El huésped le pregunta a una IA y ésta le recomienda. La conversación filtra antes de que llegue a tu web.",
    asset: "Contenido",
  },
  {
    kicker: "Mañana",
    name: "El agente.",
    description:
      "El agente del huésped reserva por él. Ya no compara: negocia, decide y cierra en su nombre.",
    asset: "Contexto",
    highlight: true,
  },
];

export type CdpSource = {
  number: string;
  kicker: string;
  title: string;
  description: string;
  label: string;
  icon: LucideIcon;
};

export const cdpSources: CdpSource[] = [
  {
    number: "01",
    kicker: "Conectividad",
    title: "Integraciones.",
    description:
      "Web, PMS, chatbot, contact center, motor, channel manager. El mayor marketplace de conectividad del sector hotelero.",
    label: "Dónde vive el dato",
    icon: Plug2,
  },
  {
    number: "02",
    kicker: "Producto",
    title: "Aplicaciones.",
    description:
      "Los 12 módulos de Fideltour ONE. Cada uno captura un tipo de dato: Reviews sabe si quedó contento, CRM qué reservó, Loyalty cuánto vale.",
    label: "Qué tipo de dato",
    icon: Layers,
  },
  {
    number: "03",
    kicker: "Conversación",
    title: "Canales.",
    description:
      "Chat, WhatsApp, voz, email, redes. Cada conversación es dato vivo de intención en el momento que sucede.",
    label: "Cómo entra el dato",
    icon: MessagesSquare,
  },
];

export type CdpModule = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const cdpModules: CdpModule[] = [
  { id: "01", name: "CRM", description: "El huésped, centralizado.", icon: UserCheck },
  { id: "02", name: "Campañas", description: "Comunicación segmentada multicanal.", icon: Send },
  { id: "03", name: "Automation", description: "Journeys automáticos pre, durante y post.", icon: Workflow },
  { id: "04", name: "Landings", description: "Páginas y captive portals personalizados.", icon: Layers },
  { id: "05", name: "Reviews", description: "Reputación gestionada en un solo sitio.", icon: Star },
  { id: "06", name: "Identity", description: "Identidad unificada online y offline.", icon: BadgeCheck },
  { id: "07", name: "B2B", description: "Cuentas corporativas y MICE.", icon: Building2 },
  { id: "08", name: "Social", description: "Redes y conversación, en flujo.", icon: MessageCircle },
  { id: "09", name: "Loyalty", description: "Fidelización y rewards dinámicos.", icon: Gift },
  { id: "10", name: "Insights", description: "Analítica y predicción accionable.", icon: BarChart3 },
  { id: "11", name: "Connect", description: "Integraciones nativas con tu stack.", icon: Plug2 },
  { id: "12", name: "Agents", description: "Control de los agentes de IA.", icon: Bot },
];

export type CdpTimelineStep = {
  year: string;
  title: string;
  description: string;
  current?: boolean;
  future?: boolean;
};

export const cdpTimeline: CdpTimelineStep[] = [
  { year: "2000", title: "El touroperador", description: "te trae al cliente" },
  { year: "2008", title: "La OTA", description: "comisión por la demanda" },
  { year: "2012", title: "El motor de reservas", description: "vendes directo online" },
  { year: "2018", title: "El CRM", description: "guardas a quien ya conoces" },
  { year: "2021", title: "Centralización del dato", description: "unificas tus fuentes" },
  { year: "2024", title: "El dato anónimo", description: "ves el 80% que no veías" },
  { year: "2025", title: "La IA", description: "el dato empieza a actuar" },
  { year: "2026", title: "El CDP del hotel", description: "tu agente vende con contexto", current: true },
  { year: "≈2027", title: "A2A", description: "tu agente negocia con el suyo", future: true },
];

export type CdpStat = {
  value: string;
  label: string;
  description: string;
};

export const cdpStats: CdpStat[] = [
  {
    value: "50M",
    label: "Huéspedes unificados",
    description: "En un único perfil con todo su contexto.",
  },
  {
    value: "20M+",
    label: "Reservas procesadas",
    description: "Con datos limpios y atribuidos.",
  },
  {
    value: "10M",
    label: "Teléfonos identificados",
    description: "Listos para conversar por WhatsApp y voz.",
  },
];

export type CdpHeroFeatured = {
  icon: LucideIcon;
  kicker: string;
  title: string;
};

export const cdpHeroFeatured: CdpHeroFeatured[] = [
  {
    icon: Sparkles,
    kicker: "La búsqueda",
    title: "51% → 36%",
  },
  {
    icon: Zap,
    kicker: "La IA generativa",
    title: "6% → 15%",
  },
  {
    icon: Database,
    kicker: "Tu activo",
    title: "El contexto",
  },
];

export type CdpChannel = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const cdpChannels: CdpChannel[] = [
  {
    slug: "email",
    name: "Email Campaigns",
    description:
      "Incluido en la tarifa plana. Newsletters, automatizaciones y campañas transaccionales sobre la misma fuente de verdad.",
    icon: Mail,
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    description:
      "Conversaciones uno a uno y broadcasts segmentados desde el perfil unificado del huésped.",
    icon: MessageCircle,
  },
  {
    slug: "web-push",
    name: "Web Push",
    description:
      "Notificaciones contextuales en la web del hotel para activar ofertas, recordatorios y upsell pre-estancia.",
    icon: MessagesSquare,
  },
  {
    slug: "sms",
    name: "SMS",
    description:
      "Mensajería corta y de alta entrega para confirmaciones, alertas y campañas urgentes.",
    icon: MessageCircle,
  },
];

export type CdpFaq = {
  question: string;
  answer: string;
};

export const cdpFaq: CdpFaq[] = [
  {
    question: "¿Qué es un CDP para hoteles?",
    answer:
      "Un CDP para hoteles es la capa que unifica y activa el dato del huésped a lo largo de todo su ciclo de vida, desde la captación del dato anónimo hasta la fidelización y repetición. En Fideltour, el CDP no es una herramienta aislada: es el núcleo de la escalera de fidelización, un sistema que conecta integraciones, aplicaciones y canales para convertir cada estancia en una relación duradera.",
  },
  {
    question: "¿Qué incluye exactamente Fideltour ONE?",
    answer:
      "Fideltour ONE incluye los 12 módulos del CDP — CRM, Campañas, Automation, Landings, Reviews, Identity, B2B, Social, Loyalty, Insights, Connect y Agents — bajo una sola tarifa por habitación. La IA agéntica es transversal a todos los módulos. Nada se compra por separado: el contexto del huésped vive en un solo sitio.",
  },
  {
    question: "¿En qué se diferencia un CDP de un CRM?",
    answer:
      "El CRM recuerda a quien ya conoces — los contactos identificados, alrededor del 20% de tu tráfico web. El CDP entiende también al 80% restante, el dato anónimo de intención (qué miró, qué fechas buscó, dónde dudó). Es ahí donde se gana la venta directa: identificando antes, no después.",
  },
  {
    question: "¿Qué quiere decir 'agente de venta' aplicado al hotel?",
    answer:
      "Tu motor de reservas deja de esperar a que el huésped rellene un formulario y empieza a conversar — por web, WhatsApp o voz — proponiendo, cotizando y cerrando. Necesita un agente de contexto (el CDP) que le diga quién es el huésped, qué reservó antes y qué le gusta. Sin contexto, alucina o solo adivina.",
  },
  {
    question: "¿Cómo funciona el precio por habitación?",
    answer:
      "Fideltour ONE se cobra como tarifa plana por habitación: el coste se alinea con la capacidad real del hotel y se mantiene estable aunque la estrategia crezca, los módulos activos cambien o la base de datos se dispare. Sin penalizaciones por uso ni por crecimiento.",
  },
  {
    question: "¿Cuánto se tarda en empezar?",
    answer:
      "Fideltour se integra con los principales sistemas del ecosistema hotelero — PMS, motor, web, channel manager, contact center — y permite una puesta en marcha progresiva. Los primeros casos de uso pueden activarse en semanas, sin necesidad de tener todo definido desde el inicio. El contexto no se enciende: se acumula.",
  },
];
