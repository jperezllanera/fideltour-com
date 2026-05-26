import Link from "next/link";
import { ArrowRight, Coins, Megaphone } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PartnersHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] top-1/2 -translate-y-1/2 size-[138vw] max-w-[1380px] max-h-[1380px] rounded-full border-[120px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-20 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-24">
        <div className="md:col-span-8 flex flex-col gap-6">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Partners · CDP para hoteles
          </span>

          <h1 className="text-white">
            Lleva el marketing de tus clientes{" "}
            <span className="text-brand">a otro nivel</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Como partner de Fideltour amplificas tu propuesta de valor con un
            CDP especializado en hotelería y construyes una línea de ingreso
            recurrente — sin asumir implementación ni soporte del cliente final.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* TODO senior: la web actual enlaza a partners.fideltour.com
                (portal externo que aún no existe en este repo). De momento
                redirige al formulario de /contacto. */}
            <Button
              size="lg"
              className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              render={<Link href="/contacto" />}
            >
              Quiero ser partner
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white px-6 gap-1.5"
              render={<Link href="#programa" />}
            >
              Cómo funciona
            </Button>
          </div>
        </div>

        <ul className="md:col-span-4 flex flex-col gap-3 self-end">
          <li className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15">
              <Coins className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-eyebrow text-white/70">Comisión</span>
              <p className="text-base font-semibold text-white">
                10% del ingreso bruto durante 12 meses
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15">
              <Megaphone className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-eyebrow text-white/70">Co-marketing</span>
              <p className="text-base font-semibold text-white">
                Eventos, campañas y kit de afiliación incluidos
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
