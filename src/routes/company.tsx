import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal, Counter, DrawLine } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
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
      <main>
        <PageHero
          eyebrow="The Company"
          title="Built in Oman."
          tagline="Since 1984, OFSAT has been engineering the logistics, drilling and power infrastructure that keeps the region's most demanding industries moving."
          image={pageImages.company}
        />

        <SectionDivider label="Our Story" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Text3D as="h2" text="Four decades." className="font-display text-5xl md:text-6xl block" depth={6} />
              <Text3D as="h2" text="One mission." className="font-display text-5xl md:text-6xl block" italic amber depth={6} delay={0.15} />
            </div>
            <div className="lg:col-span-7 space-y-8">
              <Reveal delay={0.2}>
                <p className="text-lg leading-relaxed text-foreground/80">
                  OFSAT Ltd. was founded in 1984 to make a mark in Oman's industrial sector. From a single yard in Muscat we have grown into a regional partner with offices across the Middle East and an international network of agents — engineered around precision, safety and long-term partnership.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
                {stats.map((s, i) => (
                  <Reveal key={s.l} delay={0.3 + i * 0.08}>
                    <div className="bg-background p-6">
                      <div className="font-display text-4xl text-amber-grad mb-2"><Counter value={s.v} /></div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                      <DrawLine className="w-12 h-px text-amber/60 mt-3" delay={0.5 + i * 0.1} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider label="Timeline" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <Text3D as="h2" text="A history in milestones." className="font-display text-4xl md:text-5xl mb-16 block" depth={5} />
            </Reveal>
            <div className="space-y-px bg-border">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <div className="bg-background p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 group hover:bg-surface/40 transition-colors duration-700">
                    <div className="md:col-span-2 font-display text-4xl text-amber-grad">{t.year}</div>
                    <div className="md:col-span-3 font-display text-xl">{t.title}</div>
                    <div className="md:col-span-7 text-foreground/75 leading-relaxed">{t.text}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider label="Leadership" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <Text3D as="h2" text="People behind the work." className="font-display text-4xl md:text-5xl mb-16 block" depth={5} />
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {leadership.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.1}>
                  <div className="bg-background p-8 h-full">
                    <div className="aspect-square mb-6 bg-surface flex items-center justify-center">
                      <span className="font-display text-7xl text-amber-grad italic">{p.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-amber mb-2">{p.role}</div>
                    <h3 className="font-display text-2xl mb-3">{p.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                  </div>
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
