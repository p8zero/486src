import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'

const CustomButtonPersonas = ({label, onPress, icon}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{flex: 1, flexDirection: 'row', backgroundColor:'#FFFAFA', borderRadius: 40, marginBottom: 30, width: 300, height: 84, shadowColor: 'rgba(0,0,0, .4)', shadowOffset: { height: 1, width: 1 }, shadowOpacity: 1, shadowRadius: 14}}>
          <View style={{padding:22}}>
            {icon}
          </View>
          <Text style={{ flex: 1, flexDirection: 'row', padding: 30, paddingHorizontal: 50, paddingTop: 31, fontWeight: '600', fontSize: 20, color: '#000000', fontFamily: 'AppleSDGothicNeo-Thin'}}>{label}</Text>
        </TouchableOpacity>

    )
}
export default CustomButtonPersonas;

