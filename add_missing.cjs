const fs = require('fs');

const missingFiles = [
    'C:/Users/User/.gemini/antigravity/brain/c6bc35d0-32db-49e7-8c82-7857f9795554/.system_generated/steps/5871/output.txt', // HR-Tech
];

const targetFile = 'C:/Users/User/Projects/ki-automatisieren-astro/src/data/pseo_data.json';
let data = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

for (const filepath of missingFiles) {
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

        let parsed = null;
        for (let i = answerStr.length; i > firstBrace; i--) {
            if (answerStr[i - 1] === '}') {
                let sub = answerStr.substring(firstBrace, i);
                sub = sub.replace(/\n/g, '\\n').replace(/\r/g, '');

                // Fix unescaped quotes manually for HR-Tech
                sub = sub.replace(/"War for Talents"/g, '\\"War for Talents\\"');
                sub = sub.replace(/"schnellere Einstellungen"/g, '\\"schnellere Einstellungen\\"');
                sub = sub.replace(/"bessere Candidate Experience"/g, '\\"bessere Candidate Experience\\"');
                sub = sub.replace(/"geringere Time-to-Hire"/g, '\\"geringere Time-to-Hire\\"');
                sub = sub.replace(/"Cold Call Fatigue"/g, '\\"Cold Call Fatigue\\"');
                sub = sub.replace(/"Bewerbermanagement Software"/g, '\\"Bewerbermanagement Software\\"');
                sub = sub.replace(/"Recruiting Tool Mittelstand"/g, '\\"Recruiting Tool Mittelstand\\"');
                // Any other possible unescaped quotes?

                try {
                    parsed = JSON.parse(sub);
                    break;
                } catch (e) { }
            }
        }

        if (parsed) {
            data.push(parsed);
            console.log(`Added missing: ${parsed.branchName}`);
        } else {
            console.log('Could not parse any JSON from:', filepath);
        }

    } catch (e) {
        console.log('Failed to process outer:', filepath, e.message);
    }
}

fs.writeFileSync(targetFile, JSON.stringify(data, null, 2), 'utf8');
console.log(`Total branches in file: ${data.length}`);
