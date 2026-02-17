
// Cookie Consent Logic
// Decoupled from Astro to avoid build errors

(function () {
    // Check if script is already running to avoid duplicates
    if (window.cookieConsentInitialized) return;
    window.cookieConsentInitialized = true;

    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.css';
    document.head.appendChild(link);

    // Google Analytics ID
    const GA_ID = "G-9WBCGS4J3P";

    // Function to load GA4
    const loadGA4 = () => {
        if (window.ga4Loaded) return;

        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { 'anonymize_ip': true });
        `;
        document.head.appendChild(script2);

        window.ga4Loaded = true;
        console.log("🍪 GA4 Loaded via Consent");
    };

    // Load vanilla-cookieconsent via CDN (since NPM import fails in strict build)
    const ccScript = document.createElement('script');
    ccScript.src = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.umd.js';
    ccScript.onload = () => {
        // Initialize
        CookieConsent.run({
            guiOptions: {
                consentModal: {
                    layout: "box",
                    position: "bottom right",
                    equalWeightButtons: true,
                    flipButtons: false,
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: true,
                    flipButtons: false,
                },
            },
            categories: {
                necessary: {
                    readOnly: true,
                    enabled: true,
                },
                analytics: {
                    enabled: false,
                },
            },
            language: {
                default: "de",
                translations: {
                    de: {
                        consentModal: {
                            title: "Wir nutzen Cookies",
                            description: "Wir nutzen Cookies, um zu verstehen, wie Sie unsere Website nutzen. Daten bleiben anonym.",
                            acceptAllBtn: "Alles akzeptieren",
                            acceptNecessaryBtn: "Nur Notwendige",
                            showPreferencesBtn: "Einstellungen",
                        },
                        preferencesModal: {
                            title: "Cookie-Einstellungen",
                            acceptAllBtn: "Alles akzeptieren",
                            acceptNecessaryBtn: "Nur Notwendige",
                            savePreferencesBtn: "Speichern",
                            closeIconLabel: "Schließen",
                            sections: [
                                {
                                    title: "Notwendige Cookies",
                                    description: "Diese Cookies sind für das Funktionieren der Website essenziell.",
                                    linkedCategory: "necessary",
                                },
                                {
                                    title: "Analyse Cookies",
                                    description: "Helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics).",
                                    linkedCategory: "analytics",
                                },
                            ],
                        },
                    },
                },
            },
            onConsent: ({ cookie }) => {
                if (cookie.categories.includes("analytics")) {
                    loadGA4();
                }
            },
            onChange: ({ cookie }) => {
                if (cookie.categories.includes("analytics")) {
                    loadGA4();
                }
            },
        });
    };
    document.body.appendChild(ccScript);
})();
