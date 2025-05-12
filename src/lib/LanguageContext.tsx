'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import FullPageLoader from '@/components/full-page-loader'; // ajusta la ruta si es necesario


// Define available locales
export const LOCALES = {
  SPANISH: 'es',
  ENGLISH: 'en'
};

// Define the translations type
type TranslationsType = {
  [key: string]: {
    [locale: string]: {
      [key: string]: any
    }
  }
};

// Initialize empty translations object
const translations: TranslationsType = {
  header: {
    [LOCALES.ENGLISH]: {},
    [LOCALES.SPANISH]: {}
  },
  experience: {
    [LOCALES.ENGLISH]: {},
    [LOCALES.SPANISH]: {}
  },
  skills: {
    [LOCALES.ENGLISH]: {},
    [LOCALES.SPANISH]: {}
  },
  contact: {
    [LOCALES.ENGLISH]: {},
    [LOCALES.SPANISH]: {}
  },
  education: {
    [LOCALES.ENGLISH]: {},
    [LOCALES.SPANISH]: {}
  },
  certification: {
    [LOCALES.ENGLISH]: {},
    [LOCALES.SPANISH]: {}
  }
};

type LanguageContextType = {
  currentLocale: string;
  setLocale: (locale: string) => void;
  t: (section: string, key: string) => any;
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

        const esExperienceResponse = await fetch('/locales/es/experience.json');
        const esExperienceData = await esExperienceResponse.json();
        translations.experience[LOCALES.SPANISH] = esExperienceData;

        const esSkillsResponse = await fetch('/locales/es/skills.json');
        const esSkillsData = await esSkillsResponse.json();
        translations.skills[LOCALES.SPANISH] = esSkillsData;

        const esContactResponse = await fetch('/locales/es/contact.json');
        const esContactData = await esContactResponse.json();
        translations.contact[LOCALES.SPANISH] = esContactData;

        const esEducationResponse = await fetch('/locales/es/education.json');
        const esEducationData = await esEducationResponse.json();
        translations.education[LOCALES.SPANISH] = esEducationData;

        const esCertificationResponse = await fetch('/locales/es/certification.json');
        const esCertificationData = await esCertificationResponse.json();
        translations.certification[LOCALES.SPANISH] = esCertificationData;

        // Load translations for english
        const enHeaderResponse = await fetch('/locales/en/header.json');
        const enHeaderData = await enHeaderResponse.json();
        translations.header[LOCALES.ENGLISH] = enHeaderData;

        const enExperienceResponse = await fetch('/locales/en/experience.json');
        const enExperienceData = await enExperienceResponse.json();
        translations.experience[LOCALES.ENGLISH] = enExperienceData;

        const enSkillsResponse = await fetch('/locales/en/skills.json');
        const enSkillsData = await enSkillsResponse.json();
        translations.skills[LOCALES.ENGLISH] = enSkillsData;

        const enContactResponse = await fetch('/locales/en/contact.json');
        const enContactData = await enContactResponse.json();
        translations.contact[LOCALES.ENGLISH] = enContactData;

        const enEducationResponse = await fetch('/locales/en/education.json');
        const enEducationData = await enEducationResponse.json();
        translations.education[LOCALES.ENGLISH] = enEducationData;

        const enCertificationResponse = await fetch('/locales/en/certification.json');
        const enCertificationData = await enCertificationResponse.json();
        translations.certification[LOCALES.ENGLISH] = enCertificationData;

        setIsLoading(false);
      } catch (error) {
        console.error('Error loading translations:', error);
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, []);

  // Translation function
  const t = (section: string, key: string): any => {
    if (translations[section]?.[currentLocale]?.[key]) {
      return translations[section][currentLocale][key];
    }
    return key;
  };

  if (isLoading) {
    return <FullPageLoader />;
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