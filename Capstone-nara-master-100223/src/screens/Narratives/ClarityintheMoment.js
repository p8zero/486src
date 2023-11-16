import React, {useContext, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>

      <View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          marginTop: '5%',
          width: '70%',
          marginHorizontal: '2.5%',
          height: 55,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
      }}>
      <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            justifyContent: 'center',
            fontWeight: '300', 
            fontSize: 22,
            marginLeft: "5%",
            marginRight: '5%',
            letterSpacing: 0,
            flexWrap: 'wrap',}}>
              What do you want to get a clear idea of?
        </Text>
      </View> 

      <TouchableOpacity 
      style={{backgroundColor: '#FFF5EF', marginHorizontal: '5%', height: 200, flexDirection: 'row', borderRadius: 30, marginTop: '10%', alignItems: 'center', justifyContent: 'center'}}
      onPress={() => {clarityInTheMoment = true; navigation.navigate('ChooseProfiles');
                      mixpanel.track('ClarityMoment', {'Flow': 'Moment'});
    }}
      >
      <View style={{flex: 1, justifyContent: 'center',}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 22,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 2,}}>
              Exposition
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
              What led them to feel this way or what has to change for them to feel differently?
        </Text>

        </View>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{backgroundColor: '#FFF5EF', marginHorizontal: '5%', height: 200, flexDirection: 'row', borderRadius: 30, marginTop: '5%', alignItems: 'center', justifyContent: 'center'}}
      onPress={() => {clarityInTheFuture = true; navigation.navigate('ChooseProfiles'); 
                      mixpanel.track('ClarityFuture', {'Flow': 'Future'});
            }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'WorkSans-light', 
               color: '#000000',
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 22,
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
              Foreshadowing
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
               color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
            How might they feel going forward or how they might feel if things changed?
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
