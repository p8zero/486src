import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';


const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomeScreen} name="HomeScreen"/>
      </Stack.Navigator>
        
    )
}
export default HomeStack;