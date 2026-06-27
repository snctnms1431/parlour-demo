import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Lightbox } from "@/components/Lightbox";
import { gallery, categories, type GalleryItem } from "@/data/gallery";

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gallery"
          title="The Portfolio"
          subtitle="A glimpse into looks created for our beautiful clients."
        />

        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                filter === c
                  ? "border-rose bg-rose text-white"
                  : "border-rose/20 text-onyx/60 hover:bg-rose/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {items.map((g, i) => (
            <Reveal key={g.id} delay={(i % 4) * 0.05}>
              <button
                onClick={() => setActive(g)}
                className="group block w-full overflow-hidden rounded-2xl shadow-sm outline outline-1 -outline-offset-1 outline-black/5"
              >
                <div className="relative">
                  <img
                    src={g.image}
                    alt={g.alt}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-rose backdrop-blur">
                    {g.category}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        open={!!active}
        onClose={() => setActive(null)}
        src={active?.image}
        alt={active?.alt}
        caption={active?.category}
      />
    </section>
  );
}