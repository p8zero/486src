import { View, Text, ActivityIndicator} from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PersonasStack from './personasStack'
import { AuthProviderPersonas } from './AuthProviderPersonas'

const PersonasNav = () => {

    return (
        <NavigationContainer independent='true'>
            <PersonasStack />
        </NavigationContainer>
    )
}
export default PersonasNav;