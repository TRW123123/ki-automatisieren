import pseoData from '../data/pseo_data.json';

const SITE_URL = 'https://ki-automatisieren.de';

export async function GET({ request }: { request: Request }) {
  // Sort by Tier (ascending) then Search Volume (descending)
  const sortedBranches = [...pseoData].sort((a, b) => {
      const tierA = parseInt(a.tier || '3');
      const tierB = parseInt(b.tier || '3');
      if (tierA !== tierB) return tierA - tierB;
      
      const volA = a.searchVolume || 0;
      const volB = b.searchVolume || 0;
      if (volA !== volB) return volB - volA;
      
      return a.branchName.localeCompare(b.branchName);
  });

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sortedBranches.map(branche => {
    // Generate priority based on tier
    // Tier 1 (High Value/Volume) -> 0.9
    // Tier 2 (Medium Value) -> 0.7 
    // Tier 3 (Baseline) -> 0.5
    const priority = branche.tier === '1' ? '0.9' : (branche.tier === '2' ? '0.7' : '0.5');
    
    // Change freq could be higher for better performing pages
    const changefreq = branche.tier === '1' ? 'weekly' : 'monthly';
    
    return `
  <url>
    <loc>${SITE_URL}/branchen/${branche.slug}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('')}
</urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
} 
