// lib/useTranslation.js
import { useRouter } from 'next/router';
import en from '../translations/en.json';
import fr from '../translations/fr.json';
import es from '../translations/es.json';

const translations = { en, fr, es };

export function useTranslation() {
  const router = useRouter();
  const { locale = 'en' } = router;

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const formatMessage = (key, variables = {}) => {
    let message = t(key);
    Object.keys(variables).forEach(varKey => {
      message = message.replace(`{{${varKey}}}`, variables[varKey]);
    });
    return message;
  };

  return { t, formatMessage, locale };
}

export default useTranslation;
