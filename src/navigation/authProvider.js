import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Purchases from "react-native-purchases";
import { log, set } from "react-native-reanimated";

export const AuthContextNew = createContext();

export const AuthProviderNew = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCheckingSub, setIsCheckingSub] = useState(false);

  const isUserSubsrcibed = async () => {
    try {
      const customerInfo = await Purchases?.getCustomerInfo();
      const activeSubscription = customerInfo?.entitlements?.active;
      console.log("The customor info is ", customerInfo);

      if (Object.keys(activeSubscription).length === 0) {
        console.warn("no active plan");
        return false;
      } else {
        return true;
      }
    } catch (e) {
      // error in fetching purchaser info
      console.log("Error fetching purchaser info", e);
    }

    return false;
  };

  async function getUserAndCheckFirebaseSubStatus(user) {
    try {
      const userRef = firestore().collection("Users").doc(user.uid);

      // Retrieve the user document
      const doc = await userRef.get();

      if (doc.exists) {
        // The user document exists, so we can access its data
        const user = doc.data();
        const isSubInDevice = await isUserSubsrcibed();
        if (user.subscription && isSubInDevice) {
          return true;
        }
        console.log("User data:", user);
      } else {
        // The user document doesn't exist
        console.log("User document does not exist");
      }
    } catch (e) {
      console.log("An error occurred ", e);
    }

    return false;
  }

  const performLogOut = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };

  const updateSubscriptionInDB = async (user, subscription) => {
    try {
      const userRef = firestore().collection("Users").doc(user.uid);

      // Update the subscription field for the user document
      await userRef.update({
        subscription: subscription,
      });
      console.log("Subscription updated successfully");
      return true;
    } catch (e) {
      console.log("An error occurred", user.uid);
      console.log("An error occurred ", e);
    }

    return false;
  };

  function getUpdatedUser(user, subscription) {
    console.log("Previous User is ", user);
    const newUser = { ...user, subscription };
    if (newUser._user) {
      return { ...newUser._user, subscription };
    } else if (newUser.user) {
      return { ...newUser.user, subscription };
    } else {
      return { ...user, subscription };
    }
  }

  return (
    <AuthContextNew.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        isCheckingSub,
        login: async (email, password, goToPaywall, onSuccess) => {
          try {
            setLoading(true);
            let authResult = await auth().signInWithEmailAndPassword(
              email,
              password
            );

            let allGood = await getUserAndCheckFirebaseSubStatus(
              auth().currentUser
            );
            setLoading(false);

            if (!allGood) {
              //performLogOut();
              goToPaywall();
            } else {
              setUser(getUpdatedUser(auth().currentUser, true));
            }
          } catch (e) {
            setLoading(false);
            alert("Wrong Email or Password");
            console.log(e);
          }
        },
        register: async (
          email,
          password,
          userName,
          dob,
          goToPaywall
        ) => {
          try {
            setLoading(true);
            await auth().createUserWithEmailAndPassword(email, password);
            let subscription = await isUserSubsrcibed();
            //Once the user creation has happened successfully, we can add the currentUser into firestore
            //with the appropriate details.
            await firestore()
              .collection("Users")
              .doc(auth().currentUser.uid)
              .set({
                username: userName,
                dob: dob,
                email: email,
                createdAt: firestore.Timestamp.fromDate(new Date()),
                subscription: subscription || null,
              });

            await auth().currentUser.sendEmailVerification();
            // Email sent.
            alert("Email verification sent! Please check your mailbox");
            await auth().signInWithEmailAndPassword(email, password);
            setLoading(false);
            if (!subscription) {
              goToPaywall();
            } else {
              setUser(getUpdatedUser(auth().currentUser, true));
            }
          } catch (e) {
            setLoading(false);
            console.log("Signin Up Process Error ", e);
          }
        },
        logout: performLogOut,
        updateSubscriptionInDB,
        isUserSubsrcibed,
        getUpdatedUser,
      }}
    >
      {children}
    </AuthContextNew.Provider>
  );
};