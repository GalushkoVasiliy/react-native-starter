// @flow


/* REACT */
import React, { PureComponent } from "react";
import { View } from "react-native";

/* CUSTOM MODULES */
import { Button, HeaderTitle } from "src/components";

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


export default class extends PureComponent<_t_props> {

  static defaultProps: _t_defaultProps;

  static navigationOptions = () => ({
    headerLeft: null,
    headerTitle: <HeaderTitle textKey="main_page:main_page" />
  });


  /**
   * Go to profile
   */
  goToProfile = (): void => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({
        routeName: "Profile",
        key: "Profile",
      });
    }
  }


  /**
   * Logout
   */
  logout = (): void => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({
        routeName: "Login",
        key: "Login",
      });
    }
  }


  // ==================
  // ===== RENDER =====
  // ==================


  render(): Node {
    return (
      <View style={styles.mainPage} >
        <Button
          text="main_page:go_to_profile"
          onPress={this.goToProfile}
        />

        <View style={styles.buttonWrapper} >
          <Button
            text="main_page:logout"
            onPress={this.logout}
          />
        </View>
      </View>
    );
  }
}
