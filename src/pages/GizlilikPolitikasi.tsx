import { SEO } from "@/components/SEO";

const GizlilikPolitikasi = () => {
  return (
    <>
      <SEO 
        title="Datenschutzerklärung | KI-Automatisieren.de"
        description="Datenschutzerklärung und Informationen zum Schutz personenbezogener Daten auf KI-Automatisieren.de."
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Datenschutzerklärung</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Letzte Aktualisierung:</strong> 10.10.2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Verantwortlicher und Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist KI-Automatisieren.de. 
              Bei Fragen zum Datenschutz können Sie uns per E-Mail kontaktieren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Erhobene Daten und Erfassungsmethoden</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beim Besuch unserer Website oder beim Absenden von Formularen können folgende Daten erfasst werden:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Name, E-Mail-Adresse, Kontaktdaten (sofern angegeben)</li>
              <li>IP-Adresse, Browsertyp, Geräteinformationen, Zugriffsprotokoll</li>
              <li>Cookie-Daten</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Diese Daten können automatisch oder manuell erfasst und gespeichert werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Zweck der Datenverarbeitung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Die erhobenen Daten werden für folgende Zwecke verwendet:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Bereitstellung von Dienstleistungen und Kommunikation</li>
              <li>Beantwortung von Formularanfragen</li>
              <li>Analyse der Website-Performance und Nutzungsstatistiken</li>
              <li>Sicherheit, technische Wartung und Verbesserungen</li>
              <li>Erfüllung gesetzlicher Pflichten</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diese Website kann Cookies verwenden, um die Benutzererfahrung zu verbessern und Analysen durchzuführen. 
              Einige Cookies sind technisch notwendig (z.B. Sitzungsverwaltung), andere sind optional (Analyse, Werbung).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sie können Cookies in Ihren Browsereinstellungen ablehnen oder löschen. Dies kann jedoch die Funktionalität 
              einiger Website-Bereiche beeinträchtigen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Weitergabe und Übermittlung von Daten</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ohne ausdrückliche Einwilligung werden personenbezogene Daten nicht an Dritte weitergegeben. 
              In folgenden Fällen kann jedoch eine Datenübermittlung erfolgen:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Dienstleister (z.B. Hosting, Infrastruktur)</li>
              <li>Behörden und staatliche Stellen</li>
              <li>Geschäftspartner (bestehende und potenzielle)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Daten können auf Servern innerhalb oder außerhalb Deutschlands gespeichert werden, 
              jedoch stets unter Einhaltung der DSGVO.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Speicherdauer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für den Erhebungszweck erforderlich ist. 
              Formulardaten oder Abonnementdaten werden nach Abschluss des Vorgangs für einen angemessenen Zeitraum aufbewahrt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Ihre Rechte als Betroffener</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gemäß DSGVO haben Sie folgende Rechte:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Auskunft über die Verarbeitung Ihrer Daten</li>
              <li>Berichtigung unrichtiger oder unvollständiger Daten</li>
              <li>Löschung Ihrer Daten („Recht auf Vergessenwerden")</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Widerruf erteilter Einwilligungen</li>
              <li>Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Diese Anfragen werden in der Regel kostenlos bearbeitet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Änderungen der Datenschutzerklärung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden. Die aktualisierte Version 
              tritt mit ihrer Veröffentlichung auf der Website in Kraft.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Rechtliche Grundlagen</h2>
            <p className="text-muted-foreground leading-relaxed">
              Diese Datenschutzerklärung wurde in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) 
              der Europäischen Union sowie dem Bundesdatenschutzgesetz (BDSG) erstellt.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default GizlilikPolitikasi;
