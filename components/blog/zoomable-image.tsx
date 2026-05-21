"use client";

import mediumZoom, { type Zoom } from "medium-zoom";
import { useEffect, useRef } from "react";

/**
 * Cliente: activa medium-zoom sobre cualquier `<img>` que esté dentro del
 * elemento marcado. Se monta una vez por post (en el contenedor del cuerpo)
 * y captura clicks sobre las imágenes ya renderizadas por MDXRemote en el
 * servidor. Coste: ~3KB gz de medium-zoom + un poco de JS para inicializar.
 */
export function ZoomableImages() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current?.previousElementSibling as HTMLElement | null;
    if (!el) return;

    const imgs = el.querySelectorAll<HTMLImageElement>(
      "img:not([data-no-zoom])",
    );
    if (imgs.length === 0) return;

    const zoom: Zoom = mediumZoom(imgs, {
      margin: 32,
      background: "rgba(15, 53, 96, 0.92)",
      scrollOffset: 64,
    });

    return () => {
      zoom.detach();
    };
  }, []);

  return <div ref={ref} aria-hidden className="hidden" />;
}
