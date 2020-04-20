// // @flow

// /* MODULES */
// import { Platform } from "react-native";

// /* CUSTOM MODULES */
// import logger from "src/utils/logger";
// import { checkLocationPermission } from "src/utils/permissions_service";

// /* TYPES */
// import type { _t_coordinates } from "src/types";

// type _t_geo_success = {|
//   coords: Coordinates,
//   timestamp: number,
//   mocked: boolean,
// |};

// type _t_geo_error = {|
//   message: string,
//   code: number,
// |};

// type _t_success_watcher = _t_coordinates => void;
// type _t_error_watcher = _t_geo_error => void;

// export const DELTAS = {
//   latitudeDelta: 0.02,
//   longitudeDelta: 0.02,
// };

// const calculateDelta = (latitude: number, longitude: number, accuracy: number): _t_coordinates => ({
//   latitude,
//   longitude,
//   ...DELTAS,
//   accuracy
// });

// const getCoords = (data: _t_geo_success): _t_coordinates => {
//   if (data && data.coords) {
//     const { latitude, longitude, accuracy } = data.coords;
//     return calculateDelta(latitude, longitude, accuracy);
//   }
//   return {
//     latitude: 0,
//     longitude: 0,
//     latitudeDelta: 0,
//     longitudeDelta: 0,
//     accuracy: 0
//   };
// };

// const GEO_OPTIONS = {
//   timeout: 1000,
//   ...Platform.select({ ios: { enableHighAccuracy: true }, android: {} }),
// };

// class LocationService {
//   constructor() {
//     this.watcherId = null;
//   }

//   watcherId: ?number;

//   successCb: ?_t_success_watcher;

//   errorCb: ?Function;

//   geoSuccess = (data: _t_geo_success) => {
//     logger.log("geoSuccess: ", data);
//     const coords = getCoords(data);
//     logger.log("coords: ", coords);
//     if (this.successCb) {
//       this.successCb(coords);
//     }
//   };

//   geoError = (data: _t_geo_error) => {
//     logger.log("geoError: ", data);
//     if (this.errorCb) {
//       this.errorCb(data);
//     }
//   }

//   initWatcher = async (success: _t_success_watcher, error: _t_error_watcher) => {
//     const locationEnabled = await checkLocationPermission();

//     logger.log("LocationService - initWatcher - Location enabled: ", locationEnabled);

//     if (locationEnabled) {
//       if (this.watcherId) {
//         navigator.geolocation.clearWatch(this.watcherId);
//       }

//       this.successCb = success;
//       this.errorCb = error;

//       this.watcherId = navigator
//         .geolocation
//         .watchPosition(this.geoSuccess, this.geoError, GEO_OPTIONS);

//       return true;
//     }

//     return false;
//   }

//   getCurrentPosition = async (): Promise<boolean> => {
//     const locationEnabled = await checkLocationPermission();

//     logger.log("LocationService - getCurrentPosition - Location enabled: ", locationEnabled);

//     if (locationEnabled) {
//       navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, GEO_OPTIONS);
//       return true;
//     }

//     return false;
//   }


//   clearWatcher = () => {
//     if (this.watcherId) {
//       navigator.geolocation.clearWatch(this.watcherId);
//     }
//   }
// }

// export default new LocationService();
