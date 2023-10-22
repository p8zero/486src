import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import ClarityFortheFuture from '../screens/Narratives/ClarityFortheFuture';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomeScreen} name="HomeScreen"/>
        <Stack.Screen component={ClarityFortheFuture} name="ClarityFortheFuture" />
      </Stack.Navigator>
        
    )
}
export default HomeStack;