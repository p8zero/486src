# Capstone

Developer Notes

- Languages used are HTML, CSS and Javascript
- All the design stuff, fonts, etc. are in CSS
- Everything is in ReactNative
- Everything is located in “src” file
- Images, etc. are in assets file
- Components, check boxes, buttons are ALL in the assets file
- Design of the screens - can change font, font size, etc. directly in the code
- Linked to Google firebase database through code in “AuthProvider…” files
- Additional documentation in Google Drive: https://drive.google.com/drive/folders/1BvQK9MPocN1DBSufFaB4lVjuZE0duiCG?usp=sharing

Visualization

iOS

- https://reactnative.dev/docs/environment-setup
- XCode simulator pops everything up
- Open it on Xcode 14.3
- Download the emulator for the device you want
- Need to put in two separate commands in the Terminal in VS Code
- Only need to do this once – then next time you can just open the simulator
- Run "npm install". After node modules folder is created, enter "cd ios", then run "bundle install"
- Then run "pod install"
- Then run "npx react-native start" in one terminal
- Then "npx react-native ios" in another terminal
  
Android

- Setup React Native CLI, Dependencies, Android Development Environment, Android_HOME variable, for Android following these instructions
- https://reactnative.dev/docs/environment-setup
- This project currently uses Node 16
- Open the Virtual Device Manager in Android Studio
- (// Older codebase - Start device that was preiously created with API 31, SDK 12)
- Open this repo in VS Code
- Open two terminal tabs in VS Code and run one of the following commands in each terminal
- First run "npm install", then
- npx react-native start (starts Metro) in one terminal
- npx react-native run-android (starts the project on the Android emulator) in a seperate terminal
