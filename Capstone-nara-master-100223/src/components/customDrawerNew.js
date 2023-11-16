import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContextNew } from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';

const CustomDrawerNew = (props) => {
  const { logout } = useContext(AuthContextNew);
  const { user } = useContext(AuthContextNew);
  const [userName, setUserName] = useState(null);

  console.log("The user is ", user);
  
  const userDocument = firestore()
    .collection("Users")
    .doc(user.uid)
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        const userData = docSnapshot.data();
        setUserName(userData.username);
      }
    })
    .catch((e) => {
      console.log("There was an error setting user name ", user);
    });


  return (
    <View style={{ flex: 1, backgroundColor: '#FFF5EF' }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{}}>
        <Text
          style={{
            padding: 14,
            paddingTop: 50,
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            textAlign: 'left',
            color: '#18163A',
            fontSize: 24,
            letterSpacing: 2,
            height: 100,
            width: '100%',
            borderRadius: 40,
          }}
        >
          {userName}
        </Text>

        <View style={{ flex: 1, backgroundColor: '#fff5EF', paddingTop: 10 }}>

          <DrawerItemList {...props}></DrawerItemList>
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20,}}>

        <TouchableOpacity onPress={() => { logout() }} style={{ paddingVertical: 15, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={24} color='#18163A' />
            <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', color: '#18163A',fontSize: 16, marginLeft: 15, letterSpacing: 2, }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomDrawerNew;