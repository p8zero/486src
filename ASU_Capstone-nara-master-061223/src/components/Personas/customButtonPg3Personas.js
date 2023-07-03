import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomButton2Personas = ({label, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#282561",
        borderRadius: 40,
        width: 280,
        height: 60,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 14,
      }}>
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          justifyContent: 'center',
          fontWeight: '400',
          fontSize: 20,
          color: '#FFFFFF',
          fontFamily: 'AppleSDGothicNeo-Thin',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton2Personas;
