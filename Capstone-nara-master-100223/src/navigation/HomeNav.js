import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'

const HomeNav = () => {

    return (
        <NavigationContainer independent='true'>
            <HomeStack />
        </NavigationContainer>
    )
}
export default HomeNav;