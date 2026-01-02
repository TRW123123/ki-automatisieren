import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight } from 'lucide-react';

export const FinalCTA3Days = () => {
  const { t } = useLanguage();
  const { openWebsite3DaysContact } = useModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w3d-section text-center">
      <div className="max-w-3xl mx-auto w3d-animate-on-scroll">
        <h2 className="mb-8">{t('website3days.finalcta.title')}</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={openWebsite3DaysContact} 
            className="w3d-btn-primary inline-flex items-center gap-2 justify-center"
          >
            {t('website3days.finalcta.cta.primary')}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={scrollToTop} className="w3d-btn-secondary">
            {t('website3days.finalcta.cta.secondary')}
          </button>
        </div>
      </div>
    </section>
  );
};
