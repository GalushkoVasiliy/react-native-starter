// @flow


/* REACT */
import { Platform } from "react-native";


export default {
  ArialRoundedMTBold: Platform.select({ ios: "ArialRoundedMTBold", android: "ArialRounderMTBold" }),
  JosefinSans_SemiBoldItalic: "JosefinSans-SemiBoldItalic",
  JosefinSans_Light: "JosefinSans-Light",
  JosefinSans_SemiBold: "JosefinSans-SemiBold",
  JosefinSans_LightItalic: "JosefinSans-LightItalic",
  JosefinSans_ThinItalic: "JosefinSans-ThinItalic",
  JosefinSans_Bold: "JosefinSans-Bold",
  JosefinSans_Thin: "JosefinSans-Thin",
  JosefinSans_Italic: "JosefinSans-Italic",
  JosefinSans_Regular: "JosefinSans-Regular",
  JosefinSans_BoldItalic: "JosefinSans-BoldItalic",
  LucidaGrande: "LucidaGrande",
  SFProTextMedium: "SFUIText-Medium",
  SFProTextRegular: "SFUIText-Regular",
  SFProTextBold: "SFProText-Bold",
};
