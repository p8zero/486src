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
 
const backButtonNav = ({onPress}) => {
  return (
    <View style={{}}>
      <TouchableOpacity onPress = {onPress} style={styles.navbar}>
        <View style = {styles.buttons}>
          <Ionicons name="chevron-back-outline" size={24} color="#18163A" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#EDBDBA',
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  buttons:{
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  container: {
    paddingVertical: 0,
    paddingLeft: 0,
  }
});
 
export default backButtonNav;
 
 

