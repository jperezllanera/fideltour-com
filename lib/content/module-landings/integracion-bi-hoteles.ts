import { BarChart3, Database, LineChart } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const biLanding: ModuleLanding = {
  slug: "integracion-bi-hoteles",
  category: "data-import",
  navLabel: "BI & Analytics",
  meta: {
    title: "Integración de BI & Analytics para hoteles",
    description:
      "Conecta Fideltour con BigQuery, Power BI, Looker Studio o Tableau y lleva la analítica hotelera a otro nivel. Combina datos de huéspedes, reservas y campañas para decidir con criterio.",
  },
  hero: {
    eyebrow: "Data Import · BI & Analytics",
    title: "Integra tu BI con Fideltour.",
    titleAccent: "BI",
    lead:
      "Conecta Fideltour con tus herramientas de Business Intelligence favoritas (BigQuery, Power BI, Looker Studio, Tableau) y lleva la analítica hotelera a otro nivel. Importa y combina datos de huéspedes, reservas y campañas para tomar decisiones basadas en información real.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Dashboards personalizados",
      description:
        "Visualiza KPIs hoteleros en tu herramienta de BI favorita, sin exports a Excel.",
      icon: BarChart3,
    },
    {
      title: "Integración con BigQuery",
      description:
        "Conecta fácilmente con Power BI, Looker Studio, Tableau y otras plataformas BI.",
      icon: Database,
    },
    {
      title: "Datos enriquecidos en tiempo real",
      description:
        "Accede a la información completa del CRM/CDP sin replicar fuentes ni procesos.",
      icon: LineChart,
    },
  ],
  pillars: [
    {
      title: "Conexión directa con BigQuery",
      description:
        "Exporta y analiza los datos de Fideltour desde cualquier plataforma de BI con conector nativo a Google Cloud.",
      metric: "Warehouse · BigQuery",
    },
    {
      title: "Compatibilidad con múltiples herramientas",
      description:
        "Funciona con Power BI, Looker Studio, Tableau y otros sistemas de reporting habituales en operaciones hoteleras.",
      metric: "Stack · abierto",
    },
    {
      title: "Datos siempre enriquecidos",
      description:
        "Huéspedes, reservas y campañas listas para combinar con otras fuentes — revenue management, RRSS, encuestas.",
      metric: "Schema · unificado",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Sin procesos manuales ni duplicidad de datos: todo fluye al ecosistema BI desde la misma fuente de verdad.",
      metric: "Pipeline · sin ETL",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Accede a información actualizada en todo momento, sin depender de IT ni de procesos batch nocturnos.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Activa tus datos en campañas, reporting y cuadros de mando externos desde un mismo modelo.",
    },
    {
      title: "Impulsa tu estrategia de datos",
      description:
        "Convierte datos dispersos en decisiones estratégicas medibles para el equipo de revenue y dirección.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para integrar Fideltour con mi BI?",
      answer:
        "Acceso a BigQuery y la herramienta de BI que utilice tu hotel. El equipo Connect configura la conexión y mapea los datasets relevantes para tu caso.",
    },
    {
      question: "¿Cuánto se tarda en activar la integración?",
      answer:
        "Normalmente entre 1 y 3 semanas, según la complejidad de las fuentes de datos y los dashboards que se quieran montar.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "La integración con BigQuery está incluida en Fideltour Connect. Las herramientas de BI externas pueden requerir licencias adicionales.",
    },
    {
      question: "¿Puedo combinar los datos de Fideltour con otras fuentes?",
      answer:
        "Sí. El modelo expuesto en BigQuery es plenamente combinable con cualquier otra fuente que tengas en el warehouse — PMS, RRSS, encuestas o data warehouse de cadena.",
    },
  ],
};
