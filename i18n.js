import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const EN = require('./src/translations/en.json');

const resources = {
  en: {
    translation: EN,
  }
};

i18n.use(initReactI18next).init({
  preload: ['en'],
  resources,

  lng: i18n.language,
  fallbackLng: 'en',
  keySeparator: false,
  browserLanguageDetection: true,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});

export default i18n;
