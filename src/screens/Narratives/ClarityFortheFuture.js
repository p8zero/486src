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
                icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
              />
            <BackButtonCreateNarratives
            label={'back button'}
            onPress={() => {navigation.navigate('NarrativesScreen')}}
            icon={<Ionicons name="add-outline" size={30} color="#FFF5EF" />}
          />
            </View>

          
         
      <View style={{marginTop: '5%',  
      marginBottom: '5%',      
        backgroundColor: '#FFF5EF',
        flexdirection: 'row',
        justifyContent: 'center',
        width: '50%',
        height: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          }}>
          Stories
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