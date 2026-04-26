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
    intro?: string;
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
    faqs: Array<{ question: string; answer: string }>;
}

export const solutions: SolutionData[] = [
    {
        slug: "leadgenerierung-ki",
        seo: {
            title: "KI Leadgenerierung B2B – 5% Terminquote automatisiert",
            description: "B2B-Leads automatisch finden, anreichern und personalisiert ansprechen. Bewiesene 5% Terminquote durch KI-gestützte Akquise-Infrastruktur.",
        },
        hero: {
            title: "KI Leadgenerierung: Automatisierte B2B-Akquise",
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
        faqs: [
            { question: "Was kostet KI-gestützte Leadgenerierung?", answer: "Die Investition hängt vom Volumen ab. Ein typisches Setup mit Scraping, Enrichment und automatisiertem E-Mail-Versand liegt zwischen 2.000 und 5.000 € einmalig, plus laufende Kosten für Tools wie Instantly.ai (ca. 100–300 €/Monat). Der ROI zeigt sich meist ab dem ersten Monat." },
            { question: "Wie unterscheidet sich KI-Leadgenerierung von gekauften Adresslisten?", answer: "Gekaufte Listen enthalten veraltete, generische Kontakte mit niedriger Conversion. KI-Leadgenerierung scraped aktuelle Daten direkt von Google Maps oder LinkedIn, reichert sie mit Kontext an und personalisiert jede Ansprache — das ergibt typischerweise 3–5x höhere Antwortquoten." },
            { question: "Wie lange dauert es, bis ein KI-Leadgenerierungssystem läuft?", answer: "Ein funktionsfähiges System steht in 1–2 Wochen: Scraping-Setup, Enrichment-Pipeline, E-Mail-Infrastruktur mit Warmup. Die ersten qualifizierten Termine kommen meist in Woche 3–4." },
            { question: "Ist automatisiertes E-Mail-Outreach DSGVO-konform?", answer: "B2B-Kaltakquise per E-Mail ist unter bestimmten Voraussetzungen zulässig (berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO). Entscheidend sind: klarer Geschäftsbezug, Opt-out-Möglichkeit in jeder Mail und keine Verarbeitung sensibler Daten." },
            { question: "Welche Branchen profitieren am meisten von KI-Leadgenerierung?", answer: "Besonders B2B-Unternehmen mit klarer Zielgruppe und höheren Auftragswerten: IT-Dienstleister, Maschinenbau, SaaS, Beratungen und Agenturen. Je spezifischer die Zielgruppe, desto besser funktioniert die KI-Personalisierung." },
        ],
    },
    {
        slug: "vertriebsautomatisierung",
        seo: {
            title: "KI Vertriebsautomatisierung: Mehr Deals, weniger Aufwand",
            description: "Leads in Sekunden qualifiziert, CRM automatisch gepflegt, Follow-ups auf Autopilot. KI-Vertriebsautomatisierung für B2B – live in 2 Wochen.",
        },
        hero: {
            title: "KI Vertriebsautomatisierung für B2B-Unternehmen",
            subtitle: "Ihr CRM füllt sich von selbst. Wir verbinden n8n, OpenAI und HubSpot zu einem autonomen System.",
        },
        intro: `KI-Vertriebsautomatisierung verbindet künstliche Intelligenz mit Ihrem bestehenden B2B-Vertriebsprozess: Eingehende Leads werden automatisch auf Unternehmensgröße, Budget-Indizien und Kaufabsicht geprüft, binnen zwei Minuten per Voice-AI kontaktiert und mit vollständigem Gesprächsprotokoll ins CRM übertragen — ohne manuelle Eingabe Ihres Teams.

Das Ausmaß des Problems ist messbar: Laut einer McKinsey-Studie verbringen B2B-Vertriebsmitarbeiter nur 28% ihrer Arbeitszeit mit aktiven Verkaufsgesprächen. 72% entfallen auf Recherche, Datenpflege, E-Mail-Nachfassen und administrative Tätigkeiten. Bei einem Vertriebsteam von drei Personen und einem Durchschnittsgehalt von 55.000 € bedeutet das über 118.000 € pro Jahr, die in keine Abschlüsse fließen — sondern in Tabellenkalkulationen.

Vertriebsautomatisierung mit KI löst genau dieses Problem. Das System, das wir für Car Studio AI implementiert haben, zeigt den Maßstab: Aus 1.000 kalten Kontakten entstanden 50 qualifizierte Termine — vollautomatisch, ohne SDR-Stunden für Erstqualifizierung. Ihr Vertriebsteam führt nur noch Gespräche, bei denen Kaufbereitschaft bereits bestätigt ist.`,
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
        faqs: [
            { question: "Was ist KI-Vertriebsautomatisierung?", answer: "KI-Vertriebsautomatisierung verbindet künstliche Intelligenz mit Ihren bestehenden Vertriebsprozessen: Leads werden automatisch qualifiziert, per Voice-AI angerufen und im CRM gepflegt — ohne manuellen Aufwand. Der Vertrieb fokussiert sich nur noch auf das Closing." },
            { question: "Welche CRM-Systeme lassen sich anbinden?", answer: "Unsere Systeme integrieren sich mit allen gängigen CRMs: HubSpot, Salesforce, Pipedrive, Zoho und weitere. Die Anbindung erfolgt über APIs und Webhooks via n8n — bidirektional und in Echtzeit." },
            { question: "Wie schnell reagiert das System auf neue Leads?", answer: "Unter 2 Minuten. Sobald ein Lead über Webformular, LinkedIn oder andere Kanäle eingeht, startet die KI-Qualifizierung sofort. Bei positivem Scoring wird der Lead automatisch per Voice-Agent kontaktiert." },
            { question: "Ersetzt KI-Vertriebsautomatisierung mein Sales-Team?", answer: "Nein — sie entlastet es. Die KI übernimmt repetitive Aufgaben wie Erstqualifizierung, Datenerfassung und Follow-up. Ihr Team konzentriert sich auf hochwertige Gespräche und Abschlüsse. Typischerweise steigt die Produktivität pro SDR um 40–60%." },
            { question: "Was kostet Vertriebsautomatisierung mit KI?", answer: "Ein typisches Setup kostet 5.000–15.000 € einmalig, abhängig von Komplexität und Integrationstiefe. Laufende Kosten für Tools und APIs liegen bei 300–800 €/Monat. Bei einem durchschnittlichen B2B-Deal-Value von 10.000 €+ ist der ROI meist nach 1–2 Abschlüssen erreicht." },
        ],
    },
    {
        slug: "strategieberatung-ki-sales-marketing",
        seo: {
            title: "KI Strategieberatung für Sales & Marketing – Code statt Slides",
            description: "Keine PowerPoints, sondern laufende Systeme. Wir entwerfen und implementieren KI-Infrastruktur für Vertrieb und Marketing — mit Source-Code-Übergabe.",
        },
        hero: {
            title: "KI Strategieberatung: Systeme statt Slides",
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
        faqs: [
            { question: "Was unterscheidet KI-Strategieberatung von klassischer Unternehmensberatung?", answer: "Klassische Beratung liefert PowerPoints und Empfehlungen. Wir liefern laufenden Code: Architektur-Design, Implementierung in n8n und Python, Deployment auf Ihren Servern und Source-Code-Übergabe. Sie besitzen das System zu 100%." },
            { question: "Behalte ich die Eigentumsrechte am entwickelten System?", answer: "Ja, zu 100%. Alle entwickelten Systeme, Workflows und der gesamte Source-Code gehen in Ihr Eigentum über. Keine Lizenzgebühren, kein Vendor Lock-in. Sie können das System jederzeit intern weiterentwickeln." },
            { question: "Wie läuft ein typisches KI-Strategieprojekt ab?", answer: "Phase 1: Architecture Design (1–2 Wochen) — Blueprint Ihrer Daten-Infrastruktur. Phase 2: Build (2–4 Wochen) — Entwicklung in n8n und Python. Phase 3: Deployment auf Ihren Servern. Phase 4: Handover mit Dokumentation und Schulung." },
            { question: "Für welche Unternehmensgröße ist KI-Strategieberatung sinnvoll?", answer: "Besonders für Mittelständler mit 20–500 Mitarbeitern, die einen klaren Vertriebsprozess haben und diesen skalieren wollen. Voraussetzung: Ein CRM ist im Einsatz und es gibt mindestens 2–3 Vertriebsmitarbeiter, deren Prozesse automatisierbar sind." },
        ],
    },
    {
        slug: "marketing-automatisierung",
        seo: {
            title: "KI Marketing-Automatisierung – Programmatic SEO & Content",
            description: "Dominieren Sie Ihre Nische mit KI-gestütztem Programmatic SEO. Hunderte Landingpages aus echten Daten — automatisiert und conversion-optimiert.",
        },
        hero: {
            title: "KI Marketing-Automatisierung & Content-Skalierung",
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
        faqs: [
            { question: "Was ist Programmatic SEO?", answer: "Programmatic SEO erstellt hunderte oder tausende Landingpages aus strukturierten Daten und Templates — automatisiert statt manuell. Jede Seite zielt auf ein spezifisches Long-Tail-Keyword und wird mit echten, branchenspezifischen Daten befüllt." },
            { question: "Funktioniert KI-generierter Content für SEO?", answer: "Ja, wenn er richtig gemacht wird. Google straft nicht KI-Content ab, sondern schlechten Content. Unsere Methode: KI generiert den Entwurf aus echten Datenpunkten, dann wird jede Seite auf Einzigartigkeit, Faktengenauigkeit und E-E-A-T geprüft." },
            { question: "Wie viele Seiten kann Programmatic SEO generieren?", answer: "Technisch unbegrenzt. Praktisch empfehlen wir 50–500 Seiten pro Cluster, basierend auf dem verfügbaren Keyword-Volumen. Qualität vor Quantität: Jede Seite muss echten Mehrwert bieten und ein validiertes Keyword targeten." },
            { question: "Wie lange dauert es, bis pSEO-Seiten ranken?", answer: "Bei Long-Tail-Keywords mit niedriger Competition sehen wir erste Rankings nach 4–8 Wochen. Für kompetitivere Begriffe dauert es 3–6 Monate. Entscheidend ist die Domain-Authority — junge Domains profitieren am meisten von Long-Tail-Strategien." },
            { question: "Was kostet Marketing-Automatisierung mit KI?", answer: "Ein pSEO-Setup mit Template-Design, Daten-Pipeline und 50+ Seiten liegt bei 5.000–12.000 €. Content-Automatisierung für Social Media und LinkedIn beginnt ab 2.000 €/Monat. Der ROI zeigt sich durch organischen Traffic, der keine laufenden Werbekosten verursacht." },
        ],
    },
    {
        slug: "crm-prozessautomatisierung",
        seo: {
            title: "CRM Automatisierung mit KI – HubSpot & Salesforce ohne manuelle Pflege",
            description: "Schluss mit doppelten Einträgen und manuellen Abgleichen. KI synchronisiert HubSpot, Salesforce und ERP automatisch – für saubere Daten und mehr Zeit im Vertrieb.",
        },
        hero: {
            title: "CRM Prozessautomatisierung mit KI",
            subtitle: "Verbinden Sie Ihre Software-Inseln. Wir bauen die Pipelines, die Ihre Daten sauber halten.",
        },
        intro: `Deutsche Vertriebsteams verbringen laut Salesforce „State of Sales" 2024 nur 28 Prozent ihrer Arbeitszeit mit aktivem Verkauf — den Rest kostet manuelle Datenpflege. Doppelte CRM-Einträge, veraltete Stammdaten und fehlende Synchronisation zwischen HubSpot, ERP und Buchhaltungssystem sind dabei die häufigsten Ursachen.

KI-gestützte CRM-Automatisierung beseitigt diese Reibung strukturell: Eine Middleware-Schicht synchronisiert Kundendaten in Echtzeit zwischen allen verbundenen Systemen — ohne manuelle Eingriffe. Jede Änderung in HubSpot wird sofort gespiegelt, neue Leads aus Shopify landen automatisch in der richtigen Pipeline, DSGVO-konforme Audit-Logs protokollieren jede Datenbewegung.

Das Ergebnis: Laut einer McKinsey-Analyse aus 2023 erreichen Unternehmen mit sauberer CRM-Datenbasis 20 bis 30 Prozent höhere Vertriebskonversionsraten gegenüber Wettbewerbern mit fragmentierten Systemen. Nicht einzelne Prozesse werden optimiert — die Datenbasis selbst wird dauerhaft zuverlässig.`,
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
        faqs: [
            { question: "Was bringt CRM-Automatisierung im Mittelstand?", answer: "CRM-Automatisierung eliminiert manuelle Datenpflege, synchronisiert Kundendaten zwischen HubSpot, Salesforce und ERP in Echtzeit und verhindert doppelte Einträge. Typisches Ergebnis: 100% Datenkonsistenz und 10+ Stunden Zeitersparnis pro Woche im Vertriebsteam." },
            { question: "Welche Systeme lassen sich per KI synchronisieren?", answer: "Alle Systeme mit API: HubSpot, Salesforce, Pipedrive, DATEV, SAP, Microsoft Dynamics, Shopify, WooCommerce, Mailchimp und viele mehr. Die Middleware-Schicht über n8n verbindet auch Legacy-Systeme über Webhooks oder CSV-Import." },
            { question: "Ist CRM-Automatisierung DSGVO-konform?", answer: "Ja, wenn sie richtig implementiert wird. Unsere Systeme verarbeiten Daten ausschließlich auf europäischen Servern, protokollieren alle Verarbeitungen in Audit-Logs und unterstützen automatisierte Löschanfragen. Die Middleware synchronisiert nur freigegebene Datenfelder." },
            { question: "Wie lange dauert eine CRM-Integration?", answer: "Ein Standard-Setup (2 Systeme, bidirektionale Sync) dauert 2–3 Wochen. Komplexere Integrationen mit 4+ Systemen und Custom-Logik benötigen 4–8 Wochen. Wir starten immer mit einem API-Audit, um Aufwand und Risiken transparent zu machen." },
        ],
    },
    {
        slug: "kundenservice-automatisierung",
        seo: {
            title: "Kundenservice automatisieren mit KI — 60–80 % Tickets ohne Agent",
            description: "Kundenservice automatisieren im Mittelstand: KI-Agent löst Tier-1-Tickets vollautomatisch — Status, Rechnung, Adressänderung in Sekunden. Integriert in Zendesk, Intercom, Freshdesk. Setup in 2–4 Wochen.",
        },
        hero: {
            title: "Kundenservice automatisieren mit KI",
            subtitle: "Kein klassischer Chatbot — ein Agent, der echte Aktionen in Ihrem System ausführt: Erstattungen, Adressänderungen, Statusabfragen, Terminbuchungen.",
        },
        intro: `Kundenservice-Automatisierung mit KI verbindet einen LLM-basierten Agenten mit Ihrem Ticketsystem (Zendesk, Intercom, Freshdesk) und Ihren internen Wissensquellen wie Confluence, SharePoint oder Help-Center-Artikeln. Der Agent versteht freie Texteingaben in deutscher Sprache, durchsucht die Wissensbasis per Vektor-Suche und führt definierte Aktionen direkt im System aus — von Bestellungs-Status über Rechnungs-Reklamationen bis zur Terminverlegung.

Im Unterschied zu klassischen Chatbots oder Decision-Tree-Bots arbeitet ein KI-Agent ohne starre Pfade: Er bewertet jede Anfrage neu, kombiniert mehrere Wissensquellen und übergibt komplexe oder emotionale Fälle mit vollständigem Gesprächsprotokoll an menschliche Agents — ohne dass der Kunde Informationen wiederholen muss.

Im DACH-Mittelstand werden typischerweise 60-80 % der eingehenden Tier-1-Anfragen vollautomatisch gelöst. Wiederkehrende Themen wie Lieferstatus, Rechnungsfrage, Adressänderung, Öffnungszeiten oder Produkt-Information sind für KI-Agenten heute Standard. Komplexe technische Diagnose, Vertrags-Verhandlung oder Beschwerde-Eskalation bleiben beim Menschen.

Der Stack: GPT-4o oder Claude Sonnet als LLM-Kern, Pinecone oder Supabase pgvector für die Wissens-Vektorisierung, n8n oder LangChain für die Workflow-Orchestrierung, Anbindung an das vorhandene Ticketsystem per API. Setup-Zeit liegt bei 2-4 Wochen je nach Daten-Hygiene.`,
        problem: {
            title: "Was kostet manueller Kundenservice wirklich",
            items: [
                "Wiederkehrende Tier-1-Fragen wie Status, Rechnung oder Adressänderung machen 60-80 % aller Tickets aus und blockieren Mitarbeiter für komplexe Fälle",
                "Antwortzeiten von 4-24 Stunden bei E-Mail-Support führen zu Eskalationen, Folge-Tickets und niedrigerer NPS",
                "24/7-Erreichbarkeit kostet im DACH-Mittelstand 80.000-150.000 € pro Jahr für Schichtbesetzung — bei oft niedriger Auslastung in Randzeiten",
                "Mehrsprachiger Support skaliert nicht: Türkisch, Französisch oder Polnisch erfordern eigene Agenten oder teure Übersetzungs-Workflows",
            ],
        },
        process: {
            title: "Wie wir KI-Kundenservice in 2-4 Wochen einführen",
            steps: [
                { title: "Wissens-Ingestion", description: "Help-Center, Confluence, FAQs, PDFs werden chunked und in Pinecone oder Supabase pgvector vektorisiert. Inkl. Synonym-Mapping deutsch/englisch." },
                { title: "Action-Setup", description: "API-Anbindungen für die Top-10 Aktionen Ihres Ticket-Aufkommens (Status prüfen, Rechnung neu senden, Adresse ändern, Termin buchen, Erstattung anstoßen)." },
                { title: "Red-Teaming", description: "Adversarial Testing gegen Halluzinationen, Prompt-Injection und Edge-Cases. Min. 200 reale Test-Anfragen aus Ihrem Ticket-Archiv." },
                { title: "Schrittweiser Go-Live", description: "Erst Schatten-Modus (Antworten-Vorschläge nur für Agents), dann 10 % Auto-Antworten, dann Full-Rollout. Eskalations-Schwellen dynamisch justiert." },
            ],
        },
        features: {
            title: "Was der Agent kann (und was bewusst nicht)",
            items: [
                { title: "RAG mit Quellenangabe", description: "Antworten ausschließlich aus Ihrer verifizierten Wissensbasis. Jede Antwort enthält die Quelle (Help-Article-ID), damit Agents bei Eskalation den Kontext sofort sehen." },
                { title: "Function-Calling für echte Aktionen", description: "Der Agent ruft Ihre internen APIs: Bestellstatus, Rechnungs-Versand, Adress-Update, Termin-Verlegung, Mitgliedschafts-Pause. Aktions-Logs sind audit-fähig." },
                { title: "Human-Handoff mit Kontext", description: "Bei Unsicherheit, emotionalen Eskalationen oder definierten Schwellen (z.B. Erstattung > 500 €) übergibt der Agent mit vollständigem Gesprächsprotokoll und Vorschlag an einen Agent." },
                { title: "Mehrsprachigkeit nativ", description: "Deutsch, Englisch, Türkisch, Französisch, Polnisch, Spanisch — gleiche Wissensbasis, automatische Sprach-Erkennung. Kein separater Setup pro Sprache." },
            ],
        },
        benefits: {
            title: "Was sich messbar verändert",
            items: [
                "60-80 % weniger Tier-1-Tickets",
                "24/7 ohne Schichtbesetzung",
                "First-Response-Time unter 30 Sekunden",
            ],
        },
        caseStudy: {
            company: "Coach Bilge",
            result: "80% weniger No-Shows",
            description: "Wie Coach Bilge durch automatisierte Terminbuchung die No-Show-Rate drastisch senkte.",
            link: "/fallstudien/dkm-coach-bilge",
            image: "/logos/coach-bilge.avif",
        },
        faqs: [
            { question: "Was ist KI-Kundenservice-Automatisierung?", answer: "KI-Kundenservice-Automatisierung ist die Verbindung eines LLM-basierten Agenten (GPT-4o, Claude Sonnet) mit Ihrem Ticketsystem (Zendesk, Intercom, Freshdesk) und Ihren internen Wissensquellen. Der Agent versteht freie Texteingaben, antwortet aus der Wissensbasis und führt definierte Aktionen wie Statusabfragen oder Adressänderungen direkt im System aus — ohne menschlichen Eingriff." },
            { question: "Was kann ein KI-Kundenservice-Agent mehr als ein klassischer Chatbot?", answer: "Ein klassischer Chatbot folgt einem vordefinierten Decision-Tree und kann nur vorgefertigte Antworten geben. Ein KI-Agent versteht den Kontext einer Anfrage, kombiniert mehrere Wissensquellen per RAG (Retrieval-Augmented Generation) und führt echte Aktionen aus — Erstattungen veranlassen, Bestellstatus prüfen, Termine buchen oder Tickets mit vollständigem Kontext eskalieren." },
            { question: "Wie viel Prozent der Support-Tickets kann KI lösen?", answer: "Im DACH-Mittelstand lösen produktive Systeme 60-80 % der Tier-1-Anfragen vollautomatisch. Tier-1 sind wiederkehrende Themen wie Lieferstatus, Rechnungsfragen, Adressänderungen, Passwort-Reset oder Öffnungszeiten. Komplexe oder emotionale Fälle werden mit vollständigem Gesprächsprotokoll an menschliche Agents übergeben." },
            { question: "Welches Tool eignet sich für KI-Kundenservice — Zendesk, Intercom oder eigener n8n-Stack?", answer: "Zendesk und Intercom haben native KI-Funktionen (Zendesk AI, Fin) — gut für Standardfälle, monatliche Lizenzkosten von 19-99 € pro Agent. Ein eigener Stack auf n8n + OpenAI/Claude + Pinecone ist günstiger im laufenden Betrieb (200-800 € pro Monat unabhängig von Agent-Zahl), bietet aber mehr Flexibilität bei Custom-Aktionen und DSGVO-konformer EU-Hosting-Wahl. Für Mittelständler mit eigener Infrastruktur ist der n8n-Stack typischerweise die wirtschaftlichere Wahl." },
            { question: "Funktioniert KI-Kundenservice mit Intercom, Zendesk und Freshdesk?", answer: "Ja. Die Integration erfolgt über die jeweiligen APIs der Ticketsysteme — Intercom, Zendesk, Freshdesk, HubSpot Service Hub, Salesforce Service Cloud, ServiceNow. Bestehende Workflows, SLAs und Eskalations-Regeln bleiben erhalten; der KI-Agent agiert als zusätzliche First-Line." },
            { question: "Wie wird sichergestellt, dass die KI keine falschen Antworten gibt?", answer: "Drei Mechanismen kombiniert: Erstens RAG mit verifizierten Quellen — die KI darf nur aus Ihrer Wissensbasis antworten, nicht aus Trainingsdaten. Zweitens Red-Teaming vor Launch mit min. 200 realen Test-Anfragen aus Ihrem Ticket-Archiv. Drittens dynamische Eskalations-Schwellen: Bei niedrigem Confidence-Score, emotionalen Anfragen oder definierten Trigger-Wörtern eskaliert der Agent automatisch an einen Menschen." },
            { question: "Ist KI-Kundenservice DSGVO-konform?", answer: "Ja, wenn das Setup richtig gewählt wird. Drei Hebel: EU-Hosting der LLM-API (OpenAI hat seit 2024 EU-Data-Residency-Option, Claude via AWS Bedrock Frankfurt, Mistral La Plateforme nativ EU). Zweitens Auftragsverarbeitungs-Vertrag mit allen Subdienstleistern. Drittens Pseudonymisierung von PII vor LLM-Call wenn möglich. Der KI-Agent darf nicht zur Trainingsdaten-Generierung genutzt werden — das wird vertraglich ausgeschlossen." },
            { question: "Was kostet KI-Kundenservice-Automatisierung?", answer: "Setup mit Knowledge-Ingestion, Action-APIs, Red-Teaming und schrittweisem Rollout liegt bei 8.000-20.000 € einmalig. Laufende Kosten für LLM-APIs (GPT-4o oder Claude Sonnet) plus Hosting der Vektor-DB: 200-800 € pro Monat unabhängig von Agent-Zahl. Bei einem Support-Team ab 3 Agents ist der Break-Even typischerweise nach 2-3 Monaten erreicht." },
            { question: "Wie lange dauert die Einführung?", answer: "Standard-Setup für DACH-Mittelständler: 2-4 Wochen. Woche 1: Wissens-Ingestion und Vektorisierung. Woche 2: Action-Setup und API-Anbindung. Woche 3: Red-Teaming mit Test-Anfragen. Woche 4: Schatten-Modus und schrittweiser Rollout. Bei sehr unsauberen Help-Center-Daten verlängert sich Phase 1 um 1-2 Wochen für Daten-Hygiene." },
            { question: "Funktioniert das auch mehrsprachig — Türkisch, Französisch, Polnisch?", answer: "Ja. Moderne LLMs (GPT-4o, Claude Sonnet) erkennen die Eingabesprache automatisch und antworten in derselben Sprache. Wichtig ist, dass die Wissensbasis selbst nicht für jede Sprache separat gepflegt werden muss — die KI übersetzt zur Laufzeit aus dem deutschen Quell-Content. Das skaliert deutlich besser als getrennte Agenten-Teams pro Sprache." },
            { question: "Was passiert wenn der KI-Agent nicht weiterweiß?", answer: "Drei Fallback-Stufen: Erstens Klärungsfrage stellen wenn Anfrage mehrdeutig ist. Zweitens Eskalation an menschlichen Agent mit vollständigem Gesprächsprotokoll und Lösungsvorschlag — der Agent muss nicht von Null anfangen. Drittens proaktive Übergabe bei definierten Trigger-Wörtern wie Beschwerde, Kündigung, Erstattung über Schwellwert. Der Kunde erlebt einen nahtlosen Übergang ohne Wiederholungs-Aufwand." },
            { question: "Kann der Agent mit Sprachsteuerung kombiniert werden — also als Voice-Agent?", answer: "Ja. Voice-Agents nutzen denselben LLM-Kern plus Speech-to-Text (z.B. Whisper) und Text-to-Speech (z.B. ElevenLabs). Use-Case ist typischerweise eingehende Service-Hotline oder ausgehende Termin-Erinnerungen. Setup-Zeit liegt bei 4-6 Wochen statt 2-4 Wochen wegen zusätzlicher Latenz-Optimierung und Voice-Quality-Tests." },
        ],
    },
];
