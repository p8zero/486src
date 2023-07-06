import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MenuIcon from '../../assets/menu.svg';
import BackButton from '../../components/backButton';
import firestore from '@react-native-firebase/firestore';
import BackButtonMenu from '../../components/backButtonMenu';
import NarrativeFlatList from '../../components/flatListNarratives';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function YourNarativeScreen({navigation}) {

  const [input, setInput] = useState('')
  const [searchNarrative, doSearch] = useState('')
  
    return (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#F6DEDC',
        }}>
            <View style={{
            width: '95%',
            marginLeft: '2.5%',
            top: '5%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>

            <BackButtonMenu
                label={'back button'}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
              />
           <BackButton
                label={'back button'}
                onPress={() => {navigation.navigate('CommunityScreen')}}
                icon={<Ionicons name="close" size={24} color="#18163A" />}
              />
          
          </View>

          <View style={{}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '5%',
          }}>
          Your Narrative
        </Text>
            </View>
            
            <TextInput
            style={styles.search}
            onChangeText={newText => doSearch(newText)}
            defaultValue={searchNarrative}
        /> 

            <ScrollView>
        <NarrativeFlatList input = {input}/>
        </ScrollView>

        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    search:{
        backgroundColor: '#FFF5EF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#FFF5EF',
        borderWidth: 1,
        borderRadius: 50, 
        fontSize: 16, 
        fontFamily: 'WorkSans-Light',
        fontWeight: '300',
        letterSpacing: 2,
        marginBottom:20,
        marginTop:20
    },

}

)