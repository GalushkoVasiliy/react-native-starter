// @flow


/* REACT */
import React, { PureComponent } from "react";
import { ScrollView } from "react-native";

/* CUSTOM MODULES */
import {
  BaseText,
  BaseInput,
  Button,
  HeaderTitle,
  KeyboardWrapper,
  Row,
} from "src/components";

import { getEmailValidationError } from "src/utils/validate";

import { forgotPassword } from "src/utils/requests";

import logger from "src/utils/logger";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_navigation } from "src/types";

type _t_defaultProps = {|
  navigation: _t_navigation,
|};

type _t_props = {|
  ..._t_defaultProps
|};

type _t_state = {|
  email: string,
  emailErrorMessage: string,
|};


export default class extends PureComponent<_t_props, _t_state> {

  static defaultProps: _t_defaultProps;

  static navigationOptions = () => ({
    headerTitle: <HeaderTitle textKey="forgot_password:title" />
  });


  state = {
    email: "",
    emailErrorMessage: "",
  };


  /**
   * Go to page
   *
   * @param {string} route - route to navigate to
   */
  goToPage = (route: string): void => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({
        routeName: route,
        key: route,
      });
    }
  }


  /**
   * Reset password handler
   */
  sendRequestForEmail = (): void => {
    // @Note: if have error message - show it
    const emailErrorMessage = getEmailValidationError(this.state.email);
    if (emailErrorMessage) {
      this.setState(() => ({ emailErrorMessage }));
      return;
    }

    forgotPassword()
      .then((data) => {
        logger.log("Email send", data);
        this.goToPage("Login");
      });
  }


  /**
   * Validate email input
   */
  validateEmailInput = (): void => {
    this.setState(({ email }) => ({ emailErrorMessage: getEmailValidationError(email) }));
  }


  // ==================
  // ===== RENDER =====
  // ==================


  render(): Node {

    return (
      <KeyboardWrapper style={styles.content} >
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
          <BaseText style={styles.title} textKey="forgot_password:title" />

          <Row style={styles.viewWrapper} >
            <BaseInput
              value={this.state.email}
              placeholder="forgot_password:email_placeholder"
              label="forgot_password:email_title"
              errorMessage={this.state.emailErrorMessage}
              // FUNCTIONS
              onFocus={() => { this.setState(() => ({ emailErrorMessage: "" })); }}
              onBlur={this.validateEmailInput}
              onChangeText={(value) => { this.setState(() => ({ email: value.trim() })); }}
            />
          </Row>

          <Row style={styles.viewWrapper} >
            <Button
              text="forgot_password:btn_reset_password"
              onPress={this.sendRequestForEmail}
            />
          </Row>
        </ScrollView>
      </KeyboardWrapper>
    );
  }
}
