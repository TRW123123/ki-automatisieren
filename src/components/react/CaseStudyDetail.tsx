import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CaseStudy } from "@/data/caseStudiesData";
import { getLocalizedRoute } from "@/lib/routeMappings";

interface CaseStudyDetailProps {
    caseStudy: CaseStudy;
    prev: CaseStudy | null;
    next: CaseStudy | null;
    t?: (key: string) => string; // Optional/Ignored to prevent breaking Astro parent usage
    currentLanguage: string;
}

const translations: Record<string, string> = {
    'cases.back.link': 'Zurück zur Übersicht',
    'cases.nav.all': 'Alle Fallstudien',
    'cases.breadcrumb.home': 'Startseite',
    'cases.breadcrumb.cases': 'Fallstudien',
    'cases.tabs.problem': 'Problem',
    'cases.tabs.solution': 'Lösung',
    'cases.tabs.implementation': 'Implementierung',
    'cases.tabs.implementation.short': 'Impl.',
    'cases.tabs.results': 'Ergebnisse',
    'cases.cta.title': 'Interessiert an ähnlichen Ergebnissen?',
    'cases.cta.subtitle': 'Lassen Sie uns besprechen, wie wir diese Strategien für Ihr Unternehmen anwenden können.',
    'cases.cta.button': 'Kostenlose Analyse anfordern',
};

export default function CaseStudyDetail({
    caseStudy,
    prev,
    next,
    currentLanguage
}: CaseStudyDetailProps) {

    // Helper to replace prop 't' which cannot be passed to client islands
    const t = (key: string) => translations[key] || key;

    // Use global openQuickAnalysis from QuickAnalysisModal
    const openQuickAnalysis = () => {
        // @ts-ignore - Global function from QuickAnalysisModal
        window.openQuickAnalysis?.();
    };

    return (
        <div className="min-h-screen bg-background text-slate-200">

            {/* Search Engines are handled in Astro page head */}

            {/* Hero Section */}
            <section className="relative overflow-hidden" style={{
                minHeight: '40vh',
                backgroundColor: '#0B0F14',
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(163, 230, 53, 0.05) 0%, transparent 70%), url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23A3E635\' fill-opacity=\'0.02\'%3E%3Cpath d=\'m0 40l40-40h-40v40zm40 0v-40h-40l40 40z\'/%3E%3C/g%3E%3C/svg%3E")'
            }}>
                <div className="container mx-auto px-4 relative py-12 lg:py-16">
                    <div className="max-w-4xl mx-auto">
                        <a href={getLocalizedRoute(currentLanguage, 'cases')} className="inline-flex items-center text-lime-400 hover:text-lime-300 mb-6 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t('cases.back.link') || 'Zurück zur Übersicht'}
                        </a>

                        <div className="mb-6">
                            <Badge
                                variant="outline"
                                className="border border-[#A3E635] text-[#A3E635] bg-transparent hover:bg-[#A3E635]/5"
                            >
                                {caseStudy.category}
                            </Badge>
                        </div>

                        {/* Logo + Überschrift */}
                        <div className="flex items-start gap-4 lg:gap-6 mb-6">
                            {/* Überschrift */}
                            <h1 className="text-3xl lg:text-5xl font-bold leading-tight flex-1" style={{ color: '#E5E7EB' }}>
                                {caseStudy.title}
                            </h1>

                            {/* Logo */}
                            {caseStudy.logo && (
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-transparent rounded-xl border border-slate-700/30 flex items-center justify-center p-3 flex-shrink-0">
                                    <img
                                        src={caseStudy.logo}
                                        alt={`${caseStudy.title} Logo`}
                                        loading="lazy"
                                        decoding="async"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            )}
                        </div>

                        <p className="text-lg lg:text-xl" style={{ color: '#94A3B8' }}>
                            {caseStudy.summary}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 lg:py-16" style={{ backgroundColor: '#0B0F14' }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* KPIs */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            {caseStudy.kpis.map((kpi, index) => (
                                <Card
                                    key={index}
                                    className="border border-slate-700 bg-slate-900/90 backdrop-blur-sm"
                                >
                                    <CardContent className="p-6">
                                        <p className="text-slate-400 text-sm mb-2">{kpi.label}</p>
                                        <p className="text-lime-400 text-3xl font-bold">{kpi.value}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Tabs */}
                        <Card
                            className="border border-slate-700 bg-slate-900/90 backdrop-blur-sm mb-12"
                            style={{
                                borderRadius: '14px',
                                boxShadow: '0 0 20px rgba(163, 230, 53, 0.1)'
                            }}
                        >
                            <CardContent className="p-8">
                                <Tabs defaultValue="problem" className="w-full">
                                    <TabsList
                                        className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/30 border border-slate-700 h-auto p-1 gap-1 mb-8"
                                    >
                                        <TabsTrigger
                                            value="problem"
                                            className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-3"
                                        >
                                            {t('cases.tabs.problem') || 'Problem'}
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="solution"
                                            className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-3"
                                        >
                                            {t('cases.tabs.solution') || 'Lösung'}
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="implementation"
                                            className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-3"
                                        >
                                            <span className="md:hidden">{t('cases.tabs.implementation.short') || 'Impl.'}</span>
                                            <span className="hidden md:inline">{t('cases.tabs.implementation') || 'Implementierung'}</span>
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="results"
                                            className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-3"
                                        >
                                            {t('cases.tabs.results') || 'Ergebnisse'}
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="problem" className="mt-6 data-[state=inactive]:hidden" forceMount={true}>
                                        <h2 className="text-xl font-semibold text-slate-200 mb-4">Herausforderungen</h2>
                                        <ul className="space-y-4">
                                            {caseStudy.problem.map((item, index) => (
                                                <li key={index} className="flex items-start gap-3 text-slate-400 text-lg">
                                                    <div
                                                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                        style={{ backgroundColor: '#A3E635' }}
                                                    />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </TabsContent>

                                    <TabsContent value="solution" className="mt-6 data-[state=inactive]:hidden" forceMount={true}>
                                        <h2 className="text-xl font-semibold text-slate-200 mb-4">Umgesetzte Lösung</h2>
                                        <p className="text-slate-400 leading-relaxed text-lg">{caseStudy.solution}</p>
                                    </TabsContent>

                                    <TabsContent value="implementation" className="mt-6 data-[state=inactive]:hidden" forceMount={true}>
                                        <h2 className="text-xl font-semibold text-slate-200 mb-4">Implementierungsschritte</h2>
                                        <div className="flex flex-wrap gap-3">
                                            {caseStudy.implementationSteps.map((step, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="outline"
                                                    className="bg-transparent border-lime-400 text-lime-400 px-4 py-2 text-sm"
                                                >
                                                    {index + 1}. {step}
                                                </Badge>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="results" className="mt-6 data-[state=inactive]:hidden" forceMount={true}>
                                        <h2 className="text-xl font-semibold text-slate-200 mb-4">Erzielte Ergebnisse</h2>
                                        <ul className="space-y-4">
                                            {caseStudy.results.map((result, index) => (
                                                <li key={index} className="flex items-start gap-3 text-slate-400 text-lg">
                                                    <div
                                                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                        style={{ backgroundColor: '#A3E635' }}
                                                    />
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </TabsContent>
                                </Tabs>

                                {/* Quote */}
                                {caseStudy.quote && (
                                    <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
                                        <blockquote className="text-slate-300 italic leading-relaxed text-lg">
                                            "{caseStudy.quote}"
                                        </blockquote>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
                            {prev ? (
                                <Button asChild variant="outline" className="w-full sm:w-auto border-lime-400 text-lime-400 hover:bg-lime-400/10">
                                    <a href={getLocalizedRoute(currentLanguage, 'case-detail', { slug: prev.slug })}>
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        {prev.title}
                                    </a>
                                </Button>
                            ) : <div className="w-full sm:w-auto" />}

                            <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                                <a href={getLocalizedRoute(currentLanguage, 'cases')}>
                                    {t('cases.nav.all') || 'Alle Fallstudien'}
                                </a>
                            </Button>

                            {next ? (
                                <Button asChild variant="outline" className="w-full sm:w-auto border-lime-400 text-lime-400 hover:bg-lime-400/10">
                                    <a href={getLocalizedRoute(currentLanguage, 'case-detail', { slug: next.slug })}>
                                        {next.title}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            ) : <div className="w-full sm:w-auto" />}
                        </div>

                        {/* CTA */}
                        <Card
                            className="border border-lime-400/30 bg-gradient-to-br from-lime-400/5 to-transparent"
                        >
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-slate-200 mb-4">
                                    {t('cases.cta.title') || 'Interessiert an ähnlichen Ergebnissen?'}
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {t('cases.cta.subtitle') || 'Lassen Sie uns besprechen, wie wir diese Strategien für Ihr Unternehmen anwenden können.'}
                                </p>
                                <Button
                                    size="lg"
                                    className="bg-lime-400 text-slate-900 hover:bg-lime-500"
                                    onClick={openQuickAnalysis}
                                >
                                    {t('cases.cta.button') || 'Kostenlose Analyse anfordern'}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
