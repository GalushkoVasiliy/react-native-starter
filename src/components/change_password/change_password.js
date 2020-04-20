// @flow


/* REACT */
import React, { Component } from "react";
import {
  TextInput,
  View,
} from "react-native";

// CUSTOM MODULE
import {
  BaseText,
  Row,
  Button,
  BaseInput,
} from "src/components";

import {
  getEmailValidationError,
  getPasswordEqualityValidationError,
} from "src/utils/validate";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";

type _t_props = {|
  onPress: () => void,
  onPressLeft: () => void
|};

type _t_state = {|
  oldPassword: string,
  newPassword: string,
  confirmPassword: string,
  oldPasswordErrorMessage: string,
  passwordErrorMessage: string,
  passwordConfirmErrorMessage: string
|};

export default class extends Component<_t_props, _t_state> {

  passwordInputRef = React.createRef<TextInput>();

  passwordConfirmInputRef = React.createRef<TextInput>();

  state = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    oldPasswordErrorMessage: "",
    passwordErrorMessage: "",
    passwordConfirmErrorMessage: "",
  }

  /**
   * Validate password input
   */
  validateOldPasswordInput = () => {
    this.setState(({ oldPassword }) => ({ oldPasswordErrorMessage: getEmailValidationError(oldPassword) }));
  }

  /**
   * Validate password input
   */
  validatePasswordInput = () => {
    this.setState(({ newPassword }) => ({ passwordErrorMessage: getEmailValidationError(newPassword) }));
  }

  /**
   * Validate password confirm
   */
  validatePasswordConfirmInput = () => {
    this.setState(
      ({ newPassword, confirmPassword }) => ({
        passwordConfirmErrorMessage: getPasswordEqualityValidationError(newPassword, confirmPassword)
      })
    );
  }

  save = () => {
    this.validatePasswordConfirmInput();
    this.validatePasswordInput();
    this.validateOldPasswordInput();

    setTimeout(() => {
      const {
        passwordConfirmErrorMessage,
        passwordErrorMessage,
        oldPasswordErrorMessage
      } = this.state;

      if (!passwordErrorMessage && !passwordConfirmErrorMessage && !oldPasswordErrorMessage) {
        this.clearPasswords();
        this.props.onPress();
      }
    }, 1000);
  }

  cancel = () => {
    this.clearPasswords();
    this.props.onPressLeft();
  }

  clearPasswords = () => {
    this.setState(() => ({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      oldPasswordErrorMessage: "",
      passwordErrorMessage: "",
      passwordConfirmErrorMessage: "",
    }));
  }


  // ==================
  // ===== RENDER =====
  // ==================


  render(): Node {
    const {
      oldPassword,
      newPassword,
      confirmPassword
    } = this.state;

    return (
      <View style={styles.wrapperText}>
        <View>
          <Row style={styles.viewWrapper} >
            <BaseInput
              onFocus={() => { this.setState(() => ({ passwordErrorMessage: "" })); }}
              onBlur={this.validateOldPasswordInput}
              label="profile:old_password_title"
              value={oldPassword}
              errorMessage={this.state.oldPasswordErrorMessage}
              autoCapitalize="none"
              secureTextEntry
              placeholder="profile:old_password_placeholder"
              onChangeText={(value) => { this.setState(() => ({ oldPassword: value })); }}
              onSubmitEditing={() => {
                this.validateOldPasswordInput();
                if (this.passwordInputRef && this.passwordInputRef.current) {
                  this.passwordInputRef.current.focus();
                }
              }}
            />
          </Row>

          <BaseText numberOfLines={0} style={styles.aboutPassword} textKey="profile:change_password_text" />

          <Row style={styles.viewWrapper} >
            <BaseInput
              onFocus={() => { this.setState(() => ({ passwordErrorMessage: "" })); }}
              onBlur={this.validatePasswordInput}
              errorMessage={this.state.passwordErrorMessage}
              label="profile:new_password_title"
              value={newPassword}
              autoCapitalize="none"
              secureTextEntry
              refProp={this.passwordInputRef}
              placeholder="profile:new_password_placeholder"
              onChangeText={(value) => { this.setState(() => ({ newPassword: value })); }}
              onSubmitEditing={() => {
                if (this.passwordConfirmInputRef && this.passwordConfirmInputRef.current) {
                  this.passwordConfirmInputRef.current.focus();
                }
              }}
            />
          </Row>
          <Row style={styles.viewWrapper} >
            <BaseInput
              onFocus={() => { this.setState(() => ({ passwordConfirmErrorMessage: "" })); }}
              refProp={this.passwordConfirmInputRef}
              onBlur={this.validatePasswordConfirmInput}
              errorMessage={this.state.passwordConfirmErrorMessage}
              label="profile:confirm_password_title"
              value={confirmPassword}
              autoCapitalize="none"
              secureTextEntry
              placeholder="profile:confirm_password_placeholder"
              onChangeText={(value) => { this.setState(() => ({ confirmPassword: value })); }}
            />
          </Row>
        </View>

        <View style={styles.wrapperButtons}>
          <Row style={styles.wrapperBtn}>
            <Button
              text="profile:save_password_button"
              onPress={() => { this.save(); }}
            />
          </Row>
        </View>
      </View>
    );
  }
}
