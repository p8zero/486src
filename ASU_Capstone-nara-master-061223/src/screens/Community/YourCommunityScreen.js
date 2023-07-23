import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MenuIcon from '../../assets/menu.svg';
import BackButton from '../../components/backButton';
import firestore from '@react-native-firebase/firestore';
import BackButtonMenu from '../../components/backButtonMenu';
import NarrativeFlatList from '../../components/flatListNarratives';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function YourCommunityScreen({navigation}) {

  const [input, setInput] = useState('')
  const [searchNarrative, doSearch] = useState('')
  
    return (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#F6DEDC',
        }}>
            <View style={{
            width: '95%',
            marginLeft: '2.5%',
            top: '5%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          
          </View>

          <View style={{backgroundColor:'#FFF5EF',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '25%',
            marginTop: '8%', 
            height: 75,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,

          }}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '0%',
          }}>
          Welcome to Your Community
        </Text>
            </View>
            <TouchableOpacity 
      style={{backgroundColor: '#EDBDBA', marginLeft: '3%', marginRight: '3%', height: 220, flexDirection: 'row', marginTop: '5%', borderTopRightRadius: 50, borderBottomLeftRadius: 50, }}
      onPress={() => {clarityInTheFuture = true; navigation.navigate('ChooseProfiles'); 
                      mixpanel.track('ClarityFuture', {'Flow': 'Future'});
            }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 24,
            marginRight: '5%',
            //marginTop: '10%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
            How it works
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 16,
            marginTop: '10%',
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
            For each story you create, you have the opportunity to connect with...
        </Text>

        </View>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{backgroundColor: '#EDBDBA', marginLeft: '3%', marginRight: '3%', height: 220, flexDirection: 'row', marginTop: '5%', borderTopRightRadius: 50, borderBottomLeftRadius: 50, }}
      onPress={() => {clarityInTheFuture = true; navigation.navigate('ChooseProfiles'); 
                      mixpanel.track('ClarityFuture', {'Flow': 'Future'});
            }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 24,
            marginRight: '5%',
            //marginTop: '-10%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
            Requires Mutual Connection
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 16,
            marginTop: '10%',
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
            For each story you create, you have the opportunity to connect with...
        </Text>
        </View>
      </TouchableOpacity>

      <View style={{alignItems:'flex-end', marginTop: '5%'}}>
          <TouchableOpacity
          onPress={() => {
            getData();
            mixpanel.timeEvent("Narrative Creation");
            mixpanel.track("Narrative_ChoosePersonas")
            navigation.navigate('Perspective', {
              people: {pData},
              users: userNames,
              genders: userGenders,
              ages: userAges,
              traits: userTraits
            });
          }}
            style={{
              backgroundColor: '#18163A',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 205,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10%'
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '300',
                fontSize: 20,
                letterSpacing: 3,
                color: '#FFFFFF',
                fontWeight: '300',
                fontFamily: 'WorkSans-Regular',
              }}>
              swipe to begin
            </Text>
          </TouchableOpacity>
          </View>

            <ScrollView>
        <NarrativeFlatList input = {input}/>
        </ScrollView>

        </SafeAreaView>

        
        )
}

const styles = StyleSheet.create({
    search:{
        backgroundColor: '#FFF5EF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#FFF5EF',
        borderWidth: 1,
        borderRadius: 50, 
        fontSize: 16, 
        fontFamily: 'WorkSans-Light',
        fontWeight: '300',
        letterSpacing: 2,
        marginBottom:20,
        marginTop:20
    },

}

)