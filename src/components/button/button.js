// @flow

/* REACT */
import React from "react";
import { TouchableOpacity } from "react-native";

/* CUSTOM MODULES */
import BaseText from "src/components/base_text/base_text";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_viewStyle } from "src/types";

/* CONFIGS */
import { COLORS } from "src/configs/styles";

type _t_props = {|
  text?: string,
  disabled?: boolean,
  reversed?: boolean,
  children?: Node,
  style?: _t_viewStyle,
  // FUNCTIONS
  onPress: () => void
|};

export default (props: _t_props): Node => {
  const {
    text, onPress, disabled, reversed, children, style
  } = props;

  const color = reversed ? COLORS.BUTTON.BACKGROUND_COLOR : COLORS.WHITE;

  const renderInner = () => {
    if (!children) {
      return text ? (
        <BaseText style={[styles.labelText, { color }]} textKey={text} />
      ) : null;
    }
    return children;
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledStyle,
        reversed && styles.reversedStyle,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {renderInner()}
    </TouchableOpacity>
  );
};
