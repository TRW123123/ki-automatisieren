import fs from 'fs';
import path from 'path';

// --- CONFIGURATION ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.5-pro"; // Frontier model strictly required by the rules
const MAX_ROUNDS = 2; // Anzahl der brutalen Debatten-Runden

if (!GEMINI_API_KEY) {
    console.error("❌ CRITICAL ERROR: GEMINI_API_KEY environment variable is missing.");
    console.log("Bitte setze sie z.B. in der PowerShell: $env:GEMINI_API_KEY='dein_key_hier'");
    process.exit(1);
}

// Ground-Truth Context Files from the Antigravity Brain
const PROJECT_DIR = process.cwd();
const BRAIN_DIR = "C:\\Users\\User\\.gemini\\antigravity\\brain\\06b701dc-b6f0-4b74-8337-9380bbb4bc01";
const HISTORY_FILE = path.join(BRAIN_DIR, "HISTORY_STRATEGY_AUDIT.md");
const MASTER_PLAN_FILE = path.join(BRAIN_DIR, "MASTER_ACTION_PLAN.md");
const KEYWORD_FILE = path.join(PROJECT_DIR, "KEYWORD-MASTER-DATASET.csv");

// Read context, gracefully fallback if not found
function getGroundTruth() {
    let context = "=== PROJECT GROUND TRUTH CONTEXT ===\n";
    try { 
        context += "HISTORY (Past Failures & Stratgeies):\n" + fs.readFileSync(HISTORY_FILE, 'utf-8') + "\n\n"; 
    } catch(e) { console.log("⚠️ History file missing."); }
    try { 
        context += "MASTER PLAN (Current Diagnosis):\n" + fs.readFileSync(MASTER_PLAN_FILE, 'utf-8') + "\n\n"; 
    } catch(e) { console.log("⚠️ Master plan missing."); }
    try { 
        // Only read head of CSV to prevent token explosion
        const csv = fs.readFileSync(KEYWORD_FILE, 'utf-8'); 
        context += "KEYWORDS (Sample of 119 B2B targets):\n" + csv.split('\n').slice(0, 30).join('\n') + "\n\n"; 
    } catch(e) { console.log("⚠️ CSV file missing."); }
    
    return context;
}

// --- CORE ENGINE: NATIVE FETCH WRAPPER ---
// Nutzt die native Node 18+ Fetch API (0 Dependencies, absolut robust)
async function callAgent(personaSystemPrompt, userPrompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;
    
    // Retry logic für 429 Too Many Requests (Tenacity)
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const res = await fetch(url, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({
                    system_instruction: { parts: [{ text: personaSystemPrompt }] },
                    contents: [{ role: "user", parts: [{ text: userPrompt }] }],
                    generationConfig: { temperature: 0.8 } // Hohe Temperatur für Divergenz
                })
            });
            
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText);
            }
            
            const data = await res.json();
            return data.candidates[0].content.parts[0].text;
            
        } catch (e) {
            if (attempt === 3) throw new Error(`API Error nach 3 Versuchen: ${e.message}`);
            console.log(`⏳ Rate Limit oder Timeout. Warte ${attempt * 3} Sekunden...`);
            await new Promise(r => setTimeout(r, attempt * 3000));
        }
    }
}

async function runColosseum() {
    console.log("\n🏛️  INITIALIZING AUTORESEARCH DEBATE PROTOCOL (THE COLOSSEUM) 🏛️");
    console.log("------------------------------------------------------------------\n");
    console.log("Lade Ground-Truth Kontext (GSC Historie, 0-Impressions Problem, CSVs)...");
    
    const groundTruth = getGroundTruth();

    // -- STAGE 1: THE FORGE --
    console.log("\n🔥 STAGE 1: THE STRATEGY FORGE (Divergent Thinking) 🔥");
    
    const sysA = "Du bist Agent A (Der Visionäre Aggressor). Fokus: pSEO Skalierung, maximale Long-Tail Dominanz für 119 Branchen, brutalistischer SEO-Traffic. Du hasst langsame Markenbildungs-Prozesse.";
    const userA = "Basierend auf dem Ground-Truth Kontext: Schreibe deine radikale, kompromisslose Strategie, wie wir diese 119 Seiten bauen (URL-Struktur, dynamische DatenInjektion, Internal Linking) um Thin-Content-Strafen zu umgehen.";

    const sysB = "Du bist Agent B (Der elitäre Brand Architekt & Psychologe). Fokus: 'Quiet Authority', psychologische B2B-Hooks, Premium-UX. Du hasst billigen AI-Spam und Massen-SEO.";
    const userB = "Basierend auf dem Ground-Truth Kontext: Schreibe deine kompromisslose Strategie, wie die pSEO-Templates aussehen müssen (H1-Hooks, Lead-Forms), um nicht wie Generatoren 0815-Seiten zu wirken. Die Leute müssen kaufen.";

    const sysC = "Du bist Agent C (Der paranoide Forensiker). Fokus: Technical SEO, JSON-LD Schema Perfektion, Asset Sovereignty, LCP Optimierung. Du hasst kaputte Canonical-Tags und externe Scripts.";
    const userC = "Basierend auf dem Ground-Truth Kontext: Schreibe deine kompromisslose technische Architektur für diese 119 Seiten. Wie vermeiden wir den GSC <parent_node> Fehler? Wie setzen wir Asset Sovereignty 100% um?";

    console.log("⏳ Agent A (Aggressor) hämmert seine Strategie in den Amboss...");
    const strategyA = await callAgent(sysA, groundTruth + "\n\n" + userA);
    
    console.log("⏳ Agent B (Brand Architekt) skizziert sein elitärstes Design-Manifest...");
    const strategyB = await callAgent(sysB, groundTruth + "\n\n" + userB);
    
    console.log("⏳ Agent C (Forensiker) schreibt die paranoidesten Tech-Specs...");
    const strategyC = await callAgent(sysC, groundTruth + "\n\n" + userC);

    // -- STAGE 2: THE BATTLE --
    console.log("\n⚔️  STAGE 2: THE COLOSSEUM (Philosophical Battle) ⚔️");
    
    let transcript = `# THE COLOSSEUM DEBATE TRANSCRIPT\n\n## URSPRÜNGLICHE STRATEGIEN\n\n### AGENT A (Aggressor)\n${strategyA}\n\n### AGENT B (Brand Architekt)\n${strategyB}\n\n### AGENT C (Forensiker)\n${strategyC}\n\n## DEBATTEN-LOG\n`;

    for (let round = 1; round <= MAX_ROUNDS; round++) {
        console.log(`\n🛎️  RUNDE ${round} beginnt. Die Argumente kollidieren...`);
        
        let attackPromptA = `Hier ist der Bisherige Verlauf:\n${transcript}\n\nGreife die Schwachstellen von Agent B und C an! Verteidige deine pSEO-Skalierung. Zeige rechnerisch auf, warum B's 'Elitäre' Ansätze zu langsam sind und C's Setup überkompliziert ist. Reiße sie in Stücke.`;
        let attackA = await callAgent(sysA, attackPromptA);
        transcript += `\n### [RUNDE ${round}] AGENT A ATTACKIERT:\n${attackA}\n`;
        console.log("-> Agent A hat zugeschlagen.");

        let attackPromptB = `Hier ist der Bisherige Verlauf:\n${transcript}\n\nGreife Agent A und C an! Zeige auf, wo A's Ansatz zu extremem 'Thin Content' führt, worauf B2B-Käufer nie reagieren werden. Kämpfe für Premium B2B Authority. Mache sie verbal fertig.`;
        let attackB = await callAgent(sysB, attackPromptB);
        transcript += `\n### [RUNDE ${round}] AGENT B ATTACKIERT:\n${attackB}\n`;
        console.log("-> Agent B hat zurückgeschossen.");

        let attackPromptC = `Hier ist der Bisherige Verlauf:\n${transcript}\n\nGreife Agent A und B an! Zerlege ihre Ideen technisch. Wo brechen Sitemaps, was ruiniert Core Web Vitals oder Crawl Budget wenn sie das so durchziehen? Sei sachlich, kalt und vernichtend.`;
        let attackC = await callAgent(sysC, attackPromptC);
        transcript += `\n### [RUNDE ${round}] AGENT C ATTACKIERT:\n${attackC}\n`;
        console.log("-> Agent C hat die Schwachstellen der anderen aufgedeckt.");
    }

    // -- STAGE 3: THE SYNTHESIS --
    console.log("\n⚖️  STAGE 3: THE SYNTHESIS (Master Judge) ⚖️");
    console.log("⏳ Der Master Judge liest das komplette Debatten-Protokoll und synthetisiert die 'Golden Route'...");

    const sysJudge = "Du bist der absolut unparteiische Master Judge (Level: CTO & Elite System-Architekt). Du glaubst nur an mathematische und strategische Wahrheit.";
    const userJudge = "Lies das folgende komplette Debatten-Protokoll der 3 Agenten. \nExtrahiere die 'Golden Route'. \nEliminiere die Schwachstellen aller drei, kombiniere die Härte von A, die UX-Qualität von B und die eiserne technische Architektur von C zu einer einzigen, makellosen Blueprint für das KI-Automatisieren pSEO-Setup. Schreibe sie als extrem gut strukturiertes Markdown Dokument, bereit zum reinen Coding.\n\nDas Protokoll:\n" + transcript;
    
    const goldenRoute = await callAgent(sysJudge, userJudge);

    // Save outputs
    const blueprintPath = path.join(PROJECT_DIR, "FINAL_PSEO_BLUEPRINT.md");
    const transcriptPath = path.join(PROJECT_DIR, "COLOSSEUM_TRANSCRIPT.md");
    
    fs.writeFileSync(blueprintPath, goldenRoute);
    fs.writeFileSync(transcriptPath, transcript);

    console.log("\n✅ THE COLOSSEUM IST BEENDET.");
    console.log(`📂 Die Master Strategie ('Golden Route') liegt bereit in: ${blueprintPath}`);
    console.log(`📂 Der volle Kampf-Log (zum Nachlesen der Diskussion) liegt in: ${transcriptPath}`);
    console.log("\n🚀 Du bist ready für die Execution.");
}

runColosseum().catch(err => {
    console.error("\n❌ FATALER FEHLER IM COLOSSEUM:");
    console.error(err);
});
