import { BadgeCheck, MessageCircle, Smartphone } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const whatsappLanding: ModuleLanding = {
  slug: "whatsapp-para-hoteles",
  category: "multicanalidad",
  navLabel: "WhatsApp",
  meta: {
    title: "WhatsApp para hoteles",
    description:
      "Impacta a tu huésped donde siempre está disponible. WhatsApp es la nueva forma de conversar antes, durante y después de la estancia.",
  },
  hero: {
    eyebrow: "Multicanalidad · WhatsApp",
    title: "Empieza a utilizar WhatsApp para hoteles.",
    titleAccent: "WhatsApp",
    lead:
      "Impacta a tu huésped donde siempre está disponible. WhatsApp es la nueva forma de conversar con tus huéspedes antes, durante y después de su estancia.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "99% de apertura",
      description:
        "El canal más eficaz para comunicaciones rápidas y de urgencia.",
      icon: MessageCircle,
    },
    {
      title: "+25% reservas directas",
      description:
        "Los hoteles que incorporan WhatsApp aumentan reservas por personalización e inmediatez.",
      icon: Smartphone,
    },
    {
      title: "Fideliza al cliente",
      description:
        "Servicio personalizado y comunicaciones enviadas en el momento correcto.",
      icon: BadgeCheck,
    },
  ],
  pillars: [
    {
      title: "Perfil de empresa y conexión a la API",
      description:
        "Número único, marca visible y conexión a la API oficial para automatizar acciones y recolectar todos los datos del huésped.",
      metric: "API · oficial verificada",
    },
    {
      title: "Campañas multimedia",
      description:
        "Imagen, vídeo, PDF, GIFs, llamadas a la acción, links y botones para guiar al huésped donde prefieras.",
      metric: "Formatos · todos",
    },
    {
      title: "Ficha de contacto siempre actualizada",
      description:
        "Las acciones de la conversación quedan registradas en la ficha del huésped para mejor segmentación.",
      metric: "Tracking · 1:1",
    },
    {
      title: "Integración con Automation",
      description:
        "WhatsApp encaja en flujos automatizados pre, in y post-stay sin saltar de herramienta.",
      metric: "Journey · 24/7",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "La automatización reduce los tiempos de espera y genera confianza en el huésped.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Sin saltar entre aplicaciones: WhatsApp se integra en Fideltour y los datos del huésped quedan en su ficha de contacto.",
    },
    {
      title: "Aumenta el ARR",
      description:
        "Usa el canal que el huésped más utiliza para ofrecer ofertas personalizadas durante la estancia y mejorar el ratio de upsell.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar?",
      answer:
        "El módulo Automation de Fideltour, que permite activar envíos automatizados en distintas plataformas, incluido WhatsApp.",
    },
    {
      question: "¿Cuánto se tarda en activar WhatsApp para hoteles?",
      answer:
        "Desde la contratación hasta el primer envío, el set-up de WhatsApp puede tardar unos 15 días. Los permisos los gestiona Meta, por lo que los tiempos pueden variar.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "El uso de WhatsApp funciona con créditos. Una vez disponible Automation, eliges la cantidad de créditos para tus envíos.",
    },
    {
      question: "¿Qué tipo de mensajes funcionan mejor?",
      answer:
        "Confirmaciones de reserva, recordatorios pre check-in, ofertas in-stay personalizadas y solicitudes de feedback post-estancia. Funcionan especialmente bien si combinan multimedia y CTAs directos.",
    },
  ],
};
