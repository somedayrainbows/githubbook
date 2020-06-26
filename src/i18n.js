import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import HttpApi from 'i18next-http-backend';

const languages = ['de', 'en', 'es']

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    whitelist: languages,
    backend: {  // this is not necessary with default path below, but can be used for diff paths
      // loadPath: '/locales/{{lng}}/translation.json',
      loadPath: '/locales/{{lng}}/{{ns}}.json', // to use i18next namespacing
    },
  }, (err) => {
    if (err) return console.log('something is wrong with i18next', err);
  });

export default i18n;
