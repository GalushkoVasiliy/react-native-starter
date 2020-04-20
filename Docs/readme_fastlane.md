# SETUP FASTLANE:

1. Edit `fastlane/Appfile` file:

- Set `apple_id` - it is your developer account email;
- Set `team_id` - can be found under account preference at `developer.apple.com`;
- Set `app_identifier` (optional - can be done via `change_bundle_id.sh` script also) - it is `com.starter` now;

2. Edit `fastlane/Fastfile` file:

- Set `DEV_PROFILE` - this is your provisioning profile for `dev` environment; Place here name that was entered while creating profile at `developer.apple.com`.
- Set `STAGE_PROFILE` - this is your provisioning profile for `stage` environment; Place here name that was entered while creating profile at `developer.apple.com`.
- Set `PREPRODUCTION_PROFILE` - this is your provisioning profile for `preproduction` environment; Place here name that was entered while creating profile at `developer.apple.com`.
- Set `PRODUCTION_PROFILE` - this is your provisioning profile for `production` environment; Place here name that was entered while creating profile at `developer.apple.com`.
- Set `DEV_BUNDLE_ID` (optional - can be done via `change_bundle_id.sh` script also) - it is `com.starter.dev` now;
- Set `STAGE_BUNDLE_ID` (optional - can be done via `change_bundle_id.sh` script also) - it is `com.starter.stage` now;
- Set `PREPRODUCTION_BUNDLE_ID` (optional - can be done via `change_bundle_id.sh` script also) - it is `com.starter.preproduction` now;
- Set `PRODUCTION_BUNDLE_ID` (optional - can be done via `change_bundle_id.sh` script also) - it is `com.starter` now;

# USE FASTLANE

1. iOS builds assembling:

- For `dev` environment - run `fastlane ios dev` from project root;
- For `stage` environment - run `fastlane ios stage` from project root;
- For `preproduction` environment - run `fastlane ios preproduction` from project root;
- For `production` environment - run `fastlane ios production` from project root;

2. Android builds assembling:

- For `dev` environment - run `fastlane android dev` from project root;
- For `stage` environment - run `fastlane android stage` from project root;
- For `preproduction` environment - run `fastlane android preproduction` from project root;
- For `production` environment - run `fastlane android production` from project root;