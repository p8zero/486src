import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { AuthContextNew } from "./authProvider";
import Purchases from "react-native-purchases";
import AuthStackNew from "./AuthStackNew";
import AppStackNew from "./AppStackNew";

const AppNavNew = () => {
  const { user, setUser, isCheckingSub, updateSubscriptionInDB, loading } =
    useContext(AuthContextNew);
  const [initializing, setInitializing] = useState(true);
  const { logout } = useContext(AuthContextNew);
  const [loggedIn, setLoggedIn] = useState(false);

  const onAuthStateChanged = (user) => {
    console.log("The auth change is ", user);
    setUser(user);
    if (user) setLoggedIn(true);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // execute if user is looged in
  useEffect(() => {
    if (loggedIn) {
      console.warn("subscription checker active");
      // execute this function every 10 seconds
      const interval = setInterval(async () => {
        if (!(user && user.subscription)) {
          return;
        }

        let isSub = await checkSubscriptionStatus();
        console.log("The subscription is ", isSub);
        if (!isSub) {
          clearInterval(interval);
          let dbUser = auth().currentUser;
          if (dbUser) {
            await updateSubscriptionInDB(dbUser, false);
          }
          logout();
        }
      }, 30000);

      // clear the interval on component unmount
      return () => clearInterval(interval);
    }
  }, [loggedIn]);

  /* after specific duration check either user
     have any active subscription or not */
  async function checkSubscriptionStatus() {
    try {
      const customerInfo = await Purchases?.getCustomerInfo();
      const activeSubscription = customerInfo?.entitlements?.active;

      if (Object.keys(activeSubscription).length === 0) {
      } else {
        return true;
      }
    } catch (e) {
      // error in fetching purchaser info
      console.log("Error in fetching purchaser info", e);
    }

    return false;
  }

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user && user.subscription && !isCheckingSub ? (
        <AppStackNew />
      ) : (
        <AuthStackNew />
      )}
    </NavigationContainer>
  );
};

export default AppNavNew;