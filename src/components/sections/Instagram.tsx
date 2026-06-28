import { Instagram as InstagramIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import p12 from "@/assets/portfolio-12.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p11 from "@/assets/portfolio-11.jpg";
import p7 from "@/assets/portfolio-7.jpg";

const grid = [p12, p5, p11, p7];

export function InstagramSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="overflow-hidden rounded-[2rem] bg-onyx p-8 text-white md:p-12">
          <div className="md:flex md:items-center md:gap-10">
            <div className="md:flex-1">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Follow Along</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">On Instagram</h2>
              <p className="mt-3 text-sm text-pearl/60">
                Daily inspiration, behind-the-scenes and our latest looks.
              </p>
              <p className="mt-2 font-serif text-xl italic text-rose">{site.instagramHandle}</p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full gold-gradient px-7 py-3 text-sm font-bold text-onyx transition-transform active:scale-95"
              >
                <InstagramIcon className="size-4" /> Follow
              </a>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-2 md:mt-0 md:flex-1">
              {grid.map((img, i) => (
                <a
                  key={i}
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-xl"
                >
                  <img
                    src={img}
                    alt="Instagram post"
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}