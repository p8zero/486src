import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputFieldPersonas from '../../components/Personas/inputFieldPg2Personas';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButtonPersonas from '../../components/Personas/customButtonPg1Personas';
import Notes from '../../components/notes';
import ViewInfoButtonPersonas from '../../components/Personas/viewInfoButtonPg3Personas';
import CustomButton2Personas from '../../components/Personas/customButtonPg3Personas';
import { AuthContextPersonas } from '../../navigation/AuthProviderPersonas';


const SeeProfilePersonas = ({navigation}) => {

  const {personName} = useContext(AuthContextPersonas)
  const {personAge} = useContext(AuthContextPersonas)
  const {personGender} = useContext(AuthContextPersonas)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDBDBA',
      }}>
      <View style={{position: 'absolute', top: 50, left: 1, padding: 20}}>
        <BackButton
          label={'back button'}
          onPress={() => navigation.navigate('CreateProfilePersonas')}
          icon={<Ionicons name="arrow-back-outline" size={35} color="#666" />}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: 'AppleSDGothicNeo-Light', fontSize: 20}}>
            {personName}
          </Text>
        </View>

        <View style={{paddingTop: 50}}>
          <ViewInfoButtonPersonas
            label1="Gender"
            label2="Age"
            val1={personGender}
            val2={personAge}
          />

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <CustomButton2Personas label="Edit Persona" />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 20,
            }}>
            <CustomButton2Personas label="View Personas" onPress={() => navigation.navigate('PersonasScreen')} />
          </View>
        </View>
        <Notes
          label={`${personName}....`}
          keyboardType="email-address"
          nameOfNotes="My Notes"
        />
      </View>
    </SafeAreaView>
  );
};

export default SeeProfilePersonas;
