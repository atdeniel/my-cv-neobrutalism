'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define available locales
export const LOCALES = {
  SPANISH: 'es',
  ENGLISH: 'en'
};

// Define the translations type
type TranslationsType = {
  [key: string]: {
    [locale: string]: {
      [key: string]: string
    }
  }
};

// Initialize empty translations object
const translations: TranslationsType = {
  header: {
    [LOCALES.ENGLISH]: {},
    [LOCALES.SPANISH]: {}
  }
};

type LanguageContextType = {
  currentLocale: string;
  setLocale: (locale: string) => void;
  t: (section: string, key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState(LOCALES.SPANISH);
  const [isLoading, setIsLoading] = useState(true);

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Load translations for spanish
        const esHeaderResponse = await fetch('/locales/es/header.json');
        const esHeaderData = await esHeaderResponse.json();
        translations.header[LOCALES.SPANISH] = esHeaderData;

        // Load translations for english
        const enHeaderResponse = await fetch('/locales/en/header.json');
        const enHeaderData = await enHeaderResponse.json();
        translations.header[LOCALES.ENGLISH] = enHeaderData;

        setIsLoading(false);
      } catch (error) {
        console.error('Error loading translations:', error);
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, []);

  // Translation function
  const t = (section: string, key: string): string => {
    if (translations[section]?.[currentLocale]?.[key]) {
      return translations[section][currentLocale][key];
    }
    return key;
  };

  if (isLoading) {
    return <div>Loading translations...</div>;
  }

  return (
    <LanguageContext.Provider value={{ currentLocale, setLocale: setCurrentLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 