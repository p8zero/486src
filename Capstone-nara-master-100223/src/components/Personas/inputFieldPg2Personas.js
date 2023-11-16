import React from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
} from "react-native";

const InputFieldPersonas = ({
  label,
  keyboardType,
  value,
  onChangeText,
  name,
  colorScheme
}) => {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#18163A';
  const placeholderTextColor = colorScheme === 'dark' ? '#FFFFFF' : '#8F8F8F';


  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#FFF5EF",
        borderRadius: 40,
        marginBottom: 40,
        width: SCREEN_WIDTH * 0.9,
        height: 50,
      }}
    >
      <View
        style={{
          width: SCREEN_WIDTH * 0.3,
          backgroundColor: "#18163A",
          borderColor: "#18163A",
          borderRadius: 40,
        }}
      >
        <Text
          style={{
            top: "27%",
            marginLeft: "20%",
            fontSize: 18,
            color: "#FFF5EF",
            fontFamily: "WorkSans-Light",
            fontWeight: "400",
            letterSpacing: 2,
          }}
        >
          {name}
        </Text>
      </View>
      <TextInput
        placeholder={label}
        style={{
          paddingLeft: 20,
          fontSize: 16,
          fontFamily: "WorkSans-Light",
          fontWeight: "400",
          letterSpacing: 2,
          color: textColor
        }}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};
export default InputFieldPersonas;
