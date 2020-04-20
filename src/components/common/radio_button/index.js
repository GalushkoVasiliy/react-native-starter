// @flow

/* REACT */
import React from "react";
import { TouchableOpacity } from "react-native";

/* CUSTOM MODULES */
import ICON_TYPES from "src/components/common/icon";

/* CONFIGS */
import COLORS from "src/configs/styles/colors";


type _t_props = {|
  value: boolean,
  disabled?: boolean,
  onPress?: Function,
|};

const IconComponent = ICON_TYPES.material;


export default (props: _t_props) => {
  const {
    onPress,
    value,
    disabled,
  } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress && onPress()}
    >
      <IconComponent
        name={value ? "radio-button-checked" : "radio-button-unchecked"}
        size={16}
        color={value ? COLORS.TURQUOISE : COLORS.BLACK}
      />
    </TouchableOpacity>
  );
};
