import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


const EditButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#282561",
      borderRadius: 40,
      padding:0,
      alignContent:'center',
      width:100,
      height:50,
    },
    appButtonText: {
      marginTop: 14,
      fontSize: 18,
      fontWeight: '400',
      letterSpacing: 2,
      color: "#FFF5EF",
      alignSelf: "center",
      fontFamily: 'WorkSans-light',
    }
  });

  export default EditButton;