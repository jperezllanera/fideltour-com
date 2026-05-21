import { Inbox, LineChart, Share2 } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const socialLanding: ModuleLanding = {
  slug: "redes-sociales-hoteles",
  category: "data-activation",
  navLabel: "Social",
  meta: {
    title: "Redes sociales para hoteles",
    description:
      "Gestiona, programa y analiza tus redes sociales desde un único lugar. Centraliza tu estrategia social y conéctala con campañas y datos del huésped.",
  },
  hero: {
    eyebrow: "Data Activation · Social",
    title: "Gestiona las redes sociales de tu hotel.",
    titleAccent: "redes sociales",
    lead:
      "Gestiona, programa y analiza tus redes sociales desde un único lugar. Con Fideltour Social, centraliza tu estrategia social y conéctala con tus campañas y datos de huéspedes para potenciar tu marca hotelera.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Gestión multicanal",
      description:
        "Administra todas tus redes sociales desde una sola plataforma.",
      icon: Share2,
    },
    {
      title: "Análisis avanzado",
      description:
        "Visualiza métricas de interacción, alcance y rendimiento por canal.",
      icon: LineChart,
    },
    {
      title: "Integración con CRM",
      description:
        "Conecta tu actividad social con campañas, audiencias y automatizaciones.",
      icon: Inbox,
    },
  ],
  pillars: [
    {
      title: "Planifica y publica con facilidad",
      description:
        "Calendario editorial único para Facebook, Instagram, TikTok, LinkedIn, X, Google Business, Pinterest o Threads.",
      metric: "Canales · 9+",
    },
    {
      title: "Impacto real de tus redes",
      description:
        "Dashboards con métricas clave: interacciones, clics, crecimiento de seguidores y rendimiento por canal.",
      metric: "Reporting · multicanal",
    },
    {
      title: "Inbox social unificado",
      description:
        "Responde comentarios, mensajes y menciones desde un inbox centralizado. Atención al cliente sin saltos de herramienta.",
      metric: "Inbox · unificado",
    },
    {
      title: "Conecta tus redes con tu CRM y campañas",
      description:
        "Sincroniza audiencias sociales con segmentos de Fideltour. Estrategias más precisas combinando comportamiento e intereses.",
      metric: "Audiences · sync",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Gestiona conversaciones, comentarios y mensajes directos de todas tus redes desde un único panel.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Social se integra con CRM, Campaigns y Automation para unificar tu estrategia digital de captación a fidelización.",
    },
    {
      title: "Impulsa tu estrategia de datos",
      description:
        "Convierte tus redes sociales en una herramienta de comunicación directa y medible para atraer y fidelizar.",
    },
  ],
  faq: [
    {
      question: "¿Qué redes puedo conectar?",
      answer:
        "Facebook, Instagram, TikTok, X (Twitter), LinkedIn, Pinterest, Google Business, Threads, Bluesky y blogs o webs corporativas.",
    },
    {
      question: "¿Puedo programar publicaciones?",
      answer:
        "Sí. Desde el panel de planificación puedes programar, editar y visualizar todas tus publicaciones de forma centralizada.",
    },
    {
      question: "¿Se pueden medir resultados?",
      answer:
        "Sí. Obtendrás métricas detalladas por canal: interacción, alcance, clics, conversiones y crecimiento de comunidad.",
    },
    {
      question: "¿Cómo se integra con Fideltour?",
      answer:
        "Social está vinculado al CRM y a Campaigns: puedes usar segmentos y audiencias personalizadas en tus campañas sociales.",
    },
  ],
};
