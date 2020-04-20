// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getHeightWithScaleFactor,
  getFontWithScaleFactor,
  getWidthWithScaleFactor
} from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";


export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: getHeightWithScaleFactor(120),
    flex: 1,
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: getWidthWithScaleFactor(1)
  },
  image: {
    justifyContent: "center",
  },
  about: {
    flex: 1,
    justifyContent: "center"
  },
  iconWrapper: {
    width: getWidthWithScaleFactor(50),
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: getFontWithScaleFactor(20)
  }
});
