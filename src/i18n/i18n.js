// @flow


/* MODULES */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/* CUSTOM MODULES */
import en from "src/i18n/translations/en.json";
import ru from "src/i18n/translations/ru.json";

import logger from "src/utils/logger";

/* CONFIGS */
import { MAIN_CONFIG } from "src/configs";

/* TYPES */
type _t_languageChoice = "en" | "ru";

/**
 * Gets called in case a interpolation value is undefined.
 * This method will not be called if the value is empty string or null.
 */
const missingInterpolationHandler = (text: string, value, key: Object): string => {
  let interpolation = key.defaultValue || "";
  const warningMessage = `[missing value: ${value[1]}, please add default value]`;

  if (__DEV__) {
    interpolation = (key.defaultValue && `${warningMessage}: Used default value: ${key.defaultValue}`)
      || warningMessage;

    logger.warn(interpolation);
  }

  return interpolation;
};

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    lng: "en",
    fallbackLng: "en",
    // fallbackLng: "ru",
    resources: {
      en,
      ru,
    },
    debug: MAIN_CONFIG.ENABLE_LOGS,
    react: {
      wait: true,
    },
    saveMissing: true,
    missingInterpolationHandler,
  });


/**
 * Set language
 *
 * @param {_t_languageChoice} lang - language to set
 */
export function setLanguage(lang: _t_languageChoice) {
  // @Note: check that given language is one of available languages
  if (!["en", "ru"].includes(lang)) {
    logger.warn(`${lang} is not the one of available language types`);
    return;
  }

  // @Note: use this to change language after init
  i18n.changeLanguage(lang);
}


export default i18n;
