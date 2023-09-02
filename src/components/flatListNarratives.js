/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import {AuthContextNew} from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';




const Item = ({mainChar, otherChar, relationship, onPress, title, flow}) => (

  
  
  <TouchableOpacity
    onPress= {onPress}
    style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF5EF',
      borderRadius: 30,
      marginBottom: '5%',
      width: '100%',
      height: 250,
    }}>
      <View style={{}}>
        <Text
      style={{
        fontWeight: '300',
        color: '#18163A',
        fontSize: 20,
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginHorizontal: '5%',
        marginBottom: '2%',
        letterSpacing: 1,
      }}>
    {mainChar}'s Story with {otherChar}
    </Text>
    <Text
      style={{
        fontWeight: '300',
        fontSize: 16,
        color: '#18163A',
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginTop: '2%',
        marginHorizontal: '5%',
        marginBottom: '8%',
        letterSpacing: 1,
      }}>
    ({otherChar} is {mainChar}'s {relationship})
    </Text>
    <Text
      style={{
        fontWeight: '300',
        fontSize: 18,
        color: '#18163A',
        fontStyle: 'italic',
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginHorizontal: '5%',
        letterSpacing: 1,
      }}>

      {title}
    </Text>

      </View>

  </TouchableOpacity>
);

const NarrativeFlatList = ({ input }) => {
  const {user} = useContext(AuthContextNew);
  const [data, setData] = useState(null);
  //const [term, setTerm] = useState('');
 // const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const userData = [];
  const isFocused = useIsFocused();

  


  const getData = () => {
    firestore()
    .collection('Users')
    .doc(user.uid)
    .collection('Narratives')
    .get()
    .then(collectionSnapshot => {
      collectionSnapshot.forEach(documentSnapshot => {
        const element = {};
        element.id = documentSnapshot.id;
        element.data = documentSnapshot.data();
        if (input === '' || element.data.mainChar.includes(input)) {
          userData.push(element);
        }
      });
      setData(userData);
    });
  };

  useEffect(() => {
    isFocused && getData();
   console.log(input);
  }, [isFocused, input]);

  const renderItem = ({item}) => (
    <Item
      mainChar={item.data.mainChar}
      otherChar={item.data.otherChar}
      relationship={item.data.relationship}
      title={item.data.title}
      onPress={() => navigation.navigate('SeeNarrativesButtons', {
       mainChar: `${item.data.mainChar}`,
       otherChar: `${item.data.otherChar}`,
       relationship: `${item.data.relationship}`,
       id: `${item.id}`,
       title: `${item.data.title}`,
       flow: `${item.data.flow}`,
       data: `${item.data.data}`,
       negativeFeeling: `${item.data.negativeFeeling}`,
       positiveFeeling: `${item.data.positiveFeeling}`,
       narrDesc: `${item.data.narrDesc}`,
       age: `${item.data.age}`,
       gender: `${item.data.gender}`,
       trait: `${item.data.trait}`,
       prediction: `${item.data.prediction}`,
    })}
    />
  );


  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        initialNumToRender={6}
        keyExtractor={item => item.id}
        style={{paddingTop: '5%', paddingHorizontal: '5%'}}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

export default NarrativeFlatList;
