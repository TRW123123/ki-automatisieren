import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Replaced with anchor tags for Astro
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "@/hooks/useReducedMotion";
// import { CaseStudy } from "@/data/caseStudiesData"; // Ensure this path is correct in Astro
import type { CaseStudy } from "@/data/caseStudiesData"; // Import type only
import { getLocalizedRoute } from "@/lib/routeMappings";

// Modified Props to accept language and translation from parent
interface ConnectedTimelineProps {
    caseStudies: CaseStudy[];
    selectedFilter?: string;
    currentLanguage: string;
    t: (key: string) => string;
}

export default function ConnectedTimeline({
    caseStudies,
    selectedFilter = "Alle",
    currentLanguage,
    t
}: ConnectedTimelineProps) {
    const [activeCase, setActiveCase] = useState<number | null>(null);
    const prefersReducedMotion = useReducedMotion();

    // Filter case studies based on selected filter
    const filteredCaseStudies = selectedFilter === "Alle"
        ? caseStudies
        : caseStudies.filter(caseStudy => caseStudy.category === selectedFilter);

    const handleNodeClick = (caseId: number) => {
        setActiveCase(activeCase === caseId ? null : caseId);
    };

    const handleKeyDown = (event: React.KeyboardEvent, caseId: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleNodeClick(caseId);
        }
    };

    return (
        <div className="relative py-16" style={{ backgroundColor: '#0B0F14' }}>
            <div className="container mx-auto px-4">
                {/* Desktop: Horizontal Timeline */}
                <div className="hidden lg:block">
                    <div className="relative flex justify-between items-center mb-16">
                        {/* Timeline Line */}
                        <div
                            className="absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2"
                            style={{
                                background: '#A3E635',
                                boxShadow: '0 0 8px rgba(163, 230, 53, 0.18)',
                            }}
                        />

                        {/* Timeline Nodes */}
                        {filteredCaseStudies.map((caseStudy, index) => (
                            <div key={caseStudy.id} className="relative z-10">
                                <a
                                    href={getLocalizedRoute(currentLanguage, 'case-detail', { slug: caseStudy.slug })}
                                    onClick={(e) => {
                                        // Start logic: If user wants to just see details in panel, maybe we shouldn't navigate?
                                        // Original SSOT: Link also onClick handleNodeClick.
                                        // But Link does navigation. 
                                        // Wait, original SSOT Link navigates to 'case-detail'. 
                                        // AND it sets activeCase. 
                                        // If it navigates away, the activeCase state is lost unless it's on the same page?
                                        // In SSOT, CaseDetail is a separate page? Or same page?
                                        // Routes: 'case-detail': '/fallstudien/:slug' (SSOT routeMappings).
                                        // So clicking the node NAVIGATES to the detail page.
                                        // But `activeCase` controls the `CasePanel` showing BELOW the timeline.
                                        // This implies the user might stay on the timeline page to view the preview panel?
                                        // Ah, looking at SSOT `ConnectedTimeline.tsx`:
                                        // <Link to={...} onClick={() => handleNodeClick(caseStudy.id)} ... >
                                        // Usually Link navigates immediately. Maybe they preventDefault somewhere?
                                        // Or maybe it's for 'open in new tab'?
                                        // If I click it, I expect to go to detail page.
                                        // But if I stay, I see the panel.
                                        // Let's assume for now keeping `a href` behaves like `Link`.
                                        // But if it navigates, the panel opening is useless unless there's a delay or SPA transition.
                                        // If I want the PANEL functionality, maybe I should preventDefault if just clicking to open panel?
                                        // But the Link has a destination.
                                        // Let's stick to `a href` for now. If user clicks, they go to detail page.
                                        // Maybe the panel is for hovering or "selecting"?
                                        // The UI shows a "node".
                                        // Let's keep strict alignment: href + onClick.
                                    }}
                                    onKeyDown={(e) => handleKeyDown(e, caseStudy.id)}
                                    className={`
                    block w-16 h-16 rounded-full border-2 transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-slate-900
                    ${activeCase === caseStudy.id
                                            ? 'bg-lime-400/12 border-lime-400 shadow-lg shadow-lime-400/25'
                                            : 'bg-slate-900 border-lime-400 hover:bg-lime-400/8'
                                        }
                    ${prefersReducedMotion ? '' : 'hover:scale-105'}
                    flex items-center justify-center overflow-hidden p-2
                  `}
                                    style={{ backgroundColor: activeCase === caseStudy.id ? 'rgba(163, 230, 53, 0.12)' : '#111827' }}
                                    aria-selected={activeCase === caseStudy.id}
                                    role="tab"
                                >
                                    {caseStudy.logo ? (
                                        <img
                                            src={caseStudy.logo}
                                            alt={`${caseStudy.title} Logo`}
                                            loading="lazy"
                                            decoding="async"
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    ) : (
                                        <span className="text-lime-400 font-bold text-lg">{index + 1}</span>
                                    )}
                                </a>
                                <div className="mt-4 text-center max-w-32">
                                    <p className="text-lime-400 text-sm font-medium">{caseStudy.category}</p>
                                    <p className="text-slate-300 text-xs mt-1">{caseStudy.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Panel */}
                    {activeCase && (
                        <div
                            className={`transition-all duration-200 ${prefersReducedMotion ? '' : 'animate-fade-in'}`}
                        >
                            <CasePanel caseStudy={filteredCaseStudies.find(c => c.id === activeCase)!} t={t} />
                        </div>
                    )}
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="lg:hidden">
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div
                            className="absolute left-2 top-0 w-0.5"
                            style={{
                                background: '#A3E635',
                                boxShadow: '0 0 8px rgba(163, 230, 53, 0.18)',
                                height: `${filteredCaseStudies.length * 160}px`
                            }}
                        />

                        {/* Timeline Nodes */}
                        {filteredCaseStudies.map((caseStudy, index) => (
                            <div key={caseStudy.id} className="relative mb-8">
                                <div className="flex items-start">
                                    <a
                                        href={getLocalizedRoute(currentLanguage, 'case-detail', { slug: caseStudy.slug })}
                                        onClick={(e) => {
                                            // e.preventDefault(); // Maybe strict navigation prevention?
                                            handleNodeClick(caseStudy.id)
                                        }}
                                        onKeyDown={(e) => handleKeyDown(e, caseStudy.id)}
                                        className={`
                      relative z-10 w-16 h-16 rounded-full border-2 transition-all duration-200 flex-shrink-0 ml-4
                      focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-slate-900
                      ${activeCase === caseStudy.id
                                                ? 'bg-lime-400/12 border-lime-400 shadow-lg shadow-lime-400/25'
                                                : 'bg-slate-900 border-lime-400 hover:bg-lime-400/8'
                                            }
                      flex items-center justify-center overflow-hidden p-2
                    `}
                                        style={{ backgroundColor: activeCase === caseStudy.id ? 'rgba(163, 230, 53, 0.12)' : '#111827' }}
                                        aria-selected={activeCase === caseStudy.id}
                                        role="tab"
                                    >
                                        {caseStudy.logo ? (
                                            <img
                                                src={caseStudy.logo}
                                                alt={`${caseStudy.title} Logo`}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        ) : (
                                            <span className="text-lime-400 font-bold text-lg">{index + 1}</span>
                                        )}
                                    </a>

                                    <div className="ml-6 flex-1">
                                        <Badge
                                            variant="outline"
                                            className="bg-transparent border-lime-400 text-lime-400 mb-2"
                                        >
                                            {caseStudy.category}
                                        </Badge>
                                        <h3 className="text-slate-300 font-semibold text-lg">{caseStudy.title}</h3>
                                    </div>
                                </div>

                                {/* Mobile Panel - Below each node */}
                                {activeCase === caseStudy.id && (
                                    <div
                                        className={`mt-4 ml-20 transition-all duration-200 ${prefersReducedMotion ? '' : 'animate-fade-in'}`}
                                    >
                                        <CasePanel caseStudy={caseStudy} t={t} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CasePanel({ caseStudy, t }: { caseStudy: CaseStudy, t: (key: string) => string }) {
    // const { t } = useLanguage(); // Removed

    return (
        <Card
            className="border border-slate-700 bg-slate-900/90 backdrop-blur-sm"
            style={{
                borderRadius: '14px',
                borderColor: '#1F2937',
                boxShadow: '0 0 20px rgba(163, 230, 53, 0.1)'
            }}
        >
            <CardContent className="p-8">
                {/* Logo Header */}
                {caseStudy.logo && (
                    <div className="mb-6 flex justify-center">
                        <div className="w-24 h-24 bg-transparent rounded-xl border border-slate-700/30 flex items-center justify-center p-4">
                            <img
                                src={caseStudy.logo}
                                alt={`${caseStudy.title} Logo`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </div>
                )}

                {/* Brief Summary */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-200 mb-4">{t('cases.summary.title') || 'Zusammenfassung'}</h3>
                    <p className="text-slate-400 leading-relaxed">{caseStudy.summary}</p>
                </div>

                {/* KPI Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {caseStudy.kpis.map((kpi, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 p-4 rounded-lg border border-slate-700"
                        >
                            <p className="text-slate-400 text-sm mb-1">{kpi.label}</p>
                            <p className="text-lime-400 text-2xl font-bold">{kpi.value}</p>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <Tabs defaultValue="problem" className="w-full" role="tablist">
                    <TabsList
                        className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/30 border border-slate-700 h-auto p-1 gap-1"
                    >
                        <TabsTrigger
                            value="problem"
                            className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-2 text-xs md:text-sm"
                            role="tab"
                        >
                            {t('cases.tabs.problem') || 'Problem'}
                        </TabsTrigger>
                        <TabsTrigger
                            value="solution"
                            className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-2 text-xs md:text-sm"
                            role="tab"
                        >
                            {t('cases.tabs.solution') || 'Lösung'}
                        </TabsTrigger>
                        <TabsTrigger
                            value="implementation"
                            className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-2 text-xs md:text-sm"
                            role="tab"
                        >
                            <span className="md:hidden">{t('cases.tabs.implementation.short') || 'Impl.'}</span>
                            <span className="hidden md:inline">{t('cases.tabs.implementation') || 'Implementierung'}</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="results"
                            className="data-[state=active]:bg-transparent data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:rounded-none text-slate-400 hover:text-slate-300 px-2 py-2 text-xs md:text-sm"
                            role="tab"
                        >
                            {t('cases.tabs.results') || 'Ergebnisse'}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="problem" className="mt-6" role="tabpanel">
                        <ul className="space-y-3">
                            {caseStudy.problem.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-400">
                                    <div
                                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                        style={{ backgroundColor: '#A3E635' }}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </TabsContent>

                    <TabsContent value="solution" className="mt-6" role="tabpanel">
                        <p className="text-slate-400 leading-relaxed">{caseStudy.solution}</p>
                    </TabsContent>

                    <TabsContent value="implementation" className="mt-6" role="tabpanel">
                        <div className="flex flex-wrap gap-2">
                            {caseStudy.implementationSteps.map((step, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-transparent border-lime-400 text-lime-400 px-3 py-1"
                                >
                                    {step}
                                </Badge>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="results" className="mt-6" role="tabpanel">
                        <ul className="space-y-3">
                            {caseStudy.results.map((result, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-400">
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
                        <blockquote className="text-slate-300 italic leading-relaxed">
                            "{caseStudy.quote}"
                        </blockquote>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
