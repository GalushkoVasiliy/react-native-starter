// @flow


/* REACT */
import React, { PureComponent } from "react";
import {
  TouchableOpacity,
  FlatList,
  View,
} from "react-native";

/* CUSTOM MODULES */
import { HeaderTitle, Card } from "src/components";
import logger from "src/utils/logger";
import { getList } from "src/utils/requests";

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
  about: string,
|};

type _t_state = {|
  array: _t_response[],
  refresh: boolean,
|};


export default class extends PureComponent<_t_props, _t_state> {

  static defaultProps: _t_defaultProps;

  static navigationOptions = () => ({
    headerLeft: null,
    headerTitle: <HeaderTitle textKey="product_list:main_page" />
  });


  state = {
    array: [],
    refresh: false
  }


  componentDidMount() { this.getData(); }


  /**
   * Function request for data list from list.js file
   */
  getData = async (): Promise<*> => {
    try {
      const res = await getList();
      this.setState(() => ({ array: res }));
    } catch {
      logger.warn("error request");
    }
  }


  handleRefresh = () => {
    this.setState(() => ({ array: [] }));
    this.getData();
  }


  /**
   * Go to page
   *
   * @route {string} routeName - route to navigate to
   */
  goToPage = (routeName: string, id: number) => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate(routeName, { id });
    }
  }


  // ==================
  // ===== RENDER =====
  // ==================


  render(): Node {
    return (
      <View style={styles.pageWrapper} >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.array}
          refreshing={this.state.refresh}
          keyExtractor={(item) => `${item.id}`}
          onRefresh={this.handleRefresh}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { this.goToPage("SingleProduct", item.id); }}>
              <Card
                image={item.uri}
                title={item.name}
                about={item.about}
                imgHeight={getHeightWithScaleFactor(50)}
                imgWidth={getWidthWithScaleFactor(50)}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
