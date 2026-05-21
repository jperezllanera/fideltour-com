import {
  Briefcase,
  Coins,
  Handshake,
  LifeBuoy,
  Megaphone,
  PackageOpen,
  Repeat,
  ShieldCheck,
  Terminal,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   Partners — /partners
   ----------------------------------------------------------------------
   Réplica del contenido público de fideltour.com/partners/. La web
   original enlaza el CTA principal a partners.fideltour.com (portal
   externo que aún no existe en este repo). De momento todos los CTA
   apuntan a /contacto con `TODO senior` marcado.
   ────────────────────────────────────────────────────────────────────── */

export type PartnerType = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: { title: string; description: string }[];
};

export const partnerTypes: PartnerType[] = [
  {
    slug: "agencias-marketing",
    eyebrow: "Agencias de marketing",
    title: "Agencias de marketing hotelero",
    description:
      "Si tienes hoteles como clientes y su objetivo principal es crecer en el canal directo, Fideltour amplía tu propuesta sin pisar lo que ya haces.",
    icon: Megaphone,
    benefits: [
      {
        title: "Servicio amplificado",
        description:
          "Suma una capa de CDP para hoteles al portfolio sin contratar producto.",
      },
      {
        title: "Más ROI para tu cliente",
        description:
          "Las campañas funcionan mejor cuando el perfil del huésped está unificado.",
      },
      {
        title: "Canal directo en crecimiento",
        description:
          "Ayudas al hotel a reducir su dependencia de OTAs con datos accionables.",
      },
      {
        title: "Ingresos recurrentes",
        description:
          "Comisión sobre la facturación que Fideltour recibe del cliente referido.",
      },
    ],
  },
  {
    slug: "software-providers",
    eyebrow: "Proveedores tecnológicos",
    title: "Proveedores de software y distribuidores",
    description:
      "Suma una solución diferencial a tu catálogo y genera ingresos recurrentes sin asumir la implementación ni el soporte del cliente final.",
    icon: Terminal,
    benefits: [
      {
        title: "Diferenciación competitiva",
        description:
          "Te posicionas como partner tecnológico con CDP especializado en hotelería.",
      },
      {
        title: "Captura de portal cautivo",
        description:
          "Registro WiFi personalizado integrado con el CDP del hotel.",
      },
      {
        title: "Comisión recurrente",
        description:
          "10% del ingreso bruto de Fideltour durante los primeros 12 meses.",
      },
      {
        title: "Foco en lo que sabes hacer",
        description:
          "Implementación, soporte y administración los gestiona Fideltour.",
      },
    ],
  },
];

export type PartnerBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const partnerProgramBenefits: PartnerBenefit[] = [
  {
    title: "Account manager dedicado",
    description:
      "Un comercial Fideltour asignado al partner para cualificar leads, agendar demos y prospectar a cuatro manos.",
    icon: Handshake,
  },
  {
    title: "Co-marketing real",
    description:
      "Eventos conjuntos presenciales o digitales, campañas comerciales y soporte del equipo de marketing en distribución de contenido.",
    icon: Megaphone,
  },
  {
    title: "Kit de afiliación",
    description:
      "Presentaciones comerciales, casos de éxito, infografías y biblioteca gráfica listos para usar con tus clientes.",
    icon: PackageOpen,
  },
  {
    title: "Panel de partner",
    description:
      "Seguimiento de comisiones, métricas de rendimiento e histórico de ingresos (próximamente).",
    icon: LifeBuoy,
  },
  {
    title: "Cero fricción operativa",
    description:
      "No te ocupas de facturación, implementación, soporte ni contratos: lo gestiona Fideltour de extremo a extremo.",
    icon: ShieldCheck,
  },
  {
    title: "Foco en hotelería",
    description:
      "Solo referenciamos establecimientos hoteleros — sin vacacional residencial, restauración ni otros sectores.",
    icon: Briefcase,
  },
];

/* Bloque económico — réplica literal del modelo público. */
export type CommissionRule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const partnerCommissionRules: CommissionRule[] = [
  {
    title: "10% de ingreso bruto",
    description:
      "Comisión sobre la facturación que Fideltour recibe de cada cliente referido cualificado.",
    icon: Coins,
  },
  {
    title: "12 meses por venta",
    description:
      "La comisión se devenga durante los primeros 12 meses desde la venta cualificada, pagada por trimestres naturales.",
    icon: Repeat,
  },
  {
    title: "Ventana de 90 días",
    description:
      "El prospecto debe registrarse en los 90 días siguientes al clic en el enlace de afiliado, y cerrar venta cualificada dentro de otros 90 días.",
    icon: TrendingUp,
  },
];
