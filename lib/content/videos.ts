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
   Réplica de la página actual de fideltour.com. La web original carga
   los vídeos dinámicamente (sin URLs públicas de detalle), así que aquí
   los referenciamos por slug + título y dejamos el href apuntando al
   propio hub. Cuando senior decida la stack de hosting de vídeo
   (YouTube no listado, Spotify, etc.), basta con sustituir `href`.
   ────────────────────────────────────────────────────────────────────── */

export type VideoItem = {
  slug: string;
  title: string;
  description?: string;
  duration?: string;
  href: string;
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

const HUB_HREF = "/recursos/nuestros-videos-crm-hotelero";

export const videoSections: VideoSection[] = [
  {
    id: "esencial",
    eyebrow: "Empieza por lo esencial",
    title: "Empieza por lo esencial",
    description:
      "Una explicación clara de cómo se articula la herramienta y cómo se aplica en el día a día del hotel.",
    icon: GraduationCap,
    layout: "feature",
    videos: [
      {
        slug: "introduccion-fideltour",
        title: "Introducción a Fideltour",
        description:
          "Cómo encaja el CDP para hoteles en el día a día del equipo de marketing, recepción y dirección.",
        duration: "9 min",
        href: HUB_HREF,
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
        slug: "modulo-crm",
        title: "CRM",
        description:
          "El núcleo: perfil unificado del huésped y datos accionables por cualquier canal.",
        duration: "6 min",
        href: HUB_HREF,
      },
      {
        slug: "modulo-campaigns",
        title: "Campaigns",
        description:
          "Email, SMS y push con criterio hotelero: segmentación viva, no listas estáticas.",
        duration: "5 min",
        href: HUB_HREF,
      },
      {
        slug: "modulo-automation",
        title: "Automation",
        description:
          "Flujos pre, durante y post estancia que respetan el ritmo del huésped.",
        duration: "6 min",
        href: HUB_HREF,
      },
      {
        slug: "modulo-landings",
        title: "Landings",
        description:
          "Páginas y formularios para captar dato propio sin depender de IT.",
        duration: "4 min",
        href: HUB_HREF,
      },
      {
        slug: "modulo-reviews",
        title: "Reviews",
        description:
          "Reputación online como input del CDP, no como métrica suelta.",
        duration: "5 min",
        href: HUB_HREF,
      },
      {
        slug: "modulo-rewards",
        title: "Rewards",
        description:
          "Programa de fidelización con escalera por valor real del huésped.",
        duration: "5 min",
        href: HUB_HREF,
      },
      {
        slug: "modulo-social",
        title: "Social",
        description:
          "Audiencias y campañas sincronizadas con Meta, Google y TTD.",
        duration: "5 min",
        href: HUB_HREF,
      },
      {
        slug: "modulo-connect",
        title: "Connect",
        description:
          "Integraciones con PMS, motor de reservas, portal cautivo y BI.",
        duration: "6 min",
        href: HUB_HREF,
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
        duration: "26 min",
        href: "/blog/fideltalks/fideltalks-episodio1-abrirse-paso-entre-las-otas/",
      },
      {
        slug: "fideltalks-1x02-embajadores-marca",
        title: "FidelTalks 1×02 · Embajadores de marca",
        description:
          "Convertir huéspedes recurrentes en prescriptores que mueven la ocupación.",
        duration: "24 min",
        href: "/blog/fideltalks/fideltalks-episodio2-crear-embajadores-de-marca-para-tu-hotel/",
      },
      {
        slug: "fideltalks-1x03-email-marketing",
        title: "FidelTalks 1×03 · Email marketing para hoteles",
        description:
          "Más allá del newsletter: ciclos de vida del huésped que sí venden.",
        duration: "22 min",
        href: "/blog/fideltalks/fideltalks-episodio3-email-marketing-para-hoteles/",
      },
      {
        slug: "fideltalks-1x04-tendencias",
        title: "FidelTalks 1×04 · Tendencias de marketing hotelero",
        description:
          "Qué se cuece en el sector y qué es ruido pasajero, contado por quien lo vive.",
        duration: "25 min",
        href: "/blog/fideltalks/fideltalks-episodio4-tendencias-marketing-hotelero/",
      },
      {
        slug: "fideltalks-1x05-inbound",
        title: "FidelTalks 1×05 · Inbound marketing en hotelería",
        description:
          "Atraer al huésped antes de la reserva con contenido que sí responde a su búsqueda real.",
        duration: "23 min",
        href: "/blog/fideltalks/fideltalks-episodio5-inbound-marketing-para-hoteles/",
      },
      {
        slug: "fideltalks-1x06-empresa-tecnologica",
        title: "FidelTalks 1×06 · Crear empresa tecnológica hotelera",
        description:
          "El detrás de Fideltour: producto, equipo y aprendizajes de los primeros años.",
        duration: "28 min",
        href: "/blog/fideltalks/fideltalks-1x06-como-crear-empresa-tecnologica-hotelera/",
      },
      {
        slug: "fideltalks-rebeca-cool-hotels",
        title: "FidelTalks · Rebeca Artidiello (Cool Hotels)",
        description:
          "Cómo una marca boutique convierte el dato propio en experiencias memorables.",
        duration: "27 min",
        href: "/blog/fideltalks/fideltalks-rebeca-artidiello-cool-hotels/",
      },
      {
        slug: "fideltalks-refineria",
        title: "FidelTalks · Refinería · Cómo mejorar la venta directa",
        description:
          "Conversación con la agencia Refinería sobre métricas que sí mueven la cuenta.",
        duration: "24 min",
        href: "/blog/fideltalks/fideltalks-refineria-como-mejorar-la-venta-directa/",
      },
      {
        slug: "fideltalks-videopodcast",
        title: "FidelTalks · El videopodcast de Fideltour",
        description:
          "Episodio especial: por qué existe FidelTalks y a quién va dirigido.",
        duration: "18 min",
        href: "/blog/fideltalks/fideltalks-videopodcast-fideltour/",
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
    layout: "grid-3",
    videos: [
      {
        slug: "tendencias-sector-hotelero",
        title: "Tendencias del sector hotelero",
        description:
          "Los movimientos que están redefiniendo el próximo ciclo del marketing hotelero.",
        duration: "8 min",
        href: HUB_HREF,
      },
      {
        slug: "influencia-crm",
        title: "La influencia del CRM en la cuenta de explotación",
        description:
          "Por qué el CRM hotelero pasa de ser herramienta táctica a palanca de margen.",
        duration: "7 min",
        href: HUB_HREF,
      },
      {
        slug: "uso-de-tendencias",
        title: "Cómo usar las tendencias sin perseguir el ruido",
        description:
          "Marco para decidir qué tendencia se incorpora y cuál se ignora con criterio.",
        duration: "6 min",
        href: HUB_HREF,
      },
      {
        slug: "evolucion-del-dato",
        title: "La evolución del dato hotelero",
        description:
          "Del Excel suelto al CDP: por qué el dato propio define quién manda en la venta.",
        duration: "9 min",
        href: HUB_HREF,
      },
      {
        slug: "datos-guest-journey",
        title: "Mejorar el dato a lo largo del guest journey",
        description:
          "Las 7 etapas del journey y qué dato útil se puede capturar en cada una.",
        duration: "10 min",
        href: HUB_HREF,
      },
    ],
  },
];

export const videoHubHref = HUB_HREF;
export const videoFallbackIcon: LucideIcon = Compass;
