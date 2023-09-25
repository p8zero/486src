import React from 'react';
import {View, TouchableOpacity} from 'react-native';

const BackButton = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#EDBDBA',
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
export default BackButton;
