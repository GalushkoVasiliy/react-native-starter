// @flow


/* REACT */
import { StyleSheet } from "react-native";
import { COLORS } from "src/configs/styles";

import {
  getHeightWithScaleFactor,
  getFontWithScaleFactor,
} from "src/utils/layout";

export default StyleSheet.create({
  aboutPassword: {
    fontSize: getFontWithScaleFactor(14),
    color: COLORS.shuttleGray,
    marginTop: getHeightWithScaleFactor(30),
  },
  wrapperBtn: {
    flex: 1,
    marginVertical: getHeightWithScaleFactor(16),
  },
  wrapperText: {
    justifyContent: "center",
    minHeight: getHeightWithScaleFactor(120),
    marginVertical: getHeightWithScaleFactor(16),
  },
  viewWrapper: {
    alignItems: "stretch",
    paddingTop: getHeightWithScaleFactor(24),
  },
  wrapperButtons: {
    flexDirection: "row",
    marginTop: getHeightWithScaleFactor(20),
  }
});
