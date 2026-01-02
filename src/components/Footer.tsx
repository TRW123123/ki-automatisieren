import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import { getLocalizedRoute, type RouteKey } from "@/lib/routeMappings";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { t, currentLanguage } = useLanguage();
  const { openQuickAnalysis } = useModal();
  
  const getLocalizedPath = (routeKey: RouteKey) => {
    return getLocalizedRoute(currentLanguage, routeKey);
  };

  // Social-Media-Links
  const socialLinks = {
    youtube: 'https://www.youtube.com/@KI-Automatisieren',
    tiktok: 'https://www.tiktok.com/@ki_automatisieren',
    instagram: 'https://www.instagram.com/stautomatisierung/',
  };

  return (
    <footer className="border-t border-border bg-bg-2">
      <div className="container mx-auto px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <Link to={getLocalizedPath('home')} className="flex items-center" aria-label="Zur Startseite">
              <img 
                src="/logos/de-logo.avif" 
                alt="KI Automatisieren Logo" 
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-text-muted">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={getLocalizedPath('home')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  {t('footer.menu.home')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('solutions')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  {t('footer.menu.solutions')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('cases')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  {t('footer.menu.cases')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('about')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  {t('footer.menu.about')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">Dienstleistungen</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to={getLocalizedRoute(currentLanguage, 'solution-leadgen-ki')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                    KI Leadgenerierung
                  </Link>
                </li>
                <li>
                  <Link to={getLocalizedRoute(currentLanguage, 'solution-marketing')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                    Marketing Automatisierung
                  </Link>
                </li>
                <li>
                  <Link to={getLocalizedRoute(currentLanguage, 'solution-vertrieb')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                    Vertriebsautomatisierung
                  </Link>
                </li>
                <li>
                  <Link to={getLocalizedRoute(currentLanguage, 'solution-crm')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                    CRM Automatisierung
                  </Link>
                </li>
                <li>
                  <Link to={getLocalizedRoute(currentLanguage, 'solution-kundenservice')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                    Kundenservice Automatisierung
                  </Link>
                </li>
                <li>
                  <Link to={getLocalizedRoute(currentLanguage, 'strategieberatung')} className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                    KI Strategieberatung
                  </Link>
                </li>
              </ul>
            </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">{t('footer.contact.title')}</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="font-medium text-text-hi">ST-Automatisierung</li>
              <li>
                Heidestraße 2<br/>
                58239 Schwerte, Deutschland
              </li>
              <li>
                <a href="mailto:s.tepecik@ki-automatisieren.de" className="hover:text-lime-400 transition-colors lime-underline">
                  s.tepecik@ki-automatisieren.de
                </a>
              </li>
              <li>
                <a href="tel:+491627246504" className="hover:text-lime-400 transition-colors lime-underline">
                  +49 162 724 6504
                </a>
              </li>
            </ul>
            <div className="flex space-x-3 pt-2">
              <a 
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-lime-400 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-lime-400 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-lime-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">{t('footer.contact.title')}</h3>
            <div className="space-y-4">
              <p className="text-sm text-text-muted">
                {t('footer.contact.text')}
              </p>
              <Button 
                variant="lime" 
                className="w-full hover-glow"
                onClick={openQuickAnalysis}
              >
                {t('footer.cta.button')}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-text-muted">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-4">
              <Link to={getLocalizedPath('privacy')} className="text-sm text-text-muted hover:text-lime-400 transition-colors lime-underline">
                {t('footer.privacy')}
              </Link>
              <Link to={getLocalizedPath('terms')} className="text-sm text-text-muted hover:text-lime-400 transition-colors lime-underline">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;