import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Dimensions} from 'react-native';

const Notes = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  name,
  nameOfNotes,
}) => {

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        paddingHorizontal: 26,
        backgroundColor: '#FFFAFA',
        borderRadius: 40,
        marginTop: 40,
        width: 350,
        height: 200,
        shadowColor: 'rgba(0,0,0, .1)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 10,
      }}>
      <Text
        style={{
          flex: 0.5,
          marginTop: 20,
          fontFamily: 'WorkSans-Regular',
          fontSize: 20,
          letterSpacing: 2,
          fontWeight: '500',
        }}>
        {nameOfNotes}
      </Text>
      <TextInput
        placeholder={label}
        style={{
          flex: 1,
          fontSize: 16,
          letterSpacing: 1,
          flexWrap: 'wrap',
          overflow: 'scroll',
          height: 200,
          width: 300,
          marginBottom: 10,
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
