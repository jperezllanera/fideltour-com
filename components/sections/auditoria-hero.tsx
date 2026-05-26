import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AuditoriaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[18%] top-1/2 -translate-y-1/2 size-[144vw] max-w-[1320px] max-h-[1320px] rounded-full border-[125px] border-brand/[0.22]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 md:px-6 md:pt-24 md:pb-24">
        <div className="md:max-w-3xl md:ml-auto md:text-right flex flex-col gap-6 md:items-end">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Auditoría de fidelización · CDP para hoteles
          </span>

          <h1 className="text-white">
            Solicita una auditoría{" "}
            <span className="text-brand">GRATIS</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Fideltour te permite auditar el crecimiento de tu base de datos, el
            aumento de tu venta directa y el ahorro que supone la fidelización
            frente a las OTAs.
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Y todo con unos pocos clics. ¿Empezamos?
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 md:justify-end">
            <Button
              size="lg"
              className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              render={<a href="#formulario" />}
            >
              Empezar auditoría
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
