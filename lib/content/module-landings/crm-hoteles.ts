import { CircleUserRound, ListFilter, Send } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const crmLanding: ModuleLanding = {
  slug: "crm-hoteles",
  category: "data-intelligence",
  navLabel: "CRM",
  meta: {
    title: "CRM para hoteles · Del CRM al CDP",
    description:
      "Más que un CRM hotelero: la puerta de entrada a un CDP que unifica datos, predice comportamiento y activa la venta directa del hotel.",
  },
  hero: {
    eyebrow: "Data Intelligence · CRM",
    title: "Del CRM hotelero al CDP del hotel.",
    titleAccent: "CDP del hotel",
    lead:
      "Un CRM clásico guarda contactos. Fideltour empieza ahí pero da el salto: identidad única, segmentación predictiva y activación en cada canal. La autovía de la venta directa.",
  },
  miniCards: [
    {
      title: "Perfil 360º",
      description:
        "Identidad, reservas, comunicaciones y consumo del huésped consolidados en una sola ficha.",
      icon: CircleUserRound,
    },
    {
      title: "Segmentación dinámica",
      description:
        "Audiencias que se recalculan en tiempo real cuando cambia el comportamiento del huésped.",
      icon: ListFilter,
    },
    {
      title: "Activación nativa",
      description:
        "Email, WhatsApp, push y ads disparan desde el mismo CRM sin sincronizaciones externas.",
      icon: Send,
    },
  ],
  pillars: [
    {
      title: "Más conocimiento del huésped, menos suposiciones",
      description:
        "Por qué reserva, qué le mueve, cuándo vuelve. El CRM responde con histórico real, no con intuiciones del equipo.",
      metric: "P(reserva) · 0.87",
    },
    {
      title: "Más segmentación, menos campañas a ciegas",
      description:
        "Cada envío a un segmento con criterio hotelero — fidelidad, gasto, anticipación, fuente de reserva — recalculado al momento.",
      metric: "Segmentos · live",
    },
    {
      title: "Más automatización, menos trabajo manual",
      description:
        "Ciclos de vida del huésped antes, durante y después de la estancia, sin que nadie tenga que tirar de Excel.",
      metric: "Lifecycle · 12 pasos",
    },
    {
      title: "Más venta directa, menos OTAs",
      description:
        "Cuando dominas el dato, recuperas el control de la relación con el huésped. El CRM Fideltour es la herramienta donde esa pelea se gana.",
      metric: "Direct · sobre OTAs",
    },
  ],
  benefits: [
    {
      title: "Pensado para hoteles",
      description:
        "Las plantillas, segmentos y reportes están construidos sobre lógica hotelera: ADR, RevPAR, LOS, canal, segmento, fidelidad.",
    },
    {
      title: "Integración con tu stack",
      description:
        "Se conecta con PMS, motor de reservas, encuestas y ads para que el CRM sea el centro neurálgico, no una herramienta aislada.",
    },
    {
      title: "Adopción real",
      description:
        "Equipos de recepción, revenue y marketing usan la misma vista del huésped — sin replicar datos ni discusiones sobre la fuente de verdad.",
    },
  ],
  faq: [
    {
      question:
        "¿En qué se diferencia un CRM hotelero de un CRM genérico tipo Salesforce o HubSpot?",
      answer:
        "Un CRM genérico habla de leads y oportunidades B2B. Un CRM hotelero habla de huéspedes, reservas, estancias, ADR, LOS, fidelización y canal de reserva. La diferencia no es solo de vocabulario: es de modelo de datos.",
    },
    {
      question: "¿Por qué Fideltour pasa del CRM al CDP?",
      answer:
        "El CRM resuelve la operativa de marketing y ventas. El CDP resuelve la unificación del dato a nivel de toda la organización hotelera. Fideltour empieza siendo el CRM del hotel y crece hasta convertirse en la fuente única de verdad — sin migraciones traumáticas.",
    },
    {
      question: "¿Reemplaza al CRM que ya uso?",
      answer:
        "Depende. Si tu CRM actual cubre solo email y poco más, sí. Si tienes un CRM B2B (Salesforce, Pipedrive) para corporativo, Fideltour convive con él y se centra en el huésped directo.",
    },
    {
      question: "¿Cuánto tarda en estar en producción?",
      answer:
        "Un equipo medio arranca con el CRM operativo en 4 a 6 semanas: conexión al PMS, importación de histórico, primer ciclo de vida automatizado y dashboards iniciales.",
    },
  ],
  relatedCaso: "hotel-urbano",
};
