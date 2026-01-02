import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// Types for locale support
export type HeroLang = 'de' | 'en';

interface HeroProps {
  locale?: HeroLang;
  modalOpen?: boolean;
  onModalOpenChange?: (open: boolean) => void;
}

// Hero content - German and English only
const heroCopy = {
  de: {
    title1: 'Ihr Team schläft nachts. Unsere KI-Systeme nicht.',
    title2: 'Wir automatisieren alles, von der E-Mail bis zur Rechnung.',
    subtitle: 'Ergebnisse statt KI-Hype.',
    ctaPrimary: 'Jetzt kostenlos starten',
    socialProof: '100+ B2B Teams vertrauen auf unsere praktischen Automatisierungen.'
  },
  en: {
    title1: 'You run the business.',
    title2: 'We build the Artificial Intelligence.',
    subtitle: 'AI + Automation that scales your company — without you doing more.',
    ctaPrimary: 'Start free now',
    socialProof: '100+ B2B teams trust our practical automation solutions.'
  }
};

export function Hero({ locale, modalOpen, onModalOpenChange }: HeroProps) {
  // For React Router context (src/ pages)
  const languageContext = useLanguage?.();
  
  // Determine which locale to use - prefer prop (Next.js) over context (React Router)
  const currentLocale = locale || (languageContext?.currentLanguage as HeroLang) || 'de';
  const copy = heroCopy[currentLocale] || heroCopy.de;

  const handleCtaClick = () => {
    // Open the QuickAnalysisModal
    if (onModalOpenChange) {
      onModalOpenChange(true);
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center" aria-label="Hero section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-4 md:space-y-8">
          {/* Main Headlines */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="group headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.3] md:leading-[1.2]">
              <span className="block">{copy.title1}</span>
              <span className="block text-primary pb-1 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-1000 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-left">
                {copy.title2}
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          {copy.subtitle && (
            <p className="body-text text-lg md:text-xl text-muted-foreground max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              {copy.subtitle}
            </p>
          )}
          
          {/* CTA Button */}
          <div className="pt-4 md:pt-8">
            <Button
              onClick={handleCtaClick}
              size="lg"
              aria-label={copy.ctaPrimary}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold rounded-xl transition-colors duration-200 min-h-[48px] min-w-[48px]"
            >
              {copy.ctaPrimary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
