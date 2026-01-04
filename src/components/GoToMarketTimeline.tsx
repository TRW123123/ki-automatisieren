import { PhoneCall, Megaphone, Database, Handshake, FlaskConical } from "lucide-react";
import RadialOrbitalTimeline from "./ui/radial-orbital-timeline";

export default function GoToMarketTimeline() {
    const timelineData = [
        {
            id: 1,
            title: "Neukundengewinnung",
            date: "Schritt 1",
            content: "Systeme, die Ihren Kalender automatisch füllen.\n\n• Kaltakquise per Telefon: Ziellisten mit KI\n• Personalisierte E-Mail-Kampagnen an Entscheider\n• Social-DM-Kampagnen (LinkedIn, Instagram, X)\n• Mehrsprachige Ansprache für internationale Märkte",
            category: "Lead Generation",
            icon: PhoneCall,
            relatedIds: [2],
            status: "completed" as const,
            energy: 100
        },
        {
            id: 2,
            title: "Marketing",
            date: "Schritt 2",
            content: "Inhalte und Werbung basieren nicht auf Zufall, sondern auf Systemen.\n\n• Schnelle, mühelose Content-Produktion (KI-gestützt)\n• Website-Design & -Optimierung\n• Werbe- und Promo-Videos",
            category: "Marketing",
            icon: Megaphone,
            relatedIds: [3],
            status: "completed" as const,
            energy: 80
        },
        {
            id: 3,
            title: "Vertrieb & CRM",
            date: "Schritt 3",
            content: "Ihre Verkäufer verkaufen – statt zu dokumentieren.\n\n• Automatische CRM-Dokumentation\n• Schnelle, einfache Angebotserstellung (individuell)\n• Conversion-Rate Ihrer Verkäufer steigern",
            category: "Sales & CRM",
            icon: Database,
            relatedIds: [4],
            status: "completed" as const,
            energy: 60
        },
        {
            id: 4,
            title: "Customer Success",
            date: "Schritt 4",
            content: "Stärken Sie die Bindung und erhöhen Sie den Umsatz mit Bestandskunden.\n\n• KI-Support-Agent: beantwortet Anfragen per Telefon und E-Mail sofort\n• Upsell- und Cross-Sell-Systeme für mehr Wert pro Kunde",
            category: "Customer Success",
            icon: Handshake,
            relatedIds: [5],
            status: "completed" as const,
            energy: 40
        },
        {
            id: 5,
            title: "Conversion-Optimierung",
            date: "Schritt 5",
            content: "Mehr qualifizierte Anfragen über Ihre Website.\n\n• Website mit KI optimieren, Abschlussquote erhöhen\n• Speed-to-Lead: selbst am Wochenende Antwort in 2 Minuten\n• Instagram-Chatbot: wie ein Verkäufer im Schaufenster",
            category: "Conversion Optimization",
            icon: FlaskConical,
            relatedIds: [],
            status: "completed" as const,
            energy: 20
        }
    ];

    return (
        <section className="relative py-20 bg-background overflow-hidden" aria-label="Timeline section">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                        Von Null bis Stammkunde: End-to-End-Automation
                    </h2>
                </div>
                <RadialOrbitalTimeline timelineData={timelineData} />
            </div>
        </section>
    );
}
