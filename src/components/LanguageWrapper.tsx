import { useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const location = useLocation();
  const { initializeLanguage } = useLanguage();

  const derivedLang = useMemo(() => {
    // Only German is active
    if (paramLang && paramLang === 'de') return paramLang;
    const seg = location.pathname.split('/')[1];
    if (seg === 'de') return seg;
    return 'de';
  }, [paramLang, location.pathname]);

  useEffect(() => {
    initializeLanguage(derivedLang);
  }, [derivedLang, initializeLanguage]);

  return <>{children}</>;
};