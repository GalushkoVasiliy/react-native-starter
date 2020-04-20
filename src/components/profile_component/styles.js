// @flow

/* REACT */
import { StyleSheet } from "react-native";

import {
  getHeightWithScaleFactor,
} from "src/utils/layout";

export default StyleSheet.create({
  content: {
    flex: 1
  },
  scrollToBottom: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  viewWrapper: {
    alignItems: "center",
    paddingTop: getHeightWithScaleFactor(24)
  },
  btnWrapper: {
    paddingTop: getHeightWithScaleFactor(24),
    flex: 1
  },
});
