import { Bell, BellRing, Globe2 } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const webPushLanding: ModuleLanding = {
  slug: "web-push-para-hoteles",
  category: "multicanalidad",
  navLabel: "Web Push",
  meta: {
    title: "Web Push para hoteles",
    description:
      "Impacta a tus huéspedes en tiempo real con notificaciones web personalizadas, desde la búsqueda inicial hasta después de la estancia.",
  },
  hero: {
    eyebrow: "Multicanalidad · Web Push",
    title: "Empieza a utilizar Web Push para hoteles.",
    titleAccent: "Web Push",
    lead:
      "Impacta a tus huéspedes en tiempo real con notificaciones web personalizadas, desde la búsqueda inicial hasta después de la estancia.",
  },
  miniCards: [
    {
      title: "+20% tasa media de apertura",
      description: "Los mensajes llegan y se leen en tiempo real.",
      icon: BellRing,
    },
    {
      title: "Impacto inmediato en navegación",
      description: "Notifica al huésped justo cuando está tomando la decisión.",
      icon: Globe2,
    },
    {
      title: "Segmentación por comportamiento",
      description: "Personaliza cada impacto según intereses y acciones.",
      icon: Bell,
    },
  ],
  pillars: [
    {
      title: "Impacto inmediato 24/7",
      description:
        "Llega al huésped en el momento justo con notificaciones en tiempo real que reducen fricción y aumentan conversión.",
      metric: "Delivery · real-time",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Gestiona notificaciones desde la plataforma y almacena cada interacción en la ficha de contacto.",
      metric: "Activación · nativa",
    },
    {
      title: "Incrementa tu venta directa",
      description:
        "Campañas flash y mensajes de retargeting que convierten indecisos en reservas confirmadas.",
      metric: "Retargeting · live",
    },
    {
      title: "Compatible con Automation",
      description:
        "Web Push se integra en los flujos automatizados pre, in y post-stay sin operativa manual.",
      metric: "Triggers · journey",
    },
  ],
  benefits: [
    {
      title: "Configura tu dominio y activa notificaciones",
      description:
        "Integra tu web con Fideltour y habilita notificaciones personalizadas que llegan al instante al navegador del huésped.",
    },
    {
      title: "Lanza campañas inmediatas y relevantes",
      description:
        "Promociones flash, recordatorios de carrito, descuentos por tiempo limitado o retargeting de usuarios con interés previo.",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Cada clic e interacción se registra automáticamente en el CRM, facilitando segmentación avanzada y fidelización precisa.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar?",
      answer:
        "Tener activo el módulo Campaigns y un dominio configurado con Fideltour.",
    },
    {
      question: "¿Cuánto se tarda en activar Web Push?",
      answer:
        "En promedio entre 10 y 15 días, dependiendo de la configuración técnica de la web.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "Funciona con modelo pay-as-you-go a través de créditos: pagas solo por los envíos realizados.",
    },
    {
      question: "¿Funciona en móvil?",
      answer:
        "Sí en Android (Chrome, Edge, Firefox) y en escritorio. En iOS Safari es compatible desde la versión 16.4 con PWA instalada.",
    },
  ],
};
