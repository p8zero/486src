import React from 'react';
import {View, Text} from 'react-native';

const ViewInfoButtonNarratives = ({label1, label2, val1, val2, edit}) => {


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
          backgroundColor: '#EDBDBA',
          borderRadius: 50,
          maxWidth: 145,
        }}>
        <Text
          style={{
            fontSize: 18,
            padding: 10,
            color: '#FFF',
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            letterSpacing: 1,
            color: '#18163A'
          }}>
          Perspective
        </Text>
        <Text
          style={{
            fontSize: 18,
            padding: 10,
            color: '#FFF5EF',
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            letterSpacing: 1,
            color: '#18163A'
          }}>
          Relationship
        </Text>
      </View>

      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingLeft: '4%',
          maxWidth: '40%',
        }}>
        <Text
          style={{
            fontSize: 18,
            paddingBottom: 10,
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            letterSpacing: 1,
            color: '#18163A'
          }}>
          {val1}
        </Text>

        <Text
          style={{
            fontSize: 18,
            paddingTop: 10,
            color: '#18163A',
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            letterSpacing: 0,
          }}>
          {val2}
        </Text>
      </View>

    </View>
  );
};
export default ViewInfoButtonNarratives;
