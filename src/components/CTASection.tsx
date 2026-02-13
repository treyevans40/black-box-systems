import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-copper">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-4">
            {t("cta.headline")}
          </h2>
          <p className="text-primary-foreground/80 mb-10">
            {t("cta.description")}
          </p>
          <a
            href="mailto:info@blackboxengineering.com"
            className="inline-flex items-center justify-center px-10 py-3.5 bg-primary text-primary-foreground font-medium rounded hover:bg-navy-light transition-colors"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
