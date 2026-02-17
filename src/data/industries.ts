import { type SolutionData } from "./solutions";

// Re-using SolutionData interface for consistency, but we might extend it later if needed.
// For now, the structure matches perfectly: Hero, Problem, Process, Features, Benefits, CaseStudy.

export const industries: SolutionData[] = [
    {
        slug: "autohaeuser-kfz",
        seo: {
            title: "Kaltakquise für Autohäuser – 5% Terminquote (Car Studio AI)",
            description: "Wie Autohäuser messbar mehr B2B-Kunden gewinnen. Keine gekauften Listen, sondern KI-basiertes Scraping und Personalisierung.",
        },
        hero: {
            title: "B2B-Neukundengewinnung für Autohäuser",
            subtitle: "Verkaufen Sie Flottenverbände und Nutzfahrzeuge proaktiv. Wir liefern die Termine, Ihre Verkäufer machen den Abschluss.",
        },
        problem: {
            title: "Warum Autohaus-Vertrieb oft scheitert",
            items: ["Verkäufer warten im Showroom auf Kunden", "Gewerbekunden werden ignoriert", "Kalte Anrufe nerven alle"],
        },
        process: {
            title: "Unser 'Car Studio' Blueprint",
            steps: [
                { title: "Geo-Targeting", description: "Wir scrapen Handwerksbetriebe im 50km Radius" },
                { title: "Flotten-Check", description: "KI prüft Website auf Fuhrpark-Größe" },
                { title: "Ansprache", description: "Personalisierte E-Mail inkl. aktuellem Fahrzeugangebot" },
                { title: "Terminierung", description: "Interessenten landen direkt im Kalender" },
            ],
        },
        features: {
            title: "Was wir liefern",
            items: [
                { title: "Exklusive Leads", description: "Daten gehören nur Ihnen, keinem Konkurrenten" },
                { title: "Full-Service", description: "Wir übernehmen Technik und Copywriting" },
                { title: "Garantie", description: "Zahlung nur bei Erfolg (auf Anfrage)" },
            ],
        },
        benefits: {
            title: "Zahlen aus der Praxis",
            items: ["5% Terminquote bei Kaltkontakten", "30+ Gewerbe-Termine/Monat", "ROI oft im 1. Monat"],
        },
        caseStudy: {
            company: "Car Studio AI",
            result: "5% Terminquote",
            description: "Car Studio AI nutzte unser System, um 1.000 lokale Handwerker anzuschreiben und generierte 50 Termine für Nutzfahrzeuge.",
            link: "/fallstudien/car-studio-ai",
            image: "/logos/carstudio.avif",
        },
    },
    {
        slug: "stadion-event",
        seo: {
            title: "B2B-Akquise für Stadien & Eventlocations – Corporate Clients",
            description: "Füllen Sie Ihre VIP-Logen und Eventflächen mit Firmenkunden. Automatisierte Identifikation von Unternehmen mit Budget.",
        },
        hero: {
            title: "Corporate Sales für Stadien & Arenen",
            subtitle: "Schluss mit Gießkannen-Prinzip. Wir identifizieren Firmen, die Events planen, und sprechen die Entscheider direkt an.",
        },
        problem: {
            title: "Herausforderung Event-Sales",
            items: ["Schwer erreichbare Entscheider", "Saisonale Schwankungen", "Hoher manueller Research-Aufwand"],
        },
        process: {
            title: "Der 'ARPA' Ansatz",
            steps: [
                { title: "Signal-Monitoring", description: "KI scannt News nach Jubiläen & Expansionen" },
                { title: "Entscheider-Suche", description: "Identifikation von HR- & Marketing-Leads" },
                { title: "Multi-Channel", description: "Kombination aus LinkedIn und E-Mail" },
            ],
        },
        features: {
            title: "System-Features",
            items: [
                { title: "Trigger-Based", description: "Ansprache zum richtigen Zeitpunkt" },
                { title: "LinkedIn-Bot", description: "Automatisiertes Vernetzen & Follow-up" },
                { title: "CRM-Integration", description: "Nahtlose Einbindung in Ihr System" },
            ],
        },
        benefits: {
            title: "Ergebnisse",
            items: ["500 Calls ohne Streuverlust", "Volle VIP-Bereiche", "Planbarer Umsatz"],
        },
        caseStudy: {
            company: "ARPA",
            result: "Marktführerschaft",
            description: "Wie ARPA durch gezieltes Account-Based-Marketing die größten Stadien Europas als Kunden gewann.",
            link: "/fallstudien/erpa-teknoloji",
            image: "/logos/arpa.avif", // Placeholder, ensure exists or fallback
        },
    },
    {
        slug: "industrie-fertigung",
        seo: {
            title: "Neukundengewinnung für Industrie & Fertigung",
            description: "Generieren Sie Anfragen von Einkäufern und Konstrukteuren. Technischer Vertrieb, automatisiert und präzise.",
        },
        hero: {
            title: "Automatisierter Vertrieb für die Industrie",
            subtitle: "Wir finden die Ingenieure und Einkäufer, die Ihre Bauteile brauchen. Weltweit, 24/7.",
        },
        problem: {
            title: "Industrie-Vertrieb ist hart",
            items: ["Lange Sales-Cycles", "Konservative Zielgruppe", "Messen fallen aus"],
        },
        process: {
            title: "Der 'CemKimsan' Prozess",
            steps: [
                { title: "Markt-Scan", description: "Identifikation von Herstellern (Wer baut was?)" },
                { title: "Tech-Match", description: "KI prüft, ob Ihre Teile passen" },
                { title: "Direct-Outreach", description: "Ansprache der technischen Leiter" },
            ],
        },
        features: {
            title: "Industrie-Features",
            items: [
                { title: "Global-Search", description: "Sprachunabhängige Suche" },
                { title: "Reseller-Finding", description: "Automatisiertes Partner-Netzwerk" },
                { title: "RFP-Monitoring", description: "Erkennung von Ausschreibungen" },
            ],
        },
        benefits: {
            title: "Resultate",
            items: ["6% Rücklaufquote", "Internationale Expansion", "Unabhängigkeit von Messen"],
        },
        caseStudy: {
            company: "CemKimsan",
            result: "Int. Reseller",
            description: "CemKimsan nutzte unser System, um weltweit neue Vertriebspartner für ihre Metallverarbeitung zu finden.",
            link: "/fallstudien/cemkimsan",
            image: "/logos/cemkimsan.avif",
        },
    },
];
