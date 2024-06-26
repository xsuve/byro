import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import platform_RO from './src/assets/locales/ro/platform.json';
import processes_RO from './src/assets/locales/ro/processes.json';
import fields_RO from './src/assets/locales/ro/fields.json';
import countries_RO from './src/assets/locales/ro/countries.json';
import errors_RO from './src/assets/locales/ro/errors.json';
import documents_RO from './src/assets/locales/ro/documents.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ro: {
        platform: platform_RO,
        processes: processes_RO,
        fields: fields_RO,
        countries: countries_RO,
        errors: errors_RO,
        documents: documents_RO,
      },
    },
    lng: 'ro', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
