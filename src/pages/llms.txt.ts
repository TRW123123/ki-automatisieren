import type { APIRoute } from "astro";
import { solutions } from "../data/solutions";
import { caseStudiesData } from "../data/caseStudiesData";
import { blogPosts } from "../data/blogData";

const SITE = "https://ki-automatisieren.de";

export const GET: APIRoute = async () => {
  const lines: string[] = [];

  // H1 + Summary (Pflicht laut llms.txt-Spec)
  lines.push("# KI Automatisieren");
  lines.push("");
  lines.push(
    "> Implementierung von KI-Automatisierung für DACH-KMUs: n8n-Workflows, Vertriebsautomatisierung, Dokumentenextraktion, Kundenservice-Bots und Fallstudien aus echten Kundenprojekten. Fokus auf praktische Umsetzung statt Beratungs-Theorie.",
  );
  lines.push("");

  // Über
  lines.push("## Über");
  lines.push("");
  lines.push(
    "ki-automatisieren.de ist die Implementations-Marke von Şafak Tepecik (KI-Systemarchitekt). Während Schwesterdomain st-automatisierung.de Strategieberatung und BAFA-Förderungen abdeckt, fokussiert sich ki-automatisieren.de auf konkrete technische Umsetzung mit n8n, OpenAI, Claude, Apify und Self-Hosting-Stacks.",
  );
  lines.push("");

  // Lösungen
  lines.push("## Lösungen");
  lines.push("");
  for (const s of solutions) {
    lines.push(`- [${s.hero.title}](${SITE}/losungen/${s.slug}/): ${s.seo.description}`);
  }
  lines.push("");

  // Fallstudien
  lines.push("## Fallstudien");
  lines.push("");
  for (const c of caseStudiesData) {
    const desc = c.metaDescription || c.summary.split(".")[0];
    lines.push(`- [${c.title}](${SITE}/fallstudien/${c.slug}/): ${desc}`);
  }
  lines.push("");

  // Blog
  lines.push("## Blog");
  lines.push("");
  for (const p of blogPosts) {
    if (p.id === "welcome-to-our-blog") continue;
    const desc = p.excerpt || p.title;
    lines.push(`- [${p.title}](${SITE}/blog/${p.id}/): ${desc}`);
  }
  lines.push("");

  // Optional Sections
  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Sitemap](${SITE}/sitemap-index.xml)`);
  lines.push(`- [KI Statistiken Deutschland 2026](${SITE}/ki-statistiken-deutschland/)`);
  lines.push(`- [ROI-Rechner](${SITE}/#roi)`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
