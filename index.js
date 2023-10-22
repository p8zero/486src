/**
 * @format
 */

import { CometChat } from "@cometchat-pro/react-native-chat";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
const appID = "245207bd98c0e574";
const region = "US";
let appSetting = new CometChat.AppSettingsBuilder()
                        .subscribePresenceForAllUsers()
                        .setRegion(region)
                        .autoEstablishSocketConnection(true)
                        .build();
CometChat.init(appID, appSetting).then(
    () => {
        console.log("Initialization completed successfully");
    }, error => {
        console.log("Initialization failed with error:", error);
    }
);
