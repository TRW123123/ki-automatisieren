// URL mappings for different languages
// Maps logical route names to actual URL paths per language

export type RouteKey =
    | 'home'
    | 'solutions'
    | 'cases'
    | 'case-detail'
    | 'free-content'
    | 'blog'
    | 'blog-post'
    | 'about'
    | 'privacy'
    | 'terms'
    | 'website-in-3-days'
    | 'website-3days-thank-you'
    | 'solution-leadgen-ki'
    | 'solution-vertrieb'
    | 'solution-marketing'
    | 'solution-crm'
    | 'solution-kundenservice'
    | 'strategieberatung';

export const routeMappings: Record<string, Record<RouteKey, string>> = {
    de: {
        'home': '',
        'solutions': '/losungen',
        'cases': '/fallstudien',
        'case-detail': '/fallstudien/:slug',
        'free-content': '/kostenlose-inhalte',
        'blog': '/blog',
        'blog-post': '/blog/:slug',
        'about': '/uber-uns',
        'privacy': '/datenschutz',
        'terms': '/nutzungsbedingungen',
        'website-in-3-days': '/website-in-3-tagen',
        'website-3days-thank-you': '/website-in-3-tagen/danke',
        'solution-leadgen-ki': '/losungen/leadgenerierung-ki',
        'solution-vertrieb': '/losungen/vertriebsautomatisierung',
        'solution-marketing': '/losungen/marketing-automatisierung',
        'solution-crm': '/losungen/crm-prozessautomatisierung',
        'solution-kundenservice': '/losungen/kundenservice-automatisierung',
        'strategieberatung': '/strategieberatung-ki-sales-marketing'
    }
};

/**
 * Get the localized path for a route key
 * @param language - The language code (tr, de, en)
 * @param routeKey - The route key from RouteKey type
 * @param params - Optional parameters to replace in the path (e.g., { slug: 'my-post' })
 * @returns The full localized path (e.g., '/de/losungen')
 */
export const getLocalizedRoute = (
    language: string,
    routeKey: RouteKey,
    params?: Record<string, string>
): string => {
    const mapping = routeMappings.de; // FORCE DE for now
    let path = mapping[routeKey] || '';

    // Replace parameters in path (e.g., :slug -> actual-slug)
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            path = path.replace(`:${key}`, value);
        });
    }

    return path || '/';
};
