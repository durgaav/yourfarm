import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../translation/en.json';
import tamil from '../translation/tamil.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'tamil',
  fallbackLng: 'en',
  resources: {
    en: en,
    tamil: tamil,
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
  
export default i18n;