// @flow

/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { COLORS } from "src/configs/styles";
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
  getFontWithScaleFactor,
} from "src/utils/layout";

export default StyleSheet.create({
  content: {
    flex: 1
  },
  scrollToBottom: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: getWidthWithScaleFactor(25)
  },
  viewWrapper: {
    paddingTop: getHeightWithScaleFactor(16)
  },
  rowWrapper: {
    paddingVertical: getHeightWithScaleFactor(16),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textWrapper: {
    flexWrap: "wrap",
    marginTop: getHeightWithScaleFactor(50)
  },
  link: {
    fontSize: getFontWithScaleFactor(14),
    color: COLORS.LINK
  }
});
