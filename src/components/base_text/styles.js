// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { getFontWithScaleFactor } from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";


export default StyleSheet.create({
  text: {
    fontSize: getFontWithScaleFactor(14),
    lineHeight: getFontWithScaleFactor(16),
    letterSpacing: 0.6,
    textAlign: "left",
    color: COLORS.BLACK,
  },

  title: {
    fontWeight: "900",
    fontSize: getFontWithScaleFactor(18),
    lineHeight: getFontWithScaleFactor(22),
  },
});
