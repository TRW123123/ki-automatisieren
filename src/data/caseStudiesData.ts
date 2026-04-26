export interface CaseStudy {
    id: number;
    slug: string;
    datePublished?: string;
    dateModified?: string;
    category: string;
    title: string;
    summary: string;
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    logo?: string;
    logoDimensions?: { width: number; height: number };
    kpis: Array<{ label: string; value: string }>;
    problem: string[];
    solution: string;
    implementationSteps: string[];
    results: string[];
    quote?: string;
}

export const caseStudiesData: CaseStudy[] = [
    {
        id: 1,
        slug: "car-studio-ai",
        datePublished: "2024-01-15",
        dateModified: "2026-03-31",
        category: "Vertriebsautomatisierung",
        title: "Car Studio AI",
        summary: "Car Studio AI ist ein Technologieunternehmen, das KI-gestützte Bildbearbeitung für Autohändler und Fahrzeugfotografie anbietet. Mit dem Ziel, international zu expandieren, benötigte das Unternehmen eine skalierbare Vertriebsinfrastruktur, die ohne Teamvergrößerung auf mehreren Märkten gleichzeitig operieren kann. Durch den Einsatz von KI im Vertrieb wurde ein System aufgebaut, das personalisierte Outreach-Kampagnen über Ländergrenzen hinweg automatisiert — von der Lead-Recherche bis zum Follow-up.",
        metaTitle: "KI-Vertriebsautomatisierung: Car Studio AI Fallstudie",
        metaDescription: "Wie Car Studio AI mit KI 3.000+ personalisierte Outreach-E-Mails automatisierte und monatlich 20 Stunden sparte. Fallstudie lesen.",
        logo: "/logos/carstudio.avif",
        logoDimensions: { width: 200, height: 42 },
        kpis: [
            { label: "E-Mail-Versand", value: "3000+" },
            { label: "Zeitersparnis", value: "20+ Std./Monat" },
            { label: "Setup-Zeit", value: "1 Woche" },
            { label: "Zielmärkte", value: "5+ Länder" }
        ],
        problem: [
            "Die richtigen Unternehmen und Entscheidungsträger auf internationalen Märkten finden — manuell nicht skalierbar bei Tausenden potenziellen Kunden in unterschiedlichen Branchen und Regionen",
            "Individuelle, kontextbezogene Nachrichten für jedes Unternehmen erstellen, die sich nicht wie Massenmails lesen und die spezifischen Schmerzpunkte des Empfängers ansprechen",
            "Ein regelmäßiges, mehrstufiges Follow-up-System aufbauen, das automatisch nachfasst ohne aufdringlich zu wirken — mit der richtigen Kadenz und Tonalität pro Markt",
            "Sprachbarrieren überwinden: Outreach in der Landessprache des Empfängers, ohne für jedes Land ein eigenes Team aufzubauen"
        ],
        solution: "Das KI-gestützte Vertriebssystem kombiniert mehrere Automatisierungsschichten zu einer durchgängigen Pipeline. Im ersten Schritt werden potenzielle Kunden durch automatisiertes Web-Scraping und LinkedIn-Analyse identifiziert — gefiltert nach Branche, Unternehmensgröße und Entscheidungsebene. Die KI analysiert dann das LinkedIn-Profil des Ansprechpartners, die Unternehmenswebseite und aktuelle Branchennachrichten, um hochpersonalisierte E-Mail-Inhalte zu generieren. Jede Nachricht enthält konkrete Bezüge zum Geschäft des Empfängers — kein generischer Pitch, sondern ein maßgeschneiderter Gesprächseinstieg. Das mehrstufige Follow-up-System sendet automatisch bis zu vier Nachfass-E-Mails mit variierenden Ansätzen (Value-Add, Social Proof, Direktansprache), angepasst an das bisherige Engagement des Empfängers. Das gesamte System läuft ohne manuellen Eingriff und skaliert über beliebig viele Zielmärkte.",
        implementationSteps: [
            "Lead-Recherche automatisiert: Web-Scraping und LinkedIn-Analyse identifizieren qualifizierte Entscheidungsträger nach Branche, Region und Position",
            "KI-Personalisierung: Jede E-Mail wird individuell generiert basierend auf Unternehmensdaten, LinkedIn-Profil und Branchenkontext",
            "Mehrstufiges Follow-up: Automatische Nachfass-Sequenzen mit vier Stufen, angepasst an das Engagement-Verhalten des Empfängers",
            "Mehrsprachiger Outreach: Automatische Übersetzung und kulturelle Anpassung für fünf Zielmärkte gleichzeitig",
            "Performance-Monitoring: Echtzeit-Dashboard mit Öffnungs-, Klick- und Antwortquoten pro Kampagne und Zielmarkt"
        ],
        results: [
            "Über 3.000 personalisierte E-Mails ohne manuelle Arbeit versendet — jede einzelne mit individuellen Bezügen zum Empfänger",
            "Hochwertige potenzielle Kunden durch Kaltakquise gewonnen, die zu konkreten Vertriebsgesprächen und Produktdemos führten",
            "Vertriebsteam spart monatlich über 20 Stunden, die vorher für manuelle Recherche und E-Mail-Erstellung aufgewendet wurden",
            "Internationale Expansion in fünf Märkte gleichzeitig ohne zusätzliches Vertriebspersonal",
            "Antwortquote auf Kaltakquise-E-Mails deutlich über Branchendurchschnitt durch KI-Personalisierung"
        ],
        quote: "Dank der KI-Automatisierung im Vertrieb sprechen wir jetzt nur noch mit wirklich interessierten Kunden. Was vorher ein Vollzeitjob war, läuft jetzt im Hintergrund."
    },
    {
        id: 2,
        slug: "acilsatis",
        datePublished: "2024-02-10",
        category: "Marketingautomatisierung",
        title: "Acilsatis",
        summary: "Schnelles Wachstum und organische Traffic-Steigerung im Immobilien- und Automobilsektor durch KI im Marketing.",
        metaTitle: "KI-Outreach: 5.000 Makler ohne Budget | ki-automatisieren.de",
        metaDescription: "Kein Werbebudget, hunderte neue Kunden: Wie automatisierte KI-Nachrichten den Vertrieb für Immobilienmakler komplett übernehmen – und was das für Ihr Unternehmen bedeutet.",
        logo: "/logos/acilsatis.avif",
        logoDimensions: { width: 91, height: 42 },
        kpis: [
            { label: "Plattform-Anzeigen", value: "5000+" },
            { label: "Zielsektoren", value: "2 Hauptsektoren" },
            { label: "Setup-Zeit", value: "Wenige Tage" }
        ],
        problem: [
            "Tausende von Immobilienmaklern und Autohändlern in kurzer Zeit erreichen",
            "Die Plattform potenziellen Nutzern persönlich und direkt vorstellen",
            "Organisches Wachstum ohne hohe Werbekosten realisieren"
        ],
        solution: `Acilsatis stand vor der klassischen Herausforderung einer neuen Plattform in einem etablierten Markt: Wie erreicht man tausende Branchen-Insider in kurzer Zeit, ohne ein Werbebudget zu verbrennen? Die Antwort war eine durchgängige KI-Outreach-Pipeline, die in wenigen Tagen aufgebaut und mehrere Wochen lang skaliert wurde.

Das System bestand aus vier Hauptkomponenten. Erstens identifizierte ein Apify-basiertes Instagram-Scraping-Modul zielgruppen-relevante Profile von Immobilienmaklern und Autohändlern in den DACH- und türkischen Märkten. Die Filterkriterien umfassten Hashtags, Geo-Lokation, Profilbeschreibung und Aktivitäts-Frequenz — so wurden Privatpersonen und inaktive Accounts automatisch ausgeschlossen.

Zweitens analysierte ein OpenAI-basiertes Personalisierungs-Modul jedes identifizierte Profil und erstellte individuelle Erstansprachen, die auf die letzten Postings, die regionale Spezialisierung und das Geschäftsmodell des Empfängers Bezug nahmen. Statt einer generischen "Hallo, schauen Sie sich Acilsatis an"-Nachricht erhielt jeder Empfänger eine kontextspezifische Mitteilung, die den konkreten Nutzen für sein Geschäft beschrieb.

Drittens lief der Versand über zwei parallele Kanäle: Instagram-DMs für direkte Plattform-Interaktion und SMS für Empfänger mit öffentlich verfügbarer Mobilnummer. Die Kanal-Auswahl erfolgte automatisch nach Datenverfügbarkeit. Eine n8n-Workflow-Engine orchestrierte das gesamte Sending mit Rate-Limiting (kein Spam-Trigger) und automatisierter Antwort-Erkennung.

Viertens wurde ein KI-Video-Produktions-Modul ergänzt, das für ausgewählte Hochwert-Empfänger personalisierte Kurz-Videos generierte — mit Bezug zum konkreten Markt der jeweiligen Branche. Diese Videos wurden manuell freigegeben und als Follow-up-Trigger eingesetzt, wenn die erste DM keine Antwort erhielt.

Innerhalb weniger Tage waren über 5.000 Branchen-Insider direkt angesprochen — mit hochpersonalisierten Nachrichten, die in klassischer Marketing-Logik bezahlte Anzeigen-Creatives erfordert hätten. Der wöchentliche manuelle Marketing-Aufwand sank gegen Null, der Plattform-Traffic stieg messbar und die ersten Hundert Plattform-Registrierungen erfolgten ohne einen einzigen Werbe-Euro.`,
        implementationSteps: [
            "Datenerfassung via Apify Instagram-Scraping (Filter: Hashtags, Geo, Aktivität)",
            "KI-Personalisierung via OpenAI (individuelle Erstansprache pro Profil)",
            "Multi-Channel-Versand via n8n (Instagram-DM + SMS, Rate-Limiting)",
            "KI-Video-Produktion für Hochwert-Empfänger (Manual-Approval-Loop)",
            "Antwort-Erkennung & Hand-off ins manuelle Sales-Team"
        ],
        results: [
            "5.000+ Branchen-Insider direkt angesprochen in wenigen Tagen",
            "Persönliche Kommunikation mit Hunderten Immobilienmaklern und Autohändlern",
            "Deutliche Steigerung des Website-Traffics und der Plattformbekanntheit",
            "Erste Hundert Plattform-Registrierungen ohne einen Werbe-Euro",
            "Wöchentlicher manueller Marketing-Aufwand gegen Null reduziert"
        ],
        quote: "Dank KI im Marketing kennen uns Branchenprofis jetzt und vertrauen uns."
    },
    {
        id: 3,
        slug: "salevium",
        datePublished: "2024-03-05",
        category: "Content-Automatisierung",
        title: "Salevium",
        summary: "Vollständige Automatisierung des LinkedIn-Marketing-Prozesses eines gamifizierten Vertriebstrainings-Unternehmens.",
        metaTitle: "Salevium Fallstudie – KI LinkedIn | Content-Produktion in Minuten",
        metaDescription: "Salevium nutzt KI LinkedIn-Automatisierung: Von Stunden zu Minuten bei Content-Erstellung. 90% Zeitersparnis, 22.000+ Follower.",
        logo: "/logos/salevium.avif",
        logoDimensions: { width: 152, height: 42 },
        kpis: [
            { label: "Manueller Content", value: "0%" },
            { label: "Follower", value: "22.000+" },
            { label: "Engagement-Steigerung", value: "5x" }
        ],
        problem: [
            "LinkedIn-Marketing-Prozess lag vollständig auf den Schultern des Gründers",
            "Content-Produktion nahm wöchentlich Stunden in Anspruch",
            "Kein skalierbares System vorhanden"
        ],
        solution: "Das entwickelte System schuf einen vollautomatischen Content-Flow, der die LinkedIn-Strategie ohne manuellen Aufwand ausführt. Wissenschaftlicher Research-Motor und One-Click-Approval-System optimierten den Prozess.",
        implementationSteps: ["Strategische Content-Planung", "Wissenschaftlicher Research-Motor", "Gamification-Konvertierungssystem", "One-Click-Approval-System"],
        results: [
            "0% manuelle Content-Produktion (vorher wöchentlich 9–12 Stunden)",
            "45% Steigerung der LinkedIn-Sichtbarkeit",
            "Follower-Anzahl über 22.000",
            "Content-Engagement-Rate verfünffacht"
        ],
        quote: "Gemeinsam können wir entdecken, wie das automatisierte System auf Ihr Geschäftsmodell angewendet werden kann."
    },
    {
        id: 4,
        slug: "erpa-teknoloji",
        datePublished: "2024-04-20",
        category: "Internationale Markterschließung",
        title: "ERPA Teknoloji",
        summary: "Strategischer Eintritt in den europäischen Markt für Stadion-Digitaldisplays mit der TOCHI-Marke durch KI in der Kundengewinnung.",
        metaTitle: "ERPA Teknoloji Fallstudie – KI in der Kundengewinnung | Europäischer Markt",
        metaDescription: "ERPA Teknoloji: KI in der Kundengewinnung für strategischen Eintritt in europäische Märkte.",
        logo: "/logos/erpa.avif",
        logoDimensions: { width: 42, height: 42 },
        kpis: [
            { label: "Zielmarkt", value: "Europäische Stadien" },
            { label: "Entscheidertypen", value: "4+ Positionen" },
            { label: "Kampagnendauer", value: "Erster Monat" }
        ],
        problem: [
            "Stadion-Betreiber im europäischen Markt erreichen",
            "Richtige Entscheidungsträger identifizieren",
            "Für jedes Stadion personalisierte Nachrichten erstellen"
        ],
        solution: "Mit KI-basierter Recherche wurde eine umfassende Datenbank für Stadion-Betreiber und Arena-Manager in ganz Europa erstellt. Kurze und effektive E-Mail-Texte wurden erstellt und automatisch versendet.",
        implementationSteps: ["Markt- und Entscheider-Recherche", "Personalisierte E-Mail-Texte", "Automatisierung und Lead-Management", "Antwort-Analyse und Vertriebsübergabe"],
        results: [
            "Mehrere qualifizierte Meetings im ersten Monat geplant",
            "Überdurchschnittliche Rücklaufquote im Branchenvergleich",
            "Direkte Antworten von Stadion-Betreibern",
            "Internationale Sichtbarkeit der TOCHI-Marke gesteigert"
        ],
        quote: "Mit KI haben wir nicht nur Nachrichten gesendet, sondern kontinuierlich optimiert. Der Prozess wurde effektiv und nachhaltig."
    },
    {
        id: 5,
        slug: "cemkimsan",
        datePublished: "2024-05-12",
        category: "Internationale Leadgenerierung",
        title: "CemKimsan",
        summary: "Automatisierte Identifikation und Akquise von internationalen Resellern durch KI-Recherche und personalisiertes Outreach.",
        metaTitle: "CemKimsan Fallstudie – Internationale Leadgenerierung | Reseller-Akquise",
        metaDescription: "CemKimsan Erfolg: Internationale Reseller-Akquise durch KI. Automatisierte Recherche von Partnern und personalisierte E-Mail-Kampagnen.",
        logo: "/logos/cemkimsan.avif",
        logoDimensions: { width: 149, height: 42 },
        kpis: [
            { label: "Zielmarkt", value: "Global / Reseller" },
            { label: "Datenqualität", value: "Verifizierte Leads" },
            { label: "Kampagne", value: "Personalisiert" }
        ],
        problem: [
            "Manuelle Suche nach internationalen Vertriebspartnern war ineffizient",
            "Schwierigkeit, die richtigen Ansprechpartner bei Resellern zu finden",
            "Kein skalierbarer Prozess für globale Akquise"
        ],
        solution: "Ein KI-System durchsuchte globale Datenbanken nach potenziellen Resellern und qualifizierte diese vor. Anschließend wurden hochpersonalisierte E-Mails versendet, um Partnerschaften anzubahnen.",
        implementationSteps: ["KI-Recherche globaler Reseller", "Daten-Anreicherung & Verifizierung", "Personalisierte E-Mail-Sequenzen", "Automatisches Follow-up"],
        results: [
            "Laufender Strom an qualifizierten Reseller-Anfragen",
            "Enorme Zeitersparnis bei der Marktrecherche",
            "Direkter Zugang zu Entscheidungsträgern international",
            "Skalierbarer Prozess für neue Ländermärkte"
        ],
        quote: "Das System liefert uns potenzielle Partner auf dem Silbertablett, während wir uns auf die Verhandlungen konzentrieren."
    },
    {
        id: 6,
        slug: "dkm-coach-bilge",
        datePublished: "2024-06-08",
        category: "Kundenservice-Automatisierung",
        title: "Coach Bilge",
        summary: "Automatisierte Terminbuchung und Kundenkommunikation für Business-Coaching durch KI-Kundenservice.",
        metaTitle: "Coach Bilge Fallstudie – Kundenservice-Automatisierung | Terminbuchung",
        metaDescription: "Coach Bilge: Kundenservice-Automatisierung für Business-Coaching mit automatisierter Terminbuchung und Follow-up.",
        logo: "/logos/coach-bilge.avif",
        logoDimensions: { width: 42, height: 42 },
        kpis: [
            { label: "Buchungen/Monat", value: "+120%" },
            { label: "No-Show-Rate", value: "-80%" },
            { label: "Zeitersparnis", value: "15h/Woche" }
        ],
        problem: [
            "Manuelle Terminkoordination war aufwendig",
            "Hohe No-Show-Rate bei gebuchten Terminen",
            "Ineffiziente Kundenkommunikation"
        ],
        solution: "Vollautomatisiertes Buchungssystem mit intelligenten Erinnerungen und Follow-up-Sequenzen. KI-gestützte Kommunikation für personalisierte Kundenbetreuung.",
        implementationSteps: ["Kalender-Integration", "Buchungsportal", "Erinnerungs-Automation", "Follow-up-Sequenzen", "Feedback-System"],
        results: [
            "120% mehr Buchungen pro Monat",
            "80% weniger No-Shows",
            "15 Stunden Zeitersparnis pro Woche",
            "Verbesserte Kundenbindung durch automatisierte Nachbetreuung"
        ],
        quote: "Ich kann mich jetzt voll auf meine Klienten konzentrieren, während das System die Verwaltung übernimmt."
    }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudiesData.find(cs => cs.slug === slug);
}

export function getAdjacentCaseStudies(currentSlug: string): { prev: CaseStudy | null; next: CaseStudy | null } {
    const currentIndex = caseStudiesData.findIndex(cs => cs.slug === currentSlug);
    return {
        prev: currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null,
        next: currentIndex < caseStudiesData.length - 1 ? caseStudiesData[currentIndex + 1] : null
    };
}
