import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Cases() {
    const cases = [
        {
            company: "Car Studio AI",
            logo: "/logos/carstudio.avif",
            width: 200,
            height: 42,
            result: "Aufbau einer nachhaltigen Vertriebsinfrastruktur auf internationalen Märkten ohne Teamvergrößerung durch KI im Vertrieb.",
            metric: "20+ Std./Monat",
            slug: "car-studio-ai"
        },
        {
            company: "Acilsatis",
            logo: "/logos/acilsatis.avif",
            width: 91,
            height: 42,
            result: "Schnelles Wachstum und organische Traffic-Steigerung im Immobilien- und Automobilsektor durch KI im Marketing.",
            metric: "5000+ Plattform-Anzeigen",
            slug: "acilsatis"
        },
        {
            company: "Salevium",
            logo: "/logos/salevium.avif",
            width: 152,
            height: 42,
            result: "Vollständige Automatisierung des LinkedIn-Marketing-Prozesses eines gamifizierten Vertriebstrainings-Unternehmens.",
            metric: "0% manuell",
            slug: "salevium"
        },
        {
            company: "ERPA Teknoloji",
            logo: "/logos/erpa.avif",
            width: 42,
            height: 42,
            result: "Strategischer Eintritt in den europäischen Markt für Stadion-Digitaldisplays mit der TOCHI-Marke durch KI in der Kundengewinnung.",
            metric: "Erster Monat",
            slug: "erpa-teknoloji"
        },
        {
            company: "CemKimsan",
            logo: "/logos/cemkimsan.avif",
            width: 149,
            height: 42,
            result: "Digitale Transformation des Kundenerlebnisses und der Vertriebsprozesse im Chemiesektor durch CRM-Prozessautomatisierung.",
            metric: "+40%",
            slug: "cemkimsan"
        },
        {
            company: "Coach Bilge",
            logo: "/logos/coach-bilge.avif",
            width: 42,
            height: 42,
            result: "Automatisierte Terminbuchung und Kundenkommunikation für Business-Coaching durch KI-Kundenservice.",
            metric: "+120%",
            slug: "dkm-coach-bilge"
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl font-bold text-foreground">Erfolgsgeschichten</h2>
                    <p className="text-muted-foreground">
                        <a href="/fallstudien/" className="text-lime-400 hover:underline">Unsere detaillierten Fallstudien</a> ansehen und Erfolgsgeschichten entdecken.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {cases.map((case_item, index) => (
                        <Card key={index} className="group transition-all duration-500 hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] flex flex-col h-full bg-[#111827] border-white/5 relative overflow-hidden">
                            <CardContent className="p-6 flex flex-col h-full relative z-10">
                                <div className="h-12 w-full bg-transparent rounded-lg flex items-center justify-center p-3 mb-4">
                                    {case_item.logo ? (
                                        <img
                                            src={case_item.logo}
                                            alt={`${case_item.company} Logo`}
                                            width={case_item.width}
                                            height={case_item.height}
                                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    ) : (
                                        <span className="text-muted-foreground text-xs font-medium">
                                            {case_item.company}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground text-center mt-4">{case_item.company}</h3>
                                <p className="text-sm text-muted-foreground mt-4 flex-grow">{case_item.result}</p>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 w-full">
                                    <Badge className="bg-primary/10 text-primary pointer-events-none hover:bg-primary/10 border-lime-500/10 whitespace-nowrap">{case_item.metric}</Badge>
                                    <a
                                        href={`/fallstudien/${case_item.slug}/`}
                                        className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary whitespace-nowrap ml-2"
                                    >
                                        Details
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
