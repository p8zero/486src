import React, {useContext, useState, useEffect, createContext} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContextNew} from '../../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../backButton';

export const SelectUserFlatListContext = createContext();

const SelectUserFlatList = () => {
  const {user} = useContext(AuthContextNew);
  const [data, setData] = useState(null)
  const userData = [];
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
      element.selected = false;
      userData.push(element);
      });
      setData(userData)
    });

    const [select, setSelect] = useState(userData)
    const [selectedPeople, setSelectedPeople] = useState(userData)

    const handleOnPress = (item) => {
        const newItem = select.map((val) => {
            if (val.id === item.id) {
                return {...val, selected:!val.selected}
            }
            else {
                return val;
            }
        })
        setSelect(newItem)
        selectedPersonas = newItem.filter(item => !(item.selected == false))
        setSelectedPeople(selectedPersonas)
        
    }

  return (
        <View>
        <FlatList
            data={select}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
            <TouchableOpacity onPress={() => {handleOnPress(item)}} style={item.selected ? styles.buttonSelected : styles.button}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                <Ionicons name="person-circle-outline" size={35} color="#666" />
                </View>
                <Text style={item.selected ? styles.textSelected : styles.text}>{item.data.name}</Text>
            </TouchableOpacity>
            )}
            style={{paddingTop: 25, paddingHorizontal: 30}}
            showsVerticalScrollIndicator={false}
        />
        </View>

  );
};

export default SelectUserFlatList;

const styles = StyleSheet.create({
  buttonSelected: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: '#282561',
    borderRadius: 40,
    marginBottom: 38,
    width: 300,
    height: 84,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.6,
    shadowRadius: 14,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
    borderRadius: 40,
    marginBottom: 38,
    width: 300,
    height: 84,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.6,
    shadowRadius: 14,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    fontWeight: '600',
    fontSize: 20,
    color: '#000000',
    fontFamily: 'AppleSDGothicNeo-Thin',
  },
  textSelected: {
    flex: 1,
    flexDirection: 'row',
    fontWeight: '600',
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'AppleSDGothicNeo-Thin',
  },
});