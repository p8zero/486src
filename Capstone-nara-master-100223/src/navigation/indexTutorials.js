import React from 'react';
import { AuthProviderSettings } from './AuthProviderSettings';
import TutorialsStack from './TutorialsStack';

const Tutorials = () => {
  return (
    <AuthProviderSettings>
      <TutorialsStack />
    </AuthProviderSettings>
  );
}

export default Tutorials;