
export function ProfessionalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "KI Automatisieren",
        "image": "https://ki-automatisieren.de/og-homepage.jpg",
        "@id": "https://ki-automatisieren.de",
        "url": "https://ki-automatisieren.de",
        "telephone": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Düsseldorf",
            "postalCode": "",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.2277,
            "longitude": 6.7735
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "priceRange": "$$",
        "sameAs": [
            "https://www.linkedin.com/company/ki-automatisieren"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
