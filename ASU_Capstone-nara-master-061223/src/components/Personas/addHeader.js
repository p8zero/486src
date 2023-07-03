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
import MenuIcon from '../../assets/menu.svg';
import { DrawerActions } from '@react-navigation/native';
import BackButton from '../../components/backButton';

 
const AddHeader = ({OnPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress = {OnPress} style={styles.navbar}>
        <View style = {styles.buttons}>
          <Ionicons name="add-outline" size={30} color="#FFF5EF" />
        </View>
      </TouchableOpacity>
    </View>

  );
};
 
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#282561',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  buttons:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    backgroundColor: '#EDBDBA',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 15

  }
});
 
export default AddHeader;
 
 

