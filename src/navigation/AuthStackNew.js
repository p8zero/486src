import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen2 from '../screens/LogIn/LogInScreen2';
import RegisterScreen2 from '../screens/LogIn/registerScreen2';
import PaywallScreenY from '../screens/LogIn/PaywallScreenY';
import PaywallScreenM from '../screens/LogIn/PaywallScreenM';
import ForgotPassword from '../screens/LogIn/ForgotPassword';

const Stack = createNativeStackNavigator();
const AuthStackNew = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={LoginScreen2} name="LoginScreen" />
        <Stack.Screen component={RegisterScreen2} name="RegisterScreen" />
        <Stack.Screen component={PaywallScreenM} name="PaywallScreenM" />
        <Stack.Screen component={PaywallScreenY} name="PaywallScreenY" />
        <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
      </Stack.Navigator>
     // adding my yearly and monthly paywall screens and forgot password screen to the auth stack
    )
}
export default AuthStackNew;