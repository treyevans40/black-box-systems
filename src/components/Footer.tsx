import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-primary-foreground/40">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>{t("footer.copyright")}</span>
            <span className="hidden sm:inline">·</span>
            <span>{t("footer.location")}</span>
          </div>
          <div className="flex gap-6">
            <a href="#industries" className="hover:text-primary-foreground transition-colors">{t("nav.industries")}</a>
            <a href="#services" className="hover:text-primary-foreground transition-colors">{t("nav.services")}</a>
            <a href="#about-us" className="hover:text-primary-foreground transition-colors">{t("nav.about")}</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">{t("nav.contact")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
