import React, { createContext, useState, useEffect, useContext} from 'react'
import firestore from '@react-native-firebase/firestore';
import { AuthContextNew } from './authProvider';

export const AuthContextNarratives = createContext();

export const AuthProviderNarratives = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)

    const [mainChar, setMainChar] = useState()
    const [otherChar, setOtherChar] = useState()
    const [environment, setEnvironment] = useState()
   // const [workRelationship, setWorkRelationship] = useState()
    const [posFeeling, setPosFeeling] = useState()
    const [negFeeling, setNegFeeling] = useState()
    const [flow, setFlow] = useState()

    const {user} = useContext(AuthContextNew)

    const createNarrative = (mainCharacter, otherCharacter, environment, posFeeling, negFeeling, flow) => {
        setIsLoading(true);
        firestore().collection('Users').doc(user.uid).collection('Narratives').doc()
        .set({
            otherChar: otherCharacter[0],
            mainChar: mainCharacter[0],
            environment: environment,
           // workRelationship: workRelationship,
            positiveFeeling: posFeeling,
            negativeFeeling: negFeeling,
            flow: flow,
        })
        .then(() => {
                setMainChar(mainCharacter[0])
                setOtherChar(otherCharacter[0])
                setEnvironment(environment)
               // setWorkRelationship(workRelationship)
                setPosFeeling(posFeeling)
                setNegFeeling(negFeeling)
                setFlow(flow)
        }
        )
        .catch(e => {
            console.log(`createNarrative Error ${e}`);
        });
        setIsLoading(false)
        setMainChar(mainCharacter[0])
        setOtherChar(otherCharacter[0])
        setEnvironment(environment)
       // setWorkRelationship(workRelationship)
        setPosFeeling(posFeeling)
        setNegFeeling(negFeeling)
        setFlow(flow)
    }

    return (
        <AuthContextNarratives.Provider value={{createNarrative, mainChar, otherChar, environment, posFeeling, negFeeling, flow}}>
            {children}
        </AuthContextNarratives.Provider>
    )
}