import { LayoutDashboard, Megaphone, Workflow } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const campaignsLanding: ModuleLanding = {
  slug: "marketing-hoteles",
  category: "data-activation",
  navLabel: "Campaigns",
  meta: {
    title: "Campaigns: marketing para hoteles",
    description:
      "Crea, personaliza y automatiza campañas hoteleras desde un único lugar. Estrategias multicanal que impulsan la fidelización y la venta directa.",
  },
  hero: {
    eyebrow: "Data Activation · Campaigns",
    title: "Campaigns: marketing para hoteles.",
    titleAccent: "Campaigns",
    lead:
      "Crea, personaliza y automatiza tus campañas desde un único lugar. Fideltour Campaigns te permite conectar con tus huéspedes a través de estrategias multicanal que impulsan la fidelización y la venta directa.",
  },
  miniCards: [
    {
      title: "Campañas multicanal",
      description:
        "Unifica todos tus canales de comunicación en una sola herramienta.",
      icon: Megaphone,
    },
    {
      title: "Automatización inteligente",
      description:
        "Envía el mensaje adecuado en el momento justo según el comportamiento del huésped.",
      icon: Workflow,
    },
    {
      title: "Diseño y análisis integrados",
      description: "Crea, personaliza y mide cada campaña sin depender de terceros.",
      icon: LayoutDashboard,
    },
  ],
  pillars: [
    {
      title: "Diseña sin límites",
      description:
        "Campañas visuales coherentes con la identidad de tu marca. Plantillas editables, contenido dinámico y etiquetas automáticas para personalizar cada envío.",
      metric: "Templates · editables",
    },
    {
      title: "Automatiza cada contacto",
      description:
        "Activa campañas según fechas clave o comportamiento — desde confirmación de reserva hasta encuesta post-estancia, sin intervención manual.",
      metric: "Triggers · live",
    },
    {
      title: "Analiza y mejora resultados",
      description:
        "Métricas en tiempo real: aperturas, clics, conversiones y comportamiento. Optimiza decisiones con datos precisos y mide el retorno de cada acción.",
      metric: "Reporting · real-time",
    },
    {
      title: "Integra todos tus canales",
      description:
        "Gestiona campañas de email, WhatsApp, Web Push o SMS desde un único panel. Coherencia y medición global.",
      metric: "Stack · multicanal",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Automatiza las comunicaciones y mantén el contacto con tus huéspedes en todas las fases del viaje.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Campaigns trabaja conectado con CRM, Automation y CDP para un ecosistema completo de marketing hotelero.",
    },
    {
      title: "Impulsa la fidelización y la venta directa",
      description:
        "Transforma tus comunicaciones en oportunidades reales de conexión y conversión.",
    },
  ],
  faq: [
    {
      question: "¿Qué tipo de campañas puedo crear?",
      answer:
        "Campañas comerciales, transaccionales, automáticas o test A/B, tanto por email como en otros canales integrados.",
    },
    {
      question: "¿Se pueden automatizar los envíos?",
      answer:
        "Sí. Campaigns permite activar envíos automáticos según eventos, fechas o comportamientos detectados.",
    },
    {
      question: "¿Qué analíticas ofrece?",
      answer:
        "Aperturas, clics, conversiones, desuscripciones y rendimiento por canal o segmento.",
    },
    {
      question: "¿Funciona con otros módulos de Fideltour?",
      answer:
        "Sí. Campaigns está conectado con CRM, Automation y Rewards, garantizando un marketing 360º.",
    },
  ],
  relatedCaso: "hotel-urbano",
};
