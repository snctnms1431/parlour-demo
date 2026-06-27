import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site, whatsappLink, bookingMessage } from "@/data/site";

// Replace with your own Web3Forms access key from https://web3forms.com
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const details = [
  { icon: Phone, label: "Call", value: site.phoneDisplay, href: `tel:${site.phone}` },
  { icon: MessageCircle, label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink(bookingMessage) },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Studio", value: site.address },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "New booking enquiry from Aura website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:gap-12">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Visit the Studio"
            subtitle="Book your appointment or drop by our cozy home studio."
          />
          <div className="mt-8 space-y-3">
            {details.map((d) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-rose/5 bg-white p-4 shadow-sm">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blush text-rose">
                    <d.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-widest text-onyx/45">{d.label}</p>
                    <p className="truncate text-sm font-medium">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? (
                <Reveal key={d.label}>
                  <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                </Reveal>
              ) : (
                <Reveal key={d.label}>{content}</Reveal>
              );
            })}
          </div>
          <Reveal className="mt-4">
            <div className="overflow-hidden rounded-2xl border border-rose/5 shadow-sm">
              <iframe
                title="Studio location"
                src={site.mapEmbed}
                loading="lazy"
                className="h-56 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 md:mt-0">
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] border border-rose/5 bg-white p-7 shadow-sm"
          >
            <h3 className="font-serif text-3xl">Send an Enquiry</h3>
            <div className="mt-6 space-y-4">
              <input
                required
                name="name"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-rose/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-rose"
              />
              <input
                required
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-rose/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-rose"
              />
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell us about your event..."
                className="w-full resize-none rounded-2xl border border-rose/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-rose"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-rose py-4 font-medium text-white shadow-lg shadow-rose/25 transition-transform active:scale-95 disabled:opacity-70"
              >
                {status === "sending" && <Loader2 className="size-4 animate-spin" />}
                {status === "success" ? "Message Sent!" : "Send Message"}
              </button>
              {status === "success" && (
                <p className="flex items-center justify-center gap-2 text-sm text-rose">
                  <CheckCircle2 className="size-4" /> Thank you! We'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-destructive">
                  Something went wrong. Please reach us on WhatsApp instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}