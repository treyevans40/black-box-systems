import fieldImage from "@/assets/field-switchboard.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const phaseKeys = [
  { step: "01", titleKey: "delivery.phase1.title", descKey: "delivery.phase1.desc" },
  { step: "02", titleKey: "delivery.phase2.title", descKey: "delivery.phase2.desc" },
  { step: "03", titleKey: "delivery.phase3.title", descKey: "delivery.phase3.desc" },
  { step: "04", titleKey: "delivery.phase4.title", descKey: "delivery.phase4.desc" },
];

const DeliverySection = () => {
  const { t } = useLanguage();

  return (
    <section id="delivery" className="bg-background border-b border-border">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">{t("delivery.label")}</p>
            <h2 className="font-display text-2xl lg:text-3xl mb-4">{t("delivery.headline")}</h2>
            <p className="text-muted-foreground mb-10 max-w-lg">{t("delivery.description")}</p>
            <div className="space-y-8">
              {phaseKeys.map((phase, i) => (
                <div key={phase.step} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-copper bg-card w-8 h-8 rounded-full flex items-center justify-center border border-border">
                      {phase.step}
                    </span>
                    {i < phaseKeys.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-sm font-semibold mb-1">{t(phase.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(phase.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={fieldImage} alt="Engineer working on switchboard panel" className="w-full rounded object-cover aspect-[3/4]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
