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
             marginBottom: '5%',
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

  <View style={{        
        flexdirection: 'row',
        justifyContent: 'center',
        width: '95%',
}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 0,
          color: '#000000',
          marginLeft: '5%',
          }}>
          nara - Perspective Narrator
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
For the moments when you need a clear idea of someone's perspective, how they are feeling and why
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
Their "story" or "narrative"
        </Text>

      </View>





      <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 0,
          color: '#000000',
          marginLeft: '5%',
          marginTop: '5%'
          }}>
          how to use nara
        </Text>

  
      <View 
      style={{backgroundColor: '#FFF5ef', marginHorizontal: '5%', flexDirection: 'row', height: 325, borderRadius: 30, marginTop: '5%', alignItems: 'center', justifyContent: 'center'}}

      >
      <View style={{justifyContent: 'center',}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 22,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 1,}}>
              Step 1: Create Characters
        </Text>

        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontStyle: 'italic',
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
              Click the menu button at the top left and go to the "Characters" section to get started
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '5%',
          marginBottom: '0%',
          marginTop: '5%'}}>


A character is a representation of a individual - their personality and what they value.
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
              There are "character types" that can help you jump start the process or you can start from scratch
        </Text>
        </View>
      </View>
      <View 
      style={{backgroundColor: '#fff5ef', marginHorizontal: '5%', height: 325, flexDirection: 'row', borderRadius: 30, marginTop: '5%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{justifyContent: 'center'}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 22,
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 1,}}>
             Step 2: Write Stories
        </Text>

        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontStyle: 'italic',
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
           Swipe right to begin writing
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
           A story is written from the perspective of a character (the narrator) and is a represention of an interaction with another character
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
              There are "story themes" that can help you get started or you can write a story from the ground up
        </Text>

        </View>
      </View>
      <View 
      style={{backgroundColor: '#FFF5EF', marginHorizontal: '5%', height: 325, flexDirection: 'row', borderRadius: 30, marginTop: '5%', marginBottom: '10%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 22,
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 1,}}>
             Step 3: The Narration
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
           nara gives you a narration that illustrates what the narrator's perspective might likely be for the story that was written
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
           Both the story summary and the narration summary are comprised of plot points that can be viewed individually to provide more depth
        </Text>
        </View>
      </View>

      <View style={{alignItems: 'flex-end', justifyContent: 'center', marginBottom: '10%', marginRight: '5%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OnBoarding')
            }}
            style={{
              marginTop: '1%',
              marginBottom: '5%',
              backgroundColor: '#18163A',
              borderRadius: 50,
              width: 200,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 20,
                fontWeight: '400',
                fontSize: 18,
                letterSpacing: 1,
                color: '#FFF5EF',
                fontFamily: 'WorkSans-Regular',
              }}>
             a more detailed intro
            </Text> 
          </TouchableOpacity>
  
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
