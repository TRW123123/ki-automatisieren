import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { SEO } from '@/components/SEO';
import { FAQSchema } from '@/components/FAQSchema';
import { Hero3Days } from '@/components/website-3days/Hero3Days';
import { Pricing3Days } from '@/components/website-3days/Pricing3Days';
import { Process3Days } from '@/components/website-3days/Process3Days';
import { References3Days } from '@/components/website-3days/References3Days';
import { Guarantee3Days } from '@/components/website-3days/Guarantee3Days';
import { FAQ3Days } from '@/components/website-3days/FAQ3Days';
import { FinalCTA3Days } from '@/components/website-3days/FinalCTA3Days';
import { Website3DaysContactModal } from '@/components/website-3days/Website3DaysContactModal';

const WebsiteIn3Days = () => {
  const { t, currentLanguage } = useLanguage();
  const { isWebsite3DaysContactOpen, closeWebsite3DaysContact } = useModal();
  
  const faqData = [
    {
      question: t('website3days.faq.q1'),
      answer: t('website3days.faq.a1')
    },
    {
      question: t('website3days.faq.q2'),
      answer: t('website3days.faq.a2')
    },
    {
      question: t('website3days.faq.q3'),
      answer: t('website3days.faq.a3')
    },
    {
      question: t('website3days.faq.q4'),
      answer: t('website3days.faq.a4')
    },
    {
      question: t('website3days.faq.q5'),
      answer: t('website3days.faq.a5')
    },
    {
      question: t('website3days.faq.q6'),
      answer: t('website3days.faq.a6')
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.w3d-animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Only render for German locale
  if (currentLanguage !== 'de') {
    return null;
  }

  return (
    <>
      <SEO
        title={t('website3days.seo.title')}
        description={t('website3days.seo.description')}
        type="website"
        routeKey="website-in-3-days"
      />
      <Helmet>
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
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=689069107595367&ev=PageView&noscript=1" />`}
        </noscript>
        <script>
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
            var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
            ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
            
            ttq.load('D4EPJR3C77U004J4BMHG');
            ttq.page();
            }(window, document, 'ttq');
          `}
        </script>
      </Helmet>
      <FAQSchema faqs={faqData} />
      
      <div className="website-3days-page">
        <Hero3Days />
        <Pricing3Days />
        <References3Days />
        <Process3Days />
        <Guarantee3Days />
        <FAQ3Days faqData={faqData} />
        <FinalCTA3Days />
      </div>
      
      <Website3DaysContactModal 
        open={isWebsite3DaysContactOpen} 
        onOpenChange={closeWebsite3DaysContact}
      />
    </>
  );
};

export default WebsiteIn3Days;
