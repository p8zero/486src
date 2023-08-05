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
//import ChooseProfiles from './chooseProfiles';
import BackButtonMenu from '../../components/backButtonMenu';
import YourCommunityScreen from './YourCommunityScreen';
import YourNarativeScreen from './YourNarativeScreen';
import BackButtonNavNarratives from "../../components/backButtonNavNarratives";
//import OnBoarding from './OnBoarding';

export default function Invitations({navigation}) {

  const [input, setInput] = useState('') 
  const [searchNarrative, doSearch] = useState('') 

  

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F6DEDC',
    }}>
      <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      //backgroundColor: '#EDBDBA',
      marginTop: '5%',
      marginLeft: '5%',
      
    }}>
      <BackButtonMenu
        label={'back button'}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
      />

      <BackButtonNavNarratives onPress={() => navigation.pop()} /> 

      </View>

      <View style={{backgroundColor:'#FFF5EF',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '35%',
            marginTop: '8%', 
            height: 70,
            //width: 200,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,

          }}>
        <Text style={{
          width: 200,
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          //marginTop: '0%',
          }}>
          Invitations
        </Text>
            </View>


  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  

  
})
