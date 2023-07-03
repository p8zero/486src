import React from 'react';
import { AuthProviderSettings } from './AuthProviderSettings';
import SettingsStack from './SettingsStack';

const Settings = () => {
  return (
    <AuthProviderSettings>
      <SettingsStack />
    </AuthProviderSettings>
  );
}

export default Settings;