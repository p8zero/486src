import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import PersonasScreen from '../screens/Personas/PersonasScreen';
import Settings from './indexSettings';
import Personas from './indexPersonas';
import Narratives from './indexNarratives';
import Tutorials from './indexTutorials';
import Community from './indexCommunity'
//import RealAdviser from './indexRealAdviser';
import Home from './indexHome';
import NarrativesScreen from '../screens/Narratives/NarrativesScreen';
import SettingsScreen from '../screens/Settings/settingsScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import CustomDrawerNew from '../components/customDrawerNew';
import UserFlatList from '../components/flatListPersonas';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FireBaseApp from './fireStore';
import flatListHome from '../components/Home/flatListHome';
import CheckBox from '../components/Home/checkBox';
import Example from '../components/Home/bottomPopUp';
import TutorialIcon from '../assets/tutorial-icon.svg';
import NarativeIcon from '../assets/narrativeIcon.svg'


const Drawer = createDrawerNavigator();

const AppStackNew = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerNew {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#EDBDBA',
        drawerActiveTintColor: '#18163A',
        drawerInactiveTintColor: '#18163A',
        drawerLabelStyle: { marginLeft: -10, 
          fontSize: 18, 
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 1,
         },
      }}>
      <Drawer.Screen
        component={Narratives}
        name="Narratives"
        options={{
          drawerIcon: ({ color }) => (
            <NarativeIcon height={24} width={24} color={'#18163A'} />
          ),
        }}
      />
      <Drawer.Screen
        component={Personas}
        name="Personas"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={'#18163A'} />
          ),
        }}
      />
      <Drawer.Screen

        component={Tutorials}
        name="How Nara Works"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="git-merge-outline" size={24} color={'#18163A'} />
          ),
        }}
      />
      <Drawer.Screen
        component={Community}
        name="Community"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-chatbubbles-outline" size={24} color={'#18163A'} />
          ),
        }}
      />
      <Drawer.Screen
        component={Settings}
        name="Settings"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={'#18163A'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default AppStackNew;