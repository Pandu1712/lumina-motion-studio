import { Link } from "@tanstack/react-router";
import { Reveal, RevealText } from "./Reveal";
import { Text3D } from "./Text3D";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-red-600/5 blur-[60px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-32 relative">
        <div className="mb-24">
          <RevealText
            as="h2"
            text="Engineering trust across four decades."
            className="font-display text-5xl md:text-8xl leading-[0.95] block max-w-5xl tracking-tighter"
            delay={0.1}
          />
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-red-600 font-bold">Since 1984</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 text-sm border-t border-white/5 pt-20">
          <div className="space-y-6">
            <div className="text-red-600 uppercase tracking-[0.3em] text-[10px] font-bold">About</div>
            <p className="text-muted-foreground leading-relaxed font-light text-base">
              OFSAT was founded in 1984 to make a mark in Oman's industrial sector — delivering rig moving, drilling and
              integrated logistics services across the GCC.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-red-600 uppercase tracking-[0.3em] text-[10px] font-bold">Business Units</div>
            <ul className="space-y-3 text-muted-foreground font-light text-base">
              <li><Link to="/services/$slug" params={{ slug: "rig-moving" }} className="hover:text-red-600 transition-colors">Rig Moving</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "generators" }} className="hover:text-red-600 transition-colors">Generators</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "drilling" }} className="hover:text-red-600 transition-colors">Drilling</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "kenworth" }} className="hover:text-red-600 transition-colors">Kenworth</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="text-red-600 uppercase tracking-[0.3em] text-[10px] font-bold">Company</div>
            <ul className="space-y-3 text-muted-foreground font-light text-base">
              <li><Link to="/company" className="hover:text-red-600 transition-colors">About</Link></li>
              <li><Link to="/business-units" className="hover:text-red-600 transition-colors">Business Units</Link></li>
              <li><Link to="/commitments" className="hover:text-red-600 transition-colors">Commitments</Link></li>
              <li><Link to="/news" className="hover:text-red-600 transition-colors">News</Link></li>
              <li><Link to="/locations" className="hover:text-red-600 transition-colors">Locations</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="text-red-600 uppercase tracking-[0.3em] text-[10px] font-bold">Contact</div>
            <ul className="space-y-3 text-muted-foreground font-light text-base">
              <li>PO Box 138 · Postal 111</li>
              <li>Seeb, Muscat</li>
              <li>+968 245 90305</li>
              <li className="text-red-600 font-medium">contact@ofsat.example</li>
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[10px] text-muted-foreground font-bold tracking-widest uppercase">
          <div>© {new Date().getFullYear()} OFSAT — ISO Certified Group</div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span className="text-red-600">Designed for Motion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
