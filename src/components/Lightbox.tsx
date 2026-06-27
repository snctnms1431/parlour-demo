import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  src?: string;
  alt?: string;
  caption?: string;
}

export function Lightbox({ open, onClose, src, alt, caption }: LightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] grid place-items-center bg-onyx/90 p-4 backdrop-blur-sm"
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white"
          >
            <X className="size-5" />
          </button>
          <motion.figure
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-2xl"
          >
            <img src={src} alt={alt ?? ""} className="max-h-[80vh] w-full object-contain" />
            {caption && (
              <figcaption className="bg-white/5 py-3 text-center text-sm text-white/80">
                {caption}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}