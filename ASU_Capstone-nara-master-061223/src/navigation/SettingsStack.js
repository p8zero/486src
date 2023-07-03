import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/AccountScreen';
import AboutScreen from '../screens/About/AboutScreen';
import SettingsScreen from '../screens/Settings/settingsScreen';
import EditUserName from '../screens/Account/EditUserNameScreen';
import EditEmail from '../screens/Account/EditEmailScreen';
import TermsOfUse from '../screens/TermsOfUse/TermsOfUseScreen';
import PolicyScreen from '../screens/Policy/PolicyScreen';
const Stack = createNativeStackNavigator();
const SettingsStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={SettingsScreen} name="SettingsScreen"/>
        <Stack.Screen component={AccountScreen} name="AccountScreen"/>
        <Stack.Screen component={AboutScreen} name="AboutScreen" />
        <Stack.Screen component={TermsOfUse} name="TermsOfUseScreen" />
        <Stack.Screen component={PolicyScreen} name="PolicyScreen" />
        <Stack.Screen component={EditUserName} name="EditUserNameScreen" />
        <Stack.Screen component={EditEmail} name="EditEmailScreen" />
      </Stack.Navigator>
        
    )
}
export default SettingsStack;