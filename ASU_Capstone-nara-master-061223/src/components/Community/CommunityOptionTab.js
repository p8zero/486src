import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CommunityOptionsTab = ({ Deduction, Edit, Duplicate, Delete }) => {
  return (
    <View style={styles.main_container}>
            
      <TouchableOpacity onPress={Deduction}>
        <View style={styles.button}>
          <Ionicons size={24} name="create-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Potential Connections</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Edit}>
        <View style={styles.button}>
          <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Invitations From Others</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Duplicate}>
        <View style={styles.button}>
          <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Connections In Progress</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Delete}>
        <View style={styles.button}>
          <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Connection</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    width: "100%",
    marginTop: '3%'
  },
  button: {
    marginTop: '12%',
    width: "75%",
    marginLeft: '10%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  text: {
    fontSize: 19,
    paddingLeft: '15%',
    fontFamily: 'WorkSans-Light', 
    fontWeight: '400',
    letterSpacing: 1,
    color: '#18163A'
  },
});

export default CommunityOptionsTab;
