import React, {useContext, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContextNarratives} from '../../navigation/AuthProviderNarratives';
import { Mixpanel } from 'mixpanel-react-native';

import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";

export default function Perspective({route, navigation}) {
  let mainCharData = [];
  let otherCharData = [];
  let userNameMain = [];
  let userNameOther = [];
  global.mainChar = ''
  global.otherChar = ''
  const {people, users, genders, ages, traits} = route.params;
  const {createNarrative} = useContext(AuthContextNarratives);
  const [mainChar, setMainChar] = useState(mainCharData)
  const [otherChar, setOtherChar] = useState(otherCharData)
  const [gender, setGender] = useState()
  const [age, setAge] = useState(0)
  const [trait, setTrait] = useState(0)


  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  const {height: SCREEN_HEIGHT} = Dimensions.get('window');

  userData = [
    {
      id: 1,
      user: users[0],
      gender: genders[0],
      age: ages[0],
      trait: traits[0],
      selected: false,
    },
    {
      id: 2,
      user: users[1],
      gender: genders[1],
      age: ages[1],
      trait: traits[1],
      selected: false,
    },
  ];

  const [select, setSelect] = useState(userData);

  const handleOnPress = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return {...val, selected: false};
      }
    });

    setSelect(newItem);

    selectedChar = newItem.filter(item => !(item.selected == false));
    nonSelectedChar = newItem.filter(item => !(item.selected == true));
    setGender(selectedChar[0].gender)
    setAge(selectedChar[0].age)
    setTrait(selectedChar[0].trait)
    const jsonValue = selectedChar;
    const jsonValue2 = nonSelectedChar;
    mainCharData = jsonValue;
    otherCharData = jsonValue2;
    setMainChar(mainCharData)
    setOtherChar(otherCharData)
  };

  const getData = () => {
    const samp = Object.values(mainChar)
    const samp2 = Object.values(otherChar)
    for (var j = 0; j < samp.length; j++) {
        userNameMain.push(samp[j].user);
        userNameOther.push(samp2[j].user)

    }
    global.mainChar = userNameMain[0]
    global.otherChar = userNameOther[0]
  };



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          top: '3%',
          marginHorizontal:'2.5%',
          width: '95%',
        }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('ChooseProfiles');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('HomeScreen')}}
          icon={<Ionicons name="close" size={24} color="#18163A" />}
          />
      </View>
      <View
        style={{marginBottom: '0%', marginTop: '8%', backgroundColor: '#FFF5EF',
        flexdirection: 'row',
        justifyContent: 'center',
        width: '55%',
        height: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,}}>
        <Text
          style={{
            fontFamily: 'WorkSans-Regular',
            fontSize: 20,
            fontWeight: '300',
            marginLeft: '5%',
            marginRight: '5%',
            color: '#18163A',
            letterSpacing: 0,
          }}>
          Who's the narrator?
        </Text>

        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'center', marginTop: '-5%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PerspectiveTutorial')
            }}
            style={{
              backgroundColor: '#EDBDBA',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 150,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 20,
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 1,
                color: '#18163A',
                fontFamily: 'WorkSans-Regular',
              }}>
              Choosing a Narrator
            </Text>
          </TouchableOpacity>
  
      </View>

        <ScrollView style={{}}>
          <FlatList
            contentContainerStyle={{alignItems:'center', marginTop: '3%'}}
            horizontal={false}
            data={select}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  handleOnPress(item); 
                }}
                style={item.selected ? styles.buttonSelected : styles.button}>
                <Text style={item.selected ? styles.textSelected : styles.text}>
                  {item.user}
                </Text>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    alignItems:'center',
                    justifyContent: 'center',
                  }}
                />
              );
            }}
          />
       

    
        <View style={{alignItems: 'flex-end', justifyContent: 'center', marginTop: '3%'}}>
          <TouchableOpacity
            onPress={() => {getData();
              mixpanel.track("Narrative_Perspective");
              navigation.navigate('Relationship', {
                mainChar: userNameMain,
                otherChar: userNameOther,
                gender: gender,
                age: age,
                trait: trait
              })
            }}
            style={{
              backgroundColor: '#EDBDBA',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 175,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 50,
                fontWeight: '300',
                fontSize: 20,
                letterSpacing: 4,
                color: '#18163A',
                fontFamily: 'WorkSans-Regular',
              }}>
              Next
            </Text>
          </TouchableOpacity>
  
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDBDBA',
    borderRadius: 30,
    marginTop: '5%',
    marginBottom: '3%',
    width: 220,
    height: 160,
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5EF',
    borderRadius: 30,
    marginTop: '5%',
    marginBottom: '3%',
    width: 220,
    height: 160,
  },
  text: {
    paddingTop: 0,
    fontWeight: '300',
    fontSize: 24,
    color: '#18163A',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 4
  },
  textSelected: {
    paddingTop: 0,
    fontWeight: '300',
    fontSize: 24,
    color: '#18163A',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 4,
  },
  verticalStyle: {
    justifyContent: 'flex-start', 
    padding: 0, 
    marginVertical: 0, 
    marginBottom: 10,
  },
  textStyle: { 
    textDecorationLine: "none", 
    fontFamily: 'WorkSans-Regular', 
    fontWeight: '400', 
    letterSpacing: 2,
    color: '#282561', 
  },
});