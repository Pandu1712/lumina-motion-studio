import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logoOfsat from "@/assets/image.png";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Company", to: "/company" as const },
  { label: "Business Units", to: "/business-units" as const },
  { label: "Commitments", to: "/commitments" as const },
  { label: "News", to: "/news" as const },
  { label: "Locations", to: "/locations" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header({ light = false }: { light?: boolean }) {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 100],
    light
      ? ["rgba(255, 255, 255, 0.95)", "rgba(255, 255, 255, 1)"]
      : ["oklch(0.12 0.01 250 / 0)", "oklch(0.12 0.01 250 / 0.95)"]
  );
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(4px)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur }}
      className={`fixed top-0 inset-x-0 z-50 border-b ${light ? "border-black/10" : "border-white/5"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-28 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="flex items-center">
            <img src={logoOfsat} className="h-16 md:h-20 w-auto object-contain" />
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group py-2 ${
                light ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive ? (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600/50 transition-all duration-500 group-hover:w-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link to="/contact" className="!hidden md:!inline-flex btn-amber text-xs px-8 py-3 whitespace-nowrap">
            Get in touch
          </Link>

          <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 ml-auto ${light ? "text-black" : "text-foreground"}`}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
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
