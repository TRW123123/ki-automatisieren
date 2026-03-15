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
const data = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
let addedCount = 0;

for (const filepath of filesToProcess) {
    try {
        const fileContent = fs.readFileSync(filepath, 'utf8');
        // The output is MCP JSON wrapper
        const mcpWrapper = JSON.parse(fileContent);

        let answerStr = '';
        if (mcpWrapper.data && mcpWrapper.data.answer) {
            answerStr = mcpWrapper.data.answer;
        } else {
            console.error('No data.answer found in:', filepath);
            continue;
        }

        // Extract JSON from answerStr
        const firstBrace = answerStr.indexOf('{');
        const lastBrace = answerStr.lastIndexOf('}');

        if (firstBrace === -1 || lastBrace === -1) {
            console.error('No JSON block found in answer of:', filepath);
            continue;
        }

        const jsonStr = answerStr.substring(firstBrace, lastBrace + 1);

        const branchData = JSON.parse(jsonStr);
        data.push(branchData);
        addedCount++;
        console.log(`Added: ${branchData.branchName}`);

    } catch (e) {
        console.error('Failed to process:', filepath, e.message);
    }
}

fs.writeFileSync(targetFile, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully added ${addedCount} branches. New total: ${data.length}`);
