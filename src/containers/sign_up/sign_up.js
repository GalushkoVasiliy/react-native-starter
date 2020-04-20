// @flow


/* REACT */
import React, { PureComponent } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

/* CUSTOM MODULES */
import {
  BaseInput,
  BaseText,
  Button,
  HeaderTitle,
  KeyboardWrapper,
  Row,
} from "src/components";

import {
  getPasswordValidationError,
  getEmailValidationError,
  getPasswordEqualityValidationError,
} from "src/utils/validate";

import logger from "src/utils/logger";

import { signUp } from "src/utils/requests";

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
  email: string,
  password: string,
  confirmPassword: string,
  emailErrorMessage: string,
  passwordErrorMessage: string,
  passwordConfirmErrorMessage: string,
|};


export default class extends PureComponent<_t_props, _t_state> {

  static defaultProps: _t_defaultProps;

  static navigationOptions = () => ({
    headerTitle: <HeaderTitle textKey="sign_up:title" />
  });


  passwordInputRef = React.createRef<TextInput>();

  passwordConfirmInputRef = React.createRef<TextInput>();


  state = {
    email: "",
    password: "",
    confirmPassword: "",
    emailErrorMessage: "",
    passwordErrorMessage: "",
    passwordConfirmErrorMessage: "",
  }


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
   * Go back handler
   */
  goBack = (): void => {
    const { navigation } = this.props;
    if (navigation) { navigation.goBack(); }
  }


  /**
   * Validate email input
   */
  validateEmailInput = () => {
    this.setState(({ email }) => ({ emailErrorMessage: getEmailValidationError(email) }));
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
    this.setState(
      ({ password, confirmPassword }) => (
        { passwordConfirmErrorMessage: getPasswordEqualityValidationError(password, confirmPassword) }
      )
    );
  }


  /**
   * Signup handler
   */
  signUp = (): void => {
    const { email, password, confirmPassword } = this.state;
    if (!getEmailValidationError(email).length
        && !getPasswordValidationError(password).length
        && !getPasswordEqualityValidationError(password, confirmPassword).length) {
      signUp()
        .then((data) => {
          logger.log("Sign up action", data);
          this.goToPage("MainPage");
        });
    } else {
      this.validatePasswordConfirmInput();
      this.validateEmailInput();
      this.validatePasswordInput();
    }
  }


  // ==================
  // ===== RENDER =====
  // ==================


  render(): Node {

    return (
      <KeyboardWrapper style={styles.container} >
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
          <Row style={styles.viewWrapper} >
            <BaseInput
              value={this.state.email}
              placeholder="login:email_placeholder"
              label="login:email_title"
              autoCapitalize="none"
              returnKeyType="next"
              errorMessage={this.state.emailErrorMessage}
              // FUNCTIONS
              onFocus={() => {
                this.setState(() => ({ emailErrorMessage: "" }));
              }}
              onBlur={this.validateEmailInput}
              onChangeText={(value) => {
                this.setState(() => ({ email: value.trim() }));
              }}
              onSubmitEditing={() => {
                if (this.passwordInputRef && this.passwordInputRef.current) {
                  this.passwordInputRef.current.focus();
                }
              }}
            />
          </Row>

          <Row style={styles.viewWrapper} >
            <BaseInput
              refProp={this.passwordInputRef}
              value={this.state.password}
              placeholder="sign_up:password_placeholder"
              label="sign_up:password_title"
              returnKeyType="next"
              secureTextEntry
              errorMessage={this.state.passwordErrorMessage}
              // FUNCTIONS
              onFocus={() => {
                this.setState(() => ({ passwordErrorMessage: "" }));
              }}
              onBlur={this.validatePasswordInput}
              onChangeText={(value) => {
                this.setState(() => ({ password: value.trim() }));
              }}
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
              placeholder="sign_up:password_confirm_placeholder"
              label="sign_up:password_confirm_title"
              returnKeyType="done"
              secureTextEntry
              errorMessage={this.state.passwordConfirmErrorMessage}
              // FUNCTIONS
              onFocus={() => {
                this.setState(() => ({ passwordConfirmErrorMessage: "" }));
              }}
              onBlur={this.validatePasswordConfirmInput}
              onChangeText={(value) => {
                this.setState(() => ({ confirmPassword: value.trim() }));
              }}
            />
          </Row>

          <Row style={styles.viewWrapper} >
            <Button
              text="login:btn_sign_up"
              onPress={this.signUp}
            />
          </Row>

          <Row style={styles.textWrapper} >
            <BaseText textKey="sign_up:link_btn" />

            <TouchableOpacity onPress={this.goBack} >
              <BaseText
                textKey="sign_up:btn_sign_in"
                style={styles.link}
              />
            </TouchableOpacity>
          </Row>
        </ScrollView>
      </KeyboardWrapper>
    );
  }
}
