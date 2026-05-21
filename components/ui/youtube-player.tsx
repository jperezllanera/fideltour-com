"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type YouTubePlayerProps = {
  youtubeId: string;
  title: string;
  duration?: string;
  className?: string;
  thumbClassName?: string;
  playSize?: "sm" | "lg";
};

export function YouTubePlayer({
  youtubeId,
  title,
  duration,
  className,
  thumbClassName,
  playSize = "sm",
}: YouTubePlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const thumbSrc = thumbError
    ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden bg-brand-navy-deep", className)}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproducir ${title}`}
      className={cn(
        "group/yt relative isolate aspect-video w-full overflow-hidden bg-brand-navy-deep text-white",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbSrc}
        alt=""
        loading="lazy"
        onError={() => setThumbError(true)}
        className={cn(
          "absolute inset-0 size-full object-cover opacity-90 transition-opacity duration-300 group-hover/yt:opacity-100",
          thumbClassName,
        )}
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/70 via-brand-navy-deep/10 to-transparent"
      />
      <span
        aria-hidden
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition-transform duration-300 group-hover/yt:scale-110",
          playSize === "lg" ? "size-20" : "size-14",
        )}
      >
        <PlayCircle className={cn(playSize === "lg" ? "size-10" : "size-6")} aria-hidden />
      </span>
      {duration && (
        <span className="text-2xs absolute right-4 bottom-4 rounded-full bg-brand-navy-deep/70 px-2.5 py-1 text-white backdrop-blur">
          {duration}
        </span>
      )}
    </button>
  );
}
