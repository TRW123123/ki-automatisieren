import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    fbq?: (action: string, eventName: string) => void;
  }
}

export default function Website3DaysDanke() {
  const { t, currentLanguage } = useLanguage();

  // Only show for German language
  if (currentLanguage !== 'de') {
    return null;
  }

  useEffect(() => {
    // Track Meta Pixel Lead Event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <>
      <SEO 
        title={t('website3days.thankyou.title')}
        description={t('website3days.thankyou.subtitle')}
        routeKey="website-3days-thank-you"
      />
      
      <Helmet>
        {/* Facebook Pixel Code */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '689069107595367');
          `}
        </script>
      </Helmet>

      <div className="website-3days-page">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section with Success Message */}
          <section className="w3d-section pt-32 pb-24 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w3d-fade-in mb-8">
                <div className="w-20 h-20 bg-[hsl(270,91%,58%)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-[hsl(270,91%,58%)]" />
                </div>
                
                <h1 className="mb-4">
                  {t('website3days.thankyou.title')}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  {t('website3days.thankyou.subtitle')}
                </p>
                
                <div className="bg-white border-2 border-[hsl(220,13%,91%)] rounded-2xl p-8 text-left">
                  <p className="text-lg text-gray-700 mb-6">
                    {t('website3days.thankyou.message')}
                  </p>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {t('website3days.thankyou.steps.title')}
                    </h2>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[hsl(270,91%,58%)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[hsl(270,91%,58%)] font-bold">1</span>
                      </div>
                      <p className="text-gray-700">
                        {t('website3days.thankyou.steps.1')}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[hsl(270,91%,58%)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[hsl(270,91%,58%)] font-bold">2</span>
                      </div>
                      <p className="text-gray-700">
                        {t('website3days.thankyou.steps.2')}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[hsl(270,91%,58%)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[hsl(270,91%,58%)] font-bold">3</span>
                      </div>
                      <p className="text-gray-700">
                        {t('website3days.thankyou.steps.3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w3d-fade-in w3d-stagger-1 flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link 
                  to="/de" 
                  className="w3d-btn-secondary inline-flex items-center gap-2 justify-center"
                >
                  {t('website3days.thankyou.cta.back')}
                </Link>
                <Link 
                  to="/de/uber-uns" 
                  className="w3d-btn-primary inline-flex items-center gap-2 justify-center"
                >
                  {t('website3days.thankyou.cta.more')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
