import { Features } from './ui/features';
import { Settings, Users, Calendar } from 'lucide-react';

export default function Agitate() {
    const features = [
        {
            id: 1,
            icon: Settings,
            title: 'Selbst machen?',
            bullets: [
                'Sie sind Geschäftsführer, kein Programmierer. Verschwenden Sie keine Zeit mit YouTube-Tutorials.'
            ]
        },
        {
            id: 2,
            icon: Users,
            title: 'Jemanden einstellen?',
            bullets: [
                'Gute KI-Experten kosten 100.000 € im Jahr. Unsere Systeme kosten einen Bruchteil.'
            ]
        },
        {
            id: 3,
            icon: Calendar,
            title: 'Später anfangen?',
            bullets: [
                'Ihre Konkurrenz automatisiert heute. Wer wartet, verliert Kunden.'
            ]
        }
    ];

    return (
        <section className="relative py-16 md:py-24 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <h2 className="headline text-3xl md:text-4xl tracking-tight text-white mb-4">
                        Ergebnisse statt KI-Hype.
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Warum die üblichen Wege nicht funktionieren:
                    </p>
                </div>

                <div className="mt-16">
                    <Features
                        primaryColor="lime-400"
                        progressGradientLight="bg-gradient-to-r from-lime-400 to-emerald-400"
                        progressGradientDark="bg-gradient-to-r from-lime-300 to-emerald-300"
                        features={features}
                    />
                </div>
            </div>
        </section>
    );
}
