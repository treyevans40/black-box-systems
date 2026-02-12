const services = [
  {
    title: "Controls Design",
    bullets: [
      "P&ID and control narrative development",
      "Panel layout and wiring design",
      "Instrument selection and specification",
      "Sequence of operations documentation",
    ],
  },
  {
    title: "Systems Integration",
    bullets: [
      "PLC / DDC programming and configuration",
      "BMS and SCADA integration",
      "Network architecture and cybersecurity",
      "Third-party system coordination",
    ],
  },
  {
    title: "Commissioning",
    bullets: [
      "Factory and site acceptance testing",
      "Point-to-point verification",
      "Functional performance testing",
      "Integrated systems testing",
    ],
  },
  {
    title: "Project Delivery",
    bullets: [
      "Scope development and procurement support",
      "Submittal and RFI management",
      "Construction administration",
      "As-built and O&M documentation",
    ],
  },
  {
    title: "Owner's Representation",
    bullets: [
      "Technical review and oversight",
      "Vendor evaluation and selection",
      "Standards development",
      "Commissioning management",
    ],
  },
  {
    title: "Retrofit & Optimization",
    bullets: [
      "Existing system assessment",
      "Control strategy optimization",
      "Equipment upgrade planning",
      "Energy and performance analysis",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-primary">
      <div className="container py-20">
        <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">Services</p>
        <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-4">
          Scope clarity before procurement.
        </h2>
        <p className="text-primary-foreground/60 max-w-2xl mb-14">
          Every engagement is scoped to deliver a clean, operator-ready handoff. No ambiguity in deliverables, no gaps in accountability.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-primary-foreground/10 rounded p-6 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-colors"
            >
              <h3 className="text-sm font-semibold text-primary-foreground mb-4">{service.title}</h3>
              <ul className="space-y-2.5">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-primary-foreground/55">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-copper flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
