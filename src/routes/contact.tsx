import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
import { pageImages } from "@/lib/pages";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — OFSAT" },
      { name: "description", content: "Get in touch with OFSAT operations, sales and HSE teams across the GCC." },
      { property: "og:title", content: "Contact — OFSAT" },
      { property: "og:description", content: "Get in touch with OFSAT teams across the GCC." },
      { property: "og:image", content: pageImages.contact },
    ],
  }),
});

const departments = [
  { name: "General Enquiries", email: "contact@ofsat.example", phone: "+968 245 90305" },
  { name: "Operations", email: "operations@ofsat.example", phone: "+968 9910 2739" },
  { name: "Sales & Partnerships", email: "sales@ofsat.example", phone: "+968 9910 4421" },
  { name: "HSE & Compliance", email: "hse@ofsat.example", phone: "+968 9910 5532" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageTransition>
      <Header />
      <main>
        <PageHero
          eyebrow="Get in touch"
          title="Let's build."
          tagline="Whether you have a project to plan or a partnership to discuss, the OFSAT team is ready to support you."
          image={pageImages.contact}
        />

        <SectionDivider label="Reach Us" />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <Text3D as="h2" text="Direct lines." className="font-display text-4xl md:text-5xl block" depth={5} />
                <div className="mt-8 space-y-px bg-border">
                  {departments.map((d, i) => (
                    <Reveal key={d.name} delay={i * 0.08}>
                      <div className="bg-background p-6 group hover:bg-surface/40 transition-colors duration-700">
                        <div className="text-xs uppercase tracking-[0.3em] text-amber mb-2">{d.name}</div>
                        <a href={`mailto:${d.email}`} className="block font-display text-xl group-hover:text-amber transition-colors">{d.email}</a>
                        <a href={`tel:${d.phone}`} className="block text-sm text-muted-foreground mt-1">{d.phone}</a>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Text3D as="h2" text="Send a message." className="font-display text-4xl md:text-5xl block" depth={5} />
              <Reveal delay={0.2}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-8 space-y-px bg-border"
                >
                  <div className="grid md:grid-cols-2 gap-px bg-border">
                    <input required placeholder="Your name" className="bg-background p-5 outline-none focus:bg-surface/40 transition-colors text-foreground placeholder:text-muted-foreground" />
                    <input required type="email" placeholder="Email address" className="bg-background p-5 outline-none focus:bg-surface/40 transition-colors text-foreground placeholder:text-muted-foreground" />
                  </div>
                  <input placeholder="Company" className="bg-background p-5 w-full outline-none focus:bg-surface/40 transition-colors text-foreground placeholder:text-muted-foreground" />
                  <select className="bg-background p-5 w-full outline-none focus:bg-surface/40 transition-colors text-foreground">
                    <option>Topic — General enquiry</option>
                    <option>Rig moving</option>
                    <option>Drilling services</option>
                    <option>Power solutions</option>
                    <option>Logistics</option>
                    <option>Partnership</option>
                  </select>
                  <textarea required placeholder="Tell us about your project" rows={6} className="bg-background p-5 w-full outline-none focus:bg-surface/40 transition-colors text-foreground placeholder:text-muted-foreground resize-none" />
                  <div className="bg-background p-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">We typically respond within one business day.</p>
                    <button type="submit" className="btn-amber">
                      {sent ? "Message sent ✓" : "Send message"} <span>→</span>
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
