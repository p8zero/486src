import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommunityHome from '../screens/Community/CommunityHome';
import YourNarativeScreen from '../screens/Community/YourNarativeScreen';
import YourCommunityScreen from '../screens/Community/YourCommunityScreen';
import CommunityStory from '../screens/Community/CommunityStory';
import ComunityProfile from '../screens/Community/SeeCommunityButton';
import PotentialConnections from '../screens/Community/PotentialConnections';


const Stack = createNativeStackNavigator();
const CommunityStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={CommunityHome} name="CommunityScreen"/>
        <Stack.Screen component={YourNarativeScreen} name="YourNarativeScreen"/>
        <Stack.Screen component={YourCommunityScreen} name="YourCommunityScreen"/>
        <Stack.Screen component={CommunityStory} name="CommunityStory"/>
        <Stack.Screen component={ComunityProfile} name="ComunityProfile"/>
        <Stack.Screen component={PotentialConnections} name="PotentialConnections"/>
         </Stack.Navigator>
        
    )
}
export default CommunityStack;