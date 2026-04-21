import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/company" },
  { label: "Business Units", to: "/#units" },
  { label: "Commitments", to: "/#commitments" },
  { label: "News", to: "/#news" },
  { label: "Contact", to: "/#contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 100], ["oklch(0.18 0.022 195 / 0)", "oklch(0.18 0.022 195 / 0.92)"]);
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(14px)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur }}
      className="fixed top-0 inset-x-0 z-50 border-b border-transparent"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 border border-amber/60 rotate-45 flex items-center justify-center">
            <div className="absolute inset-1 bg-amber/10" />
            <span className="relative -rotate-45 text-amber font-display text-lg">O</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">OFSAT</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Energy · Logistics</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm tracking-wide text-foreground/80 hover:text-amber transition-colors group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link to="/" className="hidden md:inline-flex btn-amber text-sm">
          Get in touch
          <span>→</span>
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col p-6 gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-lg">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
