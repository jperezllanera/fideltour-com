import Image from "next/image";

import { empresaCountries } from "@/lib/content/empresa";

/* Sellos institucionales — réplica de los del footer (versiones 2026).
   Cada PNG es un compuesto oficial Gobierno + Ministerio + organismo.
   Si en el futuro se reorganiza el footer, mantener este bloque sincronizado. */
const sealsRow1 = [
  {
    src: "/brand/sello-ue-nextgeneration.webp",
    alt: "Cofinanciado por la Unión Europea · Ministerio de Hacienda · Fondos Europeos",
  },
  {
    src: "/brand/sello-enisa.webp",
    alt: "Gobierno de España · Ministerio de Industria, Comercio y Turismo · ENISA",
  },
  {
    src: "/brand/sello-pyme-innovadora.webp",
    alt: "Gobierno de España · Ministerio de Ciencia e Innovación · PYME Innovadora",
  },
  {
    src: "/brand/sello-cdti.webp",
    alt: "Gobierno de España · Ministerio de Ciencia e Innovación · CDTI",
  },
];

export function EmpresaPresenciaSection() {
  return (
    <section id="presencia" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="text-eyebrow text-brand-navy-deep">
              Operamos en
            </div>
            <h2>
              Cuatro países, una misma forma de entender el hotel
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Trabajamos con hoteles independientes y grupos internacionales,
              respetando la operativa y la cultura comercial de cada mercado.
            </p>

            <ul className="grid grid-cols-2 gap-3 pt-2">
              {empresaCountries.map((country) => (
                <li
                  key={country}
                  className="flex items-center justify-between rounded-xl border border-border/70 bg-card px-4 py-3 text-sm font-semibold text-brand-navy shadow-[var(--shadow-soft)]"
                >
                  <span>{country}</span>
                  <span aria-hidden className="size-1.5 rounded-full bg-brand-mint" />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7 flex flex-col gap-5">
            <div className="text-eyebrow text-brand-navy-deep">
              Sellos institucionales
            </div>
            <h2>
              Innovación reconocida, financiación auditada
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Fideltour está respaldada por instituciones públicas y europeas
              que avalan tanto la madurez tecnológica como la solvencia del
              proyecto.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 md:grid-cols-4">
              {sealsRow1.map((seal) => (
                <div
                  key={seal.src}
                  className="flex items-center justify-center rounded-xl bg-white px-3 py-3 ring-1 ring-border/60 shadow-[var(--shadow-soft)]"
                >
                  <Image
                    src={seal.src}
                    alt={seal.alt}
                    width={300}
                    height={70}
                    className="h-10 w-auto md:h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
