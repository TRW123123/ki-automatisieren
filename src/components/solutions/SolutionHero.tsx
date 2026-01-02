import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  icon?: LucideIcon;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export const SolutionHero = ({ 
  title, 
  subtitle, 
  ctaPrimary, 
  ctaSecondary, 
  icon: Icon,
  onPrimaryCTA,
  onSecondaryCTA 
}: SolutionHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8" data-animate>
          {Icon && <Icon className="w-16 h-16 mx-auto mb-6 text-primary" />}
          
          <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="text-primary">{title}</span>
          </h1>
          
          <p className="body-text text-muted-foreground max-w-3xl mx-auto text-xl">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              onClick={onPrimaryCTA} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg"
            >
              {ctaPrimary}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={onSecondaryCTA}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-12 py-6 text-lg"
            >
              {ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
