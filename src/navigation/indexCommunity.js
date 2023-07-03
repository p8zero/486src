import React from 'react';
import { AuthProviderCommunity } from './AuthProviderCommunity';
import CommunityStack from './CommunityStack';

const Community = () => {
  return (
    <AuthProviderCommunity>
      <CommunityStack />
    </AuthProviderCommunity>
  );
}

export default Community;