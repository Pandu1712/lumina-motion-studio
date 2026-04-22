import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal, Counter, DrawLine } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
import { Card3D } from "@/components/Card3D";
import { pageImages, timeline, leadership } from "@/lib/pages";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({
    meta: [
      { title: "Company — OFSAT" },
      { name: "description", content: "Four decades of engineering trust across the GCC. Meet the team and history behind OFSAT." },
      { property: "og:title", content: "Company — OFSAT" },
      { property: "og:description", content: "Four decades of engineering trust across the GCC." },
      { property: "og:image", content: pageImages.company },
    ],
  }),
});

const stats = [
  { v: "40+", l: "Years operating" },
  { v: "1,200", l: "Specialists" },
  { v: "3", l: "Countries" },
  { v: "300+", l: "Heavy units" },
];

function CompanyPage() {
  return (
    <PageTransition>
      <Header />
      <main className="bg-background">
        <PageHero
          eyebrow="The Company"
          title="Built in Oman."
          tagline="Since 1984, OFSAT has been engineering the logistics, drilling and power infrastructure that keeps the region's most demanding industries moving."
          image={pageImages.company}
        />

        <SectionDivider label="Our Story" />

        <section className="py-12 md:py-16 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Text3D as="h2" text="Four decades." className="font-display text-5xl md:text-6xl block" depth={6} blinking />
              <Text3D as="h2" text="One mission." className="font-display text-5xl md:text-6xl block" italic amber depth={6} delay={0.15} blinking />
            </div>
            <div className="lg:col-span-7 space-y-10">
              <Reveal delay={0.2}>
                <p className="text-xl leading-relaxed text-foreground/90 font-light">
                  OFSAT Ltd. was founded in 1984 to make a mark in Oman's industrial sector. From a single yard in Muscat we have grown into a regional partner with offices across the Middle East and an international network of agents — engineered around precision, safety and long-term partnership.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s, i) => (
                  <Reveal key={s.l} delay={0.3 + i * 0.08}>
                    <Card3D>
                      <div className="group bg-surface/30 p-6 rounded-lg border border-white/5 hover:bg-surface/50 transition-colors duration-500">
                        <div className="font-display text-5xl text-red-grad mb-2"><Counter value={s.v} /></div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{s.l}</div>
                        <div className="w-8 h-0.5 bg-red-600/30 mt-4 group-hover:w-full transition-all duration-700" />
                      </div>
                    </Card3D>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider label="Timeline" />

        <section className="py-12 md:py-16 px-6 md:px-10">
          <div className="max-w-[1000px] mx-auto">
            <Reveal className="mb-16">
              <Text3D as="h2" text="Milestones of trust." className="font-display text-4xl md:text-5xl block" depth={5} blinking />
            </Reveal>
            
            <div className="space-y-0">
               {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <div className="group relative py-12 border-b border-white/5 hover:border-red-600/30 transition-all duration-500">
                    <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-baseline">
                      <div className="md:col-span-2">
                        <div className="font-display text-5xl md:text-6xl text-red-grad opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                          {t.year}
                        </div>
                      </div>
                      <div className="md:col-span-10">
                        <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-red-600 transition-colors duration-500">
                          {t.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed text-base md:text-lg max-w-2xl font-light">
                          {t.text}
                        </p>
                      </div>
                    </div>
                    {/* Decorative hover line */}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-red-600 transition-all duration-1000 group-hover:w-full" />
                  </div>
                </Reveal>
               ))}
            </div>
          </div>
        </section>

        <SectionDivider label="Leadership" />

        <section className="py-12 md:py-16 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <Reveal className="mb-16">
              <Text3D as="h2" text="People behind the work." className="font-display text-4xl md:text-5xl block" depth={5} blinking />
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.1}>
                  <Card3D className="h-full">
                    <div className="group h-full bg-surface/20 p-6 rounded-xl border border-white/5 hover:bg-surface/30 transition-colors duration-500">
                      <div className="aspect-[4/5] mb-6 bg-surface-elevated flex items-center justify-center overflow-hidden relative border border-white/5 rounded-lg">
                          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                          <span className="font-display text-8xl text-red-grad opacity-10 group-hover:opacity-30 transition-all duration-700 italic scale-125 group-hover:scale-110">
                            {p.name.split(" ").map(n => n[0]).join("")}
                          </span>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-red-600 font-bold mb-3">{p.role}</div>
                      <h3 className="font-display text-2xl mb-4 group-hover:text-red-600 transition-colors duration-500">{p.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">{p.bio}</p>
                    </div>
                  </Card3D>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
