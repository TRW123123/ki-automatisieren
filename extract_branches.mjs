import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import fs from 'fs';
import path from 'process';

const branches = [
    {
        name: "Gebäudereinigung & Facility Management (Gewerblich)",
        description: "Facility Management und Reinigungsunternehmen, die Großbüros, Industrieflächen oder Filialisten betreuen."
    },
    {
        name: "Logistik & Speditionen (B2B Kontraktlogistik)",
        description: "Logistikdienstleister, die auf langfristige Verträge mit Unternehmen (Warehouse, Fulfillment, Transporte) angewiesen sind."
    },
    {
        name: "Maschinen- und Anlagenbau (Sondermaschinen)",
        description: "Hersteller von Industriemaschinen, die neue B2B-Kunden in der Fertigung oder Verarbeitung suchen."
    },
    {
        name: "Sicherheitsdienste (Objektschutz & Werkschutz)",
        description: "Sicherheitsfirmen, die langfristige Bewachungsverträge für Firmengebäude, Baustellen oder Industrieanlagen abschließen."
    },
    {
        name: "Großhandel & B2B-Distributoren",
        description: "Großhändler (z.B. für Baustoffe, Gastronomiebedarf, Elektronik), die neue Fachhändler oder Geschäftskunden gewinnen wollen."
    },
    {
        name: "Ingenieurbüros & Architekten (Gewerbebau)",
        description: "Planungsbüros, die Aufträge für Fabriken, Bürogebäude oder öffentliche Ausschreibungen benötigen."
    },
    {
        name: "B2B Software & SaaS-Anbieter",
        description: "Deutsche SaaS-Startups und Softwarehäuser, die Enterprise-Kunden oder den Mittelstand digitalisieren."
    },
    {
        name: "Energieberater für Unternehmen & Industrie",
        description: "Spezialisierte Berater, die Unternehmen bei ESG, Fördermitteln und Energieeffizienz-Projekten helfen."
    },
    {
        name: "Verpackungsindustrie & Druckereien (B2B)",
        description: "Hersteller von Industrieverpackungen oder Großdruckereien, die Rahmenverträge mit Herstellern abschließen."
    },
    {
        name: "Werbe- und Marketingagenturen (B2B Fokus)",
        description: "Agenturen, die selbst Neukunden brauchen, um andere Unternehmen als Retainer-Kunden zu gewinnen."
    },
    {
        name: "B2B Catering & Betriebsgastronomie",
        description: "Caterer, die Kantinen betreiben oder tägliches Business-Catering für große Büros suchen."
    },
    {
        name: "Medizintechnik & Pharma-Zulieferer",
        description: "Hersteller, die ihre Geräte oder Komponenten an Krankenhäuser, Labore oder Praxen verkaufen."
    },
    {
        name: "Unternehmensberatungen & Consulting",
        description: "Boutique-Consulting-Firmen, die Mandate für Change-Management, M&A oder Restrukturierung suchen."
    },
    {
        name: "Messebau & Eventagenturen",
        description: "Dienstleister, die B2B-Messen planen und aufbauen und Firmenkunden dafür gewinnen."
    }
];

// Re-using the master prompt structure
const getMasterPrompt = (branchName, branchDescription) => `Du bist ein brillanter SEO-Stratege, B2B-Vertriebsexperte und Copywriter.
Wir bauen hochkonvertierende pSEO (programmatic SEO) Landingpages für B2B-Leadgenerierung (Automatisierte Neukundengewinnung).
Meine Agentur liefert B2B-Unternehmen "Planbar Neukunden durch KI-Vertriebssysteme und Automatisierte Leadgenerierung".

DEINE AUFGABE:
Generiere den PERFEKTEN JSON-Datensatz für EINE SPEZIFISCHE BRANCHE:
Branche: "${branchName}"
Beschreibung: "${branchDescription}"

Der Fokus der Lösung, die wir dieser Branche verkaufen: Automatisierte Kundenakquise, digitale Vertriebswege, KI-gestützte Lead-Generierung, Termin-Automatisierung. Weg von Kaltakquise und Empfehlungen, hin zu skalierbaren Systemen.

FORMAT-ANFORDERUNG:
Du musst EXAKT dieses JSON-Schema befolgen (alle Schlüssel müssen exakt so heißen).
Gib NUR gültiges JSON aus. KEIN Markdown, KENE anderen Wörter.
Nutze die Quellen in diesem Notebook, um echte, fundierte Schmerzpunkte dieser Branche zu verstehen und in die Texte einfließen zu lassen. Finge keine vagen Aussagen, sei hochspezifisch für diese Nische.

{
  "slug": "url-optimierter-branchen-name-beispiel-tga-anlagenbau",
  "branchName": "Exakter Branchenname (z.B. Handwerksbetriebe (TGA, Anlagenbau & Großprojekte))",
  "seo": {
    "title": "B2B Neukundengewinnung für [Branche] | KI & Automatisierung",
    "description": "Prägnante Meta-Description (max 155 Zeichen) mit dem Schmerzpunkt und der Lösung.",
    "primaryKeyword": "Wichtigstes pSEO Keyword, z.B. neukundengewinnung handwerk",
    "secondaryKeywords": ["keyword 1", "keyword 2", "keyword 3", "keyword 4"]
  },
  "hero": {
    "title": "Verkaufsstarker H1-Titel (z.B. B2B-Neukundengewinnung für Handwerksbetriebe)",
    "subtitle": "Überzeugender SubTitel, der den konkreten Nutzen nennt (z.B. Planbar Großprojekte gewinnen...)"
  },
  "painPoints": [
    "Schmerzpunkt 1 (spezifisch für die Branche, z.B. Fachkräftemangel im Vertrieb)",
    "Schmerzpunkt 2 (z.B. Abhängigkeit von unzuverlässigen Empfehlungen)",
    "Schmerzpunkt 3 (z.B. Zeitverlust durch unqualifizierte Anfrage)"
  ],
  "solutions": [
    "Lösung 1 (z.B. Vollautomatisierter Qualifizierungsprozess)",
    "Lösung 2 (z.B. KI-generierte Ansprache der Entscheider)",
    "Lösung 3 (z.B. Planbares Terminvolumen jede Woche)"
  ],
  "hardMetrics": [
    {
      "value": "Die Zahl (z.B. 85%, 3x, 40h)",
      "label": "Die Metrik (z.B. weniger manuelle Kaltakquise)"
    },
    // Insgesamt 3 Metrics
  ],
  "faq": [
    {
      "q": "Eine branchenspezifische Frage (z.B. Funktionieren automatisierte Leads bei so komplexen TGA-Anlagen?)",
      "a": "Die passende Antwort, löst den Einwand auf."
    },
    // Insgesamt 3 FAQs
  ],
  "seoArticle": {
    "title": "Langform-Artikel H2 Titel (Warum [Branche] den Vertrieb digitalisieren muss)",
    "content": "MINDESTENS 500 WÖRTER! Sehr detaillierter Fließtext. Analysiere die aktuelle Marktlage der Branche. Warum funktionieren alte Methoden (Messen, Kaltakquise, Empfehlungen) nicht mehr so gut? Wie verändert KI den B2B Einkauf in dieser Nische? Wie sieht der moderne Vertriebsprozess aus? Nutze Absätze und Fachbegriffe aus der Branche, um Expertise zu zeigen. Mache es nicht generisch."
  }
}

Gehe jetzt tief in die Materie ein und generiere nur das rohe JSON für: ${branchName}
`;

async function run() {
    const transport = new StdioClientTransport({
        command: "C:\\\\Users\\\\User\\\\AppData\\\\Roaming\\\\npm\\\\notebooklm-mcp.cmd",
        args: [],
        env: process.env
    });

    const client = new Client({
        name: "pseo-extractor",
        version: "1.0.0",
    }, {
        capabilities: {}
    });

    console.log("Connecting to NotebookLM MCP server...");
    await client.connect(transport);
    console.log("Connected.");

    // Using the hardcoded notebookId since we know it
    const notebookId = "38a39c31-d5d5-4760-b896-2928cd205267";

    const allData = [];

    for (const [index, branch] of branches.entries()) {
        console.log(`\n[${index + 1}/${branches.length}] Extracting data for: ${branch.name}...`);
        const prompt = getMasterPrompt(branch.name, branch.description);

        try {
            const response = await client.request({
                method: "tools/call",
                params: {
                    name: "ask_question",
                    arguments: {
                        question: prompt,
                        notebook_id: notebookId,
                        show_browser: true, // Keep it visible for debugging
                        browser_options: {
                            show: true,
                            headless: false,
                            timeout_ms: 420000 // IMPORTANT! Our custom timeout
                        }
                    }
                }
            }, { timeout: 450000 }); // Wait longer than the mcp timeout

            const text = response.content?.[0]?.text;
            if (text) {
                // Attempt to parse out the JSON
                let jsonStr = text;
                const jsonMatch = text.match(/\{.*\}/s);
                if (jsonMatch) jsonStr = jsonMatch[0];

                try {
                    const parsed = JSON.parse(jsonStr);
                    allData.push(parsed);
                    console.log(`✅ Successfully parsed: ${branch.name}`);

                    // Save progress after each successful branch
                    fs.writeFileSync(
                        'C:/Users/User/Downloads/branchen_landingpages_datensatz_batch1_progress.json',
                        JSON.stringify(allData, null, 2),
                        'utf-8'
                    );
                } catch (parseErr) {
                    console.error(`❌ Failed to parse JSON for ${branch.name}:`, parseErr.message);
                    console.log("Raw output was:");
                    console.log(text.substring(0, 200) + "...");
                }
            } else {
                console.log(`❌ No content returned for ${branch.name}`);
            }
        } catch (err) {
            console.error(`❌ Error querying ${branch.name}:`, err.message);
        }
    }

    console.log("\nAll branches processed!");
    process.exit(0);
}

run().catch(console.error);
