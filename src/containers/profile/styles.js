// @flow

/* REACT */
import { StyleSheet } from "react-native";

import { COLORS } from "src/configs/styles";

import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor
} from "src/utils/layout";

export default StyleSheet.create({
  wrapperTabs: {
    flexDirection: "row",
    borderBottomWidth: getWidthWithScaleFactor(1),
    borderBottomColor: COLORS.cloudBurst,
  },
  active: {
    borderBottomColor: COLORS.trout,
    borderBottomWidth: getWidthWithScaleFactor(2),
    paddingBottom: getHeightWithScaleFactor(12),
    color: COLORS.tuna
  },
  customTabButton: {
    marginRight: getWidthWithScaleFactor(10)
  },
  activeButtonText: {
    color: COLORS.tuna
  },
  inactiveButtonText: {
    color: COLORS.shuttleGray
  },
  pictureWrapperIcon: {
    justifyContent: "center",
    marginTop: getHeightWithScaleFactor(-50),
    marginBottom: getHeightWithScaleFactor(38),
  },

  content: {
    flex: 1
  },
  scrollToBottom: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingHorizontal: getHeightWithScaleFactor(25)
  },
  viewWrapper: {
    alignItems: "center",
    paddingTop: getHeightWithScaleFactor(24)
  },
  pictureWrapper: {
    height: getHeightWithScaleFactor(148),
    justifyContent: "center"
  }
});
