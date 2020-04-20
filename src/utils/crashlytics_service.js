// @flow


/* MODULES */
import firebase from "react-native-firebase";

/* CUSTOM MODULES */
import logger from "./logger";


const DEFAULT_METHODS = {
  crash: () => {
    logger.log("CRASHLYTICS - DEFAULT_METHODS - crash");
  },
  log: (message: string) => {
    logger.log(`CRASHLYTICS - DEFAULT_METHODS - log - message is: ${message}`);
  },
  recordError: (code: number, message: string) => {
    logger.log(`CRASHLYTICS - DEFAULT_METHODS - recordError - code is: ${code} - message is: ${message}`);
  },
  setBoolValue: (key: string, value: boolean) => {
    const bool = Boolean(value);
    logger.log(`CRASHLYTICS - DEFAULT_METHODS - setBoolValue - key is: ${key} - value is: ${bool.toString()}`);
  },
  setFloatValue: (key: string, value: number) => {
    logger.log(`CRASHLYTICS - DEFAULT_METHODS - setFloatValue - key is: ${key} - value is: ${value}`);
  },
  setIntValue: (key: string, value: number) => {
    logger.log(`CRASHLYTICS - DEFAULT_METHODS - setIntValue - key is: ${key} - value is: ${value}`);
  },
  setStringValue: (key: string, value: string) => {
    logger.log(`CRASHLYTICS - DEFAULT_METHODS - setStringValue - key is: ${key} - value is: ${value}`);
  },
  setUserIdentifier: (userId: string) => {
    logger.log(`CRASHLYTICS - DEFAULT_METHODS - setUserIdentifier - userId is: ${userId}`);
  },
  enableCrashlyticsCollection: () => {
    logger.log("CRASHLYTICS - DEFAULT_METHODS - enableCrashlyticsCollection");
  },
};

class CrashlyticsService {
  instance = firebase && firebase.crashlytics();

  crash(): void {
    if (this.instance && this.instance.crash) {
      this.instance.crash();
    } else {
      DEFAULT_METHODS.crash();
    }
  }

  log(message: string): void {
    if (this.instance && this.instance.log) {
      this.instance.log(message);
    } else {
      DEFAULT_METHODS.log(message);
    }
  }

  recordError(code: number, message: string): void {
    if (this.instance && this.instance.recordError) {
      this.instance.recordError(code, message);
    } else {
      DEFAULT_METHODS.recordError(code, message);
    }
  }

  setBoolValue(key: string, value: boolean): void {
    if (this.instance && this.instance.setBoolValue) {
      this.instance.setBoolValue(key, value);
    } else {
      DEFAULT_METHODS.setBoolValue(key, value);
    }
  }

  setFloatValue(key: string, value: number): void {
    if (this.instance && this.instance.setFloatValue) {
      this.instance.setFloatValue(key, value);
    } else {
      DEFAULT_METHODS.setFloatValue(key, value);
    }
  }

  setIntValue(key: string, value: number): void {
    if (this.instance && this.instance.setIntValue) {
      this.instance.setIntValue(key, value);
    } else {
      DEFAULT_METHODS.setIntValue(key, value);
    }
  }

  setStringValue(key: string, value: string): void {
    if (this.instance && this.instance.setStringValue) {
      this.instance.setStringValue(key, value);
    } else {
      DEFAULT_METHODS.setStringValue(key, value);
    }
  }

  setUserIdentifier(userId: string): void {
    if (this.instance && this.instance.setUserIdentifier) {
      this.instance.setUserIdentifier(userId);
    } else {
      DEFAULT_METHODS.setUserIdentifier(userId);
    }
  }

  enableCrashlyticsCollection(): void {
    if (this.instance && this.instance.enableCrashlyticsCollection) {
      this.instance.enableCrashlyticsCollection();
    } else {
      DEFAULT_METHODS.enableCrashlyticsCollection();
    }
  }
}

export default new CrashlyticsService();
