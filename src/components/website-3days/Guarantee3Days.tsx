import { useLanguage } from '@/contexts/LanguageContext';
import { Shield } from 'lucide-react';

export const Guarantee3Days = () => {
  const { t } = useLanguage();

  return (
    <section className="w3d-section">
      <div className="max-w-3xl mx-auto text-center w3d-animate-on-scroll">
        <div className="w-20 h-20 bg-[#7C3AED]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-[#7C3AED]" />
        </div>
        
        <h2 className="mb-6">{t('website3days.guarantee.title')}</h2>
        <p className="text-2xl font-semibold text-gray-700">
          {t('website3days.guarantee.text')}
        </p>
      </div>
    </section>
  );
};
