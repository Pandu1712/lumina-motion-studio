import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { Layered3DTitle } from "@/components/Text3D";
import heroImg from "@/assets/dryfruit/hero.jpg";

export function NoorHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen overflow-hidden grain shadow-inset pt-20 md:pt-24"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium dry fruits collection"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-radial-vignette" />
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[42%] left-0 right-0 h-px bg-amber/30 origin-left"
      />

      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 max-w-[1500px] mx-auto"
      >
        <Reveal delay={0.2}>
          <div className="flex items-center gap-3 mb-8 text-amber text-[10px] md:text-xs uppercase tracking-[0.45em]">
            <span className="amber-line" /> NOOR · Est. 1962 · House of Dry Fruits
          </div>
        </Reveal>

        <Layered3DTitle
          as="h1"
          text="Heirloom dry fruits,"
          className="font-display text-[14vw] md:text-[10vw] leading-[0.95] tracking-tight block"
          delay={0.3}
          layers={3}
          blinking
        />
        <Layered3DTitle
          as="h1"
          text="hand-picked."
          className="font-display text-[14vw] md:text-[10vw] leading-[0.95] tracking-tight block italic"
          delay={0.55}
          italic
          amber
          layers={3}
          blinking
        />

        <Reveal delay={1.2} className="mt-10 max-w-xl">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">
            Six rare harvests sourced directly from the world's most celebrated groves —
            Kashmir, Kerman, the Jordan Valley and beyond. No middlemen, no warehousing,
            no compromise.
          </p>
        </Reveal>

        <Reveal delay={1.4} className="mt-10 flex flex-wrap gap-4">
          <a href="#collection" className="btn-amber">
            Explore the collection <span>→</span>
          </a>
          <a href="#story" className="btn-ghost">Our story</a>
        </Reveal>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/60 flex flex-col items-center gap-3"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-amber/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
