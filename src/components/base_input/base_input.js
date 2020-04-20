// @flow

/* REACT */
import React, { PureComponent } from "react";
import { TextInput, View } from "react-native";

import { Translation } from "react-i18next";

/* CUSTOM MODULES */
import Row from "src/components/common/row";
import BaseText from "src/components/base_text/base_text";
import { COLORS } from "src/configs/styles";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_translate, _t_textStyle } from "src/types";

type _t_props = {|
  autoCapitalize?: "none" | "characters" | "sentences" | "words",
  label: string,
  placeholder: string,
  rightLabel?: string,
  hasError?: boolean,
  keyboardType?: "numeric" | "email-address",
  secureTextEntry?: boolean,
  multiline?: boolean,
  numberOfLines?: number,
  style?: _t_textStyle,
  labelStyle?: _t_textStyle,
  value: string,
  refProp?: { current: null | TextInput },
  onFocus?: () => void,
  onBlur?: () => void,
  errorMessage?: string,
  returnKeyType?: "go" | "next" | "search" | "send" | "done",
  onSubmitEditing?: () => void,
  // FUNCTIONS
  onChangeText: (value: string) => void
|};

export default class extends PureComponent<_t_props> {
  render(): Node {
    const {
      label,
      rightLabel,
      hasError,
      style,
      labelStyle,
      errorMessage,
      refProp,
      placeholder,
      ...restProps
    } = this.props;

    const inputColor = errorMessage && errorMessage.length ? COLORS.ERROR : COLORS.INPUT.TEXT_COLOR;
    const borderColor = errorMessage && errorMessage.length ? COLORS.ERROR : COLORS.INPUT.BORDER_COLOR;

    return (
      <View style={styles.container}>
        <Row>
          <Translation>
            {(t: _t_translate) => (
              <TextInput
                ref={refProp}
                allowFontScaling={false}
                underlineColorAndroid="transparent"
                style={[
                  styles.input,
                  style,
                  hasError && styles.inputWithError,
                  { borderColor }
                ]}
                {...restProps}
                placeholder={t(placeholder)}
              />
            )}
          </Translation>
        </Row>

        <View style={styles.labelsWrapper}>
          {!!label && (
            <BaseText
              style={[styles.labelText, labelStyle, { color: inputColor }]}
              textKey={label}
            />
          )}
          <View />
        </View>

        <Row>
          {!!errorMessage && (
            <BaseText
              style={[styles.labelText, labelStyle, styles.error, { color: inputColor }]}
              textKey={errorMessage}
            />
          )}
        </Row>
      </View>
    );
  }
}
