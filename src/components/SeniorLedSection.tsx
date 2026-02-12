import fieldCables from "@/assets/field-cables.jpg";

const SeniorLedSection = () => {
  return (
    <section className="bg-card border-b border-border">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={fieldCables}
              alt="Senior engineers reviewing cable infrastructure on site"
              className="w-full rounded object-cover aspect-[4/3]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">Who Does the Work</p>
            <h2 className="font-display text-2xl lg:text-3xl mb-4">
              Principal-level involvement on every engagement.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              We are a small, senior-led team. The people who scope your project are the same people who design, program, and commission it. There is no hand-off to junior staff, no learning curve at your expense.
            </p>
            <ul className="space-y-4">
              {[
                "Direct access to decision-makers throughout the project",
                "Consistent technical leadership from scope through turnover",
                "No subcontracted engineering or offshore drafting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 rounded-sm bg-copper flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorLedSection;
