"use client";

import { GlowCard } from "./ui/spotlight-card";
import { Award, Cpu, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SolutionSection() {
  const { currentLanguage, t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="headline text-3xl md:text-4xl tracking-tight text-text-hi mb-6">
            {t('solution.title')}
          </h2>
          <p className="body-text text-text-muted max-w-3xl mx-auto">
            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <GlowCard glowColor="lime" size="lg" className="carbon-card">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
              <Award 
                className="w-12 h-12" 
                style={{ color: '#A3E635', strokeWidth: 2 }}
              />
              <h3 className="text-xl font-bold text-text-hi">
                {t('solution.card1.title')}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {t('solution.card1.description')}
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="lime" size="lg" className="carbon-card">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
              <Cpu 
                className="w-12 h-12" 
                style={{ color: '#A3E635', strokeWidth: 2 }}
              />
              <h3 className="text-xl font-bold text-text-hi">
                {t('solution.card2.title')}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {t('solution.card2.description')}
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="lime" size="lg" className="carbon-card">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
              <Shield 
                className="w-12 h-12" 
                style={{ color: '#A3E635', strokeWidth: 2 }}
              />
              <h3 className="text-xl font-bold text-text-hi">
                {t('solution.card3.title')}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {t('solution.card3.description')}
              </p>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}