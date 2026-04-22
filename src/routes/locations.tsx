import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
import { pageImages, locations } from "@/lib/pages";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Locations — OFSAT" },
      { name: "description", content: "OFSAT operates from Muscat, Dammam, Abu Dhabi and Ghala — strategically placed across the GCC." },
      { property: "og:title", content: "Locations — OFSAT" },
      { property: "og:description", content: "Strategically placed across the GCC." },
      { property: "og:image", content: pageImages.locations },
    ],
  }),
});

function LocationsPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <PageHero
          eyebrow="Where we operate"
          title="Across the GCC."
          tagline="Four operational hubs across Oman, Saudi Arabia and the UAE — each a stone's throw from the field."
          image={pageImages.locations}
        />

        <SectionDivider label="Offices" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-px bg-border">
            {locations.map((l, i) => (
              <Reveal key={l.city} delay={i * 0.08}>
                <div className="bg-background p-10 group hover:bg-surface/40 transition-colors duration-700">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-amber mb-2">{l.type}</div>
                      <Text3D as="h3" text={l.city} className="font-display text-5xl block" depth={5} />
                      <div className="font-display italic text-red-grad text-2xl mt-2">{l.country}</div>
                    </div>
                    <div className="w-16 h-16 border border-amber/40 rotate-45 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rotate-45 bg-amber" />
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-4">
                      <div className="text-muted-foreground w-20 uppercase tracking-wider text-xs">Address</div>
                      <div className="text-foreground/80">{l.address}</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground w-20 uppercase tracking-wider text-xs">Phone</div>
                      <div className="text-foreground/80">{l.phone}</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground w-20 uppercase tracking-wider text-xs">Email</div>
                      <div className="text-amber">{l.email}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
