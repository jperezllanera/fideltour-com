import Image from "next/image";

/**
 * Trust strip de premios sectoriales, pensado para vivir justo debajo del
 * hero. Cada logo vive en una card uniforme; al hacer hover se muestra un
 * tooltip con el nombre y el reconocimiento concreto que valida.
 *
 * Assets esperados en public/brand/awards/ — todos en WebP, fondo
 * transparente o claro, recortados ajustados. Pesos < 30 KB.
 */
const awards = [
  {
    src: "/brand/awards/award-tis-tourism-innovation.webp",
    alt: "Tourism Innovation Summit",
    title: "Tourism Innovation Summit",
    description:
      "Mayor encuentro internacional de innovación turística — celebrado en Sevilla.",
    width: 160,
  },
  {
    src: "/brand/awards/award-smart-travel-2024.webp",
    alt: "Smart Travel News Awards 2024",
    title: "Smart Travel News Awards 2024",
    description:
      "Premios del medio de referencia en tecnología turística en español.",
    width: 180,
  },
  {
    src: "/brand/awards/award-innobal-pyme-innovadora.webp",
    alt: "Innobal — Pyme innovadora de las Illes Balears",
    title: "Pyme innovadora · Illes Balears",
    description:
      "Acreditación oficial otorgada por Innobal, agencia balear de innovación.",
    width: 110,
  },
  {
    src: "/brand/awards/award-sergestur-40-empresas-tecnologicas.webp",
    alt: "40 empresas tecnológicas by Sergestur",
    title: "40 Empresas Tecnológicas · Sergestur",
    description:
      "Listado anual de las empresas tecnológicas más relevantes del sector turístico.",
    width: 140,
  },
  {
    src: "/brand/awards/award-tecnologia-siglo-xxi-2024.webp",
    alt: "Tecnología Siglo XXI 2024",
    title: "Premios Tecnología Siglo XXI 2024",
    description:
      "Reconocimiento a la innovación tecnológica empresarial — edición 2024.",
    width: 110,
  },
  {
    src: "/brand/awards/award-european-technology-awards-2025.webp",
    alt: "European Technology Awards 2025 — Fideltour CRM",
    title: "European Technology Awards 2025",
    description:
      "Premios europeos a la excelencia tecnológica — categoría CRM, edición 2025.",
    width: 110,
  },
];

export function AwardsStrip() {
  return (
    <section
      aria-label="Galardones recibidos"
      className="border-b border-border/60 bg-background py-10 md:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-eyebrow text-center text-muted-foreground">
          Galardonados por la industria
        </h2>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {awards.map((award) => (
            <li
              key={award.src}
              className="group relative flex h-20 items-center justify-center rounded-lg border border-border/60 bg-card px-4 transition-shadow duration-200 hover:shadow-soft md:h-24"
            >
              <Image
                src={award.src}
                alt={award.alt}
                width={award.width}
                height={72}
                className="max-h-12 w-auto object-contain md:max-h-14"
              />

              <div
                role="tooltip"
                className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-3 w-64 -translate-x-1/2 rounded-lg bg-brand-navy px-3 py-2.5 text-left text-xs text-white opacity-0 shadow-elevated transition-all duration-200 group-hover:visible group-hover:opacity-100"
              >
                <div className="font-semibold">{award.title}</div>
                <div className="mt-1 text-white/80">{award.description}</div>
                <div
                  aria-hidden
                  className="absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand-navy"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
