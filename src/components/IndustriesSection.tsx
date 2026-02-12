import { Server, Factory, Package, Flame, UtensilsCrossed, Gauge } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const industryKeys = [
  { icon: Server, titleKey: "industries.mci.title", descKey: "industries.mci.desc" },
  { icon: Factory, titleKey: "industries.mfg.title", descKey: "industries.mfg.desc" },
  { icon: Package, titleKey: "industries.mhl.title", descKey: "industries.mhl.desc" },
  { icon: Flame, titleKey: "industries.energy.title", descKey: "industries.energy.desc" },
  { icon: UtensilsCrossed, titleKey: "industries.fb.title", descKey: "industries.fb.desc" },
  { icon: Gauge, titleKey: "industries.process.title", descKey: "industries.process.desc" },
];

const IndustriesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="industries" className="bg-background border-b border-border">
      <div className="container py-20">
        <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">{t("industries.label")}</p>
        <h2 className="font-display text-2xl lg:text-3xl mb-4">{t("industries.headline")}</h2>
        <p className="text-muted-foreground max-w-2xl mb-14">{t("industries.description")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {industryKeys.map((ind) => (
            <div key={ind.titleKey} className="bg-background p-8 hover:bg-card transition-colors group">
              <ind.icon className="h-5 w-5 text-copper mb-5" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold mb-2 group-hover:text-navy-light transition-colors">{t(ind.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(ind.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
