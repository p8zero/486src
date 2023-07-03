import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const BackButton = ({onPress, icon}) => {
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
export default BackButton;
