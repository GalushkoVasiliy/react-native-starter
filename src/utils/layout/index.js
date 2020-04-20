// @flow
import { Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("window");

// paste your mockup sizes
const MOCKUP_WIDTH = 375;
const MOCKUP_HEIGHT = 778;


/**
 * Get size with scale factor
 * TODO: will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function getWidthWithScaleFactor(size: number) {
  // TODO: probably will use some of the options below
  // @Note: 360 x 640 - mockup sizes
  // @Note: 365 x 667 - iPhone 6 sizes (+ pixel ration equal 2)
  // console.log('Dimensions.get() ===== ', Dimensions.get('window'));
  // console.log('PixelRatio.get() ===== ', PixelRatio.get());
  // console.log('PixelRatio.getPixelSizeForLayoutSize(size) ===== ', PixelRatio.getPixelSizeForLayoutSize(size));
  return PixelRatio.roundToNearestPixel(size * (width / MOCKUP_WIDTH));
  // return size;
}
/**
 * Get size with scale factor
 * TODO: will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function getHeightWithScaleFactor(size: number) {
  // TODO: probably will use some of the options below
  // @Note: 360 x 640 - mockup sizes
  // @Note: 365 x 667 - iPhone 6 sizes (+ pixel ration equal 2)
  // console.log('Dimensions.get() ===== ', Dimensions.get('window'));
  // console.log('PixelRatio.get() ===== ', PixelRatio.get());
  // console.log('PixelRatio.getPixelSizeForLayoutSize(size) ===== ', PixelRatio.getPixelSizeForLayoutSize(size));
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
  // return size;
}


/**
 * Get font with scale factor
 * TODO: will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function getFontWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));

  // if (Platform.OS === 'android') return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
  // return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT) * (PixelRatio.get() * 0.53));
  // return size;
}
