import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQ3DaysProps {
  faqData: FAQItem[];
}

export const FAQ3Days = ({ faqData }: FAQ3DaysProps) => {
  const { t } = useLanguage();

  return (
    <section className="w3d-section bg-[#F8F9FA]">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.faq.title')}
      </h2>
      
      <div className="max-w-3xl mx-auto w3d-animate-on-scroll">
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="w3d-card border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
