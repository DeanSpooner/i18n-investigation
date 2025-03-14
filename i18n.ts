import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./locales/en.json'),
      },
      ja: {
        translation: require('./locales/ja.json'),
      },
    },
    fallbackLng: 'en',
    lng: Localization.getLocales()[0].languageCode || 'en', // Use Expo's localization to get the locale
    interpolation: {
      escapeValue: false,
      formatSeparator: ':',
      prefix: '{',
      suffix: '}',
    },
  });

export default i18n;
