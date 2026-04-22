import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, type MouseEvent } from "react";

interface CinematicMediaProps {
  src: string;
  videoSrc?: string;
  alt: string;
  direction?: "left" | "right";
  intensity?: number;
}

export function CinematicMedia({ src, videoSrc, alt, direction = "right", intensity = 1 }: CinematicMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // MOUSE PARALLAX
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 80, damping: 20 });

  const onMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  // SCROLL MOTION
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const xMove = direction === "right" ? ["-8%", "8%"] : ["8%", "-8%"];
  const x = useTransform(smoothProgress, [0, 1], xMove);
  const scale = useTransform(smoothProgress, [0, 1], [1.1, 1.25]);

  return (
    <div 
      ref={containerRef} 
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full h-full overflow-hidden group/media perspective-1000"
    >
      <motion.div 
        style={{ x, scale, rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="w-full h-full will-change-transform"
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => videoRef.current?.play()}
            className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-[2000ms]"
            style={{ transform: "translateZ(0px)" }}
          />
        ) : (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-[3000ms]"
            style={{ transform: "translateZ(0px)" }}
          />
        )}
        
        {/* Deep Frame Inner */}
        <div 
          className="absolute inset-[10px] md:inset-[20px] border border-white/5 pointer-events-none" 
          style={{ transform: "translateZ(40px)" }}
        />

        {/* Grain / Speed lines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay grain" />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-radial-vignette" />
      </motion.div>
      
      {/* External Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -inset-4 border border-amber/10 pointer-events-none"
      />
    </div>
  );
}
