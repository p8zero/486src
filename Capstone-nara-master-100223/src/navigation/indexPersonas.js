import React from 'react';
import { AuthProviderPersonas } from './AuthProviderPersonas';
import PersonasStack from './personasStack';

const Personas = () => {
  return (
    <AuthProviderPersonas>
      <PersonasStack />
    </AuthProviderPersonas>
  );
}
//return <Personas />;

export default Personas;