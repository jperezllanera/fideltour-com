import { cn } from "@/lib/utils";
import { YouTubePlayer } from "@/components/ui/youtube-player";
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
        <div className="md:col-span-7">
          <YouTubePlayer
            youtubeId={video.youtubeId}
            title={video.title}
            duration={video.duration}
            playSize="lg"
          />
        </div>

        <div className="flex flex-col gap-4 p-6 md:col-span-5 md:p-10">
          <h3>{video.title}</h3>
          {video.description && (
            <p className="text-base leading-relaxed text-muted-foreground">
              {video.description}
            </p>
          )}
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

      <YouTubePlayer
        youtubeId={video.youtubeId}
        title={video.title}
        duration={video.duration}
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg">{video.title}</h3>
        {video.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {video.description}
          </p>
        )}
      </div>
    </article>
  );
}
