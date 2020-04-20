// @flow

/* REACT */
import React from "react";
import { View } from "react-native";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_viewStyle } from "src/types";


type _t_props = {|
  children?: Node,
  style?: _t_viewStyle,
|};


export default (props: _t_props): Node => {
  const { children, style, ...restProps } = props;

  return (
    <View
      style={[
        styles.row,
        style,
      ]}
      {...restProps}
    >
      {children}
    </View>
  );
};
