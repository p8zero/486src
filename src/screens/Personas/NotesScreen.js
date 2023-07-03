import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import BackButtonHeader from '../../components/BackButtonHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import Notes from '../../components/notes';




const PolicyScreen= ({navigation}) => {


    const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

    return (
        <SafeAreaView style={styles.AboutScreen}>
             
         <View style={{
            marginLeft: '2.5%',
            top: '5%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.goBack('SeeProfileButtons');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />

      </View>
      <ScrollView contentContainerStyle={{alignItems: 'center', 
      height: SCREEN_HEIGHT*.8,}}>

        <View style={{marginTop: '5%'}}>
          <Notes
              label={`Write Here...`}
              keyboardType="email-address"
              nameOfNotes="Notes"
              />
        </View>
      </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    AboutScreen:{
        flex: 1,
        backgroundColor: '#EDBDBA',
    }, 

});


export default PolicyScreen;