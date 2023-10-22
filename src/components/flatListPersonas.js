/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContextNew} from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import UserIcon from './UserIcon';
import { useIsFocused } from '@react-navigation/native';


const Item = ({name, age, gender, onPress}) => (
  <TouchableOpacity
    onPress= {onPress}
    style={{
      flex: 1,
      flexDirection: 'row',
      paddingLeft: '4%',
      alignItems: 'center',
      backgroundColor: '#FFF5EF',
      borderRadius: 50,
      marginBottom: '7%',
      width: '100%',
      height: 85,
    }}>
      <View style={{}}>
      <UserIcon userName={name} inColor= {'#FFF5EF'} outColor= {'#18163A'} size={70} fontSize={30}/>
      </View>
    <View style={{marginLeft: 20, justifyContent: 'center', width: '45%'} }>
    <Text
      style={{
        flexDirection: 'row',
        fontWeight: '300',
        fontSize: 18,
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginLeft: '10%',
        letterSpacing: 2,
        color: '#000000',
      }}>

      {name}
    </Text>
    </View>
    <View style={{marginLeft: 10, justifyContent: 'center', width: '20%'} }>
    <Text
      style={{
        flexDirection: 'row',
        fontWeight: '300',
        fontSize: 14,
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginLeft: '5%',
        letterSpacing: 0,
        color: '#000000',
      }}>

      {age}
    </Text>
    <Text
      style={{
        flexDirection: 'row',
        fontWeight: '300',
        fontSize: 14,
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginLeft: '5%',
        letterSpacing: 0,
        color: '#000000',
      }}>

      {gender}
    </Text>
    </View>
  </TouchableOpacity>
);

const UserFlatList = ({input}) => {
  const {user} = useContext(AuthContextNew);
  const [data, setData] = useState(null);
  //const [term, setTerm] = useState('');
  //const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const userData = [];
  const isFocused = useIsFocused();


  const getData = () => {
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
        if (input === '' || element.data.name.includes(input)) {
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
      name={item.data.name}
      gender={item.data.gender}
      age={item.data.age}
      onPress={() => navigation.navigate('SeeProfileButtons', {
        name: `${item.data.name}`,
        age: `${item.data.age}`,
        gender: `${item.data.gender}`,
        id: `${item.id}`,
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

export default UserFlatList;