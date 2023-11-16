import React from 'react';
import {View, TouchableOpacity} from 'react-native';

const BackButtonCreateNarratives = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#18163A',
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
export default BackButtonCreateNarratives;
