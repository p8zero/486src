import React, {isValidElement, useContext, useState} from 'react';
import {Alert, View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import {AuthContextNew} from '../../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import AccountBottomButton from './AccountBottomButton';
import { firebase } from '@react-native-firebase/auth';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UsersInfo from '../Account/usersInfo';

 const EditUserEmail = ({navigation}) => {
    const [newEmail, setNewEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { user } = useContext(AuthContextNew)
    const [currentEmail, setUserEmail] = useState(null);
    const [inDatabaseEmail, setInDatabaseUserEmail] = useState(''); 

  
//Get current Email
    const userDocument = firestore()
        .collection('Users')
        .doc(user.uid)
        .get()
        .then(docSnapshot => {
          if (docSnapshot.exists) {
            const userData = docSnapshot.data()
            setUserEmail(userData.email);
      }
    });
   

    const getDatabaseEmail = firestore()
        .collection('Users')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                if(documentSnapshot.data().email == newEmail){
                    DatabaseEmail = documentSnapshot.data().email
                    setInDatabaseUserEmail(DatabaseEmail); 
                }
            });
    });
    
    const changeEmail = (userPassword, newEmail) => {
         
        reauthenticate(userPassword).then(() => {
           
          user.updateEmail(newEmail).then(() => {
            console.log("Email updated!");
            firestore()
                .collection('Users') 
                .doc(user.uid)
                .update({
                    email: newEmail,
                })
                .then(()=>{
                    console.log("User Email Updated");
                })
                console.log(user.email);
                navigation.navigate("SettingsScreen");
                console.log(user.email); 
          }).catch((error) => { 
            Alert.alert("Password Does Not Match"); 
            console.log(error); });
        }).catch((error) => {
            Alert.alert("Password Does Not Match"); 
            console.log(error); });
      }

    const reauthenticate = (userPassword) => {
        console.log("here " + firebase.auth().currentUser); 
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, userPassword);
             
        return user.reauthenticateWithCredential(cred);
      }

//update user email
    const UpdateEmail = (navigation, currentEmail, newEmail, inDatabaseEmail, userPassword )=>{
        const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
        const emailIsValid = regex.test(newEmail); 
        if(!emailIsValid ){
            Alert.alert("Please type a Valid Email");
            console.log("Invalid Email");
        }else if(newEmail == inDatabaseEmail || currentEmail == newEmail){
            Alert.alert("That email is already in use");
            console.log("Email exists in database");
        }else{
         changeEmail(userPassword, newEmail);
        }
    }
 
  return (
    <SafeAreaView style={ styles.SubscribedScreen }  >
        <View style={{
            flex: 1,
            width: '90%',
            marginLeft: '5%',
            top: '8.5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
          }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('SettingsScreen');}}
          icon={<Ionicons name="arrow-back-outline" size={30} color="#000000" />}
        />

        </View>

        <View style = {{marginTop: '25%',}}>
        <UsersInfo title={currentEmail} name={"Current User Email"} />
        </View>

       <View style={{top: '5%', marginHorizontal: '0%'}}>
        <View style={styles.InputButton}>
            <Text style={styles.InputName } >New Email Address</Text>
            <TextInput
                style={styles.UserNameInput}
                onChangeText={newText => setNewEmail(newText)}
                defaultValue={newEmail}
            />  

        <View style={{top: '-15%', marginLeft: '0%',}}>       
            <Text style={styles.InputName } >Enter Password</Text>
            <TextInput
                style={styles.UserNameInput}
                onChangeText={newText => setUserPassword(newText)}
            />  
       </View>
       </View>
            <View style={ styles.ContinueButtonView }>
                <AccountBottomButton  onPress={()=>UpdateEmail(navigation, currentEmail, newEmail, inDatabaseEmail, userPassword) } title={"Continue"}    />
            </View>
      </View>
    </SafeAreaView>
  );
};

export default EditUserEmail;

const styles = StyleSheet.create({
    SubscribedScreen:{
        flex: 1,
        backgroundColor: '#EDBDBA', 
    },
    BackButtonStyles:{
        position:'relative', 
        top:15, 
        left:-90,  
    },
    InputButton:{
        marginLeft: '5%',
        maxWidth: '90%',
    },
    UserNameInput:{
        backgroundColor: '#fff5EF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#FFF5EF',
        borderWidth: 1,
        borderRadius: 50, 
        fontSize: 16, 
        fontFamily: 'WorkSans-Light',
        fontWeight: '400',
        letterSpacing: 2,
        marginBottom:100,
    },
    InputName:{
        fontSize: 20, 
        marginLeft: 0, 
        marginBottom:15, 
        fontFamily:'WorkSans-light',
        fontWeight: '400',
        letterSpacing: 1,

    },
    ContinueButtonView:{
        marginTop: '-25%',
        justifyContent: 'center', 
        alignContent:'center',
        flexDirection:'row',
    }, 
});
