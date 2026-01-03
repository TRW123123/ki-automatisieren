export interface SolutionData {
    slug: string;
    seo: { title: string; description: string };
    hero: { title: string; subtitle: string };
    problem: { title: string; items: string[] };
    process: { title: string; steps: { title: string; description: string }[] };
    features: { title: string; items: { title: string; description: string }[] };
    benefits: { title: string; items: string[] };
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
            title: "Diese Herausforderungen kennen Sie?",
            items: [
                "Vertriebsteam ertrinkt in Admin-Arbeit",
                "Leads werden zu langsam kontaktiert",
                "CRM-Dokumentation wird vernachlässigt",
                "Follow-ups sind inkonsistent"
            ]
        },
        process: {
            title: "Unsere KI-Lösung in 4 Schritten",
            steps: [
                { title: "Analyse", description: "Verstehen Ihrer Vertriebsprozesse und Engpässe" },
                { title: "Automatisierung", description: "KI-Caller, CRM-Sync und automatische Follow-ups" },
                { title: "Integration", description: "Nahtlose Einbindung in Ihr bestehendes CRM" },
                { title: "Skalierung", description: "Kontinuierliche Optimierung Ihrer Sales Pipeline" }
            ]
        },
        features: {
            title: "Leistungsumfang",
            items: [
                { title: "KI-Caller", description: "Erste Qualifizierung per Telefon automatisiert" },
                { title: "CRM-Sync", description: "Automatische Dokumentation aller Aktivitäten" },
                { title: "Pipeline Automation", description: "Deals bewegen sich automatisch durch Ihre Pipeline" }
            ]
        },
        benefits: {
            title: "Ergebnisse & Vorteile",
            items: [
                "50% mehr Zeit für Verkaufsgespräche",
                "15+ Stunden Admin-Arbeit pro Woche gespart",
                "Lückenlose CRM-Dokumentation"
            ]
        },
        caseStudy: {
            company: "ERPA Teknoloji",
            result: "Stadion-Akquise automatisiert",
            description: "ERPA Teknoloji automatisiert Stadion-Akquise mit KI und erreicht systematische Neukundengewinnung im B2B-Bereich.",
            link: "/fallstudien/erpa-teknoloji",
            image: "/logos/erpa.avif"
        }
    },
    {
        slug: "leadgenerierung-ki",
        seo: {
            title: "KI Leadgenerierung – 30+ B2B Termine automatisiert",
            description: "Automatisierte Lead-Recherche, personalisierte Outreach, Follow-ups. Füllen Sie Ihren Kalender mit qualifizierten Terminen."
        },
        hero: {
            title: "KI-basierte Leadgenerierung",
            subtitle: "Automatisierte Recherche, personalisiertes Outreach, intelligente Follow-ups."
        },
        problem: {
            title: "Herausforderungen",
            items: ["Kalender bleibt leer", "Manuelle Recherche kostet Zeit", "Cold Outreach bringt nichts"]
        },
        process: {
            title: "Prozess",
            steps: [
                { title: "Analyse", description: "Verstehen Ihrer Zielgruppe" },
                { title: "Automatisierung", description: "Lead-Recherche und Outreach" },
                { title: "Integration", description: "CRM Anbindung" },
                { title: "Skalierung", description: "Optimierung" }
            ]
        },
        features: {
            title: "Funktionen",
            items: [
                { title: "Auto-Recherche", description: "Findet ideale Kunden" },
                { title: "Personalisierung", description: "Individuelle Ansprache" },
                { title: "Multichannel", description: "Email & LinkedIn" }
            ]
        },
        benefits: {
            title: "Vorteile",
            items: ["30+ Termine/Monat", "20h Zeitersparnis", "3x Response Rate"]
        },
        caseStudy: {
            company: "Car Studio AI",
            result: "+30 Termine/Monat",
            description: "Car Studio AI automatisiert Leadgenerierung mit KI und erzielt 30+ qualifizierte Termine pro Monat durch personalisierte Multichannel-Kampagnen.",
            link: "/fallstudien/car-studio-ai",
            image: "/logos/carstudio.avif"
        }
    },
    {
        slug: "marketing-automatisierung",
        seo: {
            title: "Marketing Automatisierung – Content & Ads auf Autopilot",
            description: "KI-gestützte Content-Erstellung, Social Media Automation, Ads-Optimierung."
        },
        hero: {
            title: "Marketing-Automatisierung",
            subtitle: "Skalieren Sie Ihr Marketing ohne zusätzliches Team. KI erstellt Content und postet automatisch."
        },
        problem: {
            title: "Probleme",
            items: ["Content ist teuer", "Social Media ist sporadisch", "Ads laufen schlecht"]
        },
        process: {
            title: "Prozess",
            steps: [
                { title: "Analyse", description: "Ziele definieren" },
                { title: "Automatisierung", description: "Content Erstellung" },
                { title: "Integration", description: "Tools verknüpfen" },
                { title: "Skalierung", description: "Performance Tracking" }
            ]
        },
        features: {
            title: "Features",
            items: [
                { title: "Content AI", description: "Blog & Social Postings" },
                { title: "Auto-Posting", description: "Alle Kanäle" },
                { title: "Ad-Optimierung", description: "Besserer ROI" }
            ]
        },
        benefits: {
            title: "Ergebnisse",
            items: ["5x mehr Content", "80% Zeitersparnis", "Konsistentes Branding"]
        },
        caseStudy: {
            company: "Salevium",
            result: "LinkedIn Automatisierung",
            description: "Salevium automatisiert LinkedIn-Marketing mit KI und erreicht systematische B2B-Lead-Generierung durch Content-Automation.",
            link: "/fallstudien/salevium",
            image: "/logos/salevium.avif"
        }
    },
    {
        slug: "crm-prozessautomatisierung",
        seo: {
            title: "CRM Automatisierung – Workflows für KMU",
            description: "Automatisieren Sie CRM, Dokumentenverarbeitung, Daten-Enrichment."
        },
        hero: {
            title: "CRM- & Prozessautomatisierung",
            subtitle: "Lassen Sie Ihre Systeme für sich arbeiten. Automatisieren Sie CRM und Datenverarbeitung."
        },
        problem: {
            title: "Herausforderungen",
            items: ["Daten unvollständig", "Manuelle Eingabe", "Excel-Chaos"]
        },
        process: {
            title: "Prozess",
            steps: [
                { title: "Analyse", description: "Prozess-Mapping" },
                { title: "Automatisierung", description: "N8n / Make Workflows" },
                { title: "Integration", description: "Systeme verbinden" },
                { title: "Skalierung", description: "Maintenance" }
            ]
        },
        features: {
            title: "Features",
            items: [
                { title: "CRM Clean-up", description: "Keine Dubletten" },
                { title: "Data Enrichment", description: "Daten anreichern" },
                { title: "Doc Parsing", description: "PDFs auslesen" }
            ]
        },
        benefits: {
            title: "Vorteile",
            items: ["90% saubere Daten", "Vollständige Transparenz", "Fehlerreduktion"]
        },
        caseStudy: {
            company: "Car Studio AI",
            result: "15h/Woche gespart",
            description: "Car Studio AI automatisiert CRM-Prozesse und spart 15 Stunden pro Woche durch intelligente Workflows und Daten-Enrichment.",
            link: "/fallstudien/car-studio-ai",
            image: "/logos/carstudio.avif"
        }
    },
    {
        slug: "kundenservice-automatisierung",
        seo: {
            title: "Kundenservice Automatisierung – Chatbots 24/7",
            description: "KI-Chatbots & Voicebots für automatisierten Kundenservice."
        },
        hero: {
            title: "Kundenservice-Automatisierung",
            subtitle: "Bieten Sie erstklassigen Kundenservice rund um die Uhr."
        },
        problem: {
            title: "Herausforderungen",
            items: ["Lange Wartezeiten", "Hohe Personalkosten", "Nur 9-5 erreichbar"]
        },
        process: {
            title: "Prozess",
            steps: [
                { title: "Analyse", description: "FAQ Analyse" },
                { title: "Automatisierung", description: "Bot Training" },
                { title: "Integration", description: "Website & WhatsApp" },
                { title: "Skalierung", description: "Continuous Learning" }
            ]
        },
        features: {
            title: "Features",
            items: [
                { title: "Chatbots", description: "Web & Messenger" },
                { title: "Voicebots", description: "Telefon-Support" },
                { title: "Ticket Routing", description: "An den richtigen Agenten" }
            ]
        },
        benefits: {
            title: "Vorteile",
            items: ["24/7 Erreichbarkeit", "80% Automatisierungsquote", "Entlastetes Team"]
        },
        caseStudy: {
            company: "Acilsatis",
            result: "1000+ Anfragen beantwortet",
            description: "Acilsatis automatisiert Kundenservice mit Instagram DM Bot und beantwortet 1000+ Anfragen automatisch, 24/7 verfügbar.",
            link: "/fallstudien/acilsatis",
            image: "/logos/acilsatis.avif"
        }
    }
];
