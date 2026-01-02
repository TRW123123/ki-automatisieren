import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getLocalizedRoute } from "@/lib/routeMappings";
import { TrendingUp, Bot, MessageCircle, BarChart3, Youtube, Instagram, Linkedin } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";

const UeberUns = () => {
  const { t, currentLanguage } = useLanguage();
  const { openQuickAnalysis } = useModal();

  const coreServices = [
    {
      icon: TrendingUp,
      title: "Outbound Sales Automation",
      description: "Lead-Generierung, Cold-E-Mail-Kampagnen und automatische Follow-up-Systeme"
    },
    {
      icon: Bot,
      title: "Marketing Automation",
      description: "Content-Erstellung, Social-Media-Management und Kampagnen-Automation"
    },
    {
      icon: MessageCircle,
      title: "KI Chatbots & Assistenten",
      description: "Kunden-Support-Bots, Vertriebs-Assistenten und intelligente Antwortsysteme"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Reporting",
      description: "Performance-Tracking, Datenanalyse und Entscheidungsunterstützungssysteme"
    }
  ];

  const values = [
    {
      emoji: "🎯",
      title: "Ergebnisorientiert",
      description: "Messbarer ROI und konkrete Ergebnisse"
    },
    {
      emoji: "🚀",
      title: "Geschwindigkeit & Effizienz",
      description: "Setup in Wochen, Ergebnisse in Tagen"
    },
    {
      emoji: "🤝",
      title: "Transparenz",
      description: "Volle Sichtbarkeit in jedem Schritt"
    },
    {
      emoji: "🔒",
      title: "Zuverlässigkeit",
      description: "Datensicherheit ist unsere Priorität"
    }
  ];

  return (
    <>
      <SEO
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        routeKey="about"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Mit KI{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Ihr Business skalieren
              </span>
            </h1>
            <p className="text-xl text-text-muted">
              Seit 2024 transformieren wir Vertriebs- und Marketingprozesse von Unternehmen mit Automatisierung
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-center">Unsere Mission</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Wir ermöglichen KMUs, KI- und Automatisierungstechnologien ohne komplexe IT-Infrastruktur zu nutzen. 
                Unser Ziel ist es, jedem Unternehmen zu ermöglichen, so effizient, schnell und skalierbar wie große Konzerne zu sein.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-center">Unsere Vision</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Wir schaffen eine Zukunft, in der jedes KMU in Europa durch KI-gestützte Prozesse Wettbewerbsvorteile erzielt.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-card hover-glow-subtle transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="text-4xl">{value.emoji}</div>
                    <h3 className="font-semibold text-text-hi">{value.title}</h3>
                    <p className="text-sm text-text-muted">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent">
                <div className="w-12 h-12 bg-lime-400 rounded-lg"></div>
              </div>
              <h2 className="text-3xl font-bold">Unsere Geschichte</h2>
            </div>
            
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                <strong className="text-text-hi">KI Automatisieren</strong> wurde 2024 in der Region Dortmund, Deutschland, gegründet.
              </p>
              <p>
                Unser Gründer arbeitete jahrelang im B2B-Vertriebs- und Marketingbereich und erkannte, dass das größte Problem von Unternehmen darin besteht, 
                <span className="text-primary font-semibold"> "die richtigen Kunden zu erreichen und Prozesse zu skalieren"</span>.
              </p>
              <p>
                Um dieses Problem zu lösen, begann er, KI- und Automatisierungstechnologien zu kombinieren und 
                <span className="text-accent font-semibold"> praktische, umsetzbare Lösungen</span> zu entwickeln.
              </p>
              <p className="text-text-hi font-medium">
                Heute wachsen wir mit über 6 erfolgreichen Projekten und dutzenden zufriedenen Kunden weiter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Unsere Kernleistungen</h2>
              <p className="text-lg text-text-muted">
                Umfassende KI-Lösungen für das Wachstum Ihres Unternehmens
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-border bg-card hover-glow transition-all">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <h3 className="text-xl font-semibold text-text-hi">{service.title}</h3>
                      <p className="text-text-muted">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* References with Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Unsere Referenzen</h2>
              <p className="text-lg text-text-muted">
                Unsere Erfolgsgeschichten und zufriedene Kunden
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudiesData.slice(0, 6).map((caseStudy) => (
                <Card key={caseStudy.id} className="border-border bg-card hover-glow transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-16 w-full bg-transparent rounded-lg flex items-center justify-center p-4">
                      {caseStudy.logo ? (
                        <img 
                          src={caseStudy.logo} 
                          alt={`${caseStudy.title} Logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="text-muted-foreground text-sm font-medium">
                          {caseStudy.title}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-text-hi text-lg">{caseStudy.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.kpis.map((kpi, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {kpi.value}
                        </Badge>
                      ))}
                    </div>
                    <Link 
                      to={getLocalizedRoute(currentLanguage, 'case-detail', { slug: caseStudy.slug })}
                      className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm font-medium"
                    >
                      Details ansehen →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Folgen Sie uns</h2>
              <p className="text-lg text-text-muted">
                Praktische Tipps zu KI und Automatisierung in den sozialen Medien
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-glow"
                asChild
              >
                <a href="https://www.linkedin.com/company/ki-automatisieren" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-glow"
                asChild
              >
                <a href="https://www.youtube.com/@ki-automatisieren" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-glow"
                asChild
              >
                <a href="https://www.instagram.com/ki_automatisieren" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Jetzt starten</h2>
                <p className="text-lg text-text-muted max-w-2xl mx-auto">
                  Entdecken Sie maßgeschneiderte KI-Lösungen für Ihr Unternehmen. Beginnen Sie mit einer kostenlosen Analyse.
                </p>
                <Button 
                  variant="lime" 
                  size="lg"
                  className="hover-glow"
                  onClick={openQuickAnalysis}
                >
                  Kostenlose Analyse anfordern
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default UeberUns;
