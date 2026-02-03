export interface SolutionData {
    slug: string;
    seo: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
    problem: {
        title: string;
        items: string[];
    };
    process: {
        title: string;
        steps: Array<{ title: string; description: string }>;
    };
    features: {
        title: string;
        items: Array<{ title: string; description: string }>;
    };
    benefits: {
        title: string;
        items: string[];
    };
    caseStudy: {
        company: string;
        result: string;
        description: string;
        link: string;
        image: string;
    };
}

export const solutions: SolutionData[] = [
    {
        slug: "leadgenerierung-ki",
        seo: {
            title: "KI Leadgenerierung – 30+ B2B Termine/Monat (Garantiert)",
            description: "Automatisieren Sie Ihre Leadgenerierung mit KI. Finden und kontaktieren Sie Ihre Traumkunden vollautomatisch. Skalierbar & messbar."
        },
        hero: {
            title: "KI Leadgenerierung",
            subtitle: "Hören Sie auf, Leads manuell zu suchen. Lassen Sie KI Ihre Pipeline füllen – automatisch und qualifiziert."
        },
        problem: {
            title: "Herausforderungen",
            items: ["Leere Pipeline", "Teure Ads", "Niedrige Antwortraten"]
        },
        process: {
            title: "Prozess",
            steps: [
                { title: "Daten-Analyse", description: "Identifikation idealer Kunden (ICP)" },
                { title: "Smart-Scraping", description: "Automatisierte Datengewinnung" },
                { title: "Enrichment", description: "KI-Anreicherung & Validierung" },
                { title: "Outreach", description: "Personalisierte Kampagnen" }
            ]
        },
        features: {
            title: "Features",
            items: [
                { title: "ICP-Targeting", description: "Präzise Zielgruppen" },
                { title: "Multi-Channel", description: "LinkedIn & E-Mail" },
                { title: "Warm-Up", description: "Domain-Protection" }
            ]
        },
        benefits: {
            title: "Vorteile",
            items: ["30+ Termine/Monat", "90% Zeitersparnis", "Qualifizierte Leads"]
        },
        caseStudy: {
            company: "ERPA",
            result: "Europäische Expansion",
            description: "Wie ERPA Teknoloji mit KI-Leadgenerierung in neue Märkte expandierte.",
            link: "/fallstudien/erpa-teknoloji",
            image: "/logos/erpa.avif"
        }
    },
    {
        slug: "vertriebsautomatisierung",
        seo: {
            title: "Vertriebsautomatisierung – Outbound & KI-Caller",
            description: "Automatisieren Sie Outbound, Follow-ups & erste Anrufe mit KI. Ihr Team fokussiert sich auf Deals, nicht auf Admin."
        },
        hero: {
            title: "Vertriebsautomatisierung – Outbound, Follow-ups & KI-Caller",
            subtitle: "Entlasten Sie Ihr Vertriebsteam von Admin-Arbeit. KI übernimmt Outbound, Follow-ups und erste Qualifizierung."
        },
        problem: {
            title: "Probleme im Vertrieb",
            items: ["Zu viel Admin-Arbeit", "Vergessene Follow-ups", "Teure SDR Gehälter"]
        },
        process: {
            title: "Vorgehensweise",
            steps: [
                { title: "Audit", description: "Analyse Ihrer Prozesse" },
                { title: "System-Design", description: "Architektur der AI-Agents" },
                { title: "Integration", description: "Anbindung an CRM (HubSpot, Pipedrive)" },
                { title: "Go-Live", description: "Start der Automatisierung" }
            ]
        },
        features: {
            title: "Funktionen",
            items: [
                { title: "KI-Voice-Caller", description: "Vapi.ai Integration" },
                { title: "Auto-Follow-up", description: "Kein Lead geht verloren" },
                { title: "Meeting-Bot", description: "Automatische Terminbuchung" }
            ]
        },
        benefits: {
            title: "Ergebnisse",
            items: ["24/7 Erreichbarkeit", "Konsistente Qualität", "Skalierbarer Outreach"]
        },
        caseStudy: {
            company: "Car Studio AI",
            result: "3000+ Mails/Monat",
            description: "Wie Car Studio AI den Vertrieb komplett automatisierte und internationale Märkte erschloss.",
            link: "/fallstudien/car-studio-ai",
            image: "/logos/carstudio.avif"
        }
    },
    {
        slug: "strategieberatung-ki-sales-marketing",
        seo: {
            title: "System-Design & Implementierung – KI für Vertrieb & Marketing",
            description: "Wir konzipieren und implementieren KI-Systeme für Ihre Leadgenerierung und Vertriebsautomatisierung. Kein Workshop, direkte Umsetzung."
        },
        hero: {
            title: "System-Design & Implementierung",
            subtitle: "Vom Konzept zum laufenden System. Wir bauen, was andere nur beraten."
        },
        problem: {
            title: "Das Problem mit klassischer KI-Beratung",
            items: [
                "PowerPoint statt Implementierung",
                "Roadmaps ohne Umsetzungspartner",
                "Externe Abhängigkeiten nach dem Projekt"
            ]
        },
        process: {
            title: "Unser Ansatz",
            steps: [
                { title: "Analyse", description: "Bestehende Systeme & Datenquellen erfassen" },
                { title: "Architektur", description: "System-Design für Ihren Use Case" },
                { title: "Implementierung", description: "Make, Vapi, OpenAI – wir bauen es" },
                { title: "Übergabe", description: "Dokumentation & Training Ihres Teams" }
            ]
        },
        features: {
            title: "Was Sie bekommen",
            items: [
                { title: "Fertiges System", description: "Kein Proof-of-Concept, sondern Produktion" },
                { title: "Dokumentation", description: "Vollständige technische Doku" },
                { title: "Ownership", description: "Das System gehört Ihnen, kein Vendor Lock-in" }
            ]
        },
        benefits: {
            title: "Ihr Ergebnis",
            items: [
                "Laufendes System statt Roadmap",
                "Keine externen Abhängigkeiten",
                "Messbarer ROI ab Tag 1"
            ]
        },
        caseStudy: {
            company: "KI Automatisieren",
            result: "Systeme statt Slides",
            description: "Wir begleiten Unternehmen von der ersten Idee bis zum laufenden KI-System für Vertrieb und Marketing.",
            link: "/fallstudien",
            image: "/logos/de-logo.avif"
        }
    },
    {
        slug: "marketing-automatisierung",
        seo: {
            title: "Marketing Automatisierung – Content & Ads",
            description: "Skalieren Sie Ihr Marketing mit KI. Automatisierte Content-Erstellung, Ad-Management und Social Media."
        },
        hero: {
            title: "Marketing Automatisierung – Content & Ads",
            subtitle: "Mehr Sichtbarkeit, weniger manueller Aufwand. Lassen Sie KI Ihren Content und Ihre Ads steuern."
        },
        problem: {
            title: "Marketing-Engpässe",
            items: ["Content-Erstellung dauert zu lange", "Inkonsistente Posting-Frequenz", "Teure Agenturen"]
        },
        process: {
            title: "Ablauf",
            steps: [
                { title: "Rethink", description: "Content-Strategie Workshop" },
                { title: "AI-Setup", description: "Training der KI auf Ihre Brand-Voice" },
                { title: "Automation", description: "Autopilot für Social Media" },
                { title: "Scale", description: "Mehr Output bei gleichen Kosten" }
            ]
        },
        features: {
            title: "Tools",
            items: [
                { title: "Content-Engine", description: "Blog & Social Posts auf Knopfdruck" },
                { title: "Ad-Optimizer", description: "Automatische Gebotsanpassung" },
                { title: "Visual-AI", description: "Bildgenerierung für Ads" }
            ]
        },
        benefits: {
            title: "Impact",
            items: ["10x mehr Content", "Brand-Konsistenz", "Höhere ROAS"]
        },
        caseStudy: {
            company: "Salevium",
            result: "22.000+ Follower",
            description: "Wie Salevium durch automatisierte Content-Erstellung zur LinkedIn-Authority wurde.",
            link: "/fallstudien/salevium",
            image: "/logos/salevium.avif"
        }
    },
    {
        slug: "crm-prozessautomatisierung",
        seo: {
            title: "CRM Automatisierung – Workflows für KMU",
            description: "Verbinden Sie Ihre Tools. Automatisierte Datenflüsse zwischen CRM, E-Mail und Accounting."
        },
        hero: {
            title: "CRM Automatisierung – Workflows für KMU",
            subtitle: "Schluss mit Copy-Paste. Wir verbinden Ihre Software-Inseln zu einem integrierten System."
        },
        problem: {
            title: "Daten-Chaos",
            items: ["Manuelle Dateneingabe", "Fehlerhafte Datensätze", "Tools sprechen nicht miteinander"]
        },
        process: {
            title: "Integration",
            steps: [
                { title: "Mapping", description: "Datenflüsse visualisieren" },
                { title: "API-Check", description: "Schnittstellen prüfen" },
                { title: "Workflow", description: "Make.com Szenarios bauen" },
                { title: "Testing", description: "Fehlerfreier Betrieb" }
            ]
        },
        features: {
            title: "Möglichkeiten",
            items: [
                { title: "Sync", description: "Echtzeit-Datenabgleich" },
                { title: "Alerts", description: "Benachrichtigung bei Fehlern" },
                { title: "Cleaning", description: "Automatische Duplikatbereinigung" }
            ]
        },
        benefits: {
            title: "Nutzen",
            items: ["Saubere Daten", "Zeitersparnis", "Skalierbare Prozesse"]
        },
        caseStudy: {
            company: "CemKimsan",
            result: "Int. Reseller-Akquise",
            description: "Wie CemKimsan durch automatisierte Recherche internationale Reseller gewann.",
            link: "/fallstudien/cemkimsan",
            image: "/logos/cemkimsan.avif"
        }
    },
    {
        slug: "kundenservice-automatisierung",
        seo: {
            title: "Kundenservice Automatisierung – Chatbots 24/7",
            description: "Bieten Sie 24/7 Support ohne Personalaufbau. KI-Chatbots lösen 80% der Anfragen automatisch."
        },
        hero: {
            title: "Kundenservice Automatisierung – Chatbots 24/7",
            subtitle: "Perfekter Service rund um die Uhr. KI beantwortet Fragen, bucht Termine und qualifiziert Kunden."
        },
        problem: {
            title: "Support-Last",
            items: ["Wiederkehrende Fragen", "Lange Wartezeiten", "Teure Support-Mitarbeiter"]
        },
        process: {
            title: "Implementierung",
            steps: [
                { title: "Knowledge-Base", description: "Unternehmenswissen strukturieren" },
                { title: "Training", description: "KI-Modell anlernen" },
                { title: "Deploy", description: "Integration auf Website & WhatsApp" },
                { title: "Überwachung", description: "Qualitätssicherung" }
            ]
        },
        features: {
            title: "Skills",
            items: [
                { title: "Multilingual", description: "Support in allen Sprachen" },
                { title: "Omnichannel", description: "Web, WhatsApp, Mail" },
                { title: "Handover", description: "Nahtlose Übergabe an Menschen" }
            ]
        },
        benefits: {
            title: "Gewinn",
            items: ["Sofortige Antworten", "Sinkende Support-Kosten", "Höhere Kundenzufriedenheit"]
        },
        caseStudy: {
            company: "Coach Bilge",
            result: "80% weniger No-Shows",
            description: "Wie Coach Bilge durch automatisierte Terminbuchung die No-Show-Rate drastisch senkte.",
            link: "/fallstudien/dkm-coach-bilge",
            image: "/logos/coach-bilge.avif"
        }
    }
];
