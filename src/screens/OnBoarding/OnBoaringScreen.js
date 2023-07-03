import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogoSvg from '../../assets/snyk.svg';
import naraLogo from '../../assets/naraLogo.svg';
import Svg, {
  Use,
  Image,
} from 'react-native-svg';
import { MyAppText, textStyles } from "../../MyAppText";

const OnBoardingScreen = ({navigation}) => {
    return (
        <SafeAreaView
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        }}>
        <View style={{marginTop: 20}}>
            <MyAppText
            style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#20315f',
            }}>
            Naralytics
            </MyAppText>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <LogoSvg width={300} hieght={300} /> 
        </View>
        <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
            backgroundColor: '#c2185b', 
            padding: 20, 
            width: '90%',
            borderRadius: 5, 
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 50,
            }}>
            <MyAppText style={{
            fontWeight: 'bold', 
            fontSize: 18, 
            color: '#fff',
            }}>
                Let's Begin
            </MyAppText>
            <Ionicons name='arrow-forward-outline' size={22} color="#fff" /> 
        </TouchableOpacity>
        </SafeAreaView>
        )
    }
    export default OnBoardingScreen;
    