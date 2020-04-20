// @flow

/* REACT */
import React, { PureComponent } from "react";
import { View, ScrollView } from "react-native";

/* CUSTOM MODULES */
import { setLanguage } from "src/i18n/i18n";

import {
  KeyboardWrapper,
  Row,
  BaseInput,
  Button,
  Dropdown,
} from "src/components";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_navigation } from "src/types";

type _t_defaultProps = {|
  navigation: _t_navigation
|};

type _t_userInfo = {|
  name: string,
  email: string,
  lang: number
|}

type _t_props = {|
  ..._t_defaultProps,
  name: string,
  email: string,
  lang: number,
  onPress: (data: _t_userInfo) => void,
|};

type _t_state = {|
  name: string,
  email: string,
  lang: number
|};

export default class extends PureComponent<_t_props, _t_state> {

  static defaultProps: _t_defaultProps;

  state = {
    name: this.props.name,
    email: this.props.email,
    lang: this.props.lang,
  };

  saveData = () => {

    const { onPress } = this.props;
    const { name, email, lang } = this.state;
    const data = {
      name,
      email,
      lang
    };

    onPress(data);

  }

  // ==================
  // ===== RENDER =====
  // ==================

  render(): Node {
    const data = [
      {
        label: "languagesLabels:en",
        value: "en"
      },
      {
        label: "languagesLabels:ru",
        value: "ru"
      }
    ];

    return (
      <KeyboardWrapper style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollToBottom}
          showsVerticalScrollIndicator={false}
        >

          <Row style={styles.viewWrapper}>
            <BaseInput
              label="profile:email_title"
              value={this.state.email}
              autoCapitalize="none"
              placeholder="profile:email_placeholder"
              onChangeText={(value) => {
                this.setState(() => ({ email: value }));
              }}
            />
          </Row>

          <Row style={styles.viewWrapper}>
            <BaseInput
              label="profile:name_title"
              value={this.state.name}
              autoCapitalize="none"
              placeholder="profile:name_placeholder"
              onChangeText={(value) => {
                this.setState(() => ({ name: value }));
              }}
            />
          </Row>

          <Row style={styles.viewWrapper}>
            <Dropdown
              label="profile:lng_title"
              selected={this.state.lang}
              data={data}
              onChangeText={(value) => {
                setLanguage(value);
              }}
              onPressValue={(index) => {
                this.setState(() => ({ lang: index }));
              }}
            />
          </Row>

          <View style={styles.btnWrapper}>
            <Button text="common:save" onPress={() => { this.saveData(); }} />
          </View>

        </ScrollView>
      </KeyboardWrapper>
    );
  }
}
