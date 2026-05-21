import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white isolate">
      {/* Anillos concéntricos cian que evocan la "O" del logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-1/2 -translate-y-1/2 size-[120vw] max-w-[1400px] max-h-[1400px]"
      >
        <div className="absolute inset-0 rounded-full border-[60px] border-white/[0.04]" />
        <div className="absolute inset-[10%] rounded-full border-[40px] border-white/[0.06]" />
        <div className="absolute inset-[22%] rounded-full border-[28px] border-brand/[0.18]" />
        <div className="absolute inset-[35%] rounded-full border-[18px] border-brand/[0.35]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-28">
        <div className="md:col-span-6 flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-mint" aria-hidden />
            CDP para hoteles
          </span>

          <h1 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05]">
            Plataforma de marketing y ventas para hoteles
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Durante años, el CRM fue suficiente. Hoy, para fidelizar y aumentar
            la venta directa, es imprescindible un{" "}
            <strong className="font-semibold text-white">CDP</strong> que
            unifique datos, reservas, estancias y comunicaciones multicanal.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              size="lg"
              className="rounded-full bg-brand-mint text-brand-mint-foreground hover:bg-brand-mint/85 px-6 gap-1.5"
              render={<a href="#demo" />}
            >
              Solicita una DEMO gratis
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="md:col-span-6 flex items-center">
          <Image
            src="/brand/hero-mockup-dispositivos.png"
            alt="Mockup de Fideltour en escritorio, tablet y móvil"
            width={1200}
            height={900}
            priority
            className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
