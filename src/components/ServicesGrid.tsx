import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { services } from "@/lib/services";
import { Reveal, RevealText } from "./Reveal";
import { Text3D } from "./Text3D";

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <Reveal delay={i * 0.08}>
      <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}>
        <Link
          ref={ref}
          to="/business-units"
          hash={s.slug}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="group relative block aspect-[4/5] overflow-hidden bg-surface border border-border"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.img
            src={s.image}
            alt={s.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all duration-[1200ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* corner index */}
          <div className="absolute top-6 left-6 text-amber text-xs tracking-[0.4em] uppercase" style={{ transform: "translateZ(40px)" }}>
            {s.index} / {String(services.length).padStart(2, "0")}
          </div>

          {/* hover arrow */}
          <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-amber/40 flex items-center justify-center text-amber opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700"
               style={{ transform: "translateZ(40px)" }}>
            →
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8" style={{ transform: "translateZ(30px)" }}>
            <div className="text-xs uppercase tracking-[0.3em] text-amber mb-3">{s.category}</div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3">{s.title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2 max-w-xs">{s.tagline}</p>

            <div className="mt-6 flex items-center gap-3 text-sm text-amber">
              <span className="w-0 group-hover:w-12 h-px bg-amber transition-all duration-700" />
              <span>Learn more</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </Reveal>
  );
}

export function ServicesGrid() {
  return (
    <section id="units" className="relative py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6 text-amber text-xs uppercase tracking-[0.4em]">
                <span className="amber-line" /> Business Units
              </div>
            </Reveal>
            <Text3D
              text="Six divisions."
              className="font-display text-5xl md:text-7xl leading-[0.95] block"
              depth={6}
            />
            <Text3D
              text="One promise."
              className="font-display text-5xl md:text-7xl leading-[0.95] block"
              italic
              amber
              depth={6}
              delay={0.15}
            />
          </div>
          <Reveal delay={0.3} className="max-w-md">
            <p className="text-muted-foreground leading-relaxed">
              From rig moves across Omani deserts to fleet operations in Saudi Arabia, every business unit is engineered
              around safety, efficiency and long-term partnership.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
