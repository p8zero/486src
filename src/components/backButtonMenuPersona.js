import React from 'react';
import {View, TouchableOpacity} from 'react-native';

const BackButtonMenuPersona = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#F6DEDC',
        borderRadius: 50,
        width: 40,
        height: 40,
      }}>
      <View style={{paddingLeft: 8, paddingVertical: 8}}>{icon}</View>
    </TouchableOpacity>
  );
};
export default BackButtonMenuPersona;
