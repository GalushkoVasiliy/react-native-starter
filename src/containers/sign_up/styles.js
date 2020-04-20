// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { COLORS } from "src/configs/styles";

import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from "src/utils/layout";


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: getWidthWithScaleFactor(25),
  },
  viewWrapper: {
    paddingTop: getHeightWithScaleFactor(24),
  },
  textWrapper: {
    marginTop: getHeightWithScaleFactor(50),
  },
  link: {
    color: COLORS.BLUE
  }
});
