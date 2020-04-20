// @flow


/* TYPES */
import type {
  ViewStyleProp,
  TextStyleProp,
  ImageStyleProp,
} from "react-native/Libraries/StyleSheet/StyleSheet";


export type _t_translate = (keys: string | string[]) => string;


export type _t_orientation = "PORTRAIT" | "LANDSCAPE";


export type _t_coordinates = {|
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
  accuracy: number,
|};

export type _t_imagePickerFile = {|
  type: string,
  name: string,
  size: number,
  uri: string,
  path: string,
|};


export type _t_style = ViewStyleProp | TextStyleProp | ImageStyleProp;
export type _t_viewStyle = ViewStyleProp;
export type _t_textStyle = TextStyleProp;
export type _t_imageStyle = ImageStyleProp;
