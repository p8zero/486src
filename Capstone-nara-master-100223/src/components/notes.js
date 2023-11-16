import React from 'react';
import {View, TextInput} from 'react-native';

const Notes = ({
  label,
  keyboardType,
  value,
  onChangeText,
}) => {

  return (
    <View
      style={{
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        backgroundColor: '#FFF5EF',
        borderRadius: 20,
        width: "90%",
        height: 400,

      }}>

      <TextInput
        placeholder={label}
        style={{
          fontSize: 16,
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          letterSpacing: 1,
          flexWrap: 'wrap',
          overflow: 'scroll',
          height: 380,
          width: 300,
          fontWeight: '400',
          marginVertical: '3%',
          paddingBottom: 20
        }}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        numberOfLines={5}
        textAlignVertical={'top'}
        textBreakStrategy={'highQuality'}
        multiline={true}
      />
    </View>
  );
};
export default Notes;
