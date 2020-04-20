// @flow


/* REACT */
import React, { type Node } from "react";
import { Text } from "react-native";

/* MODULES */
import { Translation } from "react-i18next";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { _t_translate, _t_textStyle } from "src/types";

type _t_props = {|
  children?: string,
  textKey?: string,
  style ?: _t_textStyle,
  isTitle?: boolean,
  numberOfLines?: number,
|};


export default (props: _t_props): Node => {
  const {
    style,
    children,
    isTitle,
    textKey,
    ...restProps
  } = props;

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={1}
      ellipsizeMode="tail"
      {...restProps}
      style={[
        styles.text,
        isTitle && styles.title,
        ...(Array.isArray(style) ? style : [style])
      ]}
    >
      {
        textKey
          ? (
            <Translation>
              {(t: _t_translate) => t(textKey)}
            </Translation>
          )
          : children
      }
    </Text>
  );
};
