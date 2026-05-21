export function VideosHubHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      {/* Aro de marca centrado — réplica del patrón hero del resto del sitio */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[110vw] max-w-[1000px] max-h-[1000px] rounded-full border-[90px] border-brand/[0.18] md:border-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 md:px-6 md:pt-24 md:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-mint" aria-hidden />
            Vídeos · CDP para hoteles
          </span>

          <h1 className="text-white">
            Descubre cómo trabajar con{" "}
            <span className="text-brand-mint">nuestro CDP hotelero</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Vídeos prácticos para entender el ecosistema Fideltour, profundizar
            en cada módulo y mejorar la relación con el huésped — sin manuales
            de 200 páginas.
          </p>
        </div>
      </div>
    </section>
  );
}
