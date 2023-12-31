import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonasScreen from '../screens/Personas/PersonasScreen';
import CreateProfilePersonas from '../screens/Personas/createProfilePersonas';
import SeeProfilePersonas from '../screens/Personas/SeeProfilePersonas';
import SeeProfileButtons from '../screens/Personas/SeeProfileButtons';
import SelectPersonas from '../screens/Personas/selectPersonas';
import SelectPersonasTutorial from '../screens/Personas/selectPersonasTutorial';
import CreateCustomPersonas from '../screens/Personas/createCustomPersonas';
import CreateCustomPersonasTutorial from '../screens/Personas/createCustomPersonasTutorial';
import FinalCustomPersona from '../screens/Personas/finalCustomPersona';
import FinalCustomPersonaTutorial from '../screens/Personas/finalCustomPersonaTutorial';
import NotesScreen from '../screens/Personas/NotesScreen';
import EditProfile from '../screens/Personas/editProfile';

const Stack = createNativeStackNavigator();
const PersonasStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={PersonasScreen} name="PersonasScreen"/>
        <Stack.Screen component={NotesScreen} name="NotesScreen"/>
        <Stack.Screen component={CreateProfilePersonas} name="CreateProfilePersonas" />
        <Stack.Screen component={EditProfile} name="EditProfile" />
        <Stack.Screen component={SeeProfilePersonas} name="SeeProfilePersonas" />
        <Stack.Screen component={SeeProfileButtons} name="SeeProfileButtons" />
        <Stack.Screen component={SelectPersonas} name="SelectPersonas" />
        <Stack.Screen component={SelectPersonasTutorial} name="SelectPersonasTutorial" />
        <Stack.Screen component={CreateCustomPersonas} name="CreateCustomPersonas" />
        <Stack.Screen component={CreateCustomPersonasTutorial} name="CreateCustomPersonasTutorial" />
        <Stack.Screen component={FinalCustomPersona} name="FinalCustomPersona" />
        <Stack.Screen component={FinalCustomPersonaTutorial} name="FinalCustomPersonaTutorial" />
      </Stack.Navigator>
        
    )
}
export default PersonasStack;