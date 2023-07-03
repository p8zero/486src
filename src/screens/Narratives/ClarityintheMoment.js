import React, {useContext, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';
import MenuIcon from '../../assets/menu.svg';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import UserFlatList from '../../components/flatListPersonas';
import BackButtonMenu from '../../components/backButtonMenu';
import { Mixpanel } from 'mixpanel-react-native';

export default function HomeScreen({navigation}) {

  global.clarityInTheMoment = false
  global.clarityInTheFuture = false

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
mixpanel.init();

  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  const {height: SCREEN_HEIGHT} = Dimensions.get('window');

  //onSkip={() => {clarityInTheMoment = true; navigation.replace('ChooseProfiles')}}
  //onDone={() => {clarityInTheFuture = true; navigation.navigate('ChooseProfiles')}}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
        alignItems: 'center',
      }}>

      <View>
      
      </View> 
      <TouchableOpacity 
      style={{backgroundColor: '#FFF5EF', width: '90%', height: 220, flexDirection: 'row', borderRadius: 30, marginTop: '10%'}}
      onPress={() => {clarityInTheMoment = true; navigation.navigate('ChooseProfiles');
                      mixpanel.track('ClarityMoment', {'Flow': 'Moment'});
    }}
      >
      <View style={{flex: 1, justifyContent: 'center',}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 2,}}>
          "Why are things like this & how do we get to the kind of relationship we want?"
        </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{backgroundColor: '#EDBDBA', width: '90%', height: 220, flexDirection: 'row', marginTop: '5%', borderRadius: 30, }}
      onPress={() => {clarityInTheFuture = true; navigation.navigate('ChooseProfiles'); 
                      mixpanel.track('ClarityFuture', {'Flow': 'Future'});
            }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
          "Where does the status quo take us & how does it go if we did things differently?"
        </Text>
        </View>
      </TouchableOpacity>

  



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container : {
    backgroundColor: '#F6DEDC',
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
