import { CalendarCheck, Plug, RefreshCw } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const motorReservasLanding: ModuleLanding = {
  slug: "integracion-motor-de-reservas-para-hoteles",
  category: "data-import",
  navLabel: "Motor de reserva",
  meta: {
    title: "Integración de motor de reservas para hoteles",
    description:
      "Conecta tu motor de reservas con Fideltour y convierte cada reserva directa en un perfil enriquecido dentro del CDP. Centraliza la información y activa campañas que aumentan la fidelización y el revenue.",
  },
  hero: {
    eyebrow: "Data Import · Motor de reserva",
    title: "Integra tu motor de reservas con Fideltour.",
    titleAccent: "motor de reservas",
    lead:
      "Conecta tu motor de reservas con Fideltour y convierte cada reserva directa en un perfil enriquecido dentro del CRM. Centraliza la información y activa campañas automatizadas que aumentan la fidelización y el revenue.",
  },
  miniCards: [
    {
      title: "Integración directa con los principales motores",
      description: "Conexiones seguras y rápidas con los líderes del sector.",
      icon: Plug,
    },
    {
      title: "Reservas en tiempo real en el CRM",
      description:
        "Datos de cada estancia sincronizados al instante con el perfil del huésped.",
      icon: RefreshCw,
    },
    {
      title: "Más conversión y fidelización",
      description:
        "Convierte cada reserva en una oportunidad de upselling y repetición.",
      icon: CalendarCheck,
    },
  ],
  pillars: [
    {
      title: "Importación automática de reservas",
      description:
        "Cada nueva reserva se registra en el CRM sin tareas manuales — confirmaciones, modificaciones y cancelaciones incluidas.",
      metric: "Sync · real-time",
    },
    {
      title: "Compatibilidad con múltiples proveedores",
      description:
        "Fideltour Connect integra los motores de reservas líderes del mercado sin desarrollo a medida.",
      metric: "Conectores · stack abierto",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Datos de reserva, tarifas y preferencias quedan vinculados al perfil único del huésped.",
      metric: "Profile · 360º",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Los datos importados se activan en Campaigns, Automation y Reporting para maximizar resultados.",
      metric: "Activación · nativa",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Cada reserva se sincroniza al instante para garantizar campañas oportunas y comunicaciones contextuales.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Todos los datos del motor de reservas quedan centralizados en el ecosistema, sin silos ni duplicidades.",
    },
    {
      title: "Incrementa la fidelización",
      description:
        "Usa la información de reservas para personalizar comunicaciones, recuperar abandonos y aumentar el ticket medio.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para integrar mi motor de reservas?",
      answer:
        "Acceso a la API o credenciales de conexión del proveedor del motor. Nuestro equipo de Connect valida la integración antes del despliegue para asegurar que el flujo de datos funcione end-to-end.",
    },
    {
      question: "¿Cuánto se tarda en activar la integración?",
      answer:
        "Entre 1 y 2 semanas, según el motor de reservas y la configuración del hotel. Te acompañamos en cada paso del onboarding.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "La integración está incluida en Fideltour Connect. El proveedor del motor puede requerir licencia o fee adicional, dependiendo de su política comercial.",
    },
    {
      question: "¿Qué datos de la reserva se sincronizan con el CRM?",
      answer:
        "Identificación del huésped, fechas de estancia, tarifa, canal y tipología de habitación, junto con cualquier campo opcional que el motor exponga vía API. Toda esa información alimenta la ficha de contacto y los segmentos del CDP.",
    },
  ],
  relatedCaso: "hotel-urbano-centrico",
};
