import Image from "next/image";

/**
 * Mural de 13 logos de cliente — espejo del wall que vive en
 * https://www.fideltour.com/clientes/. Mantenemos el orden exacto del
 * live (source order) para que el equipo de marketing pueda contrastar
 * 1:1 entre WP y este sitio sin tener que reordenar mentalmente.
 *
 * Cada entrada lleva su asset en `public/brand/cliente-{slug}.webp` con
 * la familia "cliente" del audit de imágenes (budget ≤30 KB, q=90 con
 * alpha). El alt sigue el patrón "<Marca> — cliente Fideltour" para
 * SEO sin caer en alt-spam.
 */
const clients = [
  { slug: "el-palace", name: "El Palace Barcelona" },
  { slug: "hotel-acapulco", name: "Hotel Acapulco Lloret de Mar" },
  { slug: "bancal", name: "Bancal Hotel & Spa" },
  { slug: "valparaiso", name: "GPRO Valparaíso Palace & Spa" },
  { slug: "sirenis", name: "Sirenis Hotels & Resorts" },
  { slug: "hm-hotels", name: "HM Hotels" },
  { slug: "soho-boutique", name: "Soho Boutique Hotels" },
  { slug: "universal-beach", name: "Universal Beach Hotels" },
  { slug: "zafiro", name: "Zafiro Hotels" },
  { slug: "oasis", name: "Oasis Hotels & Resorts" },
  { slug: "diestra", name: "Diestra Hoteles" },
  { slug: "hipotels", name: "Hipotels Hotels & Resorts" },
  { slug: "eurostars", name: "Eurostars Hotel Company" },
];

export function ClientesLogosWallSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-eyebrow text-brand-navy-deep">
            Confían en nosotros
          </div>
          <h2 className="mt-3">
            Hoteles que ya operan con{" "}
            <span className="text-brand-navy-deep">Fideltour</span>.
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 md:gap-x-10 md:gap-y-14 lg:grid-cols-5">
          {clients.map((c) => (
            <li key={c.slug} className="flex h-20 w-full items-center justify-center md:h-24">
              <Image
                src={`/brand/cliente-${c.slug}.webp`}
                alt={`${c.name} — cliente Fideltour`}
                width={240}
                height={120}
                sizes="(min-width: 1024px) 160px, (min-width: 640px) 180px, 40vw"
                className="max-h-16 w-auto object-contain md:max-h-20"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
