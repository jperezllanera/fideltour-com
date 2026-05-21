import { Bot, MessagesSquare, Workflow } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const chatbotLanding: ModuleLanding = {
  slug: "integracion-chatbot-hoteles",
  category: "data-import",
  navLabel: "Chatbot",
  meta: {
    title: "Integración de chatbot para hoteles",
    description:
      "Conecta tu chatbot con Fideltour y convierte cada conversación en datos accionables dentro del CDP. Centraliza interacciones, enriquece perfiles de huéspedes y activa campañas personalizadas en tiempo real.",
  },
  hero: {
    eyebrow: "Data Import · Chatbot",
    title: "Integra tu chatbot con Fideltour.",
    titleAccent: "chatbot",
    lead:
      "Conecta tu chatbot con Fideltour y convierte cada conversación en datos accionables dentro del CRM. Centraliza interacciones, enriquece perfiles de huéspedes y activa campañas personalizadas en tiempo real.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Conversaciones centralizadas",
      description: "Cada interacción queda registrada en el CRM del hotel.",
      icon: MessagesSquare,
    },
    {
      title: "Automatización total",
      description: "Reduce tiempos de respuesta y mejora la experiencia del huésped.",
      icon: Bot,
    },
    {
      title: "Segmentación inteligente",
      description: "Usa datos de chat para activar campañas relevantes y oportunas.",
      icon: Workflow,
    },
  ],
  pillars: [
    {
      title: "Importación automática de conversaciones",
      description:
        "Preguntas, respuestas y solicitudes se sincronizan al instante con el CRM, alimentando la ficha del huésped.",
      metric: "Sync · real-time",
    },
    {
      title: "Compatibilidad con múltiples proveedores",
      description:
        "Integraciones disponibles con los chatbots líderes del sector hotelero, sin desarrollo a medida.",
      metric: "Conectores · stack abierto",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Cada interacción se vincula al perfil único del huésped para mejorar segmentación y personalización.",
      metric: "Profile · 360º",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Conecta conversaciones con Campaigns, Automation y Reporting para una visión 360º del huésped.",
      metric: "Activación · nativa",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Garantiza atención instantánea, reduce los tiempos de espera y captura intención antes de la reserva.",
    },
    {
      title: "Sin silos de datos",
      description:
        "Evita herramientas aisladas: cada conversación queda conectada al ecosistema hotelero.",
    },
    {
      title: "Incrementa la fidelización",
      description:
        "Transforma cada consulta en una oportunidad de reserva directa, upsell o recuperación de huéspedes.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para integrar mi chatbot?",
      answer:
        "Acceso a la API o credenciales de conexión del proveedor del chatbot. Nuestro equipo de Connect valida la integración antes del despliegue.",
    },
    {
      question: "¿Cuánto se tarda en activar la integración?",
      answer:
        "Entre 1 y 2 semanas, según el chatbot y la configuración del hotel. Te acompañamos en cada paso del onboarding.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "La integración está incluida en Fideltour Connect. El proveedor del chatbot puede requerir licencia o fee adicional.",
    },
    {
      question: "¿Qué tipo de datos se sincronizan con el CRM?",
      answer:
        "Identificación del usuario, intención detectada, preguntas frecuentes, datos de contacto compartidos y cualquier metadato adicional que el chatbot exponga vía API. Todo se asocia al perfil único del huésped en el CDP.",
    },
  ],
};
