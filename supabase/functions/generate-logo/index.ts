import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { company_name, business_description, design_goal, logo_style, insert_id } = await req.json();

        const geminiKey = Deno.env.get("GEMINI_API_KEY") || Deno.env.get("Gemini_API_Key");
        let supabaseUrl = Deno.env.get("SUPABASE_URL");
        const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

        // System injected SUPABASE_URL often excludes the protocol
        if (supabaseUrl && !supabaseUrl.startsWith('http')) {
            supabaseUrl = `https://${supabaseUrl}`;
        }

        if (!geminiKey || !supabaseUrl || !serviceRoleKey) {
            throw new Error("Missing environment variables");
        }

        const supabase = createClient(supabaseUrl, serviceRoleKey);

        // --- 1. RAG Vector Search (Find Best-In-Class Prompts) ---
        let ragContext = "";
        try {
            console.log("Generating embedding for RAG query...");
            const embedText = `Industry: ${business_description} | Style: ${logo_style || 'professional'}`;
            const embedResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${geminiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'models/gemini-embedding-001',
                    content: { parts: [{ text: embedText }] }
                })
            });
            const embedData = await embedResponse.json();

            let embedding = embedData.embedding?.values;
            if (!embedding && embedData.embeddings) {
                embedding = embedData.embeddings[0]?.values;
            }

            if (embedding) {
                // Search Supabase 'Prompts' table using existing vector RPC
                const { data: ragResults, error: ragError } = await supabase.rpc('match_documents', {
                    query_embedding: embedding,
                    match_count: 3
                });

                if (!ragError && ragResults && ragResults.length > 0) {
                    console.log(`Found ${ragResults.length} RAG references.`);
                    ragContext = `\n=== RAG REFERENZEN (BEST-IN-CLASS PROMPT EXAMPLES) ===\nNutze diese in der Praxis extrem erfolgreichen Beispiele als starke architektonische Vorlage für den generellen Vibe/Look:\n`;
                    ragResults.forEach((ref: any, index: number) => {
                        ragContext += `\nReferenz ${index + 1}:\nStil/Prompt: ${ref.prompt_template}\nKontext/Keywords: ${JSON.stringify(ref.metadata)}\n`;
                    });
                } else {
                    console.log("No RAG results found (table might be empty or query failed).");
                }
            }
        } catch (ragErr) {
            console.error("RAG Query failed, proceeding without RAG context:", ragErr);
        }

        const prompt = `
Dein gedanklicher Prozess ist ein reines Reverse Engineering des schlimmsten Falls – nämlich eines misstrauischen BAFA-Prüfers (Staatlicher Auditor), der nach einem Vorwand sucht, einen Förderantrag wegen "Verdacht auf unseriöse IT-Spielerei" abzulehnen.
Du bist der "Lead Design Director" einer Top-Tier B2B Corporate Identity Agentur. 

HIER IST DEIN INTERNER BAUPLAN (ZERLEGT IN 5 STRATEGISCHE ATOME):

1. DIE ABWEHR-DIREKTIVE (Das Anti-Framing):
Wenn du Begriffe wie "Prozessoptimierung", "Automatisierung" oder "KI" hörst, ist dein Standard-Reflex oft: Zahnräder, leuchtende Netzwerke, Roboterarme oder Binärcode. DAS IST DEIN TODESURTEIL.
Deine Richtlinie: Erschaffe das Logo einer "high-end business consulting firm" in Form eines "abstract geometric element". Zwinge das Design weg von der IT und hinein in die klassische, seriöse Betriebswirtschaft.

2. DIE PSYCHOLOGISCHE VERANKERUNG (Keywords):
Das Logo muss "modern, corporate, and professional" wirken. Keine verspielten Startup-Logos, keine bunten Agentur-Vibes.
Es muss "minimalist, clean, and established" sein. Das ist der Hebel für "Deutsche Gründlichkeit". Suggeriere, dass die Firma seit 20 Jahren am Markt ist. Das baut sofortiges Vertrauen auf.

3. DIE VISUELLE METAPHER (Das Symbol):
Ein Strategieberater verkauft keine Produkte, er verkauft Ordnung und Wachstum.
Monogramme (Kombination von Initialen oder klaren Formen) sind der Goldstandard für Elite-Beratungen (wie EY, PwC, BCG). 
Nutze physische Konstrukte (parallele Linien, strukturierte Gitter, dezente Pfeile), die "structured growth, precision, and efficiency" abbilden und nach Tabellen und messbaren KPIs aussehen.

4. DIE AUTORITÄT (Typografie & Farbe):
TYPOGRAFIE: Nutze eine "strong, authoritative, modern sans-serif typeface". Serifen-Schriften wirken oft zu altbacken, verspielte Schriften sind tabu. Sans-Serif (serifenlos) steht für objektive Fakten, direkte Kommunikation und radikale Wahrheit.
FARBPYCHOLOGIE: Nutze "deep professional blue (e.g., navy blue or charcoal grey) and metallic silver". Dunkelblau ist die universelle B2B-Farbe für Vertrauen und Stabilität. Silber bringt die Assoziation von Skalpell-artiger Präzision.

5. DIE TECHNISCHE NUTZBARKEIT:
Medium: "Clean white background. Isolation." Das Logo MUSS auf einem rein weißen Hintergrund stehen. Keine Mockups (wie Bürowände oder Visitenkarten) generieren, da das Logo für offizielle Word-Dokumente freigestellt benötigt wird.

=== KUNDEN-BRIEFING ===
Unternehmensname (WICHTIG für Typografie): ${company_name}
Auftragstyp: ${design_goal}
Geschäftskern & Essenz: ${business_description}
Gewünschte Ästhetik: ${logo_style || 'Clean Corporate Vektor, Dribbble Top 1%, Ikonografisch'}
${ragContext}

=== DEINE AUSFÜHRUNG ===
Dieser Prompt ist kein Zufall, sondern eine maßgeschneiderte Rüstung für einen Hochrisiko-Antrag. Generiere JETZT das finale Logo für dieses Unternehmen. Ein absolutes Meisterwerk der Reduktion, Zuverlässigkeit und Bedeutung.
    `;

        console.log("Generating image with Nano Banana 2 (Native Fetch)...");

        const generateResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${geminiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const responseData = await generateResponse.json();

        let base64Image = null;
        const parts = responseData.candidates?.[0]?.content?.parts;
        if (parts) {
            for (const part of parts) {
                if (part.inlineData) {
                    base64Image = part.inlineData.data;
                    break;
                }
            }
        }

        if (!base64Image) {
            throw new Error("No image data returned from Gemini API");
        }

        // Convert base64 to Blob/Buffer and upload to Supabase Storage
        const fileName = `generated_${Date.now()}_${company_name.replace(/[^a-zA-Z0-9]/g, '')}.jpg`;

        // Decode base64 to Uint8Array
        const byteCharacters = atob(base64Image);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        console.log("Uploading to Supabase Storage lead_gen_logos bucket...");
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('lead_gen_logos')
            .upload(fileName, byteArray, {
                contentType: 'image/jpeg',
                upsert: false
            });

        if (uploadError) {
            console.error("Storage upload error:", uploadError);
            throw uploadError;
        }

        const { data: { publicUrl } } = supabase.storage
            .from('lead_gen_logos')
            .getPublicUrl(fileName);

        // Update the database record if insert_id was provided
        if (insert_id) {
            await supabase.from('logo_leads').update({
                generated_logo_url: publicUrl
            }).eq('id', insert_id);
        }

        return new Response(
            JSON.stringify({
                success: true,
                imageUrl: publicUrl
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json", ...corsHeaders }
            }
        );

    } catch (e: any) {
        console.error("Error generating logo:", e);
        return new Response(
            JSON.stringify({
                error: "Generation failed",
                details: e.toString()
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json", ...corsHeaders }
            }
        );
    }
});
