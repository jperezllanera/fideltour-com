import { empresaMetrics } from "@/lib/content/empresa";

export function EmpresaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[18%] top-1/2 -translate-y-1/2 size-[138vw] max-w-[1380px] max-h-[1380px] rounded-full border-[120px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-20 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-24">
        <div className="md:col-span-7 flex flex-col gap-6">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Sobre Fideltour
          </span>

          <h1 className="text-white">
            Nacimos para que el hotelero{" "}
            <span className="text-brand">domine su dato</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Fideltour es el CDP para hoteles que permite conocer y fidelizar
            al huésped de forma eficaz y personalizada — pasando del CRM
            hotelero a una plataforma de dato propio, completa y accionable.
          </p>
        </div>

        <dl className="md:col-span-5 grid grid-cols-3 gap-3 self-end rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur md:gap-4 md:p-6">
          {empresaMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <dt className="text-eyebrow text-white/70">{metric.label}</dt>
              <dd className="text-3xl font-bold text-brand md:text-4xl">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
