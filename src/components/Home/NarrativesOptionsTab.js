import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const NarrativesOptionsTab = ({ Deduction, Edit, Create, Duplicate, Delete }) => {
  return (
    <View style={styles.main_container}>
            
      <TouchableOpacity onPress={Deduction}>
        <View style={styles.button}>
          <Ionicons size={24} name="document-text-outline" color='#000000'></Ionicons>
          <Text style={styles.text}>Narration</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Edit}>
        <View style={styles.button}>
          <Ionicons size={24} name="create-outline" color='#000000'></Ionicons>
          <Text style={styles.text}>Change Story</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Create}>
        <View style={styles.button}>
          <Ionicons size={24} name="pencil-outline" color='#000000'></Ionicons>
          <Text style={styles.text}>Write Notes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Delete}>
        <View style={styles.button}>
          <Ionicons size={24} name="trash-outline" color='#000000'></Ionicons>
          <Text style={styles.text}>Delete Story</Text>
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
    width: "75%",
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
    letterSpacing: 3,
    color: '#000000'
  },
});

export default NarrativesOptionsTab;


//<TouchableOpacity onPress={Duplicate}>
//<View style={styles.button}>
 // <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
 // <Text style={styles.text}>Duplicate Story</Text>
//</View>
//</TouchableOpacity>