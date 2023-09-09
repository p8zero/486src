// impoting necessary libraries and components
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, Dimensions } from "react-native";
import auth from "@react-native-firebase/auth";

import { useNavigation } from "@react-navigation/native";
import { makePurchase } from "react-native-purchases";
import Purchases from "react-native-purchases";
import { set } from "react-native-reanimated";
import Ionicons from "react-native-vector-icons/Ionicons";
import BackButton from "../../components/backButton";
import NaraIcon from "../../assets/naraLogo.svg";
import PaywallScreenY from "./PaywallScreenY";
import { AuthContextNew } from "../../navigation/authProvider";
import ProgressLoader from "rn-progress-loader";

// defining the monthly PaywallScreen component
const PaywallScreenM = () => {
  // intialising the navigation hook
  const navigation = useNavigation();
  const {
    user,
    setUser,
    updateSubscriptionInDB,
    loading,
    setLoading,
    getUpdatedUser,
  } = useContext(AuthContextNew);
  // defining the state variable msg and the function to set it
  const [msg, setMsg] = React.useState("");
  // defining the navigation function to the yearly paywall screen
  const Y = () => {
    navigation.navigate("PaywallScreenY");
  };
  // defining the function to handle the subscription process
  const handleSubscription = async () => {
    try {
      setLoading(true);
      //await makePurchase('nara_499_m');
      // fetching the offeerings from RevenueCat
      //the line of code below is from the RevenueCat documentation
      //https://www.revenuecat.com/docs/getting-started#4-using-revenuecats-purchases-sdk
      // const offerings = await Purchases.getOfferings();

      const offerings = await Purchases.getOfferings();
      if (offerings.current !== null) {
        console.log("PACKAGEDS LIST", offerings.current);
        //setMsg(`${offerings.current}`);
      }
      // making the purchase of the monthly subscription
      //the line of code below is from the RevenueCat documentation
      //https://www.revenuecat.com/docs/making-purchases
      // this is the product id for the monthly subscription made in app store connect

      const purchaseMade = await Purchases.purchaseProduct("nara_499_m");
      if (purchaseMade.customerInfo.entitlements.active) {
        // "$rc_monthly"
        // Unlock that great "pro" content
        // console.log("PURCHASED SUCCESS", purchaseMade);
        setMsg("success");

        let dbUser = auth().currentUser;
        console.log("PURCHASED SUCCESS", dbUser);
        await updateSubscriptionInDB(dbUser, true);
        setUser(getUpdatedUser(user, true));
      }

      setLoading(false);
      // const monthlyPlan = await Purchases.purchaseProduct("nara_499_m");

      // User has subscribed successfully
    } catch (error) {
      setLoading(false);
      alert("An error occured while making the pucrhase");
      console.log("The error in maiking purchase ", error);
      //setMsg(`it failed  ${error}`);

      // Handle error
    }
  };
  // rendering the UI

  
  return (
    <View style={styles.container}>

      <View style={styles.BackButton}>
        <BackButton
          label={"back button"} // back button was reused  from previous code the client had from other screens
          onPress={() => {
            navigation.goBack();
          }}
          icon={
            <Ionicons name='chevron-back-outline' size={24} color='#18163A' />
          }
        />
      </View>

      <View
        style={{marginLeft: '5%', marginRight: '5%',               
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: '15%',
        marginTop: '0%'}}>
          
            <Text style={{
              fontFamily: 'WorkSans-Light',
              color: '#18163A',
              fontSize: 70,
              fontWeight: '300',
              }}>
              nara
            </Text>
            </View>

      <Text style={styles.description}>$4.99 / month</Text>
      <Text style={styles.description}>Try free for 7 days</Text>
      <Text style={styles.description2}>Cancel Anytime</Text>

      <TouchableOpacity onPress={handleSubscription} style={styles.button}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
      <View style={styles.subscribe}>
        <TouchableOpacity onPress={Y} style={styles.button2}>
          <Text style={styles.subscribe2}>Yearly Subscription</Text>
        </TouchableOpacity>
      </View>
      <ProgressLoader
        visible={loading}
        isModal={true}
        isHUD={true}
        hudColor={"#18163A"}
        color={"#FFF5ef"}
      />
    </View>
  );
}; // the price of the subscription is hardcoded in the buttonPrice style for now

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6DEDC",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    color: "#18163a",
    fontFamily: 'WorkSans-Light',
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: '4%',
  },
  description2: {
    color: "#18163a",
    fontFamily: 'WorkSans-Light',
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: '6%',
  },
  subscribe: {
    color: "#18163a",
    fontFamily: 'WorkSans-Light',
    fontSize: 20,
    fontWeight: "300",
  },
  subscribe2: {
    color: "#FFF5EF",
    fontFamily: 'WorkSans-Light',
    fontSize: 20,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#EDBDBA",
    height: 50, 
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginBottom: '5%'
  },
  button2: {
    backgroundColor: "#18163A",
    height: 50, 
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  buttonText: {
    color: "#18163a",
    fontFamily: 'WorkSans-Light',
    fontSize: 20,
    fontWeight: "300",
  },
  BackButton: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  buttonPrice: {
    color: "#18163a",
    fontFamily: 'WorkSans-Light',
    fontSize: 20,
    fontWeight: "300",
  },
});

export default PaywallScreenM;