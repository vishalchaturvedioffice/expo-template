import ar from "@/localization/translations/ar.json";
import en from "@/localization/translations/en.json";

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

export type Language = keyof typeof resources;
