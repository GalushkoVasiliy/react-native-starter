// @flow

/* MODULES */
import { Platform } from "react-native";
import Orientation from "react-native-orientation";

/* CUSTOM MODULES */
import logger from "src/utils/logger";

/* TYPES */
import type { _t_orientation } from "src/types";


type _t_orientationListener = (orientation: _t_orientation) => void;


/* ROUTES WHICH SUPPORT BOTH PORTRAIT AND LANDSCAPE */
const ALL_ORIENTATIONS = [];

const PORTRAIT = "PORTRAIT";


const setOrientationIOS = (routeName: ?string, orientationListener: _t_orientationListener): void => {
  if (ALL_ORIENTATIONS.indexOf(routeName) !== -1) {
    // IF WE USE ONLY Orientation.unlockAllOrientations(); - device will not rotate app automatically

    // WE NEED THIS BLOCK - FOR CHECKING CURRENT ORIENTATION BEFORE SETTING TO LANDSCAPE;
    // IF CURRENT ORIENTATION IS PORTRAIT - WE DON'T NEED LANDSCAPE MODE TO BE SET;
    Orientation.getOrientation((err, current: string) => {
      if (current !== PORTRAIT) {
        Orientation.lockToLandscape();
      }
      Orientation.unlockAllOrientations();
    });
    Orientation.addOrientationListener(orientationListener);
  } else {
    Orientation.lockToPortrait();
    Orientation.removeOrientationListener(orientationListener);
  }
};

const setOrientationAndroid = (routeName: string, orientationListener: _t_orientationListener): void => {
  Orientation.unlockAllOrientations();
  if (ALL_ORIENTATIONS.indexOf(routeName) !== -1) {
    // FOR ANDROID WE DON"T NEED TO DO ANY OTHER MANIPULATIONS AFTER
    // Orientation.unlockAllOrientations(); EXCEPT OF ADDING LISTENER;
    Orientation.addOrientationListener(orientationListener);
  } else {
    Orientation.lockToPortrait();
    Orientation.removeOrientationListener(orientationListener);
  }
};

export const setOrientation = (routeName: string, orientationListener: _t_orientationListener): void => {
  logger.log("setOrientation -- routeName is: ", routeName);

  Platform.select({ ios: setOrientationIOS, android: setOrientationAndroid })(routeName, orientationListener);
};
