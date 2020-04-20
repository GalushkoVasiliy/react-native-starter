// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getWidthWithScaleFactor,
  getHeightWithScaleFactor,
  getFontWithScaleFactor,
} from "src/utils/layout";


export default StyleSheet.create({
  mainPage: {
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: getWidthWithScaleFactor(24),
  },
  title: {
    fontSize: getFontWithScaleFactor(22),
    lineHeight: getHeightWithScaleFactor(28)
  },
  about: {
    marginTop: getHeightWithScaleFactor(25),
    fontSize: getFontWithScaleFactor(12),
    lineHeight: getHeightWithScaleFactor(18),
    flexWrap: "wrap",
  }
});
