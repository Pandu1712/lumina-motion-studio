export function NoorMarquee() {
  const items = [
    "Kashmir Valley",
    "Kerman, Iran",
    "Jordan Valley",
    "Mangaluru Coast",
    "Andean Foothills",
    "Pampore Fields",
    "Single-origin",
    "Cold-cracked",
    "Hand-picked",
  ];
  const loop = [...items, ...items];
  return (
    <section className="border-y border-amber/10 py-8 md:py-10 overflow-hidden bg-surface/40">
      <div className="marquee-track flex gap-16 whitespace-nowrap">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-16 text-2xl md:text-4xl font-display italic text-foreground/40">
            {t}
            <span className="w-2 h-2 rounded-full bg-amber/60" />
          </div>
        ))}
      </div>
    </section>
  );
}
