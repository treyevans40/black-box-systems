import { Building2, Server, HardHat, BarChart3 } from "lucide-react";

const markets = [
  {
    icon: Server,
    title: "Data Centers",
    description: "Mission-critical cooling, power distribution, and BMS integration for hyperscale and colocation facilities.",
  },
  {
    icon: Building2,
    title: "Critical Infrastructure",
    description: "Controls and automation for facilities where downtime has operational or regulatory consequences.",
  },
  {
    icon: HardHat,
    title: "General Contractors",
    description: "Embedded controls engineering support from design assist through commissioning and turnover.",
  },
  {
    icon: BarChart3,
    title: "Industrial Programs",
    description: "Multi-site rollouts and capital programs requiring consistent scope execution and documentation.",
  },
];

const MarketsSection = () => {
  return (
    <section id="markets" className="bg-background border-b border-border">
      <div className="container py-20">
        <p className="text-sm font-medium text-steel uppercase tracking-widest mb-3">Markets</p>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
          Built for teams that manage risk, not just projects.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          We work with owner-operators and program teams responsible for infrastructure where controls failures carry real consequences.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market) => (
            <div
              key={market.title}
              className="bg-card border border-border rounded p-6 hover:border-steel-muted transition-colors"
            >
              <market.icon className="h-5 w-5 text-steel mb-4" strokeWidth={1.5} />
              <h3 className="text-base font-semibold mb-2">{market.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{market.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
