import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";

// Initialize i18n
i18n
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: require('./locales/en.json'),
      },
      ja: {
        translation: require('./locales/ja.json'),
      },
    },
    lng: getLocales()[0]?.languageCode || "en", // Detect language
    interpolation: {
      escapeValue: false, // React already handles escaping
      formatSeparator: ':', // Allow multiple formats in a string
      prefix: '{',
      suffix: '}',
    },
  });

export default i18n;
