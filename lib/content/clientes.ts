import { Building2, Layers3, Network, Globe2, type LucideIcon } from "lucide-react";

export type ClienteSegment = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  customers: string[];
};

export const clienteSegments: ClienteSegment[] = [
  {
    id: "independiente",
    label: "Segmento · 01",
    title: "Hotel independiente",
    description:
      "Tecnología de fidelización diseñada para vender más directo, sin complejidad operativa.",
    icon: Building2,
    customers: ["El Palace", "Hotel Acapulco", "Bancal Hotel y Spa", "Valparaiso Hoteles"],
  },
  {
    id: "cadenas",
    label: "Segmento · 02",
    title: "Cadenas hoteleras",
    description:
      "Unifica datos, automatiza el marketing y escala la venta directa en todos tus hoteles.",
    icon: Layers3,
    customers: ["H&M Hotels", "Soho Boutique", "Universal Hotels"],
  },
  {
    id: "grupos",
    label: "Segmento · 03",
    title: "Grupos corporativos",
    description:
      "Gobierno del dato, personalización avanzada y activación multicanal a escala de grupo.",
    icon: Network,
    customers: ["Zafiro Hotels"],
  },
  {
    id: "enterprise",
    label: "Segmento · 04",
    title: "Enterprise",
    description:
      "Arquitectura enterprise para ecosistemas hoteleros complejos y operaciones globales.",
    icon: Globe2,
    customers: [],
  },
];
