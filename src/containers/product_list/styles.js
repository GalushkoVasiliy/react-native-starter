// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getWidthWithScaleFactor,
} from "src/utils/layout";


export default StyleSheet.create({
  pageWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: getWidthWithScaleFactor(24),
  },
});
