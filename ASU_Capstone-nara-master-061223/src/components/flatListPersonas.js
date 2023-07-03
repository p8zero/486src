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


const Item = ({name, onPress, icon}) => (
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
    <View style={{marginLeft: 20, justifyContent: 'center', width: '60%'} }>
    <Text
      style={{
        flexDirection: 'row',
        fontWeight: '300',
        fontSize: 20,
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginLeft: '30%',
        letterSpacing: 2,
      }}>
      
      {name}
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
    .collection('Personas')
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
   console.log(input)
  }, [isFocused]);

  const renderItem = ({item}) => (
    <Item
      name={item.data.name}   
      onPress={() => navigation.navigate('SeeProfileButtons', {
        name: `${item.data.name}`,
        age: `${item.data.age}`,
        gender: `${item.data.gender}`,
        id: `${item.id}`,
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
        style={{paddingTop: '5%', paddingHorizontal: '5%',}}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

export default UserFlatList;

