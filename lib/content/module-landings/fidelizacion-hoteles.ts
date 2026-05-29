import { Crown, Gift, Sparkles } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const rewardsLanding: ModuleLanding = {
  slug: "fidelizacion-hoteles",
  category: "data-activation",
  navLabel: "Rewards",
  video: {
    youtubeId: "HmcuccyVZCE",
    title: "Módulo Rewards: fideliza a tu huésped",
  },
  meta: {
    title: "Fideltour Rewards: programa de fidelización para hoteles",
    description:
      "Crea un programa de recompensas digital que convierta a tus huéspedes en clientes recurrentes. Premia la reserva directa, no las OTAs.",
  },
  hero: {
    eyebrow: "Data Activation · Rewards",
    title: "Fideltour Rewards: fidelización para hoteles.",
    titleAccent: "Fideltour Rewards",
    lead:
      "Crea un programa de recompensas digital que convierta a tus huéspedes en clientes recurrentes. Diseña niveles, beneficios y reglas — sin licencias externas ni desarrollo a medida.",
  },
  miniCards: [
    {
      title: "Club de fidelización digital",
      description:
        "Programa de puntos y beneficios totalmente personalizado.",
      icon: Crown,
    },
    {
      title: "Automatización inteligente",
      description:
        "Recompensa reservas, cumpleaños o encuestas sin intervención manual.",
      icon: Sparkles,
    },
    {
      title: "Integración 360º",
      description:
        "Conecta la fidelización con campañas, CRM y datos reales del huésped.",
      icon: Gift,
    },
  ],
  pillars: [
    {
      title: "Crea tu propio club de fidelización",
      description:
        "Define niveles de membresía y ventajas personalizadas con Guest Portal incluido.",
      metric: "Tiers · ilimitados",
    },
    {
      title: "Automatiza la acumulación de puntos",
      description:
        "Reglas automáticas por reservas, noches, gasto o encuestas — sin operativa manual.",
      metric: "Earn rules · live",
    },
    {
      title: "Gestiona beneficios y productos",
      description:
        "Servicios canjeables: descuentos, upgrades, experiencias exclusivas.",
      metric: "Catalog · custom",
    },
    {
      title: "Analiza y mejora tu estrategia",
      description:
        "Dashboards de rendimiento e impacto en repetición de reservas.",
      metric: "Repeat-rate · medido",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Alertas automáticas sobre recompensas, subidas de nivel o beneficios por caducar.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Conectado con CRM, Campaigns y Automation para una visión unificada del cliente fiel.",
    },
    {
      title: "Impulsa la fidelización y el revenue",
      description:
        "Premia la lealtad, aumenta la recurrencia y mejora el revenue medio por estancia.",
    },
  ],
  faq: [
    {
      question: "¿Puedo crear mi propio programa de fidelización?",
      answer:
        "Sí. Puedes diseñar un club completo con niveles, puntos y beneficios, o conectar uno externo si ya existe.",
    },
    {
      question: "¿Cómo se acumulan los puntos?",
      answer:
        "Por noches, gasto, registro, cumpleaños, encuestas u otras acciones configurables vía reglas.",
    },
    {
      question: "¿Los huéspedes pueden ver sus puntos?",
      answer:
        "Sí, a través del Guest Portal donde consultan saldo, nivel y recompensas disponibles.",
    },
    {
      question: "¿Se pueden automatizar las comunicaciones?",
      answer:
        "Totalmente. Bienvenida, subidas de nivel o caducidad se envían automáticamente desde Automation.",
    },
  ],
  relatedCaso: "hotel-vacacional",
};
