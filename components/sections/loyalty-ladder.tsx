import Image from "next/image";

export function LoyaltyLadderSection() {
  return (
    <section className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-wider text-brand-navy-deep">
            Escalera de fidelización
          </div>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            12 pasos para escalar del CRM al CDP
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada paso acerca al huésped a tu hotel y reduce tu dependencia de
            las OTAs. Una hoja de ruta clara para evolucionar de la captación
            anónima a la venta directa recurrente.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-background shadow-[var(--shadow-bento)]">
          {/* Desktop / tablet */}
          <Image
            src="/brand/escalera-fidelizacion-desktop.png"
            alt="Escalera de fidelización Fideltour: 12 pasos del tráfico anónimo a la venta directa recurrente"
            width={2400}
            height={1200}
            className="hidden md:block h-auto w-full"
          />
          {/* Mobile */}
          <Image
            src="/brand/escalera-fidelizacion-mobile.png"
            alt="Escalera de fidelización Fideltour: 12 pasos"
            width={800}
            height={1600}
            className="block md:hidden h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
