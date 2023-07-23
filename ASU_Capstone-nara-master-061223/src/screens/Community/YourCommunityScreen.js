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
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
          "Where does the status quo take us & how does it go if we did things differently?"
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
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%',
            letterSpacing: 2,}}>
          "Where does the status quo take us & how does it go if we did things differently?"
        </Text>
        </View>
      </TouchableOpacity>
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