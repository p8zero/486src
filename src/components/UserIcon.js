import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const UserIcon = ({userName, inColor, outColor, size, fontSize}) => {
    return (
    <View style={{
        backgroundColor: outColor,
        borderRadius: 100,
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
    }}>
      <View style={{
        backgroundColor: inColor,
        borderRadius: 100,
        width: size-5,
        height: size-5,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{fontSize: fontSize, fontWeight: "200"}}>
            {userName.charAt(0)}
        </Text>
      </View>
    </View>
  );
};

export default UserIcon;
