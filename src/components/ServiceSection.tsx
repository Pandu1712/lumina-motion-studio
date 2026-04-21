import { motion } from "framer-motion";
import { type Service } from "@/lib/services";
import { Reveal, Counter, DrawLine } from "./Reveal";

interface ServiceSectionProps {
  service: Service;
}

export function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <section 
      id={service.slug} 
      className="relative min-h-screen flex flex-col justify-center py-16 md:py-32 border-b border-border last:border-0 scroll-mt-20 group"
    >
      {/* Background Decor */}
      <div className="absolute top-20 left-0 w-32 h-px bg-gradient-to-r from-amber to-transparent opacity-30" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-4 text-amber text-xs uppercase tracking-[0.4em] mb-6 md:mb-8">
              <span className="font-display text-xl md:text-2xl">{service.index}</span>
              <span className="w-8 md:w-12 h-px bg-amber" />
              <span>{service.category}</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 group-target:text-amber transition-colors duration-1000">
              {service.title}
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg md:text-2xl italic text-foreground/80 font-display mb-8 md:mb-12 max-w-xl">
              {service.tagline}
            </p>
          </Reveal>
 
          <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {service.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.3 + i * 0.1}>
                <div className="space-y-1 md:space-y-2">
                  <div className="font-display text-2xl md:text-3xl text-amber-grad"><Counter value={s.value} /></div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-3 md:space-y-4">
            {service.highlights.slice(0, 3).map((h, i) => (
              <Reveal key={h} delay={0.5 + i * 0.1}>
                <div className="flex items-start gap-4 text-sm text-foreground/70">
                  <span className="text-amber mt-1">→</span>
                  <p className="line-clamp-2 md:line-clamp-none">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT MEDIA */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0">
          <Reveal delay={0.3}>
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden group/img">
              <motion.img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-[2000ms] scale-110 group-hover/img:scale-100"
              />
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-background/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Kinetic Reveal Frame */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -inset-2 md:-inset-4 border border-amber/20 pointer-events-none origin-left"
              />
            </div>
          </Reveal>

          {/* Contact Snippet Overlay */}
          <div className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-8 bg-surface p-6 md:p-8 border border-border shadow-2xl max-w-[240px] md:max-w-xs reveal-up">
            <Reveal delay={0.6}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-amber mb-2">Unit Enquiries</div>
              <div className="font-display text-base md:text-lg mb-1">{service.contact.name}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground mb-3 md:mb-4">{service.contact.role}</div>
              <div className="text-[10px] md:text-xs text-amber font-medium truncate">{service.contact.email}</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
