// @flow

/* REACT */
import { StyleSheet } from "react-native";
import { COLORS } from "src/configs/styles";

/* CUSTOM MODULES */
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
  getFontWithScaleFactor
} from "src/utils/layout";

export default StyleSheet.create({
  container: {
    width: "100%"
  },
  labelsWrapper: {
    backgroundColor: COLORS.WHITE,
    height: getHeightWithScaleFactor(16),
    top: getHeightWithScaleFactor(-8),
    marginStart: getWidthWithScaleFactor(12),
    paddingHorizontal: getWidthWithScaleFactor(3),
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  labelText: {
    color: COLORS.INPUT.TEXT_COLOR,
    fontSize: getFontWithScaleFactor(12)
  },
  input: {
    height: getHeightWithScaleFactor(40),
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.INPUT.BORDER_COLOR,
    fontSize: getFontWithScaleFactor(14),
    paddingHorizontal: getWidthWithScaleFactor(12),
    flex: 1
  },
  inputWithError: {
    borderWidth: 1
  },
  error: {
    marginTop: getHeightWithScaleFactor(4)
  }
});
