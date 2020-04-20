// @flow


/* REACT */
import React, { type Node } from "react";
import { View } from "react-native";

import BaseText from "src/components/base_text/base_text";

import CONFIG from "src/configs/main_config";

/* STYLES */
import styles from "./styles";


export default (): Node => (CONFIG.ENV !== "production" ? (
  <View style={styles.tape}>
    <BaseText style={styles.title}>
      {
        CONFIG.ENV
      }
    </BaseText>
  </View>
) : null);
