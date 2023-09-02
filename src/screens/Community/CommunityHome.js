import React, {useState, useRef} from 'react';
import Swiper from 'react-native-swiper';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Animated,
  Image,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import MenuIcon from '../../assets/menu.svg';
import { DrawerActions } from '@react-navigation/native';
//import ChooseProfiles from './chooseProfiles';
import BackButtonMenu from '../../components/backButtonMenu';
import YourCommunityScreen from './YourCommunityScreen';
import YourNarativeScreen from './YourNarativeScreen';
//import OnBoarding from './OnBoarding';

export default function CommunityScreen({navigation}) {

  const [input, setInput] = useState('') 
  const [searchNarrative, doSearch] = useState('') 

  global.clarityInTheMoment = false
  global.clarityInTheFuture = false

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F6DEDC',
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginTop: '5%',
          marginLeft: '5%',
        }}>
          <BackButtonMenu
            label={'back button'}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
          />
                  
        </View>
    <Swiper>
          <YourCommunityScreen navigation = {navigation} />
          <YourNarativeScreen navigation = {navigation} />

    </Swiper>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container : {
    backgroundColor: '#EDBDBA',
  },
  list : {
    marginTop: 20, 
    paddingTop: 0,
  },
  text : {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20
  }

  
})
