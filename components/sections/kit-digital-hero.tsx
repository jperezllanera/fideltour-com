import Link from "next/link";
import { ArrowRight, Euro, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function KitDigitalHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] top-1/2 -translate-y-1/2 size-[144vw] max-w-[1380px] max-h-[1380px] rounded-full border-[125px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-20 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-24">
        <div className="md:col-span-8 flex flex-col gap-6">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-mint" aria-hidden />
            Kit Digital · CDP para hoteles
          </span>

          <h1 className="text-white">
            Kit Digital{" "}
            <span className="text-brand-mint">Next Generation EU</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Participa en la convocatoria de ayudas del Programa Kit Digital,
            respaldado por los fondos europeos «Next Generation EU» y enmarcado
            en el Plan de Recuperación, Transformación y Resiliencia.
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-white/70">
            En Fideltour somos agente digitalizador acreditado: te asesoramos y
            te implementamos las soluciones de Gestión de clientes, Gestión de
            procesos y Business Intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* TODO senior: la web original abre un formulario propio. Redirige a /contacto. */}
            <Button
              size="lg"
              className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              render={<Link href="/contacto" />}
            >
              Quiero el Kit Digital
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white px-6"
              render={<Link href="#modulos" />}
            >
              Ver soluciones
            </Button>
          </div>
        </div>

        <ul className="md:col-span-4 flex flex-col gap-3 self-end">
          <li className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-mint ring-1 ring-white/15">
              <Euro className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-eyebrow text-white/70">Ayuda máxima</span>
              <p className="text-base font-semibold text-white">
                Hasta 6.000 € por solución
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-mint ring-1 ring-white/15">
              <ShieldCheck className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-eyebrow text-white/70">
                Agente digitalizador
              </span>
              <p className="text-base font-semibold text-white">
                Implementamos las soluciones por ti
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
