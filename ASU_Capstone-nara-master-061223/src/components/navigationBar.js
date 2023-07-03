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
 
const Navigation = ({ backOnPress, closeOnPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress = {backOnPress} style={styles.navbar}>
        <View style={styles.buttons}>
          <Ionicons name="arrow-back-outline" size={35} color="#666" />
        </View>
      </TouchableOpacity>
 
      <TouchableOpacity onPress = {closeOnPress} style={styles.navbar}>
        <View style = {styles.buttons}>
          <Ionicons name="close-outline" size={35} color="#666" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = {
  navbar: {
    backgroundColor: '#FFFAFA',
    borderRadius: 8,
    width: 45,
    height: 45,
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 14,
    justifyContent: 'center',
    alignItems: 'center'
 
  },
 
  buttons:{
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10
  }
};
 
export default Navigation;
 

