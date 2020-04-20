// @flow


// @Note: example of location permission handler


/* REACT */
// import {
//   Alert,
//   Linking,
//   Platform,
// } from "react-native";

/* MODULES */
// import Permissions from "react-native-permissions";
// import SystemSetting from "react-native-system-setting";

/* CUSTOM MODULES */
// import logger from "src/utils/logger";

// const { PERMISSIONS, RESULTS } = Permissions;

// const LOCATION_PERMISSION = Platform.OS === "ios"
//   ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//   : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;


/**
 * Check location permissions
 *
 * @returns {Promise<boolean>} - is permission allow or not
 */
// export async function checkLocationPermission(): Promise<boolean> {
//   try {
//     /**
//      * Check location status in phone settings and if it's off - redirect to it (ios)
//      * or show message (android)
//      */
//     const _phoneLocationStatus = await SystemSetting.isLocationEnabled();
//     if (!_phoneLocationStatus) {
//       Alert.alert(
//         "WARNING",
//         "Location service on your phone is disabled",
//         Platform.OS === "ios"
//           ? [
//             {
//               text: "Open Settings",
//               onPress: () => { Linking.openURL("App-Prefs:root=Privacy&path=LOCATION"); }
//             },
//             { text: "OK", onPress: () => { } },
//           ]
//           : [{ text: "OK", onPress: () => { } }],
//         { cancelable: false },
//       );

//       return false;
//     }

//     /**
//      * Check app permissions and if it"s denied or restricted - open it
//      */
//     const _permStatus = await Permissions.check(LOCATION_PERMISSION);
//     if (_permStatus === RESULTS.DENIED || _permStatus === RESULTS.BLOCKED) {
//       Alert.alert(
//         "WARNING",
//         "Location for app is disabled",
//         [
//           {
//             text: "Open App Settings",
//             onPress: () => { Permissions.openSettings(); }
//           },
//           { text: "OK", onPress: () => { } },
//         ],
//         { cancelable: false },
//       );

//       return false;
//     }

//     /**
//      * Request permissions
//      */
//     const granted = await Permissions.request(LOCATION_PERMISSION);
//     if (granted !== RESULTS.GRANTED) {
//       console.warn("Location permission denied");
//       return false;
//     }

//     return true;
//   } catch (err) {
//     console.warn(`Error to get location permissions: `, err);
//     return false;
//   }
// }
