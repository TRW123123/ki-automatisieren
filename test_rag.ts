import "https://deno.land/std@0.182.0/dotenv/load.ts";

const supabaseUrl = Deno.env.get("PUBLIC_SUPABASE_URL");
const anonKey = Deno.env.get("PUBLIC_SUPABASE_ANON_KEY");

console.log("Testing Live RAG Integration on:", supabaseUrl);

const res = await fetch(`${supabaseUrl}/functions/v1/generate-logo`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${anonKey}`
    },
    body: JSON.stringify({
        business_description: "A high-end autonomous AI agency specializing in B2B enterprise automation.",
        website_url: "antigravity.dev",
        logo_style: "brutalist",
        userId: crypto.randomUUID()
    })
});

const data = await res.json();
console.log(JSON.stringify(data, null, 2));
