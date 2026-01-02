import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Users, Code, MessageSquare } from 'lucide-react';

const reasons = [
  { icon: Zap, key: 'website3days.why.reason1' },
  { icon: Users, key: 'website3days.why.reason2' },
  { icon: Code, key: 'website3days.why.reason3' },
  { icon: MessageSquare, key: 'website3days.why.reason4' }
];

export const WhyItWorks3Days = () => {
  const { t } = useLanguage();

  return (
    <section className="w3d-section bg-[#F8F9FA]">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.why.title')}
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, idx) => {
          const Icon = reason.icon;
          return (
            <div
              key={idx}
              className="w3d-card text-center w3d-animate-on-scroll"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-[#7C3AED]" />
              </div>
              <p className="font-semibold text-lg">{t(reason.key)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
