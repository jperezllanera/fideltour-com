import { Cable, Layers, Database } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const pmsLanding: ModuleLanding = {
  slug: "integracion-pms-para-hoteles",
  category: "data-import",
  navLabel: "PMS",
  video: {
    youtubeId: "6FdvLo-xBWI",
    title: "Módulo Connect: centraliza todas tus fuentes de datos",
  },
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
      question: "¿En qué consiste la integración entre un PMS y un CRM hotelero?",
      answer:
        "Es la capa que conecta la operativa del hotel (reservas, check-ins, consumo) con la capa comercial (huésped, segmentos, comunicaciones). El PMS sigue siendo la fuente operativa; el CRM —y el CDP por encima— consolida ese dato para activarlo en marketing, fidelización y venta directa.",
    },
    {
      question: "¿Qué datos se sincronizan entre el PMS y el CRM?",
      answer:
        "Identificación y contactos del huésped, todas las reservas con fechas, ADR, LOS, canal, segmento y consumo asociado (F&B, spa, parking, extras). Esos campos alimentan la ficha 360º del huésped y los segmentos del CDP — sin que el equipo tenga que tocar una hoja de cálculo.",
    },
    {
      question: "¿La integración es bidireccional o solo lectura?",
      answer:
        "Por defecto leemos del PMS para alimentar el CDP. Cuando el PMS lo permite y el caso de uso lo justifica —preferencias del huésped, marcas de fidelidad, segmentos VIP— también escribimos. La política se acuerda con tu equipo durante el onboarding.",
    },
    {
      question: "¿Cómo se evita duplicar huéspedes que reservan varias veces con datos distintos?",
      answer:
        "El módulo Identity aplica reglas de matching probabilístico —email, teléfono, documento, nombre completo y fecha de nacimiento— y consolida las fichas en un único perfil persistente. El match-rate típico se sitúa sobre el 92 %; el resto se resuelve con un panel de revisión manual rápida.",
    },
    {
      question: "¿Cuánto se tarda en poner la integración en producción?",
      answer:
        "Entre 4 y 6 semanas para un PMS conocido con API estándar — incluye conexión, importación del histórico, validación del matching y primer dashboard de revenue operativo. Cadenas con varias propiedades o jerarquía de marca pueden requerir hasta 8 semanas.",
    },
  ],
  relatedCaso: "hotel-urbano-centrico",
};
