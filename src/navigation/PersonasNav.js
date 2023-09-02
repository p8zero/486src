import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PersonasStack from './personasStack'

const PersonasNav = () => {

    return (
        <NavigationContainer independent='true'>
            <PersonasStack />
        </NavigationContainer>
    )
}
export default PersonasNav;