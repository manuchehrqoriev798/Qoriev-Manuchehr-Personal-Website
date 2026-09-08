import { useEffect, useState } from 'react';
import { CONTENT, LANGUAGES } from '../constants/siteContent';
import { LanguageContext } from './languageContextObject';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'en';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    // Screen readers pick pronunciation from this, and search engines index it.
    document.documentElement.lang = CONTENT[language].htmlLang;
    document.title = CONTENT[language].documentTitle;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
