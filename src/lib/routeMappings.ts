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
  /* PARKED: English routes - To reactivate, uncomment this block
  en: {
    'home': '',
    'solutions': '/solutions',
    'cases': '/case-studies',
    'case-detail': '/case-studies/:slug',
    'free-content': '/free-resources',
    'blog': '/blog',
    'blog-post': '/blog/:slug',
    'privacy': '/privacy',
    'terms': '/terms'
  }
  */
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
  const mapping = routeMappings.de;
  let path = mapping[routeKey] || '';
  
  // Replace parameters in path (e.g., :slug -> actual-slug)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, value);
    });
  }
  
  return path || '/';
};

/**
 * Get the route key from a path
 * @param path - The path to check
 * @returns The route key if found, otherwise undefined
 */
export const getRouteKeyFromPath = (path: string, language: string): RouteKey | undefined => {
  const mapping = routeMappings.de;
  const cleanPath = path.split('?')[0];
  
  // Find matching route key
  for (const [key, value] of Object.entries(mapping)) {
    const pattern = value.replace(/:[^/]+/g, '[^/]+');
    const regex = new RegExp(`^${pattern}$`);
    if (regex.test(cleanPath)) {
      return key as RouteKey;
    }
  }
  
  return undefined;
};

/**
 * Extract parameters from a path based on route key
 * @param path - The path to extract parameters from
 * @param language - The language code
 * @param routeKey - The route key
 * @returns Object with extracted parameters or undefined
 */
export const extractParamsFromPath = (
  path: string,
  language: string,
  routeKey: RouteKey
): Record<string, string> | undefined => {
  const mapping = routeMappings.de;
  const pattern = mapping[routeKey];
  
  if (!pattern) return undefined;
  
  const cleanPath = path.split('?')[0];
  const regex = new RegExp(pattern.replace(/:[^/]+/g, '([^/]+)'));
  const match = cleanPath.match(regex);
  
  if (!match) return undefined;
  
  const params: Record<string, string> = {};
  const paramNames = pattern.match(/:[^/]+/g)?.map(p => p.slice(1)) || [];
  
  paramNames.forEach((name, index) => {
    params[name] = match[index + 1];
  });
  
  return params;
};

/**
 * Generate hreflang URLs for all language versions of a route
 * @param routeKey - The route key (home, solutions, etc.)
 * @param params - Optional parameters (e.g., { slug: 'my-post' })
 * @returns Object with URLs for all languages including x-default
 */
export const getHreflangUrls = (
  routeKey: RouteKey,
  params?: Record<string, string>
): Record<string, string> => {
  const baseUrl = 'https://ki-automatisieren.de';
  const path = getLocalizedRoute('de', routeKey, params);
  const fullUrl = path === '/' ? baseUrl : `${baseUrl}${path}`;
  
  return {
    'de': fullUrl,
    'x-default': fullUrl
  };
};
