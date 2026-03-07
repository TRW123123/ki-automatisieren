import fetch from "node-fetch";

const SUPABASE_URL = "https://xipqyfmzjdrjvrfbqfhs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpcHF5Zm16amRyanZyZmJxZmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODQxMjIsImV4cCI6MjA3NjE2MDEyMn0.OSBkccnzF4CUgGuVeU5MB9sNjbSEmqwxSj1xgB8wB6Q";

async function runTest() {
    console.log("Starting Nano Banana V2 VISION UPGRADE Edge Function Test...");

    // We simulate an existing logo upload by providing the URL 
    // of the logo we generated in the previous test.
    const payload = {
        company_name: "Hassan's Döner",
        business_description: "Ein lokaler Döner-Laden, der extrem hochwertige, frische Zutaten verwendet. Wir wollen weg vom billigen Fast-Food-Image hin zu Premium Streetfood.",
        design_goal: "upgrade",
        logo_style: "Premium, minimalistisch, warme Farben, appetitanregend",
        website_url: "https://example.com",
        file_url: "https://xipqyfmzjdrjvrfbqfhs.supabase.co/storage/v1/object/public/lead_gen_logos/generated_1772742536816_HassansDner.jpg"
    };

    console.log("Sending payload:", payload);

    try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/upgrade-logo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (res.ok) {
            console.log("✅ SUCCESS!");
            console.log("Generated Image URL:", data.imageUrl);
            console.log("\n--- DIRECTOR PROMPT ---\n", data.director_prompt, "\n-----------------------\n");
        } else {
            console.error("❌ ERROR!");
            console.error("Status:", res.status);
            console.error("Details:", JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}

runTest();
