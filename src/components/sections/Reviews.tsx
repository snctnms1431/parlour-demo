import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Stars } from "@/components/Stars";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { CountUp } from "@/components/CountUp";

export function Reviews() {
  return (
    <section id="reviews" className="bg-blush/30 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Our Clients"
          subtitle="Real words from the people who trusted us with their special moments."
          center
        />

        <Reveal className="mx-auto mt-10 max-w-md">
          <div className="rounded-3xl border border-rose/5 bg-white p-8 text-center shadow-sm">
            <p className="font-serif text-6xl text-gold">{site.rating}</p>
            <Stars rating={site.rating} className="mt-2 justify-center" />
            <p className="mt-2 text-xs uppercase tracking-widest text-onyx/55">
              Based on <CountUp to={site.reviewCount} />+ reviews
            </p>
          </div>
        </Reveal>

        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {reviews.map((r, i) => (
            <Reveal
              key={r.id}
              delay={(i % 3) * 0.05}
              className="min-w-[280px] max-w-[280px] snap-start md:min-w-0 md:max-w-none"
            >
              <figure className="flex h-full flex-col rounded-3xl border border-rose/5 bg-white p-6 shadow-sm">
                <Stars rating={r.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-onyx/70">
                  "{r.comment}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-rose/10 pt-4">
                  <span className="grid size-10 place-items-center rounded-full bg-blush font-serif text-lg text-rose">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-[11px] text-onyx/50">
                      {r.service} • {r.date}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}