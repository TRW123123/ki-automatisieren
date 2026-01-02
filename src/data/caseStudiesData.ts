// Case Study Interface - German-only version with English field names
export interface CaseStudy {
  id: number;
  slug: string;
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

// All case studies in German
export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    slug: "car-studio-ai",
    category: "Vertriebsautomatisierung",
    title: "Car Studio AI",
    summary: "Aufbau einer nachhaltigen Vertriebsinfrastruktur auf internationalen Märkten ohne Teamvergrößerung durch KI im Vertrieb.",
    metaTitle: "Car Studio AI Fallstudie – KI im Vertrieb | 3000+ personalisierte E-Mails",
    metaDescription: "Erfolgsgeschichte von Car Studio AI: KI im Vertrieb für internationale Expansion. 3000+ personalisierte E-Mails, 20+ Stunden Zeitersparnis monatlich.",
    logo: "/logos/carstudio.avif",
    logoDimensions: { width: 200, height: 42 },
    kpis: [
      { label: "E-Mail-Versand", value: "3000+" },
      { label: "Zeitersparnis", value: "20+ Std./Monat" },
      { label: "Setup-Zeit", value: "1 Woche" }
    ],
    problem: [
      "Die richtigen Unternehmen und Entscheidungsträger finden",
      "Individuelle Nachrichten für jedes Unternehmen erstellen",
      "Ein regelmäßiges Follow-up-System aufbauen"
    ],
    solution: "Das KI-gestützte E-Mail-System erstellte personalisierte Nachrichten basierend auf den Eigenschaften jedes Unternehmens. Mit Informationen aus LinkedIn-Profilen und Unternehmenswebseiten wurden aufmerksamkeitsstarke und vertrauensbildende Inhalte erstellt.",
    implementationSteps: ["Automatischer E-Mail-Prozess", "KI-gestützte Kaltakquise", "Personalisierte Nachrichtenübermittlung"],
    results: [
      "Über 3000 personalisierte E-Mails ohne manuelle Arbeit versendet",
      "Hochwertige potenzielle Kunden durch Kaltakquise gewonnen",
      "Vertriebsteam spart monatlich über 20 Stunden"
    ],
    quote: "Dank der KI-Automatisierung im Vertrieb sprechen wir jetzt nur noch mit wirklich interessierten Kunden."
  },
  {
    id: 2,
    slug: "acilsatis",
    category: "Marketingautomatisierung",
    title: "Acilsatis",
    summary: "Schnelles Wachstum und organische Traffic-Steigerung im Immobilien- und Automobilsektor durch KI im Marketing.",
    metaTitle: "Acilsatis Fallstudie – KI im Marketing | 5000+ Plattform-Anzeigen",
    metaDescription: "Acilsatis Erfolg mit KI im Marketing: 5000+ automatisierte Plattform-Anzeigen, Instagram DM & SMS-Automatisierung.",
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
    solution: "Potenzielle Nutzer wurden über Instagram-Accounts automatisch identifiziert. Für jeden Nutzer wurden individuell zugeschnittene Nachrichten erstellt und sowohl per Instagram DM als auch SMS versendet.",
    implementationSteps: ["Datenerfassung (Scraping)", "Automatischer Nachrichtenversand", "KI-Video-Produktion"],
    results: [
      "Persönliche Kommunikation mit Hunderten Immobilienmaklern und Autohändlern",
      "Deutliche Steigerung des Website-Traffics und der Plattformbekanntheit",
      "Wöchentlicher Zeitaufwand für Marketing erheblich reduziert"
    ],
    quote: "Dank KI im Marketing kennen uns Branchenprofis jetzt und vertrauen uns."
  },
  {
    id: 3,
    slug: "salevium",
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
    category: "CRM-Prozessautomatisierung",
    title: "CemKimsan",
    summary: "Digitale Transformation des Kundenerlebnisses und der Vertriebsprozesse im Chemiesektor durch CRM-Prozessautomatisierung.",
    metaTitle: "CemKimsan Fallstudie – CRM-Prozessautomatisierung | Digitale Transformation",
    metaDescription: "CemKimsan: CRM-Prozessautomatisierung für digitale Transformation im Chemiesektor mit KI-gestützter Kundenbetreuung.",
    logo: "/logos/cemkimsan.avif",
    logoDimensions: { width: 149, height: 42 },
    kpis: [
      { label: "Kundenbeziehung", value: "360° Sicht" },
      { label: "Prozesseffizienz", value: "+40%" },
      { label: "Automatisierung", value: "End-to-End" }
    ],
    problem: [
      "Verstreute Kundeninformationen in verschiedenen Systemen",
      "Manuelle und zeitaufwändige Angebotsprozesse",
      "Schwierigkeiten bei der Nachverfolgung von Kundenanfragen"
    ],
    solution: "Ein umfassendes CRM-System wurde implementiert, das alle Kundeninteraktionen zentralisiert und automatisiert. KI-gestützte Empfehlungen helfen dem Vertriebsteam bei der Priorisierung.",
    implementationSteps: ["CRM-Systemintegration", "Datenmigration und -bereinigung", "Automatisierte Workflows", "KI-Empfehlungssystem"],
    results: [
      "360-Grad-Sicht auf alle Kundenbeziehungen",
      "40% Steigerung der Prozesseffizienz",
      "End-to-End-Automatisierung kritischer Vertriebsprozesse",
      "Verbesserte Kundenzufriedenheit durch schnellere Reaktionszeiten"
    ],
    quote: "Die CRM-Automatisierung hat unsere Vertriebseffizienz transformiert und uns eine völlig neue Sicht auf unsere Kunden gegeben."
  },
  {
    id: 6,
    slug: "dkm-coach-bilge",
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

// Utility functions
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

// For backwards compatibility
export function getLocalizedCaseStudies(language: 'tr' | 'de' | 'en' = 'de'): CaseStudy[] {
  return caseStudiesData;
}

export function getLocalizedCaseStudy(slug: string, language: 'tr' | 'de' | 'en' = 'de'): CaseStudy | undefined {
  return getCaseStudyBySlug(slug);
}
