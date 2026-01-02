import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Badge } from "@/components/ui/badge";
import ConnectedTimeline from "@/components/ConnectedTimeline";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import { useNavigate } from "react-router-dom";
import { caseStudiesData, getLocalizedCaseStudies } from "@/data/caseStudiesData";
import { getLocalizedRoute } from "@/lib/routeMappings";

const Fallstudien = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Alle");
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();
  const { openQuickAnalysis } = useModal();

  // Handle hash navigation - redirect to new URLs
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#case-')) {
      const caseNumber = parseInt(hash.replace('#case-', ''));
      const caseStudy = caseStudiesData[caseNumber - 1];
      if (caseStudy) {
        navigate(getLocalizedRoute(currentLanguage, 'case-detail', { slug: caseStudy.slug }), { replace: true });
      }
    }
  }, [navigate, currentLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t('cases.seo.title')}
        description={t('cases.seo.description')}
        routeKey="cases"
      />
      <BreadcrumbSchema items={[
        { name: t('nav.home'), url: `https://ki-automatisieren.de${getLocalizedRoute(currentLanguage, 'home')}` },
        { name: t('nav.cases'), url: `https://ki-automatisieren.de${getLocalizedRoute(currentLanguage, 'cases')}` }
      ]} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{
        minHeight: '50vh', 
        backgroundColor: '#0B0F14',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(163, 230, 53, 0.05) 0%, transparent 70%), url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23A3E635" fill-opacity="0.02"%3E%3Cpath d="m0 40l40-40h-40v40zm40 0v-40h-40l40 40z"/%3E%3C/g%3E%3C/svg%3E")'
      }}>
        <div className="container mx-auto px-4 relative py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <Badge 
              variant="outline" 
              className="mb-8 border border-[#A3E635] text-[#A3E635] bg-transparent hover:bg-[#A3E635]/5"
            >
              {t('nav.cases')}
            </Badge>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#E5E7EB' }}>
                {t('cases.title')}
              </h1>
              
              <p className="text-lg lg:text-xl mb-8" style={{ color: '#94A3B8' }}>
                {t('cases.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Timeline */}
      <div data-timeline>
        <ConnectedTimeline 
          caseStudies={getLocalizedCaseStudies(currentLanguage as 'tr' | 'de')} 
          selectedFilter={selectedFilter}
        />
      </div>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('cases.final.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('cases.final.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-glow" onClick={openQuickAnalysis}>
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fallstudien;
