import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* Slimmer animated divider */
export function SectionDivider({ label }: { label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="relative py-6 md:py-8 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex items-center gap-6">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left h-px bg-red-600/30 flex-1"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rotate-45 bg-red-600" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-red-600 font-bold whitespace-nowrap">{label}</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-red-600" />
        </motion.div>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="origin-right h-px bg-red-600/30 flex-1"
        />
      </div>
    </div>
  );
}
