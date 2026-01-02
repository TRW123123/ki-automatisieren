import { createContext, useContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import deTranslations from '../../locales/de';
import { getRouteKeyFromPath, getLocalizedRoute, extractParamsFromPath } from '@/lib/routeMappings';

type Language = 'de';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  initializeLanguage: (lang: string | undefined) => void;
}

const translations = {
  de: deTranslations
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('de');
  const navigate = useNavigate();
  
  const initializeLanguage = (lang: string | undefined) => {
    const validLang = (lang as Language);
    // Only German is active
    if (validLang && validLang === 'de') {
      setCurrentLanguage(validLang);
    } else {
      setCurrentLanguage('de'); // Default to German
    }
  };
  
  const setLanguage = (newLang: Language) => {
    // Only German language available - no switching needed
    setCurrentLanguage('de');
  };

  const t = (key: string): string => {
    return translations.de?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, initializeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};