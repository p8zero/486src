import React from 'react'
import { View, Text } from 'react-native'
import { MyAppText, textStyles } from "../../MyAppText";

const CommunityScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <MyAppText style={{fontFamily: 'WorkSans-Regular'}}>Community Screen</MyAppText>
        </View>

    )
}
export default CommunityScreen;