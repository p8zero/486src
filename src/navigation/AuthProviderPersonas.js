import React, { createContext, useState, useContext} from 'react'
import firestore from '@react-native-firebase/firestore';
import { AuthContextNew } from './authProvider';

export const AuthContextPersonas = createContext();

export const AuthProviderPersonas = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [personName, setPersonName] = useState(null)
    const [personAge, setPersonAge] = useState(null)
    const [personGender, setPersonGender] = useState(null)
    const [personId, setPersonId] = useState(null)
    const {user} = useContext(AuthContextNew)

    const createProfile = (pname, page, pgender, nav) => {
        
        setIsLoading(true);
        firestore().collection('Users').doc(user.uid).collection('Personas').doc()
        .set({
            name: pname,
            age: page,
            gender: pgender,
            notes: ''
        })
        .then(() => {
            setPersonName(pname)
            setPersonAge(page)
            setPersonGender(pgender)
            setPersonId(ref.id)
        }
        )
        .catch(e => {
            console.log(`createProfile Error ${e}`);
        });
        setIsLoading(false)
        console.log(personId)
    }

    return (
        <AuthContextPersonas.Provider value={{createProfile, personName, personGender, personAge, personId}}>
            {children}
        </AuthContextPersonas.Provider>
    )
}
