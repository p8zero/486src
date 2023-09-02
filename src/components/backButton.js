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
      }}>
      <View style={{alignItems: 'center', marginTop: 5}}>{icon}</View>
    </TouchableOpacity>
  );
};
export default BackButton;
