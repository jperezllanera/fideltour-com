import { casosBenefits } from "@/lib/content/casos";

export function CasosBenefitsSection() {
  return (
    <section id="beneficios" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 md:px-6 md:pt-24 md:pb-16">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Tres palancas · una misma plataforma
          </div>
          <h2 className="mt-3">
            Lo que cambia cuando el hotel domina su dato
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {casosBenefits.map(({ title, description, icon: Icon }, i) => (
            <article
              key={title}
              style={{ ["--i" as never]: i + 1 }}
              className="bento-cell group relative flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3>{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
