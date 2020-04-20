// @flow


/* REACT */
import { Linking } from "react-native";

/* CUSTOM MODULES */
import logger from "src/utils/logger";


export const openLink = (link: string) => {
  Linking.canOpenURL(link)
    .then((supported: boolean) => {
      if (!supported) {
        logger.warn(`Can"t handle url: ${link}`);
      } else {
        Linking.openURL(link);
      }
    })
    .catch((err) => logger.warn("Error in openLink function ", err));
};
