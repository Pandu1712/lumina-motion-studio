import { Reveal, Counter } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storyImg from "@/assets/dryfruit/story.jpg";

export function NoorStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="story" ref={ref} className="px-6 md:px-10 py-28 md:py-40 bg-surface/30 border-y border-amber/10 overflow-hidden">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 text-amber text-[10px] uppercase tracking-[0.4em] mb-8">
              <span className="amber-line" /> Three generations · Since 1962
            </div>
          </Reveal>
          <Text3D
            text="A house built"
            className="font-display text-5xl md:text-7xl block leading-[1]"
            depth={6}
            blinking
          />
          <Text3D
            text="on patience."
            className="font-display text-5xl md:text-7xl italic block leading-[1] mt-1"
            depth={6}
            amber
            italic
            blinking
          />

          <Reveal delay={0.2} className="mt-10">
            <p className="text-lg text-foreground/80 leading-relaxed font-light max-w-xl">
              NOOR began in a small saffron field in Pampore in 1962 — a single grandfather, a single
              harvest, a single promise: never to compromise on what he sent to family. Three
              generations later, every kilogram still passes through our hands before it reaches yours.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-3 gap-6">
            {[
              { v: 62, label: "Years of craft", suffix: "" },
              { v: 18, label: "Source farms", suffix: "" },
              { v: 100, label: "Hand-sorted", suffix: "%" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={0.3 + i * 0.1}>
                <div className="border-l-2 border-amber pl-5">
                  <div className="font-display text-4xl md:text-5xl text-amber">
                    <Counter value={`${s.v}${s.suffix}`} />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mt-2">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber/15">
              <motion.img
                style={{ y }}
                src={storyImg}
                alt="NOOR dry fruit gift box"
                width={1600}
                height={1200}
                loading="lazy"
                className="w-full h-[120%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-baseline justify-between text-[10px] uppercase tracking-[0.35em] text-foreground/80">
                <span>Pampore · Kashmir</span>
                <span>Est. MCMLXII</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
