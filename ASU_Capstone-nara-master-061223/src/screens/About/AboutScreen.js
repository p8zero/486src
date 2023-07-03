import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import BackButtonHeader from '../../components/BackButtonHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
const AboutScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.AboutScreen}>
        <View style={{
            width: '90%',
            marginLeft: '2.5%',
            top: '5%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('SettingsScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        </View>
            <View style={{left: '4%',}}>
        <TouchableOpacity
          onPress={() => {navigation.navigate('TermsOfUseScreen')}}
          style={{
            padding: '0%', 
            width: '90%',
            borderRadius: 5, 
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '15%',
          }}>
          <Text style={{ 
            fontFamily: 'WorkSans-light',
            fontSize: 20, 
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 2,
          }}>
              Terms of Use
          </Text>
          <Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {navigation.navigate('PolicyScreen')}}
          style={{
            padding: '0%', 
            width: '90%',
            borderRadius: 5, 
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10%',
          }}>
          <Text style={{ 
            fontFamily: 'WorkSans-light',
            fontSize: 20, 
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 2,
          }}>
              Privacy Policy
          </Text>
          <Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
        </TouchableOpacity>
      </View>
        </SafeAreaView>
        

    )
}

const styles = StyleSheet.create({
    AboutScreen:{
        flex: 1,
        backgroundColor: '#FFF5EF',
        padding:10, 
    }, 
    BackButtonStyles:{
        position:'relative', 
        top:15, 
        left:-90,  
    },
});


export default AboutScreen;