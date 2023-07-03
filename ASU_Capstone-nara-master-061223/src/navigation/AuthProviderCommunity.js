import React, { createContext, useState, useEffect, useContext} from 'react'
import firestore from '@react-native-firebase/firestore';
import { AuthContextNew } from './authProvider';

export const AuthContextCommunity = createContext();

export const AuthProviderCommunity = ({children}) => {

    return (
        <AuthContextCommunity.Provider value={{}}>
            {children}
        </AuthContextCommunity.Provider>
    )
}
