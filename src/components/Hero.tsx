import heroConvoy from "@/assets/motion/hero_convoy.png";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { Layered3DTitle } from "./Text3D";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} className="relative h-[110vh] overflow-hidden grain shadow-inset">
      <motion.div style={{ y, x, scale }} className="absolute inset-0">
        <img src={heroConvoy} alt="OFSAT winch truck convoy travelling" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
      </motion.div>

      {/* floating amber accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[45%] left-0 right-0 h-px bg-amber/30 origin-left"
      />

      <motion.div style={{ y: titleY, opacity }} className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 md:px-10 max-w-[1400px] mx-auto">
        <Reveal delay={0.2}>
          <div className="flex items-center gap-3 mb-8 text-amber text-xs uppercase tracking-[0.4em]">
            <span className="amber-line" /> Since 1984 · Sultanate of Oman
          </div>
        </Reveal>

        <Layered3DTitle
          as="h1"
          text="World class energy"
          className="font-display text-[14vw] md:text-[9vw] leading-[0.9] tracking-tight block"
          delay={0.3}
          layers={6}
        />
        <Layered3DTitle
          as="h1"
          text="& logistics."
          className="font-display text-[14vw] md:text-[9vw] leading-[0.9] tracking-tight block"
          delay={0.5}
          italic
          amber
          layers={6}
        />

        <Reveal delay={1.2} className="mt-10 max-w-xl">
          <p className="text-lg text-foreground/80 leading-relaxed">
            We help our partners realise their boldest ambitions — across rig moving, drilling, power and heavy logistics
            in the GCC.
          </p>
        </Reveal>

        <Reveal delay={1.4} className="mt-10 flex flex-wrap gap-4">
          <a href="#units" className="btn-amber">
            Explore business units <span>→</span>
          </a>
          <a href="#about" className="btn-ghost">About OFSAT</a>
        </Reveal>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground flex flex-col items-center gap-3"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-amber to-transparent"
        />
      </motion.div>
    </section>
  );
}
