import { BellRing, ClipboardCheck, LineChart } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const encuestasLanding: ModuleLanding = {
  slug: "encuestas-hoteles",
  category: "data-intelligence",
  navLabel: "Reviews",
  meta: {
    title: "Encuestas y reviews para hoteles",
    description:
      "Mide la satisfacción del huésped y mejora su experiencia con cada estancia. Automatiza encuestas pre, durante y post-estancia para conocer opiniones reales y actuar a tiempo.",
  },
  hero: {
    eyebrow: "Data Intelligence · Reviews",
    title: "Empieza a utilizar las encuestas para hoteles.",
    titleAccent: "encuestas",
    lead:
      "Mide la satisfacción de tus huéspedes y mejora su experiencia con cada estancia. Con Fideltour Reviews, automatiza encuestas pre, durante y post-estancia para conocer opiniones reales y actuar a tiempo.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Feedback automatizado",
      description:
        "Valoraciones automáticas por email o WhatsApp, sin intervención manual.",
      icon: ClipboardCheck,
    },
    {
      title: "Alertas inteligentes",
      description:
        "Notificaciones inmediatas ante valoraciones críticas, actúa en segundos.",
      icon: BellRing,
    },
    {
      title: "Análisis de reputación",
      description:
        "Detecta patrones y tendencias para mejora continua de la experiencia.",
      icon: LineChart,
    },
  ],
  pillars: [
    {
      title: "Crea encuestas personalizadas",
      description:
        "Formularios flexibles y multilingües adaptados al perfil de cada huésped. Combina preguntas abiertas, valoraciones por estrellas y lógica condicional.",
      metric: "Forms · adaptativos",
    },
    {
      title: "Automatiza tus envíos",
      description:
        "Encuestas automáticas en momentos clave: pre-estancia, durante o post-estancia. Flujo constante de opiniones reales.",
      metric: "Trigger · pre/in/post",
    },
    {
      title: "Detecta incidencias en tiempo real",
      description:
        "Alertas inmediatas para valoraciones críticas o comentarios negativos. Actúa al instante con respuestas personalizadas.",
      metric: "Alertas · live",
    },
    {
      title: "Analiza resultados y mejora procesos",
      description:
        "Dashboards avanzados con métricas de satisfacción, evolución temporal y comparativas por hotel o marca.",
      metric: "NPS · dashboards",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Recibe alertas automáticas y reacciona ante incidencias en cualquier momento, mejorando la percepción y fidelización del huésped.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Las encuestas se conectan con CRM, Automation y Campaigns, garantizando trazabilidad total.",
    },
    {
      title: "Impulsa tu reputación",
      description:
        "Convierte cada opinión en una oportunidad de mejora — actúa rápido y fortalece tu marca.",
    },
  ],
  faq: [
    {
      question: "¿Qué tipo de encuestas puedo crear?",
      answer:
        "Encuestas pre-estancia, durante la estancia y post-estancia, totalmente personalizables por idioma y tipo de huésped.",
    },
    {
      question: "¿Se pueden enviar automáticamente?",
      answer:
        "Sí. Se integran con tu CRM o PMS para lanzarse automáticamente en las fechas configuradas.",
    },
    {
      question: "¿Qué ocurre si recibo una mala valoración?",
      answer:
        "Puedes configurar alertas inmediatas que avisan al equipo responsable para actuar al instante, antes de que el review se haga público.",
    },
    {
      question: "¿Puedo ver resultados por hotel o cadena?",
      answer:
        "Sí. El panel de analítica permite filtrar por establecimiento, idioma, tipo de encuesta o rango de fechas.",
    },
  ],
};
