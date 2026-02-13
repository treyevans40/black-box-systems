import { Cog, Monitor, Zap, CheckSquare, Shield, Box, Network, FileText, Wrench } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const serviceKeys = [
  { icon: Cog, titleKey: "services.design.title", descKey: "services.design.desc" },
  { icon: Monitor, titleKey: "services.implementation.title", descKey: "services.implementation.desc" },
  { icon: Zap, titleKey: "services.electrical.title", descKey: "services.electrical.desc" },
  { icon: CheckSquare, titleKey: "services.commissioning.title", descKey: "services.commissioning.desc" },
  { icon: Shield, titleKey: "services.mccx.title", descKey: "services.mccx.desc" },
  { icon: Wrench, titleKey: "services.bim.title", descKey: "services.bim.desc" },
  { icon: Box, titleKey: "services.panel.title", descKey: "services.panel.desc" },
  { icon: Network, titleKey: "services.network.title", descKey: "services.network.desc" },
  { icon: FileText, titleKey: "services.docs.title", descKey: "services.docs.desc" },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-primary">
      <div className="container py-20">
        <p className="text-xs font-semibold text-copper uppercase tracking-[0.2em] mb-3">{t("services.label")}</p>
        <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-4">{t("services.headline")}</h2>
        <p className="text-primary-foreground/60 max-w-2xl mb-14">{t("services.description")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((svc) => (
            <div key={svc.titleKey} className="border border-primary-foreground/10 rounded p-6 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-colors group">
              <svc.icon className="h-5 w-5 text-copper mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold text-primary-foreground mb-3 group-hover:text-copper transition-colors">{t(svc.titleKey)}</h3>
              <p className="text-sm text-primary-foreground/55 leading-relaxed">{t(svc.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
