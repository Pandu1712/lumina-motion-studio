import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { services } from "@/lib/services";
import { Text3D } from "./Text3D";

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-20, 20]), { stiffness: 100, damping: 20 });

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div 
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="opacity-100 group transition-all duration-700"
    >
      <Link
        ref={ref}
        to="/services/$slug"
        params={{ slug: s.slug }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative block aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/10"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        {/* Content Area */}
        <div className="relative z-10 h-full p-8 flex flex-col" style={{ transform: "translateZ(30px)" }}>
          {/* Category */}
          <div className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/50 mb-2 font-medium">
            {s.category}
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 text-white font-bold">
            {s.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-xs mb-auto">
            {s.tagline}
          </p>

          {/* Button at the bottom */}
          <div className="mt-8">
            <span className="inline-flex items-center px-6 py-2 border border-white/60 rounded-full text-[10px] md:text-xs uppercase tracking-widest text-white font-bold group-hover:bg-white group-hover:text-black transition-all duration-300">
              LEARN MORE
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section id="units" className="relative py-12 md:py-16 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6 text-amber text-xs uppercase tracking-[0.4em]">
              <span className="amber-line" /> Business Units
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Text3D
                text="Six divisions."
                className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] block"
                depth={3}
                blinking
              />
              <Text3D
                text="One promise."
                className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] block"
                italic
                amber
                depth={3}
                delay={0.15}
                blinking
              />
            </div>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              From rig moves across Omani deserts to fleet operations in Saudi Arabia, every business unit is engineered
              around safety, efficiency and long-term partnership.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
