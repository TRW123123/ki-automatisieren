import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface SolutionProcessProps {
  title: string;
  steps: ProcessStep[];
}

export const SolutionProcess = ({ title, steps }: SolutionProcessProps) => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-animate>
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card 
              key={step.number} 
              className="bg-card border-border hover:border-primary/50 transition-all text-center group"
              data-animate
            >
              <CardContent className="p-6">
                <step.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
