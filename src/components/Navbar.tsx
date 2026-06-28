import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-rose/10 px-6 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between text-center">
        <a href="#top" className="flex items-center gap-1 text-rose transition-transform duration-300 hover:scale-105">
          <img
            src={logo}
            alt="Nandini Makeover Logo"
            className="h-17 w-17 object-contain"
          />
          <div className="font-serif uppercase tracking-[0.3em] leading-none">
            <p className="text-xl">NANDINI</p>
            <p className="text-sm">MAKEOVER</p>
          </div>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-widest text-onyx/70 transition-colors hover:text-rose"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid size-10 place-items-center rounded-full border border-rose/15 bg-rose/5 text-rose md:hidden"
        >
          <Menu className="size-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 backdrop-blur-lg bg-white/95 px-6 py-4 md:hidden"
          >
            <div className="flex items-center justify-between">
              <img 
                src={logo} 
                alt="Nandini Makeover"
                className="h-30 w-auto object-contain"
              />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-rose/15 bg-rose/5 text-rose"
              >
                <X className="size-5" />
              </button>
            </div>
            
            <div className="mt-12 flex flex-col gap-3">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="block rounded-xl border border-gold border-2 bg-rose/80 backdrop-blur-sm px-4 py-3 font-serif text-2xl text-black  shadow-md hover:shadow-rose/20 hover:border-rose/30 transition-all duration-300"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}