import Image from "next/image";

const clients = [
  { src: "/brand/cliente-ohtels.png", alt: "Ohtels", w: 200, h: 60 },
  { src: "/brand/cliente-grupo-1.png", alt: "Grupo hotelero cliente 1", w: 200, h: 60 },
  { src: "/brand/cliente-grupo-2.png", alt: "Grupo hotelero cliente 2", w: 200, h: 60 },
  { src: "/brand/cliente-grupo-3.png", alt: "Grupo hotelero cliente 3", w: 200, h: 60 },
  { src: "/brand/cliente-grupo-4.png", alt: "Grupo hotelero cliente 4", w: 200, h: 60 },
  { src: "/brand/cliente-grupo-5.png", alt: "Grupo hotelero cliente 5", w: 200, h: 60 },
  { src: "/brand/cliente-grupo-6.png", alt: "Grupo hotelero cliente 6", w: 200, h: 60 },
];

export function LogosCarouselSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Grupos hoteleros que confían en Fideltour
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-7">
          {clients.map((c) => (
            <Image
              key={c.src}
              src={c.src}
              alt={c.alt}
              width={c.w}
              height={c.h}
              className="h-10 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
