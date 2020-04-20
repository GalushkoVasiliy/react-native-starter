// @flow

/* REACT */
import React, { PureComponent } from "react";
import { TouchableOpacity, ScrollView } from "react-native";

/* MODULES */
import { connectActionSheet, ActionSheetOptions } from "@expo/react-native-action-sheet";
import ImagePicker from "react-native-image-crop-picker";

/* CUSTOM MODULES */
import i18n from "i18next";

import {
  BaseText,
  KeyboardWrapper,
  Row,
  HeaderTitle,
  FastImageComponent,
  ProfileComponent,
  ChangePassword
} from "src/components";

import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor
} from "src/utils/layout";

import logger from "src/utils/logger";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_navigation, _t_imagePickerFile } from "src/types";

type _t_defaultProps = {|
  showActionSheetWithOptions: (options: ActionSheetOptions, callback: (index: number) => Promise<void>) => void,
  navigation: _t_navigation
|};

type _t_props = {|
  ..._t_defaultProps
|};

type _t_state = {|
  name: string,
  email: string,
  lang: number,
  photo: string,
  icon: string,
  show: boolean
|};

type _t_data = {|
  name: string,
  email: string,
  lang: number
|}


const PICKER_PARAMS = {
  width: 300,
  height: 300,
  cropping: true,
  includeBase64: true,
};


export default
@connectActionSheet
class extends PureComponent<_t_props, _t_state> {

  static navigationOptions = () => ({
    headerTitle: <HeaderTitle textKey="profile:profile" />
  });

  static defaultProps: _t_defaultProps;

  state = {
    name: "",
    email: "",
    lang: 0,
    show: true,
    // TODO(anybody): change this to vector icons !
    photo:
      "http://beauty73.org/wp-content/uploads/2018/11/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg",
    icon: "http://s1.iconbird.com/ico/2013/11/504/w128h1281385326444camera.png"
  };


  /**
  * Change photo
  */
  changePhoto = async (): Promise<void> => {
    this.props.showActionSheetWithOptions(
      {
        options: [
          i18n.t("action_sheet:take_picture"),
          i18n.t("action_sheet:gallery"),
          i18n.t("common:cancel")
        ],
        cancelButtonIndex: 2,
      },
      async (buttonIndex: number) => {
        try {
          let avatar;

          if (!buttonIndex) {
            avatar = await ImagePicker.openCamera(PICKER_PARAMS);
          }

          if (buttonIndex === 1) {
            avatar = await ImagePicker.openPicker(PICKER_PARAMS);
          }

          if (avatar) {
            const imagePickerFile: _t_imagePickerFile = {
              type: avatar.mime,
              name: avatar.path.split("/").pop(),
              size: avatar.size,
              uri: avatar.path,
              path: avatar.path,
            };

            logger.warn(`Data to send to backend `, imagePickerFile);

            ImagePicker.clean();
          }
        } catch (error) {
          logger.warn(`Error when try get photo`, error);
        }
      },
    );
  };

  save = (data: _t_data) => {
    this.setState(() => ({
      name: data.name,
      email: data.email,
      lang: data.lang
    }));

  }

  // ==================
  // ===== RENDER =====
  // ==================

  render(): Node {

    return (
      <KeyboardWrapper style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollToBottom}
          showsVerticalScrollIndicator={false}
        >
          <Row style={[styles.viewWrapper, styles.pictureWrapper]} >
            <FastImageComponent
              width={getWidthWithScaleFactor(72)}
              height={getHeightWithScaleFactor(72)}
              borderRadius={getHeightWithScaleFactor(35)}
              uri={this.state.photo}
            />
          </Row>

          <Row style={[styles.pictureWrapperIcon]}>
            <TouchableOpacity onPress={this.changePhoto}>
              <FastImageComponent
                width={getWidthWithScaleFactor(38)}
                height={getHeightWithScaleFactor(38)}
                borderRadius={getHeightWithScaleFactor(24)}
                uri={this.state.icon}
              />
            </TouchableOpacity>
          </Row>

          <Row style={styles.wrapperTabs}>
            <TouchableOpacity
              style={[
                styles.customTabButton,
                this.state.show ? styles.active : null
              ]}
              onPress={
                  () => { this.setState(() => ({ show: true })); }
                }
            >
              <BaseText
                style={this.state.show ? styles.activeButtonText : styles.inactiveButtonText}
                textKey="profile:tab_profile"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.customTabButton,
                this.state.show ? null : styles.active
              ]}
              onPress={
                  () => { this.setState(() => ({ show: false })); }
                }
            >
              <BaseText
                style={this.state.show ? styles.inactiveButtonText : styles.activeButtonText}
                textKey="profile:tab_password"
              />
            </TouchableOpacity>
          </Row>

          {
            this.state.show ? (
              <Row>
                <ProfileComponent
                  name={this.state.name}
                  email={this.state.email}
                  lang={this.state.lang}
                  onPress={(data: _t_data) => { this.save(data); }}
                />
              </Row>
            ) : (
              <Row>
                <ChangePassword
                  onPress={() => {}}
                  onPressLeft={() => {}}
                />
              </Row>
            )
          }

        </ScrollView>
      </KeyboardWrapper>
    );
  }
}
