import {
  Building2,
  Landmark,
  Palmtree,
  TrendingUp,
  Wallet,
  Gauge,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   Casos de éxito — /casos-de-exito + /casos-de-exito/[slug]
   ----------------------------------------------------------------------
   Réplica del contenido público de fideltour.com. Tres casos con
   misma plantilla: contexto + reto + solución + resultados con métricas.
   El asset de imagen real lo aporta marketing más adelante (ahora se
   renderiza con el aro de marca como en el resto del sitio).
   ────────────────────────────────────────────────────────────────────── */

export type CasoMetric = {
  value: string;
  label: string;
  description?: string;
};

export type CasoSeccion = {
  title: string;
  body: string[];
};

export type CasoDeExito = {
  slug: string;
  eyebrow: string;
  segment: "Urbano" | "Urbano céntrico" | "Vacacional";
  segmentIcon: LucideIcon;
  hotelTagline: string;
  title: string;
  excerpt: string;
  metrics: CasoMetric[];
  context: CasoSeccion;
  challenge: CasoSeccion;
  solution: CasoSeccion;
  results: CasoSeccion;
};

export const casosDeExito: CasoDeExito[] = [
  {
    slug: "hotel-urbano",
    eyebrow: "Camino al éxito de la fidelización",
    segment: "Urbano",
    segmentIcon: Building2,
    hotelTagline: "Hotel urbano · centralizar para escalar",
    title: "Hotel urbano busca centralizar: éxito gracias a un CRM hotelero",
    excerpt:
      "Crecer es un buen indicador de que tu negocio funciona — pero puedes perder ingresos si no sabes cómo organizar los datos del huésped.",
    metrics: [
      {
        value: "+57%",
        label: "Venta directa",
        description: "Crecimiento del canal propio tras unificar el dato.",
      },
      {
        value: "10",
        label: "Intereses registrados",
        description: "Posibilidades de venta segmentables durante el año.",
      },
      {
        value: "↑",
        label: "Ratio de apertura",
        description: "Comunicación relevante para cada perfil de huésped.",
      },
    ],
    context: {
      title: "Contexto",
      body: [
        "Un hotel urbano en plena fase de crecimiento empezaba a notar que el aumento de reservas se traducía en más datos sueltos por canal — PMS, motor, recepción, marketing — sin una capa común que los conectara.",
        "La sensación del equipo era de avanzar a ciegas: las campañas se hacían con criterio pero sin segmentación, y las decisiones comerciales dependían del Excel del momento.",
      ],
    },
    challenge: {
      title: "El reto",
      body: [
        "Integrar la información dispersa del PMS y otros sistemas para poder segmentar de verdad y entender preferencias del huésped, en lugar de mandar la misma comunicación a toda la base.",
        "El equipo de marketing necesitaba autonomía para activar campañas en función del comportamiento real, sin depender de exportaciones manuales.",
      ],
    },
    solution: {
      title: "La solución",
      body: [
        "Despliegue de Fideltour CRM con el módulo Connect enlazando el PMS y el motor de reservas, y consolidación del perfil unificado por huésped.",
        "Configuración de campañas de email marketing segmentadas por interés, ocupación prevista y momento del guest journey — sin tocar una hoja de cálculo.",
      ],
    },
    results: {
      title: "Resultados",
      body: [
        "La venta directa creció un 57% en el ciclo posterior al despliegue, apoyada en una base con 10 intereses distintos identificados a lo largo del año.",
        "Las campañas dejaron de ser genéricas: el ratio de apertura subió porque cada mensaje encajaba con lo que el huésped esperaba recibir.",
      ],
    },
  },
  {
    slug: "hotel-urbano-centrico",
    eyebrow: "Cuando saber comunicar lo es todo",
    segment: "Urbano céntrico",
    segmentIcon: Landmark,
    hotelTagline: "Hotel urbano céntrico · variedad y segmentación",
    title: "El hotel urbano que usó Fideltour y mejoró su venta directa",
    excerpt:
      "Lo mejor de un hotel céntrico es la inmensa variedad de huéspedes que recibe — pero ¿cómo comunicarte con ellos si no tienes sus datos?",
    metrics: [
      {
        value: "↑↑",
        label: "Base de datos",
        description: "Incremento sostenido del CRM tras integrar Connect.",
      },
      {
        value: "↑",
        label: "Apertura de email",
        description: "Mejor performance por segmentación de intereses.",
      },
      {
        value: "100%",
        label: "Centralizado",
        description: "Un único perfil del huésped en lugar de fuentes sueltas.",
      },
    ],
    context: {
      title: "Contexto",
      body: [
        "Un prestigioso hotel urbano céntrico mantenía un alto volumen de reservas, pero su base de datos era limitada y no reflejaba la enorme diversidad de huéspedes que atraía su ubicación.",
        "Sin un dato útil, la oportunidad comercial de los servicios complementarios quedaba sin explotar.",
      ],
    },
    challenge: {
      title: "El reto",
      body: [
        "Multiplicar la base de datos con información de calidad y aprovechar la ubicación estratégica para segmentar por intereses concretos.",
        "Convertir cada estancia en una oportunidad de comunicación posterior — no solo una transacción puntual.",
      ],
    },
    solution: {
      title: "La solución",
      body: [
        "Integración del PMS a través del módulo Connect para alimentar el CRM con cada reserva, llegada y salida.",
        "Diseño de campañas específicas para fechas comerciales clave y para optimizar la ocupación en momentos de menor demanda, todo segmentado por interés.",
      ],
    },
    results: {
      title: "Resultados",
      body: [
        "La base de datos creció de forma sostenida tras la centralización con Connect, con perfiles enriquecidos por cada interacción.",
        "La apertura de email mejoró notablemente al pasar de envíos genéricos a comunicaciones afines al perfil real del huésped.",
      ],
    },
  },
  {
    slug: "hotel-vacacional",
    eyebrow: "Cuando colaborar se convierte en magia",
    segment: "Vacacional",
    segmentIcon: Palmtree,
    hotelTagline: "Cadena vacacional · centralizar para liderar",
    title: "Una gran cadena hecha a sí misma: la historia de un grupo vacacional",
    excerpt:
      "Saber delegar tiene resultados extraordinarios. Y si delegas a un experto en tecnología hotelera, los problemas se reducen a cero.",
    metrics: [
      {
        value: "1",
        label: "Fuente de verdad",
        description: "Datos centralizados para toda la cadena.",
      },
      {
        value: "+",
        label: "Workflows activos",
        description: "Automatizaciones que respetan la marca de cada hotel.",
      },
      {
        value: "↑",
        label: "Rendimiento",
        description: "Consolidación del grupo en el mercado vacacional.",
      },
    ],
    context: {
      title: "Contexto",
      body: [
        "Una cadena hotelera prestigiosa con múltiples propiedades en las Islas Baleares acumulaba años de datos valiosos sin un sistema CRM que los pusiera al servicio de la toma de decisiones.",
        "Cada hotel del grupo tenía su propio criterio de gestión del dato, lo que dificultaba la lectura consolidada y la activación cross-marca.",
      ],
    },
    challenge: {
      title: "El reto",
      body: [
        "Pasar de tener mucho dato a tener dato útil: una sola fuente de verdad, accesible para el equipo central y respetuosa con la operativa de cada hotel.",
        "Habilitar workflows que permitieran analizar el impacto real de cada campaña, en lugar de mover cifras a posteriori.",
      ],
    },
    solution: {
      title: "La solución",
      body: [
        "Implementación de Fideltour CDP como capa común para todas las propiedades, con el módulo Connect centralizando rápidamente las fuentes existentes.",
        "Configuración de workflows automatizados por marca y por hotel, con seguimiento del impacto de cada campaña en tiempo casi real.",
      ],
    },
    results: {
      title: "Resultados",
      body: [
        "La cadena pasó a operar sobre un perfil único del huésped, con segmentación accionable a nivel grupo y a nivel propiedad.",
        "El impacto se notó tanto en el rendimiento comercial como en la consolidación de la marca dentro del mercado vacacional balear.",
      ],
    },
  },
];

/* Beneficios visibles en el índice — réplica de la web actual. */
export type CasosBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const casosBenefits: CasosBenefit[] = [
  {
    title: "Aumenta el ticket medio",
    description:
      "Conocer a tu huésped te permite ofrecerle experiencias exclusivas y generar más ingresos por estancia.",
    icon: Wallet,
  },
  {
    title: "Aumenta tu ROI",
    description:
      "El beneficio supera la inversión. Conocer al huésped sale rentable con un CDP para hoteles.",
    icon: TrendingUp,
  },
  {
    title: "Incrementa el ADR",
    description:
      "Un precio competitivo bien sostenido por datos maximiza ingresos y rentabilidad sin perder experiencia.",
    icon: Gauge,
  },
];

export function getCasoBySlug(slug: string) {
  return casosDeExito.find((c) => c.slug === slug);
}
