import { LayoutTemplate, MousePointerClick, Workflow } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const landingPagesLanding: ModuleLanding = {
  slug: "landing-page-hoteles",
  category: "data-activation",
  navLabel: "Landings & Forms",
  meta: {
    title: "Landing pages y formularios para hoteles",
    description:
      "Crea páginas de campaña y formularios personalizados sin depender del equipo web. Diseña, publica y mide landings desde el mismo entorno que activa tus campañas multicanal.",
  },
  hero: {
    eyebrow: "Data Activation · Landings & Forms",
    title: "Empieza a utilizar landings para hoteles.",
    titleAccent: "landings",
    lead:
      "Crea páginas de campaña personalizadas, sin depender del equipo web. Con Fideltour Landings diseñas páginas de aterrizaje y formularios optimizados para convertir en minutos y sin conocimientos técnicos.",
  },
  miniCards: [
    {
      title: "Independencia total",
      description:
        "Lanza páginas de campaña sin depender del equipo técnico ni de agencias externas.",
      icon: MousePointerClick,
    },
    {
      title: "Diseño drag & drop",
      description:
        "Crea landings visuales coherentes con la identidad del hotel en pocos clics.",
      icon: LayoutTemplate,
    },
    {
      title: "Integración completa",
      description:
        "Conecta landings con campañas de email, SMS o RRSS dentro del ecosistema Fideltour.",
      icon: Workflow,
    },
  ],
  pillars: [
    {
      title: "Editor drag & drop sin código",
      description:
        "Plantillas preconfiguradas, imágenes y CTAs editables, publicación instantánea sin validaciones técnicas.",
      metric: "Time-to-publish · minutos",
    },
    {
      title: "Conexión nativa con campañas",
      description:
        "Vincula tus landings con campañas de email, SMS, WhatsApp o push para una experiencia coherente extremo a extremo.",
      metric: "Coherencia · multicanal",
    },
    {
      title: "Formularios inteligentes",
      description:
        "Captura nuevos contactos, actualiza datos existentes y aplica etiquetado automático al CRM.",
      metric: "Forms · smart fields",
    },
    {
      title: "Dashboards de rendimiento",
      description:
        "Métricas de visitas, clics, conversiones y rendimiento por campaña, sin salir del entorno.",
      metric: "Analytics · in-product",
    },
  ],
  benefits: [
    {
      title: "Crea páginas sin código y con tu propio estilo",
      description:
        "Usa el editor drag & drop de Fideltour para diseñar páginas adaptadas al branding del hotel. Plantillas preconfiguradas, imágenes, textos y llamadas a la acción listas para publicar.",
    },
    {
      title: "Conecta tus campañas con páginas personalizadas",
      description:
        "Vincula las landings con campañas de email, SMS, WhatsApp o push. Garantiza coherencia visual y maximiza las tasas de conversión.",
    },
    {
      title: "Diseña formularios inteligentes",
      description:
        "Formularios personalizados para captar contactos, actualizar datos o inscribir huéspedes a promociones y eventos.",
    },
  ],
  faq: [
    {
      question: "¿Necesito conocimientos técnicos para crear una landing?",
      answer:
        "No. El editor drag & drop de Fideltour te permite diseñar y publicar landings sin escribir una sola línea de código.",
    },
    {
      question: "¿Puedo usar mi propio dominio?",
      answer:
        "Sí. Puedes conectar dominios personalizados y configurar SSL desde el panel de administración.",
    },
    {
      question: "¿Se pueden añadir formularios?",
      answer:
        "Por supuesto. Puedes crear formularios integrados con campos personalizados, etiquetas automáticas y mensajes de éxito.",
    },
    {
      question: "¿Puedo analizar los resultados?",
      answer:
        "Sí. Tendrás acceso a dashboards con métricas de visitas, clics, conversiones y rendimiento por campaña.",
    },
  ],
};
