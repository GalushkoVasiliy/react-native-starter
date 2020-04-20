// @flow


/* REACT */
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";

/* MODULES */
import { ifIphoneX } from "react-native-iphone-x-helper";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_viewStyle } from "src/types";

type _t_props = {|
  style?: _t_viewStyle,
  children?: Node,
  enabled?: boolean
|};

const Wrapper = Platform.select({
  ios: KeyboardAvoidingView,
  android: View
});

const keyboardVerticalOffset = {
  keyboardVerticalOffset: ifIphoneX(35, 10),
};


export default (props: _t_props) => {
  const { enabled = true } = props;

  return (
    <Wrapper
      {...keyboardVerticalOffset}
      style={[styles.container, props.style]}
      behavior="padding"
      enabled={enabled}
    >
      {props.children}
    </Wrapper>
  );
};
