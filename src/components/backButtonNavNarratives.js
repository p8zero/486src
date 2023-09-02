import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
 
const backButtonNavNarratives = ({onPress}) => {
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
 
export default backButtonNavNarratives;
 
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
 
 

