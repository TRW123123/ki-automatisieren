import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '..', 'src', 'data', 'pseo_data.json');
const reportPath = path.join(__dirname, '..', 'thin_content_audit_report.md');

// 1. Read the JSON data
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

// Helper to count words
function countWords(str) {
    if (!str) return 0;
    return str.replace(/(^\s*)|(\s*$)/gi,"")
              .replace(/[ ]{2,}/gi," ")
              .replace(/\n /,"\n")
              .split(' ').length;
}

let report = `# 🚨 Paranoid Thin Content Audit Report

**Datum:** ${new Date().toISOString().split('T')[0]}  
**Geprüfte Branchen:** ${data.length}

> **Kriterien für "Thin Content":**
> - 🔴 **Kritisch:** Gesamtwortzahl < 300 Wörter
> - 🔴 **Kritisch:** \`seoArticle\` (Haupttext) fehlt
> - ⚠️ **Warnung:** Gesamtwortzahl < 500 Wörter
> - ⚠️ **Warnung:** FAQs fehlen

---

## 🛑 Kritische Verletzungen (Immediate Action Required)
`;

let criticalCount = 0;
let warningCount = 0;
let healthyCount = 0;

const details = [];

data.forEach(entry => {
    let wordCount = 0;
    
    // Add up all text fields
    if (entry.hero) {
        wordCount += countWords(entry.hero.title || entry.hero.headline);
        wordCount += countWords(entry.hero.subtitle || entry.hero.subheadline);
        wordCount += countWords(entry.hero.description);
    }
    
    if (entry.painPoints) {
        entry.painPoints.forEach(p => {
            if (typeof p === 'string') wordCount += countWords(p);
            else {
                wordCount += countWords(p.headline || p.title);
                wordCount += countWords(p.description || p.text);
            }
        });
    }
    
    if (entry.solution) {
        if (Array.isArray(entry.solution)) {
            entry.solution.forEach(s => {
                wordCount += countWords(s.title);
                wordCount += countWords(s.description);
            });
        } else {
            wordCount += countWords(entry.solution.headline || entry.solution.title);
            wordCount += countWords(entry.solution.approach);
            if (entry.solution.steps) {
                entry.solution.steps.forEach(s => {
                    wordCount += countWords(s.title);
                    wordCount += countWords(s.description);
                });
            }
        }
    }
    
    if (entry.benefits) {
        if (Array.isArray(entry.benefits)) {
            entry.benefits.forEach(b => {
                if (typeof b === 'string') wordCount += countWords(b);
                else {
                    wordCount += countWords(b.title);
                    wordCount += countWords(b.description);
                }
            });
        } else {
            wordCount += countWords(entry.benefits.headline);
            if (entry.benefits.items) {
                entry.benefits.items.forEach(i => {
                    wordCount += countWords(i.title);
                    wordCount += countWords(i.description);
                });
            }
        }
    }
    
    let hasSeoArticle = false;
    if (entry.seoArticle) {
        hasSeoArticle = true;
        wordCount += countWords(entry.seoArticle.heading || entry.seoArticle.title);
        wordCount += countWords(entry.seoArticle.content);
        if (entry.seoArticle.sections) {
            entry.seoArticle.sections.forEach(s => {
                wordCount += countWords(s.heading);
                wordCount += countWords(s.content);
            });
        }
    }
    
    let hasFaqs = false;
    if (entry.faqs && entry.faqs.length > 0) {
        hasFaqs = true;
        entry.faqs.forEach(f => {
            wordCount += countWords(f.question);
            wordCount += countWords(f.answer);
        });
    }

    const issues = [];
    if (wordCount < 300) issues.push("🔴 Wortzahl < 300");
    if (!hasSeoArticle) issues.push("🔴 Kein seoArticle");
    
    if (wordCount >= 300 && wordCount < 500) issues.push("⚠️ Wortzahl < 500");
    if (!hasFaqs) issues.push("⚠️ Keine FAQs");

    if (issues.some(i => i.includes('🔴'))) {
        criticalCount++;
    } else if (issues.some(i => i.includes('⚠️'))) {
        warningCount++;
    } else {
        healthyCount++;
    }

    if (issues.length > 0) {
        details.push(`### \`${entry.slug}\` (\`${entry.branchName}\`)
- **Gesamtwortzahl:** ${wordCount}
- **Probleme:** ${issues.join(', ')}
`);
    }
});

report += `
Es gibt **${criticalCount}** Branch(es) mit kritischen Problemen und **${warningCount}** mit Warnungen. **${healthyCount}** Branches sind strukturell gesund (>500 Wörter, alle Sektionen vorhanden).

---

## 📝 Detailauswertung der problematischen Seiten

${details.length > 0 ? details.join('\n') : "🎉 Keine problematischen Seiten gefunden! Alle 50 Seiten erfüllen die strengen Kriterien."}
`;

fs.writeFileSync(reportPath, report, 'utf-8');
console.log('✅ Audit Report generiert: thin_content_audit_report.md');
