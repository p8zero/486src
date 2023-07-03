import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NarrativesScreen from '../screens/Narratives/NarrativesScreen';
import chooseProfiles from '../screens/Narratives/chooseProfiles';
import Perspective from '../screens/Narratives/perspective';
import Perspective2 from '../screens/Narratives/perspective2';
import SelectNarratives from '../screens/Narratives/selectNarratives';
import EditNarratives from '../screens/Narratives/editNarrative';
import FinalNarratives from '../screens/Narratives/finalNarrative'
import ViewCustomNarratives from '../screens/Narratives/viewCustomNarrative';
import FinalNarrativesNC from '../screens/Narratives/finalNarrativeNC';
import AnalysisDetails from '../screens/Narratives/analysisDetails';
import AnalysisSummary from '../screens/Narratives/analysisSummary';
import Relationship from '../screens/Narratives/Relationship';
import SeeNarrativesButtons from '../screens/Narratives/SeeNarrativesButtons';
import HomeScreen from '../screens/Narratives/HomeScreen';


const Stack = createNativeStackNavigator();
const NarrativesStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomeScreen} name="HomeScreen"/>
        <Stack.Screen component={NarrativesScreen} name="NarrativesScreen"/>
        <Stack.Screen component={Relationship} name="Relationship"/>
        <Stack.Screen component={chooseProfiles} name="ChooseProfiles" />
        <Stack.Screen component={Perspective} name="Perspective" />
        <Stack.Screen component={Perspective2} name="Perspective2" />
        <Stack.Screen component={SelectNarratives} name="SelectNarratives" />
        <Stack.Screen component={EditNarratives} name="EditNarratives" />
        <Stack.Screen component={FinalNarratives} name="FinalNarratives" />
        <Stack.Screen component={ViewCustomNarratives} name = "ViewCustomNarratives" />
        <Stack.Screen component={FinalNarrativesNC} name="FinalNarrativesNC" />
        <Stack.Screen component={AnalysisDetails} name="AnalysisDetails" />
        <Stack.Screen component={AnalysisSummary} name="AnalysisSummary" />
        <Stack.Screen component={SeeNarrativesButtons} name="SeeNarrativesButtons" />
      </Stack.Navigator>
        
    )
}
export default NarrativesStack;