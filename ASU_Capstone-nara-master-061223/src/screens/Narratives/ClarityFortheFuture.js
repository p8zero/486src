import React, {useContext, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';
import MenuIcon from '../../assets/menu.svg';
import BackButtonCreate from '../../components/backButtonCreate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import UserFlatList from '../../components/flatListPersonas';
import BackButtonMenu from '../../components/backButtonMenu';

export default function HomeScreen({navigation}) {

  global.clarityInTheMoment = false
  global.clarityInTheFuture = false

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
      <View style={{}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#282561', 
            textAlign: 'center',
            fontWeight: '300', 
            fontSize: 32,
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '8%', 
            letterSpacing: 4,}}>
          Where Does the Story Go From Here?
        </Text>
        <Text style={{            
          color: '#282561', 
            textAlign: 'center',
            fontFamily: 'WorkSans-Light',
            marginHorizontal: '7%',
            fontWeight: '300', 
            fontSize: 16,
            marginTop: '8%', 
            letterSpacing: 1,}}>
           Discover how the story turns out if a different path is taken today and see how both sides will view that 
        </Text>
      </View>

      <View>
      <Image
              source={require('../../assets/conceptart-08.png')}
              style={{
                width: SCREEN_WIDTH*.8,
                height: SCREEN_HEIGHT*.3, 
                resizeMode: 'center',
                borderRadius: 40,
                marginTop: '5%',
                marginBottom: '10%',
              }}
            />
      </View> 

      <View style={{alignItems: 'center', justifyContent: 'center'}}>

          <TouchableOpacity
            onPress={() => {clarityInTheFuture = true; navigation.navigate('ChooseProfiles')
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#282561',
              borderRadius: 50,
              width: 200,
              height: 50,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '300',
                fontSize: 18,
                letterSpacing: 2,
                color: '#FFF5EF',
                fontFamily: 'WorkSans-Regular',
              }}>
              Start Narrative
            </Text>
          </TouchableOpacity>
        </View>

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
