import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContextNew = createContext();

export const AuthProviderNew = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContextNew.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            alert('Wrong Email or Password');
            console.log(e);
          }
        },
        register: async (email, password, userName, dob) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore()
                  .collection('Users')
                  .doc(auth().currentUser.uid)
                  .set({
                    username: userName,
                    dob: dob,
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
            await auth().currentUser.sendEmailVerification().then(function() {
              // Email sent.
              alert('Email verification sent! Please check your mailbox');
              console.log('Email sent')
            }).catch(function(error) {
              // An error happened.
              alert('Email verification could not be sent');
              console.log('Email could not be sent: ', error);
            });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        }
      }}>
      {children}
    </AuthContextNew.Provider>
  );
};
