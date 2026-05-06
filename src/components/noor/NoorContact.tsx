import { Reveal } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export function NoorContact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-28 md:py-40 bg-surface/40 border-t border-amber/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-amber to-transparent" />

      <div className="max-w-[1200px] mx-auto text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 text-amber text-[10px] uppercase tracking-[0.4em] mb-8">
            <span className="amber-line" /> Order, gift or visit <span className="amber-line" />
          </div>
        </Reveal>

        <Text3D
          text="Bring NOOR home."
          className="font-display text-5xl md:text-8xl italic block leading-[0.95]"
          depth={8}
          amber
          italic
          blinking
        />

        <Reveal delay={0.2}>
          <p className="mt-10 text-lg md:text-xl text-foreground/70 leading-relaxed font-light max-w-2xl mx-auto">
            We hand-pack every order and ship within 48 hours from our Pampore atelier.
            Corporate gifting and bulk wedding orders welcomed.
          </p>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Mail, label: "Email", value: "atelier@noor.house", href: "mailto:atelier@noor.house" },
            { icon: Phone, label: "Phone", value: "+91 194 220 1962", href: "tel:+911942201962" },
            { icon: MapPin, label: "Atelier", value: "Pampore, Kashmir", href: "#" },
            { icon: Instagram, label: "Instagram", value: "@noor.house", href: "#" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={0.3 + i * 0.08}>
              <a
                href={c.href}
                className="block border border-amber/15 rounded-2xl p-8 hover:border-amber/50 hover:bg-background transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full border border-amber/30 flex items-center justify-center mb-6 mx-auto text-amber group-hover:bg-amber group-hover:text-amber-foreground transition-all duration-500">
                  <c.icon size={16} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-2">{c.label}</div>
                <div className="font-display text-lg">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6} className="mt-24">
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/40">
            © {new Date().getFullYear()} NOOR · House of Dry Fruits · Pampore · India
          </div>
        </Reveal>
      </div>
    </section>
  );
}
