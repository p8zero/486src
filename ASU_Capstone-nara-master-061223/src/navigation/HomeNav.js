import React from 'react'
import { View, Text, ActivityIndicator} from 'react-native'
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