import React, {useContext, useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {AuthContextNew} from '../../navigation/authProvider';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserFlatList from '../../components/flatListPersonas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import UserIcon from '../../components/UserIcon';
import { Mixpanel } from 'mixpanel-react-native';

export default function NextScreen({navigation}) {
  const {user} = useContext(AuthContextNew);
  const [data, setData] = useState(null);
  const [countOfUsers, setCountOfUsers] = useState(0);
  const userData = [];
  let peopleData = [];
  let userNames = [];
  let userGenders = [];
  let userAges = [];
  let userTraits = [];


  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  const [pData, setpData] = useState(peopleData)

  useEffect(() => {
    const fetchData = async() => {
        try {
            firestore()
            .collection('Users')
            .doc(user.uid)
            .collection('Personas')
            .get()
            .then(collectionSnapshot => {
              
              collectionSnapshot.forEach(documentSnapshot => {
                const element = {};
                element.id = documentSnapshot.id;
                element.data = documentSnapshot.data();
                element.selected = false;
                userData.push(element);
              });

              setData(userData);

            });
        } catch(err) {
            console.error(err);
        }
    };
    fetchData();
}, []);

const [select, setSelect] = useState(userData);

const handleOnPress = item => {
  if (countOfUsers < 2) {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setSelect(newItem);
    selectedPersonas = newItem.filter(item => !(item.selected == false));
    const jsonValue = selectedPersonas;
    peopleData = jsonValue;
    setCountOfUsers(peopleData.length)
    setpData(peopleData)
  }

  else {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: false};
      } else {
        return val;
      }
    });
    setSelect(newItem);
    selectedPersonas = newItem.filter(item => !(item.selected == false));
    const jsonValue = selectedPersonas;
    peopleData = jsonValue;
    setCountOfUsers(peopleData.length)
    setpData(peopleData)
  }
};

const getData = () => {
  const samp = Object.values({pData})[0]
  for (var j = 0; j < samp.length; j++){
      userNames.push(samp[j].data.name);
      userGenders.push(samp[j].data.gender)
      userAges.push(samp[j].data.age)
      userTraits.push(samp[j].data.traits)


  }
}

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>
        <View
        style={{
         // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          top: '10%',
          marginHorizontal: '2.5%',
          padding: '0%',
          width: '95%',
        }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('NarrativesScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('HomeScreen')}}
          icon={<Ionicons name="close" size={24} color="#18163A" />}
          />
      </View>
      <View
        style={{marginTop: '15%', marginLeft: '4%', marginRight: '20%'}}>
        <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 22,
            fontWeight: '300',
            letterSpacing: 0,
            color: '#18163A'
          }}>
          Who is this narrative about?
        </Text>
        <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 18,
            fontWeight: '300',
            letterSpacing: 0,
            color: '#18163A'
          }}>
          (Create in "Personas")
        </Text>
      </View>
      
      <View style={{alignItems: 'center', 
            justifyContent: 'center', 
            borderTopWidth: 1,
            borderTopColor: '#FFF5EF', 
            marginTop: '3%',
            marginBottom: '3%'}}>

        </View>
      

        <ScrollView style={{}}>
        <FlatList
          data={select}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                handleOnPress(item);
              }}
              style={item.selected ? styles.buttonSelected : styles.button}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <UserIcon userName={item.data.name} inColor= {'#FFF5EF'} outColor= {'#18163A'} size={70} fontSize={30}/>
              </View>
              <Text style={item.selected ? styles.textSelected : styles.text}>
                {item.data.name}
              </Text>

            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        /> 
        
              <View style={{alignItems:'flex-end', marginTop: '5%'}}>
          <TouchableOpacity
          onPress={() => {
            getData();
            mixpanel.timeEvent("Narrative Creation");
            mixpanel.track("Narrative_ChoosePersonas")
            navigation.navigate('Perspective', {
              people: {pData},
              users: userNames,
              genders: userGenders,
              ages: userAges,
              traits: userTraits
            });
          }}
            style={{
              backgroundColor: '#EDBDBA',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 175,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10%'
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '300',
                fontSize: 20,
                letterSpacing: 3,
                color: '#18163A',
                fontWeight: '300',
                fontFamily: 'WorkSans-Regular',
              }}>
              Next
            </Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
      </View>
    

  );
}

const styles = StyleSheet.create({
  buttonSelected: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: '#EDBDBA',
    borderRadius: 60,
    marginBottom: '4%',
    marginLeft: '5%',
    width: '90%',
    height: 90,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: '#FFF5EF',
    borderRadius: 60,
    marginBottom: '4%',
    marginLeft: '5%',
    width: '90%',
    height: 90,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    fontWeight: '300',
    fontSize: 20,
    color: '#18163A',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 2,
  },
  textSelected: {
    flex: 1,
    flexDirection: 'row',
    fontWeight: '300',
    fontSize: 20,
    color: '#18163A',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 4,
  },
});
