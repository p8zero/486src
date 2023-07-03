import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import Purchases from 'react-native-purchases';
 import Providers from './src/navigation/index';
 import { Mixpanel } from 'mixpanel-react-native';

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
mixpanel.init();

 //const API_KEY = 'appl_JugNqRIQfztPoXkqJxvpvKAVsFz'
 const App = () => {
    useEffect(() => {
        //Purchases.setDebugLogsEnabled(true);
       // Purchases.configure(API_KEY, null, false);
       Purchases.configure({apiKey: 'appl_JugNqRIQfztPoXkqJxvpvKAVsFz'});
        //if (Platform.OS === "ios") {
          //  Purchases.configure({ apiKey: '' });
            /* await Purchases.setup(""); */
          // } else if (Platform.OS === "android") {
            /* await Purchases.setup("public_google_sdk_key"); */
    }, []);

  return <Providers />;
 }

 export default App;
