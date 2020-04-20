// @flow


/* REACT */
import React from "react";

/* MODULES */
import FastImage from "react-native-fast-image";

/* TYPES */
import type { Node } from "react";

type _t_props = {|
  width: number,
  height: number,
  uri: string,
  resizeMode?: "contain" | "cover" | "stretch" | "center",
  borderRadius?: number,
|};


export default (props: _t_props): Node => {

  const {
    width,
    height,
    borderRadius,
    uri,
    resizeMode,
  } = props;

  return (
    <FastImage
      style={{
        height, width, borderRadius
      }}
      source={{ uri }}
      resizeMode={resizeMode || FastImage.resizeMode.contain}
    />
  );
};
