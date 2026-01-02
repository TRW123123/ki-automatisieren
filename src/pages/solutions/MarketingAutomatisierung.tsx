import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { SEO } from '@/components/SEO';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { SolutionProblem } from '@/components/solutions/SolutionProblem';
import { SolutionProcess } from '@/components/solutions/SolutionProcess';
import { SolutionFeatures } from '@/components/solutions/SolutionFeatures';
import { SolutionBenefits } from '@/components/solutions/SolutionBenefits';
import { SolutionCaseStudy } from '@/components/solutions/SolutionCaseStudy';
import { SolutionFinalCTA } from '@/components/solutions/SolutionFinalCTA';
import { Megaphone, X, Clock, Image, Target, PenTool, Share2, TrendingUp, BarChart, Calendar } from 'lucide-react';

const MarketingAutomatisierung = () => {
  const { t, currentLanguage } = useLanguage();
  const { openQuickAnalysis } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Redirect to German if not on German
  useEffect(() => {
    if (currentLanguage !== 'de') {
      navigate('/de/losungen/marketing-automatisierung');
    }
  }, [currentLanguage, navigate]);

  const scrollToCaseStudy = () => {
    document.querySelector('.case-study-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    { text: t('solutions.marketing.problem.1'), icon: X },
    { text: t('solutions.marketing.problem.2'), icon: Clock },
    { text: t('solutions.marketing.problem.3'), icon: Target },
    { text: t('solutions.marketing.problem.4'), icon: Image }
  ];

  const processSteps = [
    { number: 1, title: t('solutions.marketing.process.step1.title'), description: t('solutions.marketing.process.step1.description'), icon: BarChart },
    { number: 2, title: t('solutions.marketing.process.step2.title'), description: t('solutions.marketing.process.step2.description'), icon: PenTool },
    { number: 3, title: t('solutions.marketing.process.step3.title'), description: t('solutions.marketing.process.step3.description'), icon: Calendar },
    { number: 4, title: t('solutions.marketing.process.step4.title'), description: t('solutions.marketing.process.step4.description'), icon: TrendingUp }
  ];

  const features = [
    { title: t('solutions.marketing.feature1.title'), description: t('solutions.marketing.feature1.description'), icon: PenTool },
    { title: t('solutions.marketing.feature2.title'), description: t('solutions.marketing.feature2.description'), icon: Share2 },
    { title: t('solutions.marketing.feature3.title'), description: t('solutions.marketing.feature3.description'), icon: Target },
    { title: t('solutions.marketing.feature4.title'), description: t('solutions.marketing.feature4.description'), icon: BarChart },
    { title: t('solutions.marketing.feature5.title'), description: t('solutions.marketing.feature5.description'), icon: Image },
    { title: t('solutions.marketing.feature6.title'), description: t('solutions.marketing.feature6.description'), icon: Calendar }
  ];

  const benefits = [
    { text: t('solutions.marketing.benefit.1'), icon: TrendingUp },
    { text: t('solutions.marketing.benefit.2'), icon: Clock },
    { text: t('solutions.marketing.benefit.3'), icon: Target },
    { text: t('solutions.marketing.benefit.4'), icon: BarChart }
  ];

  return (
    <>
      <SEO 
        title={t('solutions.marketing.seo.title')}
        description={t('solutions.marketing.seo.description')}
        routeKey="solution-marketing"
      />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Marketing-Automatisierung",
          "provider": { "@type": "Organization", "name": "KI Automatisieren" },
          "description": t('solutions.marketing.seo.description'),
          "areaServed": "DE",
          "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://ki-automatisieren.de/de/losungen/marketing-automatisierung" }
        })}
      </script>

      <div className="min-h-screen">
        <SolutionHero 
          title={t('solutions.marketing.hero.title')}
          subtitle={t('solutions.marketing.hero.subtitle')}
          ctaPrimary={t('solutions.marketing.cta.primary')}
          ctaSecondary={t('solutions.marketing.cta.secondary')}
          icon={Megaphone}
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={scrollToCaseStudy}
        />

        <SolutionProblem title={t('solutions.marketing.problem.title')} problems={problems} />
        <SolutionProcess title={t('solutions.marketing.process.title')} steps={processSteps} />
        <SolutionFeatures title={t('solutions.marketing.features.title')} features={features} />
        <SolutionBenefits title={t('solutions.marketing.benefits.title')} benefits={benefits} />

        <SolutionCaseStudy 
          company="Salevium"
          result="LinkedIn Automatisierung"
          description={t('solutions.marketing.casestudy.description')}
          link="/de/fallstudien/salevium"
          image="/logos/salevium.avif"
        />

        <SolutionFinalCTA 
          title={t('solutions.marketing.finalcta.title')}
          subtitle={t('solutions.marketing.finalcta.subtitle')}
          ctaPrimary={t('solutions.marketing.cta.primary')}
          ctaSecondary="Weitere Lösungen ansehen"
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={() => navigate('/de/losungen')}
        />
      </div>
    </>
  );
};

export default MarketingAutomatisierung;
