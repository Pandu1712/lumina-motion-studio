import { motion } from "framer-motion";
import { type Service } from "@/lib/services";
import { Reveal, Counter } from "./Reveal";
import { CinematicMedia } from "./CinematicMedia";

interface ServiceSectionProps {
  service: Service;
}

export function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <section 
      id={service.slug} 
      className="relative min-h-[120vh] flex flex-col justify-center py-20 md:py-40 border-b border-border last:border-0 scroll-mt-20 group overflow-hidden"
    >
      {/* 3D Background Index Watermark */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.03, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 -left-20 font-display text-[40vw] select-none pointer-events-none text-foreground leading-none"
      >
        {service.index}
      </motion.div>

      {/* Environmental Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ 
              opacity: [0, 0.4, 0],
              y: -500,
              x: (i % 2 === 0 ? 50 : -50)
            }}
            transition={{ 
              duration: 8 + i, 
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-amber/20 rounded-full"
            style={{ 
              left: `${15 * i}%`, 
              top: `${80 + (i * 5)}%` 
            }}
          />
        ))}
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-4 text-amber text-xs uppercase tracking-[0.4em] mb-8 md:mb-12">
              <span className="font-display text-xl md:text-2xl">{service.index}</span>
              <span className="w-8 md:w-12 h-px bg-amber" />
              <span>{service.category}</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] md:leading-[0.85] mb-8 md:mb-12 group-target:text-amber transition-colors duration-1000">
              {service.title}
            </h2>
          </Reveal>
          
          {/* Glass Stats Box */}
          <div className="relative mb-12 md:mb-16">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-px bg-border border border-border bg-surface/20 rounded-sm overflow-hidden shadow-2xl">
                {service.stats.map((s, i) => (
                  <div key={s.label} className="p-6 md:p-8 bg-surface/5 group/stat">
                    <div className="font-display text-2xl md:text-3xl text-red-grad mb-1 md:mb-2 transition-transform group-hover/stat:-translate-y-1">
                      <Counter value={s.value} />
                    </div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-4 md:space-y-6">
            {service.highlights.slice(0, 3).map((h, i) => (
              <Reveal key={h} delay={0.5 + i * 0.1}>
                <div className="flex items-start gap-4 text-sm md:text-base text-foreground/70">
                  <span className="text-amber mt-1 shrink-0">→</span>
                  <p>{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT MEDIA */}
        <div className="lg:col-span-7 relative mt-16 lg:mt-0">
          <Reveal delay={0.3}>
            <div className="relative aspect-[16/10] lg:aspect-[4/5] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
              <CinematicMedia 
                src={service.image} 
                videoSrc={service.video}
                alt={service.title} 
                direction={service.index === "01" || service.index === "04" ? "right" : "left"}
              />
            </div>
          </Reveal>

          {/* Floating Contact Snippet */}
          <div className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 bg-surface/95 p-6 md:p-10 border border-black/5 shadow-3xl max-w-[260px] md:max-w-xs transform-gpu" style={{ transform: "translateZ(80px)" }}>
            <Reveal delay={0.6}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-amber mb-3">Expert Advisor</div>
              <div className="font-display text-lg md:text-xl mb-1">{service.contact.name}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground mb-4 md:mb-6">{service.contact.role}</div>
              <div className="group/email inline-flex items-center gap-2">
                <span className="w-6 h-px bg-amber/40 group-hover/email:w-10 transition-all" />
                <div className="text-[10px] md:text-xs text-amber font-medium truncate">{service.contact.email}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
