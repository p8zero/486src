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
      }}>
      <View style={{paddingLeft: 6, paddingVertical: 4}}>{icon}</View>
    </TouchableOpacity>
  );
};
export default BackButtonCreateNarratives;
