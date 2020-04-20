// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from "src/utils/layout";


export default StyleSheet.create({
  mainPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: getWidthWithScaleFactor(24),
  },
  buttonWrapper: {
    marginTop: getHeightWithScaleFactor(24),
    width: "100%",
  }
});
