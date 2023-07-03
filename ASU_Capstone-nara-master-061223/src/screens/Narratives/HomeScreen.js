import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import MenuIcon from '../../assets/menu.svg';
import BackButton from '../../components/backButton';
import firestore from '@react-native-firebase/firestore';
import BackButtonMenu from '../../components/backButtonMenu';
import NarrativeFlatList from '../../components/flatListNarratives';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Narrative
export default function HomeScreen({navigation}) {
  const [input, setInput] = useState('')
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
            <BackButtonCreateNarratives
            label={'back button'}
            onPress={() => {navigation.navigate('NarrativesScreen')}}
            icon={<Ionicons name="add-outline" size={30} color="#FFF5EF" />}
          />
            </View>
         
      <View style={{}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '5%',
          }}>
          Narratives
        </Text>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 16, 
          fontWeight: '300', 
          letterSpacing: 1,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '2%',
          }}>
          (P = From this Persona's Perspective)
        </Text>
      </View>
 
    
          <ScrollView>
        <NarrativeFlatList input = {input}/>
        </ScrollView>

        </SafeAreaView>
      );
}