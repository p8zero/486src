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
      }}>
      <View style={{paddingLeft: 6, paddingVertical: 4}}>{icon}</View>
    </TouchableOpacity>
  );
};
export default BackButtonCreate;
