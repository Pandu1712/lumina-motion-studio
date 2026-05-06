import { Reveal } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
import { Sprout, Hand, ShieldCheck, Globe2 } from "lucide-react";

const pillars = [
  { icon: Sprout, title: "Single-origin", body: "Every harvest traces back to one farm, one family, one season — never blended, never mixed." },
  { icon: Hand, title: "Hand-sorted", body: "Each kernel is inspected by hand. Less than 0.1% by weight ever passes our final grading." },
  { icon: ShieldCheck, title: "No additives", body: "No preservatives, no sulphites, no oils. Just the harvest — the way it was meant to be." },
  { icon: Globe2, title: "Direct trade", body: "We pay growers 30% above market and visit every estate twice per harvest cycle." },
];

export function NoorSourcing() {
  return (
    <section id="sourcing" className="px-6 md:px-10 py-28 md:py-40 bg-background">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-20 md:mb-28">
          <Reveal>
            <div className="flex items-center justify-center gap-3 text-amber text-[10px] uppercase tracking-[0.4em] mb-6">
              <span className="amber-line" /> Four promises · Zero shortcuts <span className="amber-line" />
            </div>
          </Reveal>
          <Text3D
            text="The way we source."
            className="font-display text-5xl md:text-7xl italic block leading-[1]"
            depth={6}
            amber
            italic
            blinking
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-amber/10 border border-amber/10 rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="bg-background p-10 md:p-12 h-full group hover:bg-surface/40 transition-colors duration-700">
                <div className="w-14 h-14 rounded-full border border-amber/30 flex items-center justify-center mb-8 text-amber group-hover:bg-amber group-hover:text-amber-foreground group-hover:rotate-12 transition-all duration-500">
                  <p.icon size={20} />
                </div>
                <div className="font-display text-2xl md:text-3xl mb-4">{p.title}</div>
                <p className="text-foreground/65 leading-relaxed font-light text-sm">{p.body}</p>
                <div className="mt-8 text-amber font-display italic text-2xl opacity-30">0{i + 1}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
