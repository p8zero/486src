import React from 'react';
import { AuthProviderNarratives } from './AuthProviderNarratives';
import HomeStack from './HomeStack';

//was "HomeNav" - changed to HomeStack because wrapping toggleDrawer function in a NavigationContainer in HomeNav was
//causing an error
const Home = () => {
  return (
    <AuthProviderNarratives>
      <HomeStack />
    </AuthProviderNarratives>
  );
}
//return <Narratives />;

export default Home;