/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import  {CometChat} from "@cometchat-pro/react-native-chat";
AppRegistry.registerComponent(appName, () => App);

let appID = "245207bd98c0e574";
let region = "us";
let appSettings = new CometChat.AppSettingsBuilder()
                        .subscribePresenceForAllUsers()
                        .setRegion(region)
                        .autoEstablishSocketConnection(true)
                        .build()

CometChat.init(appID,appSettings).then(
    ()=> {
        console.log("Initialization successful");
    },error => {
        console.log("Initialization error: " + error);
    }
)
