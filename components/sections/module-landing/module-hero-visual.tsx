import {
  Bell,
  Calendar,
  Database,
  Gift,
  Globe,
  ListFilter,
  Mail,
  MessageCircle,
  MessagesSquare,
  Plug2,
  Send,
  Sparkles,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type { ModuleCategory } from "@/lib/content/module-landings";

type Chip = { icon: LucideIcon; label: string };
type CategoryVisual = {
  hubLabel: string;
  hubIcon: LucideIcon;
  hubKicker: string;
  chips: [Chip, Chip, Chip];
};

/**
 * Configuración de la "plate" visual del hero por familia. La idea es que
 * un visitante reconozca de un vistazo de qué categoría es el módulo:
 *
 *   data-import        → fuentes que entran al CDP.
 *   data-intelligence  → señales que produce el CDP.
 *   data-activation    → canales que dispara el CDP.
 *   multicanalidad     → conversaciones que envía el CDP.
 *
 * Cada plate usa tokens (no valores arbitrarios) y se construye solo con
 * iconos lucide + cajas Tailwind — sin assets nuevos.
 */
const variants: Record<ModuleCategory, CategoryVisual> = {
  "data-import": {
    hubLabel: "CDP del hotel",
    hubKicker: "Una sola fuente de verdad",
    hubIcon: Database,
    chips: [
      { icon: Plug2, label: "PMS" },
      { icon: Globe, label: "Web" },
      { icon: Calendar, label: "Motor" },
    ],
  },
  "data-intelligence": {
    hubLabel: "Insight",
    hubKicker: "Identidad, score y segmento",
    hubIcon: Sparkles,
    chips: [
      { icon: UserCheck, label: "Identity" },
      { icon: ListFilter, label: "Segments" },
      { icon: Sparkles, label: "P(reserva)" },
    ],
  },
  "data-activation": {
    hubLabel: "Activación",
    hubKicker: "Del dato a la venta directa",
    hubIcon: Zap,
    chips: [
      { icon: Send, label: "Campaigns" },
      { icon: Gift, label: "Rewards" },
      { icon: Zap, label: "Automation" },
    ],
  },
  multicanalidad: {
    hubLabel: "Conversación",
    hubKicker: "Un perfil, todos los canales",
    hubIcon: MessagesSquare,
    chips: [
      { icon: Mail, label: "Email" },
      { icon: MessageCircle, label: "WhatsApp" },
      { icon: Bell, label: "Push" },
    ],
  },
};

type Props = {
  category: ModuleCategory;
};

export function ModuleHeroVisual({ category }: Props) {
  const variant = variants[category];
  const HubIcon = variant.hubIcon;

  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-md">
      {/* Aro de marca como ambient — un solo aro, eco de la O del logo */}
      <div className="pointer-events-none absolute inset-0 rounded-full border-[44px] border-brand/20" />

      {/* Hub central */}
      <div className="absolute left-1/2 top-1/2 flex w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl bg-brand-navy-deep/85 px-4 py-5 text-center text-white shadow-elevated ring-1 ring-white/15 backdrop-blur">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand text-white">
          <HubIcon className="size-5" />
        </span>
        <div className="text-eyebrow text-white/70">{variant.hubKicker}</div>
        <div className="text-base font-bold text-white">{variant.hubLabel}</div>
      </div>

      {/* Chips satélite — top-left, top-right, bottom-center */}
      <Chip
        chip={variant.chips[0]}
        className="absolute left-2 top-6 md:left-4 md:top-10"
      />
      <Chip
        chip={variant.chips[1]}
        className="absolute right-2 top-6 md:right-4 md:top-10"
      />
      <Chip
        chip={variant.chips[2]}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10"
      />
    </div>
  );
}

function Chip({
  chip,
  className,
}: {
  chip: Chip;
  className: string;
}) {
  const Icon = chip.icon;
  return (
    <div
      className={`${className} flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-soft ring-1 ring-white/15 backdrop-blur`}
    >
      <Icon className="size-4 text-brand-mint" />
      {chip.label}
    </div>
  );
}
