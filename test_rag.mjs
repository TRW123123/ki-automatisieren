import crypto from 'crypto';

const supabaseUrl = "https://xipqyfmzjdrjvrfbqfhs.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpcHF5Zm16amRyanZyZmJxZmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODQxMjIsImV4cCI6MjA3NjE2MDEyMn0.OSBkccnzF4CUgGuVeU5MB9sNjbSEmqwxSj1xgB8wB6Q";

console.log("Testing Live RAG Integration on:", supabaseUrl);

async function runTest() {
    try {
        const res = await fetch(`${supabaseUrl}/functions/v1/generate-logo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${anonKey}`
            },
            body: JSON.stringify({
                company_name: "Antigravity",
                business_description: "A high-end autonomous AI agency specializing in B2B enterprise automation.",
                website_url: "antigravity.dev",
                logo_style: "brutalist",
                userId: crypto.randomUUID()
            })
        });

        const text = await res.text();
        console.log("Status:", res.status);
        console.log("Response:", text);
    } catch (err) {
        console.error("Test failed:", err);
    }
}

runTest();
