import React, { createContext, useState, useEffect, useContext} from 'react'
import firestore from '@react-native-firebase/firestore';
import { AuthContextNew } from './authProvider';

export const AuthContextSettings = createContext();

export const AuthProviderSettings = ({children}) => {

    return (
        <AuthContextSettings.Provider value={{}}>
            {children}
        </AuthContextSettings.Provider>
    )
}
