// @flow

import { StyleSheet, Platform } from "react-native";

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
    width: "100%"
  },

  accessory: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center"
  },

  triangle: {
    width: 8,
    height: 8,
    transform: [
      {
        translateY: -4
      },
      {
        rotate: "45deg"
      }
    ],
  },

  triangleContainer: {
    width: 12,
    height: 6,
    overflow: "hidden",
    alignItems: "center",

    backgroundColor: COLORS.TRANSPARENT
  },

  overlay: {
    ...StyleSheet.absoluteFillObject
  },

  picker: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,

    position: "absolute",

    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: COLORS.BLACK,
        shadowOpacity: 0.54,
        shadowOffset: { width: 0, height: 2 }
      },

      android: {
        elevation: 2
      }
    })
  },

  item: {
    // textAlign: "left"
  },
  itemSeparator: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.INPUT.BORDER_COLOR
  },

  scroll: {
    flex: 1,
    borderRadius: 2
  },

  scrollContainer: {
    paddingVertical: 8
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
  inputContainer: {
    height: getHeightWithScaleFactor(40),
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.INPUT.BORDER_COLOR,
    paddingHorizontal: getWidthWithScaleFactor(12),
    flex: 1,
    justifyContent: "center"
  },
  inputText: {
    fontSize: getFontWithScaleFactor(14)
  },
  inputWithError: {
    borderWidth: 1
  },
  error: {
    marginTop: getHeightWithScaleFactor(4)
  }
});
