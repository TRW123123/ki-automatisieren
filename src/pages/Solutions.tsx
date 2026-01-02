import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import { SEO } from "@/components/SEO";
import SolutionCardsSection from "@/components/SolutionCardsSection";

const Solutions = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  // Remove unused solutions array since we're not displaying the grid anymore

  return (
    <>
      <SEO 
        title={t('solutions.seo.title')}
        description={t('solutions.seo.description')}
        routeKey="solutions"
      />
      
      {/* Solution Cards Section */}
      <SolutionCardsSection />
      
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Main Headlines */}
            <div className="space-y-4">
              <h2 className="group headline text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.25] md:leading-[1.2]">
                <span className="block">{t('solutions.hero.title1')}</span>
                <span className="block text-primary pb-1 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-1000 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-left">
                  {t('solutions.hero.title2')}
                </span>
              </h2>
            </div>
            
            {/* CTA Button */}
            <div className="pt-8 flex justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-xl transition-colors duration-200"
                onClick={openQuickAnalysis}
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Solutions;