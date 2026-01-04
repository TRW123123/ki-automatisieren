"use client";

import { GlowCard } from "./ui/spotlight-card";
import { Award, Cpu, Shield } from "lucide-react";

export default function SolutionSection() {
    return (
        <section className="relative py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <h2 className="headline text-3xl md:text-4xl tracking-tight text-white mb-6">
                        Warum wir? Praxis-Erfahrung statt KI-Theorie.
                    </h2>
                    <p className="body-text text-muted-foreground max-w-3xl mx-auto">

                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <GlowCard glowColor="lime" size="lg" className="carbon-card">
                        <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
                            <Award
                                className="w-12 h-12"
                                style={{ color: '#A3E635', strokeWidth: 2 }}
                            />
                            <h3 className="text-xl font-bold text-white">
                                8 Jahre Vertriebs-Expertise
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Wir wissen, wie Verkauf funktioniert. KI ist für uns kein Spielzeug, sondern der Turbo für Ihren Umsatz.
                            </p>
                        </div>
                    </GlowCard>

                    <GlowCard glowColor="lime" size="lg" className="carbon-card">
                        <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
                            <Cpu
                                className="w-12 h-12"
                                style={{ color: '#A3E635', strokeWidth: 2 }}
                            />
                            <h3 className="text-xl font-bold text-white">
                                Erprobte Systeme
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Seit 2 Jahren realisieren wir KI-Projekte für diverse Kunden. Wir implementieren nur, was stabil läuft und messbar Zeit spart.
                            </p>
                        </div>
                    </GlowCard>

                    <GlowCard glowColor="lime" size="lg" className="carbon-card">
                        <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
                            <Shield
                                className="w-12 h-12"
                                style={{ color: '#A3E635', strokeWidth: 2 }}
                            />
                            <h3 className="text-xl font-bold text-white">
                                Unser Risiko
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Kommt kein Ergebnis zustande, erhalten Sie 50% des Honorars zurück. Punkt.
                            </p>
                        </div>
                    </GlowCard>
                </div>
            </div>
        </section>
    );
}
