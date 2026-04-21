import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealText, Counter, DrawLine } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";
import { getService, services } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — OFSAT` },
          { name: "description", content: loaderData.service.tagline },
          { property: "og:title", content: `${loaderData.service.title} — OFSAT` },
          { property: "og:description", content: loaderData.service.tagline },
          { property: "og:image", content: loaderData.service.image },
        ]
      : [],
  }),
  component: ServicePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-amber text-xs uppercase tracking-[0.4em] mb-4">404</p>
        <h1 className="font-display text-6xl mb-6">Service not found</h1>
        <Link to="/" className="btn-amber">Back home <span>→</span></Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-foreground">
      <p>{error.message}</p>
    </div>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageTransition>
      <Header />
      <main>
        {/* HERO */}
        <section ref={ref} className="relative h-[90vh] overflow-hidden">
          <motion.div style={{ y, scale }} className="absolute inset-0">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/40" />
          </motion.div>

          <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
            <Reveal delay={0.2}>
              <Link to="/" className="text-xs uppercase tracking-[0.4em] text-muted-foreground hover:text-amber transition-colors mb-8 inline-flex items-center gap-3">
                <span>←</span> Back to all units
              </Link>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex items-center gap-3 mb-6 text-amber text-xs uppercase tracking-[0.4em]">
                <span className="amber-line" /> {service.index} · {service.category}
              </div>
            </Reveal>
            <RevealText
              text={service.title}
              as="h1"
              className="font-display text-[12vw] md:text-[8vw] leading-[0.9]"
              delay={0.4}
            />
            <Reveal delay={0.9} className="mt-6 max-w-2xl">
              <p className="text-xl text-foreground/80 italic font-display">{service.tagline}</p>
            </Reveal>
          </div>
        </section>

        {/* DESCRIPTION + STATS */}
        <section className="py-32 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-amber text-xs uppercase tracking-[0.4em] mb-6">Overview</div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  Built for the most demanding operations.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <p className="text-lg leading-relaxed text-foreground/80">{service.description}</p>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-12">
                {service.stats.map((s: { label: string; value: string }, i: number) => (
                  <Reveal key={s.label} delay={0.3 + i * 0.1}>
                    <div className="bg-background p-6">
                      <div className="font-display text-3xl text-amber-grad mb-2"><Counter value={s.value} /></div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                      <DrawLine className="w-10 h-px text-amber/60 mt-3" delay={0.5 + i * 0.1} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-24 px-6 md:px-10 bg-surface/40">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="text-amber text-xs uppercase tracking-[0.4em] mb-6">Capabilities</div>
              <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-2xl">
                What sets the <span className="italic text-amber-grad">{service.title}</span> team apart.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              {service.highlights.map((h: string, i: number) => (
                <Reveal key={h} delay={i * 0.1}>
                  <div className="flex gap-6 group p-6 border-t border-border hover:bg-background transition-colors duration-700">
                    <div className="font-display text-amber text-2xl">0{i + 1}</div>
                    <p className="text-lg text-foreground/85 leading-relaxed">{h}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="text-amber text-xs uppercase tracking-[0.4em] mb-6">Operational Portfolio</div>
              <h2 className="font-display text-4xl md:text-5xl mb-16">In the field.</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-2">
              {[service.image, service.image, service.image].map((img, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="overflow-hidden aspect-[4/5] group">
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1500ms]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-32 px-6 md:px-10 border-t border-border">
          <div className="max-w-[1400px] mx-auto text-center">
            <Reveal>
              <div className="text-amber text-xs uppercase tracking-[0.4em] mb-6">Get in touch</div>
              <h2 className="font-display text-4xl md:text-6xl mb-12">For {service.title} enquiries.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="font-display text-2xl mb-2">{service.contact.name}</div>
              <div className="text-muted-foreground mb-6">{service.contact.role}</div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href={`mailto:${service.contact.email}`} className="text-amber">{service.contact.email}</a>
                <span className="text-border">·</span>
                <a href={`tel:${service.contact.phone}`} className="text-foreground/80">{service.contact.phone}</a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OTHER UNITS */}
        <section className="py-24 px-6 md:px-10 bg-surface/30">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <h3 className="font-display text-3xl md:text-4xl mb-12">Explore other units</h3>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 0.1}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: o.slug }}
                    className="group block relative aspect-[4/3] overflow-hidden bg-surface border border-border"
                  >
                    <img src={o.image} alt={o.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-90 group-hover:scale-110 transition-all duration-[1200ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <div className="text-xs text-amber uppercase tracking-[0.3em] mb-2">{o.index}</div>
                      <div className="font-display text-2xl">{o.title}</div>
                    </div>
                  </Link>
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
