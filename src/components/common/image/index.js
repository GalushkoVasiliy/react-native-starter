// @flow

/* REACT */
import * as React from "react";
import { Image } from "react-native";

/* TYPES */
import type { Node } from "react";
import type { ImageURISource } from "react-native/Libraries/Image/ImageSource";
import type { _t_imageStyle } from "src/types";


type _t_props = {|
  source: ImageURISource | number | string,
  style?: _t_imageStyle,
|};


export default (props: _t_props): Node => <Image {...props} />;
