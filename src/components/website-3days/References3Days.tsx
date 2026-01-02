import { useLanguage } from '@/contexts/LanguageContext';

const referenceProjects = [
  {
    image: '/logos/apaydin.avif',
    result: 'Website für Gebrauchtwagenhändler in Hagen',
    company: 'Apaydin Automobile'
  },
  {
    image: '/logos/salevium.avif',
    result: 'Website für Messe: 100 zusätzliche Leads',
    company: 'Salevium'
  },
  {
    image: '/logos/erpa.avif',
    result: 'Landingpage für Europa-Sales: Interessenten gewinnen',
    company: 'ERPA Teknoloji'
  }
];

export const References3Days = () => {
  const { t } = useLanguage();

  return (
    <section className="w3d-section bg-[#F8F9FA]">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.references.title')}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {referenceProjects.map((project, idx) => (
          <div
            key={idx}
            className="w3d-card text-center w3d-animate-on-scroll"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <img
              src={project.image}
              alt={project.company}
              className="h-12 mx-auto mb-4 object-contain"
            />
            <p className="font-semibold text-lg text-[#7C3AED]">{project.result}</p>
            <p className="text-sm text-gray-600 mt-1">{project.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
