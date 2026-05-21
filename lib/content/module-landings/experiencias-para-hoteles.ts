import { Compass, Sparkles, TrendingUp } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const experiencesLanding: ModuleLanding = {
  slug: "experiencias-para-hoteles",
  category: "data-activation",
  navLabel: "Experiences",
  meta: {
    title: "Experiencias y ancillaries para hoteles",
    description:
      "Acompaña al huésped antes, durante y después de la estancia con un asistente inteligente que recomienda actividades y servicios en tiempo real.",
  },
  hero: {
    eyebrow: "Data Activation · Experiences",
    title: "Impulsa experiencias para hoteles.",
    titleAccent: "experiencias",
    lead:
      "Acompaña a tu huésped antes, durante y después de su estancia con un asistente virtual inteligente que recomienda actividades y servicios en tiempo real.",
  },
  miniCards: [
    {
      title: "Personalización en tiempo real",
      description:
        "Recomendaciones contextualizadas para cada huésped.",
      icon: Sparkles,
    },
    {
      title: "Comunicación multicanal",
      description:
        "WhatsApp, email y SMS adaptados a cada fase del viaje.",
      icon: Compass,
    },
    {
      title: "+15% ingresos ancillaries",
      description:
        "Monetiza con actividades y servicios complementarios.",
      icon: TrendingUp,
    },
  ],
  pillars: [
    {
      title: "Asistente virtual inteligente",
      description:
        "Se presenta al huésped desde el día de la reserva y lo acompaña durante todo el viaje.",
      metric: "Journey · 24/7",
    },
    {
      title: "Conectividad con proveedores líderes",
      description:
        "Integra traslados, excursiones, entradas y experiencias locales (Civitatis, GetYourGuide y más).",
      metric: "Partners · live",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Cada interacción queda registrada en el CRM para segmentación y fidelización más precisas.",
      metric: "Profile · 360º",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Orquesta Campaigns y Automation para un journey 360º sin carga operativa.",
      metric: "Activación · nativa",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "La automatización responde al instante, reduciendo tiempos y mejorando la satisfacción del huésped.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Gestiona todo desde un único panel y guarda cada acción en la ficha de contacto.",
    },
    {
      title: "Aumenta los ingresos por huésped",
      description:
        "Upselling y comisiones por experiencias que impulsan ticket medio y recurrencia.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar con Experiences?",
      answer:
        "Tener activo el canal de WhatsApp en Campaigns y definir las integraciones con los proveedores de experiencias deseados.",
    },
    {
      question: "¿Cuánto se tarda en activar Experiences?",
      answer:
        "Entre 2 y 3 semanas, según configuración técnica y proveedores conectados.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "Modelo de ingresos compartidos por reserva de actividad (revenue share).",
    },
    {
      question: "¿Puedo limitar qué experiencias se ofrecen al huésped?",
      answer:
        "Sí. Defines categorías permitidas, idioma, rango de precios y proveedores autorizados para alinear la oferta con tu marca.",
    },
  ],
};
