// GEO-Schema-Helper: Baut konsolidierte JSON-LD @graph für Article/HowTo/FAQ/Person/Organization
// Forschungsbasis: GEO-State-of-the-Art Q2 2026 Konsolidierter Bericht (Vault)

const SITE = "https://ki-automatisieren.de";
const ORG_ID = `${SITE}/#organization`;
const PERSON_ID = `${SITE}/#safak-tepecik`;

export interface GeoStat {
  value: string;
  claim: string;
  source: string;
  sourceUrl?: string;
  year: string | number;
}

export interface GeoData {
  /** Answer-Capsule, 40-60 Wörter, direkt nach H1. Pflicht für Quotability. */
  tldr: string;
  /** Definition im "X ist Y"-Pattern, erster Satz nach erster H2. */
  definition?: string;
  /** Statistiken mit Datum + Quelle (Princeton +25-30% Visibility). */
  stats?: GeoStat[];
  /** Optional: HowTo-Schritte für JSON-LD (nur falls Page tutorial-artig ist). */
  howToSteps?: Array<{ name: string; text: string }>;
  /** Optional: HowTo-Gesamtdauer (ISO 8601, z.B. "PT2H"). */
  howToTotalTime?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface BuildGraphOptions {
  type: "Article" | "Service";
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  faqs?: FaqItem[];
  geo?: GeoData;
  /** Optional: Service-Type für Solutions-Pages (z.B. slug). */
  serviceSlug?: string;
}

export function buildGeoGraph(opts: BuildGraphOptions): string {
  const graph: any[] = [];

  // Organization (Root-Entity)
  graph.push({
    "@type": "Organization",
    "@id": ORG_ID,
    name: "KI Automatisieren",
    url: SITE,
    logo: `${SITE}/logo.png`,
    founder: { "@id": PERSON_ID },
    sameAs: [
      "https://www.linkedin.com/company/ki-automatisieren",
      "https://github.com/ki-automatisieren",
    ],
  });

  // Person (Author)
  graph.push({
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Safak Tepecik",
    jobTitle: "KI-Systemarchitekt",
    knowsAbout: [
      "n8n",
      "Workflow Automation",
      "KI-Automation",
      "Vertriebsautomatisierung",
      "Dokumentenextraktion",
      "Implementation",
    ],
    worksFor: { "@id": ORG_ID },
    sameAs: [
      "https://www.linkedin.com/in/safak-tepecik",
      "https://github.com/TRW123123",
    ],
  });

  // Main Entity (Article oder Service)
  if (opts.type === "Service" && opts.serviceSlug) {
    graph.push({
      "@type": "Service",
      "@id": `${opts.url}#service`,
      name: opts.headline,
      description: opts.description,
      provider: { "@id": ORG_ID },
      areaServed: "DE",
      serviceType: opts.serviceSlug,
      url: opts.url,
    });
  }

  // Article-Schema (immer, auch für Service-Pages für maximale Citation-Robustheit)
  graph.push({
    "@type": "Article",
    "@id": `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    image: opts.image || `${SITE}/og-homepage.jpg`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    ...(opts.geo?.tldr ? { abstract: opts.geo.tldr } : {}),
  });

  // HowTo (optional)
  if (opts.geo?.howToSteps && opts.geo.howToSteps.length > 0) {
    graph.push({
      "@type": "HowTo",
      "@id": `${opts.url}#howto`,
      name: opts.headline,
      description: opts.description,
      ...(opts.geo.howToTotalTime ? { totalTime: opts.geo.howToTotalTime } : {}),
      step: opts.geo.howToSteps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    });
  }

  // FAQPage (optional)
  if (opts.faqs && opts.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${opts.url}#faq`,
      mainEntity: opts.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}
