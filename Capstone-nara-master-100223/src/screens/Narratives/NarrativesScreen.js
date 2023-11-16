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
  StyleSheet
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuIcon from '../../assets/menu.svg';
import { DrawerActions } from '@react-navigation/native';
import ChooseProfiles from './chooseProfiles';
import BackButtonMenu from '../../components/backButtonMenu';
import ClarityInTheMoment from './ClarityintheMoment';
import ClarityForTheFuture from './ClarityFortheFuture';
import OnBoarding from './OnBoarding';

export default function NarrativesScreen({navigation}) {


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
                  <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('HomeScreen')}}
          icon={<Ionicons name="close" size={24} color="#18163A" />}
          />
        </View>
    <Swiper>
          <ClarityInTheMoment navigation = {navigation} />
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
