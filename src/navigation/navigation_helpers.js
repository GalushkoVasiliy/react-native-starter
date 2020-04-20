// @flow


/* MODULES */
import { createStackNavigator } from "react-navigation-stack";

/* CUSTOM MODULES */
// import BackImage from "src/components/common/backImage";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { StackNavigatorConfig } from "react-navigation";


/**
 * Init stack navigator
 *
 * @param {Object} routes - object with routes
 * @param {StackNavigatorConfig} stackConfig - stack navigator config
 */
export function initStackNavigator(routes: Object, stackConfig?: StackNavigatorConfig = {}) {

  const { defaultNavigationOptions, ...restConfig } = stackConfig;

  return createStackNavigator(routes, {
    cardStyle: styles.cardStyle,
    cardShadowEnabled: false,
    defaultNavigationOptions: {
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerBackTitle: null,
      // headerBackImage: BackImage,
      headerLeftContainerStyle: styles.headerLeftContainer,
      headerForceInset: { top: "never", bottom: "never" },
      ...(defaultNavigationOptions || {})
    },
    ...(restConfig || {})
  });
}
