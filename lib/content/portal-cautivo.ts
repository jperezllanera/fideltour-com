import {
  Database,
  Layers,
  MailOpen,
  Plug,
  Sparkles,
  UserCheck,
  Wifi,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   /integracion-portal-cautivo-para-hoteles
   ----------------------------------------------------------------------
   Réplica del contenido público de
   fideltour.com/integracion-portal-cautivo-para-hoteles/. Posiciona la
   integración del portal cautivo WiFi como módulo de captura para el
   CDP de Fideltour.
   ────────────────────────────────────────────────────────────────────── */

export type PortalBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const portalBenefits: PortalBenefit[] = [
  {
    title: "Datos capturados desde el WiFi",
    description: "Cada acceso se transforma en información útil.",
    icon: Wifi,
  },
  {
    title: "Identificación inmediata del huésped",
    description: "Conoce a tus clientes desde su primer login.",
    icon: UserCheck,
  },
  {
    title: "Campañas segmentadas en tiempo real",
    description: "Activa estrategias de WiFi marketing para hoteles.",
    icon: MailOpen,
  },
];

export type PortalFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const portalFeatures: PortalFeature[] = [
  {
    title: "Importación automática de datos de acceso",
    description:
      "Registros de login, correos y teléfonos se añaden al CRM sin tareas manuales.",
    icon: Database,
  },
  {
    title: "Compatibilidad con múltiples proveedores",
    description:
      "Fideltour Connect integra portales cautivos líderes del mercado.",
    icon: Plug,
  },
  {
    title: "Ficha de contacto siempre enriquecida",
    description:
      "Cada huésped identificado por WiFi se asocia a su perfil único en Fideltour.",
    icon: Layers,
  },
  {
    title: "Integración nativa en Fideltour",
    description:
      "Activa campañas de bienvenida, upselling o encuestas usando los datos capturados.",
    icon: Workflow,
  },
];

export type PortalAdvantage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const portalAdvantages: PortalAdvantage[] = [
  {
    title: "Respuesta inmediata 24/7",
    description:
      "Cada acceso a la red WiFi se sincroniza al instante con tu CRM.",
    icon: Zap,
  },
  {
    title: "Integración nativa en Fideltour",
    description:
      "Todos los datos de conexión quedan centralizados en el ecosistema hotelero.",
    icon: Workflow,
  },
  {
    title: "Incrementa la fidelización",
    description:
      "Conecta el WiFi con Campaigns y Automation para aumentar la satisfacción y el revenue.",
    icon: Sparkles,
  },
];

export type PortalFaq = {
  question: string;
  answer: string;
};

export const portalFaq: PortalFaq[] = [
  {
    question: "¿Qué necesito para integrar mi portal cautivo?",
    answer:
      "Acceso a la API o credenciales de conexión del proveedor de WiFi. Nuestro equipo de Connect valida la integración antes del despliegue para asegurar que el flujo de datos funcione end-to-end.",
  },
  {
    question: "¿Cuánto se tarda en activar la integración?",
    answer:
      "Entre 1 y 2 semanas, según el sistema de portal cautivo y el volumen de hoteles a conectar. Te acompañamos en cada paso del onboarding.",
  },
  {
    question: "¿Qué coste tiene?",
    answer:
      "La integración está incluida en Fideltour Connect. El proveedor de WiFi puede requerir licencia o fee adicional, dependiendo de su política comercial.",
  },
];
