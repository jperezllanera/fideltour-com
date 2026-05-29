import { GitBranch, Sparkles, Workflow } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const automationLanding: ModuleLanding = {
  slug: "marketing-automation-para-hoteles",
  category: "data-activation",
  navLabel: "Automation",
  video: {
    youtubeId: "vUmxkWGFO68",
    title: "Módulo Automation: marketing automation para tu hotel",
  },
  meta: {
    title: "Marketing Automation para hoteles",
    description:
      "Revoluciona tu marketing con un módulo de automatización diseñado para flujos complejos personalizados por fase del guest journey.",
  },
  hero: {
    eyebrow: "Data Activation · Automation",
    title: "Marketing Automation para hoteles.",
    titleAccent: "Automation",
    lead:
      "Revoluciona tu e-mail marketing con un módulo diseñado para la creación y ejecución de campañas altamente personalizadas y automatizadas. Pre, in y post-stay activados por el comportamiento real del huésped.",
  },
  miniCards: [
    {
      title: "Crea flujos complejos",
      description:
        "Disparadores que se activan según las acciones (o inacciones) del huésped.",
      icon: GitBranch,
    },
    {
      title: "Comunicaciones específicas",
      description:
        "Conoce el comportamiento del huésped con recorridos basados en acciones reales.",
      icon: Workflow,
    },
    {
      title: "Segmenta con más facilidad",
      description:
        "Mapas estratégicos de lo general a lo específico, con lógica de segmentación incorporada.",
      icon: Sparkles,
    },
  ],
  pillars: [
    {
      title: "Mejora tus relaciones con el huésped",
      description:
        "Crea comunicaciones específicas, pon al usuario en el centro y ofrece una respuesta rápida a sus necesidades.",
      metric: "Personalización · 1:1",
    },
    {
      title: "Visión real del huésped",
      description:
        "La información de tu cliente se mantiene actualizada y nutrida con cada acción que realiza.",
      metric: "Profile · live",
    },
    {
      title: "Haz el upgrade a Automation",
      description:
        "Si ya usas Campaigns, Automation lleva tu marketing al siguiente nivel — sin rehacer plantillas ni segmentos.",
      metric: "Upgrade · Campaigns→Auto",
    },
    {
      title: "Trabaja de manera inteligente",
      description:
        "Crea flujos automatizados complejos una vez y analiza su eficacia. Métricas inmediatas y decisiones estratégicas.",
      metric: "Flujos · siempre activos",
    },
  ],
  benefits: [
    {
      title: "Interactúa al momento",
      description:
        "Automation agiliza procesos a través de campañas automatizadas previamente estructuradas.",
    },
    {
      title: "Automatización del guest journey",
      description:
        "Campañas pensadas para acompañar al huésped durante todo el ciclo, sin intervención manual.",
    },
    {
      title: "Métricas y análisis",
      description:
        "Datos inmediatos sobre la eficacia de los flujos automatizados para actuar estratégicamente.",
    },
  ],
  faq: [
    {
      question: "¿Qué diferencia existe entre Campaigns y Automation?",
      answer:
        "Campaigns permite enviar campañas automáticas o manuales en momentos puntuales. Automation requiere dedicar tiempo a organizar mapas y campañas; después funcionan sin intervención.",
    },
    {
      question: "¿Qué son los flujos complejos?",
      answer:
        "Son diferentes opciones para construir campañas automatizadas. Distintas acciones dirigen al huésped a escenarios concretos según sus inacciones o acciones, segmentando específicamente.",
    },
    {
      question: "¿Puedo utilizar Automation sin el módulo Campaigns?",
      answer:
        "No. Automation es complementario a Campaigns. Permite crear mapas automatizados secuenciales, pero requiere tener disponible primero el módulo Campaigns.",
    },
    {
      question: "¿Qué tipo de flujos suelen activar otros hoteles?",
      answer:
        "Bienvenida pre-estancia, upsell durante la estancia, recogida de feedback post-estancia, recuperación de huéspedes inactivos y reactivación con códigos personalizados.",
    },
  ],
  relatedCaso: "hotel-vacacional",
};
