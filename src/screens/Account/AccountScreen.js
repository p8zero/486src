// import required modules and components
import React, { useContext, useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { AuthContextNew } from '../../navigation/authProvider';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';


// define the AccountScreen functional component
const AccountScreen = ({navigation}) => {
    
  // Get the user context and set userName and userEmail to states
  const { user } = useContext(AuthContextNew)
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
   
   // retrieve the user's name and email from the firestore database
   // this was reused from the EditUserNameScreen.js file in the Account folder
    const userDocument = firestore()
        .collection('Users')
        .doc(user.uid)
        .get()
        .then(docSnapshot => {
          if (docSnapshot.exists) {
            const userData = docSnapshot.data()
            setUserName(userData.username)
            setUserEmail(userData.email);
      }
    });
    // get the screen width and  height using dimensions
    
    // handle the manage subscription button press
    const handleManageSubscription = async () => {
      try{
        // this is the link that will open the app store subscriptions page
        // the link will only work on a real device
        // the line of  code below was taken from react-native documentation on linking
        // https://reactnative.dev/docs/linking
        await Linking.openURL('itms-apps://apps.apple.com/account/subscriptions');
        // await Linking.openURL('https://apps.apple.com/account/subscriptions');
        // second link is for Itunes connect
      } catch (error) {
        // handle error if the link doesn't open
        console.log('Error occured while opening the URL: ', error);
      }
    
    };
    // return UI components
    return(
    <SafeAreaView style={ styles.SubscribedScreen } >
        <View style={{
            width: '90%',
            marginLeft: '2.5%',
            top: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          
        <BackButton
          label={'back button'} // go back to the settings screen
          onPress={() => {navigation.navigate('SettingsScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        </View>

        <View style={{marginTop: '25%', alignItems: 'flex-start', marginLeft: '5%'}}>
        <Text style={{fontFamily: 'WorkSans-light', fontSize: 24, fontWeight:'300',  letterSpacing: 2, color: '#18163A'}}>
            Your Subscription
        </Text>
      </View> 
      

        <View style={{}}>

            <View style={ styles.SubscriptionTextView} >
                <Text style={ styles.AutoRenew}>Unfortunately, we are not able to help you manage your subscription within the app. </Text>
                <Text style={ styles.AutoRenew}>To manage your subscription, click the "Manage Subscription" button. It will take you to the App Store on your mobile device where you can renew or cancel your subscription.</Text>
            </View>


            <View style={{alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={{
              marginTop: '15%',
              backgroundColor: '#EDBDBA',
              borderRadius: 50,
              width: 280,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            // once the button is pressed, the handleManageSubscription function is called
            onPress={handleManageSubscription} 
            >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                letterSpacing: 3,
                color: '#18163A',
                fontWeight: '300',
                fontFamily: 'WorkSans-Regular',
              }}>
              Manage Subscription
            </Text>
          </TouchableOpacity>
        </View>
        </View>

    </SafeAreaView>
    )
};


const styles = StyleSheet.create({
   


    SubscribedScreen:{
        flex: 1,
        backgroundColor: '#F6DEDC',
        },


    SubscriptionView:{
        marginTop: '5%',
        padding:'7%',
        flexDirection:'row',
    },
    Icon:{

        justifyContent: 'flex-start', 
        borderRadius: 40,
    },
    SubscriptionTextView:{
        marginTop: '10%',
        textAlign: 'left',
    },
    SubMonthlyHeader:{
        marginBottom:'15%', 
        fontSize: 18, 
        fontFamily: 'Worksans-light',
        fontWeight: '400',
        letterSpacing: 1,
    }, 
    AutoRenew:{
        fontSize: 18,
        fontWeight: '300', 
        color: '#18163A',
        fontFamily: 'WorkSans-Light',
        letterSpacing: 1,
        marginTop: '5%',
        marginHorizontal: '5%',
        textAlign: 'left'
    }, 
    AccountBackButtonView:{
        marginTop: '10%',
        justifyContent: 'center', 
        alignContent:'center',
        flexDirection:'row',
    }, 
    AccountBackButton:{ 
        fontWeight:'400',
        fontSize: 14,  
        fontFamily: 'WorkSans-Light',
    }
  });



export default AccountScreen; 

<Text style={ styles.SubMonthlyHeader}>Monthly Subscription</Text>