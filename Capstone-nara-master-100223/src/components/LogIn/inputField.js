import React from 'react';
import {View, Text, TouchableOpacity, TextInput,} from 'react-native';

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  colorScheme
}) => {

  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#18163A';
  const placeholderTextColor = colorScheme === 'dark' ? '#FFFFFF' : '#8F8F8F';

  return (
    <View
      style={{
        padding: 12, 
        borderRadius: 50, 
        backgroundColor: '#FFF5EF',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        marginBottom: 25,
        height: 45,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          style={{flex: 1, marginLeft: 10, paddingVertical: 0, letterSpacing: 2, color: textColor, fontWeight: '400', fontSize: 16, fontFamily: 'WorkSans-Light' }}
          secureTextEntry={true}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
        />
      ) : (
        <TextInput
          placeholder={label}
          style={{flex: 1, marginLeft: 10, paddingVertical: 0, letterSpacing: 2, color: textColor, fontWeight: '400', fontSize: 16, fontFamily: 'WorkSans-Light' }}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
        />
      )}
      <View style={{marginTop: 1.5}}>
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#18163A', fontWeight: '500', fontFamily: 'WorkSans-Light', letterSpacing: 2, fontSize: 16}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default InputField;
