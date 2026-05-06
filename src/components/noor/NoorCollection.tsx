import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, type Product } from "@/lib/products";
import { Reveal } from "@/components/Reveal";
import { Card3D } from "@/components/Card3D";
import { Text3D } from "@/components/Text3D";
import { ArrowUpRight, X } from "lucide-react";

export function NoorCollection() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="collection" className="relative px-6 md:px-10 py-28 md:py-40 bg-background">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-amber text-[10px] uppercase tracking-[0.4em] mb-6">
                <span className="amber-line" /> The Collection · Six harvests
              </div>
            </Reveal>
            <Text3D
              text="A library of"
              className="font-display text-5xl md:text-7xl block leading-[1]"
              depth={6}
              blinking
            />
            <Text3D
              text="rare harvests."
              className="font-display text-5xl md:text-7xl italic block leading-[1] mt-1"
              depth={6}
              amber
              italic
              blinking
            />
          </div>
          <Reveal delay={0.2} width="fit-content">
            <p className="max-w-md text-foreground/70 leading-relaxed font-light">
              Each tin tells a story of altitude, soil and patience. Tap any harvest to
              uncover its origin, tasting notes and pairings.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Card3D className="h-full">
                <button
                  onClick={() => setSelected(p)}
                  className="text-left w-full h-full bg-surface/60 border border-amber/10 rounded-2xl overflow-hidden group relative hover:border-amber/40 transition-colors duration-700"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute top-5 left-5 text-amber font-display italic text-3xl">{p.index}</div>
                    <div className="absolute top-5 right-5 w-10 h-10 rounded-full border border-amber/40 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-amber-foreground group-hover:rotate-45 transition-all duration-500">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="p-7 md:p-8">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-amber mb-3">{p.origin}</div>
                    <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3">{p.name}</h3>
                    <p className="text-foreground/60 leading-relaxed font-light text-sm">{p.tagline}</p>
                    <div className="mt-6 pt-6 border-t border-amber/10 flex items-center justify-between">
                      <span className="text-amber font-display text-xl">{p.price}</span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">{p.weight}</span>
                    </div>
                  </div>
                </button>
              </Card3D>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProductDetail product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-10 w-12 h-12 rounded-full border border-amber/40 flex items-center justify-center text-amber hover:bg-amber hover:text-amber-foreground transition-all duration-500"
      >
        <X size={18} />
      </button>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen px-6 md:px-10 py-24 md:py-32 max-w-[1500px] mx-auto"
      >
        <div className="text-amber text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
          <span className="amber-line" /> {product.origin}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              {product.name.split(" ").map((w, i) => (
                <span key={i} className={`inline-block mr-4 ${i % 2 ? "italic text-amber" : ""}`}>
                  {w}
                </span>
              ))}
            </h2>
            <p className="font-display italic text-2xl md:text-3xl text-foreground/70 mb-10 max-w-2xl">
              {product.tagline}
            </p>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-amber/10">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="mt-10 text-lg leading-relaxed text-foreground/80 font-light max-w-2xl">
              {product.description}
            </p>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            <div className="border border-amber/15 rounded-2xl p-8 md:p-10 bg-surface/40">
              <div className="flex items-baseline justify-between mb-2">
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">Price</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">{product.weight}</div>
              </div>
              <div className="font-display text-5xl text-amber mb-8">{product.price}</div>
              <button className="btn-amber w-full justify-center">Add to gift box <span>→</span></button>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-amber mb-5">Tasting Notes</div>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((n) => (
                  <span key={n} className="px-4 py-2 border border-amber/20 rounded-full text-sm font-light">
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-amber mb-5">Pairs Beautifully With</div>
              <ul className="space-y-3">
                {product.pairings.map((p, i) => (
                  <li key={p} className="flex items-baseline gap-4 border-b border-amber/10 pb-3">
                    <span className="text-amber font-display text-sm">0{i + 1}</span>
                    <span className="font-light">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-amber mb-5">Per 100g</div>
              <div className="grid grid-cols-2 gap-px bg-amber/10 border border-amber/10 rounded-2xl overflow-hidden">
                {product.nutrition.map((n) => (
                  <div key={n.label} className="bg-background p-5">
                    <div className="font-display text-2xl text-amber">{n.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mt-1">{n.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
