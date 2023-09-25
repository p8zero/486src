/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, ScrollView, useColorScheme } from 'react-native';
import { AuthContextNew } from '../../navigation/authProvider';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import UserIcon from '../../components/UserIcon';
import { Mixpanel } from 'mixpanel-react-native';
import InputField from '../../components/inputField';

export default function NextScreen({ navigation }) {
  const { user } = useContext(AuthContextNew);
  const colorScheme = useColorScheme();

  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [select, setSelect] = useState([]);
  const [countOfUsers, setCountOfUsers] = useState(0);

  const mixpanel = new Mixpanel('2100a249cd1d52d225d1c040909d6c79', true);
  mixpanel.init();

  useEffect(() => {
    // Fetch and set the selected personas when the component mounts
    firestore()
      .collection('Users')
      .doc(user.uid)
      .collection('Personas')
      .get()
      .then((collectionSnapshot) => {
        const selectedPersonas = collectionSnapshot.docs.map((documentSnapshot) => ({
          id: documentSnapshot.id,
          data: documentSnapshot.data(),
          selected: false, // Initialize all personas as unselected
        }));
        setSelect(selectedPersonas);
      });
  }, [user.uid]);

  const handleOnPress = (item) => {
    // Check if the item is already selected
    const isItemSelected = item.selected;
    if ((isItemSelected && countOfUsers > 0) || (!isItemSelected && countOfUsers < 2)) {
      // Toggle the selected state
      item.selected = !isItemSelected;
      // Update the select state
      setSelect((prevState) =>
        prevState.map((val) => (val.id === item.id ? item : val))
      );
      // Update the count of selected users
      setCountOfUsers((prevCount) =>
        isItemSelected ? prevCount - 1 : prevCount + 1
      );
    }
  };

  useEffect(() => {
    const newData = select.filter(
      (item) => input === '' || item.data.name.includes(input)
    );
    setData(newData);
  }, [input, select]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleOnPress(item)}
      style={item.selected ? styles.buttonSelected : styles.button}>
      <View>
        <UserIcon
          userName={item.data.name}
          inColor={'#FFF5EF'}
          outColor={'#18163A'}
          size={70}
          fontSize={30}
        />
      </View>
      <View style={{ marginLeft: 20, justifyContent: 'center', width: '45%' }}>
        <Text style={item.selected ? styles.textSelected : styles.text}>
          {item.data.name}
        </Text>
      </View>
      <View style={{ marginLeft: 10, justifyContent: 'center', width: '20%' }}>
        <Text style={item.selected ? styles.textSelected2 : styles.text2}>
          {item.data.age}
        </Text>
        <Text style={item.selected ? styles.textSelected2 : styles.text2}>
          {item.data.gender}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const navigateToPerspective = () => {
    // Extract user data from selected personas
    const selectedPersonas = select.filter((item) => item.selected);
    const userNames = selectedPersonas.map((item) => item.data.name);
    const userGenders = selectedPersonas.map((item) => item.data.gender);
    const userAges = selectedPersonas.map((item) => item.data.age);
    const userTraits = selectedPersonas.map((item) => item.data.traits);

    
    // Navigate to Perspective screen with user data
    navigation.navigate('Perspective', {
      people: selectedPersonas,
      users: userNames,
      genders: userGenders,
      ages: userAges,
      traits: userTraits,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F6DEDC' }}>
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
          onPress={() => { navigation.navigate('NarrativesScreen'); }}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#000000" />}
        />
        <BackButton
          label={'back button'}
          onPress={() => { navigation.navigate('HomeScreen'); }}
          icon={<Ionicons name="close" size={24} color="#000000" />}
        />
      </View>
      <View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          marginTop: '15%',
          marginBottom: '3%',
          width: '70%',
          marginHorizontal: '2.5%',
          height: 60,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
      }}>
      <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            justifyContent: 'center',
            fontWeight: '300', 
            fontSize: 22,
            marginLeft: "5%",
            marginRight: '5%',
            letterSpacing: 0,
            flexWrap: 'wrap',}}>
              Who are the characters in the story?
        </Text>
      </View> 


      <InputField
      label="search by character"
      value={input}
      onChangeText={setInput}
      color = {colorScheme}
    />
      <ScrollView style={{ marginTop: '2%' }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
        <View style={{alignItems:'flex-end', marginTop: '5%'}}>
        <TouchableOpacity
          onPress={() => {
            mixpanel.timeEvent('Narrative Creation');
            mixpanel.track('Narrative_ChoosePersonas');
            navigateToPerspective();
          }}
          style={{
            backgroundColor: '#EDBDBA',
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            width: 175,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '300',
              fontSize: 20,
              letterSpacing: 3,
              color: '#000000',
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
    flexDirection: 'row',
    fontWeight: '300',
    fontSize: 18,
    fontFamily: 'WorkSans-Light',
    textAlign:'left',
    marginLeft: '10%',
    letterSpacing: 2,
    color: '#000000',
  },
  textSelected: {
    flexDirection: 'row',
    fontWeight: '300',
    fontSize: 18,
    fontFamily: 'WorkSans-Light',
    textAlign:'left',
    marginLeft: '10%',
    letterSpacing: 2,
    color: '#000000',
  },
  text2: {
    flexDirection: 'row',
    fontWeight: '300',
    fontSize: 14,
    fontFamily: 'WorkSans-Light',
    textAlign:'left',
    marginLeft: '5%',
    letterSpacing: 0,
    color: '#000000',
  },
  textSelected2: {
    flexDirection: 'row',
    fontWeight: '300',
    fontSize: 14,
    fontFamily: 'WorkSans-Light',
    textAlign:'left',
    marginLeft: '5%',
    letterSpacing: 0,
    color: '#000000',
  },
});