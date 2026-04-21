import textureBg from "@/assets/texture-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText, Counter, DrawLine } from "./Reveal";
import { Text3D } from "./Text3D";

const stats = [
  { v: "40+", l: "Years operating" },
  { v: "1,200", l: "Specialists" },
  { v: "3", l: "Countries" },
  { v: "300+", l: "Heavy units" },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <motion.img
        style={{ y }}
        src={textureBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-[120%] object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 mb-6 text-amber text-xs uppercase tracking-[0.4em]">
              <span className="amber-line" /> About
            </div>
          </Reveal>
          <Text3D
            text="Servicing Oman's"
            className="font-display text-5xl md:text-6xl leading-[1] block"
            depth={6}
          />
          <Text3D
            text="oilfields since 1984."
            className="font-display text-5xl md:text-6xl leading-[1] block"
            italic
            amber
            depth={6}
            delay={0.15}
          />
        </div>

        <div className="lg:col-span-7 space-y-8">
          <Reveal delay={0.2}>
            <p className="text-lg leading-relaxed text-foreground/80">
              OFSAT Ltd. has been one of the trusted 3PL contract holders for PDO and Bahwan Exel for over 28 years. With
              offices across the Middle East and an international network of partners and agents, we are a global player
              that offers services worldwide — engineered around precision, safety, and long-term partnership.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={0.3 + i * 0.1}>
                <div className="bg-background p-6 group hover:bg-surface transition-colors duration-700">
                  <div className="font-display text-4xl text-amber-grad mb-2"><Counter value={s.v} /></div>
                  <DrawLine className="w-12 h-px text-amber/60 mt-3" delay={0.5 + i * 0.1} />
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.6}>
            <a href="#units" className="btn-ghost">Discover our story <span>→</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
