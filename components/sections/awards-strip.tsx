import Image from "next/image";

/**
 * Trust strip de premios sectoriales, pensado para vivir justo debajo del
 * hero. Formato editorial: el nombre del galardón es el protagonista,
 * el logo vive a su lado como marca de validación, sin cards ni bordes.
 *
 * Assets esperados en public/brand/awards/ — todos en WebP, fondo
 * transparente o claro, recortados ajustados. Pesos < 30 KB.
 */
const awards = [
  {
    src: "/brand/awards/award-european-technology-awards-2025.webp",
    alt: "European Technology Awards 2025 — Fideltour CRM",
    name: "European Technology Awards",
    year: "2025",
  },
  {
    src: "/brand/awards/award-smart-travel-2024.webp",
    alt: "Smart Travel News Awards 2024",
    name: "Smart Travel News",
    year: "2024",
  },
  {
    src: "/brand/awards/award-innobal-pyme-innovadora.webp",
    alt: "Innobal — Pyme innovadora de las Illes Balears",
    name: "Pyme Innovadora",
    year: "Innobal",
  },
  {
    src: "/brand/awards/award-sergestur-40-empresas-tecnologicas.webp",
    alt: "40 empresas tecnológicas by Sergestur",
    name: "40 Empresas Tecnológicas",
    year: "Sergestur",
  },
  {
    src: "/brand/awards/award-tecnologia-siglo-xxi-2024.webp",
    alt: "Tecnología Siglo XXI 2024",
    name: "Tecnología Siglo XXI",
    year: "2024",
  },
  {
    src: "/brand/awards/award-tis-tourism-innovation.webp",
    alt: "Tourism Innovation Summit",
    name: "Tourism Innovation Summit",
    year: "",
  },
];

export function AwardsStrip() {
  return (
    <section
      aria-label="Galardones recibidos"
      className="border-b border-border/60 bg-background py-14 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-eyebrow text-center text-muted-foreground">
          Galardonados por la industria
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-14 md:gap-y-6">
          {awards.map((award) => (
            <li
              key={award.src}
              className="flex items-center gap-3"
            >
              <Image
                src={award.src}
                alt={award.alt}
                width={120}
                height={48}
                className="h-8 w-auto object-contain opacity-80 md:h-10"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-brand-navy md:text-base">
                  {award.name}
                </span>
                {award.year && (
                  <span className="text-eyebrow-sm text-muted-foreground">
                    {award.year}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
