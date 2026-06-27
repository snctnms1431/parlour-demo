import { Instagram, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink, bookingMessage } from "@/data/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-onyx px-6 pb-26 pt-16 text-pearl md:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="md:flex md:items-start md:justify-between">
          <div>
            <p className="font-serif text-3xl text-white">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-pearl/50">{site.tagline}</p>
          </div>
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 md:mt-0">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-pearl/60 hover:text-rose">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex gap-3">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-rose">
            <Instagram className="size-4" />
          </a>
          <a href={whatsappLink(bookingMessage)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-rose">
            <MessageCircle className="size-4" />
          </a>
          <a href={`tel:${site.phone}`} aria-label="Call" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-rose">
            <Phone className="size-4" />
          </a>
        </div>
         <a href="https://www.linkedin.com/in/harshal-nimse-73b496326/">
        <div className= "text-center text-l  text-pearl/40 p-6">
          <p className="text-white">Developed By <span className="text-gold ">Sanchit Nimse</span></p>
          <p className="text-xs">B.Tech Computer Software Engineer</p>
          <p className="text-xs">Software Developer</p>

        </div>
        </a>
        <p className="mt-1 pt-0 text-center text-xs text-pearl/40">
          © {new Date().getFullYear()} - Sanchit Nimse. All rights reserved.
         
        </p>
         
      </div>
    </footer>
  );
}