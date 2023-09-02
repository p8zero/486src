import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import { DrawerActions } from '@react-navigation/native';
import MenuIcon from '../../assets/menu.svg';
import BackButtonMenu from '../../components/backButtonMenu';

const SettingsScreen = ({navigation}) => {
    return (
    <SafeAreaView
      style={{
          flex: 1,
          backgroundColor: '#FFF5EF',
    }}>
          <View style={{
            width: '95%',
            marginLeft: '2.5%',
            top: '5%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <BackButtonMenu
              label={'back button'}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
            />
      

      </View>

      <View style={{ 
        left: '4%', marginTop: '10%' }}>
        <TouchableOpacity
          onPress={() => {navigation.navigate('AccountScreen')}}
          style={{
            padding: '0%', 
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '6%',
          }}>
          <Text style={{ 
            fontFamily: 'WorkSans-light',
            fontSize: 20, 
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 2,
          }}>
              Manage Subscription
          </Text>
          <Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {navigation.navigate('EditUserNameScreen')}}
          style={{

            width: '90%',
            borderRadius: 5, 
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10%',
          }}>
          <Text style={{ 
            fontFamily: 'WorkSans-light',
            fontSize: 20, 
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 2,
          }}>
              Change UserName
          </Text>
          <Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {navigation.navigate('AboutScreen')}}
          style={{

            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10%',
          }}>
          <Text style={{ 
            fontFamily: 'WorkSans-light',
            fontSize: 20, 
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 2,
          }}>
              About
          </Text>
          <Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
        </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}
export default SettingsScreen;