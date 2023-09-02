import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import Notes from '../../components/notes';
import { AuthContextNew } from '../../navigation/authProvider';
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';




const StoryNotes= ({navigation}) => {
  const { user } = useContext(AuthContextNew);
  const [notes, setNotes] = useState('');
  const route = useRoute();
  const { id, titleName } = route.params;


  useEffect(() => {
    const getNotes = () => {
      // Check if user and user.uid are available before proceeding
      if (user && user.uid) {
        firestore()
          .collection('Users')
          .doc(user.uid)
          .collection('Narratives')
          .doc(id)
          .get()
          .then((document) => {
            if (document.exists) {
              setNotes(document.data().notes || ''); // Update the notes state with the data from the database
            }
          })
          .catch((error) => {
            console.log('Error fetching notes:', error);
          });
      }
    };
    getNotes();
  }, [id, user]); // Add 'id' and 'user' as dependencies

  const pushNotesToFirebase = () => {
    // Update notes in the database
    firestore()
      .collection('Users')
      .doc(user.uid)
      .collection('Narratives')
      .doc(id)
      .update({
        notes: notes,
      })
      .then(() => {
        console.log('Done pushing to firebase');
      })
      .catch((error) => {
        console.log('Error updating notes in the database:', error);
      });

    navigation.goBack('SeeNarrativesButtons');
  };

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
          onPress={() => {navigation.goBack('SeeNarrativesButtons');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />

      </View>

      <ScrollView>

      <View style={{ 
      marginTop: '10%', 
      backgroundColor: '#FFF5EF',
      flexdirection: 'row',
      justifyContent: 'center',
      width: '60%',
      height: 50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,}}>
          <Text
            style={{
              fontFamily: 'WorkSans-Light',
              fontSize: 20,
              marginHorizontal: '5%',
              fontWeight: '300',
              letterSpacing: 0,
              color: '#18163A',
            }}>
           Story Notes
          </Text>
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center', marginTop: '5%'}}>
        <TouchableOpacity
              onPress={pushNotesToFirebase}
              style={styles.continueButton}
            >
              <Text style={styles.ButtonText}>Done</Text>
            </TouchableOpacity>
            </View>
      <View style={{}}>

        <View style={{alignItems: 'center', marginTop: '0%', marginBottom: "80%" }}>
        <Notes
              label={'Write Here...'}
              keyboardType="email-address"
              nameOfNotes="Notes"
              value={notes}
              onChangeText={setNotes}
              />
        </View>
      </View>
      </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    AboutScreen:{
        flex: 1,
        backgroundColor: '#F6DEDC',
    }, 
    continueButton:{
      backgroundColor: '#EDBDBA',
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
      width: 175,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10%'
    },
    ButtonText:{
      textAlign: 'center',
      paddingHorizontal: 50,
      fontWeight: '300',
      fontSize: 20,
      letterSpacing: 4,
      color: '#18163A',
      fontFamily: 'WorkSans-Regular',
    }

});


export default StoryNotes;