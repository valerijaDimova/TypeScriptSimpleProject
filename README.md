
React-Native-Template with TypeScript
================================================

## Prerequisites
- Node > 7 and npm (Recommended: Use [nvm](https://github.com/creationix/nvm))
- Watchman `brew install watchman`
- XCode > 9
- [JDK > 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)


## Base dependencies
- [axios](https://github.com/axios/axios) for networking.
- [React-Navigation](https://reactnavigation.org/) navigation library.
- [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.

## Usage


## Folder structure
This template follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application.
  
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder that contains all your application components.
    - `Common`: Folder to store any common component that you use through your app (such as a generic button, textfields, etc).
  - `navigation`
  - `screens`
  - `utils`
  - `translations`
  - `consts`
  - `services`
  - `hooks`
  - `styles`
  - `types`
  - `App.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.



## Run the app
First of all just run the command bellow in the root folder of this document


```bash
npm install
```

#### Android


```bash
react-native run-android
```

#### iOS
 For iOS run the commands below 
```bash
cd ios && pod install && cd ..
react-native run-ios
```

