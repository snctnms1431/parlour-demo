import { useCallback, useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <section id="before-after" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="The Magic"
          title="Before & After"
          subtitle="Drag the slider to reveal the transformation."
          center
        />
        <Reveal>
          <div
            ref={ref}
            className="relative mt-10 aspect-[4/5] w-full max-w-md cursor-ew-resize select-none overflow-hidden rounded-[2rem] shadow-xl shadow-rose/10 outline outline-1 -outline-offset-1 outline-black/5 sm:mx-auto"
            onMouseDown={(e) => {
              dragging.current = true;
              update(e.clientX);
            }}
            onMouseMove={(e) => dragging.current && update(e.clientX)}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => update(e.touches[0].clientX)}
            onTouchMove={(e) => update(e.touches[0].clientX)}
          >
            <img
              src={afterImg}
              alt="After makeup"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-rose backdrop-blur">
              After
            </span>
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeImg}
                alt="Before makeup"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-onyx/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                Before
              </span>
            </div>
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-rose shadow-lg">
                <MoveHorizontal className="size-5" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}