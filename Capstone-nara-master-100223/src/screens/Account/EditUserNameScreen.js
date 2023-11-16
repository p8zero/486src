import React, {useContext, useState, setState} from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert} from 'react-native';
import {AuthContextNew} from '../../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import AccountBottomButton from './AccountBottomButton';
import BackButtonHeader from '../../components/BackButtonHeader';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UsersInfo from '../Account/usersInfo';

 const EditUserName = ({navigation}) => {
    const [newUserName, setNewUserName] = useState('');
    const { user } = useContext(AuthContextNew)
    const [currentUserName, setUserName] = useState(null);
    const [inDatabaseUserName, setInDatabaseUserName] = useState('')
    
//Get current user name
    const userDocument = firestore()
        .collection('Users')
        .doc(user.uid)
        .get()
        .then(docSnapshot => {
          if (docSnapshot.exists) {
            const userData = docSnapshot.data()
            setUserName(userData.username);
      }
    });

    const getDatabaseName = firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
            if(documentSnapshot.data().username == newUserName){
                DataBaseUserName = documentSnapshot.data().username
                setInDatabaseUserName(DataBaseUserName); 
            }
        });
    });

     
//update user Name
    const updateUserName = (navigation, newUserName, inDatabaseUserName) =>{
        if(  inDatabaseUserName == newUserName){
            console.log("User name exists in database");
            Alert.alert("User name exists in database");
        }else if(newUserName == currentUserName){
            console.log("new user name is same as current user name");
            Alert.alert("You entered your current User Name");
        }else if(newUserName == ""){
            Alert.alert("You did not enter a user name"); 
        }else{
            firestore()
                .collection('Users')
                .doc(user.uid)
                .update({
                    username: newUserName,
                })
                .then(()=>{
                    console.log("User Name updated");
                })
                navigation.navigate("SettingsScreen");
        }
    }
     
  return (
    <SafeAreaView style={ styles.SubscribedScreen } >
       <View style={{
            width: '95%',
            marginLeft: '2.5%',
            top: '5%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('SettingsScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#000000" />}
        />

        </View>

        <View style = {{marginTop: '10%',}}>
        <UsersInfo title={currentUserName} name={"Current User Name"} />
        </View>

        <View style={{top: '5%', left: '0%', paddingHorizontal: '0%'}}>
       <View style={styles.InputButton}>
       <Text
            style={styles.InputName }
        >New User Name</Text>


        <TextInput
            style={styles.UserNameInput}
            onChangeText={newText => setNewUserName(newText)}
            defaultValue={newUserName}
        />         
       

        <View style={ styles.ContinueButtonView }>
            <AccountBottomButton  onPress={()=>updateUserName(navigation, newUserName, inDatabaseUserName) } title={"Done"}   />
        </View>
        </View> 
      </View>
    </SafeAreaView>
  );
};

export default EditUserName;

const styles = StyleSheet.create({
    SubscribedScreen:{
        flex: 1,
        backgroundColor: '#FFF5EF',
    },

    InputButton:{
        marginLeft: '5%',
        maxWidth: '90%',
    },
    UserNameInput:{
        backgroundColor: '#F6DEDC',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#FFF5EF',
        borderWidth: 1,
        borderRadius: 50, 
        fontSize: 16, 
        fontFamily: 'WorkSans-Light',
        fontWeight: '300',
        letterSpacing: 2,
        marginBottom:100,
    },
    InputName:{
        fontSize: 24, 
        marginLeft: 0, 
        marginBottom:15, 
        fontFamily:'WorkSans-light',
        fontWeight: '300',
        letterSpacing: 1,
        color: '#000000'
    },
    ContinueButtonView:{
        justifyContent: 'center', 
        alignContent:'center',
        flexDirection:'row',
    }, 
});
