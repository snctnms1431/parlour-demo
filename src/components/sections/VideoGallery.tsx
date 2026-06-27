import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { videos } from "@/data/videos";

function VideoCard({ youtubeId, title, category }: (typeof videos)[number]) {
  const [play, setPlay] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border border-rose/5 bg-white shadow-sm">
      <div className="relative aspect-video bg-onyx">
        {play ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlay(true)}
            aria-label={`Play ${title}`}
            className="group absolute inset-0"
          >
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 grid place-items-center bg-onyx/30 transition-colors group-hover:bg-onyx/40">
              <span className="grid size-16 place-items-center rounded-full bg-white/90 text-rose shadow-lg transition-transform group-hover:scale-110">
                <Play className="size-6 translate-x-0.5 fill-rose" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <span className="text-[10px] uppercase tracking-widest text-gold">{category}</span>
        <h3 className="mt-1 font-serif text-lg">{title}</h3>
      </div>
    </article>
  );
}

export function VideoGallery() {
  return (
    <section id="videos" className="bg-blush/30 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Watch"
          title="Video Gallery"
          subtitle="Transformations, showcases and words from happy clients."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={0.05 * i}>
              <VideoCard {...v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}