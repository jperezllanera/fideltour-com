import { Brain, MessageSquareCode, Sparkles } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const iaLanding: ModuleLanding = {
  slug: "inteligencia-artificial-para-hoteles",
  category: "data-intelligence",
  navLabel: "IA",
  meta: {
    title: "Inteligencia artificial para hoteles",
    description:
      "Convierte tus datos en decisiones con un chat inteligente capaz de responder en lenguaje natural y darte insights estratégicos al instante.",
  },
  hero: {
    eyebrow: "Data Intelligence · IA",
    title: "Empieza a utilizar IA para hoteles.",
    titleAccent: "IA",
    lead:
      "Convierte tus datos en decisiones con un chat inteligente capaz de responder en lenguaje natural y darte insights estratégicos al instante.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Consulta en lenguaje natural",
      description:
        "Pregúntale a tus datos como si fueran una persona, sin SQL ni dashboards complejos.",
      icon: MessageSquareCode,
    },
    {
      title: "Insights precisos y accionables",
      description:
        "Convierte información en decisiones estratégicas para revenue y marketing.",
      icon: Sparkles,
    },
    {
      title: "Acceso inmediato y sin técnicos",
      description:
        "Olvídate de SQL y consultas complejas; optimiza el tiempo del equipo.",
      icon: Brain,
    },
  ],
  pillars: [
    {
      title: "Pregunta en lenguaje natural",
      description:
        "Realiza cualquier consulta sin conocimientos técnicos. El sistema traduce tu pregunta en SQL y te devuelve la respuesta.",
      metric: "NLQ · español",
    },
    {
      title: "Respuestas contextualizadas",
      description:
        "Insights diseñados para el sector hotelero: fidelización, ventas, campañas y comportamiento del huésped.",
      metric: "Dominio · hotelero",
    },
    {
      title: "Resultados accionables",
      description:
        "Los outputs se integran en el ecosistema Fideltour, alimentando segmentaciones y estrategias personalizadas.",
      metric: "Output · ejecutable",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Datos de CRM, Campaigns, Automation o Reviews trabajan juntos para ofrecer una visión 360º del huésped.",
      metric: "Activación · nativa",
    },
  ],
  benefits: [
    {
      title: "Impacto inmediato 24/7",
      description:
        "La IA responde al instante, reduciendo tiempos de análisis y facilitando decisiones en cualquier momento.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Sin herramientas externas: la IA se conecta directamente al ecosistema y enriquece automáticamente la ficha del huésped.",
    },
    {
      title: "Incrementa tu venta directa",
      description:
        "Detecta patrones de consumo y oportunidades de upselling para personalizar ofertas y aumentar la rentabilidad.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar con IA?",
      answer:
        "Tener activo el ecosistema Fideltour. La configuración inicial la realiza nuestro equipo junto a ti.",
    },
    {
      question: "¿Cuánto se tarda en activar IA?",
      answer:
        "La activación depende del set-up de tu base de datos. De media, entre 2 y 3 semanas.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "El modelo es por suscripción mensual, con coste adicional según volumen de consultas avanzadas.",
    },
    {
      question: "¿Cómo se trata la privacidad del dato?",
      answer:
        "El módulo opera dentro del entorno seguro de Fideltour. Los datos del CDP no se exponen a modelos externos sin consentimiento explícito.",
    },
  ],
};
