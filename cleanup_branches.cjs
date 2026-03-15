const fs = require('fs');

const filesToProcess = [
    'C:/Users/User/.gemini/antigravity/brain/c6bc35d0-32db-49e7-8c82-7857f9795554/.system_generated/steps/5865/output.txt',
    'C:/Users/User/.gemini/antigravity/brain/c6bc35d0-32db-49e7-8c82-7857f9795554/.system_generated/steps/5866/output.txt',
    'C:/Users/User/.gemini/antigravity/brain/c6bc35d0-32db-49e7-8c82-7857f9795554/.system_generated/steps/5871/output.txt',
    'C:/Users/User/.gemini/antigravity/brain/c6bc35d0-32db-49e7-8c82-7857f9795554/.system_generated/steps/5872/output.txt',
    'C:/Users/User/.gemini/antigravity/brain/c6bc35d0-32db-49e7-8c82-7857f9795554/.system_generated/steps/5884/output.txt',
    'C:/Users/User/.gemini/antigravity/brain/c6bc35d0-32db-49e7-8c82-7857f9795554/.system_generated/steps/5885/output.txt',
];

const targetFile = 'C:/Users/User/Projects/ki-automatisieren-astro/src/data/pseo_data.json';
let data = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

// Remove duplicates based on branchName
const uniqueData = [];
const seenNames = new Set();
for (const b of data) {
    if (!seenNames.has(b.branchName)) {
        seenNames.add(b.branchName);
        uniqueData.push(b);
    }
}
data = uniqueData;

for (const filepath of filesToProcess) {
    try {
        const fileContent = fs.readFileSync(filepath, 'utf8');
        const mcpWrapper = JSON.parse(fileContent);

        let answerStr = '';
        if (mcpWrapper.data && mcpWrapper.data.answer) {
            answerStr = mcpWrapper.data.answer;
        } else {
            console.log('No data.answer found in:', filepath);
            continue;
        }

        const firstBrace = answerStr.indexOf('{');
        const lastBrace = answerStr.lastIndexOf('}');

        if (firstBrace === -1 || lastBrace === -1) {
            console.log('No JSON block found in answer of:', filepath);
            continue;
        }

        const jsonStr = answerStr.substring(firstBrace, lastBrace + 1);

        try {
            const branchData = JSON.parse(jsonStr);
            if (!seenNames.has(branchData.branchName)) {
                data.push(branchData);
                seenNames.add(branchData.branchName);
                console.log(`Added missing: ${branchData.branchName}`);
            }
        } catch (e) {
            console.log(`Failed to parse JSON for ${filepath}`);
            console.log(e.message);
            console.log('--- JSON STRING ---');
            console.log(jsonStr.substring(0, 100) + '...' + jsonStr.substring(jsonStr.length - 100));
            console.log('-------------------');
        }

    } catch (e) {
        console.log('Failed to process outer:', filepath, e.message);
    }
}

fs.writeFileSync(targetFile, JSON.stringify(data, null, 2), 'utf8');
console.log(`Total branches in file: ${data.length}`);
