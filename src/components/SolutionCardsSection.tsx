"use client";

import { GlowCard } from "./ui/spotlight-card";
import { PhoneCall, Megaphone, Database, Handshake, FlaskConical, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function SolutionCardsSection() {
  const { t } = useLanguage();

  const solutionLinks: Record<number, string> = {
    1: '/losungen/leadgenerierung-ki',
    2: '/losungen/marketing-automatisierung',
    3: '/losungen/vertriebsautomatisierung',
    4: '/losungen/kundenservice-automatisierung',
    5: '/losungen/crm-prozessautomatisierung',
  };

  const solutionCards = [
    {
      id: 1,
      title: t('timeline.step1.title'),
      content: t('timeline.step1.description'),
      category: "Lead Generation",
      icon: PhoneCall,
      glowColor: "lime" as const,
    },
    {
      id: 2,
      title: t('timeline.step2.title'),
      content: t('timeline.step2.description'),
      category: "Marketing",
      icon: Megaphone,
      glowColor: "lime" as const,
    },
    {
      id: 3,
      title: t('timeline.step3.title'),
      content: t('timeline.step3.description'),
      category: "Sales & CRM",
      icon: Database,
      glowColor: "lime" as const,
    },
    {
      id: 4,
      title: t('timeline.step4.title'),
      content: t('timeline.step4.description'),
      category: "Customer Success",
      icon: Handshake,
      glowColor: "lime" as const,
    },
    {
      id: 5,
      title: t('timeline.step5.title'),
      content: t('timeline.step5.description'),
      category: "Conversion Optimization",
      icon: FlaskConical,
      glowColor: "lime" as const,
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="headline text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            {t('timeline.title')}
          </h2>
        </div>

        {/* Cards Grid - 3 on top, 2 on bottom for desktop */}
        <div className="max-w-6xl mx-auto">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {solutionCards.slice(0, 3).map((card) => {
              const IconComponent = card.icon;
              return (
                <GlowCard key={card.id} glowColor={card.glowColor} size="lg" className="h-full">
                  <div className="flex flex-col h-full text-center gap-4 p-6">
                    <div className="flex flex-col items-center gap-3">
                      <IconComponent 
                        className="w-10 h-10" 
                        style={{ color: '#A3E635', strokeWidth: 2 }}
                      />
                      <h3 className="text-lg font-bold text-foreground">
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                        {card.content}
                      </p>
                      <Link 
                        to={solutionLinks[card.id]} 
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium hover:underline"
                        style={{ color: '#A3E635' }}
                      >
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solutionCards.slice(3, 5).map((card) => {
              const IconComponent = card.icon;
              return (
                <GlowCard key={card.id} glowColor={card.glowColor} size="lg" className="h-full">
                  <div className="flex flex-col h-full text-center gap-4 p-6">
                    <div className="flex flex-col items-center gap-3">
                      <IconComponent 
                        className="w-10 h-10" 
                        style={{ color: '#A3E635', strokeWidth: 2 }}
                      />
                      <h3 className="text-lg font-bold text-foreground">
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                        {card.content}
                      </p>
                      <Link 
                        to={solutionLinks[card.id]} 
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium hover:underline"
                        style={{ color: '#A3E635' }}
                      >
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
