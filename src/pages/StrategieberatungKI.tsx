import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useModal } from "@/contexts/ModalContext";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const StrategieberatungKI = () => {
  const { openQuickAnalysis } = useModal();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <SEO 
        title="Strategieberatung KI im Marketing & Vertrieb"
        description="Nicht alles im Marketing und Vertrieb gehört mit KI automatisiert. Aber das Richtige schon. Strategieberatung für Geschäftsführer, Sales Leader und Marketing-Leiter."
        routeKey="strategieberatung"
      />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 py-24">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-10"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
            variants={fadeInUp}
          >
            Nicht alles im Marketing und Vertrieb<br />
            gehört mit KI automatisiert.<br />
            <span className="text-primary">Aber das Richtige schon.</span>
          </motion.h1>
          
          <motion.div 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto space-y-4"
            variants={fadeInUp}
          >
            <p>8 Jahre B2B-Vertrieb in kleinen und großen Organisationen.</p>
            <p>Seit über zwei Jahren setze ich KI selbst und in Kundenprojekten ein.</p>
            <p className="text-foreground/90">
              Deshalb weiß ich,<br />
              was Teams selbst machen sollten –<br />
              und was KI übernehmen muss.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Warum KI im Marketing und Vertrieb oft nicht wirkt
          </h2>
          
          <ul className="space-y-6">
            {[
              "Zu viele Tools, keine klare Priorisierung",
              "KI wird eingesetzt, ohne den Vertriebsalltag zu verstehen",
              "Automatisierung ersetzt Prozesse, die nie sauber definiert waren",
              "Sales-Teams verlieren Zeit statt sie zu gewinnen"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-4 text-lg text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 px-6 bg-muted/30">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Warum diese Beratung anders ist
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Erfahrung aus echtem B2B-Vertrieb.</p>
            <p>Arbeit in kleinen wie großen Organisationen.</p>
            <p>KI nicht theoretisch, sondern im eigenen Verkauf eingesetzt.</p>
            <p>Transfer dieser Erfahrung in Kundenprojekte.</p>
            <p className="text-foreground font-medium pt-4">
              Ich verkaufe keine Tools.<br />
              Ich verkaufe Orientierung, Priorisierung und Klarheit.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What We Clarify Section */}
      <section className="py-24 px-6">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Was wir gemeinsam klären
          </h2>
          
          <ul className="space-y-6">
            {[
              "Wo KI im Marketing & Vertrieb echten Hebel hat",
              "Welche Aufgaben beim Menschen bleiben müssen",
              "Welche Prozesse automatisiert werden sollten",
              "Welche Initiativen gestoppt werden sollten",
              "Wie KI realistisch in bestehende Teams integriert wird"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-4 text-lg text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="w-1 h-8 bg-primary/60 flex-shrink-0 rounded-full" />
                <span className="pt-1">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-muted/30">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            So läuft die Zusammenarbeit ab
          </h2>
          
          <div className="space-y-8">
            {[
              "Gemeinsame Analyse von Marketing- & Sales-Prozessen",
              "Identifikation konkreter KI-Hebel",
              "Klare Priorisierung statt Feature-Sammlung",
              "Strategische Empfehlung mit Entscheidungsgrundlage"
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-3xl font-bold text-primary flex-shrink-0 w-10">
                  {index + 1}
                </span>
                <p className="text-lg text-muted-foreground pt-1">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Praxis statt Theorie
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Arbeit mit realen Kundenprojekten.</p>
            <p>Erfahrung aus verschiedenen Branchen.</p>
            <p>Fokus auf Umsetzbarkeit, nicht Visionen.</p>
          </div>
          
          {/* Placeholder for future logos/quotes */}
          <div className="mt-12 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground/60 italic">
              Referenzen und Kundenstimmen auf Anfrage.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Klarheit statt Aktionismus
          </h2>
          
          <Button 
            size="lg"
            onClick={openQuickAnalysis}
            className="text-lg px-8 py-6 h-auto font-semibold lime-glow hover:scale-105 transition-transform"
          >
            Strategie-Sparring anfragen
          </Button>
          
          <p className="mt-6 text-muted-foreground">
            Unverbindliches Erstgespräch.<br />
            Kein Pitch. Keine Tool-Demo.
          </p>
        </motion.div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Strategieberatung KI im Marketing & Vertrieb",
          "description": "Strategische Beratung für den gezielten Einsatz von KI in Marketing und Vertrieb. Für Geschäftsführer, Sales Leader und Marketing-Leiter.",
          "provider": {
            "@type": "Organization",
            "name": "KI Automatisieren",
            "url": "https://ki-automatisieren.de"
          },
          "areaServed": "DE",
          "serviceType": "Strategieberatung"
        })}
      </script>
    </>
  );
};

export default StrategieberatungKI;
