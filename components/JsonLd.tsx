import { getI18n } from '@/locales/server'

interface JsonLdProps {
  locale: string
}

export async function JsonLd({ locale }: JsonLdProps) {
  const t = await getI18n()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Automation Platform",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Technologieplattform, die Unternehmenswachstum durch KI- und Automatisierungslösungen ermöglicht",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["German"]
    },
    "sameAs": [
      "https://linkedin.com/company/yourcompany",
      "https://twitter.com/yourcompany"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Automation Platform",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "KI-Automatisierungsdienste",
    "description": "KI-Lösungen für Vertriebsautomatisierung, Marketing-Automatisierung und Kundenkommunikation",
    "provider": {
      "@type": "Organization",
      "name": "AI Automation Platform"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  )
}