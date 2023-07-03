import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

const InputFieldPersonas = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  name,
}) => {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

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
            fontWeight: "300",
            letterSpacing: 2,
          }}
        >
          {name}
        </Text>
      </View>
      <TextInput
        placeholder={label}
        style={{
          flex: 1,
          paddingLeft: 20,
          fontSize: 16,
          fontFamily: "WorkSans-Light",
          fontWeight: "400",
          letterSpacing: 2,
        }}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default InputFieldPersonas;
