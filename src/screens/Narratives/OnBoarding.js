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


  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  const {height: SCREEN_HEIGHT} = Dimensions.get('window');

  //onSkip={() => {clarityInTheMoment = true; navigation.replace('ChooseProfiles')}}
  //onDone={() => {clarityInTheFuture = true; navigation.navigate('ChooseProfiles')}}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>
      <ScrollView style={{}}>
        <View style={{backgroundColor:'#FFF5EF',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '25%',
            marginTop: '8%', 
            height: 75,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            }}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 20,
            paddingLeft: '5%',
            paddingRight: '5%',
            letterSpacing: 1,}}>
          A Few Tips to Help You Along Your Way
        </Text>
        </View>
        <View style={{backgroundColor:'#EDBDBA',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginLeft: '17%',
            marginRight: '5%',
            marginTop: '8%', 
            paddingVertical: 10,
            height: 250,
            borderRadius: 40,
            }}>
        <Text style={{            
          color: '#18163A', 
            textAlign: 'left',
            flexWrap: 'wrap',
            fontFamily: 'WorkSans-Light',
            marginLeft: '7%',
            marginRight: '7%',
            fontWeight: '300', 
            fontSize: 18,
            letterSpacing: 0.5,}}>
           
 N. Create the personas first. They are needed to create narratives. These personas are representations of yourself and the people in your life. You can create multiple personas of the same person to reflect how they may change based on the environment they are in.

        </Text>
        </View>
        <View style={{backgroundColor:'#EDBDBA',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: '5%',
            marginRight: '15%',
            marginTop: '8%', 
            height: 320,
            borderRadius: 40,
            }}>
        <Text style={{            
          color: '#18163A', 
            textAlign: 'left',
            fontFamily: 'WorkSans-Light',
            marginHorizontal: '7%',
            fontWeight: '300', 
            fontSize: 18,
            letterSpacing: 0.5,}}>

A. You can create and simulate as many narratives and personas as you like. See what it takes to get to your dream outcomes or what takes you down the path to the worst outcomes. You can also see how different personas affect the outcomes of the narratives. It's all there for you to discover and ultimately, for you to find the paths that are right for your relationships.

        </Text>
        </View>

        <View style={{backgroundColor:'#EDBDBA',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginLeft: '15%',
            marginRight: '5%',
            marginTop: '8%', 
            paddingVertical: 10,
            height: 180,
            borderRadius: 40,
            }}>
        <Text style={{            
          color: '#18163A', 
          textAlign: 'left',
          fontFamily: 'WorkSans-Light',
          marginHorizontal: '7%',
          fontWeight: '300', 
          fontSize: 18,
          letterSpacing: 0.5,}}>

R. Nara can show the same narrative from both points of view. Simply complete a narrative and then reconstruct it from the other person's perspective.

        </Text>
        </View>
        <View style={{backgroundColor:'#EDBDBA',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: '5%',
            marginRight: '15%',
            marginTop: '8%', 
            marginBottom: '10%',
            paddingVertical: 10,
            height: 160,
            borderRadius: 40,
            }}>
        <Text style={{            
          color: '#18163A', 
          textAlign: 'left',
          fontFamily: 'WorkSans-Light',
          marginHorizontal: '7%',
          fontWeight: '300', 
          fontSize: 18,
          letterSpacing: 0.5,}}>

A. If you want to know more about the narrative and persona building processess or the science behind Nara, visit the "How Nara Works" section.

        </Text>
        </View>

      </ScrollView>


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
