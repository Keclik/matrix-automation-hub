
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'cs';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detect user browser language
    const userLanguage = navigator.language.split('-')[0].toLowerCase();
    
    // Set to Czech for Czech and Slovak users, English for everyone else
    if (userLanguage === 'cs' || userLanguage === 'sk') {
      setLanguage('cs');
    } else {
      setLanguage('en');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}
