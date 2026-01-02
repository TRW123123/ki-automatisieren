import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight } from 'lucide-react';

export const Hero3Days = () => {
  const { t } = useLanguage();
  const { openWebsite3DaysContact } = useModal();

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w3d-section pt-32 pb-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="w3d-fade-in mb-6">
          {t('website3days.hero.h1')}
        </h1>
        
        <p className="w3d-fade-in w3d-stagger-1 text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          {t('website3days.hero.subheadline')}
        </p>
        
        <div className="w3d-fade-in w3d-stagger-2 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={openWebsite3DaysContact} 
            className="w3d-btn-primary inline-flex items-center gap-2 justify-center"
          >
            {t('website3days.hero.cta.primary')}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={scrollToPricing} className="w3d-btn-secondary">
            {t('website3days.hero.cta.secondary')}
          </button>
        </div>
      </div>
    </section>
  );
};
