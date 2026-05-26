export function CdpAnonymousTrafficSection() {
  return (
    <section className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Por qué el CRM no basta
          </div>
          <h2 className="mt-3">
            El <span className="text-brand-navy-deep">80%</span> de tu web es
            anónimo. Tu CRM no lo ve.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            El CRM recuerda a quien ya conoces. El CDP entiende al que aún no
            conoces. Ahí le gana.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5 md:gap-8">
          <article className="md:col-span-2 flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="text-eyebrow text-muted-foreground">Tu CRM</div>
            <h3 className="text-brand-navy">Lo ve.</h3>
            <div className="h-mega text-muted-foreground">20%</div>
            <p className="mt-auto text-sm leading-relaxed text-muted-foreground md:text-base">
              Contactos identificados. Quien ya tienes en la base de datos —
              email, móvil, reservas previas atribuidas a un perfil.
            </p>
          </article>

          <article className="md:col-span-3 flex flex-col gap-4 rounded-2xl border border-brand/40 bg-brand-navy-deep p-6 text-white shadow-[var(--shadow-bento)] md:p-8">
            <div className="text-eyebrow text-brand">Tu CRM · ciego</div>
            <h3 className="text-white">No lo ve.</h3>
            <div className="h-mega text-brand">80%</div>
            <p className="mt-auto text-sm leading-relaxed text-white/85 md:text-base">
              El dato de intención — qué miró, qué fechas buscó, dónde dudó.
              El más valioso para vender. Un CRM no puede hacer nada con
              quien no identifica. Un CDP sí: lo identifica, lo unifica y lo
              convierte en un perfil sobre el que actuar.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
