import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { RouteKey, getHreflangUrls } from "@/lib/routeMappings";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  routeKey?: RouteKey;
  params?: Record<string, string>;
}

const SEO = ({ title, description, image, url, type = "website", routeKey, params }: SEOProps) => {
  const location = useLocation();
  
  // Site title and URL - German only
  const siteTitle = 'KI Automatisieren';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const defaultImage = "/og-homepage.jpg";
  const siteUrl = 'https://ki-automatisieren.de';
  
  // No noindex for German site
  const shouldNoIndex = false;
  
  // Generate hreflang URLs - German only
  const generateHreflangUrls = () => {
    if (!routeKey) return null;
    
    const baseHreflangs = getHreflangUrls(routeKey, params);
    return {
      de: baseHreflangs.de,
      'x-default': baseHreflangs['x-default']
    };
  };
  
  const hreflangUrls = generateHreflangUrls();
  const canonicalUrl = url || (routeKey && hreflangUrls ? hreflangUrls.de : `${siteUrl}${location.pathname}`);
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* hreflang Tags */}
      {hreflangUrls && (
        <>
          <link rel="alternate" hrefLang="de" href={hreflangUrls.de} />
          <link rel="alternate" hrefLang="x-default" href={hreflangUrls['x-default']} />
        </>
      )}
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={shouldNoIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteTitle,
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "areaServed": "DE",
            "availableLanguage": "German"
          }
        })}
      </script>
      
      {/* Structured Data - WebSite with SearchAction */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteTitle,
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteUrl}/blog?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export { SEO };