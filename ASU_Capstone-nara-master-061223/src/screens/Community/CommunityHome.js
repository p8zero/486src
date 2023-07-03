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


//Narrative
export default function HomeScreen({navigation}) {
  const [input, setInput] = useState('')
  const [searchNarrative, doSearch] = useState('')

    return (
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#F6DEDC',
          }}>
            <View style={{
              width: '95%',
             marginLeft: '2.5%',
             marginTop: '5%',
              flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
            }}>
              <BackButtonMenu
                label={'back button'}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
              />
            <BackButtonCreateNarratives
            label={'back button'}
            onPress={() => {navigation.navigate('NarrativesScreen')}}
            icon={<Ionicons name="add-outline" size={30} color="#FFF5EF" />}
          />
            </View>
         
      
        <TextInput
            style={styles.search}
            onChangeText={newText => doSearch(newText)}
            defaultValue={searchNarrative}
        /> 

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

    <TouchableOpacity 
      style={{backgroundColor: '#FFF5EF', 
            width: '60%', 
            height: 240, 
            flexDirection: 'row', 
            borderRadius: 30,
            marginLeft: '5%', 
            marginTop: '10%'}}
      onPress={() => {clarityInTheMoment = true; navigation.navigate('ChooseProfiles');
                      mixpanel.track('ClarityMoment', {'Flow': 'Moment'});
    }}
      >
      <View style={{flex: 1, justifyContent: 'center',}}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 2,}}>
          Want to be there but don't know how
        </Text>

        

        </View>
    </TouchableOpacity>

        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '5%',
          }}>
          Your Community
        </Text>
      </View>
 
    
          <ScrollView>
        <NarrativeFlatList input = {input}/>
        </ScrollView>

        </SafeAreaView>
      );
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