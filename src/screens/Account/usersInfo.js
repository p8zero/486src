import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import EditButton from './editButton'
import SubscribeButton from './AccountBottomButton';
import NaraIcon from '../../assets/naraLogo.svg';
import firestore from '@react-native-firebase/firestore';
import { AuthContextNew } from '../../navigation/authProvider';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const UsersInfo = ({name, title, navigation, screen}) =>{ 
     
    return(
    //  start of screen view
    <View>
        {/* View for the user name   */}
        <View style={  styles.UserNameEmailView   }>
            <View style={ styles.UserNameEmailTextView } >
                <Text style={ styles.UserNameEmailHeader } >{name}</Text>
                <Text style={styles.nametext}>{title}</Text>
            </View>
        </View>
    </View>
    )
};


const styles = StyleSheet.create({
   
    UserNameEmailView:{
        padding: 20,
        justifyContent: 'center', 
        alignContent:'center',
        flexDirection:'row',
    }, 
    UserNameEmailTextView:{
        flex:1,
        fontFamily: 'WorkSans-Light',
        justifyContent: 'flex-start',  
    }, 
    UserNameEmailHeader:{
        fontSize: 24,  
        justifyContent: 'flex-start',  
        fontFamily: 'WorkSans-Light',
        fontWeight: '300',
        letterSpacing: 2,
        color: '#000000'
    }, 
    EditButton:{
        flex:1,
        fontWeight:'500',
        fontSize: 20,  
        fontFamily: 'WorkSans-Light',
        justifyContent: 'flex-start',
    }, 
    nametext: {
        fontWeight:'300',
        fontSize: 18,  
        fontFamily: 'WorkSans-Light',
        justifyContent: 'flex-start', 
        letterSpacing: 2, 
        marginTop: '5%',
        color: '#000000'
    }
  });



export default  UsersInfo; 

//<EditButton placeholder="edit" onPress={() => navigation.navigate(screen)}  title={"Edit"} style={ styles.EditButton}  />


