// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { getHeightWithScaleFactor } from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";


export default StyleSheet.create({
  title: {
    color: COLORS.BLACK
  },
  content: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: getHeightWithScaleFactor(25),
  },
  viewWrapper: {
    paddingTop: getHeightWithScaleFactor(24),
  },
});
