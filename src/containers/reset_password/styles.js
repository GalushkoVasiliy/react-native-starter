// @flow


/* REACT */
import { StyleSheet } from "react-native";

import { COLORS } from "src/configs/styles";

import { getHeightWithScaleFactor } from "src/utils/layout";

export default StyleSheet.create({
  title: {
    color: COLORS.BLACK
  },
  content: {
    flex: 1,
  },
  scrollToBottom: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: getHeightWithScaleFactor(25),
  },
  viewWrapper: {
    alignItems: "stretch",
    paddingTop: getHeightWithScaleFactor(24),
  },
  goToSignUp: {
    marginTop: getHeightWithScaleFactor(50),
  }
});
