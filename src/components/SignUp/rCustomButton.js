import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const rCustomButton = ({label, onPress}) => {
    return (
      <TouchableOpacity 
          onPress={onPress} 
          style={{
            backgroundColor:'#18163A', 
            padding: 15, 
            borderRadius: 30, 
            marginBottom: 30, 
            width: 155, 
            marginEnd: 10, 
            marginLeft: 20,
          }}>
          <Text 
            style={{
              textAlign: 'center',
              fontWeight: '400',
              fontSize: 18,
              color: '#FFF5EF',
              letterSpacing: 2,
              fontFamily: 'WorkSans-Light'
            }}>
            {label}
          </Text>
      </TouchableOpacity>

    )
}
export default rCustomButton;
