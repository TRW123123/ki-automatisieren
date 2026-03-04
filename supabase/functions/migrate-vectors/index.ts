import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
    try {
        const geminiKey = Deno.env.get("GEMINI_API_KEY") || Deno.env.get("Gemini_API_Key");
        let supabaseUrl = Deno.env.get("SUPABASE_URL");
        const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

        if (supabaseUrl && !supabaseUrl.startsWith('http')) {
            supabaseUrl = `https://${supabaseUrl}`;
        }

        if (!geminiKey || !supabaseUrl || !serviceRoleKey) {
            throw new Error("Missing environment variables");
        }

        const supabase = createClient(supabaseUrl, serviceRoleKey);

        let migratedPrompts = 0;
        let migratedKnowledge = 0;
        let firstError = null;

        const { data: prompts } = await supabase.from('Prompts').select('id, prompt_template');
        if (prompts) {
            for (const p of prompts) {
                try {
                    const embedResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${geminiKey}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            model: 'models/gemini-embedding-001',
                            content: { parts: [{ text: p.prompt_template }] }
                        })
                    });
                    const embedData = await embedResponse.json();
                    let embedding = embedData.embedding?.values;
                    if (!embedding && embedData.embeddings) {
                        embedding = embedData.embeddings[0]?.values;
                    }

                    if (embedding) {
                        const { error } = await supabase.from('Prompts').update({ embedding: embedding }).eq('id', p.id);
                        if (error) throw error;
                        migratedPrompts++;
                    } else {
                        if (!firstError) firstError = "No embedding found P: " + JSON.stringify(embedData);
                    }
                } catch (e: any) {
                    if (!firstError) firstError = JSON.stringify(e);
                    console.error("Migration error P", p.id, e);
                }
            }
        }

        const { data: knowledge } = await supabase.from('logo_design_knowledge').select('id, content');
        if (knowledge) {
            for (const k of knowledge) {
                try {
                    const embedResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${geminiKey}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            model: 'models/gemini-embedding-001',
                            content: { parts: [{ text: k.content }] }
                        })
                    });
                    const embedData = await embedResponse.json();
                    let embedding = embedData.embedding?.values;
                    if (!embedding && embedData.embeddings) {
                        embedding = embedData.embeddings[0]?.values;
                    }

                    if (embedding) {
                        const { error } = await supabase.from('logo_design_knowledge').update({ embedding: embedding }).eq('id', k.id);
                        if (error) throw error;
                        migratedKnowledge++;
                    } else {
                        if (!firstError) firstError = "No embedding found K: " + JSON.stringify(embedData);
                    }
                } catch (e: any) {
                    if (!firstError) firstError = JSON.stringify(e);
                    console.error("Migration error K", k.id, e);
                }
            }
        }

        return new Response(JSON.stringify({
            success: true,
            migrated_prompts: migratedPrompts,
            migrated_knowledge: migratedKnowledge,
            total_prompts: prompts?.length,
            total_knowledge: knowledge?.length,
            debug_error: firstError
        }), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: e.toString() }), { status: 500 });
    }
});
