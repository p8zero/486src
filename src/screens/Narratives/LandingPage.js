import React, {useContext, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import MenuIcon from '../../assets/menu.svg';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import UserFlatList from '../../components/flatListPersonas';
import BackButtonMenu from '../../components/backButtonMenu';
import { Mixpanel } from 'mixpanel-react-native';

export default function HomeScreen({navigation}) {




  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>

      <View style={{
              width: '95%',
             marginLeft: '2.5%',
             marginTop: '5%',
              flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
            }}>
              <BackButtonMenu
                label={'back button'}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
              />

            </View>

  
  <ScrollView>

  <View style={{marginTop: '5%',        
        backgroundColor: '#FFF5EF',
        flexdirection: 'row',
        justifyContent: 'center',
        width: '65%',
        height: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 22, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          }}>
          Welcome to nara
        </Text>
      </View>


  <View style={{alignItems: 'flex-end', justifyContent: 'center', marginTop: '0%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OnBoarding')
            }}
            style={{
              marginTop: '1%',
              marginBottom: '5%',
              backgroundColor: '#EDBDBA',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 150,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 20,
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 1,
                color: '#18163A',
                fontFamily: 'WorkSans-Regular',
              }}>
             How to Use nara
            </Text> 
          </TouchableOpacity>
  
      </View>

      <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 20, 
          fontWeight: '400', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          }}>
          Quick Start Guide
        </Text>

  
      <View 
      style={{backgroundColor: '#9cc8C6', marginHorizontal: '5%', flexDirection: 'row', height: 200, borderRadius: 30, marginTop: '5%', alignItems: 'center', justifyContent: 'center'}}

      >
      <View style={{flex: 1, justifyContent: 'center',}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 22,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 2,}}>
              Step 1: Create Characters
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            fontStyle: 'italic',
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
              Click the menu button at the top left and navigate to the "Characters" section
        </Text>
        </View>
      </View>
      <View 
      style={{backgroundColor: '#EDBDBA', marginHorizontal: '5%', height: 200, flexDirection: 'row', borderRadius: 30, marginTop: '5%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 22,
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
             Step 2: Create a Story
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            fontStyle: 'italic',
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
           Swipe right and click the top right button to begin
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            fontStyle: 'italic',
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
           Start by choosing what you want clarity around
        </Text>

        </View>
      </View>
      <View 
      style={{backgroundColor: '#FFF5EF', marginHorizontal: '5%', height: 200, flexDirection: 'row', borderRadius: 30, marginTop: '5%', marginBottom: '10%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 22,
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
             Step 3: The Narration
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            fontStyle: 'italic',
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
           nara provides a narration - an answer to the chosen question from the narrator's perspective
        </Text>
        </View>
      </View>

      

      </ScrollView>


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
