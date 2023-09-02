import React, {useState} from 'react';
import {SafeAreaView, Text, View, useColorScheme, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import MenuIcon from '../../assets/menu.svg';
import BackButtonMenu from '../../components/backButtonMenu';
import NarrativeFlatList from '../../components/flatListNarratives';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../../components/inputField';
import Swiper from 'react-native-swiper'
import ClarityFortheFuture from './ClarityFortheFuture';
import LandingPage from './LandingPage';


export default function HomeScreen({navigation}) {
      
    
      return (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#F6DEDC',
          }}>

        <Swiper>
              <LandingPage navigation = {navigation} />
              <ClarityFortheFuture navigation = {navigation} />
        </Swiper>
      </SafeAreaView>
      );
}