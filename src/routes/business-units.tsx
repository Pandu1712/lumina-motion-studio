import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal } from "@/components/Reveal";
import { ServiceSection } from "@/components/ServiceSection";
import { ScrollTracker } from "@/components/ScrollTracker";
import { services } from "@/lib/services";
import heroImg from "@/assets/hero-rig.jpg";

export const Route = createFileRoute("/business-units")({
  component: UnitsPage,
  head: () => ({
    meta: [
      { title: "Business Units — OFSAT" },
      { name: "description", content: "Six specialised divisions delivering rig moving, drilling, generators, trucks and logistics across the GCC." },
      { property: "og:title", content: "Business Units — OFSAT" },
      { property: "og:description", content: "Six specialised divisions across the GCC." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

function UnitsPage() {
  useEffect(() => {
    // Handle initial hash navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Wait for page transition
    }
  }, []);

  return (
    <PageTransition>
      <Header />
      <ScrollTracker />
      
      <main className="relative">
        <PageHero
          eyebrow="Business Units"
          title="Six divisions."
          tagline="From rig moves across the Omani desert to fleet operations in Saudi Arabia, every business unit is engineered around safety, efficiency and long-term partnership."
          image={heroImg}
        />

        <SectionDivider label="Index" />

        {/* Directory Header (Quick Links) */}
        <section className="py-24 px-6 md:px-10 border-b border-border bg-surface/20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.05} className="bg-background">
                  <button 
                    onClick={() => document.getElementById(s.slug)?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full text-left p-8 group hover:bg-surface transition-colors h-full flex flex-col justify-between aspect-square md:aspect-auto"
                  >
                    <div>
                      <div className="text-amber text-[10px] tracking-[0.4em] uppercase mb-4">{s.index}</div>
                      <div className="font-display text-lg leading-tight group-hover:text-amber transition-colors">{s.title}</div>
                    </div>
                    <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      Scroll to view →
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider label="Operations" />

        {/* Detailed Sections */}
        <div className="relative">
          {services.map((s) => (
            <ServiceSection key={s.slug} service={s} />
          ))}
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
}
