// @flow


/* REACT */
import React, { PureComponent } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

/* CUSTOM MODULES */
import {
  BaseInput,
  BaseText,
  Button,
  Checkbox,
  HeaderTitle,
  KeyboardWrapper,
} from "src/components";

import { getPasswordValidationError, getEmailValidationError } from "src/utils/validate";

import { login } from "src/utils/requests";

import logger from "src/utils/logger";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_navigation } from "src/types";

type _t_defaultProps = {|
  navigation: _t_navigation
|};

type _t_props = {|
  ..._t_defaultProps
|};

type _t_state = {|
  email: string,
  password: string,
  emailErrorMessage: string,
  passwordErrorMessage: string,
  isChecked: boolean
|};


export default class extends PureComponent<_t_props, _t_state> {

  static defaultProps: _t_defaultProps;

  static navigationOptions = () => ({
    headerLeft: null,
    headerTitle: <HeaderTitle textKey="login:title" />,
    headerRight: null
  });


  passwordInputRef = React.createRef<TextInput>();


  state = {
    email: "",
    password: "",
    emailErrorMessage: "",
    passwordErrorMessage: "",
    isChecked: false
  };


  /**
   * Go to page
   *
   * @route {string} routeName - route to navigate to
   */
  goToPage = (routeName: string) => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({ routeName });
    }
  };


  /**
   * Login handler
   */
  login = () => {
    const { email, password } = this.state;
    if (!getEmailValidationError(email).length && !getPasswordValidationError(password).length) {
      login().then((data) => {
        logger.log("Login action", data);
        this.goToPage("MainPage");
      });
    } else {
      this.validateEmailInput();
      this.validatePasswordInput();
    }
  };


  /**
   * Checkbox handler
   */
  check = () => {
    this.setState(({ isChecked }) => ({ isChecked: !isChecked }));
  };


  /**
   * Validate email input
   */
  validateEmailInput = () => {
    this.setState(({ email }) => ({ emailErrorMessage: getEmailValidationError(email) }));
  };


  /**
   * Validate password input
   */
  validatePasswordInput = () => {
    this.setState(({ password }) => ({
      passwordErrorMessage: getPasswordValidationError(password)
    }));
  };


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
          <View style={styles.viewWrapper} >
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
          </View>

          <View style={styles.viewWrapper} >
            <BaseInput
              refProp={this.passwordInputRef}
              value={this.state.password}
              placeholder="login:password_placeholder"
              label="login:password_title"
              secureTextEntry={!this.state.isChecked}
              errorMessage={this.state.passwordErrorMessage}
              // FUNCTIONS
              onFocus={() => {
                this.setState(() => ({ passwordErrorMessage: "" }));
              }}
              onBlur={this.validatePasswordInput}
              onChangeText={(value) => {
                this.setState(() => ({ password: value.trim() }));
              }}
            />
          </View>

          <View style={styles.rowWrapper} >
            <Checkbox
              text="login:show_password"
              isChecked={this.state.isChecked}
              onPress={this.check}
            />
            <TouchableOpacity
              onPress={() => {
                this.goToPage("ForgotPassword");
              }}
            >
              <BaseText
                style={styles.link}
                textKey="login:btn_forgot_password"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewWrapper} >
            <Button
              text="login:btn_sign_in"
              onPress={this.login}
            />
          </View>

          <View style={styles.viewWrapper} >
            <Button
              reversed
              text="login:btn_sign_up"
              onPress={() => {
                this.goToPage("SignUp");
              }}
            />
          </View>
        </ScrollView>
      </KeyboardWrapper>
    );
  }
}
