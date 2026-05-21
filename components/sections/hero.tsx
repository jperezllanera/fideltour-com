import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-1/2 -translate-y-1/2 size-[120vw] max-w-[1400px] max-h-[1400px] rounded-full border-[120px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-28">
        <div className="md:col-span-6 flex flex-col gap-7">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-mint" aria-hidden />
            CDP para hoteles
          </span>

          <h1 className="text-white">
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
              className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              render={<a href="#demo" />}
            >
              Solicita una DEMO gratis
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="md:col-span-6 flex items-center">
          <Image
            src="/brand/hero-mockup-dispositivos.webp"
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
