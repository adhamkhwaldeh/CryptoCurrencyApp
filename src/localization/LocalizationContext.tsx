import React, { createContext, useState } from "react";
// import i18n from 'i18n-js';
import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translations, { DEFAULT_LANGUAGE } from "./translations";
import LoggingHelper from "../helpers/LoggingHelper";

const APP_LANGUAGE = "appLanguage";

export const LocalizationContext = createContext({
  translations,
  setAppLanguage: (language) => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

// export const LocalizationProvider: React.FC<any> = ({ children }) => {
export const LocalizationProvider: React.JSXElementConstructor<
  React.PropsWithChildren<any>
> = ({ children }) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
  // const [appRTL, setAppRTL] = useState(appLanguage == 'ar');

  const setLanguage = (language) => {
    translations.setLanguage(language);
    // children.forceUpdate();
    var isRTL = language == "ar";

    LoggingHelper.log("is RTL: " + isRTL);
    I18nManager.forceRTL(isRTL);
    // i18n.locale = language;//1234
    setAppLanguage(language);

    // SetGlobalLanguage.
    // setAppRTL(isRTL)
    AsyncStorage.setItem(APP_LANGUAGE, language);
    // I18nManager.forceRTL(appRTL);
    // setAppRTL(isRTL)
    // children.forceUpdate();
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    if (!currentLanguage) {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = translations.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map(
        (locale) => locale.languageCode
        // isRTl => locale.isRTL,
      );
      phoneLocaleCodes.some((code) => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    } else {
      setLanguage(currentLanguage);
    }
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
