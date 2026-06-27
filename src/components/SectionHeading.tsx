import { Reveal } from "@/components/Reveal";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center }: Props) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
      <h2 className="font-serif text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-sm text-onyx/60 ${center ? "mx-auto max-w-md" : "max-w-md"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}