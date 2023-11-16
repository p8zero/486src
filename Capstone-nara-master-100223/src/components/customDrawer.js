import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  const {logout} = useContext(AuthContext);
  const {userInfo} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#EDBDBA'}}>
        <ImageBackground
          source={require('../assets/blueprint.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/avatar1.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}></Image>

          <Text style={{fontFamily: 'WorkSans-Regular', color: '#000000', fontSize: 16 }}>{userInfo.user_display_name}</Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props}></DrawerItemList>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="server-outline" size={22} />
            <Text style={{fontFamily: 'WorkSans-Regular', fontSize: 15, marginLeft: 5}}>About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color='#18163A' />
            <Text style={{fontFamily: 'WorkSans-Regular', fontSize: 15, marginLeft: 5, letterSpacing: 1,}}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomDrawer;
