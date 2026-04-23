import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ElementType, type MouseEvent, type ReactNode } from "react";

/**
 * Text3D — premium 3D depth text:
 *  - Multi-layer stacked shadows (depth)
 *  - Perspective transform on parent
 *  - Mouse parallax tilt + light sweep
 *  - Per-word entrance reveal
 */
export function Text3D({
  text,
  className = "",
  as: As = "h2",
  italic = false,
  amber = false,
  depth = 8,
  delay = 0,
  blinking = false,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  italic?: boolean;
  amber?: boolean;
  depth?: number;
  delay?: number;
  blinking?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });
  const lightX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Stack shadow layers — descending opacity creates extruded depth
  const layers = Array.from({ length: depth }, (_, i) => i + 1);
  const shadow = layers
    .map((i) => {
      const o = Math.max(0.04, 0.55 - i * 0.06);
      const color = amber
        ? `oklch(0.12 0.01 250 / ${o})`
        : `oklch(0.1 0.01 250 / ${o})`;
      return `${i}px ${i}px 0 ${color}`;
    })
    .join(", ");

  const Tag = As as ElementType;
  const words = text.split(" ");

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative inline-block"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <Tag
          className={`relative ${italic ? "italic" : ""} ${amber ? "text-red-grad" : ""} ${className}`}
          animate={blinking ? {
            opacity: [1, 0.5, 1],
            scale: [1, 1.01, 1],
          } : {}}
          whileHover={{
            rotateY: 360,
            transition: { duration: 1.5, ease: "easeInOut" }
          }}
          transition={blinking ? {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          } : {}}
          style={{
            textShadow: shadow,
            transform: "translateZ(0)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {words.map((w, i) => (
            <span key={i}>
              <span className="reveal-mask">
                <motion.span
                  initial={{ y: "115%", rotateX: -45, opacity: 0 }}
                  animate={inView ? { y: "0%", rotateX: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 1.1,
                    delay: delay + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline-block", transformOrigin: "50% 100%" }}
                >
                  {w}
                </motion.span>
              </span>
              {i < words.length - 1 && " "}
            </span>
          ))}
        </Tag>

        {/* Light sweep reacting to mouse */}
        <motion.div
          aria-hidden
          style={{
            backgroundImage: useTransform(
              lightX,
              (v) =>
                `radial-gradient(400px 100% at ${v} 50%, oklch(0.12 0.01 250 / 0.05), transparent 70%)`,
            ),
            mixBlendMode: "plus-lighter",
          }}
          className="pointer-events-none absolute inset-0"
        />
      </motion.div>
    </div>
  );
}

/**
 * Layered3DTitle — stacks the same text behind itself with offsets,
 * for the dramatic "extruded headline" look used in the hero.
 */
export function Layered3DTitle({
  text,
  className = "",
  amber = false,
  italic = false,
  delay = 0,
  layers = 4,
  as: As = "h1",
  blinking = false,
}: {
  text: string;
  className?: string;
  amber?: boolean;
  italic?: boolean;
  delay?: number;
  layers?: number;
  as?: ElementType;
  blinking?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 100, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 16 });

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const Tag = As as ElementType;
  const stack = Array.from({ length: layers });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative inline-block"
      style={{ perspective: 1600 }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {stack.map((_, i) => {
          const reverseI = layers - i;
          const z = -reverseI * 12;
          const opacity = 0.08 + (i / layers) * 0.12;
          return (
            <Tag
              key={i}
              aria-hidden={i !== layers - 1}
              className={`absolute inset-0 ${italic ? "italic" : ""} ${className}`}
                style={{
                  transform: `translateZ(${z}px) translate(${reverseI * 1.5}px, ${reverseI * 1.5}px)`,
                  color: amber ? "oklch(0.55 0.22 25)" : "oklch(0.45 0.01 250)",
                  opacity: i === layers - 1 ? 0 : opacity,
                  pointerEvents: "none",
                }}
            >
              {text}
            </Tag>
          );
        })}

        <Tag
          className={`relative ${italic ? "italic" : ""} ${amber ? "text-red-grad" : ""} ${className}`}
          animate={blinking ? {
            opacity: [1, 0.5, 1],
            scale: [1, 1.01, 1],
          } : {}}
          whileHover={{
            rotateY: 360,
            scale: 1.05,
            transition: { duration: 1.8, ease: "circOut" }
          }}
          transition={blinking ? {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          } : {}}
          style={{ transform: "translateZ(0)" }}
        >
          {text.split(" ").map((w, i) => (
            <span key={i}>
              <span className="reveal-mask">
                <motion.span
                  initial={{ y: "115%", rotateX: -55, opacity: 0 }}
                  animate={inView ? { y: "0%", rotateX: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 1.2,
                    delay: delay + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline-block", transformOrigin: "50% 100%" }}
                >
                  {w}
                </motion.span>
              </span>
              {i < text.split(" ").length - 1 && " "}
            </span>
          ))}
        </Tag>
      </motion.div>
    </div>
  );
}

export function Wrap3D({ children }: { children: ReactNode }) {
  return <div style={{ perspective: 1600 }}>{children}</div>;
}
