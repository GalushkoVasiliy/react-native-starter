// @flow


/* REACT */
import React, { PureComponent } from "react";
import {
  ActivityIndicator,
  Modal,
  View
} from "react-native";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";

type _t_props = {|
  isLoaderVisible: boolean,
|};


export default class extends PureComponent<_t_props> {
  render(): Node {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.isLoaderVisible}
        onRequestClose={() => { }}
      >
        <View style={styles.content} >
          <ActivityIndicator />
        </View>
      </Modal>
    );
  }
}
