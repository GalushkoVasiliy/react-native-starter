// @flow


/* REACT */
import React from "react";

import { View } from "react-native";

import { FastImageComponent, BaseText } from "src/components";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

/* MODULES */

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";

import type { _t_viewStyle, _t_textStyle } from "src/types";

type _t_props = {|
  style?: _t_viewStyle,
  styleTextTitle?: _t_textStyle,
  styleTextAbout?: _t_textStyle,
  image: string,
  title: string,
  about: string,
  imgHeight?: number,
  imgWidth?: number
|};


export default (props: _t_props): Node => {

  const {
    style,
    styleTextTitle,
    styleTextAbout,
    image,
    title,
    about,
    imgHeight,
    imgWidth
  } = props;

  return (
    <View
      style={[
        styles.wrapper,
        ...(Array.isArray(style) ? style : [style])
      ]}
    >
      <View style={styles.image}>
        <FastImageComponent height={imgHeight || 75} width={imgWidth || 75} uri={image} />
      </View>
      <View style={styles.about}>
        <BaseText style={[styleTextTitle]}>
          { title }
        </BaseText>
        <BaseText style={[styleTextAbout]}>
          { about }
        </BaseText>
      </View>
      <View style={styles.iconWrapper}>
        <FontAwesome5 style={styles.icon} name="angle-right" />
      </View>
    </View>
  );
};
