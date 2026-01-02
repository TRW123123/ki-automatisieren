import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Rocket, CheckCircle2 } from 'lucide-react';

const processSteps = [
  { icon: Calendar, titleKey: 'website3days.process.step1.title', durationKey: 'website3days.process.step1.duration', descKey: 'website3days.process.step1.description' },
  { icon: Rocket, titleKey: 'website3days.process.step2.title', durationKey: 'website3days.process.step2.duration', descKey: 'website3days.process.step2.description' },
  { icon: CheckCircle2, titleKey: 'website3days.process.step3.title', durationKey: 'website3days.process.step3.duration', descKey: 'website3days.process.step3.description' }
];

export const Process3Days = () => {
  const { t } = useLanguage();

  return (
    <section className="w3d-section">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.process.title')}
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {processSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="w3d-animate-on-scroll flex gap-6 items-start"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-[#7C3AED] rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold">{t(step.titleKey)}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {t(step.durationKey)}
                  </span>
                </div>
                <p className="text-gray-600">{t(step.descKey)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
