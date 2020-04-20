# TO START PROJECT

1. Clone the repo
1. Go to project folder
1. Run from console

  ```sh
    yarn
    cd ios
    pod install
    cd ../
  ```

1. To run android:

  ```sh
    react-native run-android
  ```

1. To run ios:
  open `*.xcworkspace` in Xcode, choose simulator device and press run button in the left part of the top bar


### react-native ver: 0.59.9

# HOW TO FIX ISSUE WITH `config.h` or THIRD PARTY

## STEPS

### FIRST OF ALL - Try to set `Build System` TO `Legacy Build System`. To do this - open:

1. XCode -> File -> (Project Settings or Workspace Settings)

1. And choose `Legacy Build System` in `Build System` dropdown;

1. After this - re-install `node_modules`;


If this wasn't helpful - try next steps:


1. `rm -r ~/.rncache`
1. `rm -rf node_modules`
1. `yarn`
1. `react-native run-ios --scheme "dev"`
1. `cd node_modules/react-native/third-party/glog{version number} && sh ./configure`
1. clear `Derived Data` in Xcode
1. Run build in Xcode


# RUN & ASSEMBLE

### Environment setup based on tutorial from: 
[https://github.com/S-PRO/react-native-env-setup](https://github.com/S-PRO/react-native-env-setup)

## WARNING!

- **Please - use only "dev" scheme/productFlavor for development! "stage"/"preproduction"/"production" are going to be used while QA/Production**
- **On iOS platform only "dev" scheme is debuggable, "stage"/"preproduction"/"production" are signed via release configs**

## How to run:

### Android:

#### WARNING!
- No install 10 JDK or higher.
- No pure `react-native run-android` usage. For development - please use commands below;
- No pure `cd android && ./gradlew assembleRelease` usage. For development - please use commands below;

#### Running on simulator/real device in debug mode:

1. `yarn run android:run-dev` - dev version (uses config from `.env.dev`);
1. `yarn run android:run-stage` - stage version (uses config from `.env.stage`);
1. `yarn run android:run-preproduction` - preproduction version (uses config from `.env.preproduction`);
1. `yarn run android:run-production` - production version (uses config from `.env.production`);

##### NOTE: After build was successfully assembled - it can show next error:

`Starting: Intent { cmp=com.app/.MainActivity }
Error type 3
Error: Activity class {com.app/com.app.MainActivity} does not exist.`

##### That is ok. Just press on application icon on your simulator/device and everything will work;

#### Assembling build (release mode):

1. `yarn run android:build-dev` - dev version (uses config from `.env.dev`);
1. `yarn run android:build-stage` - stage version (uses config from `.env.stage`);
1. `yarn run android:build-preproduction` - preproduction version (uses config from `.env.preproduction`);
1. `yarn run android:build-production` - production version (uses config from `.env.production`);

### iOS:

#### WARNING!

- No pure `react-native run-ios` usage. For development - please use Xcode;
- Please, use `xcworkspace` file, not `xcproject`.

#### Running on simulator/real device:

1. Choose scheme;
1. Run on simulator/device;

#### Assembling build (release mode):

1. Choose scheme;
1. Run "Product/Archive";

# CHANGE DEFAULT BUNDLE ID:

Run shell script from terminal

`sh ./change_bundle_id.sh ${old_bundle_id} ${new_bundle_id}`

`old_bundle_id` is `com.starter` here;

# MODULES CONFIGURING

## `react-native-document-picker`

Please, follow instructions described here https://github.com/Elyx0/react-native-document-picker. This is required for correct iOS setup.
