import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getCasoBySlug } from "@/lib/content/casos";

type Props = {
  /** Slug del caso (debe existir en `lib/content/casos.ts`). */
  casoSlug: string;
};

/**
 * Prueba social en landings de módulo: "Así lo usa un hotel real" con la
 * métrica destacada del caso + enlace al caso completo. Si el slug no
 * existe, no renderiza nada (defensivo frente a typos).
 *
 * No usa foto del hotel — los casos actuales son anonimizados; la propia
 * estética del bloque (aro de marca, gradient) da contexto sin pretender
 * que hay una foto real.
 */
export function ModuleCaseProof({ casoSlug }: Props) {
  const caso = getCasoBySlug(casoSlug);
  if (!caso) return null;

  const headline = caso.metrics[0];
  const SegmentIcon = caso.segmentIcon;

  return (
    <section
      aria-labelledby="caso-proof-titulo"
      className="relative overflow-hidden border-t border-border/60 bg-brand-navy-deep text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 size-[420px] rounded-full border-[72px] border-brand/20"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-12 md:gap-8 md:px-6 md:py-24">
        <div className="md:col-span-7 flex flex-col gap-5">
          <div className="text-eyebrow text-brand">Así lo usa un hotel real</div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15">
              <SegmentIcon className="size-4" />
            </span>
            <span>{caso.hotelTagline}</span>
          </div>

          <h2 id="caso-proof-titulo" className="text-white">
            {caso.title}
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {caso.excerpt}
          </p>

          <Link
            href={`/casos-de-exito/${caso.slug}/`}
            className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand hover:text-white"
          >
            Leer el caso completo
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/15 backdrop-blur">
            <div className="text-eyebrow text-white/60">{headline.label}</div>
            <div className="mt-3 h-mega text-brand">{headline.value}</div>
            {headline.description && (
              <p className="mt-3 text-sm text-white/80">
                {headline.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
