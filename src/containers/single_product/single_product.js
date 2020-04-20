// @flow


/* REACT */
import React, { PureComponent } from "react";
import { View } from "react-native";

/* CUSTOM MODULES */
import {
  BaseText,
  HeaderTitle,
  FastImageComponent
} from "src/components";

import logger from "src/utils/logger";
import { getSingle } from "src/utils/requests";

import {
  getWidthWithScaleFactor,
  getHeightWithScaleFactor,
} from "src/utils/layout";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_navigation } from "src/types";

type _t_defaultProps = {|
  navigation: _t_navigation,
|};

type _t_props = {|
  ..._t_defaultProps,
|};

type _t_response = {|
  id: number,
  name: string,
  uri: string,
  about: string
|};

type _t_state = {|
  data: _t_response,
  id: number
|};


export default class extends PureComponent<_t_props, _t_state> {

  static defaultProps: _t_defaultProps;

  static navigationOptions = () => ({
    headerTitle: <HeaderTitle textKey="single_product:title" />
  });


  state = {
    data: {
      id: 0,
      name: "",
      uri: "",
      about: ""
    },
    id: 0
  }


  componentDidMount() {
    this.getData();
  }


  getData = async (): Promise<void> => {
    try {
      const res = await getSingle(this.state.id);
      this.setState(() => ({ data: res }));
    } catch (err) {
      logger.warn("getData error: ", err);
    }
  }


  // ==================
  // ===== RENDER =====
  // ==================


  render(): Node {
    const { data } = this.state;

    return (
      <View style={styles.mainPage} >
        <FastImageComponent
          width={getWidthWithScaleFactor(150)}
          height={getHeightWithScaleFactor(150)}
          borderRadius={getWidthWithScaleFactor(75)}
          uri={data.uri}
        />

        <BaseText style={styles.title} >
          {data.name}
        </BaseText>

        <View style={styles.about} >
          <BaseText numberOfLines={0} >
            {data.about}
          </BaseText>
        </View>
      </View>
    );
  }
}
