import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { whatsappLink, serviceBookingMessage } from "@/data/site";
import { MessageCircle } from "lucide-react";


export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto mb-10 flex max-w-6xl items-end justify-between px-6">
        <Reveal>
          <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-gold">Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl">Curated Services</h2>
        </Reveal>
        <span className="hidden text-xs uppercase tracking-widest text-onyx/40 sm:block">
          Swipe →
        </span>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-auto md:max-w-6xl md:snap-none">
        {services.map((s, i) => (
          <Reveal
            key={s.id}
            delay={(i % 4) * 0.05}
            className="min-w-[260px] max-w-[260px] snap-start sm:min-w-[280px] sm:max-w-[280px]"
          >
            <article className="group flex h-full flex-col">
              <div className="overflow-hidden rounded-3xl shadow-sm outline outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl">{s.name}</h3>
                  <span className="font-medium text-gold">{s.price}</span>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-onyx/60">
                  {s.duration} • {s.description}
                </p>
                <a
                  href={whatsappLink(serviceBookingMessage(s.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 rounded-full bg-rose/10 py-3 text-xs font-bold uppercase tracking-widest text-rose transition-colors hover:bg-rose hover:text-white"
                >
                  <MessageCircle className="size-4" /> Book on WhatsApp
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}