import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const bullets = [
    t("about.bullet1"),
    t("about.bullet2"),
    t("about.bullet3"),
    t("about.bullet4"),
  ];

  return (
    <section id="about-us" className="bg-card border-b border-border">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">{t("about.label")}</p>
            <h2 className="font-display text-2xl lg:text-3xl mb-4">{t("about.headline")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">{t("about.p1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">{t("about.p2")}</p>
            <ul className="space-y-4 mb-10">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 rounded-sm bg-copper flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-3 text-sm text-muted-foreground border-t border-border pt-6">
              <MapPin className="h-4 w-4 text-copper mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-0.5">{t("about.hq")}</p>
                <p>Gral. Benjamín Hill 97-2, Hipódromo Condesa,<br />Cuauhtémoc, 06170 Ciudad de México, CDMX</p>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden border border-border">
            <iframe
              title="Black Box Engineering Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661!2d-99.17479!3d19.41268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff76c1136b2f%3A0x5a7dbfb34e4e8b0!2sCalle+Gral.+Benjam%C3%ADn+Hill+97%2C+Hip%C3%B3dromo%2C+Cuauht%C3%A9moc%2C+06100+Ciudad+de+M%C3%A9xico%2C+CDMX%2C+Mexico!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
