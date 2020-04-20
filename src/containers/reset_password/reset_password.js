// @flow


/* REACT */
import React, { PureComponent } from "react";
import { ScrollView, TextInput } from "react-native";

/* CUSTOM MODULES */
import {
  BaseText,
  BaseInput,
  Button,
  KeyboardWrapper,
  Row,
} from "src/components";

import {
  getPasswordValidationError,
  getPasswordEqualityValidationError,
} from "src/utils/validate";

import { resetPassword } from "src/utils/requests";

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
  ..._t_defaultProps,
|};

type _t_state = {|
  password: string,
  confirmPassword: string,
  passwordErrorMessage: string,
  passwordConfirmErrorMessage: string,
|};


export default class extends PureComponent<_t_props, _t_state> {

  static defaultProps: _t_defaultProps;

  static navigationOptions = () => ({
    header: null,
  });


  passwordConfirmInputRef = React.createRef<TextInput>();


  state = {
    password: "",
    confirmPassword: "",
    passwordErrorMessage: "",
    passwordConfirmErrorMessage: "",
  };


  /**
   * Go to page
   *
   * @route {string} - route to navigate to
   */
  goToPage = (routeName: string): void => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({
        routeName,
        key: routeName,
      });
    }
  }


  /**
   * Validate password input
   */
  validatePasswordInput = () => {
    this.setState(({ password }) => ({ passwordErrorMessage: getPasswordValidationError(password) }));
  }


  /**
   * Validate password confirm
   */
  validatePasswordConfirmInput = () => {
    this.setState(({ password, confirmPassword }) => ({
      passwordConfirmErrorMessage: getPasswordEqualityValidationError(password, confirmPassword)
    }));
  }


  /**
   * Send request for change password
   */
  resetPassword = (): void => {
    const { password, confirmPassword } = this.state;
    if (!getPasswordValidationError(password) && !getPasswordEqualityValidationError(password, confirmPassword)) {
      resetPassword()
        .then((data) => {
          logger.warn("Reset password action!", data);
          this.goToPage("Login");
        });
    } else {
      this.validatePasswordConfirmInput();
      this.validatePasswordInput();
    }
  }


  // ==================
  // ===== RENDER =====
  // ==================


  render(): Node {
    return (
      <KeyboardWrapper style={styles.content} >
        <ScrollView
          contentContainerStyle={styles.scrollToBottom}
          showsVerticalScrollIndicator={false}
        >
          <BaseText
            style={styles.title}
            textKey="reset_password:title"
          />

          <Row style={styles.viewWrapper} >
            <BaseInput
              value={this.state.password}
              placeholder="reset_password:password_placeholder"
              label="reset_password:password_title"
              secureTextEntry
              errorMessage={this.state.passwordErrorMessage}
              // FUNCTIONS
              onFocus={() => { this.setState(() => ({ passwordErrorMessage: "" })); }}
              onBlur={this.validatePasswordInput}
              onChangeText={(value) => { this.setState(() => ({ password: value.trim() })); }}
              onSubmitEditing={() => {
                if (this.passwordConfirmInputRef && this.passwordConfirmInputRef.current) {
                  this.passwordConfirmInputRef.current.focus();
                }
              }}
            />
          </Row>

          <Row style={styles.viewWrapper} >
            <BaseInput
              refProp={this.passwordConfirmInputRef}
              value={this.state.confirmPassword}
              placeholder="reset_password:password_confirm_placeholder"
              label="reset_password:password_confirm_title"
              returnKeyType="done"
              secureTextEntry
              errorMessage={this.state.passwordConfirmErrorMessage}
              // FUNCTIONS
              onFocus={() => { this.setState(() => ({ passwordConfirmErrorMessage: "" })); }}
              onBlur={this.validatePasswordConfirmInput}
              onChangeText={(value) => {
                this.setState(() => ({ confirmPassword: value.trim() }));
              }}
            />
          </Row>

          <Row style={styles.viewWrapper} >
            <Button
              text="reset_password:btn_reset_password"
              onPress={this.resetPassword}
            />
          </Row>
        </ScrollView>
      </KeyboardWrapper>
    );
  }
}
