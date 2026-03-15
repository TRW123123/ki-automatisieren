import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '..', 'src', 'data', 'pseo_data.json');

// 1. Read the existing JSON
if (!fs.existsSync(dataPath)) {
    console.error(`File not found: ${dataPath}`);
    process.exit(1);
}

const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

// 2. Define our strategic logic for mocking search volume and tiers
// Since GSC currently reports 0 impressions, we mock some highly relevant ones 
// based on our business intelligence for structural testing of the tiering logic.
const strategicTiers = {
    '1': [
        'autohaus', 'immobilienmakler', 'steuerberater', 'versicherungsagenturen', 
        'rechtanwalte', 'handwerksbetriebe', 'e-commerce'
    ],
    '2': [
        'b2b-saas', 'logistikunternehmen', 'pflegeheime', 'finanzdienstleister', 
        'marketingagenturen', 'architekten', 'apotheken-sanitaetshaeuser'
    ]
};

// 3. Mutate the data array
const enrichedData = data.map(entry => {
    let tier = '3';
    let searchVolume = Math.floor(Math.random() * 50); // baseline low volume

    if (strategicTiers['1'].includes(entry.slug)) {
        tier = '1';
        searchVolume = Math.floor(Math.random() * 800) + 200; // 200 - 1000
    } else if (strategicTiers['2'].includes(entry.slug)) {
        tier = '2';
        searchVolume = Math.floor(Math.random() * 150) + 50; // 50 - 200
    }

    return {
        ...entry,
        tier,
        searchVolume
    };
});

// 4. Write it back
fs.writeFileSync(dataPath, JSON.stringify(enrichedData, null, 2), 'utf-8');
console.log(`Successfully enriched ${enrichedData.length} entries in pseo_data.json with tier and searchVolume.`);
