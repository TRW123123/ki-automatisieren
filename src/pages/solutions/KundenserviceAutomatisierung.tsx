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
import { MessageCircle, X, Clock, Users, Bot, Phone, Ticket, TrendingUp, BarChart, Globe } from 'lucide-react';

const KundenserviceAutomatisierung = () => {
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
      navigate('/de/losungen/kundenservice-automatisierung');
    }
  }, [currentLanguage, navigate]);

  const scrollToCaseStudy = () => {
    document.querySelector('.case-study-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    { text: t('solutions.kundenservice.problem.1'), icon: X },
    { text: t('solutions.kundenservice.problem.2'), icon: Clock },
    { text: t('solutions.kundenservice.problem.3'), icon: Users },
    { text: t('solutions.kundenservice.problem.4'), icon: MessageCircle }
  ];

  const processSteps = [
    { number: 1, title: t('solutions.kundenservice.process.step1.title'), description: t('solutions.kundenservice.process.step1.description'), icon: BarChart },
    { number: 2, title: t('solutions.kundenservice.process.step2.title'), description: t('solutions.kundenservice.process.step2.description'), icon: Bot },
    { number: 3, title: t('solutions.kundenservice.process.step3.title'), description: t('solutions.kundenservice.process.step3.description'), icon: Ticket },
    { number: 4, title: t('solutions.kundenservice.process.step4.title'), description: t('solutions.kundenservice.process.step4.description'), icon: TrendingUp }
  ];

  const features = [
    { title: t('solutions.kundenservice.feature1.title'), description: t('solutions.kundenservice.feature1.description'), icon: Bot },
    { title: t('solutions.kundenservice.feature2.title'), description: t('solutions.kundenservice.feature2.description'), icon: Phone },
    { title: t('solutions.kundenservice.feature3.title'), description: t('solutions.kundenservice.feature3.description'), icon: Ticket },
    { title: t('solutions.kundenservice.feature4.title'), description: t('solutions.kundenservice.feature4.description'), icon: MessageCircle },
    { title: t('solutions.kundenservice.feature5.title'), description: t('solutions.kundenservice.feature5.description'), icon: Globe },
    { title: t('solutions.kundenservice.feature6.title'), description: t('solutions.kundenservice.feature6.description'), icon: BarChart }
  ];

  const benefits = [
    { text: t('solutions.kundenservice.benefit.1'), icon: TrendingUp },
    { text: t('solutions.kundenservice.benefit.2'), icon: Clock },
    { text: t('solutions.kundenservice.benefit.3'), icon: Users },
    { text: t('solutions.kundenservice.benefit.4'), icon: BarChart }
  ];

  return (
    <>
      <SEO 
        title={t('solutions.kundenservice.seo.title')}
        description={t('solutions.kundenservice.seo.description')}
        routeKey="solution-kundenservice"
      />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Kundenservice-Automatisierung",
          "provider": { "@type": "Organization", "name": "KI Automatisieren" },
          "description": t('solutions.kundenservice.seo.description'),
          "areaServed": "DE",
          "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://ki-automatisieren.de/de/losungen/kundenservice-automatisierung" }
        })}
      </script>

      <div className="min-h-screen">
        <SolutionHero 
          title={t('solutions.kundenservice.hero.title')}
          subtitle={t('solutions.kundenservice.hero.subtitle')}
          ctaPrimary={t('solutions.kundenservice.cta.primary')}
          ctaSecondary={t('solutions.kundenservice.cta.secondary')}
          icon={MessageCircle}
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={scrollToCaseStudy}
        />

        <SolutionProblem title={t('solutions.kundenservice.problem.title')} problems={problems} />
        <SolutionProcess title={t('solutions.kundenservice.process.title')} steps={processSteps} />
        <SolutionFeatures title={t('solutions.kundenservice.features.title')} features={features} />
        <SolutionBenefits title={t('solutions.kundenservice.benefits.title')} benefits={benefits} />

        <SolutionCaseStudy 
          company="Acilsatis"
          result="1000+ Anfragen beantwortet"
          description={t('solutions.kundenservice.casestudy.description')}
          link="/de/fallstudien/acilsatis"
          image="/logos/acilsatis.avif"
        />

        <SolutionFinalCTA 
          title={t('solutions.kundenservice.finalcta.title')}
          subtitle={t('solutions.kundenservice.finalcta.subtitle')}
          ctaPrimary={t('solutions.kundenservice.cta.primary')}
          ctaSecondary="Weitere Lösungen ansehen"
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={() => navigate('/de/losungen')}
        />
      </div>
    </>
  );
};

export default KundenserviceAutomatisierung;
