import { useLanguage } from '@/contexts/LanguageContext';
import { Check, X } from 'lucide-react';

const goodItems = [
  'KMU & lokale Betriebe',
  'Dienstleister & Handwerker',
  'Coaches & Berater',
  'Startups mit klarer Vision'
];

const badItems = [
  '10-Runden-Designkunden',
  'Großprojekte mit langen Abstimmungen',
  'Agenturen mit komplexen Anforderungen',
  'Endlose Feedback-Schleifen'
];

export const FitNoFit3Days = () => {
  const { t } = useLanguage();

  return (
    <section className="w3d-section">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.fit.title')}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="w3d-card w3d-animate-on-scroll border-2 border-green-200">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Check className="w-6 h-6 text-green-600" />
            {t('website3days.fit.good.title')}
          </h3>
          <ul className="space-y-3">
            {goodItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w3d-card w3d-animate-on-scroll border-2 border-red-200">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <X className="w-6 h-6 text-red-600" />
            {t('website3days.fit.bad.title')}
          </h3>
          <ul className="space-y-3">
            {badItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
