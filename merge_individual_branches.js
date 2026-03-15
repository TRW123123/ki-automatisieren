const fs = require('fs');
const path = require('path');

try {
    const dataFile = path.join('C:\\Users\\User\\Projects\\ki-automatisieren-astro\\src\\data\\pseo_data.json');
    const dlDir = 'C:\\Users\\User\\Downloads';

    let existingData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    const existingSlugs = new Set(existingData.map(d => d.slug));
    console.log(`Currently have ${existingData.length} branches in pseo_data.json`);

    const files = fs.readdirSync(dlDir).filter(f => f.startsWith('branche_') && f.endsWith('.json'));

    let addedCount = 0;
    for (const f of files) {
        try {
            const filePath = path.join(dlDir, f);
            const content = fs.readFileSync(filePath, 'utf8');

            let jsonStr = content;
            // Extract from markdown if wrapped
            const match = content.match(/\{[\s\S]*\}/);
            if (match) {
                jsonStr = match[0];
            }

            const branchData = JSON.parse(jsonStr);

            if (!existingSlugs.has(branchData.slug)) {
                existingData.push(branchData);
                existingSlugs.add(branchData.slug);
                addedCount++;
                console.log(`Added: ${branchData.slug}`);
            } else {
                console.log(`Skipped existing: ${branchData.slug}`);
            }
        } catch (e) {
            console.log(`Error processing file ${f}: ${e.message}`);
        }
    }

    if (addedCount > 0) {
        fs.writeFileSync(dataFile, JSON.stringify(existingData, null, 2), 'utf8');
        console.log(`Successfully added ${addedCount} branches. Total is now ${existingData.length}.`);
    } else {
        console.log("No new branches needed to be added.");
    }
} catch (globalErr) {
    console.log("FATAL SCRIPT ERROR:", globalErr.message);
}
