import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { GoogleGenAI } from "npm:@google/genai";

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
        const supabaseUrl = Deno.env.get("SUPABASE_URL");
        const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

        if (!geminiKey || !supabaseUrl || !serviceRoleKey) {
            throw new Error("Missing environment variables");
        }

        const ai = new GoogleGenAI({ apiKey: geminiKey });

        const prompt = `
Du bist der "Lead Design Director" einer elitären Design-Agentur.
Gebrauche das Alex Hormozi Prinzip: Eliminiere Reibung, Maximiere den Wert, Reduziere Bullshit auf null.
CONVERGENCE AVOIDANCE PROTOCOL (HARD RULES):
- KEINE Canva-Ästhetik. Keine langweiligen Klischees.
- "German Thoroughness": Präzise, durchdacht, architektonisch wertvoll.
- Brutalistische Reduktion. Asymmetrische Balance wo angebracht.
- Carbon-Dark-Mode Hintergrund.

=== KUNDEN-INPUT ===
Unternehmen: ${company_name}
Aktion: ${design_goal} (new = Komplett neues Logo, upgrade = Bestehendes Design upgraden)
Zielgruppe & Angebot: ${business_description}
Stil-Wunsch: ${logo_style || 'Kein spezifischer Stil'}

=== DEIN AUFTRAG ===
Generiere ein hochpräzises, makelloses, extrem hochwertiges Logo-Design für dieses Unternehmen.
Stelle sicher, dass das Design streng den Hard Rules folgt. Das Endresultat MUSS herausstechen, erstklassig wirken und die Essenz des Unternehmens einfangen.
    `;

        console.log("Generating image with Nano Banana 2...");
        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-image-preview",
            contents: prompt,
        });

        let base64Image = null;
        const parts = response.candidates?.[0]?.content?.parts;
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
        const supabase = createClient(supabaseUrl, serviceRoleKey);
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
