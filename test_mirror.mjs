import crypto from 'crypto';

const supabaseUrl = "https://xipqyfmzjdrjvrfbqfhs.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpcHF5Zm16amRyanZyZmJxZmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODQxMjIsImV4cCI6MjA3NjE2MDEyMn0.OSBkccnzF4CUgGuVeU5MB9sNjbSEmqwxSj1xgB8wB6Q";

async function runFullTest() {
    try {
        const insertId = crypto.randomUUID();
        console.log("1. Insert to DB...");
        const insertRes = await fetch(`${supabaseUrl}/rest/v1/logo_leads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${anonKey}`,
                'apikey': anonKey
            },
            body: JSON.stringify({
                id: insertId,
                company_name: "Test Frontend Mirror",
                email: "test@example.com",
                design_goal: "new",
                website_url: "",
                business_description: "Mirror test",
                file_url: ""
            }),
        });

        if (!insertRes.ok) {
            console.error("DB Insert Failed:", await insertRes.text());
            return;
        }
        console.log("DB Insert Success!");

        console.log("2. Call Edge Function...");
        const functionRes = await fetch(`${supabaseUrl}/functions/v1/generate-logo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${anonKey}`,
            },
            body: JSON.stringify({
                company_name: "Ki-Automatisieren",
                business_description: "",
                design_goal: "new",
                logo_style: "",
                insert_id: insertId
            })
        });

        if (functionRes.ok) {
            const data = await functionRes.json();
            console.log("Edge Function Success! URL:", data.imageUrl);
        } else {
            console.error("Edge Function Failed!", await functionRes.text());
        }

    } catch (e) {
        console.error("Crash:", e);
    }
}

runFullTest();
