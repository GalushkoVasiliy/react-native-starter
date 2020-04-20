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
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  outerbox: {
    height: getHeightWithScaleFactor(20),
    width: getWidthWithScaleFactor(20),
    borderWidth: 2,
    borderRadius: 4,
    borderColor: COLORS.CHECKBOX.OUTERBOX_BORDER,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center"
  },
  labelText: {
    marginStart: getWidthWithScaleFactor(8),
    fontSize: getFontWithScaleFactor(14),
    color: COLORS.CHECKBOX.LABEL
  }
});
