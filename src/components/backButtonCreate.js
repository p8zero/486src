import React from 'react';
import {View, TouchableOpacity} from 'react-native';

const BackButtonCreate = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#F6DEDC',
        borderRadius: 30,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <View style={{}}>{icon}</View>
    </TouchableOpacity>
  );
};
export default BackButtonCreate;
