import { BellRing, Smartphone, Target } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const appPushLanding: ModuleLanding = {
  slug: "app-push-para-hoteles",
  category: "multicanalidad",
  navLabel: "App Push",
  meta: {
    title: "App Push para hoteles",
    description:
      "Conecta con el huésped a través de notificaciones directas en su móvil, el canal con mayor tasa de conversión para clientes que ya descargaron tu app.",
  },
  hero: {
    eyebrow: "Multicanalidad · App Push",
    title: "Empieza a utilizar App Push para hoteles.",
    titleAccent: "App Push",
    lead:
      "Conecta con tus huéspedes a través de notificaciones directas en su móvil, el canal con mayor tasa de conversión para clientes que ya descargaron tu app.",
  },
  miniCards: [
    {
      title: "+50% tasa media de apertura",
      description: "El canal más potente en conversión directa.",
      icon: BellRing,
    },
    {
      title: "Personalización avanzada",
      description:
        "Segmenta por estancia, idioma o nivel de fidelización.",
      icon: Target,
    },
    {
      title: "Comunicación en tiempo real",
      description:
        "Impacta durante la estancia con mensajes relevantes.",
      icon: Smartphone,
    },
  ],
  pillars: [
    {
      title: "Post check-in inmediato",
      description:
        "Información útil al llegar: horarios, accesos, servicios destacados.",
      metric: "Onboarding · live",
    },
    {
      title: "Mensajería rica",
      description:
        "Imágenes, deep-links y CTAs personalizados para maximizar conversión.",
      metric: "Formato · rich-media",
    },
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Mantén la comunicación activa con mensajes instantáneos durante la estancia.",
      metric: "Delivery · real-time",
    },
    {
      title: "Incrementa la fidelización",
      description:
        "Impulsa recurrencia con beneficios exclusivos para clientes del club de fidelización.",
      metric: "Rewards · integrado",
    },
  ],
  benefits: [
    {
      title: "Integración nativa en Fideltour",
      description:
        "Gestiona notificaciones y segmentaciones desde un único ecosistema.",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Cada interacción con la app se registra en el CRM, optimizando segmentación y fidelización.",
    },
    {
      title: "Ofertas flash y tiempo limitado",
      description:
        "Promociones in-stay y up-sell contextuales sin esperar a campañas masivas.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar con App Push?",
      answer:
        "Contar con una app móvil del hotel conectada a Fideltour vía SDK o API de Fideltour Push.",
    },
    {
      question: "¿Cuánto se tarda en activar App Push?",
      answer:
        "Entre 2 y 3 semanas, dependiendo de la configuración de la app y las integraciones.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "Modelo pay-as-you-go: pagas solo por el volumen de notificaciones enviadas.",
    },
    {
      question: "¿Puedo segmentar por huéspedes con club de fidelización?",
      answer:
        "Sí. App Push lee los segmentos del CRM/CDP, incluido el módulo Rewards, para enviar mensajes diferenciados por nivel o estado del club.",
    },
  ],
};
