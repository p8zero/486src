import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './indexSettings';
import Personas from './indexPersonas';
import Narratives from './indexNarratives';
import Tutorials from './indexTutorials';
import Community from './indexCommunity';
import CustomDrawerNew from '../components/customDrawerNew';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NarativeIcon from '../assets/narrativeIcon.svg'


const Drawer = createDrawerNavigator();

const AppStackNew = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerNew {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#F6DEDC',
        drawerActiveTintColor: '#000000',
        drawerInactiveTintColor: '#000000',
        drawerLabelStyle: { marginLeft: -10, 
          fontSize: 18, 
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 1,
         },
      }}>
      <Drawer.Screen
        component={Narratives}
        name="Stories"
        options={{
          drawerIcon: ({ color }) => (
            <NarativeIcon height={24} width={24} color={'#000000'} />
          ),
        }}
      />
      <Drawer.Screen
        component={Personas}
        name="Characters"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={'#000000'} />
          ),
        }}
      />
      <Drawer.Screen
        component={Community}
        name="Community"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color={'#000000'} />
          ),
        }}
      />
      <Drawer.Screen

        component={Tutorials}
        name="Notes on nara"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="git-merge-outline" size={24} color={'#000000'} />
          ),
        }}
      />
      <Drawer.Screen
        component={Settings}
        name="Settings"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={'#000000'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default AppStackNew;

//<Drawer.Screen
//component={Community}
//name="Community"
//options={{
//  drawerIcon: ({ color }) => (
//    <Ionicons name="earth-outline" size={24} color={'#000000'} />
//  ),
//}}
///>