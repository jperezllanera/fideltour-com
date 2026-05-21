import {
  BarChart3,
  Building2,
  Mail,
  Rocket,
  Sparkles,
  Star,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   Kit Digital — /kit-digital-fideltour
   ----------------------------------------------------------------------
   Réplica del contenido público de fideltour.com/kit-digital-fideltour/.
   Los importes y categorías son los del programa oficial Kit Digital
   Next Generation EU del Gobierno de España. Mantener la nomenclatura
   oficial de las categorías subvencionables ("Gestión de clientes",
   "Gestión de procesos", "Business Intelligence y Analítica") aunque la
   propuesta general de Fideltour sea CDP para hoteles.

   TODO senior: el CTA principal ("Quiero el Kit Digital") en la web
   original abre un formulario propio. De momento apunta a /contacto.
   ────────────────────────────────────────────────────────────────────── */

export type KitDigitalModule = {
  slug: string;
  product: string;
  category: string;
  description: string;
  icon: LucideIcon;
  subsidies: {
    segment: "Segmento I" | "Segmento II" | "Segmento III";
    amount: string;
  }[];
  priceRange?: string;
};

export const kitDigitalModules: KitDigitalModule[] = [
  {
    slug: "crm",
    product: "CRM Fideltour",
    category: "Gestión de clientes",
    description:
      "Incrementa la venta directa segmentando y personalizando todas tus comunicaciones con nuestro módulo CRM.",
    icon: Users,
    subsidies: [
      { segment: "Segmento I", amount: "4.000 €" },
      { segment: "Segmento II", amount: "2.000 €" },
      { segment: "Segmento III", amount: "2.000 €" },
    ],
  },
  {
    slug: "marketing",
    product: "Fideltour Marketing",
    category: "Gestión de procesos",
    description:
      "Maximiza la conversión de tu web automatizando campañas personalizadas y conectando todos los puntos de contacto con el huésped.",
    icon: Mail,
    subsidies: [
      { segment: "Segmento I", amount: "6.000 €" },
      { segment: "Segmento II", amount: "3.000 €" },
      { segment: "Segmento III", amount: "2.000 €" },
    ],
    priceRange: "1.488 € – 6.000 € (1 año)",
  },
  {
    slug: "analytics",
    product: "Fideltour Analytics",
    category: "Business Intelligence y Analítica",
    description:
      "Centraliza tus datos, incrementa tu base de datos y eleva la tasa de retorno con fidelización personalizada por categorías.",
    icon: BarChart3,
    subsidies: [
      { segment: "Segmento I", amount: "4.000 €" },
      { segment: "Segmento II", amount: "2.000 €" },
      { segment: "Segmento III", amount: "1.500 €" },
    ],
    priceRange: "696 € – 4.000 € (1 año)",
  },
];

export type KitDigitalBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const kitDigitalBenefits: KitDigitalBenefit[] = [
  {
    title: "Digitaliza tu empresa",
    description:
      "Implantar soluciones digitales mejora la productividad y la madurez tecnológica de tu hotel, sin grandes inversiones iniciales.",
    icon: Rocket,
  },
  {
    title: "Aumenta tu competitividad",
    description:
      "Con el Kit Digital, las pequeñas empresas hoteleras se mantienen a la vanguardia de las tendencias digitales del sector.",
    icon: Sparkles,
  },
  {
    title: "Mejora la experiencia del cliente",
    description:
      "Al ofrecer comunicaciones personalizadas y consistentes, crece la lealtad del huésped y se impulsa la venta directa.",
    icon: Star,
  },
];

export type KitDigitalGrowth = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const kitDigitalGrowth: KitDigitalGrowth[] = [
  {
    title: "Moderniza tus procesos",
    description:
      "Automatización de campañas, segmentación avanzada y orquestación cross-canal sobre una única fuente de verdad.",
    icon: Workflow,
  },
  {
    title: "Mantente en la línea de la innovación",
    description:
      "Acceso a la plataforma que usan más de 1.000 hoteles para dominar su dato y su venta directa.",
    icon: Sparkles,
  },
  {
    title: "Mejora tu relación con el cliente",
    description:
      "Comunicaciones personalizadas en cada etapa del guest journey, antes, durante y después de la estancia.",
    icon: Building2,
  },
];

export type KitDigitalFaq = {
  question: string;
  answer: string;
};

export const kitDigitalFaq: KitDigitalFaq[] = [
  {
    question: "¿En qué me puede ayudar Fideltour con el Kit Digital?",
    answer:
      "Somos proveedores de soluciones tecnológicas, así que no solo te asesoramos en la concesión de la ayuda: la implementamos por ti. Dentro del Kit Digital Next Generation EU, Fideltour cubre las categorías de Gestión de clientes, Gestión de procesos y Business Intelligence y Analítica.",
  },
  {
    question: "¿Cómo sé si puedo recibir la ayuda?",
    answer:
      "Para optar al Kit Digital debes cumplir los baremos de PYME o autónomo: tener consideración de pequeña empresa o microempresa, estar inscrito en el Censo de empresarios de la AEAT o equivalente foral, no estar en crisis y no tener órdenes de recuperación pendientes de la Comisión Europea. Si tienes dudas, ponte en contacto con nuestro equipo.",
  },
  {
    question: "¿Para quién son las ayudas?",
    answer:
      "Se reparten en tres segmentos. Segmento I: pequeñas empresas de entre 10 y menos de 50 empleados. Segmento II: pequeñas empresas o microempresas de entre 3 y menos de 10 empleados. Segmento III: pequeñas empresas o microempresas de 0 a 2 empleados y personas en situación de autoempleo.",
  },
];

export const kitDigitalSegments: { code: string; label: string }[] = [
  { code: "Segmento I", label: "10 – 49 empleados" },
  { code: "Segmento II", label: "3 – 9 empleados" },
  { code: "Segmento III", label: "0 – 2 empleados / autónomos" },
];
