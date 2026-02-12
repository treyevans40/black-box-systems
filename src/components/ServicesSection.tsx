import {
  Cog,
  Monitor,
  Zap,
  CheckSquare,
  Shield,
  Box,
  Network,
  FileText,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Controls Engineering Design Services",
    description: "Core control system design deliverables that reduce project risk, align all trades, and support coordinated execution.",
  },
  {
    icon: Monitor,
    title: "Controls Engineering Implementation",
    description: "PLC/SCADA/HMI programming, validation, FAT/SAT, and system integration.",
  },
  {
    icon: Zap,
    title: "Electrical Installation (Controls)",
    description: "Controls-focused electrical installation aligned with engineered designs and project standards.",
  },
  {
    icon: CheckSquare,
    title: "Commissioning & Startup Support",
    description: "Commissioning, logic validation, functional testing, and turnover readiness for operations.",
  },
  {
    icon: Shield,
    title: "Mission-Critical Commissioning",
    description: "End-to-end commissioning for data centers, healthcare, and critical infrastructure;-- covering L1–L4 levels, Integrated Systems Testing (IST), failure scenario validation, redundancy verification, and full load transfer performance testing.",
  },
  {
    icon: Wrench,
    title: "BIM & 3D Coordination",
    description: "System routing, clash avoidance, model integration, and coordinated trade workflows.",
  },
  {
    icon: Box,
    title: "Panel Fabrication",
    description: "UL508A / NOM-certified control panel design and fabrication aligned with project standards and site requirements.",
  },
  {
    icon: Network,
    title: "Network Architecture & OT Infrastructure",
    description: "Controls network design, switch configuration, IP schema, segmentation, and secure field connectivity.",
  },
  {
    icon: FileText,
    title: "Documentation & Turnover Packages",
    description: "I/O matrices, workflow scripts, redlines, O&M documentation, and full as-built systems packages.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-primary">
      <div className="container py-20">
        <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">Our Services</p>
        <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-4">
          Mission-critical engineering, integration & field execution.
        </h2>
        <p className="text-primary-foreground/60 max-w-2xl mb-14">
          Every engagement is scoped to deliver a clean, operator-ready handoff. No ambiguity in deliverables, no gaps in accountability.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-primary-foreground/10 rounded p-6 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-colors group"
            >
              <service.icon className="h-5 w-5 text-copper mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold text-primary-foreground mb-3 group-hover:text-copper transition-colors">{service.title}</h3>
              <p className="text-sm text-primary-foreground/55 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
