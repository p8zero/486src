/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {ScrollView, TextInput } from 'react-native-gesture-handler';
import MenuIcon from '../../assets/menu.svg';
import BackButton from '../../components/backButton';
import firestore from '@react-native-firebase/firestore';
import BackButtonMenu from '../../components/backButtonMenu';
import NarrativeFlatList from '../../components/flatListNarratives';

export default function HomeScreen({navigation}) {
  const [input, setInput] = useState('');

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
      </View>

      {/* <TextInput
      placeholder="Search by name"
      value={input}
      onChangeText={setInput}
      style={{
        paddingHorizontal: '5%',
        marginTop: '3%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 40,
      }}
    /> */}

      <ScrollView>
        <NarrativeFlatList input = {input}/>
      </ScrollView>
        </SafeAreaView>
      );
}
