import { createFileRoute, Link } from "@tanstack/react-router";
import { getService } from "@/lib/services";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealText, DrawLine } from "@/components/Reveal";
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

  return (
    <div className="bg-white text-black min-h-screen">
      <Header light />
      <main className="pt-48 pb-20">
        {/* Title Section */}
        <section className="px-6 md:px-10 mb-16">
          <div className="max-w-[1400px] mx-auto text-center">
            <Reveal className="inline-block mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-black text-sm uppercase tracking-widest hover:gap-4 transition-all font-bold">
                <ArrowLeft size={16} /> Back
              </Link>
            </Reveal>
            <Reveal>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {service.tagline}
              </p>
            </Reveal>
            <div className="mt-12 w-full h-[60vh] rounded-lg overflow-hidden shadow-2xl">
              <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="px-6 md:px-10 py-20 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
             <div className="space-y-10">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img src={service.image} className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-black" />
                  <div className="w-4 h-4 rounded-full bg-gray-200" />
                </div>
             </div>

             <div className="space-y-12">
               <p className="text-xl leading-relaxed text-gray-700">
                 {service.description}
               </p>
               
               <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                 {service.stats.map((stat, i) => (
                   <div key={i} className="border-l-4 border-black pl-6">
                     <div className="text-4xl font-bold mb-1">{stat.value}</div>
                     <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* Operational Portfolio */}
        <section className="px-6 md:px-10 py-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto">
             <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">Operational Portfolio</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
               {service.highlights.map((h, i) => (
                 <div key={i} className="bg-white p-10 shadow-sm rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-black font-bold mb-6 text-xl">0{i+1}.</div>
                    <p className="text-gray-700 leading-relaxed">{h}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 md:px-10 py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square rounded-sm overflow-hidden bg-gray-100">
                  <img src={service.image} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <div className="w-4 h-4 rounded-full bg-black" />
              <div className="w-4 h-4 rounded-full bg-gray-200" />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 md:px-10 py-24 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto text-center">
             <h3 className="text-2xl font-bold mb-12">For {service.title} Related Enquiries Please Contact</h3>
             <div className="max-w-xl mx-auto space-y-4">
               <div className="text-3xl font-bold">{service.contact.name}</div>
               <div className="text-black uppercase tracking-widest text-sm font-bold mb-8">{service.contact.role}</div>
               
               <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
                 <a href={`mailto:${service.contact.email}`} className="flex items-center justify-center gap-3 text-gray-700 hover:text-black transition-colors">
                   <Mail size={20} /> {service.contact.email}
                 </a>
                 <a href={`tel:${service.contact.phone}`} className="flex items-center justify-center gap-3 text-gray-700 hover:text-black transition-colors">
                   <Phone size={20} /> {service.contact.phone}
                 </a>
               </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
