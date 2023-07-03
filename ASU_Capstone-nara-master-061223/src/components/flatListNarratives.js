import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContextNew} from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import UserIcon from './UserIcon';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { getDrawerStatusFromState } from '@react-navigation/drawer';
import { useIsFocused } from "@react-navigation/native";


const Item = ({mainChar, otherChar, relationship, onPress, title}) => (
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
      height: 200,
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
    {mainChar} (P) and {otherChar}'s narrative
    </Text>
    <Text
      style={{
        fontWeight: '300',
        fontSize: 16,
        color: '#18163A',
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
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

const UserFlatList = (input) => {
  const {user} = useContext(AuthContextNew);
  const [data, setData] = useState(null);
  const [term, setTerm] = useState('');
  const [posts, setPosts] = useState([]);
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
        userData.push(element);
      });
      setData(userData);
    });
  } 
  
  useEffect(() => {
    isFocused && getData()
  }, [isFocused]);

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

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const ITEM_HEIGHT = 50

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

export default UserFlatList;

//<UserIcon userName={mainChar} inColor= {'#FFF5EF'} outColor= {'#18163A'} size={45} fontSize={24}/>
//<UserIcon userName={otherChar} inColor= {'#FFF5EF'} outColor= {'#18163A'} size={45} fontSize={24}/>