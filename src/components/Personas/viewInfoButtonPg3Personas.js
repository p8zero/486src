import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ViewInfoButtonPersonas = ({label1, label2, val1, val2, edit}) => {


  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFF5EF',
        borderRadius: 50,
        width: 330,
        height: 100,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          backgroundColor: '#F6DEDC',
          borderColor: '#F3777E',
          borderRadius: 50,
          maxWidth: 150,
        }}>
        <Text
          style={{
            fontSize: 18,
            padding: 10,
            color: '#FFF',
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            letterSpacing: 3,
            color: '#18163A'
          }}>
          Gender
        </Text>
        <Text
          style={{
            fontSize: 18,
            padding: 10,
            color: '#FFF5EF',
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            letterSpacing: 3,
            color: '#18163A'
          }}>
          Age
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingLeft: '5%',
          maxWidth: '40%',
        }}>
        <Text
          style={{
            fontSize: 18,
            padding: 10,
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            letterSpacing: 3,
            color: '#18163A'
          }}>
          {val1}
        </Text>

        <Text
          style={{
            fontSize: 18,
            padding: 10,
            color: '#18163A',
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            letterSpacing: 3,
          }}>
          {val2}
        </Text>
      </View>

      <TouchableOpacity
        onPress={edit}
      >
        <View
          style={{
            alignItems: 'flex-start',
            paddingTop: '40%',
            paddingRight: '5%',
          }}>
          <Ionicons size={24} name="ellipsis-vertical-outline" color={'#18163A'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ViewInfoButtonPersonas;
