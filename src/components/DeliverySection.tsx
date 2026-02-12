import fieldImage from "@/assets/field-switchboard.jpg";

const phases = [
  { step: "01", title: "Scope & Align", description: "Define deliverables, responsibilities, and success criteria before any work begins." },
  { step: "02", title: "Design & Document", description: "Produce control narratives, drawings, and specifications tied to the approved scope." },
  { step: "03", title: "Integrate & Test", description: "Build, program, and verify systems in controlled conditions before site deployment." },
  { step: "04", title: "Commission & Turn Over", description: "Validate performance on-site and deliver complete, operator-ready documentation." },
];

const DeliverySection = () => {
  return (
    <section id="delivery" className="bg-background border-b border-border">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-medium text-steel uppercase tracking-widest mb-3">Delivery Model</p>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Structured execution. Clear accountability.
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg">
              We reduce your exposure from design through turnover. Every phase has defined outputs, review gates, and a single point of responsibility.
            </p>
            <div className="space-y-6">
              {phases.map((phase) => (
                <div key={phase.step} className="flex gap-4">
                  <span className="text-sm font-semibold text-steel mt-0.5">{phase.step}</span>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={fieldImage}
              alt="Engineer working on switchboard panel"
              className="w-full rounded object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
