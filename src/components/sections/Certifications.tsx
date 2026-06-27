import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Lightbox } from "@/components/Lightbox";
import { certificates, type Certificate } from "@/data/certificates";
import { Expand } from "lucide-react";

export function Certifications() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="bg-blush/30 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Trained and certified by leading beauty academies."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={0.05 * i}>
              <button
                onClick={() => setActive(c)}
                className="group block w-full overflow-hidden rounded-2xl border border-rose/5 bg-white text-left shadow-sm transition-transform active:scale-[0.98]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={1000}
                    height={1000}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/80 text-rose backdrop-blur">
                    <Expand className="size-4" />
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg">{c.title}</h3>
                  <p className="text-xs text-onyx/55">
                    {c.issuer} • {c.year}
                  </p>
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
        alt={active?.title}
        caption={active ? `${active.title} — ${active.issuer}` : undefined}
      />
    </section>
  );
}