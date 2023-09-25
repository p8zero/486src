import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';

export default function OnBoarding({navigation}) {


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF5EF',
      }}>

<View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: '8%',
          marginHorizontal: '2.5%',
          width: '95%',
          marginBottom: '5%'
        }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.goBack('HomeScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />

      </View>

        
      <ScrollView style={{marginTop: '5%'}}>

      <View style={{
            justifyContent: 'center',
            width: '90%',
            marginTop: '6%', 
            }}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 22,
            paddingLeft: '3%',
            paddingRight: '5%',
            letterSpacing: 0,}}>
        nara - Perspective Narrator
        </Text>
        </View>


        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

nara is a private space to help you find a clear idea around a person's perspective, how they might think and feel and why, in given moment

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

You can explore a few different aspects of a person's perspective:

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>

- what led them to feel this way or what has to change for them to feel differently?

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>
- how might they feel after what happened or how they might feel if things changed?

        </Text>


        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
nara does not establish an objective truth or define what's right and what's wrong
        </Text>

        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '10%',
          marginTop: '5%'}}>

But helps you understand, discover or confirm what a person may be thinking and feeling in a given moment

        </Text>

        


      
        
        <View style={{
            justifyContent: 'center',
            width: '65%',
            marginTop: '0%', 
            }}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 22,
            paddingLeft: '5%',
            paddingRight: '5%',
            letterSpacing: 1,}}>
How to Use nara

        </Text>
        </View>

        
        
        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '300',
         letterSpacing: 0.5,
         fontSize: 18,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


To do this, you start by creating characters
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


A character is a representation of a individual - their personality and what they value.
        </Text>
        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '300',
         letterSpacing: 0.5,
         fontSize: 18,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


These characters are then used to write stories
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


A story, within nara, is a representation of an interaction between two characters
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

The stories are written from the perspective of a character (the narrator)

        </Text>


        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


Think of story you would tell someone if they asked you "So, what happened there?"
        </Text>

        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


Once a story is written, nara reads the story and provides a narration that illustrates what the narrator's perspective might likely be for the story that was written
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '3%', 
            letterSpacing: 0,}}>
           Both the story summary and the narration summary are comprised of plot points that can be viewed individually to provide more depth
        </Text>


        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '00%',
          marginTop: '5%'}}>

How you use nara is up to you. It will take some time and energy on your part to craft these characters, stories and to process the narrations

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '00%',
          marginTop: '5%'}}>

But every part of the process was purposefully crafted to give you the clearest idea of the person's likely perspective

        </Text>

        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '20%',
          marginTop: '5%'}}>

And don't worry, you will find guides on key pages to help you along the way

        </Text>

   

        
        
        

        
      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container : {
    backgroundColor: '#EDBDBA',
  },
  list : {
    marginTop: 20, 
    paddingTop: 0,
  },
  text : {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20
  }
})
