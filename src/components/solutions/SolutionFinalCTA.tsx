import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SolutionFinalCTAProps {
  title: string;
  subtitle?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export const SolutionFinalCTA = ({ 
  title, 
  subtitle, 
  ctaPrimary, 
  ctaSecondary, 
  onPrimaryCTA, 
  onSecondaryCTA 
}: SolutionFinalCTAProps) => {
  return (
    <section className="py-20 px-6 text-center">
      <div className="container mx-auto max-w-3xl space-y-8" data-animate>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
        
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
    </section>
  );
};
