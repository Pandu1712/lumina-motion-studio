import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal, DrawLine } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
import { pageImages, commitments } from "@/lib/pages";

export const Route = createFileRoute("/commitments")({
  component: CommitmentsPage,
  head: () => ({
    meta: [
      { title: "Commitments — OFSAT" },
      { name: "description", content: "OFSAT's six core commitments: safety, environment, local content, partnerships, improvement and ethics." },
      { property: "og:title", content: "Commitments — OFSAT" },
      { property: "og:description", content: "Safety, environment, local content, partnerships, improvement and ethics." },
      { property: "og:image", content: pageImages.commitments },
    ],
  }),
});

const certs = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "OHSAS 18001"];

function CommitmentsPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Commitments"
          title="Built on principle."
          tagline="Six commitments shape every operation at OFSAT — from how we plan a rig move to how we hire, train and partner across the GCC."
          image={pageImages.commitments}
        />

        <SectionDivider label="What we stand for" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-px bg-border">
            {commitments.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.06}>
                <div className="bg-background p-8 md:p-10 h-full group hover:bg-surface/50 transition-colors duration-700">
                  <div className="flex items-start gap-6">
                    <div className="font-display text-amber text-3xl">{c.code}</div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-amber transition-colors duration-500">{c.title}</h3>
                      <p className="text-foreground/75 leading-relaxed">{c.text}</p>
                      <DrawLine className="w-16 h-px text-amber/60 mt-6" delay={0.3 + i * 0.05} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider label="Certified" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto text-center">
            <Reveal>
              <Text3D as="h2" text="Independently certified." className="font-display text-4xl md:text-5xl mb-12 block" depth={5} />
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {certs.map((c, i) => (
                <Reveal key={c} delay={i * 0.1}>
                  <div className="bg-background p-10">
                    <div className="font-display text-2xl text-amber-grad">{c}</div>
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
