import { Briefcase, Handshake, Workflow } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const b2bLanding: ModuleLanding = {
  slug: "b2b-para-hoteles",
  category: "data-intelligence",
  navLabel: "Sales B2B",
  meta: {
    title: "Sales B2B para hoteles",
    description:
      "Centraliza y gestiona todas tus relaciones comerciales — agencias, TTOO, empresas y partners — en un único panel adaptado al sector hotelero.",
  },
  hero: {
    eyebrow: "Data Intelligence · Sales B2B",
    title: "Empieza a utilizar Sales B2B para hoteles.",
    titleAccent: "Sales B2B",
    lead:
      "Centraliza y gestiona todas tus relaciones comerciales —agencias, TTOO, empresas y partners— en un único panel adaptado al sector hotelero. Convierte cada cuenta en una oportunidad medida y trazable.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Automatiza alertas, tareas y seguimientos sin esfuerzo adicional.",
      icon: Workflow,
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Conecta Sales B2B con CRM, Campaigns y CDP para trabajar todo desde un único panel.",
      icon: Handshake,
    },
    {
      title: "Incrementa tu venta directa",
      description:
        "Convierte datos en oportunidades y mejora la producción de cada partner.",
      icon: Briefcase,
    },
  ],
  pillars: [
    {
      title: "Gestión de contactos y cuentas B2B",
      description:
        "Clasifica agencias, TTOO, OTAs y empresas con toda la información clave en un mismo lugar.",
      metric: "Cuentas · 360º",
    },
    {
      title: "Pipeline de oportunidades visual",
      description:
        "Sigue leads, propuestas, negociaciones y contratos en fases claras y colaborativas.",
      metric: "Pipeline · adaptado",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Cada interacción queda registrada y se conecta con datos de reservas, consumo y campañas.",
      metric: "Profile · 360º",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Activa datos de CRM y CDP para tomar decisiones con una visión 360º del partner.",
      metric: "Activación · nativa",
    },
  ],
  benefits: [
    {
      title: "Gestión integral de cuentas",
      description: "Todo tu B2B organizado en un solo lugar, sin Excels paralelos.",
    },
    {
      title: "Pipeline adaptado a hoteles",
      description: "Controla cada fase del ciclo de venta comercial — corporate, TTOO o agencias.",
    },
    {
      title: "Más productividad y trazabilidad",
      description: "Mide oportunidades y revenue en tiempo real, sin depender del comercial.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar con Sales B2B?",
      answer:
        "Una formación inicial para configurar etiquetas, segmentos y pipeline según la operativa de tu hotel. Nuestro equipo te acompaña en el setup.",
    },
    {
      question: "¿Cuánto se tarda en activar Sales B2B?",
      answer:
        "La implementación estándar se completa en 2–3 semanas, dependiendo de la complejidad comercial del establecimiento.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "0,40 € por habitación y mes, con soporte incluido y actualizaciones continuas.",
    },
    {
      question: "¿Cómo encaja Sales B2B con el CRM de huéspedes?",
      answer:
        "Sales B2B y el CRM comparten la misma base de datos en el CDP. La cuenta corporativa y los huéspedes asociados quedan vinculados, sin duplicar fichas ni reportes.",
    },
  ],
};
