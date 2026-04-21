import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { Layered3DTitle } from "./Text3D";

export function PageHero({
  eyebrow,
  title,
  tagline,
  image,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  image: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <section ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden grain pt-20">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[55%] left-0 right-0 h-px bg-amber/30 origin-left"
      />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 md:px-10 max-w-[1400px] mx-auto">
        <Reveal delay={0.2}>
          <div className="flex items-center gap-3 mb-8 text-amber text-xs uppercase tracking-[0.4em]">
            <span className="amber-line" /> {eyebrow}
          </div>
        </Reveal>
        <Layered3DTitle
          as="h1"
          text={title}
          className="font-display text-[12vw] md:text-[8vw] leading-[0.9] tracking-tight block"
          delay={0.3}
          layers={6}
        />
        <Reveal delay={1} className="mt-8 max-w-2xl">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">{tagline}</p>
        </Reveal>
      </div>
    </section>
  );
}
