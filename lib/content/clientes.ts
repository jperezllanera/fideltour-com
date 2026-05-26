import { Building2, Globe2, Layers3, Network, type LucideIcon } from "lucide-react";

export type ClienteLogo = {
  /** Slug del logo en `public/brand/cliente-{slug}.webp`. */
  slug: string;
  /** Nombre humano (alt + tooltip). */
  name: string;
};

export type ClienteSegment = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /**
   * Logos de cliente asignados al segmento, en el orden en que
   * aparecen en https://www.fideltour.com/clientes/ (4 + 4 + 4 + 1).
   * Si llega un cliente nuevo, métase en su segmento por orden de
   * incorporación.
   */
  customers: ClienteLogo[];
};

export const clienteSegments: ClienteSegment[] = [
  {
    id: "independiente",
    label: "Segmento · 01",
    title: "Hotel independiente",
    description:
      "Tecnología de fidelización diseñada para vender más directo, sin complejidad operativa.",
    icon: Building2,
    customers: [
      { slug: "el-palace", name: "El Palace Barcelona" },
      { slug: "hotel-acapulco", name: "Hotel Acapulco Lloret de Mar" },
      { slug: "bancal", name: "Bancal Hotel & Spa" },
      { slug: "valparaiso", name: "GPRO Valparaíso Palace & Spa" },
    ],
  },
  {
    id: "cadenas",
    label: "Segmento · 02",
    title: "Cadenas hoteleras",
    description:
      "Unifica datos, automatiza el marketing y escala la venta directa en todos tus hoteles.",
    icon: Layers3,
    customers: [
      { slug: "sirenis", name: "Sirenis Hotels & Resorts" },
      { slug: "hm-hotels", name: "HM Hotels" },
      { slug: "soho-boutique", name: "Soho Boutique Hotels" },
      { slug: "universal-beach", name: "Universal Beach Hotels" },
    ],
  },
  {
    id: "grupos",
    label: "Segmento · 03",
    title: "Grupos corporativos",
    description:
      "Gobierno del dato, personalización avanzada y activación multicanal a escala de grupo.",
    icon: Network,
    customers: [
      { slug: "zafiro", name: "Zafiro Hotels" },
      { slug: "oasis", name: "Oasis Hotels & Resorts" },
      { slug: "diestra", name: "Diestra Hoteles" },
      { slug: "hipotels", name: "Hipotels Hotels & Resorts" },
    ],
  },
  {
    id: "enterprise",
    label: "Segmento · 04",
    title: "Enterprise",
    description:
      "Arquitectura enterprise para ecosistemas hoteleros complejos y operaciones globales.",
    icon: Globe2,
    customers: [
      { slug: "eurostars", name: "Eurostars Hotel Company" },
    ],
  },
];
