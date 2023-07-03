import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommunityHome from '../screens/Community/CommunityHome';
const Stack = createNativeStackNavigator();
const CommunityStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={CommunityHome} name="CommunityScreen"/>
         </Stack.Navigator>
        
    )
}
export default CommunityStack;