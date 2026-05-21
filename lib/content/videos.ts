import {
  Boxes,
  Compass,
  GraduationCap,
  LineChart,
  Mic,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   Hub de vídeos — /recursos/nuestros-videos-crm-hotelero
   ----------------------------------------------------------------------
   Catálogo migrado desde fideltour.com (legacy WordPress). Cada vídeo se
   reproduce como embed de YouTube vía <YouTubePlayer> con click-to-play
   (sin cargar el iframe hasta la interacción).
   ────────────────────────────────────────────────────────────────────── */

export type VideoItem = {
  slug: string;
  title: string;
  description?: string;
  duration?: string;
  youtubeId: string;
};

export type VideoSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  layout: "feature" | "grid-4" | "grid-3" | "grid-2";
  videos: VideoItem[];
};

export const videoSections: VideoSection[] = [
  {
    id: "esencial",
    eyebrow: "Empieza por lo esencial",
    title: "Empieza por lo esencial",
    description:
      "Una explicación clara de cómo se articula el CDP para hoteles de Fideltour y cómo encaja en el día a día del equipo.",
    icon: GraduationCap,
    layout: "feature",
    videos: [
      {
        slug: "fideltour-crm-venta-directa",
        title: "Fideltour · Tu venta más directa",
        description:
          "Cómo el CDP para hoteles ordena el dato del huésped y se traduce en venta directa, menos dependencia de OTAs y campañas con criterio hotelero.",
        duration: "2 min",
        youtubeId: "za_cEzVxsrs",
      },
    ],
  },
  {
    id: "modulos",
    eyebrow: "Conoce los módulos",
    title: "Conoce los módulos",
    description:
      "Qué hace cada módulo y cómo impacta en la captación, experiencia y fidelización del huésped.",
    icon: Boxes,
    layout: "grid-4",
    videos: [
      {
        slug: "modulo-campaigns",
        title: "Módulo Campaigns",
        description:
          "Email, SMS y push con criterio hotelero: segmentación viva, no listas estáticas.",
        duration: "2 min",
        youtubeId: "w2RGPDvH-Mk",
      },
      {
        slug: "modulo-automation",
        title: "Módulo Automation",
        description:
          "Flujos pre, durante y post estancia que respetan el ritmo del huésped.",
        duration: "1 min",
        youtubeId: "vUmxkWGFO68",
      },
      {
        slug: "modulo-landings",
        title: "Módulo Landings",
        description:
          "Páginas y formularios para captar dato propio sin depender de IT.",
        duration: "1 min",
        youtubeId: "o_rVRxearTs",
      },
      {
        slug: "modulo-reviews",
        title: "Módulo Reviews",
        description:
          "Reputación online como input del CDP, no como métrica suelta.",
        duration: "2 min",
        youtubeId: "cORqcll_FTk",
      },
      {
        slug: "modulo-rewards",
        title: "Módulo Rewards",
        description:
          "Programa de fidelización con escalera por valor real del huésped.",
        duration: "2 min",
        youtubeId: "HmcuccyVZCE",
      },
      {
        slug: "modulo-social",
        title: "Módulo Social",
        description:
          "Audiencias y campañas sincronizadas con Meta, Google y TTD.",
        duration: "1 min",
        youtubeId: "oQmxnNu5fWw",
      },
      {
        slug: "modulo-connect",
        title: "Módulo Connect",
        description:
          "Integraciones con PMS, motor de reservas, portal cautivo y BI.",
        duration: "2 min",
        youtubeId: "6FdvLo-xBWI",
      },
    ],
  },
  {
    id: "fideltalks",
    eyebrow: "Descubre FidelTalks",
    title: "Descubre FidelTalks",
    description:
      "Conversaciones con hoteleros y especialistas sobre marketing hotelero y nuevas formas de conectar con el huésped.",
    icon: Mic,
    layout: "grid-3",
    videos: [
      {
        slug: "fideltalks-1x01-abrirse-paso-otas",
        title: "FidelTalks 1×01 · Abrirse paso entre las OTAs",
        description:
          "Cómo construir venta directa en un mercado dominado por la intermediación.",
        duration: "32 min",
        youtubeId: "oM_HbYJAA14",
      },
      {
        slug: "fideltalks-1x02-embajadores-marca",
        title: "FidelTalks 1×02 · Fidelizar y crear embajadores de marca",
        description:
          "Convertir huéspedes recurrentes en prescriptores que mueven la ocupación.",
        duration: "33 min",
        youtubeId: "-XxK1UOxLec",
      },
      {
        slug: "fideltalks-1x03-email-marketing",
        title: "FidelTalks 1×03 · Email marketing hotelero",
        description:
          "Conocer, enamorar y fidelizar al huésped con ciclos de vida que sí venden.",
        duration: "30 min",
        youtubeId: "09VNvMKGJXo",
      },
      {
        slug: "fideltalks-1x04-tendencias",
        title: "FidelTalks 1×04 · Tendencias en marketing hotelero",
        description:
          "Qué se cuece en el sector y qué es ruido pasajero, contado por quien lo vive.",
        duration: "22 min",
        youtubeId: "y53iOVk2uBw",
      },
      {
        slug: "fideltalks-1x04-ia-fidelizacion",
        title: "FidelTalks 1×04 · IA y fidelización hotelera",
        description:
          "Dónde la IA suma valor real en la relación con el huésped y dónde es ruido de marketing.",
        duration: "25 min",
        youtubeId: "cvv_Q5Gw5yI",
      },
      {
        slug: "fideltalks-1x05-del-valor-a-la-venta",
        title: "FidelTalks 1×05 · Del valor a la venta",
        description:
          "Cómo trasladar la propuesta de valor del hotel a tarifas que el huésped percibe como justas.",
        duration: "26 min",
        youtubeId: "1dv7zK5VAJI",
      },
      {
        slug: "fideltalks-1x05-que-enamora-al-huesped",
        title: "FidelTalks 1×05 · Qué enamora a tu huésped",
        description:
          "Los detalles y momentos que un hotel puede activar para convertir estancia en relación.",
        duration: "23 min",
        youtubeId: "Ix5nsiskKf4",
      },
      {
        slug: "fideltalks-1x06-empresa-tecnologica-hotelera",
        title: "FidelTalks 1×06 · Crear una empresa tecnológica hotelera",
        description:
          "El detrás de Fideltour: producto, equipo y aprendizajes de los primeros años.",
        duration: "27 min",
        youtubeId: "oh5O7OtV1sw",
      },
      {
        slug: "fideltalks-2x01-consultoria-real",
        title: "FidelTalks 2×01 · Consultoría real en hoteles",
        description:
          "No hay digitalización sin humanos: cómo se acompaña al hotel cuando el dato cambia su operativa.",
        duration: "29 min",
        youtubeId: "wGOW7qL3QaY",
      },
      {
        slug: "fideltalks-2x02-90-venta-directa",
        title: "FidelTalks 2×02 · Hasta un 90% de venta directa",
        description:
          "Cómo un hotel independiente puede acercarse al 90% de venta directa con dato propio y marca fuerte.",
        duration: "31 min",
        youtubeId: "a_q5HsYrxYM",
      },
    ],
  },
  {
    id: "vision",
    eyebrow: "Visión y tendencias",
    title: "Visión y tendencias",
    description:
      "Reflexiones sobre datos, tecnología y el futuro de la fidelización hotelera.",
    icon: LineChart,
    layout: "grid-2",
    videos: [
      {
        slug: "tendencias-tecnologicas-2025",
        title: "Tendencias tecnológicas en 2025 · Updating Hotelero",
        description:
          "Javier Pérez-Llanera repasa qué tecnologías están moviendo de verdad la cuenta del hotel en 2025.",
        duration: "3 min",
        youtubeId: "pLhEvnfjBKY",
      },
      {
        slug: "crm-experiencia-cliente-power",
        title: "Cómo el CRM influye en la experiencia del cliente",
        description:
          "Sesión con The Power Business School sobre el paso del CRM al CDP en el sector hotelero.",
        duration: "14 min",
        youtubeId: "a65w6nT2xpw",
      },
      {
        slug: "tendencias-compra-fidelizacion",
        title: "Tendencias de compra para estrategias de fidelización",
        description:
          "Marco para decidir qué tendencia se incorpora al journey del huésped y cuál se ignora con criterio.",
        duration: "5 min",
        youtubeId: "6cBb0KeiNfM",
      },
      {
        slug: "evolucion-dato-turistico",
        title: "Evolución del dato en el sector turístico",
        description:
          "Del Excel suelto al CDP: por qué el dato propio define quién manda en la venta directa.",
        duration: "14 min",
        youtubeId: "hdjBvvIJ8Bo",
      },
    ],
  },
];

export const videoHubHref = "/recursos/nuestros-videos-crm-hotelero";
export const videoFallbackIcon: LucideIcon = Compass;

/* ──────────────────────────────────────────────────────────────────────
   Highlights — selección para el preview de /recursos
   ----------------------------------------------------------------------
   /recursos consume un puñado de vídeos representativos del catálogo
   real (no una lista paralela inventada). Definimos aquí la selección
   por slug + categoría legible para la pill, y resolvemos el VideoItem
   completo desde videoSections.
   ────────────────────────────────────────────────────────────────────── */

export type VideoHighlight = VideoItem & {
  category: string;
  sectionId: string;
  href: string;
};

const HIGHLIGHT_SELECTION: { slug: string; category: string }[] = [
  { slug: "fideltour-crm-venta-directa", category: "Esencial" },
  { slug: "modulo-automation", category: "Módulo" },
  { slug: "fideltalks-1x01-abrirse-paso-otas", category: "FidelTalks" },
  { slug: "fideltalks-2x02-90-venta-directa", category: "FidelTalks" },
  { slug: "tendencias-tecnologicas-2025", category: "Visión" },
  { slug: "evolucion-dato-turistico", category: "Visión" },
];

export function getHighlightedVideos(): VideoHighlight[] {
  const hubAnchor = (sectionId: string) =>
    `${videoHubHref}/#${sectionId}`;

  const result: VideoHighlight[] = [];
  for (const { slug, category } of HIGHLIGHT_SELECTION) {
    for (const section of videoSections) {
      const video = section.videos.find((v) => v.slug === slug);
      if (video) {
        result.push({
          ...video,
          category,
          sectionId: section.id,
          href: hubAnchor(section.id),
        });
        break;
      }
    }
  }
  return result;
}
