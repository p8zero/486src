import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommunityHome from '../screens/Community/CommunityHome';
import YourNarativeScreen from '../screens/Community/YourNarativeScreen';
import YourCommunityScreen from '../screens/Community/YourCommunityScreen';
import CommunityStory from '../screens/Community/CommunityStory';
import ComunityProfile from '../screens/Community/SeeCommunityButton';
import PotentialConnections from '../screens/Community/PotentialConnections';
import Invitations from '../screens/Community/Invitations';
import MatchedStoryDetails from '../screens/Community/MatchedStoryDetails';
import SimilarityWith from '../screens/Community/SimilarityWith';
import Connections from '../screens/Community/Connections';
import InProgressConnections from '../screens/Community/InProgressConnections';
import InvitationDetails from '../screens/Community/InvitationDetails';
import InProgressConnectionDetails from '../screens/Community/InProgressConnectionDetails';
import ConnectionDetails from '../screens/Community/ConnectionDetails';



const Stack = createNativeStackNavigator();
const CommunityStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={CommunityHome} name="CommunityScreen"/>
        <Stack.Screen component={YourNarativeScreen} name="YourNarativeScreen"/>
        <Stack.Screen component={YourCommunityScreen} name="YourCommunityScreen"/>
        <Stack.Screen component={CommunityStory} name="CommunityStory"/>
        <Stack.Screen component={ComunityProfile} name="ComunityProfile"/>
        <Stack.Screen component={PotentialConnections} name="PotentialConnections"/>
        <Stack.Screen component={Invitations} name="Invitations"/>
        <Stack.Screen component={MatchedStoryDetails} name="MatchedStoryDetails"/>
        <Stack.Screen component={SimilarityWith} name="SimilarityWith" />
        <Stack.Screen component={Connections} name="Connections"/>
        <Stack.Screen component={InProgressConnections} name="InProgressConnections" />
        <Stack.Screen component={InvitationDetails} name='InvitationDetails'/>
        <Stack.Screen component={InProgressConnectionDetails} name='InProgressConnectionDetails' />
        <Stack.Screen component={ConnectionDetails} name='ConnectionDetails' />

         </Stack.Navigator>
        
    )
}
export default CommunityStack;