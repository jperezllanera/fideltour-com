import { HeroShapes } from "@/components/ui/hero-shapes";

export function ClientesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      <HeroShapes />
      {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-1/2 -translate-y-1/2 size-[144vw] max-w-[1440px] max-h-[1440px] rounded-full border-[130px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-20 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-24">
        <div className="md:col-span-8 flex flex-col gap-6">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Clientes · CDP para hoteles
          </span>

          <h1 className="text-white">
            Clientes que confían en{" "}
            <span className="text-brand">Fideltour</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Desde hoteles independientes hasta grandes grupos internacionales,
            Fideltour ayuda a los hoteles a unificar sus datos, personalizar la
            comunicación y construir relaciones rentables con sus huéspedes.
          </p>
        </div>
      </div>
    </section>
  );
}
