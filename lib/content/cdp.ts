import {
  Mail,
  MessageCircle,
  MessagesSquare,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   /cdp-para-hoteles — landing de categoría
   ----------------------------------------------------------------------
   Réplica del contenido público de fideltour.com/cdp-para-hoteles/.
   Define "CDP para hoteles" como categoría literal y enmarca la
   propuesta en una tarifa plana por habitación que cubre toda la
   escalera de fidelización.

   TODO senior: el CTA principal en el live abre un formulario propio
   ("#demo"). De momento redirige a /contacto.
   ────────────────────────────────────────────────────────────────────── */

export type CdpBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const cdpBenefits: CdpBenefit[] = [
  {
    title: "Respuesta inmediata 24/7",
    description:
      "El CDP actualiza la información constantemente para que tus campañas reaccionen en tiempo real.",
    icon: Zap,
  },
  {
    title: "Integración nativa en Fideltour",
    description:
      "Todos los datos accionables fluyen hacia todos los módulos incluidos en Fideltour CDP sin fricciones.",
    icon: Workflow,
  },
  {
    title: "Incrementa la fidelización",
    description:
      "Utiliza los datos centralizados para aumentar la recurrencia, el ticket medio y el valor del huésped.",
    icon: Sparkles,
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
    icon: Smartphone,
  },
];

export type CdpFaq = {
  question: string;
  answer: string;
};

export const cdpFaq: CdpFaq[] = [
  {
    question: "¿Qué es un CDP hotelero?",
    answer:
      "Un CDP hotelero es una plataforma que permite unificar y activar los datos del huésped a lo largo de todo su ciclo de vida, desde la captación del dato anónimo hasta la fidelización y repetición. En el caso de Fideltour, el CDP no se plantea como una herramienta aislada, sino como el núcleo de la Escalera de la Fidelización: un sistema que conecta datos, canales y automatizaciones para convertir estancias en relaciones duraderas, bajo un modelo de tarifa plana por habitación.",
  },
  {
    question: "¿Qué incluye exactamente Fideltour CDP?",
    answer:
      "Fideltour CDP incluye el acceso completo a la Escalera de la Fidelización de Fideltour, con todos sus módulos y capacidades activables desde una única plataforma. Esto permite trabajar la captación del dato, la identificación del huésped, la activación multicanal, las automatizaciones y la fidelización de forma progresiva, sin contratar piezas por separado.",
  },
  {
    question: "Casos de uso reales, desde el primer día",
    answer:
      "Fideltour CDP permite empezar por donde más impacto tenga para tu negocio: personalización pre-estancia, upselling automatizado, comunicación post-estancia o recuperación de huéspedes que no estaban repitiendo. La plataforma se adapta a tu operativa y a tus prioridades, permitiéndote evolucionar la fidelización sin rehacer procesos ni cambiar de herramienta.",
  },
  {
    question: "¿Cómo funciona el precio por habitación?",
    answer:
      "El modelo de Fideltour CDP se basa en una tarifa plana por habitación, lo que permite al hotel escalar su estrategia de fidelización sin penalizaciones por uso, número de módulos o crecimiento de la base de datos. El coste se alinea con la capacidad real del hotel y se mantiene estable aunque la estrategia evolucione.",
  },
  {
    question: "Empieza donde estés, crece cuando quieras",
    answer:
      "Fideltour se integra con los principales sistemas del ecosistema hotelero y permite una puesta en marcha progresiva, sin una dependencia excesiva de recursos técnicos internos. Los primeros casos de uso pueden activarse en semanas, sin necesidad de tener todo definido desde el inicio. La fidelización deja de ser un proyecto eterno y se convierte en una práctica continua.",
  },
  {
    question: "¿Incluye todos los canales de comunicación?",
    answer:
      "Fideltour CDP incluye el email marketing como canal de comunicación dentro de la tarifa plana. Las comunicaciones a través de canales distintos al email (como WhatsApp, SMS u otros canales conversacionales) se gestionan mediante un sistema de créditos, que permite adaptar el uso y el volumen a la operativa real de cada hotel o cadena. Este modelo garantiza flexibilidad en la multicanalidad sin romper la lógica de tarifa plana ni penalizar el crecimiento de la estrategia.",
  },
];
