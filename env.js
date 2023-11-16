export const cometChatConfig = {
    cometChatAppId: '245207bd98c0e574',
    cometChatRegion: '89b661b1b23c24abab46f49fe3a045be92ec669d',
    cometChatAuthKey: '5f6f8a269531764cf8a765882b05bd0cce904fe1'
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaf5TkmT6p9FVBxfmtREDEU1QqAPDISpo",
  authDomain: "naradb-92d89.firebaseapp.com",
  databaseURL: "https://naradb-92d89-default-rtdb.firebaseio.com",
  projectId: "naradb-92d89",
  storageBucket: "naradb-92d89.appspot.com",
  messagingSenderId: "512974687300",
  appId: "1:512974687300:web:97fc858f06457ff0468011",
  measurementId: "G-962PG50SER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

