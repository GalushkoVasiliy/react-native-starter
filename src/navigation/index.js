// @flow


/* REACT */
import React, { PureComponent } from "react";

/* MODULES */
import SplashScreen from "react-native-splash-screen";
import { createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { createBottomTabNavigator } from "react-navigation-tabs";

/* CUSTOM MODULES */
import Login from "src/containers/login/login";
import SignUp from "src/containers/sign_up/sign_up";
import ForgotPassword from "src/containers/forgot_password/forgot_password";
import ResetPassword from "src/containers/reset_password/reset_password";
import MainPage from "src/containers/main_page/main_page";
import Profile from "src/containers/profile/profile";
import ProductList from "src/containers/product_list/product_list";
import SingleProduct from "src/containers/single_product/single_product";

import { initStackNavigator } from "./navigation_helpers";

/* TYPES */
import type { Node } from "react";

type _t_props = {||};


export default class extends PureComponent<_t_props> {

  componentDidMount() {
    SplashScreen.hide();
  }

  // ==================
  // ===== RENDER =====
  // ==================

  render(): Node {
    const TabNavigator = createBottomTabNavigator({
      Main: initStackNavigator(
        {
          MainPage: { screen: MainPage, key: "MainPage" },
          Profile: { screen: Profile, key: "Profile" },
        },
        {
          initialRouteName: "MainPage"
        }
      ),
      ProductListSwitch: initStackNavigator(
        {
          ProductList: { screen: ProductList, key: "ProductList" },
          SingleProduct: { screen: SingleProduct, key: "SingleProduct" },
        },
        {
          initialRouteName: "ProductList"
        }
      ),
    });

    const SwitchNavigator = createAnimatedSwitchNavigator({
      AuthSwitch: initStackNavigator(
        {
          Login: { screen: Login, key: "Login" },
          SignUp: { screen: SignUp, key: "SignUp" },
          ForgotPassword: { screen: ForgotPassword, key: "ForgotPassword" },
          ResetPassword: { screen: ResetPassword, key: "ResetPassword" },
        },
        {
          initialRouteName: "Login"
        }
      ),
      MainSwitch: TabNavigator,
    }, {
      initialRouteName: "AuthSwitch",

      // TODO(Anyone): will show splash till load data from storage !
      // initialRouteName: this.props.isLoadedFromStorage && this.props.doesUserAuthenticated()
      //   ? "MainSwitch"
      //   : "AuthSwitch"
    });

    const RootNavigator = createAppContainer(SwitchNavigator);

    return <RootNavigator />;
  }
}
