import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { videoSections, type VideoItem, type VideoSection } from "@/lib/content/videos";

export function VideosHubSections() {
  return (
    <>
      {videoSections.map((section, idx) => (
        <VideosHubBlock key={section.id} section={section} indexInPage={idx} />
      ))}
    </>
  );
}

function VideosHubBlock({
  section,
  indexInPage,
}: {
  section: VideoSection;
  indexInPage: number;
}) {
  const Icon = section.icon;
  const isAlt = indexInPage % 2 === 1;

  return (
    <section
      id={section.id}
      className={cn(
        "relative",
        isAlt ? "bg-muted/40" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <header className="flex flex-col gap-4 md:max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white">
              <Icon className="size-5" aria-hidden />
            </span>
            <span className="text-eyebrow text-brand-navy-deep">
              {section.eyebrow}
            </span>
          </div>
          <h2>{section.title}</h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {section.description}
          </p>
        </header>

        {section.layout === "feature" ? (
          <FeatureVideo video={section.videos[0]} />
        ) : (
          <div
            className={cn(
              "mt-12 grid gap-5",
              section.layout === "grid-4" &&
                "md:grid-cols-2 lg:grid-cols-4",
              section.layout === "grid-3" &&
                "md:grid-cols-2 lg:grid-cols-3",
              section.layout === "grid-2" && "md:grid-cols-2",
            )}
          >
            {section.videos.map((video, i) => (
              <VideoCard key={video.slug} video={video} cellIndex={i + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeatureVideo({ video }: { video: VideoItem }) {
  return (
    <article className="mt-12 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-soft)]">
      <div className="grid gap-0 md:grid-cols-12">
        <Link
          href={video.href}
          className="relative isolate flex h-64 items-center justify-center overflow-hidden bg-hero-gradient text-white md:col-span-7 md:h-auto"
          aria-label={`Ver ${video.title}`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-16 size-[360px] rounded-full border-[64px] border-brand/25"
          />
          <span className="relative inline-flex size-20 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-transform hover:scale-105">
            <PlayCircle className="size-10" aria-hidden />
          </span>
          {video.duration && (
            <span className="text-2xs absolute right-6 bottom-6 rounded-full bg-brand-navy-deep/60 px-3 py-1 text-white backdrop-blur">
              {video.duration}
            </span>
          )}
        </Link>

        <div className="flex flex-col gap-4 p-6 md:col-span-5 md:p-10">
          <h3>
            <Link
              href={video.href}
              className="transition-colors hover:text-brand"
            >
              {video.title}
            </Link>
          </h3>
          {video.description && (
            <p className="text-base leading-relaxed text-muted-foreground">
              {video.description}
            </p>
          )}
          <Link
            href={video.href}
            className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand"
            aria-label={`Ver ${video.title}`}
          >
            Ver vídeo
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}

function VideoCard({
  video,
  cellIndex,
}: {
  video: VideoItem;
  cellIndex: number;
}) {
  return (
    <article
      style={{ ["--i" as never]: cellIndex }}
      className="bento-cell group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <Link
        href={video.href}
        className="relative isolate flex h-40 items-center justify-center overflow-hidden bg-hero-gradient text-white transition-opacity hover:opacity-95"
        aria-label={`Ver ${video.title}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -bottom-10 size-[200px] rounded-full border-[36px] border-brand/25"
        />
        <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-transform group-hover:scale-105">
          <PlayCircle className="size-6" aria-hidden />
        </span>
        {video.duration && (
          <span className="text-2xs absolute right-5 bottom-5 rounded-full bg-brand-navy-deep/60 px-2.5 py-1 text-white backdrop-blur">
            {video.duration}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg">
          <Link href={video.href} className="transition-colors hover:text-brand">
            {video.title}
          </Link>
        </h3>
        {video.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {video.description}
          </p>
        )}
      </div>
    </article>
  );
}
