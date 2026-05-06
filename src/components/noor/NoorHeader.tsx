import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Collection", href: "#collection" },
  { label: "Story", href: "#story" },
  { label: "Sourcing", href: "#sourcing" },
  { label: "Contact", href: "#contact" },
];

export function NoorHeader() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 100], ["oklch(0.16 0.025 50 / 0)", "oklch(0.16 0.025 50 / 0.85)"]);
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur }}
      className="fixed top-0 inset-x-0 z-50 border-b border-amber/10"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display italic text-3xl md:text-4xl text-amber leading-none">N</span>
          <span className="font-display tracking-[0.45em] text-xs md:text-sm uppercase">OOR</span>
        </a>

        <nav className="hidden lg:flex items-center gap-12">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/70 hover:text-amber transition-colors duration-500 group py-2"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber transition-all duration-700 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex btn-amber text-[11px] uppercase tracking-[0.25em] px-6 py-2.5">
            Order
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-amber/10">
          <div className="flex flex-col p-6 gap-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-lg uppercase tracking-[0.2em]">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
