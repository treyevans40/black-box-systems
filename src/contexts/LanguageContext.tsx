import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.industries": { en: "Industries", es: "Industrias" },
  "nav.services": { en: "Services", es: "Servicios" },
  "nav.delivery": { en: "Delivery", es: "Entrega" },
  "nav.about": { en: "About Us", es: "Nosotros" },
  "nav.contact": { en: "Contact", es: "Contacto" },

  // Hero
  "hero.headline": {
    en: "Controls engineering for infrastructure that cannot fail.",
    es: "Ingeniería de control para infraestructura que no puede fallar.",
  },
  "hero.subheadline": {
    en: "Designed. Integrated. Commissioned. Documented.",
    es: "Diseñado. Integrado. Comisionado. Documentado.",
  },
  "hero.location": {
    en: "Mexico City HQ \u2022 Operations in Texas \u2022 Serving clients globally",
    es: "Sede en CDMX \u2022 Operaciones en Texas \u2022 Servicio global",
  },
  "hero.cta": { en: "Request Consultation", es: "Solicitar Consulta" },
  "hero.services": { en: "View Services", es: "Ver Servicios" },

  // Industries
  "industries.label": { en: "Industries", es: "Industrias" },
  "industries.headline": {
    en: "Built for teams that manage risk, not just projects.",
    es: "Para equipos que gestionan riesgo, no solo proyectos.",
  },
  "industries.description": {
    en: "We work with owner-operators and program teams responsible for infrastructure where controls failures carry real consequences.",
    es: "Trabajamos con operadores y equipos de programa responsables de infraestructura donde las fallas en sistemas de control tienen consecuencias reales.",
  },
  "industries.mci.title": {
    en: "Mission-Critical Infrastructure",
    es: "Infraestructura de Misión Crítica",
  },
  "industries.mci.desc": {
    en: "Data centers, hospitals, telecom, and facilities where downtime carries operational or regulatory consequences.",
    es: "Centros de datos, hospitales, telecomunicaciones e instalaciones donde el tiempo fuera de servicio conlleva consecuencias operativas o regulatorias.",
  },
  "industries.mfg.title": {
    en: "Industrial Manufacturing",
    es: "Manufactura Industrial",
  },
  "industries.mfg.desc": {
    en: "Process control, machine integration, and production line automation for discrete and continuous manufacturing.",
    es: "Control de procesos, integración de maquinaria y automatización de líneas de producción para manufactura discreta y continua.",
  },
  "industries.mhl.title": {
    en: "Materials Handling & Logistics",
    es: "Manejo de Materiales y Logística",
  },
  "industries.mhl.desc": {
    en: "Conveyor systems, sortation, warehouse automation, and distribution center controls.",
    es: "Sistemas de bandas transportadoras, clasificación, automatización de almacenes y controles de centros de distribución.",
  },
  "industries.energy.title": {
    en: "Energy / Oil & Gas",
    es: "Energía / Petróleo y Gas",
  },
  "industries.energy.desc": {
    en: "Upstream, midstream, and downstream controls including well monitoring, pipeline SCADA, and refinery automation.",
    es: "Controles upstream, midstream y downstream incluyendo monitoreo de pozos, SCADA de ductos y automatización de refinerías.",
  },
  "industries.fb.title": {
    en: "Food & Beverage",
    es: "Alimentos y Bebidas",
  },
  "industries.fb.desc": {
    en: "Batch processing, CIP systems, recipe management, and compliance-driven controls for production environments.",
    es: "Procesamiento por lotes, sistemas CIP, gestión de recetas y controles orientados al cumplimiento normativo para entornos de producción.",
  },
  "industries.process.title": {
    en: "Process Controls Engineering",
    es: "Ingeniería de Control de Procesos",
  },
  "industries.process.desc": {
    en: "Instrumentation, control system design, and process optimization for facilities managing continuous or batch operations — from upstream production and pipeline monitoring to water treatment, distribution, and environmental compliance.",
    es: "Instrumentación, diseño de sistemas de control y optimización de procesos para instalaciones con operaciones continuas o por lotes — desde producción upstream y monitoreo de ductos hasta tratamiento de aguas, distribución y cumplimiento ambiental.",
  },

  // Services
  "services.label": { en: "Our Services", es: "Nuestros Servicios" },
  "services.headline": {
    en: "Mission-critical engineering, integration & field execution.",
    es: "Ingeniería de misión crítica, integración y ejecución en campo.",
  },
  "services.description": {
    en: "Every engagement is scoped to deliver a clean, operator-ready handoff. No ambiguity in deliverables, no gaps in accountability.",
    es: "Cada proyecto se define para entregar un sistema listo para operación. Sin ambigüedades en entregables ni vacíos en responsabilidades.",
  },
  "services.design.title": {
    en: "Controls Engineering Design Services",
    es: "Servicios de Diseño en Ingeniería de Control",
  },
  "services.design.desc": {
    en: "Core control system design deliverables that reduce project risk, align all trades, and support coordinated execution.",
    es: "Entregables clave de diseño de sistemas de control que reducen riesgos, alinean a todos los oficios y facilitan la ejecución coordinada.",
  },
  "services.implementation.title": {
    en: "Controls Engineering Implementation",
    es: "Implementación de Ingeniería de Control",
  },
  "services.implementation.desc": {
    en: "PLC/SCADA/HMI programming, validation, FAT/SAT, and system integration.",
    es: "Programación de PLC/SCADA/HMI, validación, FAT/SAT e integración de sistemas.",
  },
  "services.electrical.title": {
    en: "Controls Electrical Installation & Integration",
    es: "Instalación e Integración Eléctrica de Controles",
  },
  "services.electrical.desc": {
    en: "Installation and integration of control panels, field devices, instrumentation, and network infrastructure aligned with engineered control strategies and project standards.",
    es: "Instalación e integración de tableros de control, dispositivos de campo, instrumentación e infraestructura de red, alineados con las estrategias de control y estándares del proyecto.",
  },
  "services.commissioning.title": {
    en: "Commissioning & Startup Support",
    es: "Comisionamiento y Soporte de Arranque",
  },
  "services.commissioning.desc": {
    en: "Control system commissioning, logic validation, functional testing, point-to-point verification, and coordinated startup support aligned with engineered sequences and project requirements.",
    es: "Comisionamiento de sistemas de control, validación de lógica, pruebas funcionales, verificación punto a punto y soporte coordinado de arranque, alineados con las secuencias de control y requisitos del proyecto.",
  },
  "services.mccx.title": {
    en: "Mission-Critical Commissioning",
    es: "Comisionamiento de Infraestructura Crítica",
  },
  "services.mccx.desc": {
    en: "L1–L4 commissioning and Integrated Systems Testing (IST) for mission-critical facilities, including redundancy validation, failure scenario simulation, load transfer verification, and turnover readiness.",
    es: "Comisionamiento L1–L4 y pruebas integrales de sistemas (IST) para instalaciones críticas, incluyendo validación de redundancia, simulación de fallas, verificación de transferencia de carga y preparación para la entrega operativa.",
  },
  "services.bim.title": {
    en: "BIM & 3D Coordination",
    es: "BIM y Coordinación 3D",
  },
  "services.bim.desc": {
    en: "System routing, clash avoidance, model integration, and coordinated trade workflows.",
    es: "Ruteo de sistemas, detección de interferencias, integración de modelos y flujos de trabajo coordinados entre oficios.",
  },
  "services.panel.title": {
    en: "Panel Fabrication",
    es: "Fabricación de Tableros",
  },
  "services.panel.desc": {
    en: "UL508A / NOM-certified control panel design and fabrication aligned with project standards and site requirements.",
    es: "Diseño y fabricación de tableros de control con certificación UL508A / NOM, alineados con estándares del proyecto y requerimientos de sitio.",
  },
  "services.network.title": {
    en: "Network Architecture & OT Infrastructure",
    es: "Arquitectura de Red e Infraestructura OT",
  },
  "services.network.desc": {
    en: "Controls network design, switch configuration, IP schema, segmentation, and secure field connectivity.",
    es: "Diseño de redes de control, configuración de switches, esquema IP, segmentación y conectividad segura en campo.",
  },
  "services.docs.title": {
    en: "Documentation & Turnover Packages",
    es: "Documentación y Paquetes de Entrega",
  },
  "services.docs.desc": {
    en: "I/O matrices, workflow scripts, redlines, O&M documentation, and full as-built systems packages.",
    es: "Matrices de E/S, scripts de flujo, redlines, documentación de O&M y paquetes completos de sistemas as-built.",
  },

  // Delivery
  "delivery.label": { en: "Delivery Model", es: "Modelo de Entrega" },
  "delivery.headline": {
    en: "Structured execution. Clear accountability.",
    es: "Ejecución estructurada. Responsabilidad clara.",
  },
  "delivery.description": {
    en: "We reduce your exposure from design through turnover. Every phase has defined outputs, review gates, and a single point of responsibility.",
    es: "Reducimos su exposición desde el diseño hasta la entrega. Cada fase tiene entregables definidos, puntos de revisión y un solo responsable.",
  },
  "delivery.phase1.title": { en: "Scope & Align", es: "Alcance y Alineación" },
  "delivery.phase1.desc": {
    en: "Define deliverables, responsibilities, and success criteria before any work begins.",
    es: "Definir entregables, responsabilidades y criterios de éxito antes de iniciar cualquier trabajo.",
  },
  "delivery.phase2.title": { en: "Design & Document", es: "Diseño y Documentación" },
  "delivery.phase2.desc": {
    en: "Produce control narratives, drawings, and specifications tied to the approved scope.",
    es: "Producir narrativas de control, planos y especificaciones vinculados al alcance aprobado.",
  },
  "delivery.phase3.title": { en: "Integrate & Test", es: "Integración y Pruebas" },
  "delivery.phase3.desc": {
    en: "Build, program, and verify systems in controlled conditions before site deployment.",
    es: "Construir, programar y verificar sistemas en condiciones controladas antes del despliegue en sitio.",
  },
  "delivery.phase4.title": { en: "Commission & Turn Over", es: "Comisionamiento y Entrega" },
  "delivery.phase4.desc": {
    en: "Validate performance on-site and deliver complete, operator-ready documentation.",
    es: "Validar desempeño en sitio y entregar documentación completa lista para el operador.",
  },

  // About / Senior Led
  "about.label": { en: "About Us", es: "Nosotros" },
  "about.headline": {
    en: "Your project doesn't get handed off. It gets our full attention.",
    es: "Tu proyecto no se delega. Recibe toda nuestra atención.",
  },
  "about.p1": {
    en: "Black Box Engineering is a senior-led controls engineering firm. The people who scope your project are the same people who design, program, and commission it. No layers, no hand-offs, no learning curve at your expense.",
    es: "Black Box Engineering es una firma de ingeniería de control liderada por profesionales senior. Las personas que definen el alcance de tu proyecto son las mismas que lo diseñan, programan y comisionan. Sin capas intermedias, sin traspasos, sin curva de aprendizaje a tu costo.",
  },
  "about.p2": {
    en: "We're headquartered in Mexico City with active operations in Texas — positioned to serve clients across North America and beyond. Our team brings decades of combined experience across critical infrastructure, industrial automation, and process controls.",
    es: "Nuestra sede está en la Ciudad de México con operaciones activas en Texas — posicionados para atender clientes en toda Norteamérica y más allá. Nuestro equipo suma décadas de experiencia combinada en infraestructura crítica, automatización industrial y control de procesos.",
  },
  "about.bullet1": {
    en: "Direct access to decision-makers throughout the project",
    es: "Acceso directo a quienes toman las decisiones durante todo el proyecto",
  },
  "about.bullet2": {
    en: "Consistent technical leadership from scope through turnover",
    es: "Liderazgo técnico consistente desde el alcance hasta la entrega",
  },
  "about.bullet3": {
    en: "No subcontracted engineering or offshore drafting",
    es: "Sin ingeniería subcontratada ni dibujo técnico offshore",
  },
  "about.bullet4": {
    en: "Bilingual project delivery (English / Spanish)",
    es: "Entrega de proyectos bilingüe (Inglés / Español)",
  },
  "about.hq": { en: "Headquarters", es: "Oficina Central" },

  // CTA
  "cta.headline": {
    en: "Let's talk about what's next — or what's not working now.",
    es: "Hablemos de lo que sigue — o de lo que no está funcionando hoy.",
  },
  "cta.description": {
    en: "Whether you're planning a new build, optimizing existing operations, or dealing with controls problems that won't go away — we start every conversation by listening. No sales pitch. Tell us your pain points, your timeline, your budget constraints. We'll tell you what's realistic and how to reduce your operational spend.",
    es: "Ya sea que estés planeando una obra nueva, optimizando operaciones existentes o lidiando con problemas de control que no se resuelven — empezamos cada conversación escuchando. Sin discurso de ventas. Cuéntanos tus puntos de dolor, tus tiempos, tus restricciones de presupuesto. Te diremos qué es realista y cómo reducir tu gasto operativo.",
  },
  "cta.button": { en: "Request Consultation", es: "Solicitar Consulta" },

  // Footer
  "footer.copyright": {
    en: `© ${new Date().getFullYear()} Black Box Engineering`,
    es: `© ${new Date().getFullYear()} Black Box Engineering`,
  },
  "footer.location": {
    en: "Mexico City · Texas · Global",
    es: "Ciudad de México · Texas · Global",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
