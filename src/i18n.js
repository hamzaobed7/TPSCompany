import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";

import ar from "./locales/ar.json";
import i18n from "./i18n";

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources: {
      en: { translation: en },

      ar: { translation: ar },
    },

    fallbackLng: "en",

    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator"],

      caches: ["localStorage"],
    },
  });

export default i18n;
