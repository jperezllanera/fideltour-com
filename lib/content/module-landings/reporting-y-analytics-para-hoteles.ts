import { Database, Gauge, LineChart } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const reportingLanding: ModuleLanding = {
  slug: "reporting-y-analytics-para-hoteles",
  category: "data-intelligence",
  navLabel: "Data Reporting",
  meta: {
    title: "Data Reporting & Analytics para hoteles",
    description:
      "Centraliza todos tus datos en un sistema de BI pensado para hoteleros. Dashboards personalizados e integraciones con las principales herramientas de analítica.",
  },
  hero: {
    eyebrow: "Data Intelligence · Data Reporting",
    title: "Empieza a utilizar Data Reporting para hoteles.",
    titleAccent: "Data Reporting",
    lead:
      "Centraliza todos tus datos en un sistema de BI pensado para hoteleros. Visualiza métricas clave, crea dashboards personalizados e integra tu información con las principales herramientas del mercado.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Dashboards a medida",
      description:
        "Configura las dimensiones que tu hotel necesita analizar.",
      icon: Gauge,
    },
    {
      title: "Integración con BigQuery",
      description:
        "Conecta con Looker Studio, Power BI, Tableau y más.",
      icon: Database,
    },
    {
      title: "Decisiones en tiempo real",
      description:
        "Convierte datos complejos en insights claros y accionables.",
      icon: LineChart,
    },
  ],
  pillars: [
    {
      title: "Sistema BI integrado",
      description:
        "Basado en Metabase, diseñado para adaptar dimensiones y métricas a la operativa hotelera.",
      metric: "BI · Metabase",
    },
    {
      title: "Dashboards personalizables",
      description:
        "Paneles por hotel, cadena, mercado, canal de venta o cualquier dimensión de negocio.",
      metric: "Drill-down · live",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Los datos de clientes, reservas y campañas se visualizan junto a KPIs de revenue y fidelización.",
      metric: "Cross-domain · sí",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Activa tus datos de CRM y CDP en un entorno visual conectado con todo el ecosistema.",
      metric: "Activación · nativa",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Métricas clave siempre actualizadas, sin depender del equipo técnico.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Conecta Reporting con CRM, Campaigns, Sales B2B y Guest ID en el mismo modelo.",
    },
    {
      title: "Impulsa tu estrategia",
      description:
        "Exporta a BigQuery y usa herramientas externas como Looker Studio o Power BI para análisis avanzados.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar con Data Reporting?",
      answer:
        "Tener activo el ecosistema Fideltour y definir las fuentes de datos a integrar. El equipo Connect configura los datasets iniciales.",
    },
    {
      question: "¿Cuánto se tarda en activar Reporting?",
      answer:
        "La implementación estándar se completa en 2–3 semanas, según volumen de datos y dashboards iniciales.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "Incluido en el paquete CDP, con coste adicional si se integran herramientas externas vía BigQuery.",
    },
    {
      question: "¿Puedo compartir dashboards con el comité de dirección?",
      answer:
        "Sí. Los dashboards admiten enlaces públicos firmados, exports programados o embedding en intranets internas con control de permisos.",
    },
  ],
};
