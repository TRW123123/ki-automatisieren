import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface SolutionCaseStudyProps {
  company: string;
  result: string;
  description: string;
  link: string;
  image?: string;
}

export const SolutionCaseStudy = ({ company, result, description, link, image }: SolutionCaseStudyProps) => {
  return (
    <section className="py-20 px-6 bg-muted/30 case-study-section">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground" data-animate>
          Erfolgsbeispiel
        </h2>
        <Card className="bg-card border-primary/30" data-animate>
          <CardContent className="p-8 text-center">
            {image && (
              <img 
                src={image} 
                alt={company} 
                className="w-32 h-32 object-contain mx-auto mb-6 opacity-90" 
              />
            )}
            <h3 className="text-2xl font-bold mb-4 text-foreground">{company}</h3>
            <p className="text-3xl font-bold text-primary mb-4">{result}</p>
            <p className="text-muted-foreground text-center mb-6">{description}</p>
            <Link 
              to={link} 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Zur vollständigen Fallstudie
              <ArrowRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
