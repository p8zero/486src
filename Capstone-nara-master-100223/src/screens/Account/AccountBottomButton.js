import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


const AccountBottomButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      backgroundColor: '#EDBDBA',
      borderRadius: 50,
      padding:0,
      alignContent:'center',
      justifyContent:'center',
      width:200,
      height:50,
    },
    appButtonText: {
      fontSize: 18,
      color: '#18163A',
      textAlign: 'center',
      fontFamily: 'WorkSans-Light',
      letterSpacing:4,
      fontWeight: '300',
    }
  });

  export default AccountBottomButton;