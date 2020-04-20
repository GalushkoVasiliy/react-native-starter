// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getHeightWithScaleFactor,
  getFontWithScaleFactor,
  getWidthWithScaleFactor,
} from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";


export default StyleSheet.create({
  header: {
    backgroundColor: COLORS.WHITE,
    height: getHeightWithScaleFactor(44),
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerTitle: {
    color: COLORS.BLACK,
    fontSize: getFontWithScaleFactor(17),
    letterSpacing: -0.41,
  },
  headerLeftContainer: {
    paddingHorizontal: getWidthWithScaleFactor(8)
  },
  cardStyle: {
    backgroundColor: COLORS.WHITE,
    shadowOpacity: 0,
    elevation: 0,
  },
});
