import { HeroShapes } from "@/components/ui/hero-shapes";
import { recursosValues } from "@/lib/content/recursos";

export function RecursosHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      <HeroShapes />
      {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[18%] top-1/2 -translate-y-1/2 size-[132vw] max-w-[1320px] max-h-[1320px] rounded-full border-[120px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-24">
        <div className="md:col-span-7 flex flex-col gap-6">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Recursos · CDP para hoteles
          </span>

          <h1 className="text-white">
            Fideltour Academy:{" "}
            <span className="text-brand">
              donde empieza tu estrategia de fidelización
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Guías, vídeos y ebooks sobre marketing hotelero, dato propio y
            automatización con criterio — para entender qué funciona en tu
            hotel, por qué funciona y cómo aplicarlo.
          </p>
        </div>

        <ul className="md:col-span-5 flex flex-col gap-3">
          {recursosValues.map(({ title, description, icon: Icon }, i) => (
            <li
              key={title}
              style={{ ["--i" as never]: i }}
              className="bento-cell flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-semibold text-white">
                  {title}
                </h2>
                <p className="text-sm leading-relaxed text-white/75">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
