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

export const blogGeo: Record<string, GeoData> = {
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
