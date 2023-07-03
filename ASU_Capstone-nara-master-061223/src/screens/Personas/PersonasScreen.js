import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AsyncStorage} from 'react-native';
import {AuthContextNew} from '../../navigation/authProvider';
import {ScrollView} from 'react-native-gesture-handler';
import CreateProfilePersonas from './createProfilePersonas';
import Animated from 'react-native-reanimated';
import CustomButtonPersonas from '../../components/Personas/customButtonPg1Personas';
import BackButton from '../../components/backButton';
import BackButtonMenuPersona from '../../components/backButtonMenuPersona';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import UserFlatList from '../../components/flatListPersonas';
import AddHeader from '../../components/Personas/addHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuIcon from '../../assets/menu.svg';
import { DrawerActions } from '@react-navigation/native';
import BackButtonCreate from '../../components/backButtonCreate';
import { Mixpanel } from 'mixpanel-react-native';


const PersonasScreen = ({navigation}) => {
  
  const [input, setInput] = useState('')

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();
  
  return (


    <SafeAreaView 
    style={styles.main_container}>

      <View style={{paddingTop: 0}}>
      </View>
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
            icon={<MenuIcon name="menu-icon" size={30} color="#18163A" />}
          />
          <BackButtonCreate
            label={'back button'}
            onPress={() => {navigation.navigate('CreateProfilePersonas'); mixpanel.track("Persona_ProfileStart");}}
            icon={<Ionicons name="add-outline" size={30} color="#18163A" />}
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
          Personas
        </Text>
      </View>
 
          <ScrollView>
        <UserFlatList input = {input}/>
        </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  main_container : {
    flex: 1,
    backgroundColor: '#9CC8C6',
  },

})
export default PersonasScreen;
