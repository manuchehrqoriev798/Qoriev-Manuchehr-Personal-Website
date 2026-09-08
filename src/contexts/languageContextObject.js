import { createContext, useContext } from 'react';
import { CONTENT } from '../constants/siteContent';

export const LanguageContext = createContext(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

/** Copy for the active language. */
export function useCopy() {
  return CONTENT[useLanguage().language];
}
