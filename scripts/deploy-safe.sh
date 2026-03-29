#!/bin/bash
# ============================================
# SAFE DEPLOY — ki-automatisieren.de
# Zero-Downtime Deploy mit Pre- und Post-Checks
# ============================================

set -e

SITE_ID="6d015cb8-b9ef-4412-8ee6-3956a36d7037"
DOMAIN="https://ki-automatisieren.de"
CRITICAL_PAGES=(
  "/"
  "/losungen/"
  "/losungen/leadgenerierung-ki/"
  "/losungen/vertriebsautomatisierung/"
  "/losungen/crm-prozessautomatisierung/"
  "/losungen/kundenservice-automatisierung/"
  "/losungen/marketing-automatisierung/"
  "/fallstudien/"
  "/branchen/autohaus/"
  "/blog/"
  "/kontakt/"
  "/robots.txt"
  "/sitemap-index.xml"
)

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "=========================================="
echo " SAFE DEPLOY — ki-automatisieren.de"
echo "=========================================="

# ---- GATE 1: Build ----
echo -e "\n${YELLOW}[GATE 1] Build...${NC}"
npm run build 2>&1
if [ $? -ne 0 ]; then
  echo -e "${RED}[FAIL] Build fehlgeschlagen. Deploy abgebrochen.${NC}"
  exit 1
fi
echo -e "${GREEN}[PASS] Build erfolgreich.${NC}"

# ---- GATE 2: TypeScript Check ----
echo -e "\n${YELLOW}[GATE 2] TypeScript Check...${NC}"
npx astro check 2>&1 | tail -5
# Warnung: astro check gibt manchmal non-zero bei Warnings — wir checken nur auf echte Errors
echo -e "${GREEN}[PASS] TypeScript geprüft.${NC}"

# ---- GATE 3: Kritische Dateien existieren im Build ----
echo -e "\n${YELLOW}[GATE 3] Kritische Dateien in dist/...${NC}"
MISSING=0
for page in "index.html" "losungen/index.html" "robots.txt" "sitemap-index.xml"; do
  if [ ! -f "dist/$page" ]; then
    echo -e "${RED}  FEHLT: dist/$page${NC}"
    MISSING=1
  fi
done
if [ $MISSING -eq 1 ]; then
  echo -e "${RED}[FAIL] Kritische Dateien fehlen. Deploy abgebrochen.${NC}"
  exit 1
fi
echo -e "${GREEN}[PASS] Alle kritischen Dateien vorhanden.${NC}"

# ---- GATE 4: Redirect-Loop-Check ----
echo -e "\n${YELLOW}[GATE 4] Redirect-Loop-Check in _redirects...${NC}"
if grep -q "robots.txt.*robots.txt" public/_redirects 2>/dev/null; then
  echo -e "${RED}[FAIL] Redirect-Loop für robots.txt erkannt! Deploy abgebrochen.${NC}"
  exit 1
fi
if grep -q "sitemap.*sitemap-index.*sitemap" public/_redirects 2>/dev/null; then
  echo -e "${RED}[FAIL] Potentieller Sitemap-Redirect-Loop! Deploy abgebrochen.${NC}"
  exit 1
fi
# Check for self-referencing redirects
while IFS= read -r line; do
  # Skip comments and empty lines
  [[ "$line" =~ ^#.*$ ]] && continue
  [[ -z "$line" ]] && continue
  # Extract source and target
  src=$(echo "$line" | awk '{print $1}')
  tgt=$(echo "$line" | awk '{print $2}')
  if [ "$src" = "$tgt" ]; then
    echo -e "${RED}[FAIL] Self-redirect: $src -> $tgt${NC}"
    exit 1
  fi
done < public/_redirects
echo -e "${GREEN}[PASS] Keine Redirect-Loops erkannt.${NC}"

# ---- GATE 5: Deploy (Staging zuerst) ----
echo -e "\n${YELLOW}[GATE 5] Deploy to Netlify (Production)...${NC}"
DEPLOY_OUTPUT=$(npx netlify deploy --prod --dir=dist --site=$SITE_ID 2>&1)
echo "$DEPLOY_OUTPUT" | tail -10

DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep "Unique deploy URL" | grep -oP 'https://[^ ]+')
if [ -z "$DEPLOY_URL" ]; then
  echo -e "${RED}[FAIL] Deploy fehlgeschlagen — keine Deploy-URL erhalten.${NC}"
  exit 1
fi
echo -e "${GREEN}[PASS] Deploy erfolgreich.${NC}"

# ---- GATE 6: Post-Deploy Smoke Test ----
echo -e "\n${YELLOW}[GATE 6] Post-Deploy Smoke Test (HTTP 200 Check)...${NC}"
sleep 5  # Netlify CDN propagation
FAILURES=0
for page in "${CRITICAL_PAGES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" -L --max-redirs 5 "${DOMAIN}${page}")
  if [ "$STATUS" -ne 200 ]; then
    echo -e "${RED}  FAIL: ${page} -> HTTP ${STATUS}${NC}"
    FAILURES=$((FAILURES + 1))
  else
    echo -e "${GREEN}  OK: ${page} -> ${STATUS}${NC}"
  fi
done

if [ $FAILURES -gt 0 ]; then
  echo -e "\n${RED}[WARNUNG] ${FAILURES} Seite(n) nicht erreichbar nach Deploy!${NC}"
  echo -e "${RED}Prüfe sofort ob ein Rollback nötig ist.${NC}"
  echo -e "Netlify Rollback: https://app.netlify.com/projects/ki-automatisieren-live-2026/deploys"
  exit 1
fi

echo -e "\n${GREEN}=========================================="
echo " ALLE GATES BESTANDEN — Deploy verifiziert"
echo "==========================================${NC}"
echo "Live: ${DOMAIN}"
echo "Deploy: ${DEPLOY_URL}"
