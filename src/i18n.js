import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';

const languages = ['de', 'en', 'es']

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    whitelist: languages,
    // backend: {  // this is not necessary with default path below, but can be used for diff paths
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
  }, (err, t) => {
    if (err) return console.log('something is wrong with i18next', err);
    t('key');
  });

export default i18n;
