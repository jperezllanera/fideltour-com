import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="demo" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-8 text-white shadow-[var(--shadow-bento)] md:p-16">
          {/* Anillo concéntrico decorativo (eco de la "O" del logo) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 size-[420px] rounded-full border-[40px] border-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-12 -bottom-8 size-[180px] rounded-full border-[16px] border-brand/40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
          />

          <div className="relative flex flex-col items-start gap-6 md:max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-wider text-white/70">
              CDP para hoteles
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.05]">
              El hotelero que domina el dato,{" "}
              <span className="text-brand">domina la venta directa</span>.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Reserva una demo con nuestro equipo y descubre cómo unificar todo
              tu dato hotelero en una sola plataforma — y romper la dependencia
              de las OTAs.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-brand-mint text-brand-mint-foreground hover:bg-brand-mint/85 px-6 gap-1.5"
                render={<a href="#demo-form" />}
              >
                Solicita una DEMO gratis
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10"
                render={<a href="#contacto" />}
              >
                Hablar con ventas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
