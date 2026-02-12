const CTASection = () => {
  return (
    <section id="contact" className="bg-primary">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-4">
            Let's discuss your next project.
          </h2>
          <p className="text-primary-foreground/60 mb-10">
            We start every engagement with a scope conversation — no obligation, no sales pitch. If there's a fit, we'll define deliverables and a path forward.
          </p>
          <a
            href="mailto:info@blackboxengineering.com"
            className="inline-flex items-center justify-center px-10 py-3.5 bg-copper text-primary-foreground font-medium rounded hover:bg-copper-light transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
