import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NarrativesScreen from '../screens/Narratives/NarrativesScreen';
import chooseProfiles from '../screens/Narratives/chooseProfiles';
import Perspective from '../screens/Narratives/perspective';
import PerspectiveTutorial from '../screens/Narratives/PerspectiveTutorial';
import Perspective2 from '../screens/Narratives/perspective2';
import SelectNarratives from '../screens/Narratives/selectNarratives';
import EditNarratives from '../screens/Narratives/editNarrative';
import FinalNarratives from '../screens/Narratives/finalNarrative'
import SelectNarrativesTutorial from '../screens/Narratives/SelectNarrativesTutorial';
import EditNarrativesTutorial from '../screens/Narratives/EditNarrativesTutorial';
import FinalNarrativeTutorial from '../screens/Narratives/FinalNarrativeTutorial'
import ViewCustomNarratives from '../screens/Narratives/viewCustomNarrative';
import FinalNarrativesNC from '../screens/Narratives/finalNarrativeNC';
import AnalysisDetails from '../screens/Narratives/analysisDetails';
import AnalysisSummary from '../screens/Narratives/analysisSummary';
import AnalysisDetailsTutorial from '../screens/Narratives/AnalysisDetailsTutorial';
import AnalysisSummaryTutorial from '../screens/Narratives/AnalysisSummaryTutorial';
import ChooseProfilesTutorial from '../screens/Narratives/ChooseProfilesTutorial';
import Relationship from '../screens/Narratives/Relationship';
import SeeNarrativesButtons from '../screens/Narratives/SeeNarrativesButtons';
import HomeScreen from '../screens/Narratives/HomeScreen';
import StoryNotes from '../screens/Narratives/StoryNotes';
import OnBoarding from '../screens/Narratives/OnBoarding';
import ChoosingaPath from '../screens/Narratives/ChoosingaPath';
import ClarityFortheFuture from '../screens/Narratives/ClarityFortheFuture';
import ClarityintheMoment from '../screens/Narratives/ClarityintheMoment';
import LandingPage from '../screens/Narratives/LandingPage';


const Stack = createNativeStackNavigator();
const NarrativesStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomeScreen} name="HomeScreen"/>
        <Stack.Screen component={LandingPage} name="LandingPage"/>
        <Stack.Screen component={ClarityFortheFuture} name="ClarityFortheFuture" />
        <Stack.Screen component={ClarityintheMoment} name="ClarityintheMoment" />
        <Stack.Screen component={OnBoarding} name="OnBoarding"/>
        <Stack.Screen component={NarrativesScreen} name="NarrativesScreen"/>
        <Stack.Screen component={ChoosingaPath} name="ChoosingaPath"/>
        <Stack.Screen component={Relationship} name="Relationship"/>
        <Stack.Screen component={chooseProfiles} name="ChooseProfiles" />
        <Stack.Screen component={ChooseProfilesTutorial} name="ChooseProfilesTutorial" />
        <Stack.Screen component={Perspective} name="Perspective" />
        <Stack.Screen component={PerspectiveTutorial} name="PerspectiveTutorial" />
        <Stack.Screen component={Perspective2} name="Perspective2" />
        <Stack.Screen component={SelectNarratives} name="SelectNarratives" />
        <Stack.Screen component={EditNarratives} name="EditNarratives" />
        <Stack.Screen component={FinalNarratives} name="FinalNarratives" />
        <Stack.Screen component={SelectNarrativesTutorial} name="SelectNarrativesTutorial" />
        <Stack.Screen component={EditNarrativesTutorial} name="EditNarrativesTutorial" />
        <Stack.Screen component={FinalNarrativeTutorial} name="FinalNarrativeTutorial" />
        <Stack.Screen component={ViewCustomNarratives} name = "ViewCustomNarratives" />
        <Stack.Screen component={FinalNarrativesNC} name="FinalNarrativesNC" />
        <Stack.Screen component={AnalysisDetails} name="AnalysisDetails" />
        <Stack.Screen component={AnalysisSummary} name="AnalysisSummary" />
        <Stack.Screen component={AnalysisDetailsTutorial} name="AnalysisDetailsTutorial" />
        <Stack.Screen component={AnalysisSummaryTutorial} name="AnalysisSummaryTutorial" />
        <Stack.Screen component={SeeNarrativesButtons} name="SeeNarrativesButtons" />
        <Stack.Screen component={StoryNotes} name="StoryNotes" />
      </Stack.Navigator>
        
    )
}
export default NarrativesStack;