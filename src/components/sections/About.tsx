import ownerImg from "@/assets/owner.jpg";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { BadgeCheck, Home, Sparkles } from "lucide-react";

const stats = [
  { to: 3, suffix: "+", label: "Years Experience" },
  { to: 300, suffix: "+", label: "Happy Clients" },
  { to: 120, suffix: "+", label: "Bridal Makeups" },
  { to: 4, suffix: "+", label: "Certifications" },
];

const highlights = [
  { icon: BadgeCheck, text: "Certified Makeup Artist" },
  { icon: Home, text: "Premium Home Services" },
  { icon: Sparkles, text: "Skin-Friendly Premium Products" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:items-center md:gap-14">
        <Reveal className="mb-10 md:mb-0">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-rose/10 outline outline-1 -outline-offset-1 outline-black/5">
            <img
              src={ownerImg}
              alt="Founder and lead makeup artist"
              loading="lazy"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-gold">
              About the Artist
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">Beauty, crafted with care</h2>
            <p className="mt-5 text-sm leading-relaxed text-onyx/70">
              Welcome to {""}
              <span className="text-rose">Nandini Makeover</span>. I'm a certified makeup artist with a
              passion for enhancing natural beauty. From intimate engagements to grand
              weddings, every look is tailored to you — using premium products in a warm,
              welcoming home studio.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-3">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-blush text-rose">
                    <h.icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{h.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <div className="rounded-2xl border border-rose/5 bg-white p-5 shadow-sm">
                  <p className="font-serif text-3xl text-gold">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-onyx/55">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}