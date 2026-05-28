import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroShapes } from "@/components/ui/hero-shapes";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      <HeroShapes />
      {/* Aro de marca — 25% ancho, derecha, decorativo encima del mockup */}
      <div aria-hidden className="hero-decor-ring" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-28">
        <div className="md:col-span-6 flex flex-col gap-7">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            CDP para hoteles
          </span>

          <h1 className="h-mega text-white">
            El hotelero que domina el dato,{" "}
            <span className="text-brand">domina la venta directa</span>.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            El CDP que unifica datos, reservas, estancias y comunicaciones
            multicanal — y devuelve al hotelero el control sobre su venta
            directa.
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

        <div className="md:col-span-6 flex items-center relative z-10">
          <Image
            src="/brand/hero-mockup-dispositivos.webp"
            alt="Mockup de Fideltour en escritorio, tablet y móvil"
            width={1200}
            height={900}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
            className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
