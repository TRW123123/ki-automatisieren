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
            title: "KI Leadgenerierung – 5% Terminquote (Car Studio AI Blueprint)",
            description: "Keine Listen, sondern Termine. Wir implementieren die Infrastruktur von Car Studio AI: Apify Scraping + Gemini Personalisierung = 5% Conversion.",
        },
        hero: {
            title: "KI Leadgenerierung Infrastructure",
            subtitle: "Hören Sie auf, Adressen zu kaufen. Wir bauen Ihnen die Maschine, die Car Studio AI 5% Terminquote brachte.",
        },
        problem: {
            title: "Warum Standard-Outreach scheitert",
            items: ["Gekaufte Listen sind verbrannt", "Generische 'Hallo' Mails", "SDRs kosten 60k/Jahr"],
        },
        process: {
            title: "Der 'Car Studio' Stack",
            steps: [
                { title: "Targeting", description: "Google Maps Scraping via Apify (Keine veralteten Datenbanken)" },
                { title: "Enrichment", description: "Website-Analyse durch Gemini 1.5 Pro für 100% Kontext" },
                { title: "Personalisierung", description: "Jede Mail ein Unikat, basierend auf aktuellen News" },
                { title: "Sending", description: "Infrastruktur mit Instantly.ai (Warmup & Rotation)" },
            ],
        },
        features: {
            title: "Technische Komponenten",
            items: [
                { title: "Apify Scraper", description: "Live-Daten statt Datenbank-Dumps" },
                { title: "Gemini 1.5 Pro", description: "Versteht den USP des Kunden wirklich" },
                { title: "N8N Workflows", description: "Volle Automatisierung der Pipeline" },
            ],
        },
        benefits: {
            title: "Echte Ergebnisse",
            items: ["5% Terminquote (Bewiesen)", "Null manuelle Recherche", "Skalierbar auf 10k/Monat"],
        },
        caseStudy: {
            company: "Car Studio AI",
            result: "5% Terminquote",
            description: "Mit dieser Infrastruktur generierte Car Studio AI aus 1.000 kalten Kontakten 50 qualifizierte Termine.",
            link: "/fallstudien/car-studio-ai",
            image: "/logos/carstudio.avif",
        },
    },
    {
        slug: "vertriebsautomatisierung",
        seo: {
            title: "Automatisierte Vertriebs-Infrastruktur – n8n & Vapi.ai",
            description: "Wir bauen Ihre Sales-Maschine. Eingehende Leads werden in Sekunden von KI qualifiziert, angerufen und im CRM gepflegt.",
        },
        hero: {
            title: "Autonomous Sales Infrastructure",
            subtitle: "Ihr CRM füllt sich von selbst. Wir verbinden n8n, OpenAI und HubSpot zu einem autonomen System.",
        },
        problem: {
            title: "Ineffizienz im Vertrieb",
            items: ["Reaktionszeit > 5 Minuten", "Manuelle CRM-Pflege", "Unqualifizierte Erstgespräche"],
        },
        process: {
            title: "Die Architektur",
            steps: [
                { title: "Inbound Trigger", description: "Webhook fängt Lead (Webform, LinkedIn)" },
                { title: "AI-Qualifier", description: "OpenAI analysiert Potential & Company-Fit" },
                { title: "Voice-Agent", description: "Vapi.ai ruft Lead in <2 Min an (Pre-Qualification)" },
                { title: "CRM Sync", description: "Update in HubSpot/Pipedrive inkl. Call-Transkript" },
            ],
        },
        features: {
            title: "Der Tech-Stack",
            items: [
                { title: "n8n Enterprise", description: "Low-Code Backend für Ihre Prozesse" },
                { title: "Vapi.ai", description: "Menschlich klingende Voice-AI" },
                { title: "OpenAI API", description: "Logik & Entscheidungsfindung" },
            ],
        },
        benefits: {
            title: "System-Performance",
            items: ["Sofortige Lead-Reaktion", "100% CRM Sauberkeit", "SDRs fokussieren nur auf Closing"],
        },
        caseStudy: {
            company: "Car Studio AI",
            result: "3000+ Mails/Monat",
            description: "Wie Car Studio AI den Vertrieb komplett automatisierte und internationale Märkte erschloss.",
            link: "/fallstudien/car-studio-ai",
            image: "/logos/carstudio.avif",
        },
    },
    {
        slug: "strategieberatung-ki-sales-marketing",
        seo: {
            title: "System-Architektur statt Beratung – KI-Infrastruktur",
            description: "Wir liefern keine PowerPoints, sondern Code. Architektur und Implementierung von KI-Systemen für Ihren Vertrieb.",
        },
        hero: {
            title: "System-Architektur & Bauleitung",
            subtitle: "Schluss mit Workshops. Wir entwerfen und bauen die KI-Infrastruktur, die Ihrem Unternehmen gehört.",
        },
        problem: {
            title: "Das Berater-Problem",
            items: ["Theorie statt Praxis", "Keine technische Umsetzung", "Vendor Lock-in"],
        },
        process: {
            title: "Vorgehen",
            steps: [
                { title: "Architecture Design", description: "Blueprint Ihrer Daten-Infrastruktur" },
                { title: "Build Phase", description: "Entwicklung in n8n & Python" },
                { title: "Deployment", description: "Installation auf Ihren Servern" },
                { title: "Handover", description: "Source-Code Übergabe" },
            ],
        },
        features: {
            title: "Deliverables",
            items: [
                { title: "Running Code", description: "Funktionierende Software" },
                { title: "Documentation", description: "Technische API-Doku" },
                { title: "Ownership", description: "100% IP gehört Ihnen" },
            ],
        },
        benefits: {
            title: "Investitionssicherheit",
            items: ["Unabhängigkeit", "Skalierbare Assets", "Keine Lizenzgebühren an uns"],
        },
        caseStudy: {
            company: "KI Automatisieren",
            result: "Systeme statt Slides",
            description: "Wir begleiten Unternehmen von der ersten Idee bis zum laufenden KI-System für Vertrieb und Marketing.",
            link: "/fallstudien",
            image: "/logos/de-logo.avif",
        },
    },
    {
        slug: "marketing-automatisierung",
        seo: {
            title: "Content-Factory Automatisierung – Programmatic SEO",
            description: "Dominieren Sie Ihre Nische mit Programmatic SEO. Tausende Landingpages, generiert aus echten Daten.",
        },
        hero: {
            title: "Automated Content Factory",
            subtitle: "Programmatic SEO statt manuelles Bloggen. Erstellen Sie 1000 Nischen-Seiten, die ranken.",
        },
        problem: {
            title: "Content-Skalierung",
            items: ["Texter sind teuer", "Output ist limitiert", "SEO braucht Masse & Klasse"],
        },
        process: {
            title: "Produktion",
            steps: [
                { title: "Keyword-Cluster", description: "Identifikation von 1000+ Longtail-Keywords" },
                { title: "Template-Design", description: "Conversion-optimierte Astro-Templates" },
                { title: "Data-Injection", description: "Content-Generierung via LLM & Daten" },
                { title: "Deploy", description: "Static Site Generation (SSG)" },
            ],
        },
        features: {
            title: "Technologie",
            items: [
                { title: "Astro.build", description: "High-Performance Framework" },
                { title: "Markdown/JSON", description: "Strukturierte Datenhaltung" },
                { title: "Bulk-Processing", description: "Generierung über Nacht" },
            ],
        },
        benefits: {
            title: "SEO Dominanz",
            items: ["Topische Autorität", "Longtail-Traffic", "Minimale Grenzkosten"],
        },
        caseStudy: {
            company: "Salevium",
            result: "22.000+ Follower",
            description: "Wie Salevium durch automatisierte Content-Erstellung zur LinkedIn-Authority wurde.",
            link: "/fallstudien/salevium",
            image: "/logos/salevium.avif",
        },
    },
    {
        slug: "crm-prozessautomatisierung",
        seo: {
            title: "Data-Warehouse & CRM Sync – Single Source of Truth",
            description: "Keine Datensilos mehr. Wir synchronisieren HubSpot, Salesforce und Ihre Custom-Apps in Echtzeit.",
        },
        hero: {
            title: "Unified Data Infrastructure",
            subtitle: "Verbinden Sie Ihre Software-Inseln. Wir bauen die Pipelines, die Ihre Daten sauber halten.",
        },
        problem: {
            title: "Daten-Qualität",
            items: ["Veraltete Stammdaten", "Doppelte Einträge", "Manuelle Abgleiche"],
        },
        process: {
            title: "Integration",
            steps: [
                { title: "API Audit", description: "Prüfung aller Endpunkte" },
                { title: "Middleware", description: "Aufbau einer Sync-Schicht (n8n)" },
                { title: "Error-Handling", description: "Automatische Fehlerkorrektur" },
                { title: "Monitoring", description: "Uptime-Überwachung" },
            ],
        },
        features: {
            title: "Komponenten",
            items: [
                { title: "Webhook-Handler", description: "Echtzeit-Event-Verarbeitung" },
                { title: "Data-Transformation", description: "Standardisierung von Formaten" },
                { title: "Retry-Logic", description: "Ausfallsicherheit" },
            ],
        },
        benefits: {
            title: "Reliability",
            items: ["100% Datenkonsistenz", "Audit-Logs", "dsgvo-konform"],
        },
        caseStudy: {
            company: "CemKimsan",
            result: "Int. Reseller-Akquise",
            description: "Wie CemKimsan durch automatisierte Recherche internationale Reseller gewann.",
            link: "/fallstudien/cemkimsan",
            image: "/logos/cemkimsan.avif",
        },
    },
    {
        slug: "kundenservice-automatisierung",
        seo: {
            title: "AI-Support Integrationen – Intercom & Zendesk Automation",
            description: "Reduzieren Sie Ticket-Volumen um 80%. Wir integrieren Custom AI Agents tief in Ihren Support-Stack.",
        },
        hero: {
            title: "AI Support Integration",
            subtitle: "Nicht nur ein Chatbot. Ein Agent, der in Ihrem System Aktionen ausführt (Erstattungen, Änderungen).",
        },
        problem: {
            title: "Ticket-Backlog",
            items: ["Tier-1 Fragen blockieren Team", "Lange Antwortzeiten", "Teurer 24/7 Support"],
        },
        process: {
            title: "Deployment",
            steps: [
                { title: "Knowledge-Ingestion", description: "Vektorisierung Ihrer Help-Center Artikel" },
                { title: "Action-Setup", description: "API-Anbindung für Aktionen (z.B. Status prüfen)" },
                { title: "Testing", description: "Red-Teaming gegen Halluzinationen" },
                { title: "Go-Live", description: "Schrittweiser Rollout" },
            ],
        },
        features: {
            title: "Fähigkeiten",
            items: [
                { title: "RAG-System", description: "Antworten nur aus Ihrer Doku" },
                { title: "Function Calling", description: "Der Bot kann Software bedienen" },
                { title: "Human-Handoff", description: "Eskalation bei Komplexität" },
            ],
        },
        benefits: {
            title: "Effizienz",
            items: ["Support-Kosten senken", "Sofortige Lösung", "Zufriedene Kunden"],
        },
        caseStudy: {
            company: "Coach Bilge",
            result: "80% weniger No-Shows",
            description: "Wie Coach Bilge durch automatisierte Terminbuchung die No-Show-Rate drastisch senkte.",
            link: "/fallstudien/dkm-coach-bilge",
            image: "/logos/coach-bilge.avif",
        },
    },
];
