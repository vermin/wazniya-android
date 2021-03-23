WAZNIYA Android Wallet
======================

[![License](https://img.shields.io/badge/license-EUPL--1.2-red)](https://opensource.org/licenses/EUPL-1.2)

WAZNIYA Android Wallet enables users to securely store, send, receive WAZN and monitor its balance. Application is entirely open-sourced, decentralized and free to use.

## 100% Privacy

App is not collecting or storing any user personal information.
It provides the best possible security and experience for users.

## 100% Open Source

Secure, reliable, auditable. Available to be developed by the community.

### Info

1. License and Copyrights
2. Downloads
3. Requirements & Install Locations
4. Reporting Bugs & Making Feature Requests

### Contributing and Testing

1. Getting the Source Code
2. Repo Contents Overview
3. Building for Production
4. Running in Development Mode
5. Contributing
6. Acknowledgements

## Downloads

Download the latest version from our website at [wazniya.com](https://www.wazniya.com) or from the Releases tab.

Developers and pre-release testers who would like to use and work on the app can run it by obtaining the source and running one of the build commands below.

To get set up with the source code, please see **Getting the Source Code** below.


### Where is user data saved?

* Android: The data is encrypted and saved to the Android device using an implementation that leverages AndroidKeyStore and SharedPreferences.
* Web: The data is saved to the browser's local storage.

#### Data storage warnings:

* Android API < 18 does not support AndroidKeyStore. Android API < 18 values are stored fallback to being stored as simple base64 encoded strings.
* Since web browsers don't have an equivalent of Android's secure storage, data is base64-encoded before being stored in the browser's Local Storage.

## Reporting Bugs & Making Feature Requests

If you would like to report an issue or share a feature request, please create a Github [Issue](https://github.com/wazniya/wazn-android-js/issues) on this project.

If you're reporting a bug, be sure to include all information which we would need to reproduce the issue, such as the operating system and app version on which you saw the bug, and the steps you took, if you can tell.

Please don't use the Issues tracker for general support or inquiries. You can also [contact us](https://wazniya.com/support) directly.


# Contributing & Testing


## Getting the Source Code

### Download & Build

#### Prerequisites:

Make sure you are using node v10.22.1 or higher, and npm v6.14.6 or higher. The application has been confirmed to work on these specific versions

1. First, ensure that you have recent versions of `node` and `npm` installed.

2. Clone or otherwise download this repository. Then, in your terminal, `cd` into the repo directory.

3. Run `npm install`. This will install the required `node_modules`, and download the necessary Wazniya libraries.

4. Run `npm run build`.

This will build and package the web version of the application in the `browser_build` folder. Once that is done, it will initialise all necessary build files for your Android application. Finally, it will attempt to open the project in Android Studio.  

## Repo Contents Overview
* Local, application source code is located in `local_modules/`. This includes bundled/static third-party "Vendor" libraries such as [EmojiOne](http://emojione.com).

* After installation, non-bundled third-party modules will be located in `node_modules/`.

* App package and build process info is located in `package.json`.

* After building for Android, build files will be exported to the "android" folder in the project root.

* This readme is located at `README.md`, and the license is located at `LICENSE.txt`.

## Suggested development workflow

As the application is essentially a web application which gets transpiled into Java by Capacitor, rather than transpile and build each time, we do most of our development work by running a server that serves the browser_build folder, and accessing it in Chrome. Barring unusual cases, changes made and tested on Chrome will function properly once transpiled.

When developing in this fashion, one can run a server with hot-reload enabled by using the `npm run watch` command

## Debugging the Android application

Should you run into any issues with the transpiled application, you are able to debug the application by making use of Android WebView debugging and the Chrome browser. In order to do so, follow the instructions below:

1. Add the following code snippet to the app/java/com.wazniya.android/MainActivity.java file inside the `onCreate()` function

```
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
    WebView.setWebContentsDebuggingEnabled(true);
}
```
2. Open Chrome
3. Navigate to chrome://inspect/#devices
4. Under "Remote Target", you should see a WebView titled "WebView in com.wazniya.android"
5. Click "inspect" to open the WebView in DevTools


## Building for Production

1. Follow the steps under `Download and Build`.
2. Use Android Studio to build the .APK file

## Contributing

### Testing

Please submit any bugs as Issues unless they have already been reported.

Suggestions and feedback are very welcome!


### Developing

If you have an improvement to the codebase and would like to have your code shipped in the production Wazniya app, please submit a [pull request](https://help.github.com/articles/about-pull-requests/), even if it's still a WIP. We try to credit all contributors in app release notes.

* Merging PRs which involve integrating with any third-party services will require discussion and agreement.  

* We reserve the right to refuse to merge any PRs, such as those which introduce breaking changes.

### Donating

Wazniya Donation Address (WAZN): ???

Proceeds from donations are used to fund development on the Wazniya back-end server (a performant version of which we soon™ plan to open-source for anyone to run their own server at home). Any remaining funds will go towards product (app UI) R&D, and hosting costs.

## Acknowledgements

Contributors to each release are credited in release notes.

### Core Contributors

* 💱 `vermin` ([vermin](https://github.com/vermin)) Wazniya Lead Maintainer & Core developer

* 💱 `jkarlos` ([Karl Buys](https://github.com/karlbuys)) Lead Maintainer & Core developer

* 🍕 `Tekkzbadger` ([Devin Pearson](https://github.com/devinpearson)) MyMonero Maintainer & Core developer

* 🦄 `fluffyponyza` ([Riccardo Spagni](https://github.com/fluffypony)) Advisor, MyMonero Founder & Monero Core team member

* 🏂 `endogenic` ([Paul Shapiro](https://github.com/paulshapiro)) Former MyMonero MyMonero Core Maintainer & MyMonero Core contributor

* 😎 `vtnerd` ([Lee Clagett](https://github.com/vtnerd)) MyMonero Lead back-end developer

* 🍄 `luigi` Monero tech advisor; Main MyMonero JS core crypto contributor

* 🔥 `mds` ([Matt Smith](http://mds.is)) MVP designer

* 🌠 Your name here?


## License
```
Licensed under the EUPL-1.2
Copyright (c) 2020-2021 Wazniya
Copyright (c) 2014-2019 MyMonero
```
