import { Reveal } from "./Reveal";
import { Text3D } from "./Text3D";
import { Card3D } from "./Card3D";

const news = [
  {
    date: "March 2025",
    cat: "Operations",
    title: "Successful recertification according to ISO 14001 and 22000",
    excerpt: "OFSAT continues its commitment to environmental management and food-safety standards across all sites.",
  },
  {
    date: "January 2025",
    cat: "Milestone",
    title: "Looking back at our four-decade journey",
    excerpt: "From a single-yard operation in 1984 to a regional powerhouse — a retrospective on what built OFSAT.",
  },
  {
    date: "December 2024",
    cat: "Expansion",
    title: "OFSAT Saudi crosses 300 specialised units in the Kingdom",
    excerpt: "A landmark for our KSA team as we deepen support for major operators across the Eastern Province.",
  },
];

export function News() {
  return (
    <section id="news" className="py-12 md:py-20 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6 text-amber text-xs uppercase tracking-[0.4em]">
                <span className="amber-line" /> News & Stories
              </div>
            </Reveal>
            <Text3D text="Stay tuned." className="font-display text-5xl md:text-6xl block" depth={6} blinking />
          </div>
          <Reveal delay={0.2}>
            <a href="#" className="btn-ghost">View all stories <span>→</span></a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.1}>
              <Card3D className="h-full">
                <article className="bg-surface/30 p-8 h-full border border-black/5 group cursor-pointer hover:bg-surface/50 transition-colors duration-500 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider mb-6">
                    <span>{n.date}</span>
                    <span className="w-1 h-1 rounded-full bg-amber" />
                    <span className="text-amber font-bold">{n.cat}</span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight mb-4 group-hover:text-amber transition-colors duration-500">
                    {n.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{n.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-8 group-hover:w-16 h-px bg-amber transition-all duration-700" />
                    <span className="text-amber font-bold">Read</span>
                  </div>
                </article>
              </Card3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
