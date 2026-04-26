// GEO-Enhancements für Wave 1+2 Pages (basierend auf GSC-Diagnose 2026-04-25)
// Wave 1 (Quality-Lock + Top-10-Position): crm-prozessautomatisierung, acilsatis, car-studio-ai
// Wave 2 (Hohe Impressionen): vertriebsautomatisierung, kundenservice-automatisierung, dokumentenextraktion-blog
//
// Forschungsbasis: GEO-State-of-the-Art Q2 2026 Konsolidierter Bericht im Vault
// Pattern: TLDR (40-60 Wörter) + Definition ("X ist Y") + Stats (Wert + Datum + Quelle)

import type { GeoData } from "@/lib/geoSchema";

export const solutionGeo: Record<string, GeoData> = {
  "crm-prozessautomatisierung": {
    tldr: "CRM-Prozessautomatisierung verbindet Vertriebsdaten, Kundenkommunikation und Wiedervorlagen zu einer KI-gesteuerten Pipeline. Eingehende Leads werden automatisch in HubSpot oder Pipedrive angelegt, mit Firmendaten angereichert und über n8n-Workflows an die zuständigen Vertriebler geroutet — ohne manuelle Pflege.",
    definition:
      "CRM-Prozessautomatisierung ist die regelbasierte Verknüpfung von CRM-Daten mit externen Quellen (E-Mail, Website-Formular, LinkedIn, Telefon-Logs) durch Workflow-Tools wie n8n oder Make. Ziel: Datenqualität ohne manuelle Eingabe. Typische Stack-Bestandteile sind HubSpot oder Pipedrive als CRM-Kern, OpenAI für Anreicherung und Apify für Scraping.",
    stats: [
      {
        value: "8 Std/Woche",
        claim: "durchschnittliche manuelle CRM-Pflege pro Vertriebler im DACH-Mittelstand",
        source: "ki-automatisieren.de ROI-Rechner-Default (interne Erhebung)",
        year: 2026,
      },
      {
        value: "80 %",
        claim: "Automatisierungs-Quote bei n8n-basierter CRM-Pipeline",
        source: "ki-automatisieren.de ROI-Rechner-Default",
        year: 2026,
      },
      {
        value: "2 Wochen",
        claim: "typische Setup-Zeit für n8n + HubSpot Integration",
        source: "Implementations-Erfahrung ki-automatisieren.de",
        year: 2026,
      },
    ],
  },

  vertriebsautomatisierung: {
    tldr: "KI-Vertriebsautomatisierung qualifiziert eingehende Leads in unter zwei Minuten, ruft sie per Voice-AI an und überträgt das vollständige Gesprächsprotokoll ins CRM. Der Vertriebler bekommt nur noch warme, qualifizierte Termine — Recherche, Erstkontakt und Datenerfassung laufen vollautomatisch über n8n und OpenAI.",
    definition:
      "Vertriebsautomatisierung ist die durchgängige Pipeline von Lead-Erfassung über Qualifizierung bis zur Termin-Vereinbarung ohne manuellen Eingriff. Sie unterscheidet sich von klassischen CRMs durch aktive Voice-AI-Erstkontakte und kontinuierliches Re-Scoring auf Basis von Verhalten und Engagement.",
    stats: [
      {
        value: "5 %",
        claim: "Terminquote bei n8n-basiertem KI-Outreach (Fallstudie Car Studio AI)",
        source: "ki-automatisieren.de Fallstudie Car Studio AI",
        sourceUrl: "https://ki-automatisieren.de/fallstudien/car-studio-ai/",
        year: 2026,
      },
      {
        value: "3.000+",
        claim: "personalisierte E-Mails ohne manuelle Arbeit pro Pipeline-Lauf",
        source: "ki-automatisieren.de Fallstudie Car Studio AI",
        sourceUrl: "https://ki-automatisieren.de/fallstudien/car-studio-ai/",
        year: 2026,
      },
      {
        value: "20+ Std/Monat",
        claim: "Zeitersparnis pro Vertriebler durch Wegfall manueller Recherche",
        source: "ki-automatisieren.de Fallstudie Car Studio AI",
        year: 2026,
      },
    ],
  },

  "leadgenerierung-ki": {
    tldr: "KI-Leadgenerierung kombiniert Web-Scraping (Apify), Datenanreicherung (Gemini, GPT-4o) und automatisiertes E-Mail-Outreach (Instantly.ai) zu einer durchgängigen Pipeline. Aus 1.000 kalten Kontakten entstehen typisch 50 qualifizierte Termine — bewiesene 5 % Terminquote bei Car Studio AI, ohne SDR-Stunden für Erstqualifizierung.",
    definition:
      "KI-Leadgenerierung ist der vollautomatische Prozess von Lead-Identifikation, Anreicherung und personalisierter Erstansprache mittels Sprachmodellen und Workflow-Engines. Im Gegensatz zu gekauften Adresslisten nutzt sie aktuelle, öffentlich verfügbare Daten (Google Maps, LinkedIn) und erstellt für jeden Empfänger eine kontextspezifische Erstansprache.",
    stats: [
      {
        value: "5 %",
        claim: "Terminquote bei KI-gestütztem Outreach (Car Studio AI Fallstudie)",
        source: "ki-automatisieren.de Fallstudie Car Studio AI",
        sourceUrl: "https://ki-automatisieren.de/fallstudien/car-studio-ai/",
        year: 2024,
      },
      {
        value: "3–5×",
        claim: "höhere Antwortquote vs. gekaufte Adresslisten",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        year: 2026,
      },
      {
        value: "1–2 Wochen",
        claim: "Setup-Zeit für funktionsfähige Lead-Pipeline (Scraping + Enrichment + Sending)",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        year: 2026,
      },
    ],
  },

  "strategieberatung-ki-sales-marketing": {
    tldr: "KI-Strategieberatung liefert keine PowerPoints, sondern laufenden Code. Der Prozess: Architecture-Design (1–2 Wochen), Build in n8n + Python (2–4 Wochen), Deployment auf Kunden-Servern, vollständige Source-Code-Übergabe. Der Kunde besitzt das System zu 100 %, ohne Vendor-Lock-in oder Lizenzgebühren.",
    definition:
      "KI-Strategieberatung im engeren Sinne ist die durchgängige Beratungs- und Implementierungsleistung von Architektur-Konzept über Code-Entwicklung bis zur produktiven Inbetriebnahme. Sie unterscheidet sich von klassischer Unternehmensberatung durch die zwingende Code-Übergabe und Investitionssicherheit für den Kunden.",
    stats: [
      {
        value: "100 %",
        claim: "IP-Übergabe an den Kunden — kein Vendor-Lock-in",
        source: "ki-automatisieren.de Standard-Vertragsmodell",
        year: 2026,
      },
      {
        value: "20–500",
        claim: "ideale Mitarbeiterzahl für KI-Strategieberatung im Mittelstand",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        year: 2026,
      },
      {
        value: "4–6 Wochen",
        claim: "typische Gesamtlaufzeit von Architektur-Design bis Go-Live",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        year: 2026,
      },
    ],
  },

  "marketing-automatisierung": {
    tldr: "Programmatic SEO erstellt 50–500 Landingpages aus strukturierten Daten und Templates — automatisiert statt manuell. Jede Seite zielt auf ein spezifisches Long-Tail-Keyword und wird mit echten branchenspezifischen Daten befüllt. Erste Rankings auf Long-Tail-Keywords nach 4–8 Wochen, kompetitivere Begriffe nach 3–6 Monaten.",
    definition:
      "Marketing-Automatisierung mit KI bezeichnet das automatisierte Erstellen, Veröffentlichen und Optimieren von SEO-Inhalten und Social-Media-Content über LLM-Pipelines. Im Kern stehen Astro-Templates, JSON-Datenhaltung und LLM-Inference (Claude Sonnet, GPT-4o), die hunderte Seiten in Stunden statt Wochen produzieren.",
    stats: [
      {
        value: "50–500",
        claim: "typische Anzahl Programmatic-SEO-Seiten pro Cluster",
        source: "ki-automatisieren.de pSEO-Erfahrung",
        year: 2026,
      },
      {
        value: "4–8 Wochen",
        claim: "Time-to-First-Ranking bei Long-Tail-Keywords mit niedriger Konkurrenz",
        source: "ki-automatisieren.de pSEO-Erfahrung",
        year: 2026,
      },
      {
        value: "5.000–12.000 €",
        claim: "Setup-Investition für pSEO-Pipeline (Templates + Daten + 50 Seiten)",
        source: "ki-automatisieren.de Standard-Pricing",
        year: 2026,
      },
    ],
  },

  "kundenservice-automatisierung": {
    tldr: "Kundenservice-Automatisierung beantwortet 70 % der eingehenden Anfragen ohne menschlichen Agent — durch KI-Bots auf Zendesk, Intercom oder eigenem n8n-Stack. Komplexe Fälle landen mit vollständigem Vorgespräch beim First-Level, Routine-Anfragen wie Status, Rechnung oder Kündigung laufen vollautomatisch in deutscher Sprache.",
    definition:
      "Kundenservice-Automatisierung ist die Verbindung eines LLM-basierten Chatbots oder Voice-Agents mit dem Ticketsystem (Zendesk, Intercom, Freshdesk) und internen Wissensquellen wie Confluence oder SharePoint. Im Gegensatz zu klassischen FAQ-Bots versteht sie freie Eingaben und führt Aktionen wie Bestellungs-Status oder Adress-Änderung selbst aus.",
    stats: [
      {
        value: "70 %",
        claim: "Quote der vollautomatisch lösbaren Tickets bei DACH-KMU-Setups",
        source: "ki-automatisieren.de ROI-Rechner-Default",
        year: 2026,
      },
      {
        value: "15 Std/Woche",
        claim: "manueller Service-Aufwand pro Mitarbeiter vor Automatisierung",
        source: "ki-automatisieren.de ROI-Rechner-Default",
        year: 2026,
      },
      {
        value: "30 €/Std",
        claim: "Standard-Stundensatz First-Level-Support im DACH-Mittelstand",
        source: "ki-automatisieren.de ROI-Rechner-Default",
        year: 2026,
      },
    ],
  },
};

export const caseStudyGeo: Record<string, GeoData> = {
  acilsatis: {
    tldr: "Acilsatis erreichte über 5.000 Immobilienmakler und Autohändler in wenigen Tagen — ohne Werbebudget. Eine Pipeline aus Instagram-Scraping, KI-Personalisierung und mehrkanaliger Auslieferung (DM + SMS) ersetzte klassische Performance-Marketing-Spendings vollständig und brachte hunderte neue Plattform-Nutzer in zwei Hauptsektoren.",
    definition:
      "Acilsatis ist eine türkische Multi-Listing-Plattform für Immobilien und Fahrzeuge. Die hier dokumentierte Wachstums-Pipeline ist ein KI-gestützter Direkt-Outreach an Branchen-Insider — kein Suchmaschinen- oder Performance-Werbe-Setup.",
    stats: [
      {
        value: "5.000+",
        claim: "kontaktierte Immobilienmakler und Autohändler",
        source: "Acilsatis-Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "0 €",
        claim: "Werbebudget für die Akquisition der ersten Hunderte Nutzer",
        source: "Acilsatis-Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "Wenige Tage",
        claim: "Setup-Zeit der gesamten Outreach-Pipeline",
        source: "Acilsatis-Implementation, ki-automatisieren.de",
        year: 2024,
      },
    ],
  },

  salevium: {
    tldr: "Salevium automatisierte den gesamten LinkedIn-Marketing-Prozess — von Content-Recherche über Erstellung bis zum One-Click-Approval. Die Follower-Anzahl überstieg 22.000, die Engagement-Rate verfünffachte sich, und der manuelle Content-Aufwand sank von wöchentlich 9–12 Stunden auf 0. Der Gründer fokussiert seitdem ausschließlich auf strategische Entscheidungen.",
    definition:
      "Salevium ist eine gamifizierte Vertriebstrainings-Plattform, die LinkedIn als primären Marketing-Kanal nutzt. Die hier dokumentierte Pipeline kombiniert wissenschaftlichen Research-Motor, Content-Generierung via LLM und ein One-Click-Approval-System zu einer vollautomatischen Authority-Building-Maschine.",
    stats: [
      {
        value: "22.000+",
        claim: "LinkedIn-Follower nach vollständiger Content-Automatisierung",
        source: "Salevium Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "0 %",
        claim: "manueller Content-Aufwand (vorher 9–12 Stunden pro Woche)",
        source: "Salevium Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "5×",
        claim: "Steigerung der Engagement-Rate gegenüber Pre-Automation-Baseline",
        source: "Salevium Implementation, ki-automatisieren.de",
        year: 2024,
      },
    ],
  },

  "erpa-teknoloji": {
    tldr: "ERPA Teknoloji erschloss mit der TOCHI-Marke den europäischen Stadion-Digitaldisplay-Markt durch KI-gestützte Recherche und personalisierte E-Mail-Kampagnen. Im ersten Monat wurden mehrere qualifizierte Meetings mit Stadion-Betreibern und Arena-Managern geplant — überdurchschnittliche Rücklaufquote im Branchenvergleich, internationale Sichtbarkeit erhöht.",
    definition:
      "ERPA Teknoloji ist ein türkischer Hersteller digitaler Stadion-Displays (Marke TOCHI). Die hier dokumentierte Markterschließungs-Pipeline kombiniert KI-Recherche zu Stadion-Betreibern in ganz Europa mit hochpersonalisierten E-Mail-Texten und automatisiertem Versand — kein Performance-Werbe-Setup.",
    stats: [
      {
        value: "Mehrere",
        claim: "qualifizierte Stadion-Meetings im ersten Kampagnenmonat",
        source: "ERPA Teknoloji Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "4+",
        claim: "Entscheider-Positionen pro Stadion (Manager, Operations, Marketing, Technik)",
        source: "ERPA Teknoloji Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "Europäisch",
        claim: "abgedeckter Zielmarkt (Stadien & Arenen DACH + UK + Südeuropa)",
        source: "ERPA Teknoloji Implementation, ki-automatisieren.de",
        year: 2024,
      },
    ],
  },

  cemkimsan: {
    tldr: "CemKimsan automatisierte die globale Reseller-Akquise mit KI-Recherche und personalisierten E-Mail-Sequenzen. Das System durchsucht globale Datenbanken nach potenziellen Vertriebspartnern, qualifiziert sie vor und versendet automatisch Erstansprachen — ein laufender Strom an verifizierten Reseller-Anfragen, skalierbar für jeden neuen Ländermarkt ohne zusätzliches Personal.",
    definition:
      "CemKimsan ist ein türkischer Chemie-Hersteller mit Fokus auf internationale Reseller-Vertriebskanäle. Die hier dokumentierte Akquise-Pipeline kombiniert KI-basierte Datenbank-Recherche, Verifizierungs-Routinen und mehrstufige Follow-up-Sequenzen zu einem skalierbaren Markt-Eintritts-System.",
    stats: [
      {
        value: "Global",
        claim: "abgedeckter Reseller-Markt — keine geographische Begrenzung",
        source: "CemKimsan Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "Verifiziert",
        claim: "Datenqualität — alle Leads durch zweistufige Anreicherung gegengeprüft",
        source: "CemKimsan Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "Skalierbar",
        claim: "Aufwand für neuen Ländermarkt — Tage statt Monate",
        source: "CemKimsan Implementation, ki-automatisieren.de",
        year: 2024,
      },
    ],
  },

  "dkm-coach-bilge": {
    tldr: "Coach Bilge automatisierte Terminbuchung, Erinnerungen und Follow-up-Kommunikation für sein Business-Coaching-Angebot. Das vollautomatisierte System reduzierte No-Shows um 80 %, steigerte die monatlichen Buchungen um 120 % und sparte 15 Stunden Verwaltungsaufwand pro Woche — der Coach fokussiert seitdem ausschließlich auf Klienten-Sessions.",
    definition:
      "Coach Bilge ist ein deutsch-türkischer Business-Coach mit Fokus auf gamifizierte Trainings für Führungskräfte. Die hier dokumentierte Service-Pipeline kombiniert Kalender-Integration, Buchungsportal, Erinnerungs-Automation und ein KI-gestütztes Feedback-System zu einer vollautomatischen Klienten-Pipeline.",
    stats: [
      {
        value: "+120 %",
        claim: "Steigerung der monatlichen Coaching-Buchungen",
        source: "Coach Bilge Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "−80 %",
        claim: "Reduktion der No-Show-Rate durch automatische Erinnerungssequenzen",
        source: "Coach Bilge Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "15 Std/Woche",
        claim: "Zeitersparnis durch Wegfall manueller Termin-Koordination",
        source: "Coach Bilge Implementation, ki-automatisieren.de",
        year: 2024,
      },
    ],
  },

  "car-studio-ai": {
    tldr: "Car Studio AI baute mit ki-automatisieren.de eine internationale Vertriebs-Pipeline auf, die in fünf Märkten parallel läuft — ohne zusätzliches Personal. Über 3.000 personalisierte E-Mails gehen automatisch raus, jede mit individuellem Bezug zum Empfänger; das Vertriebsteam spart monatlich über 20 Stunden manueller Recherche und schreibt nur noch mit qualifizierten Interessenten.",
    definition:
      "Car Studio AI ist ein Anbieter KI-gestützter Bildbearbeitung für Autohändler und Fahrzeugfotografie. Die hier dokumentierte Vertriebsinfrastruktur kombiniert Web-Scraping, LinkedIn-Analyse, KI-Personalisierung pro Empfänger und mehrstufiges Follow-up zu einer skalierbaren Pipeline ohne manuelle Recherche.",
    stats: [
      {
        value: "3.000+",
        claim: "personalisierte Outreach-E-Mails ohne manuelle Arbeit",
        source: "Car Studio AI Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "5 Länder",
        claim: "parallele Märkte ohne zusätzliches Vertriebspersonal",
        source: "Car Studio AI Implementation, ki-automatisieren.de",
        year: 2024,
      },
      {
        value: "20+ Std/Monat",
        claim: "Zeitersparnis im Vertriebsteam durch Pipeline-Automation",
        source: "Car Studio AI Implementation, ki-automatisieren.de",
        year: 2024,
      },
    ],
  },
};

export const hubGeo: GeoData = {
  tldr: "KI Automatisierung verbindet Vertrieb, Kundenservice und interne Prozesse zu einer einzigen n8n-Pipeline. Statt Insellösungen baut ki-automatisieren.de vollständige Systeme — von Lead-Eingang über Qualifizierung und Termin bis zum automatisierten Follow-up. Typische Einführungszeit: 2–4 Wochen, ohne IT-Abteilung.",
  definition:
    "KI Automatisierung bezeichnet den Einsatz von Sprachmodellen (GPT-4o, Claude Sonnet), Workflow-Engines (n8n, Make) und Daten-APIs zur Übernahme repetitiver Prozesse in Vertrieb, Marketing und Kundenservice. Im DACH-Mittelstand ersetzt sie manuelle Lead-Recherche, manuelles Ticket-Routing und manuelle CRM-Pflege — ohne Neuentwicklung von Software.",
  stats: [
    {
      value: "60–80 %",
      claim: "der Support-Tickets werden durch KI vollautomatisch gelöst",
      source: "ki-automatisieren.de ROI-Rechner & Kundenservice-Fallstudien",
      year: 2026,
    },
    {
      value: "5 %",
      claim: "Terminquote bei KI-gestütztem Outreach (Fallstudie Car Studio AI)",
      source: "Car Studio AI Implementation, ki-automatisieren.de",
      sourceUrl: "https://ki-automatisieren.de/fallstudien/car-studio-ai/",
      year: 2024,
    },
    {
      value: "2–4 Wochen",
      claim: "typische Einführungszeit für n8n-basierte KI-Automatisierung",
      source: "Implementations-Erfahrung ki-automatisieren.de",
      year: 2026,
    },
  ],
};

export const blogGeo: Record<string, GeoData> = {
  "dsgvo-konforme-ki-einfuehrung-mittelstand": {
    tldr: "DSGVO-konforme KI-Einführung im Mittelstand erfordert vier Bausteine: Auftragsverarbeitungsvertrag (AVV) mit dem LLM-Anbieter, EU-Server oder vertraglich abgesichertes Datenschutz-Niveau (Standardvertragsklauseln), Datenminimierung in den Prompts und ein dokumentierter Verzeichnis-Eintrag (Art. 30 DSGVO). Mit Azure OpenAI EU oder Mistral La Plateforme lassen sich alle Punkte ohne externe Beratung abdecken.",
    definition:
      "DSGVO-konforme KI-Einführung bezeichnet den Prozess, generative Sprachmodelle und KI-gestützte Workflows in einem Unternehmen produktiv zu nutzen, ohne gegen die Datenschutz-Grundverordnung zu verstoßen. Zentraler Knackpunkt ist der Datenfluss: Personenbezogene Daten dürfen nur unter klar definierten Voraussetzungen an US-LLM-Anbieter übermittelt werden.",
    stats: [
      {
        value: "Art. 30",
        claim: "DSGVO-Anforderung an Verzeichnis von Verarbeitungstätigkeiten — Pflicht für jedes KI-System",
        source: "DSGVO-Verordnung der EU",
        year: 2026,
      },
      {
        value: "EU-Server",
        claim: "ausreichend für DSGVO-Konformität bei Azure OpenAI und Mistral La Plateforme",
        source: "ki-automatisieren.de Beratungspraxis",
        sourceUrl: "https://ki-automatisieren.de/blog/dsgvo-konforme-ki-einfuehrung-mittelstand/",
        year: 2026,
      },
      {
        value: "AVV",
        claim: "Auftragsverarbeitungsvertrag — zwingend nötig vor produktiver Nutzung jedes externen LLM-Dienstes",
        source: "DSGVO-Verordnung der EU, Art. 28",
        year: 2026,
      },
    ],
  },

  "chatgpt-unternehmen-datenschutz-richtlinie": {
    tldr: "ChatGPT-Nutzung im Unternehmen erfordert eine schriftliche Datenschutz-Richtlinie, die festlegt: welche Datenarten Mitarbeiter eingeben dürfen, welche Tools genutzt werden müssen (ChatGPT Team statt freie Version) und wie Vorfälle gemeldet werden. Ohne Richtlinie haftet der Geschäftsführer persönlich für DSGVO-Verstöße einzelner Mitarbeiter.",
    definition:
      "Eine ChatGPT-Datenschutzrichtlinie ist die schriftliche Unternehmensvorgabe, die regelt, wie generative KI-Tools intern genutzt werden dürfen. Im Mittelstand ist sie 2026 nicht mehr optional — Versicherer und Auditoren fordern sie aktiv ein, und Tarifverträge nehmen zunehmend Bezug darauf.",
    stats: [
      {
        value: "ChatGPT Team",
        claim: "Mindeststufe für DSGVO-konforme Unternehmensnutzung — keine Trainingsverwertung",
        source: "OpenAI Datenschutzerklärung Enterprise-Tier",
        year: 2026,
      },
      {
        value: "Pflicht 2026",
        claim: "schriftliche KI-Richtlinie wird von DSGVO-Auditoren aktiv eingefordert",
        source: "ki-automatisieren.de Beratungspraxis",
        sourceUrl: "https://ki-automatisieren.de/blog/chatgpt-unternehmen-datenschutz-richtlinie/",
        year: 2026,
      },
      {
        value: "Persönliche Haftung",
        claim: "Geschäftsführer bei fehlender Richtlinie — bei DSGVO-Verstoß einzelner Mitarbeiter",
        source: "BGH-Rechtsprechung zur Geschäftsführerhaftung",
        year: 2026,
      },
    ],
  },

  "rechnungsverarbeitung-ki-automatisierung-mittelstand": {
    tldr: "KI-Rechnungsverarbeitung im Mittelstand erkennt Lieferantennummer, Beträge, Fälligkeiten und MwSt-Sätze automatisch aus PDFs, Scans oder E-Mail-Anhängen — mit 98–99 % Genauigkeit. Eingabe direkt in DATEV, SAP oder Lexoffice. Reduziert manuelle Rechnungserfassung von 26–40 Stunden pro Monat auf unter vier Stunden, mit messbarem ROI ab Monat zwei.",
    definition:
      "KI-Rechnungsverarbeitung bezeichnet die vollautomatische Erfassung, Validierung und Buchung eingehender Rechnungen mittels Vision-LLMs (GPT-4o, Claude Sonnet) und Workflow-Engines (n8n, Make). Sie unterscheidet sich von klassischer OCR durch Verständnis unstrukturierter Dokumente — auch handschriftliche Vermerke, Stempel und gescannte Faxe werden korrekt extrahiert.",
    stats: [
      {
        value: "98–99 %",
        claim: "Felderkennungsrate bei strukturierten Rechnungs-Dokumenten mit GPT-4o oder Claude Sonnet",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        sourceUrl: "https://ki-automatisieren.de/blog/rechnungsverarbeitung-ki-automatisierung-mittelstand/",
        year: 2026,
      },
      {
        value: "26–40 Std/Monat",
        claim: "manuelle Rechnungserfassung pro Buchhalter im DACH-Mittelstand",
        source: "ki-automatisieren.de Erhebung",
        year: 2026,
      },
      {
        value: "Monat 2",
        claim: "ROI-Break-Even bei typischem Mittelständler mit 200+ Eingangsrechnungen pro Monat",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        year: 2026,
      },
    ],
    howToSteps: [
      {
        name: "Rechnung empfangen",
        text: "PDF, Scan oder E-Mail-Anhang wird automatisch in den Workflow eingespeist (Watchfolder, IMAP-Postfach, n8n-Webhook).",
      },
      {
        name: "Felder extrahieren",
        text: "Vision-LLM (GPT-4o oder Claude Sonnet) liest Lieferantennummer, Rechnungsnummer, Beträge, Fälligkeit, MwSt-Sätze und Buchungstext aus.",
      },
      {
        name: "Validieren",
        text: "Plausibilitätsprüfung gegen Lieferanten-Stammdaten, Bestellbezug und MwSt-Logik. Auffälligkeiten gehen in manuellen Review.",
      },
      {
        name: "Buchen",
        text: "Strukturierte Datensätze werden via API-Connector nach DATEV, SAP, Lexoffice oder ERP-System gepusht.",
      },
    ],
    howToTotalTime: "PT2W",
  },

  "kundenservice-chatbot-ki-mittelstand-automatisierung": {
    tldr: "Ein moderner KI-Kundenservice-Chatbot beantwortet 60–80 % der Tier-1-Anfragen vollautomatisch — Status, Rechnung, Adressänderung, Kündigung. Im Gegensatz zu Rule-Based-Bots versteht er freie Eingaben in 60+ Sprachen und führt Aktionen direkt aus (Bestellungs-Abfrage, Adressänderung in CRM). Setup auf Zendesk, Intercom oder eigenem n8n-Stack in 2–4 Wochen.",
    definition:
      "Ein KI-Kundenservice-Chatbot ist die Verbindung eines LLM-basierten Sprachverstehers (GPT-4o, Claude Sonnet) mit dem Ticketsystem (Zendesk, Intercom, Freshdesk) und internen Wissensquellen (Confluence, SharePoint, Helpdocs). Er löst eigenständig Tier-1-Aufgaben und leitet komplexe Fälle mit vollständigem Vorgespräch an menschliche Agents weiter.",
    stats: [
      {
        value: "60–80 %",
        claim: "Quote der vollautomatisch lösbaren Support-Tickets bei DACH-KMU-Setups",
        source: "ki-automatisieren.de ROI-Rechner & Kundenservice-Fallstudien",
        sourceUrl: "https://ki-automatisieren.de/blog/kundenservice-chatbot-ki-mittelstand-automatisierung/",
        year: 2026,
      },
      {
        value: "60+ Sprachen",
        claim: "die ein moderner KI-Chatbot ohne Zusatzkosten beherrscht",
        source: "OpenAI GPT-4o & Anthropic Claude Sonnet Spec",
        year: 2026,
      },
      {
        value: "2–4 Wochen",
        claim: "typische Setup-Zeit für KI-Chatbot mit Wissens-Ingestion und Live-Aktionen",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        year: 2026,
      },
    ],
  },

  "prozessoptimierung-ki-mittelstand-leitfaden": {
    tldr: "Prozessoptimierung mit KI im Mittelstand folgt vier Phasen: Ist-Analyse mit Process-Mining (1 Woche), Identifikation der Top-3-Hebel (Kosten × Häufigkeit × Standardisierung), n8n + LLM-Pipeline-Bau (2–4 Wochen), Shadow-Mode-Test mit echten Daten. Typische Hebel: Rechnungseingang, Auftragsbestätigung, Kundenservice-Tier-1, Lead-Qualifizierung.",
    definition:
      "KI-Prozessoptimierung im Mittelstand bezeichnet den strukturierten Einsatz von Sprachmodellen, Workflow-Engines und Daten-APIs zur Reduktion manueller Arbeitsschritte in operativen Geschäftsprozessen. Sie unterscheidet sich von klassischer Geschäftsprozessoptimierung durch die zwingende Verbindung von Modell-Inferenz (Verstehen) und Aktion (Ausführen).",
    stats: [
      {
        value: "4 Phasen",
        claim: "Standard-Vorgehensmodell: Ist-Analyse → Hebel-Identifikation → Build → Shadow-Mode → Go-Live",
        source: "ki-automatisieren.de Beratungs-Methodik",
        sourceUrl: "https://ki-automatisieren.de/blog/prozessoptimierung-ki-mittelstand-leitfaden/",
        year: 2026,
      },
      {
        value: "Top-3 Hebel",
        claim: "Standard-Auswahl: Rechnungseingang, Auftragsbestätigung, Kundenservice-Tier-1",
        source: "ki-automatisieren.de Erfahrung aus 50+ Mittelstands-Projekten",
        year: 2026,
      },
      {
        value: "2–4 Wochen",
        claim: "typische Pipeline-Bauzeit pro identifiziertem Hebel",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        year: 2026,
      },
    ],
  },

  "dokumentenextraktion-ki-mittelstand-automatisierung": {
    tldr: "KI-Dokumentenextraktion liest Rechnungen, Lieferscheine, Verträge und Formulare automatisch aus — auch handgeschrieben oder gescannt. Ein Modell mit OCR-Kern erkennt Lieferanten, Beträge, Fälligkeiten und überträgt sie direkt nach DATEV, SAP oder Lexoffice. Mittelständler reduzieren manuelle Erfassung von 30+ Stunden pro Monat auf unter vier.",
    definition:
      "Dokumentenextraktion ist die automatische Umwandlung unstrukturierter Dokumente (PDF, Scan, Foto, E-Mail-Anhang) in strukturierte Datensätze für Buchhaltung, ERP oder CRM. Moderne KI-Systeme nutzen Vision-LLMs wie GPT-4o oder Claude Sonnet statt klassischer OCR-Engines und erreichen über 95 % Felderkennung auch bei unsauberen Vorlagen.",
    stats: [
      {
        value: "26–40 Std/Monat",
        claim: "manuelle Rechnungserfassung pro Buchhalter im DACH-Mittelstand",
        source: "ki-automatisieren.de Blog-Erhebung",
        sourceUrl: "https://ki-automatisieren.de/blog/dokumentenextraktion-ki-mittelstand-automatisierung/",
        year: 2026,
      },
      {
        value: "3–5 %",
        claim: "Fehlerquote bei manueller Rechnungserfassung im deutschen Finanzwesen",
        source: "ki-automatisieren.de Blog-Recherche",
        sourceUrl: "https://ki-automatisieren.de/blog/dokumentenextraktion-ki-mittelstand-automatisierung/",
        year: 2026,
      },
      {
        value: "<4 Std/Monat",
        claim: "verbleibender manueller Aufwand nach KI-Extraktions-Setup",
        source: "ki-automatisieren.de Implementations-Erfahrung",
        year: 2026,
      },
    ],
    howToSteps: [
      {
        name: "Dokument empfangen",
        text: "PDF, Scan oder E-Mail-Anhang wird automatisch in den Workflow eingespeist (per Watchfolder, IMAP-Postfach oder n8n-Webhook).",
      },
      {
        name: "Felder extrahieren",
        text: "Vision-LLM (GPT-4o oder Claude Sonnet) liest Lieferantennummer, Rechnungsnummer, Beträge, Fälligkeit und MwSt-Sätze aus.",
      },
      {
        name: "In ERP übertragen",
        text: "Strukturierte Datensätze werden via API-Connector nach DATEV, SAP, Lexoffice oder ERP-System gepusht.",
      },
      {
        name: "Freigabe-Routing",
        text: "Bei Beträgen über Schwellwert läuft eine Genehmigungs-Schleife per E-Mail oder Slack zum zuständigen Manager.",
      },
    ],
    howToTotalTime: "PT2W",
  },
};
