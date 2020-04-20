// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { COLORS } from "src/configs/styles";

import { getFontWithScaleFactor, getHeightWithScaleFactor, getWidthWithScaleFactor } from "src/utils/layout";

export default StyleSheet.create({
  title: {
    color: COLORS.WHITE,
    fontWeight: "900",
    fontSize: getFontWithScaleFactor(10),
    lineHeight: getFontWithScaleFactor(16),
  },
  wrapper: {
    top: 0,
    left: 0,
    height: 90,
    // bottom: 0,
    marginTop: 20,
    backgroundColor: "red",
    // justifyContent: "center",
    alignItems: "center",
  },
  tape: {
    right: 0,
    position: "absolute",
    backgroundColor: COLORS.RED,
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
    marginTop: getHeightWithScaleFactor(50),
    marginRight: getWidthWithScaleFactor(-30),
    width: getWidthWithScaleFactor(150),
    height: getHeightWithScaleFactor(20)
  }
});
