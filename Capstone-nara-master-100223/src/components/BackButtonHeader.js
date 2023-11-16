import React from 'react';
import {  View, SafeAreaView, StyleSheet,} from 'react-native'; 
import BackButton from './backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


const BackButtonHeader = ({navigation, screenNavigation, style}) => {
    return(
        <SafeAreaView style={ styles.Account } >
            <View style={style}>
            <BackButton
                label={'back button'}
                onPress={() => navigation.navigate(screenNavigation)}
                icon={<Ionicons name="arrow-back-outline" size={30} color="#666" />}
                
             /> 
            </View>
        </SafeAreaView>
         
         )
}


export default BackButtonHeader; 

const styles = StyleSheet.create({
     
     
    Account:{
        paddingTop:0,
        marginTop:'5%',
        marginBottom:0,
        justifyContent:'center',
        alignContent:'center',
        flex: .3,
        flexDirection:'row',
    },
    BackButtonStyles:{
        position:'relative', 
        top:15, 
        left:-90,  
    },
    AccountBackButtonView:{
        padding: 20,
        justifyContent: 'center', 
        alignContent:'center',
        flexDirection:'row',
    }, 
    AccountBackButton:{ 
        fontWeight:'400',
        fontSize: 16,  
        fontFamily: 'Worksans-light',
        justifyContent:'center',
        alignContent:'center',
    },
    AccountTextStyle:{
        fontWeight:'300', 
        fontSize:30,  
        fontFamily: 'Worksans-light',
    },
});