import type { ReactNode } from "react";

type LegalHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  lastUpdated?: string;
};

export function LegalHero({ eyebrow, title, intro, lastUpdated }: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      {/* "O" del logo enlarged — un único anillo ancho centrado */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[90vw] max-w-[700px] max-h-[700px] rounded-full border-[60px] border-white/[0.07] md:border-[90px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-16 md:px-6 md:pt-24 md:pb-20">
        <div className="flex flex-col gap-5">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-mint" aria-hidden />
            {eyebrow}
          </span>

          <h1 className="text-white">{title}</h1>

          {intro && (
            <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {intro}
            </p>
          )}

          {lastUpdated && (
            <p className="text-eyebrow text-white/60">
              Última actualización · {lastUpdated}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <article className="relative bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <div className="space-y-10 text-foreground/90">{children}</div>
      </div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2>{title}</h2>
      <div className="text-body-md space-y-4 text-foreground/85">
        {children}
      </div>
    </section>
  );
}

export function LegalSubsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3>{title}</h3>
      <div className="text-body-md space-y-3 text-foreground/85">
        {children}
      </div>
    </div>
  );
}

export function LegalCompanyInfo() {
  return (
    <aside className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="text-eyebrow text-brand-navy-deep">
        Datos del titular
      </div>
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div className="flex flex-col">
          <dt className="font-semibold text-brand-navy">Razón social</dt>
          <dd className="text-foreground/85">FIDELTOUR, S.L.</dd>
        </div>
        <div className="flex flex-col">
          <dt className="font-semibold text-brand-navy">CIF</dt>
          <dd className="text-foreground/85">B16519019</dd>
        </div>
        <div className="flex flex-col sm:col-span-2">
          <dt className="font-semibold text-brand-navy">Domicilio social</dt>
          <dd className="text-foreground/85">
            Gremi des Fusters 33, piso 3, puerta 14, 07009 Palma de Mallorca
            (Illes Balears)
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="font-semibold text-brand-navy">Email</dt>
          <dd>
            <a
              href="mailto:club@fideltour.com"
              className="text-brand-navy underline-offset-2 hover:underline"
            >
              club@fideltour.com
            </a>
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="font-semibold text-brand-navy">Web</dt>
          <dd className="text-foreground/85">www.fideltour.com</dd>
        </div>
        <div className="flex flex-col sm:col-span-2">
          <dt className="font-semibold text-brand-navy">Registro mercantil</dt>
          <dd className="text-foreground/85">
            Tomo 2706, Folio 188, Hoja PM-81370
          </dd>
        </div>
      </dl>
    </aside>
  );
}
