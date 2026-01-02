// Single Domain Configuration - German only
export const DOMAIN_CONFIG = {
  de: 'ki-automatisieren.de'
} as const;

export type SupportedLanguage = keyof typeof DOMAIN_CONFIG;

/**
 * Check if user is on correct domain
 * Redirects to /de if on root path
 */
export const checkAndRedirectDomain = () => {
  const currentDomain = window.location.hostname;
  const currentPath = window.location.pathname;
  
  // Skip redirect for localhost/staging/lovable
  if (
    currentDomain.includes('localhost') || 
    currentDomain.includes('lovable.app') ||
    currentDomain.includes('127.0.0.1')
  ) {
    return;
  }
  
  // No redirect needed for root path anymore
};

/**
 * Get the correct domain URL for a given language
 */
export const getDomainForLanguage = (lang: SupportedLanguage): string => {
  return `https://${DOMAIN_CONFIG[lang]}`;
};
