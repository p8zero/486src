import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const BackButtonPersona = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#F6DEDC',
        borderRadius: 50,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <View style={{}}>{icon}</View>
    </TouchableOpacity>
  );
};
export default BackButtonPersona;
