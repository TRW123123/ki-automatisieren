import { LucideIcon } from 'lucide-react';

interface Benefit {
  text: string;
  icon: LucideIcon;
}

interface SolutionBenefitsProps {
  title: string;
  benefits: Benefit[];
}

export const SolutionBenefits = ({ title, benefits }: SolutionBenefitsProps) => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-animate>
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3 group" data-animate>
              <benefit.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-muted-foreground font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
