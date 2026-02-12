const CTASection = () => {
  return (
    <section id="contact" className="bg-primary">
      <div className="container py-20 text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold text-primary-foreground mb-4">
          Let's discuss your next project.
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          We start every engagement with a scope conversation — no obligation, no sales pitch. If there's a fit, we'll define deliverables and a path forward.
        </p>
        <a
          href="mailto:info@blackboxengineering.com"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary font-medium rounded hover:opacity-90 transition-opacity"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
};

export default CTASection;
