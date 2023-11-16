/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, useColorScheme, ScrollView, TouchableOpacity} from 'react-native';
import BackButtonMenuPersona from '../../components/backButtonMenuPersona';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserFlatList from '../../components/flatListPersonas';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuIcon from '../../assets/menu.svg';
import { DrawerActions } from '@react-navigation/native';
import BackButtonCreate from '../../components/backButtonCreate';
import { Mixpanel } from 'mixpanel-react-native';
import InputField from '../../components/inputField';

const PersonasScreen = ({navigation}) => {

  const [input, setInput] = useState('');
  const colorScheme = useColorScheme();

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel('2100a249cd1d52d225d1c040909d6c79', trackAutomaticEvents);
  mixpanel.init();

  return (


    <SafeAreaView
    style={styles.main_container}>

      <View style={{paddingTop: 0}} />
      <View style={{
          width: '95%',
          marginHorizontal: '2.5%',
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <BackButtonMenuPersona
            label={'back button'}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            icon={<MenuIcon name="menu-icon" size={30} color="#000000" />}
          />
      <View style={{justifyContent: 'center',}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateProfilePersonas');
          }}
          style={{
            backgroundColor: '#18163A',
            borderRadius: 50,
            width: 190,
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
            Create Character
          </Text>
        </TouchableOpacity>
      </View>
            
        </View>

      <View style={{marginTop: '8%',
       marginBottom: '3%',
        flexdirection: 'row',
        justifyContent: 'center',
        marginLeft: '5%',
}}>
        <Text style={{
          fontFamily: 'WorkSans-Light',
          fontSize: 24,
          fontWeight: '300',
          letterSpacing: 1,
          color: '#000000',
          }}>
          Characters You've Created
        </Text>
      </View>
      <InputField
      label="search character"
      value={input}
      onChangeText={setInput}
      color = {colorScheme}
    />

    <ScrollView>
      <UserFlatList input={input} />
    </ScrollView>
  </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  main_container : {
    flex: 1,
    backgroundColor: '#9CC8C6',
  },

});
export default PersonasScreen;
