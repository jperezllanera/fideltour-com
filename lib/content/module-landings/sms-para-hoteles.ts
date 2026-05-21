import { Bell, Smartphone, Wifi } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const smsLanding: ModuleLanding = {
  slug: "sms-para-hoteles",
  category: "multicanalidad",
  navLabel: "SMS",
  meta: {
    title: "SMS para hoteles · Comunica mejor y aumenta la fidelización",
    description:
      "Llega al huésped donde siempre está: su móvil. SMS personalizados durante todo el guest journey para reforzar la relación y generar nuevas oportunidades.",
  },
  hero: {
    eyebrow: "Multicanalidad · SMS",
    title: "SMS para hoteles: comunica mejor.",
    titleAccent: "SMS",
    lead:
      "Llega a tu huésped en el lugar donde siempre está: su móvil. Con SMS personalizados durante todo el guest journey refuerzas la relación, generas cercanía y conviertes cada estancia en una nueva oportunidad.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "98% de apertura",
      description:
        "Más del 98% de los SMS se abren en los primeros 3 minutos.",
      icon: Smartphone,
    },
    {
      title: "Automatiza lo esencial",
      description:
        "Check-in, encuestas, upsells, promociones o solicitud de reseñas.",
      icon: Bell,
    },
    {
      title: "Siempre disponible",
      description:
        "Funciona sin conexión a internet, ampliando alcance en cualquier lugar.",
      icon: Wifi,
    },
  ],
  pillars: [
    {
      title: "Refuerza la fidelización",
      description:
        "El 75% de los huéspedes prefiere recibir ofertas personalizadas por SMS.",
      metric: "Preferencia · 75%",
    },
    {
      title: "Alta conversión",
      description:
        "El SMS marketing alcanza tasas de conversión de hasta el 45%, muy por encima del email.",
      metric: "Conversion · ≤45%",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Los datos del huésped quedan almacenados en su ficha de contacto, alimentando segmentos.",
      metric: "Profile · 360º",
    },
    {
      title: "Automatización pre, in y post-stay",
      description:
        "Mensajes activados por evento o comportamiento, sin tareas manuales en el día a día.",
      metric: "Triggers · live",
    },
  ],
  benefits: [
    {
      title: "Reduce cancelaciones",
      description:
        "Impulsa ventas directas con recordatorios estratégicos y mensajes proactivos.",
    },
    {
      title: "Llena habitaciones",
      description:
        "Promociones urgentes que generan ocupación rápida y efectiva.",
    },
    {
      title: "Aumenta reputación",
      description:
        "Encuestas y reseñas que multiplican la visibilidad online del hotel.",
    },
  ],
  faq: [
    {
      question: "¿Cómo usan los hoteles el SMS Marketing?",
      answer:
        "Reducen cancelaciones con recordatorios, llenan habitaciones con promociones urgentes, aumentan el ticket medio con upselling y multiplican la reputación con encuestas y reseñas.",
    },
    {
      question: "¿Por qué funciona?",
      answer:
        "El SMS no está obsoleto: su inmediatez, personalización y cercanía lo convierten en el canal ideal para crear experiencias memorables y construir relaciones duraderas con el huésped.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "El SMS funciona por créditos. Defines tu volumen mensual y pagas solo por los envíos consumidos, sin licencia fija adicional.",
    },
    {
      question: "¿Necesito otro módulo para usar SMS?",
      answer:
        "Requiere Campaigns para envíos manuales y Automation si quieres activarlos en flujos automáticos basados en comportamiento.",
    },
  ],
};
