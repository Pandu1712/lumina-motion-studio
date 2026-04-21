import { motion, useScroll, useSpring } from "framer-motion";
import { services } from "@/lib/services";
import { useEffect, useState } from "react";

export function ScrollTracker() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10%" }
    );

    services.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-8">
      {/* Progress Line */}
      <div className="relative w-px h-64 bg-border">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-amber origin-top" 
          style={{ height: "100%", scaleY }}
        />
      </div>

      {/* Dots */}
      <div className="flex flex-col gap-6">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="group relative flex items-center justify-center w-6 h-6"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.slug)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className={`w-1 h-1 rounded-full transition-all duration-500 ${
              activeSlug === s.slug ? "bg-amber scale-[2.5]" : "bg-muted-foreground group-hover:bg-amber"
            }`} />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-2 py-1 bg-surface border border-border text-[10px] uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {s.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
