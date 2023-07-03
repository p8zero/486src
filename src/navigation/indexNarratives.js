import React from 'react';
import { AuthProviderNarratives } from './AuthProviderNarratives';
import NarrativesStack from './NarrativesStack';

const Narratives = () => {
  return (
    <AuthProviderNarratives>
      <NarrativesStack />
    </AuthProviderNarratives>
  );
}
//return <Personas />;

export default Narratives;