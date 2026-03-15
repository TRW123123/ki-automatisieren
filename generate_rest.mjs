import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import fs from 'fs';
import path from 'process';

const branches = [
    // Batch 9
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
    // Batch 10
    {
        name: "Immobilienverwalter & Hausverwaltungen",
        description: "B2B-Hausverwaltungen, die Gewerbeimmobilien, Bürokomplexe oder große Wohnanlagen betreuen."
    },
    {
        name: "Tiefbau- & Straßenbauunternehmen (B2B)",
        description: "Bauunternehmen, die öffentliche Ausschreibungen oder Großprojekte für andere Unternehmen umsetzen."
    },
    {
        name: "Technische Gebäudeausrüstung (TGA) & Anlagenbau",
        description: "Spezialisten für Klima, Lüftung, Heizung in Industrieanlagen und Großgebäuden."
    },
    {
        name: "Industriereinigung & Spezialreinigung",
        description: "Reinigungsfirmen für Reinräume, Maschinenparks oder Tatorte, die B2B-Kunden suchen."
    },
    {
        name: "Großküchenausstatter & Bäckereitechnik",
        description: "Hersteller und Händler von Gastro-Technik, die Restaurants, Hotels oder Bäckereiketten ausstatten."
    },
    // Batch 11
    {
        name: "Steuerberater & Wirtschaftsprüfer",
        description: "Kanzleien, die lukrative Unternehmensmandate, GmbHs oder vermögende Kunden gewinnen wollen."
    },
    {
        name: "IT-Systemhäuser & Managed Service Provider (MSP)",
        description: "IT-Dienstleister, die Wartungsverträge, Cloud-Migrationen und Security-Konzepte an den Mittelstand verkaufen."
    },
    {
        name: "B2B Fintechs & Payment-Anbieter",
        description: "Finanz-Startups, die Zahlungsabwicklungen, Factoring oder Firmenkreditkarten für B2B-Kunden anbieten."
    },
    {
        name: "HR-Tech & Recruiting-Software",
        description: "SaaS-Anbieter im Personalwesen, die ihre Software an HR-Abteilungen von Unternehmen verkaufen."
    },
    {
        name: "Krypto- & Blockchain-Dienstleister (B2B)",
        description: "Unternehmen, die Tokenisierung, Smart Contracts oder Verwahrstellen für Finanzinstitute anbieten."
    },
    // Batch 12
    {
        name: "Luxus-Brands (B2B Zulieferer & Agenturen)",
        description: "Hersteller von Premium-Komponenten oder Agenturen, die für High-End-Marken arbeiten."
    },
    {
        name: "M&A-Berater & Corporate Finance",
        description: "Berater für Firmenkäufe, Nachfolgeregelungen und Fusionen, die Unternehmensverkäufer suchen."
    },
    {
        name: "Private Equity & Venture Capital Fonds",
        description: "Investoren, die Startups oder mittelständische Unternehmen für Beteiligungen identifizieren wollen."
    },
    {
        name: "Maritim- & Schifffahrtsindustrie (Zulieferer)",
        description: "Hersteller von Schiffskomponenten oder Logistiklösungen für Werften und Reedereien."
    },
    {
        name: "Smart Farming & Agrartechnik (B2B)",
        description: "Anbieter von Agrar-Software, Drohnen oder Spezialmaschinen für große Landwirtschaftsbetriebe."
    }
];

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
Gib NUR gültiges JSON aus. KEIN Markdown, KEINE anderen Wörter.
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
    }
  ],
  "faq": [
    {
      "q": "Eine branchenspezifische Frage (z.B. Funktionieren automatisierte Leads bei so komplexen TGA-Anlagen?)",
      "a": "Die passende Antwort, löst den Einwand auf."
    }
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
        command: "C:\\Users\\User\\AppData\\Roaming\\npm\\notebooklm-mcp.cmd",
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

    const notebookId = "38a39c31-d5d5-4760-b896-2928cd205267";
    const allData = [];

    const progressFile = 'C:/Users/User/Downloads/branchen_landingpages_rest_progress.json';
    if (fs.existsSync(progressFile)) {
        try {
            const existing = JSON.parse(fs.readFileSync(progressFile, 'utf-8'));
            allData.push(...existing);
            console.log(`Resuming from ${existing.length} already processed branches.`);
        } catch (e) {
            console.log("Starting fresh, no valid progress file found.");
        }
    }

    for (const [index, branch] of branches.entries()) {
        const alreadyDone = allData.find(d => d.branchName && d.branchName.toLowerCase().includes(branch.name.split(" ")[0].toLowerCase()));
        if (alreadyDone) {
            console.log(`[Skipping] ${branch.name} already processed.`);
            continue;
        }

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
                        show_browser: true,
                        browser_options: {
                            show: true,
                            headless: false,
                            timeout_ms: 420000
                        }
                    }
                }
            }, { timeout: 450000 });

            const text = response.content?.[0]?.text;
            if (text) {
                let jsonStr = text;
                const jsonMatch = text.match(/\{.*\}/s);
                if (jsonMatch) jsonStr = jsonMatch[0];

                try {
                    const parsed = JSON.parse(jsonStr);
                    allData.push(parsed);
                    console.log(`✅ Successfully parsed: ${branch.name}`);

                    fs.writeFileSync(
                        progressFile,
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
            console.log("Waiting 10 seconds before continuing...");
            await new Promise(r => setTimeout(r, 10000));
        }

        await new Promise(r => setTimeout(r, 5000));
    }

    console.log("\n🎉 All remaining branches processed!");
    console.log("Results saved to: " + progressFile);
    process.exit(0);
}

run().catch(console.error);
