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
            <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">Delivery Model</p>
            <h2 className="font-display text-2xl lg:text-3xl mb-4">
              Structured execution. Clear accountability.
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg">
              We reduce your exposure from design through turnover. Every phase has defined outputs, review gates, and a single point of responsibility.
            </p>
            <div className="space-y-8">
              {phases.map((phase, i) => (
                <div key={phase.step} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-copper bg-card w-8 h-8 rounded-full flex items-center justify-center border border-border">
                      {phase.step}
                    </span>
                    {i < phases.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
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
