const CTASection = () => {
  return (
    <section id="contact" className="bg-copper">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-4">
            Let's talk about what's next — or what's not working now.
          </h2>
          <p className="text-primary-foreground/80 mb-10">
            Planning a new build or solving persistent controls issues, we start by listening. Tell us your constraints. We’ll tell you what’s realistic.
          </p>
          <a
            href="mailto:info@blackboxengineering.com"
            className="inline-flex items-center justify-center px-10 py-3.5 bg-primary text-primary-foreground font-medium rounded hover:bg-navy-light transition-colors"
          >
            Request Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
