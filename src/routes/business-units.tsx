import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal } from "@/components/Reveal";
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
  return (
    <PageTransition>
      <Header />
      <main>
        <PageHero
          eyebrow="Business Units"
          title="Six divisions."
          tagline="From rig moves across the Omani desert to fleet operations in Saudi Arabia, every business unit is engineered around safety, efficiency and long-term partnership."
          image={heroImg}
        />

        <SectionDivider label="Explore" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto space-y-px bg-border">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="bg-background grid md:grid-cols-12 gap-6 p-6 md:p-10 group hover:bg-surface/40 transition-colors duration-700 items-center"
                >
                  <div className="md:col-span-1 font-display text-amber-grad text-3xl">{s.index}</div>
                  <div className="md:col-span-3 overflow-hidden aspect-[4/3]">
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                  </div>
                  <div className="md:col-span-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-amber mb-2">{s.category}</div>
                    <h2 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-amber transition-colors duration-500">{s.title}</h2>
                    <p className="text-foreground/75 leading-relaxed">{s.tagline}</p>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <span className="inline-flex items-center gap-2 text-sm text-amber">
                      Discover
                      <span className="w-8 group-hover:w-16 h-px bg-amber transition-all duration-700" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
