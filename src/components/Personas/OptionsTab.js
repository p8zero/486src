import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const OptionsTab = ({ Create, Edit, Duplicate, Delete }) => {
  return (
    <View style={styles.main_container}>
      
      <TouchableOpacity onPress={Edit}>
        <View style={styles.button}>
          <Ionicons size={24} name="create-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Change Character</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Create}>
        <View style={styles.button}>
          <Ionicons size={24} name="pencil-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Write Notes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Duplicate}>
        <View style={styles.button}>
          <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Duplicate</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Delete}>
        <View style={styles.button}>
          <Ionicons size={24} name="trash-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Delete</Text>
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
    marginTop: '8%',
    width: "80%",
    marginLeft: '10%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  text: {
    fontSize: 18,
    paddingLeft: '15%',
    fontFamily: 'WorkSans-Light', 
    fontWeight: '300',
    letterSpacing: 4,
    color: '#18163A'
  },
});

export default OptionsTab;
