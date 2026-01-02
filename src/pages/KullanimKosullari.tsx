import { SEO } from "@/components/SEO";

const KullanimKosullari = () => {
  return (
    <>
      <SEO 
        title="Nutzungsbedingungen | KI-Automatisieren.de"
        description="Nutzungsbedingungen und rechtliche Hinweise für die Website KI-Automatisieren.de."
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Nutzungsbedingungen</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Stand:</strong> 10.10.2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Geltungsbereich</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mit der Nutzung dieser Website erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. 
              Sollten Sie diesen Bedingungen nicht zustimmen, bitten wir Sie, die Website nicht weiter zu nutzen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Leistungsbeschreibung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Diese Website dient ausschließlich Informationszwecken. Es werden keine Garantien für Produkte, 
              Dienstleistungen oder Ergebnisse übernommen. Die Nutzung der Website erfolgt auf eigenes Risiko.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Urheberrecht und geistiges Eigentum</h2>
            <p className="text-muted-foreground leading-relaxed">
              Alle Inhalte dieser Website (Texte, Bilder, Logos, Software etc.) sind Eigentum von KI-Automatisieren.de 
              oder entsprechend lizenziert. Eine Vervielfältigung, Bearbeitung oder Verbreitung ohne ausdrückliche 
              Genehmigung ist nicht gestattet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Pflichten der Nutzer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Als Nutzer verpflichten Sie sich, die Website im Einklang mit geltendem Recht, ethischen Grundsätzen 
              und diesen Nutzungsbedingungen zu verwenden. Folgendes ist untersagt:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Inhalte zu verändern, kopieren oder verbreiten</li>
              <li>Viren oder schädliche Software zu verbreiten</li>
              <li>Unerlaubtes Auslesen oder Scraping der Website</li>
              <li>Inhalte zu teilen, die Rechte Dritter verletzen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Haftungsbeschränkung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Der Betreiber dieser Website haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung 
              der Website entstehen. Eine Haftung für Informationslücken, Ausfälle oder Datenverlust wird ausgeschlossen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Links und Inhalte Dritter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Diese Website kann Links zu externen Websites Dritter enthalten. Für deren Inhalte, Sicherheit 
              oder Datenschutzrichtlinien übernimmt der Betreiber keine Verantwortung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Höhere Gewalt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bei unvorhersehbaren Ereignissen wie Naturkatastrophen, Streiks, Bränden oder Kriegen entfällt 
              die Haftung für die Nichterfüllung von Verpflichtungen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Anwendbares Recht und Gerichtsstand</h2>
            <p className="text-muted-foreground leading-relaxed">
              Für Streitigkeiten aus diesen Nutzungsbedingungen gilt deutsches Recht. 
              Gerichtsstand ist Deutschland.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Änderungsvorbehalt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Der Betreiber behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. 
              Änderungen treten mit ihrer Veröffentlichung auf der Website in Kraft.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default KullanimKosullari;
