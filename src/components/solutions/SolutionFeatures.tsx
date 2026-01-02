import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface SolutionFeaturesProps {
  title: string;
  features: Feature[];
}

export const SolutionFeatures = ({ title, features }: SolutionFeaturesProps) => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-animate>
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="bg-card border-border hover:border-primary/30 transition-all group"
              data-animate
            >
              <CardContent className="p-6">
                <feature.icon className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
