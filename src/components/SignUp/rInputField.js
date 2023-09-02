import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const rInputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  colorScheme, // Pass the color scheme as a prop
}) => {
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#18163A';
  const placeholderTextColor = colorScheme === 'dark' ? '#FFFFFF' : '#8F8F8F';

  return (
    <View
      style={{
        padding: 15,
        borderRadius: 25,
        backgroundColor: '#FFF5EF',
        flexDirection: 'row',
        borderBottomColor: '#FFF5EF',
        paddingBottom: 12,
        marginBottom: 15,
      }}
    >
      {icon}
      {inputType === 'password' ? (
        <TextInput
          placeholder={label}
          style={{
            flex: 1,
            paddingVertical: 0,
            fontFamily: 'WorkSans-Light',
            fontWeight: '500',
            color: textColor,
            letterSpacing: 2,
            fontSize: 16,
          }}
          secureTextEntry={true}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
        />
      ) : (
        <TextInput
          placeholder={label}
          style={{
            flex: 1,
            paddingVertical: 0,
            fontFamily: 'WorkSans-Light',
            fontWeight: '500',
            color: textColor,
            letterSpacing: 2,
            fontSize: 16,
          }}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: '#18163A', fontWeight: '500' }}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default rInputField;