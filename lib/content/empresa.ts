import {
  HeartHandshake,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   Sobre Fideltour — /fideltour
   ----------------------------------------------------------------------
   Réplica del contenido público de fideltour.com/fideltour/. La página
   se apoya en 3 pilares estratégicos y los sellos institucionales que ya
   están en el footer; aquí los duplicamos visualmente como bloque
   protagonista en lugar de tira de pie de página.
   ────────────────────────────────────────────────────────────────────── */

export type EmpresaPilar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const empresaPilares: EmpresaPilar[] = [
  {
    title: "Por hoteleros, para hoteleros",
    description:
      "Un CDP especializado en el sector hotelero, pensado para aumentar la venta directa y reducir la dependencia de las OTAs — no un CRM genérico maquillado.",
    icon: HeartHandshake,
  },
  {
    title: "Digitalización y progreso",
    description:
      "A la vanguardia tecnológica, con cuidado por lo estético y lo usable: la herramienta tiene que entrar bien al equipo del hotel, no solo al departamento de IT.",
    icon: Rocket,
  },
  {
    title: "Adaptabilidad y desarrollo",
    description:
      "Comunicación clara, transparencia e integridad. Construimos relaciones duraderas con los hoteles porque el dato propio se gana, no se compra.",
    icon: Sparkles,
  },
];

export type EmpresaMetric = {
  value: string;
  label: string;
};

export const empresaMetrics: EmpresaMetric[] = [
  { value: "+150", label: "Conexiones en marketplace" },
  { value: "4", label: "Países con operación" },
  { value: "1", label: "Fuente de verdad por hotel" },
];

export const empresaCountries = ["España", "Colombia", "México", "Portugal"];
