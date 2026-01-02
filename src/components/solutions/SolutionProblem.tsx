import { LucideIcon } from 'lucide-react';

interface Problem {
  text: string;
  icon: LucideIcon;
}

interface SolutionProblemProps {
  title: string;
  problems: Problem[];
}

export const SolutionProblem = ({ title, problems }: SolutionProblemProps) => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-animate>
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex items-start gap-3 group" data-animate>
              <problem.icon className="w-6 h-6 text-destructive flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-muted-foreground">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
