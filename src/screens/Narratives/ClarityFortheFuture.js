import React, {useState} from 'react';
import {SafeAreaView, Text, View, useColorScheme, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import MenuIcon from '../../assets/menu.svg';
import BackButtonMenu from '../../components/backButtonMenu';
import NarrativeFlatList from '../../components/flatListNarratives';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../../components/inputField';

export default function HomeScreen({navigation}) {

  const colorScheme = useColorScheme();

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
                icon={<MenuIcon name="menu-icon" size={24} color="#000000" />}
              />
      <View style={{justifyContent: 'center',}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NarrativesScreen');
          }}
          style={{
            backgroundColor: '#18163A',
            borderRadius: 50,
            width: 160,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingHorizontal: 20,
              fontWeight: '400',
              fontSize: 18,
              letterSpacing: 0,
              color: '#FFF5EF',
              fontFamily: 'WorkSans-Regular',
            }}>
            Write a Story
          </Text>
        </TouchableOpacity>
      </View>
            </View>

          
         
      <View style={{marginTop: '8%',      
        flexdirection: 'row',
        justifyContent: 'center',
        marginLeft: '5%',
        marginBottom: '3%'}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 1,
          color: '#000000',
          }}>
          Stories You've Written
        </Text>
      </View>

    


      <InputField
      label="search by narrator"
      value={input}
      onChangeText={setInput}
      color = {colorScheme}
    />

 
    
          <ScrollView style ={{}}>
        <NarrativeFlatList input = {input}/>
        </ScrollView>

        </SafeAreaView>
      );
}