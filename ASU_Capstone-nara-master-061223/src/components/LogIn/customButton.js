import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton = ({label, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#FFF5EF',
        padding: 15,
        borderRadius: 40,
        marginBottom: 30, 
        marginStart: 10,
        marginRight: 20,
        width: 155, 
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 18,
          color: '#282561',
          letterSpacing: 2,
          fontFamily: 'WorkSans-Light'
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

