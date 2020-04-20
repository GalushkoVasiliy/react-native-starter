# SET `GoogleService-Info.plist`

Just place corresponding file under

`Starter/ios/Firebase/${scheme-name}`;

So:

`GoogleService-Info.plist` for `dev` scheme should be placed under `Starter/ios/Firebase/dev`;

`GoogleService-Info.plist` for `stage` scheme should be placed under `Starter/ios/Firebase/stage`;

And so on.

# SET `google-services.json`

Just place corresponding file under

`Starter/android/app/src/${env-name}`;

So:


`google-services.json` for `dev` env should be placed under `Starter/android/app/src/dev`;

`google-services.json` for `stage` env should be placed under `Starter/android/app/src/stage`;

And so on.

## Warning!

PLEASE, DO NOT PLACE `google-services.json` UNDER `Starter/android/app/src/main`;