#!/bin/bash
# ============================================
# CONTENT QUALITY GATE — ki-automatisieren.de
# Prüft blogData.ts auf Thin Content VOR Deploy
# ============================================

set -e

BLOG_FILE="src/data/blogData.ts"
MIN_WORDS=800
MIN_H2=3
MIN_FAQ=2

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "=========================================="
echo " CONTENT QUALITY GATE"
echo "=========================================="

FAILURES=0

# Extract each blog post content and validate
node -e "
const fs = require('fs');
const content = fs.readFileSync('$BLOG_FILE', 'utf8');

// Match all content fields
const contentBlocks = content.match(/content:\s*\x60([\\s\\S]*?)\x60/g);
const idBlocks = content.match(/id:\s*\"([^\"]+)\"/g);

if (!contentBlocks || !idBlocks) {
  console.log('ERROR: Could not parse blog posts');
  process.exit(1);
}

let failures = 0;
const results = [];

// Skip first id (interface definition)
const ids = idBlocks.slice(1).map(s => s.replace('id: \"', '').replace('\"', ''));

contentBlocks.forEach((block, i) => {
  const text = block.replace(/content:\s*\x60/, '').replace(/\x60$/, '');
  const words = text.split(/\s+/).filter(w => w.length > 0).length;
  const h2Count = (text.match(/^## /gm) || []).length;
  const h3Count = (text.match(/^### /gm) || []).length;
  const faqCount = (text.match(/\*\*[^*]+\?\*\*/g) || []).length;
  const hasNumbers = /\d+%|\d+\.\d+|\d+ €|\d+ Stunden|\d+ Minuten/.test(text);
  const hasInternalLinks = /\/losungen\/|\/branchen\/|\/blog\/|\/fallstudien\//.test(text);
  const slug = ids[i] || 'unknown-' + i;

  const issues = [];
  if (words < $MIN_WORDS) issues.push('WORDS=' + words + ' (min $MIN_WORDS)');
  if (h2Count < $MIN_H2) issues.push('H2s=' + h2Count + ' (min $MIN_H2)');
  if (faqCount < $MIN_FAQ) issues.push('FAQs=' + faqCount + ' (min $MIN_FAQ)');
  if (!hasNumbers) issues.push('Keine konkreten Zahlen');

  if (issues.length > 0) {
    console.log('FAIL: ' + slug);
    issues.forEach(issue => console.log('  - ' + issue));
    failures++;
  } else {
    console.log('PASS: ' + slug + ' (' + words + ' words, ' + h2Count + ' H2s, ' + faqCount + ' FAQs)');
  }
});

console.log('---');
console.log('Total: ' + ids.length + ' articles, ' + failures + ' failures');
process.exit(failures > 0 ? 1 : 0);
" 2>&1

if [ $? -ne 0 ]; then
  echo -e "\n${RED}[FAIL] Content Quality Gate nicht bestanden. Deploy blockiert.${NC}"
  exit 1
fi

echo -e "\n${GREEN}[PASS] Alle Artikel bestehen das Quality Gate.${NC}"
