import React from 'react';
import { AuthProviderNew } from './authProvider';
import AppNavNew from './AppNavNew';

const Providers = () => {
  return (
    <AuthProviderNew>
      <AppNavNew />
    </AuthProviderNew>
  );
}
//return <Providers />;

export default Providers;

