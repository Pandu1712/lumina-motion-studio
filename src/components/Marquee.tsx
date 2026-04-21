const items = [
  "Rig Moving",
  "Power Solutions",
  "Drilling",
  "Heavy Logistics",
  "Kenworth Trucks",
  "Saudi Operations",
  "Supply Yard",
  "PDO Partner",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-border py-10 overflow-hidden bg-background">
      <div className="flex marquee-track gap-16 whitespace-nowrap">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-display text-4xl md:text-6xl text-foreground/30 italic">{t}</span>
            <span className="w-3 h-3 rotate-45 bg-amber/60" />
          </div>
        ))}
      </div>
    </section>
  );
}
