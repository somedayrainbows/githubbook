import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    // lang: 'en',
    fallbackLang: 'en',
    // whitelist: ['en', 'es', 'de'],
    // backend: {  // this is not necessary with default path below, but can be used for diff paths
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
  });

export default i18n;
