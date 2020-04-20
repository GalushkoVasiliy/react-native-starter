// @flow

/* REACT */
import React from "react";
import { YellowBox } from "react-native";

/* MODULES */
import { I18nextProvider } from "react-i18next";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

/* CUSTOM MODULES */
import App from "src/app";
import i18n from "src/i18n/i18n"; // initialized i18next instance


YellowBox.ignoreWarnings(["ViewPagerAndroid", "Slider has been extracted"]);


export default () => (
  <I18nextProvider i18n={i18n} >
    <ActionSheetProvider>
      <App />
    </ActionSheetProvider>
  </I18nextProvider>
);
