import {
  Server,
  Factory,
  Package,
  Flame,
  UtensilsCrossed,
  Gauge,
} from "lucide-react";

const industries = [
  {
    icon: Server,
    title: "Mission-Critical Infrastructure",
    description: "Data centers, hospitals, telecom, and facilities where downtime carries operational or regulatory consequences.",
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    description: "Process control, machine integration, and production line automation for discrete and continuous manufacturing.",
  },
  {
    icon: Package,
    title: "Materials Handling & Logistics",
    description: "Conveyor systems, sortation, warehouse automation, and distribution center controls.",
  },
  {
    icon: Flame,
    title: "Energy / Oil & Gas",
    description: "Upstream, midstream, and downstream controls including well monitoring, pipeline SCADA, and refinery automation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Batch processing, CIP systems, recipe management, and compliance-driven controls for production environments.",
  },
  {
    icon: Gauge,
    title: "Process Controls Engineering",
    description: "Instrumentation, control system design, and process optimization for facilities managing continuous or batch operations — from upstream production and pipeline monitoring to water treatment, distribution, and environmental compliance.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-background border-b border-border">
      <div className="container py-20">
        <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">Industries</p>
        <h2 className="font-display text-2xl lg:text-3xl mb-4">
          Built for teams that manage risk, not just projects.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-14">
          We work with owner-operators and program teams responsible for infrastructure where controls failures carry real consequences.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-background p-8 hover:bg-card transition-colors group"
            >
              <industry.icon className="h-5 w-5 text-copper mb-5" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold mb-2 group-hover:text-navy-light transition-colors">{industry.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
