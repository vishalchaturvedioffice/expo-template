import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

import { resources } from "@/localization/resources";
import { getLanguage } from "@/localization/utils";

export * from "@/localization/utils";

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage() || getLocales()[0].languageTag,
  fallbackLng: "en",
  compatibilityJSON: "v4",

  interpolation: {
    escapeValue: false,
  },
});

// Is it a RTL language?
export const isRTL: boolean = i18n.dir() === "rtl";

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export default i18n;
