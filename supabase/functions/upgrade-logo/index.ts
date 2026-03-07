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
        let { company_name, business_description, design_goal, logo_style, insert_id, website_url, file_url } = await req.json();

        company_name = company_name?.trim() || "Unternehmenslogo";
        business_description = business_description?.trim() || "Ein etabliertes B2B Unternehmen in der DACH-Region.";

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

        // --- 1.b Jina AI Scraper (Optional Web Context) ---
        let scrapedContext = "";
        if (website_url) {
            console.log(`Scraping website: ${website_url} via Jina AI...`);
            try {
                // Jina Reader API converts any URL to rich markdown meta-context
                const jinaRes = await fetch(`https://r.jina.ai/${website_url}`);
                if (jinaRes.ok) {
                    const jinaText = await jinaRes.text();
                    scrapedContext = `\n=== WEBSITE KONTEXT (Echte Daten von der Kundenwebsite) ===\n${jinaText.substring(0, 1500)}\n`;
                    console.log("Scraped website context successfully.");
                }
            } catch (scrapeErr) {
                console.error("Jina AI Scraper failed:", scrapeErr);
            }
        }

        // --- 1.c Gemini Vision Node (Analyze Uploaded Logo) ---
        let visionContext = "";
        let originalBase64Image = null; // Hoisted for Image-to-Image reference
        if (file_url) {
            console.log(`Fetching uploaded logo for analysis: ${file_url}`);
            try {
                const imgRes = await fetch(file_url);
                const arrayBuffer = await imgRes.arrayBuffer();
                originalBase64Image = btoa(new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));

                console.log("Calling Vision Node (Gemini 3.0 Flash) to analyze the old logo...");
                const visionSystemPrompt = `
Du bist ein renommierter Marken-Architekt und Design-Analyst.
Der Nutzer möchte sein altes Logo (siehe angehängtes Bild) modernisieren ("upgraden").
Analysiere dieses alte Logo messerscharf:
1. Was ist die visuelle Kern-Metapher? (z.B. "Ein abstrakter Fuchs", "Ein statisches Haus-Icon").
2. Wie ist die grobe Farbpalette?
3. Welche Stimmung vermittelt es aktuell?
4. Wie ist der Text (Unternehmen) platziert?

Gib eine sehr prägnante, professionelle Zusammenfassung (max. 5-7 Sätze), die als Bauplan für das Remake dient.
Die DNA des alten Logos MUSS erhalten bleiben, aber auf 2026-Niveau gehoben werden.
`;
                const visionResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [
                                { text: visionSystemPrompt },
                                {
                                    inlineData: {
                                        mimeType: "image/jpeg", // Assuming jpeg/png, gemini handles both well via inlineData
                                        data: originalBase64Image
                                    }
                                }
                            ]
                        }]
                    })
                });

                const visionData = await visionResponse.json();
                if (visionData.candidates && visionData.candidates[0]?.content?.parts?.[0]?.text) {
                    const analysis = visionData.candidates[0].content.parts[0].text;
                    visionContext = `\n=== EXISTING LOGO ANALYSIS (DNA TO PRESERVE) ===\n${analysis}\nDer neue Prompt MUSS diese DNA zwingend beibehalten und modernisieren!\n`;
                    console.log("Vision Analysis successful.");
                } else {
                    console.error("Vision Node returned no text.", visionData);
                }
            } catch (visionErr) {
                console.error("Gemini Vision Analysis failed:", visionErr);
            }
        }

        // --- 2. Director Node (Text LLM generates the perfect Image Prompt) ---
        console.log("Calling Director Node (Gemini 3.0 Flash) to craft the image prompt...");

        const directorSystemPrompt = `
Du bist ein Elite Logo Designer und Prompt Engineer für NanoBanana.
Deine einzige Aufgabe ist es, basierend auf dem Input des Nutzers, der Analyse des alten Logos und den RAG-Referenzen, den perfekten englischen Prompt für einen AI-Bildgenerator zu schreiben.

=== RAG KONTEXT (Best Practices) ===
${ragContext}
${scrapedContext}
${visionContext}

=== INPUT DES NUTZERS ===
Unternehmen: ${company_name}
Auftrag: ${design_goal}
Geschäftskern: ${business_description}
Gewünschter Stil: ${logo_style || 'Professional and clean'}

=== DEINE ANWEISUNG ===
Da es sich um ein Logo-Upgrade handelt (Image-to-Image), wird die KI das alte Bild als grobes Gerüst nutzen. 
Dein Prompt darf das alte Logo daher NICHT einfach nur stur beschreiben!
Dein englischer Bild-Prompt muss zwingend erklären, WIE das alte Logo massiv modernisiert, qualitativ aufgewertet und exakt an den "Gewünschten Stil" des Nutzers angepasst werden soll.
Übersetze die alte DNA in eine atemberaubende, moderne Ausführung. Nutze starke, transformative Adjektive.
Fordere zwingend einen weißen, freigestellten Hintergrund ("clean white background, isolation, no mockups").

CRITICAL TARGET TEXT RULE: If the logo contains the company name, YOU MUST PRESERVE THE EXACT ORIGINAL SPELLING AND LANGUAGE. For example, if the company is "Hassan's Döner", you must output text "Hassan's Döner", NEVER translate it to "Hassan's Kebab" or change the capitalization.

WICHTIGSTE REGEL: Gib AUSSCHLIESSLICH den englischen Bild-Prompt zurück. Keine Erklärungen, keine Einleitung. Nur der rohe Prompt.
`;

        let generatedImagePrompt = "";
        try {
            const directorResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: directorSystemPrompt }] }]
                })
            });
            const directorData = await directorResponse.json();

            if (directorData.candidates && directorData.candidates[0]?.content?.parts?.[0]?.text) {
                generatedImagePrompt = directorData.candidates[0].content.parts[0].text.trim();
                console.log("Director Node generated prompt:", generatedImagePrompt);
            } else {
                throw new Error("Director Node failed to return text. Response: " + JSON.stringify(directorData));
            }
        } catch (directorErr: any) {
            console.error("Director Node Error:", directorErr);
            generatedImagePrompt = `[FALLBACK TRIGGERED - ERROR: ${directorErr.message || directorErr.toString()}] A high-quality, professional logo for a ${business_description} company named "${company_name}". Style: ${logo_style || 'clean, modern, minimalist'}. Clean white background, isolation, vector art style. MUST EXACTLY spell text "${company_name}".`;
        }

        // Log generated prompt to Supabase
        if (insert_id) {
            try {
                await supabase.from('logo_leads').update({
                    generated_prompt: generatedImagePrompt
                }).eq('id', insert_id);
                console.log("Logged generated_prompt to Supabase.");
            } catch (dbErr) {
                console.error("Failed to log prompt to Supabase:", dbErr);
            }
        }

        const finalImagePrompt = `${generatedImagePrompt}\n\nCRITICAL FINAL INSTRUCTION: You are an image generator tool. Use the provided reference image ONLY as a structural and thematic blueprint. DO NOT trace or copy it exactly. You MUST fiercely apply the new modern style requested in the prompt to upgrade the visual quality. Do NOT append unnecessary explanations.`;

        console.log("Generating image with Nano Banana 2 (Gemini 3.1 Flash Image)...");

        let imageParts: any[] = [{ text: finalImagePrompt }];
        if (originalBase64Image) {
            imageParts.push({
                inline_data: {
                    mime_type: "image/jpeg",
                    data: originalBase64Image
                }
            });
            console.log("Injecting original image as Image-to-Image reference.");
        }

        const generateResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${geminiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: imageParts }]
            })
        });

        const responseData = await generateResponse.json();

        let base64Image = null;
        let textResponse = null;

        const parts = responseData.candidates?.[0]?.content?.parts;
        if (parts) {
            for (const part of parts) {
                if (part.inlineData || part.inline_data) {
                    base64Image = (part.inlineData || part.inline_data).data;
                    break;
                }
                if (part.text) {
                    textResponse = part.text;
                }
            }
        }

        if (!base64Image) {
            console.error("Gemini API Error (No image returned):", JSON.stringify(responseData));
            return new Response(JSON.stringify({
                error: "Generation failed - AI refused to output an image.",
                details: responseData,
                text_seen: textResponse
            }), {
                status: 500,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }
        const fileName = `generated_${Date.now()}_${company_name.replace(/[^a-zA-Z0-9]/g, '')}.jpg`;

        // Optimized base64 decode using native Deno fetch stack (Bypasses JS heap & V8 CPU limits)
        let byteArray;
        try {
            const dataUri = `data:image/jpeg;base64,${base64Image}`;
            const req = await fetch(dataUri);
            byteArray = new Uint8Array(await req.arrayBuffer());
        } catch (e) {
            console.error("Fast native decode failed, fallback to TextEncoder", e);
            throw new Error("Could not decode massive image output in time.");
        }

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
                imageUrl: publicUrl,
                director_prompt: finalImagePrompt
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
                details: e.toString(),
                director_prompt: typeof generatedImagePrompt !== 'undefined' ? generatedImagePrompt : null
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json", ...corsHeaders }
            }
        );
    }
});
