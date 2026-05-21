"use client";

import { useEffect, useState } from "react";

const MARKETPLACE_ORIGIN = "https://app.hoteldatahub.io";
const MARKETPLACE_URL = `${MARKETPLACE_ORIGIN}/marketplace/`;
const INITIAL_HEIGHT = 1800;

/*
 * Embed del buscador real de integraciones (mismo iframe que usa la web
 * actual: app.hoteldatahub.io/marketplace/). El iframe envía postMessage
 * `{ tipo: "ajustarAltura", altura }` cada vez que su contenido se
 * redimensiona, y aquí ajustamos la altura del iframe para evitar scroll
 * interno. Replicamos exactamente el handshake del WordPress original.
 */
export function MarketplaceFinderSection() {
  const [height, setHeight] = useState<number>(INITIAL_HEIGHT);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== MARKETPLACE_ORIGIN) return;
      const data = event.data as { tipo?: string; altura?: number } | undefined;
      if (data?.tipo === "ajustarAltura" && typeof data.altura === "number") {
        setHeight(data.altura);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="buscador" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Buscador · Integraciones
          </div>
          <h2 className="mt-3">
            Filtra por categoría o busca tu conector.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Todas las conexiones disponibles con Fideltour: PMS, motores de
            reserva, WiFi, CRM, B2B, encuestas, loyalty, comercializadoras y
            más. Escribe el nombre o salta a una categoría.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-bento)] md:mt-12">
          <iframe
            src={MARKETPLACE_URL}
            title="Buscador de integraciones de Fideltour"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
            style={{ height: `${height}px` }}
          />
        </div>
      </div>
    </section>
  );
}
