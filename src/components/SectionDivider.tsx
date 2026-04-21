import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* Big animated divider — vertical SVG line + drifting amber dot + scrolling label */
export function SectionDivider({ label }: { label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative py-16 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex items-center gap-6">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left h-px bg-amber/50 flex-1"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rotate-45 bg-amber" />
          <span className="text-xs uppercase tracking-[0.4em] text-amber whitespace-nowrap">{label}</span>
          <span className="w-2 h-2 rotate-45 bg-amber" />
        </motion.div>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="origin-right h-px bg-amber/50 flex-1"
        />
      </div>
    </div>
  );
}
