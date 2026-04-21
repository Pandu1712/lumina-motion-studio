import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
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
  return (
    <As ref={ref} className={className}>
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
    </As>
  );
}
