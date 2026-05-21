import { Cable, Layers, Database } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const pmsLanding: ModuleLanding = {
  slug: "integracion-pms-para-hoteles",
  category: "data-import",
  navLabel: "PMS",
  meta: {
    title: "Integración con tu PMS · CDP para hoteles",
    description:
      "Conecta tu PMS con Fideltour y unifica reservas, estancias y consumo de cada huésped en el CDP. Sin ETLs eternos, sin datos huérfanos.",
  },
  hero: {
    eyebrow: "Data Import · PMS",
    title: "Tu PMS, conectado al CDP del hotel.",
    titleAccent: "CDP del hotel",
    lead:
      "Fideltour ingiere reservas, estancias y consumo desde tu PMS y los convierte en un perfil unificado por huésped. La base sobre la que se construye toda la activación.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Ingesta en tiempo real",
      description:
        "Lee reservas, estancias y consumo desde tu PMS y los une al perfil del huésped sin latencia.",
      icon: Cable,
    },
    {
      title: "Consolidación cross-propiedad",
      description:
        "Si operas varios hoteles, todas las propiedades convergen en una sola CDP con jerarquía de marca.",
      icon: Layers,
    },
    {
      title: "Histórico unificado",
      description:
        "Todas las estancias pasadas viajan al CDP — la base para predecir la siguiente reserva.",
      icon: Database,
    },
  ],
  pillars: [
    {
      title: "Más perfil, menos silos",
      description:
        "El PMS deja de ser una isla. Cada huésped consolida reservas, ADR, LOS, canal y consumo en una sola ficha consultable y exportable.",
      metric: "1 huésped · n estancias",
    },
    {
      title: "Más identidad, menos duplicados",
      description:
        "Reglas de matching que detectan a la misma persona aunque reserve con mail distinto, en hoteles distintos o como empresa y particular.",
      metric: "Match-rate · 92 %",
    },
    {
      title: "Más segmentación, menos hojas de cálculo",
      description:
        "Audiencias dinámicas que recalculan según fecha de estancia, segmento, fidelidad o histórico de consumo en F&B y spa.",
      metric: "Recompute · 60 s",
    },
    {
      title: "Más control, menos dependencia",
      description:
        "Tus datos en tu CDP — no en el silo del PMS. El hotelero que domina el dato domina la venta directa frente a las OTAs.",
      metric: "Direct · sobre OTAs",
    },
  ],
  benefits: [
    {
      title: "RGPD por defecto",
      description:
        "Consentimiento granular y derecho al olvido propagado en todos los sistemas del hotel.",
    },
    {
      title: "Multi-PMS sin fricción",
      description:
        "El conector ya está validado con los PMS más usados en España, Portugal, México y Colombia.",
    },
    {
      title: "Setup en semanas",
      description:
        "Despliegue tipo: PMS conectado, perfil unificado activo y primer dashboard de revenue listo en 4 a 6 semanas.",
    },
  ],
  faq: [
    {
      question: "¿Qué PMS están integrados con Fideltour?",
      answer:
        "Tenemos conectores validados con los principales PMS del sector. Si tu PMS no aparece en el listado público del marketplace, escríbenos y lo verificamos en una llamada técnica corta.",
    },
    {
      question: "¿Tengo que cambiar de PMS para usar Fideltour?",
      answer:
        "No. Fideltour se acopla a tu PMS actual: lee los datos relevantes y los unifica en el CDP. Tu PMS sigue siendo la herramienta operativa del día a día del hotel.",
    },
    {
      question: "¿Los datos se actualizan en tiempo real o por lotes?",
      answer:
        "Depende del PMS. Cuando el sistema lo permite, la ingesta es en tiempo real vía API. En el resto de casos sincronizamos en ventanas cortas — minutos, no horas.",
    },
    {
      question: "¿Quién es dueño de los datos una vez conectados al CDP?",
      answer:
        "Tú. El hotel es responsable del tratamiento; Fideltour actúa como encargado bajo contrato y RGPD. Si dejas la plataforma, te exportamos el histórico íntegro.",
    },
  ],
};
