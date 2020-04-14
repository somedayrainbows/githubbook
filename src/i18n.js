import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,

    lang: 'en',
    fallbackLang: 'en',
    whitelist: ['en', 'es', 'de'],
    backend: {  // this is not nec. default; try commenting out to see impact once wired up
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
