# CODE STYLE REQUIREMENTS

1. Strings should be written using `double quotes` ("some string");

1. Naming - `lowerCamelCase` only:

- Class / Component methods should be called like this: `onRoleSelect`, `onNameChange`, `onColorSelect`;
- Store / State / Class / Component variables should be called like this: `firstName`, `color`, `veryLongUselessName`, `keyboardDidShowListener`

# GENERAL REQUIREMENTS

1. If you have problems with running project due to packager issues (module `setup` cannot resolve module `app`) - please start packager like this: `npm start -- --reset-cache`;
1. Developers IDE should support `eslint` and `flow`;
1. Developer should cover all code with `flow`;
1. Generic components `Text`, `TextInput`, `Image` should be imported from `src/components` module ONLY!
1. For containers with forms use  `src/components/keyboard_wrapper` module as container wrapper;
1. All configurations (API, external services) should be stored in `env` folder for corresponding scheme/productFlavor;
1. API endpoints are stored in `src/config/main_config.js`. These are not stored in `env` module;
1. Regular expressions should be stored in `src/config/regexp_config.js`;
1. Texts should be stored in `src/i18n/translations/<language>.json`;
1. Images should be imported in `src/config/image_constants.js` which will return object of images;
1. Fonts should be stored in `src/configs/styles/fonts.js` file;
1. Colors should be stored in `src/configs/styles/colors.js` file; Naming convention does not support such names as "grey-2", "grey_2", "Gray-2", "Gray_2"; All names should be in UPPER_CASE; each color should have unique naming; In order to get correct color naming - please use http://chir.ag/projects/name-that-color service
1. Date formats (e.g. "YYYY-MM-DD") should be stored in `src/config/date_formats.js`
1. For date processing we use `moment.js` only! No `Date` constructions should be used;
1. For working with camera/gallery `src/utils/image_picker.js` module should be used only!
1. For working with actionsheet `src/utils/action_sheet.js` module should be used only!
1. There should be no date-parsing code in container/components; All interaction with `moment.js` should be done in separated `helper` modules;
1. Components should be `dumb`; Only smart components in application are `containers`;
1. Code should be covered with comments; Especially - if there is a lot of logic;
1. Orientation support provided by `src/utils/orientation` module; Please use only this module. Any different solutions should be discussed;
