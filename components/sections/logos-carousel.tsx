import Image from "next/image";
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
        <h2 className="text-center">
          Grupos hoteleros que confían en Fideltour
        </h2>

        <div className="mt-16 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {clients.map((c) => (
            <Image
              key={c.src}
              src={c.src}
              alt={c.alt}
              width={320}
              height={120}
              className="h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            size="lg"
            className="rounded-full bg-brand text-white hover:bg-brand/90 px-7"
            render={<a href="/clientes" />}
          >
            Descubre nuestros clientes
          </Button>
        </div>
      </div>
    </section>
  );
}
