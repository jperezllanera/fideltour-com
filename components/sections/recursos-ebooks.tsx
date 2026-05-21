import { recursosEbooks } from "@/lib/content/recursos";

import { LeadMagnetTrigger } from "./recursos-lead-magnet";

export function RecursosEbooksSection() {
  return (
    <section id="ebooks" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Ebooks · profundizar
          </div>
          <h2 className="mt-3">
            Ebooks para profundizar antes de pasar a la acción
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Guías largas para ir un paso más allá: del diagnóstico al plan de
            fidelización aterrizado en tu cuenta de explotación.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {recursosEbooks.map(
            ({ slug, eyebrow, title, description, pages }, i) => (
              <article
                key={slug}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative isolate flex h-44 items-end overflow-hidden bg-hero-gradient p-5 text-white">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 size-[220px] rounded-full border-[36px] border-brand/25"
                  />
                  <div className="relative flex w-full items-end justify-between gap-3">
                    <span className="text-eyebrow rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white/85 backdrop-blur">
                      {eyebrow}
                    </span>
                    <span className="text-2xs text-white/70">
                      {pages} páginas
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3>{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>

                  {/* Cada CTA dispara el lead magnet (modal de captura).
                      `ebookSlug` viaja en el form para identificar qué
                      pieza pidió el lead cuando senior conecte el endpoint. */}
                  <LeadMagnetTrigger
                    ebookSlug={slug}
                    className="mt-auto self-start"
                  >
                    Acceder al ebook
                  </LeadMagnetTrigger>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
