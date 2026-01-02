import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

// Single-Domain Configuration for ki-automatisieren.de
const BASE_URL = 'https://ki-automatisieren.de';

// Generate sitemap for German website
const generateSitemap = (): string => {
  const urlEntry = (path: string, priority: string = '0.8', changefreq: string = 'monthly') => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>2025-11-30</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  const urls = `
  ${urlEntry('/', '1.0', 'weekly')}
  ${urlEntry('/losungen', '0.9')}
  ${urlEntry('/losungen/leadgenerierung-ki', '0.85')}
  ${urlEntry('/losungen/vertriebsautomatisierung', '0.85')}
  ${urlEntry('/losungen/marketing-automatisierung', '0.85')}
  ${urlEntry('/losungen/crm-prozessautomatisierung', '0.85')}
  ${urlEntry('/losungen/kundenservice-automatisierung', '0.85')}
  ${urlEntry('/fallstudien', '0.9')}
  ${urlEntry('/fallstudien/car-studio-ai', '0.7')}
  ${urlEntry('/fallstudien/acilsatis', '0.7')}
  ${urlEntry('/fallstudien/salevium', '0.7')}
  ${urlEntry('/fallstudien/erpa-teknoloji', '0.7')}
  ${urlEntry('/fallstudien/cemkimsan', '0.7')}
  ${urlEntry('/fallstudien/dkm-coach-bilge', '0.7')}
  ${urlEntry('/blog', '0.9', 'daily')}
  ${urlEntry('/uber-uns', '0.8')}
  ${urlEntry('/website-in-3-tagen', '0.9', 'weekly')}
  ${urlEntry('/datenschutz', '0.3')}
  ${urlEntry('/nutzungsbedingungen', '0.3')}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;
};

serve(async (req: Request) => {
  const sitemapXML = generateSitemap();
  
  return new Response(sitemapXML, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", // 24 hours
      "X-Robots-Tag": "noindex"
    },
  });
});
