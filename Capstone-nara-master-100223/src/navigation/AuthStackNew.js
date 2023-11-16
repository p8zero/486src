import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen2 from '../screens/LogIn/LogInScreen2';
import RegisterScreen2 from '../screens/LogIn/registerScreen2';
import PaywallScreen from '../screens/LogIn/PaywallScreen';
import ForgotPassword from '../screens/LogIn/ForgotPassword';

const Stack = createNativeStackNavigator();
const AuthStackNew = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={LoginScreen2} name="LoginScreen" />
        <Stack.Screen component={RegisterScreen2} name="RegisterScreen" />
        <Stack.Screen component={PaywallScreen} name="PaywallScreen" />
        <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
      </Stack.Navigator>
        
    )
}
export default AuthStackNew;