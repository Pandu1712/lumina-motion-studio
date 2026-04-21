import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type ElementType } from "react";

/**
 * Reveal — premium scroll-driven reveal animation.
 * Features:
 *  - High-end elastic easing
 *  - Staggered child capability
 *  - Momentum-based entry
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  width = "fit-content",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  width?: "fit-content" | "100%";
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ width }}>
      <motion.div
        initial={{ y: 50, opacity: 0, clipPath: "inset(0 0 100% 0)" }}
        animate={isInView ? { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)" } : {}}
        transition={{
          duration,
          delay: delay + 0.1,
          ease: [0.22, 1, 0.36, 1], // Premium authentic easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function StaggerReveal({ 
  children, 
  delay = 0,
  interval = 0.08
}: { 
  children: ReactNode[]; 
  delay?: number;
  interval?: number;
}) {
  return (
    <>
      {children.map((child, i) => (
        <Reveal key={i} delay={delay + i * interval}>
          {child}
        </Reveal>
      ))}
    </>
  );
}

export function RevealText({
  text,
  className,
  as: As = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");
  const Tag = As as ElementType;
  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="reveal-mask mr-[0.25em]">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 1,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* Per-character kinetic reveal — for hero accents */
export function CharReveal({
  text,
  className,
  delay = 0,
  as: As = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Tag = As as ElementType;
  return (
    <Tag ref={ref} className={className} style={{ display: "inline-block" }}>
      {text.split("").map((c, i) => (
        <span key={i} className="reveal-mask">
          <motion.span
            initial={{ y: "110%", rotate: 6, opacity: 0 }}
            animate={inView ? { y: "0%", rotate: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.035,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {c}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* SVG line that draws on scroll-into-view */
export function DrawLine({
  className,
  delay = 0,
  vertical = false,
}: {
  className?: string;
  delay?: number;
  vertical?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <svg
      ref={ref}
      className={className}
      viewBox={vertical ? "0 0 1 100" : "0 0 100 1"}
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.line
        x1={0}
        y1={0}
        x2={vertical ? 0 : 100}
        y2={vertical ? 100 : 0}
        stroke="currentColor"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

/* Animated counter — supports "110+", "7.5M", "<6 h", etc. */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/([\d.,]+)/);
  if (!match) return <span ref={ref} className={className}>{value}</span>;
  const numStr = match[1];
  const target = parseFloat(numStr.replace(/,/g, ""));
  const decimals = (numStr.split(".")[1] || "").length;
  const hasComma = numStr.includes(",");
  const prefix = value.slice(0, match.index);
  const suffix = value.slice((match.index ?? 0) + numStr.length);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <CountUp target={target} decimals={decimals} hasComma={hasComma} active={inView} />
      </motion.span>
      {suffix}
    </span>
  );
}

function CountUp({
  target,
  decimals,
  hasComma,
  active,
}: {
  target: number;
  decimals: number;
  hasComma: boolean;
  active: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  if (active && ref.current) {
    const start = performance.now();
    const duration = 1800;
    const fmt = (n: number) => {
      const fixed = n.toFixed(decimals);
      if (!hasComma) return fixed;
      const [intPart, dec] = fixed.split(".");
      const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return dec ? `${withCommas}.${dec}` : withCommas;
    };
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      if (ref.current) ref.current.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  return <span ref={ref}>0</span>;
}
