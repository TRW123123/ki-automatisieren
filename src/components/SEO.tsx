import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
  canonical?: string;
}

export default function SEO({
  title,
  description,
  name = 'KI Automatisieren',
  type = 'website',
  image = 'https://ki-automatisieren.de/og-homepage.jpg',
  url,
  canonical
}: SEOProps) {

  const siteTitle = title ? `${title} | ${name}` : `${name} – KI Agentur für Vertriebsautomatisierung`;
  const metaDescription = description || "Skalieren Sie Ihren Vertrieb mit KI & n8n. Wir automatisieren Lead-Qualifizierung, Outreach und CRM-Prozesse. Integrierte Lösungen für Makler, Agenturen & SaaS.";
  const currentUrl = url || typeof window !== 'undefined' ? window.location.href : 'https://ki-automatisieren.de';
  const canonicalUrl = canonical || currentUrl;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}