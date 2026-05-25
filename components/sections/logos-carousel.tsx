import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const clients = [
  { src: "/brand/cliente-sirenis.webp", alt: "Sirenis Hotels & Resorts" },
  { src: "/brand/cliente-diestra.webp", alt: "Diestra Hoteles" },
  { src: "/brand/cliente-hipotels.webp", alt: "Hipotels Hotels & Resorts" },
  { src: "/brand/cliente-eurostars.webp", alt: "Eurostars Hotel Company" },
  { src: "/brand/cliente-oasis.webp", alt: "Oasis Hotels & Resorts" },
  { src: "/brand/cliente-thb-hotels.webp", alt: "THB Hotels" },
  { src: "/brand/cliente-ohtels.webp", alt: "Ohtels" },
];

export function LogosCarouselSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-eyebrow text-brand-navy-deep">
            Casos · Clientes
          </div>
          <h2 className="mt-3">
            Ellos ya confían en{" "}
            <span className="text-brand-navy-deep">Fideltour</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-12">
          {clients.map((c) => (
            <Image
              key={c.src}
              src={c.src}
              alt={c.alt}
              width={320}
              height={120}
              sizes="(min-width: 1024px) 160px, (min-width: 640px) 200px, 45vw"
              className="h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            size="lg"
            className="rounded-full bg-brand text-white hover:bg-brand/90 px-7 gap-1.5"
            render={<Link href="/clientes" />}
          >
            Descubre nuestros clientes
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
