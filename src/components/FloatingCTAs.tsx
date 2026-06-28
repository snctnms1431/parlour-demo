import { useEffect, useState } from "react";
import { Phone, MessageCircle, CalendarHeart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site, whatsappLink, bookingMessage } from "@/data/site";

export function FloatingCTAs() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden"
        >
          <div className="glass-nav mx-auto flex max-w-md items-center gap-2 rounded-full backdrop-blur-xl bg-white/30 p-2 shadow-xl shadow-black/35">
            <a
              href={`tel:${site.phone}`}
              aria-label="Call now"
              className="grid size-12 shrink-0 place-items-center rounded-full bg-onyx text-white active:scale-95"
            >
              <Phone className="size-5" />
            </a>
            <a
              href={whatsappLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rose py-3 text-sm font-bold text-white active:scale-95"
            >
              <CalendarHeart className="size-4" /> Book Appointment
            </a>
            <a
              href={whatsappLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white active:scale-95"
            >
              <MessageCircle className="size-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}