import React, { createContext } from 'react'

export const AuthContextSettings = createContext();

export const AuthProviderSettings = ({children}) => {

    return (
        <AuthContextSettings.Provider value={{}}>
            {children}
        </AuthContextSettings.Provider>
    )
}
