const stats = [
  { k: "35%", v: "average water saved on monitored plots" },
  { k: "7", v: "regional languages supported in-app" },
  { k: "24/7", v: "sensor telemetry with smart alerts" },
  { k: "₹0", v: "setup cost for the farmer — pay per node" },
];

export default function ImpactStats() {
  return (
    <section
      data-testid="impact-stats"
      className="relative border-y border-[#D5D1C5] bg-[#F4F1EA]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#D5D1C5]">
        {stats.map((s, i) => (
          <div key={i} className="py-8 px-4 sm:px-8">
            <div className="font-display text-4xl sm:text-5xl text-[#1B4332]">{s.k}</div>
            <div className="mt-2 text-sm text-[#1A201C]/70 max-w-[180px]">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
