"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import type { ModuleLanding } from "@/lib/content/module-landings/_types";

type Props = {
  video: NonNullable<ModuleLanding["video"]>;
  navLabel: string;
  /** Eyebrow opcional de la sección. */
  eyebrow?: string;
  /** Heading opcional de la sección. */
  heading?: string;
};

/**
 * Sección "Míralo en acción": embebe el vídeo de producto de YouTube dentro
 * de un mockup de tablet (clases `.tablet-*` en globals.css). Patrón facade —
 * inicialmente sólo se pinta el póster del vídeo (next/image, lazy); el
 * iframe de YouTube se monta al hacer click, evitando cargar el reproductor
 * (y sus scripts) en el primer render. El póster intenta `maxresdefault`
 * (16:9) y cae a `hqdefault` si el vídeo no tiene versión HD.
 */
export function ModuleVideo({
  video,
  navLabel,
  eyebrow = "Míralo en acción",
  heading,
}: Props) {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(
    `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`,
  );

  const sectionHeading = heading ?? `${navLabel} en menos de dos minutos.`;

  return (
    <section className="relative bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-eyebrow text-brand-navy-deep">{eyebrow}</div>
          <h2 className="mt-3">{sectionHeading}</h2>
        </div>

        <div className="tablet-mockup mt-12">
          <div className="tablet-screen">
            {playing ? (
              <iframe
                className="tablet-media"
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="tablet-facade tablet-media"
                onClick={() => setPlaying(true)}
                aria-label={`Reproducir vídeo: ${video.title}`}
              >
                <Image
                  src={poster}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 60vw, 90vw"
                  className="tablet-poster"
                  onError={() =>
                    setPoster(
                      `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
                    )
                  }
                />
                <span className="tablet-play" aria-hidden>
                  <Play className="size-7 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
