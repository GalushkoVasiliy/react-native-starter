// @flow

/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getHeightWithScaleFactor,
  getFontWithScaleFactor
} from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";

export default StyleSheet.create({
  button: {
    height: getHeightWithScaleFactor(40),
    width: "100%",
    borderRadius: 4,
    backgroundColor: COLORS.BUTTON.BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center"
  },
  labelText: {
    fontSize: getFontWithScaleFactor(14),
    fontWeight: "500",
    color: COLORS.WHITE
  },
  disabledStyle: {
    opacity: 0.2
  },
  reversedStyle: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.BUTTON.BACKGROUND_COLOR,
    borderWidth: 2
  }
});
