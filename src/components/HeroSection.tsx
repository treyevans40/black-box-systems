import heroImage from "@/assets/hero-panel.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="container relative py-24 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-primary-foreground leading-[1.1] mb-6">
            Controls engineering for infrastructure that cannot fail.
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/60 leading-relaxed mb-4 max-w-xl">
            Designed. Integrated. Commissioned. Documented.
          </p>
          <p className="text-sm text-primary-foreground/40 mb-10">
            Mexico City HQ &bull; Operations in the US &bull; Serving clients globally
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-copper text-primary-foreground font-medium rounded hover:bg-copper-light transition-colors"
            >
              Request Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground font-medium rounded hover:bg-primary-foreground/5 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
