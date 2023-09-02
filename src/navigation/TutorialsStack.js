import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NaraBasicsScreen from '../screens/Tutorials/NaraBasicsScreen';
import TutorialsScreen from '../screens/Tutorials/TutorialsScreen';
import CreatingAPersonaVideoScreen from '../screens/Tutorials/CreatingAPersonaVideoScreen';
import CreatingANarrativeVideoScreen from '../screens/Tutorials/CreatingANarrativeVideoScreen';
import YourNarrativesVideoScreen from '../screens/Tutorials/YourNarrativesVideoScreen';

const Stack = createNativeStackNavigator();
const TutorialsStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={TutorialsScreen} name="TutorialsScreen"/>
        <Stack.Screen component={NaraBasicsScreen} name="NaraBasicsScreen"/>
        <Stack.Screen component={CreatingAPersonaVideoScreen} name="CreatingAPersonaVideoScreen"/>
        <Stack.Screen component={CreatingANarrativeVideoScreen} name="CreatingANarrativeVideoScreen"/>
        <Stack.Screen component={YourNarrativesVideoScreen} name="YourNarrativesVideoScreen"/>
      </Stack.Navigator>
        
    )
}
export default TutorialsStack;