import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import {
  casosDeExito,
  getCasoBySlug,
  type CasoSeccion,
} from "@/lib/content/casos";

type CasoPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return casosDeExito.map((caso) => ({ slug: caso.slug }));
}

export async function generateMetadata({
  params,
}: CasoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCasoBySlug(slug);
  if (!caso) return { title: "Caso de éxito" };
  const path = `/casos-de-exito/${caso.slug}/`;
  return {
    title: `${caso.title} · Casos de éxito`,
    description: caso.excerpt,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${caso.title} · Casos de éxito Fideltour`,
      description: caso.excerpt,
    },
    twitter: {
      title: `${caso.title} · Casos de éxito Fideltour`,
      description: caso.excerpt,
    },
  };
}

export default async function CasoDeExitoPage({ params }: CasoPageProps) {
  const { slug } = await params;
  const caso = getCasoBySlug(slug);
  if (!caso) notFound();

  const Icon = caso.segmentIcon;
  const path = `/casos-de-exito/${caso.slug}/`;

  return (
    <>
      <WebPageJsonLd
        path={path}
        title={`${caso.title} · Casos de éxito Fideltour`}
        description={caso.excerpt}
        type="WebPage"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Casos de éxito", path: "/casos-de-exito/" },
          { name: caso.segment, path },
        ]}
      />

      <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[15%] top-1/2 -translate-y-1/2 size-[110vw] max-w-[1100px] max-h-[1100px] rounded-full border-[140px] border-brand/[0.22]"
        />

        <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-20 md:px-6 md:pt-24 md:pb-24">
          <Link
            href="/casos-de-exito"
            className="text-eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Volver a casos de éxito
          </Link>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15 backdrop-blur">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="text-eyebrow text-white/80">
                {caso.eyebrow} · {caso.segment}
              </span>
            </div>

            <h1 className="text-white">{caso.title}</h1>

            <p className="max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
              {caso.excerpt}
            </p>

            <dl className="mt-4 grid gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur sm:grid-cols-3">
              {caso.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-1">
                  <dt className="text-eyebrow text-white/70">
                    {metric.label}
                  </dt>
                  <dd className="text-3xl font-bold text-brand">
                    {metric.value}
                  </dd>
                  {metric.description && (
                    <p className="text-sm leading-relaxed text-white/75">
                      {metric.description}
                    </p>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28 flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="text-eyebrow text-brand-navy-deep">
                  Sobre el hotel
                </div>
                <p className="text-sm leading-relaxed text-foreground">
                  {caso.hotelTagline}
                </p>
                <div className="rounded-xl bg-muted/60 p-4">
                  <div className="text-eyebrow text-muted-foreground">
                    Segmento
                  </div>
                  <p className="mt-1 text-sm font-semibold text-brand-navy">
                    {caso.segment}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col gap-10">
              <CasoBlock seccion={caso.context} />
              <CasoBlock seccion={caso.challenge} />
              <CasoBlock seccion={caso.solution} />
              <CasoBlock seccion={caso.results} highlight />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="mx-auto max-w-5xl px-4 pb-24 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 text-white shadow-[var(--shadow-bento)] md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -bottom-20 size-[360px] rounded-full border-[72px] border-brand/25"
            />

            <div className="relative flex flex-col items-start gap-5 md:max-w-2xl">
              <div className="text-eyebrow text-white/70">
                ¿Tu hotel se parece?
              </div>
              <h2 className="h-cta text-white">
                Cuéntanos tu caso y{" "}
                <span className="text-brand">lo analizamos contigo</span>
              </h2>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                En 30 minutos vemos si Fideltour encaja con tu PMS, tu equipo y
                tu objetivo del próximo trimestre. Sin presentación comercial.
              </p>

              <Button
                size="lg"
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                render={<Link href="/contacto" />}
              >
                Habla con un experto
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CasoBlock({
  seccion,
  highlight,
}: {
  seccion: CasoSeccion;
  highlight?: boolean;
}) {
  return (
    <article
      className={
        highlight
          ? "rounded-2xl border border-brand/30 bg-brand/[0.04] p-6 md:p-8"
          : ""
      }
    >
      <h2 className="text-2xl text-brand-navy md:text-3xl">{seccion.title}</h2>
      <div className="mt-4 flex flex-col gap-4">
        {seccion.body.map((paragraph, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
