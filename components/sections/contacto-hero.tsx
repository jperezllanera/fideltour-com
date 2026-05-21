export function ContactoHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] top-1/2 -translate-y-1/2 size-[120vw] max-w-[1100px] max-h-[1100px] rounded-full border-[104px] border-brand/[0.22]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 md:px-6 md:pt-24 md:pb-24">
        <div className="md:max-w-3xl md:ml-auto md:text-right flex flex-col gap-6 md:items-end">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-mint" aria-hidden />
            Contacto · CDP para hoteles
          </span>

          <h1 className="text-white">
            ¿<span className="text-brand-mint">Hablamos</span>?
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Si quieres entender mejor cómo trabajamos, ver una demo o resolver
            cualquier duda, deja tus datos y te contactaremos muy pronto.
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Estamos aquí para ayudarte a impulsar tu estrategia, mejorar tu
            rentabilidad y dar un salto real en fidelización.
          </p>
        </div>
      </div>
    </section>
  );
}
