import fs from 'fs';
import path from 'path';

try {
    const dataFile = path.resolve('C:\\Users\\User\\Projects\\ki-automatisieren-astro\\src\\data\\pseo_data.json');
    const dlDir = 'C:\\Users\\User\\Downloads';

    let existingData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    const existingSlugs = new Set(existingData.map(d => d.slug));
    console.log(`Currently have ${existingData.length} branches in pseo_data.json`);

    const dlFile = path.join(dlDir, 'branchen_landingpages_datensatz.json');
    if (fs.existsSync(dlFile)) {
        console.log(`Checking ${dlFile}...`);
        const content = fs.readFileSync(dlFile, 'utf8');
        let jsonStr = content;
        const match = content.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
        if (match) {
            jsonStr = match[0];
        }

        try {
            const parsedData = JSON.parse(jsonStr);
            let addedCount = 0;

            const processBranch = (branchData) => {
                if (!existingSlugs.has(branchData.slug)) {
                    existingData.push(branchData);
                    existingSlugs.add(branchData.slug);
                    addedCount++;
                    console.log(`Added: ${branchData.slug}`);
                } else {
                    console.log(`Skipped existing: ${branchData.slug}`);
                }
            };

            if (Array.isArray(parsedData)) {
                parsedData.forEach(processBranch);
            } else {
                processBranch(parsedData);
            }

            if (addedCount > 0) {
                fs.writeFileSync(dataFile, JSON.stringify(existingData, null, 2), 'utf8');
                console.log(`Successfully added ${addedCount} branches. Total is now ${existingData.length}.`);
            } else {
                console.log("No new branches needed to be added.");
            }
        } catch (e) {
            console.log(`Error parsing JSON from ${dlFile}: ${e.message}`);
        }
    } else {
        console.log(`${dlFile} does not exist`);
    }
} catch (globalErr) {
    console.log("FATAL SCRIPT ERROR:", globalErr.message);
}
