import { createFileRoute, Link } from "@tanstack/react-router";
import { getService } from "@/lib/services";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, Counter } from "@/components/Reveal";
import { Text3D } from "@/components/Text3D";
import { Card3D } from "@/components/Card3D";
import { CinematicMedia } from "@/components/CinematicMedia";
import { ArrowLeft, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw new Error("Service not found");
    return { service };
  },
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main className="pt-36 pb-20">
        {/* Title Section */}
        <section className="px-6 md:px-10 mb-16 overflow-hidden">
          <div className="max-w-[1400px] mx-auto text-center">
            <Reveal className="inline-block mb-10" width="100%">
              <Link to="/" className="inline-flex items-center gap-2 text-amber text-sm uppercase tracking-widest hover:gap-4 transition-all font-bold">
                <ArrowLeft size={16} /> Back to divisions
              </Link>
            </Reveal>
            
            <div className="mb-12">
              <Text3D 
                text={service.title} 
                className="text-5xl md:text-8xl font-bold tracking-tight block" 
                depth={10} 
                amber
                blinking 
              />
            </div>
            
            <Reveal delay={0.1} width="100%">
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-16">
                {service.tagline}
              </p>
            </Reveal>

            <div ref={heroRef} className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] perspective-1000 border border-black/5">
               <motion.div style={{ y: heroY, scale: heroScale }} className="w-full h-full">
                  <CinematicMedia src={service.image} videoSrc={service.video} alt={service.title} />
               </motion.div>
               <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="px-6 md:px-10 py-24 border-t border-black/5">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
             <Reveal className="space-y-12">
                <CinematicMedia src={service.image} videoSrc={service.video} alt={service.title} />
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-px bg-amber" />
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber">Premium Standards</div>
                </div>
             </Reveal>

             <div className="space-y-16">
               <Reveal delay={0.2} width="100%">
                 <p className="text-2xl leading-relaxed text-foreground font-light italic opacity-90">
                   {service.description}
                 </p>
               </Reveal>
               
               <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                 {service.stats.map((stat: { label: string; value: string }, i: number) => (
                   <Reveal key={i} delay={0.3 + i * 0.1}>
                     <div className="group border-l-4 border-amber pl-8 hover:pl-10 transition-all duration-500">
                       <div className="text-5xl font-display text-red-grad mb-3"><Counter value={stat.value} /></div>
                       <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold group-hover:text-amber transition-colors">{stat.label}</div>
                     </div>
                   </Reveal>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* Operational Portfolio */}
        <section className="px-6 md:px-10 py-32 bg-surface/30">
          <div className="max-w-[1400px] mx-auto">
             <div className="text-center mb-24">
               <Text3D text="Operational Portfolio" className="text-4xl md:text-7xl font-bold block" depth={6} amber blinking />
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {service.highlights.map((h: string, i: number) => (
                 <Reveal key={i} delay={i * 0.1}>
                   <Card3D className="h-full">
                     <div className="bg-surface/50 p-12 h-full shadow-2xl rounded-2xl border border-black/5 hover:border-amber/30 transition-all duration-700 group">
                        <div className="text-amber font-bold mb-8 text-2xl opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}.</div>
                        <p className="text-foreground/80 leading-relaxed text-lg font-light">{h}</p>
                     </div>
                   </Card3D>
                 </Reveal>
               ))}
             </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 md:px-10 py-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[...Array(6)].map((_, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <CinematicMedia src={service.image} videoSrc={service.video} alt={service.title} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 md:px-10 py-32 border-t border-black/5 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-amber to-transparent" />
          
          <div className="max-w-[1400px] mx-auto text-center">
             <Reveal className="mb-16">
               <h3 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-muted-foreground">
                  For <span className="text-foreground font-bold">{service.title}</span> Enquiries
               </h3>
             </Reveal>

             <div className="max-w-2xl mx-auto space-y-4">
               <Reveal delay={0.2} width="100%">
                 <div className="text-4xl md:text-6xl font-display text-red-grad mb-4 tracking-tight">{service.contact.name}</div>
               </Reveal>
               <Reveal delay={0.3} width="100%">
                 <div className="text-amber uppercase tracking-[0.4em] text-xs font-bold mb-12">{service.contact.role}</div>
               </Reveal>
               
               <div className="flex flex-col md:flex-row justify-center gap-12 pt-12 border-t border-black/5">
                 <Reveal delay={0.4}>
                   <a href={`mailto:${service.contact.email}`} className="group flex items-center justify-center gap-4 text-xl text-foreground/80 hover:text-amber transition-all">
                     <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-amber group-hover:bg-amber/5 transition-all">
                        <Mail size={20} />
                     </div>
                     <span className="font-light">{service.contact.email}</span>
                   </a>
                 </Reveal>
                 <Reveal delay={0.5}>
                   <a href={`tel:${service.contact.phone}`} className="group flex items-center justify-center gap-4 text-xl text-foreground/80 hover:text-amber transition-all">
                     <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-amber group-hover:bg-amber/5 transition-all">
                        <Phone size={20} />
                     </div>
                     <span className="font-light">{service.contact.phone}</span>
                   </a>
                 </Reveal>
               </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
