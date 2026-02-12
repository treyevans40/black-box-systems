import heroImage from "@/assets/hero-panel.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-card border-b border-border">
      <div className="container py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-6">
              Controls engineering for infrastructure that cannot fail.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Designed. Integrated. Commissioned. Documented.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded hover:bg-muted transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Engineer commissioning a controls panel in the field"
              className="w-full rounded object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
