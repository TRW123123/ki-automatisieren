export interface PseoPage {
  usecase: string;
  branche: string;
  usecaseLabel: string;
  brancheLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroPain: string;
  solutionHook: string;
  metrics: { value: string; label: string }[];
  processSteps: { title: string; desc: string }[];
  uniqueProseBlock: string;
  comparisonRows: { aspect: string; manual: string; automated: string }[];
  faq: { q: string; a: string }[];
  internalLinks: { href: string; label: string; desc: string }[];
}

export const pseoPages: PseoPage[] = [

  // ─── RECHNUNGSVERARBEITUNG × 5 BRANCHEN ───────────────────────────────────

  {
    usecase: "rechnungsverarbeitung",
    branche: "autohaus",
    usecaseLabel: "Rechnungsverarbeitung automatisieren",
    brancheLabel: "Autohaus",
    h1: "Rechnungsverarbeitung automatisieren im Autohaus",
    metaTitle: "Rechnungsverarbeitung Autohaus – KI statt manueller Eingabe",
    metaDescription: "Autohäuser verarbeiten täglich Teilelieferanten-, Importeur- und Leasingrechnungen manuell. KI reduziert den Aufwand pro Beleg von 17 auf unter 4 Euro.",
    heroPain: "Ein Autohaus mit 500+ Eingangsrechnungen im Monat beschäftigt seine Buchhalter fast ausschließlich mit Dateneingabe statt mit Steueroptimierung. Teilerechnungen vom Importeur, Werkstattlieferanten, Leasinggesellschaften und Tankstellenbelege des Außendienstes landen in unterschiedlichen Formaten — und müssen trotzdem alle pünktlich in DATEV.",
    solutionHook: "Ein zentrales KI-System liest alle Eingangsformate (ZUGFeRD, PDF, Papier-Scan) und übergibt vorkontierten Daten direkt an DATEV — ohne manuelle Eingabe, ohne Medienbruch.",
    metrics: [
      { value: "17,60 €", label: "Kosten pro Beleg manuell" },
      { value: "3,80 €", label: "Kosten pro Beleg automatisiert" },
      { value: "73 %", label: "Zeitersparnis in der Buchhaltung" },
    ],
    processSteps: [
      { title: "Belege zentral erfassen", desc: "E-Mail-Eingang, Scan-Stationen und EDI-Kanäle laufen in eine zentrale Eingangs-Pipeline." },
      { title: "KI-Erkennung & Extraktion", desc: "Das Modell liest Lieferantenname, Rechnungsnummer, Positionen und Skontofrist aus jedem Format." },
      { title: "DATEV-Übergabe", desc: "Vorkontierte Buchungsdaten werden API-gestützt an DATEV Unternehmen online übergeben." },
      { title: "Ausnahmen eskalieren", desc: "Unleserliche oder abweichende Belege werden markiert und an den Buchhalter weitergeleitet." },
    ],
    uniqueProseBlock: "Autohäuser arbeiten mit einem besonders heterogenen Rechnungseingang: Herstellerseitige ZUGFeRD-Rechnungen vom Importeur, klassische PDFs von freien Teilelieferanten, Papierbelege aus der Werkstatt und Tankkartenabrechnung des Fuhrparks. Jedes Format hat andere Felder, andere Kontonummern, andere Skontobedingungen. Ein KI-System das nur einen dieser Kanäle abdeckt, schafft mehr Ausnahmen als es löst. Der richtige Ansatz: eine einheitliche Eingangs-Pipeline, die alle Formate erkennt und normalisiert — bevor sie DATEV erreichen. Für Autohäuser mit DMS-Systemen (z.B. Autoline, Incadea, Kerridge) bauen wir zusätzlich die Schnittstelle zwischen Rechnungsverarbeitung und Fahrzeugbestand, damit Werkstattrechnungen automatisch den richtigen Aufträgen zugeordnet werden.",
    comparisonRows: [
      { aspect: "Bearbeitungszeit pro Rechnung", manual: "8–12 Minuten", automated: "unter 60 Sekunden" },
      { aspect: "Fehlerquote", manual: "3–5 %", automated: "unter 0,3 %" },
      { aspect: "Skontoverluste", manual: "regelmäßig", automated: "eliminiert" },
      { aspect: "DMS-Integration", manual: "manuelle Übertragung", automated: "automatischer Abgleich" },
    ],
    faq: [
      { q: "Funktioniert das auch mit unserem DMS?", a: "Ja. Wir bauen Schnittstellen zu den gängigen Autohaus-DMS-Systemen (Autoline, Incadea, Kerridge, Automaster). Die Rechnungsverarbeitung übergibt Daten direkt in den Fahrzeugauftrag." },
      { q: "Was passiert mit Papierrechnungen aus der Werkstatt?", a: "Papierbelege werden über Scan-Stationen oder ein Smartphone erfasst. OCR + KI extrahiert alle relevanten Felder. Die Erkennungsquote liegt bei gut lesbaren Belegen bei 98–99 %." },
      { q: "Ist DATEV-Integration möglich ohne IT-Projekt?", a: "Für DATEV Unternehmen online gibt es eine offizielle Belegübergabe-API. Die Integration läuft in der Regel innerhalb von 2–3 Wochen, ohne Änderungen an Ihrem DATEV-Setup." },
      { q: "Was kostet die Implementierung?", a: "Für ein Autohaus mit 300–800 Rechnungen pro Monat liegt die Investition typischerweise zwischen 4.000 und 9.000 Euro einmalig, plus 200–400 Euro monatliche Betriebskosten. Amortisation in 3–5 Monaten." },
    ],
    internalLinks: [
      { href: "/blog/rechnungsverarbeitung-ki-automatisierung-mittelstand/", label: "Leitfaden: KI-Rechnungsverarbeitung im Mittelstand", desc: "Komplette Anleitung mit Kostenrechnung und Systemvergleich." },
      { href: "/losungen/crm-prozessautomatisierung/", label: "CRM-Automatisierung für Autohäuser", desc: "Kundendaten zwischen DMS, CRM und ERP synchronisieren." },
      { href: "/prozessoptimierung/", label: "Prozessoptimierung mit KI", desc: "Welche weiteren Prozesse sich für Ihr Autohaus lohnen." },
    ],
  },

  {
    usecase: "rechnungsverarbeitung",
    branche: "maschinenbau",
    usecaseLabel: "Rechnungsverarbeitung automatisieren",
    brancheLabel: "Maschinenbau",
    h1: "Rechnungsverarbeitung automatisieren im Maschinenbau",
    metaTitle: "Rechnungsverarbeitung Maschinenbau – Three-Way-Match automatisch",
    metaDescription: "Maschinenbauunternehmen gleichen täglich Bestellungen, Lieferscheine und Rechnungen manuell ab. KI übernimmt den Three-Way-Match und verhindert Buchungsfehler.",
    heroPain: "Im Maschinenbau treffen täglich Rechnungen von Hunderten Teilelieferanten ein — Normteile, Rohmaterial, Zukaufteile. Der Three-Way-Match (Bestellung vs. Lieferschein vs. Rechnung) geschieht manuell, ist fehleranfällig und bindet qualifiziertes Personal, das eigentlich für den Einkauf gebraucht wird.",
    solutionHook: "KI-gestützter Three-Way-Match gleicht eingehende Rechnungen automatisch mit Bestelldaten und Wareneingangsbuchungen ab — und eskaliert nur echte Abweichungen an den Einkäufer.",
    metrics: [
      { value: "1 %", label: "Fehlerquote bei manueller Eingabe" },
      { value: "85 %", label: "Rechnungen im Dunkelverarbeitungsmodus" },
      { value: "< 6 Monate", label: "typische Amortisationszeit" },
    ],
    processSteps: [
      { title: "Rechnungseingang normalisieren", desc: "Alle Formate (EDI, PDF, XRechnung) laufen in eine einheitliche Pipeline." },
      { title: "Automatischer Three-Way-Match", desc: "KI gleicht Rechnung mit Bestelldaten und Wareneingangsbuchung im ERP ab." },
      { title: "Dunkelverarbeitung", desc: "Übereinstimmende Rechnungen werden ohne menschlichen Eingriff freigegeben und gebucht." },
      { title: "Exception-Management", desc: "Abweichungen in Preis, Menge oder Lieferdatum werden mit Kontext an den Einkäufer eskaliert." },
    ],
    uniqueProseBlock: "Maschinenbauunternehmen haben einen strukturierten, aber voluminösen Rechnungseingang: Normteile von Großhändlern kommen per EDI, Rohmaterial vom Stahl- oder Aluminiumlieferanten per PDF, Sonderteile vom Lohnfertiger per E-Mail-Anhang. Der Three-Way-Match ist dabei nicht optional, sondern Pflicht — denn Preisschwankungen bei Stahl oder Aluminium von 2–5 % können bei einem mittelständischen Maschinenbauer den Jahresgewinn erheblich beeinflussen. Eine KI die nur OCR beherrscht, reicht hier nicht. Sie muss den Wareneingangsstatus aus dem ERP lesen, die Toleranzgrenzen der Einkaufsrichtlinie kennen und Währungsschwankungen bei internationalen Lieferanten einkalkulieren. Wir bauen diese Logik auf Basis Ihrer bestehenden ERP-Daten — ob SAP, Microsoft Dynamics oder proAlpha.",
    comparisonRows: [
      { aspect: "Three-Way-Match", manual: "manueller Abgleich 15+ Min.", automated: "automatisch in Sekunden" },
      { aspect: "Abweichungserkennung", manual: "oft zu spät", automated: "sofort beim Eingang" },
      { aspect: "ERP-Integration", manual: "manuelle Buchung", automated: "direkte API-Übergabe" },
      { aspect: "Auslastung Einkauf", manual: "70 % Sachbearbeitung", automated: "strategische Arbeit" },
    ],
    faq: [
      { q: "Welche ERP-Systeme werden unterstützt?", a: "SAP Business One, SAP S/4HANA, Microsoft Dynamics, proAlpha und weitere. Die Integration erfolgt über offizielle APIs oder RFC-Schnittstellen, ohne Änderungen an Ihrer ERP-Konfiguration." },
      { q: "Was passiert bei Preisabweichungen durch Rohstoffschwankungen?", a: "Sie definieren Toleranzgrenzen (z.B. ±3 % zum Bestellpreis). Alles innerhalb der Toleranz wird automatisch freigegeben. Abweichungen darüber hinaus werden dem Einkäufer mit Kontext (aktueller Marktpreis, Lieferantenhistorie) eskaliert." },
      { q: "Kann die KI mit EDI-Formaten (EDIFACT, ANSI X12) umgehen?", a: "Ja. EDI-Formate werden nativ geparst. Für Großlieferanten mit eigenem EDI-System bauen wir einen direkten Kanal ohne Medienbruch." },
    ],
    internalLinks: [
      { href: "/blog/rechnungsverarbeitung-ki-automatisierung-mittelstand/", label: "KI-Rechnungsverarbeitung: Vollständiger Leitfaden", desc: "Systemvergleich, Kosten und Implementierungsplan." },
      { href: "/prozessoptimierung/", label: "Weitere Automatisierungspotenziale im Maschinenbau", desc: "Welche Prozesse den höchsten ROI liefern." },
      { href: "/prozesse-automatisieren/", label: "Prozesse automatisieren — Übersicht", desc: "Matrix aller automatisierbaren Geschäftsprozesse." },
    ],
  },

  {
    usecase: "rechnungsverarbeitung",
    branche: "e-commerce",
    usecaseLabel: "Rechnungsverarbeitung automatisieren",
    brancheLabel: "E-Commerce",
    h1: "Rechnungsverarbeitung automatisieren im E-Commerce",
    metaTitle: "Rechnungsverarbeitung E-Commerce – KI für Marketplace & Shop",
    metaDescription: "E-Commerce-Unternehmen kämpfen mit Tausenden Eingangsbelegen aus Marktplätzen, Versanddienstleistern und Retouren. KI automatisiert die komplette Verarbeitung.",
    heroPain: "Ein E-Commerce-Betrieb mit 1.000 Bestellungen täglich kämpft mit einer vergleichbaren Anzahl an Belegen: Marketplace-Abrechnungen (Amazon, Kaufland), Versanddienstleisterrechnungen (DHL, DPD, Hermes), Retourengutschriften und Einkaufsrechnungen der Lieferanten — alle in unterschiedlichen Formaten, alle zeitkritisch.",
    solutionHook: "Eine KI-Middleware extrahiert alle Belege automatisch, gleicht Marketplace-Abrechnungen mit Ihrem Shop-System ab und bucht Eingangsrechnungen direkt ins Warenwirtschaftssystem.",
    metrics: [
      { value: "5.000+", label: "Belege pro Monat automatisiert" },
      { value: "98 %", label: "Erkennungsquote bei digitalen Belegen" },
      { value: "2 Tage", label: "typischer Rückstand eliminiert" },
    ],
    processSteps: [
      { title: "Marketplace-Abrechnungen einlesen", desc: "Amazon Seller Central, Kaufland, Otto — Abrechnungsdateien werden automatisch abgeholt und verarbeitet." },
      { title: "Versandkosten zuordnen", desc: "DHL, DPD, Hermes-Rechnungen werden automatisch den Versandaufträgen zugeordnet." },
      { title: "Retourengutschriften verarbeiten", desc: "Gutschriften werden gegen die Originalrechnung gebucht und im Warenwirtschaftssystem aktualisiert." },
      { title: "Shop-System-Abgleich", desc: "Alle Buchungen werden mit Shopify, WooCommerce oder Plentymarkets synchronisiert." },
    ],
    uniqueProseBlock: "E-Commerce-Buchhaltung ist volumetrisch anders als klassischer Mittelstand: Nicht 200, sondern 2.000–10.000 Vorgänge pro Monat, viele davon mit geringem Einzelwert aber hohem Aggregatvolumen. Der Teufel steckt bei Marketplace-Sellern in den Details: Amazon-Abrechnungen enthalten Gebühren, Werbekosten, FBA-Lagerkosten und Erstattungen in einer einzigen CSV-Datei mit Hunderten Zeilen. Manuelle Zuordnung dauert Stunden und erzeugt regelmäßig Fehler bei der Umsatzsteuerzuordnung — besonders bei innergemeinschaftlichen Lieferungen in der EU. Unser System liest Marketplace-Abrechnungen direkt über die API, ordnet jeden Posten der richtigen Umsatzsteuerkategorie zu und übergibt die Buchungssätze an DATEV oder Ihren Steuerberater.",
    comparisonRows: [
      { aspect: "Amazon-Abrechnungen", manual: "manuelle CSV-Auswertung", automated: "API-direkte Verarbeitung" },
      { aspect: "Umsatzsteuer-Zuordnung EU", manual: "fehleranfällig", automated: "regelbasiert automatisch" },
      { aspect: "Retourenabgleich", manual: "manuell gegen Bestellliste", automated: "automatischer Match" },
      { aspect: "Bearbeitungszeit", manual: "2–3 Stunden täglich", automated: "unter 15 Minuten" },
    ],
    faq: [
      { q: "Funktioniert das mit Amazon Seller Central?", a: "Ja. Wir nutzen die Amazon SP-API um Abrechnungsdaten direkt abzuholen. Alle Gebühren, FBA-Kosten und Erstattungen werden automatisch kategorisiert." },
      { q: "Wie werden innergemeinschaftliche Lieferungen behandelt?", a: "Das System kennt die Umsatzsteuerkategorien für alle EU-Länder. OSS-Meldungen werden automatisch aus den kategorisierten Daten vorbereitet." },
      { q: "Welche Shop-Systeme werden unterstützt?", a: "Shopify, WooCommerce, Plentymarkets, Shopware 6. Die Synchronisation erfolgt über offizielle APIs." },
    ],
    internalLinks: [
      { href: "/blog/rechnungsverarbeitung-ki-automatisierung-mittelstand/", label: "Leitfaden Rechnungsverarbeitung mit KI", desc: "Systemvergleich und Implementierungsplan." },
      { href: "/blog/kundenservice-chatbot-ki-mittelstand-automatisierung/", label: "Kundenservice-Automatisierung für E-Commerce", desc: "Retourenabwicklung und Support-Tickets automatisieren." },
      { href: "/chatbot/", label: "KI Chatbot für E-Commerce", desc: "Lieferstatus, Retouren und FAQs ohne menschlichen Support." },
    ],
  },

  {
    usecase: "rechnungsverarbeitung",
    branche: "steuerberater",
    usecaseLabel: "Rechnungsverarbeitung automatisieren",
    brancheLabel: "Steuerberater",
    h1: "Rechnungsverarbeitung automatisieren für Steuerberater",
    metaTitle: "Rechnungsverarbeitung Steuerberater – DATEV-Automatisierung für Mandanten",
    metaDescription: "Steuerberater verbringen bis zu 40 % ihrer Zeit mit Belegerfassung. KI liest alle Mandantenbelege und übergibt sie vorkontiert an DATEV — für jeden Mandanten.",
    heroPain: "Steuerberatungskanzleien kämpfen monatlich mit demselben Problem: Mandanten liefern Belege unvollständig, in falschen Formaten und zu spät. Die Kanzleimitarbeiter verbringen Stunden mit Nachfragen, Scannen und manueller DATEV-Eingabe — anstatt mit steuerlicher Beratung.",
    solutionHook: "Ein mandantenspezifisches Belegeingangssystem automatisiert die Erfassung, Kategorisierung und DATEV-Übergabe — für alle Mandanten parallel, rund um die Uhr.",
    metrics: [
      { value: "40 %", label: "der Kanzleizeit für Belegerfassung" },
      { value: "17,60 €", label: "Kosten pro Beleg ohne Automatisierung" },
      { value: "300+", label: "Mandanten-Belege täglich automatisiert" },
    ],
    processSteps: [
      { title: "Mandantenportal einrichten", desc: "Jeder Mandant lädt Belege in ein dediziertes Portal hoch — per App, E-Mail oder Scan." },
      { title: "KI-Erkennung & Vorkontierung", desc: "Das System erkennt Belegart, Lieferant und Kostenstelle und schlägt die Buchung vor." },
      { title: "DATEV-Übergabe", desc: "Vorkontierten Daten werden an DATEV Unternehmen online übergeben — ohne manuelle Eingabe." },
      { title: "Freigabe durch Fachkraft", desc: "Der Steuerberater prüft und gibt frei — anstatt einzutippen." },
    ],
    uniqueProseBlock: "Steuerberatungskanzleien stehen vor einer besonderen Skalierungsherausforderung: Sie betreuen Dutzende bis Hunderte Mandanten, jeder mit eigenem Beleg-Chaos. Ein System das nur für einen Mandanten funktioniert, hilft nicht. Was Kanzleien brauchen, ist eine mandantenübergreifende Pipeline: jeder Mandant hat seinen eigenen Eingangskanal (E-Mail, Portal, WhatsApp-Foto), das System erkennt den Mandanten automatisch, kategorisiert nach dessen Kontenrahmen (SKR03 oder SKR04) und übergibt direkt an die mandantenspezifische DATEV-Umgebung. Besonders relevant: die E-Rechnungspflicht ab 2025. Mandanten, die noch keine ZUGFeRD-fähige Software haben, profitieren davon, dass die Kanzlei die XML-Extraktion übernimmt — als zusätzlicher Service ohne Mehraufwand.",
    comparisonRows: [
      { aspect: "Belegeingabe pro Mandant", manual: "2–4 Std./Monat", automated: "unter 20 Min./Monat" },
      { aspect: "E-Rechnungspflicht (ab 2025)", manual: "manueller Mehraufwand", automated: "automatisch ZUGFeRD-fähig" },
      { aspect: "Nachfragen bei Mandanten", manual: "regelmäßig", automated: "stark reduziert" },
      { aspect: "Skalierung auf neue Mandanten", manual: "linearer Aufwand", automated: "kein Mehraufwand" },
    ],
    faq: [
      { q: "Welche DATEV-Produkte werden unterstützt?", a: "DATEV Unternehmen online, DATEV Kanzlei-Rechnungswesen, DATEV Belege online. Die Übergabe erfolgt über die offizielle DATEV-Belegübergabe-API." },
      { q: "Wie funktioniert das für Mandanten ohne eigene Software?", a: "Mandanten fotografieren Belege per App oder laden sie per E-Mail hoch. Kein eigenes System auf Mandantenseite nötig." },
      { q: "Ist das für die E-Rechnungspflicht ab 2025 relevant?", a: "Ja, direkt. Das System extrahiert XML-Daten aus ZUGFeRD und XRechnung automatisch — Ihre Kanzlei ist damit für alle Mandanten ab Tag 1 der Pflicht vorbereitet." },
    ],
    internalLinks: [
      { href: "/blog/rechnungsverarbeitung-ki-automatisierung-mittelstand/", label: "KI-Rechnungsverarbeitung: Vollständiger Leitfaden", desc: "DATEV-Integration, Kosten und Systemauswahl." },
      { href: "/losungen/crm-prozessautomatisierung/", label: "Prozessautomatisierung für Kanzleien", desc: "Mandantenkommunikation und Fristenverwaltung automatisieren." },
      { href: "/prozessoptimierung/", label: "Prozessoptimierung für Steuerberater", desc: "Welche Kanzleiprozesse den höchsten ROI liefern." },
    ],
  },

  {
    usecase: "rechnungsverarbeitung",
    branche: "logistik",
    usecaseLabel: "Rechnungsverarbeitung automatisieren",
    brancheLabel: "Logistik",
    h1: "Rechnungsverarbeitung automatisieren in der Logistik",
    metaTitle: "Rechnungsverarbeitung Logistik – Lieferscheine & Frachtrechnungen automatisch",
    metaDescription: "Logistikunternehmen verarbeiten täglich Hunderte Frachtrechnungen, Lieferscheine und Zolldokumente. KI automatisiert die Extraktion und Buchung ohne manuelle Eingabe.",
    heroPain: "Speditionen und Logistikdienstleister kämpfen täglich mit einem Dokumentenstrom: Frachtbriefe (CMR), Zolldeklarationen, Lieferantenrechnungen, Subunternehmer-Abrechnungen und Kundengutschriften. Jedes Dokument muss manuell dem richtigen Auftrag zugeordnet, erfasst und gebucht werden — ein Prozess der Stunden frisst und Fehler produziert.",
    solutionHook: "KI-Dokumentenextraktion liest Frachtbriefe, Lieferscheine und Zolldokumente automatisch aus, ordnet sie dem richtigen Auftrag zu und übergibt Buchungsdaten direkt ans ERP oder TMS.",
    metrics: [
      { value: "500+", label: "Dokumente täglich automatisiert" },
      { value: "15 Min.", label: "statt 4 Stunden täglich" },
      { value: "0 €", label: "Skontoverluste durch verspätete Buchung" },
    ],
    processSteps: [
      { title: "Dokumenteneingang erfassen", desc: "Frachtbriefe, Lieferscheine und Zolldokumente per E-Mail, EDI oder Scan in die Pipeline." },
      { title: "KI-Extraktion", desc: "Auftragsnummer, Lieferant, Fracht, Zollwert und Fälligkeitsdatum werden automatisch ausgelesen." },
      { title: "Auftrags-Matching", desc: "Jedes Dokument wird automatisch dem richtigen Frachtauftrag im TMS zugeordnet." },
      { title: "ERP/TMS-Buchung", desc: "Kosten und Erlöse werden direkt im System gebucht — kein Medienbruch." },
    ],
    uniqueProseBlock: "Logistikunternehmen haben eine besonders hohe Dokumentendichte pro Umsatzeuro: Für jede gefahrene Ladung entstehen CMR-Frachtbrief, Lieferschein, möglicherweise Zolldeklaration, Subunternehmer-Abrechnung und Kundenrechnung. Wer 50 Touren täglich abwickelt, verarbeitet 250–500 Dokumente — von denen viele handschriftlich oder in schlechter Scan-Qualität ankommen. OCR allein löst das Problem nicht, weil Frachtbriefe keine standardisierten Felder haben. KI mit branchenspezifischem Training erkennt auch unstrukturierte CMR-Formulare, extrahiert die Kernfelder und ordnet sie automatisch dem richtigen Auftrag im TMS zu. Für Subunternehmer-Abrechnungen bauen wir zusätzlich die Prüflogik: Stimmt die abgerechnete Leistung mit dem Auftrag überein? Liegt der Preis im vereinbarten Rahmen? Erst dann wird automatisch freigegeben.",
    comparisonRows: [
      { aspect: "CMR-Frachtbriefe", manual: "manuelles Ablesen", automated: "KI-Extraktion auch handschriftlich" },
      { aspect: "Subunternehmer-Abgleich", manual: "Excel-Tabelle", automated: "automatischer Vertragsabgleich" },
      { aspect: "Zolldokumente", manual: "externe Eingabe", automated: "direkte Verarbeitung" },
      { aspect: "TMS-Integration", manual: "manuelle Buchung", automated: "API-direkte Übergabe" },
    ],
    faq: [
      { q: "Kann das System handschriftliche CMR-Frachtbriefe lesen?", a: "Ja. Das KI-Modell wurde auf handschriftliche und schlecht lesbare Logistik-Dokumente trainiert. Die Erkennungsquote liegt bei 92–96 %, Rest wird zur manuellen Nachkontrolle markiert." },
      { q: "Welche TMS-Systeme werden unterstützt?", a: "TMS123, Disponents, TimoCom und individuelle ERP-Systeme über REST-API. Bei proprietären Systemen prüfen wir im Vorgespräch die Integrationsmöglichkeit." },
      { q: "Wie werden Zolldeklarationen verarbeitet?", a: "ATLAS-Zolldokumente (DE) und EU-Zollformulare werden automatisch extrahiert. Für die Zollwert-Buchung gibt es eine direkte Schnittstelle zu ATLAS." },
    ],
    internalLinks: [
      { href: "/blog/rechnungsverarbeitung-ki-automatisierung-mittelstand/", label: "Leitfaden: KI-Rechnungsverarbeitung", desc: "Vollständiger Systemvergleich mit Kostenrechnung." },
      { href: "/prozesse-automatisieren/", label: "Prozessautomatisierung für Logistikunternehmen", desc: "Alle automatisierbaren Prozesse mit ROI-Matrix." },
      { href: "/prozessoptimierung/", label: "Prozessoptimierung in der Logistik", desc: "Priorisierungs-Matrix für Logistikprozesse." },
    ],
  },

  // ─── KUNDENSERVICE-AUTOMATISIERUNG × 5 BRANCHEN ───────────────────────────

  {
    usecase: "kundenservice-automatisierung",
    branche: "autohaus",
    usecaseLabel: "Kundenservice automatisieren",
    brancheLabel: "Autohaus",
    h1: "Kundenservice automatisieren im Autohaus",
    metaTitle: "Kundenservice Autohaus automatisieren – KI Chatbot für Händler",
    metaDescription: "Autohäuser verlieren täglich Serviceanfragen außerhalb der Öffnungszeiten. Ein KI-Chatbot beantwortet Fragen zu Fahrzeugen, Terminen und Finanzierung rund um die Uhr.",
    heroPain: "Ein Autohaus bekommt Anfragen zu Fahrzeugpreisen, Serviceterminen, Finanzierungsoptionen und Probefahrten — viele davon abends und am Wochenende, wenn kein Mitarbeiter erreichbar ist. Wer nicht sofort antwortet, verliert den Lead an den Wettbewerber der 24/7 verfügbar ist.",
    solutionHook: "Ein KI-Chatbot auf Ihrer Website beantwortet Fragen zu Ihrem Fahrzeugbestand, bucht Servicetermine und qualifiziert Interessenten — rund um die Uhr, ohne Wartezeit.",
    metrics: [
      { value: "68 %", label: "aller Anfragen außerhalb Öffnungszeiten" },
      { value: "< 3 Sek.", label: "Reaktionszeit des Chatbots" },
      { value: "3×", label: "mehr qualifizierte Leads pro Monat" },
    ],
    processSteps: [
      { title: "Fahrzeugbestand anbinden", desc: "Der Chatbot kennt Ihren aktuellen Bestand — Marke, Modell, Preis, Verfügbarkeit." },
      { title: "Anfragen qualifizieren", desc: "Budget, Wunschfahrzeug, Finanzierungsinteresse werden automatisch erfasst." },
      { title: "Terminbuchung", desc: "Probe- und Werkstatttermine werden direkt im Kalender gebucht." },
      { title: "CRM-Übergabe", desc: "Qualifizierte Leads landen automatisch im CRM mit vollständigem Gesprächskontext." },
    ],
    uniqueProseBlock: "Der Autohaus-Chatbot unterscheidet sich grundlegend von einem generischen Support-Bot: Er muss Ihren Fahrzeugbestand kennen, Finanzierungskonditionen erklären können und auf Herstellergarantien eingehen. Wenn ein Interessent fragt ob der BMW X3 aus dem Angebot noch verfügbar ist und welche Finanzierungsrate sich ergibt, braucht er eine konkrete Antwort — keine Weiterleitung an einen Berater. Wir trainieren den Chatbot auf Ihren aktuellen Bestand (via DMS-Anbindung), Ihren Preislisten und Ihren FAQs. Gleichzeitig erkennt er, wenn eine Anfrage den Rahmen des Chatbots übersteigt — und übergibt dann mit vollständigem Kontext an Ihren Verkäufer, der nicht mehr von vorn anfangen muss.",
    comparisonRows: [
      { aspect: "Verfügbarkeit", manual: "Mo–Fr 9–18 Uhr", automated: "24/7/365" },
      { aspect: "Reaktionszeit", manual: "Stunden bis Tage", automated: "unter 3 Sekunden" },
      { aspect: "Lead-Qualifizierung", manual: "im Erstgespräch", automated: "automatisch vorab" },
      { aspect: "Terminbuchung", manual: "Telefonat nötig", automated: "direkt im Chat" },
    ],
    faq: [
      { q: "Kann der Chatbot auf unseren aktuellen Fahrzeugbestand zugreifen?", a: "Ja. Wir binden Ihr DMS oder Ihren Bestandsexport (CSV/API) an. Der Chatbot kennt immer den aktuellen Bestand, Preise und Ausstattungsdetails." },
      { q: "Was passiert wenn der Chatbot eine Frage nicht beantworten kann?", a: "Er eskaliert die Anfrage mit vollständigem Gesprächskontext an Ihren Verkäufer per E-Mail oder CRM-Aufgabe. Kein Informationsverlust." },
      { q: "Auf welchen Kanälen funktioniert das?", a: "Website-Chat, WhatsApp Business und Facebook Messenger. Alle Kanäle laufen in einer einheitlichen Inbox zusammen." },
    ],
    internalLinks: [
      { href: "/chatbot/", label: "KI Chatbot für Unternehmen — Übersicht", desc: "Wie KI-Chatbots 65–80 % der Anfragen automatisieren." },
      { href: "/blog/kundenservice-chatbot-ki-mittelstand-automatisierung/", label: "Leitfaden: KI Chatbot im Mittelstand", desc: "Kosten, Anbieter und Implementierungsplan." },
      { href: "/fallstudien/acilsatis/", label: "Fallstudie: Autohandel mit KI-Automatisierung", desc: "Wie ein Kfz-Marktplatz mit KI hunderte Makler erreichte." },
    ],
  },

  {
    usecase: "kundenservice-automatisierung",
    branche: "maschinenbau",
    usecaseLabel: "Kundenservice automatisieren",
    brancheLabel: "Maschinenbau",
    h1: "Kundenservice automatisieren im Maschinenbau",
    metaTitle: "Kundenservice Maschinenbau automatisieren – Technischer Support mit KI",
    metaDescription: "Maschinenbauunternehmen verlieren Zeit mit wiederkehrenden Serviceanfragen. KI löst 65 % des technischen Tier-1-Supports ohne Ingenieure zu belasten.",
    heroPain: "Im Maschinenbau landen täglich dieselben Anfragen beim Service-Team: Bedienungsfragen, Ersatzteilnummern, Fehlercode-Erklärungen, Wartungsintervalle. Qualifizierte Ingenieure verbringen bis zu 30 % ihrer Zeit mit diesen Tier-1-Anfragen, die kein Expertenwissen erfordern.",
    solutionHook: "Ein KI-System das Ihre Maschinenhandbücher, Ersatzteilkataloge und Servicedokumentation kennt, beantwortet Standardanfragen sofort — und eskaliert komplexe Fälle an den richtigen Ingenieur.",
    metrics: [
      { value: "65 %", label: "Tier-1-Anfragen automatisch gelöst" },
      { value: "30 %", label: "Ingenieurzeit für echte Technik freigesetzt" },
      { value: "< 1 Min.", label: "Antwortzeit für Standardanfragen" },
    ],
    processSteps: [
      { title: "Wissensbasis aufbauen", desc: "Handbücher, Fehlercode-Listen, Wartungspläne und FAQs werden in die KI-Wissensbasis geladen." },
      { title: "Anfragen klassifizieren", desc: "Das System erkennt ob eine Anfrage Tier-1 (automatisch lösbar) oder Tier-2 (Experte nötig) ist." },
      { title: "Automatische Antwort", desc: "Tier-1-Anfragen werden sofort mit der richtigen Dokumentenreferenz beantwortet." },
      { title: "Eskalation mit Kontext", desc: "Komplexe Anfragen werden mit Maschinentyp, Fehlerbeschreibung und Kundenhistorie weitergeleitet." },
    ],
    uniqueProseBlock: "Technischer Support im Maschinenbau hat andere Anforderungen als Consumer-Chatbots: Die Antworten müssen präzise sein, auf die richtige Maschinengeneration verweisen und im Zweifel die korrekte Seite im Servicehandbuch zitieren. Ein generischer Chatbot der halluziniert ist hier gefährlicher als kein Chatbot. Wir bauen RAG-basierte Systeme (Retrieval-Augmented Generation): Die KI generiert keine Antworten aus sich selbst, sondern sucht zuerst in Ihrer Dokumentation und gibt dann die belegte Antwort zurück. Wenn keine verlässliche Antwort gefunden wird, sagt das System das explizit und eskaliert an den Servicetechniker. Für Anlagenbauer mit internationalen Kunden: mehrsprachige Unterstützung für EN, FR, PL, CZ ist in der Standardkonfiguration enthalten.",
    comparisonRows: [
      { aspect: "Fehlercode-Anfragen", manual: "Ingenieur recherchiert manuell", automated: "sofortige Dokumentensuche" },
      { aspect: "Ersatzteilnummern", manual: "Katalog durchsuchen", automated: "direkte KI-Abfrage" },
      { aspect: "Mehrsprachiger Support", manual: "nur mit Sprachkenntnissen", automated: "automatisch EN/FR/PL" },
      { aspect: "24/7 Erreichbarkeit", manual: "nur Geschäftszeiten", automated: "rund um die Uhr" },
    ],
    faq: [
      { q: "Was passiert wenn die KI eine falsche technische Antwort gibt?", a: "Das System gibt nur Antworten, die in Ihrer Dokumentation belegt sind (RAG). Bei Unsicherheit eskaliert es explizit. Halluzinationen werden durch strenge Konfidenz-Schwellen verhindert." },
      { q: "Wie wird die Wissensbasis aktualisiert wenn neue Maschinenversionen kommen?", a: "Sie laden neue Handbücher hoch, das System indexiert sie automatisch. Kein Neutraining nötig." },
      { q: "Kann das System in unser Ticketsystem integriert werden?", a: "Ja. Wir integrieren in Zendesk, Freshdesk, Jira Service Management und ähnliche Systeme über offizielle APIs." },
    ],
    internalLinks: [
      { href: "/chatbot/", label: "KI Chatbot — vollständige Übersicht", desc: "Wie Chatbots im Mittelstand eingesetzt werden." },
      { href: "/blog/kundenservice-chatbot-ki-mittelstand-automatisierung/", label: "KI Chatbot Leitfaden Mittelstand", desc: "Kosten, Anbieter und ROI-Berechnung." },
      { href: "/prozesse-automatisieren/", label: "Weitere automatisierbare Prozesse", desc: "Was sich neben Support noch lohnt." },
    ],
  },

  {
    usecase: "kundenservice-automatisierung",
    branche: "e-commerce",
    usecaseLabel: "Kundenservice automatisieren",
    brancheLabel: "E-Commerce",
    h1: "Kundenservice automatisieren im E-Commerce",
    metaTitle: "Kundenservice E-Commerce automatisieren – Retouren & Support mit KI",
    metaDescription: "E-Commerce-Unternehmen kämpfen mit Tausenden Support-Tickets zu Lieferstatus, Retouren und Produktfragen. KI löst 75 % davon ohne menschlichen Eingriff.",
    heroPain: "Ein E-Commerce-Shop mit 500 Bestellungen täglich generiert 50–150 Support-Tickets — Lieferstatus, Retourenantrag, Beschädigungen, Produktfragen. Peak-Season verdoppelt das Volumen. Mit einem festen Support-Team entsteht zwangsläufig ein Rückstand, der Bewertungen kostet.",
    solutionHook: "Ein KI-System das Ihren Shop, Ihr Warenwirtschaftssystem und Ihre Logistikdaten kennt, beantwortet Lieferstatus, Retourenanfragen und Produktfragen automatisch — ohne menschlichen Eingriff.",
    metrics: [
      { value: "75 %", label: "Tickets automatisch gelöst" },
      { value: "4,2 → 4,7", label: "Ø Bewertungsscore nach 3 Monaten" },
      { value: "0 €", label: "Mehrkosten in der Peak-Season" },
    ],
    processSteps: [
      { title: "Shop-System anbinden", desc: "Bestellstatus, Tracking-Daten und Produktinformationen werden live abgefragt." },
      { title: "Ticket-Klassifizierung", desc: "Eingehende Anfragen werden automatisch kategorisiert: Lieferstatus, Retoure, Beschädigung, Produktfrage." },
      { title: "Automatische Lösung", desc: "75 % der Anfragen werden sofort mit der richtigen Antwort oder Aktion beantwortet." },
      { title: "Eskalation bei Ausnahmen", desc: "Komplexe Fälle (Betrug, Rechtsstreit) werden mit vollständigem Kontext an den Support übergeben." },
    ],
    uniqueProseBlock: "E-Commerce-Support hat ein spezifisches Volumen-Problem: An normalen Tagen ist es beherrschbar, an Aktionswochen (Black Friday, Weihnachten) explodiert es. Wer seinen Support auf Peak-Volumen ausrichtet, zahlt das ganze Jahr für zu viel Personal. Wer es auf Normal-Volumen auslegt, ertrinkt in der Peak-Season. KI-Automatisierung löst dieses Dilemma: Das System skaliert automatisch ohne Mehrkosten. Für Retourenanfragen geht das System einen Schritt weiter: Es prüft ob die Rücksendung berechtigt ist (innerhalb der Frist, im Originalzustand), generiert automatisch das Retourenlabel und bucht die Gutschrift — alles ohne manuelle Intervention. Für Produktfragen: Das System kennt alle Produktdetails, Kompatibilitäten und häufig gestellten Fragen aus Ihrem Produktfeed.",
    comparisonRows: [
      { aspect: "Lieferstatus-Anfragen", manual: "manuell im Carrier-Portal", automated: "automatisch aus Tracking-API" },
      { aspect: "Retourenabwicklung", manual: "Ticket → Prüfung → Label", automated: "vollautomatisch in Minuten" },
      { aspect: "Peak-Season-Kapazität", manual: "Aushilfspersonal nötig", automated: "skaliert kostenlos" },
      { aspect: "Mehrsprachiger Support", manual: "nur mit Sprachkenntnissen", automated: "DE/EN/FR automatisch" },
    ],
    faq: [
      { q: "Kann das System Retouren selbstständig genehmigen?", a: "Ja, basierend auf Ihren definierten Regeln (Frist, Artikelkategorie, Kaufpreis). Sonderfälle werden zur manuellen Prüfung markiert." },
      { q: "Wie integriert sich das System in bestehende Helpdesk-Systeme?", a: "Wir integrieren in Zendesk, Freshdesk, Gorgias und andere E-Commerce-Helpdesks über APIs. Kein Systemwechsel nötig." },
      { q: "Was passiert bei betrügerischen Retourenversuchen?", a: "Das System erkennt Muster (mehrfache Retouren, unplausible Begründungen) und eskaliert diese zur manuellen Prüfung, statt sie automatisch zu genehmigen." },
    ],
    internalLinks: [
      { href: "/chatbot/", label: "KI Chatbot für E-Commerce", desc: "Lieferstatus und Retouren 24/7 automatisieren." },
      { href: "/blog/kundenservice-chatbot-ki-mittelstand-automatisierung/", label: "Leitfaden: KI Chatbot im Mittelstand", desc: "ROI-Rechnung und Anbietervergleich." },
      { href: "/rechnungsverarbeitung/e-commerce/", label: "Rechnungsverarbeitung für E-Commerce", desc: "Marketplace-Abrechnungen automatisch verarbeiten." },
    ],
  },

  {
    usecase: "kundenservice-automatisierung",
    branche: "steuerberater",
    usecaseLabel: "Kundenservice automatisieren",
    brancheLabel: "Steuerberater",
    h1: "Kundenkommunikation automatisieren für Steuerberater",
    metaTitle: "Mandantenkommunikation Steuerberater automatisieren – KI für Kanzleien",
    metaDescription: "Steuerberater verbringen Stunden mit Standard-Mandantenanfragen zu Fristen, Formularen und Dokumenten. KI beantwortet diese automatisch und entlastet die Kanzlei.",
    heroPain: "In jeder Kanzlei gibt es dieselben Mandantenanfragen: Wann ist die Steuererklärung fällig? Welche Belege brauchen Sie noch? Was bedeutet dieser Bescheid? Diese Fragen binden qualifizierte Fachkräfte, die eigentlich für Steuerberatung bezahlt werden.",
    solutionHook: "Ein KI-Assistent für Ihre Kanzlei beantwortet Standard-Mandantenanfragen zu Fristen, Formularen und Dokumentenanforderungen automatisch — rund um die Uhr, ohne Ihre Mitarbeiter zu belasten.",
    metrics: [
      { value: "60 %", label: "Mandantenanfragen ohne Kanzleimitarbeiter lösbar" },
      { value: "2 Std.", label: "täglich freigeset durch Automatisierung" },
      { value: "24/7", label: "Erreichbarkeit für Mandanten" },
    ],
    processSteps: [
      { title: "Wissensbasis konfigurieren", desc: "Fristen, Formulare, häufige Fragen und kanzleispezifische Prozesse werden hinterlegt." },
      { title: "Mandantenportal integrieren", desc: "Der Assistent ist im Mandantenportal oder per E-Mail-Autoresponder erreichbar." },
      { title: "Standard-Anfragen lösen", desc: "Fristenabfragen, Dokumentenchecklisten und Bescheiderklärungen automatisch beantworten." },
      { title: "Komplexe Fragen eskalieren", desc: "Steuerliche Beratungsanfragen werden mit Kontext an den zuständigen Berater weitergeleitet." },
    ],
    uniqueProseBlock: "Steuerberatungskanzleien haben eine klare Zwei-Klassen-Anfragen-Struktur: Informationsanfragen (Was ist die Frist für die USt-Voranmeldung? Welche Belege brauche ich für die EÜR?) und Beratungsanfragen (Lohnt sich für mich die Ist-Versteuerung?). Die erste Kategorie erfordert kein Steuerexpertenwissen, nur Faktenwissen. Diese kann KI zuverlässig beantworten. Die zweite Kategorie bleibt beim Steuerberater — dafür wird dieser bezahlt. Ein korrekt konfiguriertes System erkennt den Unterschied und leitet entsprechend. Für Kanzleien mit Mandantenportal (DATEV Meine Steuern, Smartsteuer-basierte Portale) bauen wir die Integration direkt in das Portal, damit Mandanten im gewohnten Umfeld bleiben.",
    comparisonRows: [
      { aspect: "Fristenabfragen", manual: "Telefonat oder E-Mail", automated: "sofortige Antwort 24/7" },
      { aspect: "Dokumentenanforderungen", manual: "individuelle Auskunft", automated: "automatische Checkliste" },
      { aspect: "Bescheiderklärungen", manual: "Rückruf nötig", automated: "KI erklärt Standardbescheide" },
      { aspect: "Mandantenzufriedenheit", manual: "abhängig von Erreichbarkeit", automated: "immer erreichbar" },
    ],
    faq: [
      { q: "Darf KI in einer Steuerkanzlei Mandantenfragen beantworten?", a: "Für reine Informationsanfragen zu Fristen, Formularen und Dokumenten ja. Steuerliche Beratung (Gestaltungsempfehlungen) bleibt dem Steuerberater vorbehalten. Das System ist so konfiguriert, dass es diese Grenze einhält." },
      { q: "Wie ist der Datenschutz bei Mandantendaten geregelt?", a: "Das System verarbeitet keine personenbezogenen Steuerdaten. Es beantwortet allgemeine Fragen zu Fristen und Formularen. Mandanten-spezifische Anfragen werden direkt an die Kanzlei weitergeleitet." },
      { q: "Funktioniert das mit unserem Mandantenportal?", a: "Wir integrieren in DATEV-basierte Portale, Agenda, ADDISON und individuelle Kanzleilösungen. Im Vorgespräch klären wir die technische Anbindung." },
    ],
    internalLinks: [
      { href: "/chatbot/", label: "KI Chatbot für Unternehmen", desc: "Wie KI-Chatbots Kundenanfragen automatisieren." },
      { href: "/rechnungsverarbeitung/steuerberater/", label: "Rechnungsverarbeitung für Steuerberater", desc: "Mandantenbelege automatisch an DATEV übergeben." },
      { href: "/blog/kundenservice-chatbot-ki-mittelstand-automatisierung/", label: "KI Chatbot Leitfaden", desc: "Kosten und ROI-Berechnung für Kanzleien." },
    ],
  },

  {
    usecase: "kundenservice-automatisierung",
    branche: "logistik",
    usecaseLabel: "Kundenservice automatisieren",
    brancheLabel: "Logistik",
    h1: "Kundenservice automatisieren in der Logistik",
    metaTitle: "Kundenservice Logistik automatisieren – Sendungsverfolgung mit KI",
    metaDescription: "Logistikunternehmen bearbeiten täglich Hunderte Sendungsanfragen manuell. KI beantwortet Tracking-Anfragen, Reklamationen und Lieferfragen automatisch.",
    heroPain: "Logistik-Disponenten verbringen täglich Stunden mit Anrufen und E-Mails von Kunden, die wissen wollen wo ihre Sendung ist, wann sie ankommt und warum sie sich verzögert. Diese Anfragen erfordern kein Expertenwissen, binden aber wertvolle Disponenten-Kapazität.",
    solutionHook: "Ein KI-System das Ihr TMS und alle Carrier-APIs kennt, beantwortet Sendungsanfragen, Verzögerungsbenachrichtigungen und Reklamationen automatisch — ohne Ihre Disponenten zu belasten.",
    metrics: [
      { value: "80 %", label: "Tracking-Anfragen ohne Disponenten" },
      { value: "Echtzeit", label: "Sendungsstatus für Kunden" },
      { value: "3 Std.", label: "täglich freigeset pro Disponent" },
    ],
    processSteps: [
      { title: "TMS und Carrier-APIs anbinden", desc: "Das System liest Sendungsstatus aus Ihrem TMS und direkt von DHL, DPD, Hermes, Schenker." },
      { title: "Proaktive Benachrichtigung", desc: "Verzögerungen werden automatisch an den Empfänger kommuniziert, bevor er anfragt." },
      { title: "Anfragen automatisch beantworten", desc: "Tracking, ETA, Reklamationsstatus — alles ohne manuellen Eingriff." },
      { title: "Reklamationen verwalten", desc: "Schadensmeldungen werden automatisch erfasst, klassifiziert und an den richtigen Bearbeiter weitergeleitet." },
    ],
    uniqueProseBlock: "In der Logistik ist Kundenservice primär reaktiv: Kunden fragen, weil sie keine Information haben oder weil etwas schiefläuft. Die beste Strategie ist daher nicht ein Chatbot, sondern proaktive Kommunikation: Das System erkennt Verzögerungen bevor der Kunde anruft und benachrichtigt ihn automatisch mit der neuen ETA und dem Grund. Das eliminiert 60–70 % der eingehenden Anrufe präventiv. Für die verbleibenden Anfragen ist ein KI-System, das alle Carrier-APIs kennt, in der Lage Echtzeitantworten zu geben, die der Disponent erst recherchieren müsste. Besonders relevant: Für Logistiker mit Großkunden-Portalen (EDI-basierte Statusmeldungen) bauen wir die automatische Portalaktualisierung mit, damit der Großkunde immer den aktuellen Status sieht ohne anzurufen.",
    comparisonRows: [
      { aspect: "Tracking-Anfragen", manual: "Disponent recherchiert manuell", automated: "sofortige API-Abfrage" },
      { aspect: "Verzögerungskommunikation", manual: "reaktiv nach Kundenanruf", automated: "proaktiv vor dem Anruf" },
      { aspect: "Reklamationserfassung", manual: "Telefonat + manuelle Eingabe", automated: "automatisch strukturiert" },
      { aspect: "Großkunden-Portal", manual: "manuelle Updates", automated: "Echtzeit-Synchronisation" },
    ],
    faq: [
      { q: "Welche Carrier werden unterstützt?", a: "DHL, DPD, Hermes, GLS, UPS, FedEx, DB Schenker, Dachser und weitere über offizielle Tracking-APIs. Bei proprietären TMS-Systemen klären wir die Integration im Vorgespräch." },
      { q: "Kann das System Schadensmeldungen selbstständig bearbeiten?", a: "Das System erfasst Schadensmeldungen strukturiert (Fotos, Beschreibung, Sendungsdaten) und leitet sie an den zuständigen Schadenbearbeiter weiter. Die finale Entscheidung über Ersatz bleibt beim Menschen." },
      { q: "Wie wird proaktive Verzögerungskommunikation ausgelöst?", a: "Das System überwacht Sendungsstatus kontinuierlich. Sobald eine Verzögerung erkannt wird (ETA-Verschiebung > X Stunden), wird automatisch eine Benachrichtigung an den Empfänger generiert." },
    ],
    internalLinks: [
      { href: "/chatbot/", label: "KI Chatbot für Unternehmen", desc: "Wie KI-Chatbots Kundenanfragen automatisieren." },
      { href: "/rechnungsverarbeitung/logistik/", label: "Rechnungsverarbeitung für Logistik", desc: "Frachtrechnungen und Lieferscheine automatisch verarbeiten." },
      { href: "/blog/kundenservice-chatbot-ki-mittelstand-automatisierung/", label: "KI Chatbot Leitfaden", desc: "ROI-Rechnung und Anbietervergleich." },
    ],
  },

  // ─── LEAD-QUALIFIZIERUNG × 5 BRANCHEN ─────────────────────────────────────

  {
    usecase: "lead-qualifizierung",
    branche: "autohaus",
    usecaseLabel: "Lead-Qualifizierung automatisieren",
    brancheLabel: "Autohaus",
    h1: "Lead-Qualifizierung automatisieren im Autohaus",
    metaTitle: "Lead-Qualifizierung Autohaus – KI für mehr Fahrzeugverkäufe",
    metaDescription: "Autohaus-Leads aus Online-Inseraten werden zu spät oder gar nicht kontaktiert. KI qualifiziert Interessenten sofort und bucht Termine automatisch.",
    heroPain: "Ein Autohaus mit 100 monatlichen Leads aus Mobile.de, AutoScout24 und der eigenen Website schafft es nicht, alle innerhalb von 5 Minuten zu kontaktieren. Wer länger wartet, verliert den Käufer — denn der hat parallel drei weitere Händler angeschrieben.",
    solutionHook: "KI qualifiziert jeden eingehenden Lead in Sekunden: Budget, Fahrzeugwunsch, Finanzierungsinteresse werden automatisch erfasst und der Lead erhält sofort eine persönliche Antwort — noch bevor Ihr Verkäufer die Anfrage liest.",
    metrics: [
      { value: "< 90 Sek.", label: "Zeit bis zur Erstantwort" },
      { value: "3×", label: "mehr gebuchte Probefahrten" },
      { value: "67 %", label: "Leads ohne manuellen Aufwand qualifiziert" },
    ],
    processSteps: [
      { title: "Lead-Erfassung aus allen Kanälen", desc: "Mobile.de, AutoScout24, Website-Formular, WhatsApp — alle Leads landen in einer Pipeline." },
      { title: "Sofort-Qualifizierung", desc: "Budget, Wunschfahrzeug, Finanzierungsinteresse und Timeline werden automatisch erfragt." },
      { title: "Scoring & Priorisierung", desc: "Heißeste Leads (kaufbereit, Budget klar, Termin gewünscht) landen oben im CRM Ihres Verkäufers." },
      { title: "Terminbuchung", desc: "Probefahrten und Beratungsgespräche werden direkt gebucht, ohne Telefonat." },
    ],
    uniqueProseBlock: "Der Autohandel hat ein bekanntes Lead-Problem: Digitale Interessenten wollen sofort eine Antwort, nicht in 4 Stunden. Studien zeigen, dass die Kontaktquote innerhalb der ersten 5 Minuten 9-fach höher ist als nach einer Stunde. Ein menschliches Verkaufsteam kann dieses Zeitfenster strukturell nicht einhalten — außerhalb der Geschäftszeiten schon gar nicht. Unser KI-System antwortet in Sekunden, nicht Stunden. Es stellt die richtigen Qualifizierungsfragen (Wunschfahrzeug, Budget, Inzahlungnahme?), trägt die Antworten strukturiert ins CRM ein und bucht bei Kaufbereitschaft direkt einen Termin. Der Verkäufer übernimmt einen warmen Lead mit vollständigem Profil, statt einen Kaltlead von vorne zu qualifizieren. Das ist unser Ansatz aus der Acilsatis-Fallstudie, skaliert auf Ihren Betrieb.",
    comparisonRows: [
      { aspect: "Erstantwort-Zeit", manual: "2–24 Stunden", automated: "unter 90 Sekunden" },
      { aspect: "Außerhalb Öffnungszeiten", manual: "keine Reaktion", automated: "sofortige Qualifizierung" },
      { aspect: "CRM-Datenpflege", manual: "manuell nach Gespräch", automated: "automatisch beim Lead-Eingang" },
      { aspect: "Probefahrt-Buchungsrate", manual: "variabel", automated: "3× höher nachgewiesen" },
    ],
    faq: [
      { q: "Aus welchen Quellen können Leads automatisch erfasst werden?", a: "Mobile.de, AutoScout24, eigene Website (Formular + Chat), WhatsApp Business, Facebook Lead Ads. Alle Quellen laufen in einem zentralen System zusammen." },
      { q: "Was macht das System wenn ein Lead nicht antwortet?", a: "Es sendet automatisch eine Follow-up-Sequenz (3 Nachrichten über 7 Tage) bevor es den Lead als inaktiv markiert. Die Sequenz ist personalisiert auf das angeschriebene Fahrzeug." },
      { q: "Wie integriert sich das in unser bestehendes CRM?", a: "Wir integrieren in die gängigen Autohaus-CRM-Systeme (Salesforce, HubSpot, spezifische DMS-CRM). Alle Lead-Daten und Qualifizierungsantworten werden automatisch als CRM-Datensatz angelegt." },
    ],
    internalLinks: [
      { href: "/fallstudien/acilsatis/", label: "Fallstudie: Autohandel mit KI-Automatisierung", desc: "Wie hunderte Makler mit automatisierten Nachrichten erreicht wurden." },
      { href: "/blog/vertrieb-lead-qualifizierung-ki-mittelstand/", label: "Lead-Qualifizierung mit KI — vollständiger Leitfaden", desc: "Scoring-Methoden, CRM-Integration und ROI." },
      { href: "/kundenservice-automatisierung/autohaus/", label: "Kundenservice-Automatisierung für Autohäuser", desc: "Den Lead nach dem Kauf automatisch betreuen." },
    ],
  },

  {
    usecase: "lead-qualifizierung",
    branche: "maschinenbau",
    usecaseLabel: "Lead-Qualifizierung automatisieren",
    brancheLabel: "Maschinenbau",
    h1: "Lead-Qualifizierung automatisieren im Maschinenbau",
    metaTitle: "Lead-Qualifizierung Maschinenbau – KI für B2B-Vertrieb",
    metaDescription: "Maschinenbauer verbringen 60 % der Vertriebszeit mit unqualifizierten Anfragen. KI filtert kaufbereite B2B-Leads heraus und bereitet Angebote vor.",
    heroPain: "Im Maschinenbau kommen täglich Anfragen rein: Studenten die Daten für ihre Bachelorarbeit suchen, Händler die nur Preise vergleichen und echte Kaufinteressenten mit konkretem Bedarf. Der Vertrieb behandelt alle gleich — und verschwendet dabei Zeit für die ersten zwei Kategorien.",
    solutionHook: "KI analysiert jede Anfrage, erkennt echte Kaufsignale und priorisiert den Vertrieb auf die Interessenten mit echter Kaufabsicht — während Tier-2-Anfragen automatisch bearbeitet werden.",
    metrics: [
      { value: "60 %", label: "weniger Zeit für unqualifizierte Anfragen" },
      { value: "2×", label: "mehr Angebote pro Vertriebsmitarbeiter" },
      { value: "14 Tage", label: "kürzere Angebotserstellungszeit" },
    ],
    processSteps: [
      { title: "Anfragen klassifizieren", desc: "KI erkennt ob eine Anfrage von einem echten Kaufinteressenten, einem Händler oder einem Informationssucher kommt." },
      { title: "Qualifizierungsfragen stellen", desc: "Budget, Timeline, technische Spezifikationen und Entscheiderrolle werden automatisch erfragt." },
      { title: "Lead-Scoring", desc: "Jeder Lead bekommt einen Score basierend auf Kaufbereitschaft und strategischem Fit." },
      { title: "Vertrieb priorisieren", desc: "Der Außendienst bekommt täglich eine priorisierte Liste der heißesten Leads." },
    ],
    uniqueProseBlock: "B2B-Vertrieb im Maschinenbau hat lange Zyklen — von der ersten Anfrage bis zum Auftrag vergehen oft 3–12 Monate. In dieser Zeit ist die größte Herausforderung nicht die Akquisition neuer Leads, sondern die intelligente Pflege der bestehenden Pipeline. KI kann Kaufsignale erkennen, die ein Mensch übersieht: Wer die Technische Dokumentation herunterlädt, die Referenzliste aufruft und dann eine Anfrage schickt, ist heißer als jemand der direkt nach dem günstigsten Preis fragt. Diese Signale werden automatisch zusammengeführt und in ein Lead-Score verwandelt. Für Hersteller mit Händlernetz: Das System unterscheidet zwischen Direkt-Endkunden-Anfragen und Händler-Anfragen, leitet entsprechend weiter und bereitet die richtigen Unterlagen (Endkundenkatalog vs. Händlerkonditionsliste) vor.",
    comparisonRows: [
      { aspect: "Anfragen-Priorisierung", manual: "subjektiv durch Vertrieb", automated: "datenbasiertes Scoring" },
      { aspect: "Kaufsignal-Erkennung", manual: "Erfahrung des Verkäufers", automated: "automatisch alle Touchpoints" },
      { aspect: "Angebotsvorbereitung", manual: "2–3 Stunden", automated: "Datenblätter automatisch zusammengestellt" },
      { aspect: "Händler vs. Endkunde", manual: "manuelle Unterscheidung", automated: "automatische Klassifizierung" },
    ],
    faq: [
      { q: "Wie erkennt die KI ernsthafte B2B-Kaufinteressenten?", a: "Das System analysiert Verhaltenssignale (heruntergeladene Dokumente, besuchte Seiten), Unternehmensgröße, Budget-Signale aus der Anfrage und Entscheiderrolle. Kombination dieser Signale ergibt den Lead-Score." },
      { q: "Kann das System Anfragen auf Englisch und anderen Sprachen bearbeiten?", a: "Ja. Das System unterstützt DE, EN, FR und weitere Sprachen. Für internationale Märkte (DACH, Benelux, CEE) ist Mehrsprachigkeit Standard." },
      { q: "Wie wird das Vertriebsteam eingebunden?", a: "Das Team sieht täglich eine priorisierte Lead-Liste mit Scoring, Kontext und empfohlener nächster Aktion. Keine Systemumstellung — Anzeige im bestehenden CRM." },
    ],
    internalLinks: [
      { href: "/blog/vertrieb-lead-qualifizierung-ki-mittelstand/", label: "Lead-Qualifizierung mit KI — vollständiger Leitfaden", desc: "B2B-Scoring, CRM-Integration und Praxisbeispiele." },
      { href: "/losungen/leadgenerierung-ki/", label: "KI-Leadgenerierung für den Mittelstand", desc: "Wie neue Leads automatisch generiert werden." },
      { href: "/kundenservice-automatisierung/maschinenbau/", label: "Kundenservice-Automatisierung Maschinenbau", desc: "Technischen Support automatisieren." },
    ],
  },

  {
    usecase: "lead-qualifizierung",
    branche: "e-commerce",
    usecaseLabel: "Lead-Qualifizierung automatisieren",
    brancheLabel: "E-Commerce",
    h1: "Lead-Qualifizierung automatisieren im E-Commerce",
    metaTitle: "Lead-Qualifizierung E-Commerce – B2B-Anfragen mit KI filtern",
    metaDescription: "E-Commerce-Unternehmen im B2B erhalten täglich Händleranfragen die manuell qualifiziert werden. KI filtert seriöse Partner heraus und bereitet Erstgespräche vor.",
    heroPain: "B2B-E-Commerce erhält täglich Händler- und Wiederverkäufer-Anfragen — von kleinen Einzelhändlern die Mindestmengen unterschreiten bis zu Großabnehmern mit echtem Volumen. Alle werden gleich behandelt, obwohl 80 % der Anfragen nicht das Zielprofil erfüllen.",
    solutionHook: "KI qualifiziert B2B-Händleranfragen automatisch nach Ihren definierten Kriterien und übergibt nur passende Partner an Ihren Key Account Manager.",
    metrics: [
      { value: "80 %", label: "Anfragen unterhalb Mindestprofil automatisch bearbeitet" },
      { value: "5×", label: "mehr Key-Account-Zeit für Top-Partner" },
      { value: "48 Std.", label: "statt 2 Wochen Erstantwort" },
    ],
    processSteps: [
      { title: "Partneranfragen klassifizieren", desc: "Umsatzpotenzial, Mindestabnahme, Branche und Region werden automatisch geprüft." },
      { title: "Nicht-passende Anfragen automatisch bearbeiten", desc: "Händler die Kriterien nicht erfüllen, erhalten eine automatische, professionelle Ablehnung oder alternative Angebote." },
      { title: "Top-Partner priorisieren", desc: "Qualifizierte Großkunden landen sofort auf dem Schreibtisch des Key Account Managers." },
      { title: "Onboarding vorbereiten", desc: "Zertifikat-Prüfungen, Handelsregisterauszüge und Konditionsblätter werden automatisch angefordert." },
    ],
    uniqueProseBlock: "B2B-E-Commerce hat ein strukturelles Qualifizierungsproblem: Das Interesse an einer Händlerpartnerschaft kommt über das gleiche Formular wie eine Kleinstbestellung. Ohne Qualifizierungs-Filter landet ein Großabnehmer mit 500.000 € Jahresumsatzpotenzial in derselben Inbox wie ein Einzelhändler mit Mindestabnahme von 200 €. KI löst das durch automatische Prä-Qualifizierung: Das System analysiert verfügbare Signale (Unternehmensgröße aus LinkedIn/Handelsregister, geografische Region, Anfrage-Sprache und -Details) und ordnet jeden Interessenten einer Kategorie zu. Nur Partner die alle Kriterien erfüllen, werden dem Key Account zugewiesen. Alle anderen erhalten automatisch eine maßgeschneiderte Antwort — professionell, aber effizient.",
    comparisonRows: [
      { aspect: "Erstqualifizierung", manual: "jede Anfrage manuell", automated: "automatische Kriterien-Prüfung" },
      { aspect: "Reaktionszeit Top-Partner", manual: "1–2 Wochen", automated: "innerhalb 48 Stunden" },
      { aspect: "Onboarding-Unterlagen", manual: "manuell angefordert", automated: "automatisch zusammengestellt" },
      { aspect: "KAM-Fokus", manual: "auf allen Anfragen", automated: "nur auf qualifizierten Partnern" },
    ],
    faq: [
      { q: "Welche Qualifizierungskriterien können definiert werden?", a: "Mindestbestellwert, Region, Handelsregistereintrag, Branchenzugehörigkeit, Bonität-Check über externe APIs. Sie definieren die Kriterien, wir bauen die Logik." },
      { q: "Was passiert mit Anfragen die die Kriterien nicht erfüllen?", a: "Je nach Konfiguration: automatische Ablehnung mit professionellem Text, Verweis auf B2C-Kanal, oder Einladung zum Start mit kleinerem Volumen. Kein Lead fällt unbeantwortet durch." },
      { q: "Kann das System Handelsregisterauszüge automatisch prüfen?", a: "Ja, über APIs zu Handelsregister.de und Creditreform kann das System automatisch Bonität und Unternehmensexistenz prüfen." },
    ],
    internalLinks: [
      { href: "/blog/vertrieb-lead-qualifizierung-ki-mittelstand/", label: "Lead-Qualifizierung mit KI — vollständiger Leitfaden", desc: "B2B-Scoring und CRM-Integration." },
      { href: "/kundenservice-automatisierung/e-commerce/", label: "Kundenservice-Automatisierung E-Commerce", desc: "Support-Tickets und Retouren automatisieren." },
      { href: "/rechnungsverarbeitung/e-commerce/", label: "Rechnungsverarbeitung für E-Commerce", desc: "Marketplace-Abrechnungen automatisch verarbeiten." },
    ],
  },

  {
    usecase: "lead-qualifizierung",
    branche: "steuerberater",
    usecaseLabel: "Lead-Qualifizierung automatisieren",
    brancheLabel: "Steuerberater",
    h1: "Neumandat-Qualifizierung automatisieren für Steuerberater",
    metaTitle: "Neumandat-Qualifizierung Steuerberater – KI für Kanzlei-Wachstum",
    metaDescription: "Steuerberater erhalten täglich Mandantenanfragen die zeitaufwendig qualifiziert werden müssen. KI prüft Fit, Umsatzpotenzial und übergibt nur passende Neumandanten.",
    heroPain: "Steuerberatungskanzleien erhalten regelmäßig Anfragen von potenziellen Neumandanten, von denen viele nicht zum Kanzleiprofil passen — falsche Größenklasse, falscher Schwerpunkt, schlechte Zahlungshistorie. Die Qualifizierung dauert trotzdem 30–60 Minuten pro Anfrage.",
    solutionHook: "KI qualifiziert Neumandat-Anfragen automatisch nach Umsatzgröße, Branche, Schwerpunkt-Match und weiteren Kriterien — bevor ein Berater Zeit investiert.",
    metrics: [
      { value: "70 %", label: "nicht-passende Anfragen automatisch bearbeitet" },
      { value: "45 Min.", label: "pro Anfrage gespart" },
      { value: "2×", label: "mehr Zeit für passende Neumandanten" },
    ],
    processSteps: [
      { title: "Anfrage-Intake automatisieren", desc: "Standardisiertes Erstgespräch-Formular mit KI-Vorqualifizierung auf der Kanzlei-Website." },
      { title: "Fit-Analyse", desc: "Unternehmensgröße, Branche, Beratungsbedarf und Region werden gegen Kanzleiprofil geprüft." },
      { title: "Weiterleitung oder Absage", desc: "Passende Neumandanten werden für ein Erstgespräch eingeplant, nicht-passende erhalten eine professionelle Weiterempfehlung." },
      { title: "Erstgespräch vorbereiten", desc: "Für qualifizierte Anfragen wird automatisch eine Gesprächsvorbereitung mit den relevanten Informationen erstellt." },
    ],
    uniqueProseBlock: "Kanzleiwachstum hat einen oft übersehenen Engpass: die Erstqualifizierung von Neumandanten. Eine Kanzlei die gewachsen ist und einen klaren Schwerpunkt hat (z.B. Heilberufe, produzierendes Gewerbe, E-Commerce), verliert täglich Zeit mit Anfragen die nicht zu diesem Schwerpunkt passen. KI löst das nicht durch Ablehnen um des Ablehnens willen, sondern durch intelligente Weiterleitung: Eine Anfrage die nicht zum eigenen Profil passt, wird professionell mit einer Empfehlung für eine besser geeignete Kanzlei beantwortet. Das schützt die Kanzlei vor falschen Mandanten, hinterlässt aber trotzdem einen positiven Eindruck. Für passende Anfragen wiederum: Das System bereitet das Erstgespräch mit allen verfügbaren Informationen vor — Branche, Unternehmensgröße, wahrscheinlicher Beratungsbedarf — damit der erste Eindruck beim Mandanten sitzt.",
    comparisonRows: [
      { aspect: "Erstqualifizierung", manual: "30–60 Min. pro Anfrage", automated: "automatisch in Minuten" },
      { aspect: "Nicht-passende Anfragen", manual: "höfliche Absage nach Gespräch", automated: "professionelle Weiterempfehlung" },
      { aspect: "Erstgespräch-Vorbereitung", manual: "manuell recherchiert", automated: "automatisch zusammengestellt" },
      { aspect: "Kanzlei-Profil-Fokus", manual: "variiert", automated: "konsequent eingehalten" },
    ],
    faq: [
      { q: "Kann die KI wirklich beurteilen ob ein Mandant zum Kanzleiprofil passt?", a: "Die KI prüft definierte Kriterien: Umsatzgröße, Branche, Region, Beratungsschwerpunkt. Die Kriterien legen Sie fest — die KI wendet sie konsequent an." },
      { q: "Wie reagieren potenzielle Mandanten auf eine automatische Erstantwort?", a: "Mit einer klar formulierten, professionellen Antwort innerhalb von Minuten — besser als auf eine Antwort nach 3 Tagen zu warten. Die Qualität der Kommunikation ist entscheidend, nicht ob sie KI-generiert ist." },
      { q: "Funktioniert das auch für Kanzleien mit mehreren Standorten und Schwerpunkten?", a: "Ja. Das System kann nach Standort und Schwerpunkt differenzieren und Anfragen intern an den richtigen Partner weiterleiten." },
    ],
    internalLinks: [
      { href: "/blog/vertrieb-lead-qualifizierung-ki-mittelstand/", label: "Lead-Qualifizierung mit KI — vollständiger Leitfaden", desc: "B2B-Scoring und CRM-Integration." },
      { href: "/kundenservice-automatisierung/steuerberater/", label: "Mandantenkommunikation automatisieren", desc: "Standard-Anfragen ohne Kanzleimitarbeiter lösen." },
      { href: "/rechnungsverarbeitung/steuerberater/", label: "Rechnungsverarbeitung für Steuerberater", desc: "Belege automatisch an DATEV übergeben." },
    ],
  },

  {
    usecase: "lead-qualifizierung",
    branche: "logistik",
    usecaseLabel: "Lead-Qualifizierung automatisieren",
    brancheLabel: "Logistik",
    h1: "Lead-Qualifizierung automatisieren in der Logistik",
    metaTitle: "Lead-Qualifizierung Logistik – Anfragen mit KI qualifizieren",
    metaDescription: "Logistikdienstleister verlieren Aufträge weil Angebote zu spät kommen. KI qualifiziert Anfragen sofort, prüft Profitabilität und beschleunigt die Angebotserstellung.",
    heroPain: "In der Logistik entscheidet die Angebotsgeschwindigkeit über den Auftrag. Wer eine Anfrage erhält und 48 Stunden für ein Angebot braucht, verliert an den Wettbewerber der in 2 Stunden antwortet — obwohl das eigene Angebot besser wäre.",
    solutionHook: "KI prüft eingehende Logistik-Anfragen sofort auf Profitabilität, verfügbare Kapazität und strategischen Fit — und beschleunigt die Angebotserstellung von 48 Stunden auf unter 4 Stunden.",
    metrics: [
      { value: "< 4 Std.", label: "statt 48 Stunden Angebotserstellung" },
      { value: "40 %", label: "höhere Angebotsquote" },
      { value: "25 %", label: "unprofitable Anfragen automatisch erkannt" },
    ],
    processSteps: [
      { title: "Anfrage automatisch strukturieren", desc: "Route, Volumen, Gewicht, Zeitfenster und Sonderanforderungen werden aus der Anfrage extrahiert." },
      { title: "Profitabilitäts-Check", desc: "Das System prüft ob die Anfrage mit aktuellen Kapazitäten, Preisen und Routen profitabel ist." },
      { title: "Angebot vorbereiten", desc: "Auf Basis der Kalkulation wird ein Angebotsentwurf erstellt, der nur noch freigegeben werden muss." },
      { title: "Kapazitäts-Abgleich", desc: "Verfügbare Fahrzeuge, Fahrer und Partner-Kapazitäten werden automatisch geprüft." },
    ],
    uniqueProseBlock: "Logistik-Vertrieb hat ein Tempo-Problem: Speditionen kämpfen um dieselben Aufträge, und wer schneller antwortet gewinnt — selbst wenn der Preis minimal höher ist. Gleichzeitig sind nicht alle Anfragen gleich profitabel. Eine Anfrage für eine einmalige Einzelsendung auf einer unrentablen Route sollte anders behandelt werden als ein Großkunde mit wöchentlichem Volumen auf einer Stammroute. KI kann diese Unterscheidung treffen: Sie prüft automatisch Auslastung, Streckenkosten, Mautbedarf, Fahrerverfügbarkeit und gibt dem Disponenten sofort ein kalkuliertes Angebot — das dieser nur noch kontrollieren und senden muss. Für Ausschreibungen (Tender-Anfragen von Industrie und Handel): Das System erkennt Ausschreibungstypen automatisch und leitet sie an den richtigen Sachbearbeiter für die Langzeit-Kalkulation weiter.",
    comparisonRows: [
      { aspect: "Angebotserstellung", manual: "48 Stunden", automated: "unter 4 Stunden" },
      { aspect: "Profitabilitäts-Check", manual: "Erfahrung des Disponenten", automated: "automatische Kalkulation" },
      { aspect: "Kapazitätscheck", manual: "telefonische Abstimmung", automated: "sofortige TMS-Abfrage" },
      { aspect: "Ausschreibungs-Erkennung", manual: "manuell klassifiziert", automated: "automatisch erkannt" },
    ],
    faq: [
      { q: "Kann das System Preise automatisch kalkulieren?", a: "Ja, auf Basis Ihrer Kalkulations-Parameter (Kostensätze, Mautsätze, Fahrzeugtypen). Das Ergebnis ist ein Angebotsentwurf der freigegeben wird, kein autonomes Senden ohne menschliche Prüfung." },
      { q: "Wie werden Sonderanforderungen (Gefahrgut, Kühlkette, Schwerlast) berücksichtigt?", a: "Das System erkennt Sonderanforderungen automatisch aus der Anfrage und prüft ob die nötige Zertifizierung und Ausrüstung verfügbar ist. Bei fehlenden Kapazitäten wird sofort an einen spezialisierten Partner weitergeleitet." },
      { q: "Was ist mit Ausschreibungen von Großkunden?", a: "Ausschreibungen werden automatisch erkannt und an den Key Account Manager für die Langzeit-Kalkulation weitergeleitet — separat von Spot-Anfragen." },
    ],
    internalLinks: [
      { href: "/blog/vertrieb-lead-qualifizierung-ki-mittelstand/", label: "Lead-Qualifizierung mit KI — vollständiger Leitfaden", desc: "B2B-Scoring, CRM-Integration und ROI." },
      { href: "/kundenservice-automatisierung/logistik/", label: "Kundenservice-Automatisierung Logistik", desc: "Sendungsverfolgung und Reklamationen automatisieren." },
      { href: "/rechnungsverarbeitung/logistik/", label: "Rechnungsverarbeitung für Logistik", desc: "Frachtrechnungen automatisch verarbeiten." },
    ],
  },
];

export function getPseoPage(usecase: string, branche: string): PseoPage | undefined {
  return pseoPages.find(p => p.usecase === usecase && p.branche === branche);
}

export const pseoUsecases = [...new Set(pseoPages.map(p => p.usecase))];
export const pseoBranchen = [...new Set(pseoPages.map(p => p.branche))];
