"use client";
import { PhoneCall, Megaphone, Database, Handshake, FlaskConical } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GoToMarketTimeline() {
  const { t } = useLanguage();

  const timelineData = [
    {
      id: 1,
      title: t('timeline.step1.title'),
      date: "Jetzt",
      content: t('timeline.step1.description'),
      category: "Lead Generation",
      icon: PhoneCall,
      relatedIds: [2, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: t('timeline.step2.title'),
      date: "Diesen Monat",
      content: t('timeline.step2.description'),
      category: "Marketing",
      icon: Megaphone,
      relatedIds: [1, 3],
      status: "in-progress" as const,
      energy: 80,
    },
    {
      id: 3,
      title: t('timeline.step3.title'),
      date: "Dieses Quartal",
      content: t('timeline.step3.description'),
      category: "Sales & CRM",
      icon: Database,
      relatedIds: [1, 2, 4],
      status: "in-progress" as const,
      energy: 72,
    },
    {
      id: 4,
      title: t('timeline.step4.title'),
      date: "Kontinuierlich",
      content: t('timeline.step4.description'),
      category: "Customer Success",
      icon: Handshake,
      relatedIds: [3, 5],
      status: "pending" as const,
      energy: 58,
    },
    {
      id: 5,
      title: t('timeline.step5.title'),
      date: "Immer",
      content: t('timeline.step5.description'),
      category: "CRO",
      icon: FlaskConical,
      relatedIds: [1, 3, 4],
      status: "pending" as const,
      energy: 64,
    }
  ];

  return (
    <section 
      aria-labelledby="gtm-title" 
      className="relative py-8 md:py-12 bg-bg-1"
      style={{ 
        minHeight: window.innerWidth <= 480 ? '130vh' : 'auto',
        paddingBottom: window.innerWidth <= 480 ? 'max(8rem, env(safe-area-inset-bottom, 2rem))' : undefined
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="gtm-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-text-hi mb-6">
            {t('timeline.title')}
          </h2>
        </div>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}
