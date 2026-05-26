import { MarketplaceCounter } from "./marketplace-counter";

export function MarketplaceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      {/* "O" del logo enlarged — un único anillo ancho centrado */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[110vw] max-w-[900px] max-h-[900px] rounded-full border-[80px] border-white/[0.07] md:border-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 md:px-6 md:pt-24 md:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <span className="text-eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Marketplace · CDP para hoteles
          </span>

          <h1 className="h-mega text-white">
            Marketplace
          </h1>

          {/* Contador animado — réplica del widget Elementor de la web actual */}
          <div className="flex items-baseline gap-2 text-2xl text-white/90 md:text-3xl">
            <span className="text-white/60">Más de</span>
            <span className="text-4xl font-bold text-brand md:text-5xl">
              <MarketplaceCounter to={150} />
            </span>
            <span className="text-white/60">conexiones</span>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            El CRM Fideltour se integra con tu PMS, motor de reservas o portal
            cautivo para recopilar los datos que optimizarán tu base de datos.
            Descubre con qué empresa tecnológica estamos conectados y da el
            siguiente paso.
          </p>

          <p className="text-sm uppercase tracking-wider text-brand">
            ¡Es hora de empezar!
          </p>
        </div>
      </div>
    </section>
  );
}
