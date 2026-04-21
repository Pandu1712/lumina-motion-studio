import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber/5 blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 relative">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Engineering trust across <span className="text-amber-grad italic">four decades</span> of operations.
          </h2>
        </Reveal>

        <div className="hairline my-16" />

        <div className="grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <div className="text-amber uppercase tracking-[0.3em] text-xs mb-4">About</div>
            <p className="text-muted-foreground leading-relaxed">
              OFSAT was founded in 1984 to make a mark in Oman's industrial sector — delivering rig moving, drilling and
              integrated logistics services across the GCC.
            </p>
          </div>
          <div>
            <div className="text-amber uppercase tracking-[0.3em] text-xs mb-4">Business Units</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/services/$slug" params={{ slug: "rig-moving" }} className="hover:text-foreground">Rig Moving</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "generators" }} className="hover:text-foreground">Generators</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "drilling" }} className="hover:text-foreground">Drilling</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "kenworth" }} className="hover:text-foreground">Kenworth</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-amber uppercase tracking-[0.3em] text-xs mb-4">Locations</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Muscat, Oman</li>
              <li>Dammam, Saudi Arabia</li>
              <li>Abu Dhabi, UAE</li>
            </ul>
          </div>
          <div>
            <div className="text-amber uppercase tracking-[0.3em] text-xs mb-4">Contact</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>PO Box 138 · Postal 111</li>
              <li>Seeb, Muscat</li>
              <li>+968 245 90305</li>
              <li className="text-amber">contact@ofsat.example</li>
            </ul>
          </div>
        </div>

        <div className="hairline my-12" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} OFSAT — ISO 9001 · 14001 · 45001 certified</div>
          <div>Designed with restraint.</div>
        </div>
      </div>
    </footer>
  );
}
