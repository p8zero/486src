import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContextNew } from './authProvider';

import AuthStackNew from './AuthStackNew';
import AppStackNew from './AppStackNew';

const AppNavNew = () => {
  const {user, setUser} = useContext(AuthContextNew);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppStackNew /> : <AuthStackNew />}
    </NavigationContainer>
  );
};

export default AppNavNew;