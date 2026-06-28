import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { site, whatsappLink, bookingMessage } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="px-6 pt-24 pb-12">
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:items-center md:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-12 md:order-2 md:mb-0"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-rose/10 outline outline-1 -outline-offset-1 outline-black/5">
            <img
              src={heroImg}
              alt="Bride with elegant HD bridal makeup"
              width={1080}
              height={1350}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="absolute -bottom-6 -right-2 rounded-2xl border border-rose/5 bg-white p-3 shadow-xl shadow-rose/10"
          >
            <p className="font-serif text-2xl italic text-rose">Bridal Specialist</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-onyx/50">
              Est. {site.established}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="md:order-1"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-gold">
            Luxury Makeup Artistry
          </span>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-6xl">
            Unveiling Your <br />
            <span className="italic text-rose">Radiant</span> Essence
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-onyx/70">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={whatsappLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-rose py-5 text-center font-medium tracking-wide text-white shadow-lg shadow-rose/25 transition-transform active:scale-95"
            >
              Book an Appointment
            </a>
            <div className="flex gap-3">
              <a
                href={whatsappLink(bookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-rose/20 py-4 text-sm font-medium transition-colors hover:bg-rose/5"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
              <a
                href={`tel:${site.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-rose/20 py-4 text-sm font-medium transition-colors hover:bg-rose/5"
              >
                <Phone className="size-4" /> Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}