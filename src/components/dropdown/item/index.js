// @flow

import React from "react";

/* CUSTOM MODULES */
import Button from "src/components/button/button";
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_viewStyle } from "src/types";

type _t_props = {|
  index: number,
  style?: _t_viewStyle,
  children: Node,
  // FUNCTIONS
  onPress: (index: number) => void
|};

export default (props: _t_props): Node => {
  const {
    children, style, index, onPress
  } = props;

  return (
    <Button
      style={[styles.item].concat(style)}
      onPress={() => {
        onPress(index);
      }}
      reversed
    >
      {children}
    </Button>
  );
};
