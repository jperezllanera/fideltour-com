import { Filter, Mail, Workflow } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const emailLanding: ModuleLanding = {
  slug: "email-para-hoteles",
  category: "multicanalidad",
  navLabel: "Email",
  meta: {
    title: "Email marketing para hoteles",
    description:
      "Conecta con tus huéspedes a través del canal más versátil: campañas de email personalizadas y transaccionales en cada fase de la estancia.",
  },
  hero: {
    eyebrow: "Multicanalidad · Email",
    title: "Empieza a utilizar email para hoteles.",
    titleAccent: "email",
    lead:
      "Conecta con tus huéspedes a través del canal más versátil: campañas de email personalizadas y transaccionales en cada fase de la estancia.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "+22% tasa media de apertura",
      description: "El canal más probado y eficaz en hotelería.",
      icon: Mail,
    },
    {
      title: "Segmentación avanzada",
      description:
        "Personaliza según reserva, idioma, estancia o preferencias.",
      icon: Filter,
    },
    {
      title: "Automatización multicanal",
      description:
        "Integra emails en tus journeys junto a WhatsApp, SMS o Web Push.",
      icon: Workflow,
    },
  ],
  pillars: [
    {
      title: "Campañas comerciales y transaccionales",
      description:
        "Promociones, newsletters, confirmaciones de reserva y encuestas post-estancia desde el mismo motor.",
      metric: "Tipos · todos",
    },
    {
      title: "Editor visual drag & drop",
      description:
        "Diseña emails atractivos y responsive sin conocimientos técnicos.",
      metric: "Editor · WYSIWYG",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Cada apertura, clic o conversión queda registrada en el CRM para afinar la segmentación.",
      metric: "Tracking · 1:1",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Combina campañas de email con WhatsApp, SMS o Web Push desde un solo panel.",
      metric: "Stack · multicanal",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Automatiza confirmaciones, recordatorios y comunicaciones clave en tiempo real.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Gestiona envíos, métricas y segmentaciones desde un único ecosistema.",
    },
    {
      title: "Incrementa tu venta directa",
      description:
        "Optimiza ratios con test A/B, segmentaciones dinámicas y personalización avanzada.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar con email marketing?",
      answer:
        "Tener activo el módulo Campaigns, desde donde se configuran envíos y segmentaciones.",
    },
    {
      question: "¿Cuánto se tarda en activarlo?",
      answer:
        "De forma inmediata tras la validación de dominio y remitente.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "Con el módulo Campaigns dispones de envíos ilimitados de email marketing dentro del plan.",
    },
    {
      question: "¿Cómo aseguro buenos ratios de deliverability?",
      answer:
        "Fideltour configura SPF, DKIM y DMARC en tu dominio, gestiona supresiones automáticas por bounce y aplica reglas de envío que evitan flagging por parte de los proveedores.",
    },
  ],
};
