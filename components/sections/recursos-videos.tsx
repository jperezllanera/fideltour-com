import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { recursosVideos } from "@/lib/content/recursos";

export function RecursosVideosSection() {
  return (
    <section id="videos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-eyebrow text-brand-navy-deep">
              Vídeos · FidelTalks
            </div>
            <h2 className="mt-3">
              Vídeos para entender la fidelización y las tendencias del sector
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Contenidos breves para entender conceptos clave a partir de
              ejemplos reales de hoteles que ya están moviendo el dato.
            </p>
          </div>

          <Button
            size="lg"
            className="self-start rounded-full bg-brand-navy text-white hover:bg-brand-navy-deep px-5 gap-1.5 md:self-end"
            render={
              <Link href="/recursos/nuestros-videos-crm-hotelero/" />
            }
          >
            Ver todos los vídeos
            <ArrowUpRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recursosVideos.map(
            ({ slug, category, title, description, duration, href }, i) => (
              <article
                key={slug}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <Link
                  href={href}
                  className="relative isolate flex h-44 items-center justify-center overflow-hidden bg-hero-gradient text-white transition-opacity hover:opacity-95"
                  aria-label={`Ver ${title}`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -bottom-10 size-[200px] rounded-full border-[36px] border-brand/25"
                  />
                  <span className="relative inline-flex size-16 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-transform group-hover:scale-105">
                    <PlayCircle className="size-8" aria-hidden />
                  </span>
                  <span className="text-eyebrow absolute left-5 top-5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white/85 backdrop-blur">
                    {category}
                  </span>
                  <span className="text-2xs absolute right-5 bottom-5 rounded-full bg-brand-navy-deep/60 px-2.5 py-1 text-white backdrop-blur">
                    {duration}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3>
                    <Link
                      href={href}
                      className="transition-colors hover:text-brand"
                    >
                      {title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
