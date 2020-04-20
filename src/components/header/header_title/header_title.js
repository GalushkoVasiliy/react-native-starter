// @flow


/* REACT */
import React, { type Node } from "react";

import BaseText from "src/components/base_text/base_text";

/* STYLES */
import styles from "./styles";

type _t_props = {|
  textKey: string,
|};


export default (props: _t_props): Node => {
  const {
    textKey,
  } = props;

  return (
    <BaseText
      style={styles.title}
      textKey={textKey}
    />
  );
};
