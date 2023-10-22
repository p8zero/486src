import React from 'react';
import { AuthProviderNarratives } from './AuthProviderNarratives';
import CommunityStack from './CommunityStack';

const Community = () => {
  return (
    <AuthProviderNarratives>
      <CommunityStack />
    </AuthProviderNarratives>
  );
}
//return <Personas />;

export default Community;