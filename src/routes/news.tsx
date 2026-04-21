import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal } from "@/components/Reveal";
import { allNews } from "@/lib/pages";
import textureBg from "@/assets/texture-bg.jpg";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News & Stories — OFSAT" },
      { name: "description", content: "Latest news, milestones and stories from OFSAT operations across Oman, Saudi Arabia and the UAE." },
      { property: "og:title", content: "News & Stories — OFSAT" },
      { property: "og:description", content: "Milestones, partnerships and operational stories." },
      { property: "og:image", content: textureBg },
    ],
  }),
});

function NewsPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <PageHero
          eyebrow="News & Stories"
          title="Stay tuned."
          tagline="Operational milestones, new partnerships and stories from the OFSAT team across the region."
          image={textureBg}
        />

        <SectionDivider label="Latest" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {allNews.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.08}>
                <article className="bg-background p-8 h-full group cursor-pointer hover:bg-surface/40 transition-colors duration-700">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider mb-6">
                    <span>{n.date}</span>
                    <span className="w-1 h-1 rounded-full bg-amber" />
                    <span className="text-amber">{n.cat}</span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight mb-4 group-hover:text-amber transition-colors duration-500">
                    {n.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{n.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-8 group-hover:w-16 h-px bg-amber transition-all duration-700" />
                    <span className="text-amber">Read story</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
