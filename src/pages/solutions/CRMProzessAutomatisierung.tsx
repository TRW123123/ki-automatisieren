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
import { Database, X, Clock, FileX, Workflow, Sparkles, Link2, TrendingUp, BarChart, FileText } from 'lucide-react';

const CRMProzessAutomatisierung = () => {
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
      navigate('/de/losungen/crm-prozessautomatisierung');
    }
  }, [currentLanguage, navigate]);

  const scrollToCaseStudy = () => {
    document.querySelector('.case-study-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    { text: t('solutions.crm.problem.1'), icon: X },
    { text: t('solutions.crm.problem.2'), icon: Clock },
    { text: t('solutions.crm.problem.3'), icon: FileX },
    { text: t('solutions.crm.problem.4'), icon: Workflow }
  ];

  const processSteps = [
    { number: 1, title: t('solutions.crm.process.step1.title'), description: t('solutions.crm.process.step1.description'), icon: BarChart },
    { number: 2, title: t('solutions.crm.process.step2.title'), description: t('solutions.crm.process.step2.description'), icon: Workflow },
    { number: 3, title: t('solutions.crm.process.step3.title'), description: t('solutions.crm.process.step3.description'), icon: Link2 },
    { number: 4, title: t('solutions.crm.process.step4.title'), description: t('solutions.crm.process.step4.description'), icon: TrendingUp }
  ];

  const features = [
    { title: t('solutions.crm.feature1.title'), description: t('solutions.crm.feature1.description'), icon: Sparkles },
    { title: t('solutions.crm.feature2.title'), description: t('solutions.crm.feature2.description'), icon: Database },
    { title: t('solutions.crm.feature3.title'), description: t('solutions.crm.feature3.description'), icon: Workflow },
    { title: t('solutions.crm.feature4.title'), description: t('solutions.crm.feature4.description'), icon: FileText },
    { title: t('solutions.crm.feature5.title'), description: t('solutions.crm.feature5.description'), icon: Link2 },
    { title: t('solutions.crm.feature6.title'), description: t('solutions.crm.feature6.description'), icon: BarChart }
  ];

  const benefits = [
    { text: t('solutions.crm.benefit.1'), icon: TrendingUp },
    { text: t('solutions.crm.benefit.2'), icon: Clock },
    { text: t('solutions.crm.benefit.3'), icon: Database },
    { text: t('solutions.crm.benefit.4'), icon: BarChart }
  ];

  return (
    <>
      <SEO 
        title={t('solutions.crm.seo.title')}
        description={t('solutions.crm.seo.description')}
        routeKey="solution-crm"
      />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "CRM- & Prozessautomatisierung",
          "provider": { "@type": "Organization", "name": "KI Automatisieren" },
          "description": t('solutions.crm.seo.description'),
          "areaServed": "DE",
          "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://ki-automatisieren.de/de/losungen/crm-prozessautomatisierung" }
        })}
      </script>

      <div className="min-h-screen">
        <SolutionHero 
          title={t('solutions.crm.hero.title')}
          subtitle={t('solutions.crm.hero.subtitle')}
          ctaPrimary={t('solutions.crm.cta.primary')}
          ctaSecondary={t('solutions.crm.cta.secondary')}
          icon={Database}
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={scrollToCaseStudy}
        />

        <SolutionProblem title={t('solutions.crm.problem.title')} problems={problems} />
        <SolutionProcess title={t('solutions.crm.process.title')} steps={processSteps} />
        <SolutionFeatures title={t('solutions.crm.features.title')} features={features} />
        <SolutionBenefits title={t('solutions.crm.benefits.title')} benefits={benefits} />

        <SolutionCaseStudy 
          company="Car Studio AI"
          result="15h/Woche gespart"
          description={t('solutions.crm.casestudy.description')}
          link="/de/fallstudien/car-studio-ai"
          image="/logos/carstudio.avif"
        />

        <SolutionFinalCTA 
          title={t('solutions.crm.finalcta.title')}
          subtitle={t('solutions.crm.finalcta.subtitle')}
          ctaPrimary={t('solutions.crm.cta.primary')}
          ctaSecondary="Weitere Lösungen ansehen"
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={() => navigate('/de/losungen')}
        />
      </div>
    </>
  );
};

export default CRMProzessAutomatisierung;
