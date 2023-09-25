import React from 'react';
import {View, TouchableOpacity} from 'react-native';

const BackButtonMenu = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#EDBDBA',
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <View style={{}}>{icon}</View>
    </TouchableOpacity>
  );
};
export default BackButtonMenu;
