import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import MenuIcon from '../../assets/menu.svg';
import BackButtonMenu from '../../components/backButtonMenu';

export default function HomeScreen({navigation}) {




  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>

      <View style={{
              width: '95%',
             marginLeft: '2.5%',
             marginTop: '5%',
             marginBottom: '3%',
              flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
            }}>
              <BackButtonMenu
                label={'back button'}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
              />

            </View>

  
  <ScrollView>



  <View style={{
backgroundColor: '#FFF5EF',
borderTopLeftRadius: 40,
borderBottomRightRadius: 0
}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 22, 
          fontWeight: '400', 
          letterSpacing: 0,
          color: '#000000',
          marginLeft: '8%',
          marginTop: '5%'
          }}>
          nara - Perspective Narrator
        </Text>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 18, 
          fontWeight: '300', 
          letterSpacing: 0,
          color: '#000000',
          marginLeft: '8%',
          marginRight: '5%',
          marginTop: '5%',
          }}>
          for the moments when you need a clear, complete idea of what someone is feeling and why
        </Text>
        </View>
        
        
        <View 
      style={{backgroundColor: '#fff5ef', borderBottomRightRadius: 40, marginTop: '%'}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 22, 
          fontWeight: '400', 
          letterSpacing: 0,
          color: '#000000',
          marginLeft: '8%',
          marginTop: '10%',
          marginBottom: '5%'
          }}>
          explore...
        </Text>

        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            fontWeight: '300', 
            fontSize: 18,
            marginRight: '5%',
            marginLeft: '8%',
            letterSpacing: 0,}}>
            what might they be feeling about themselves, about me, about our situation?
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'right',
            fontWeight: '300', 
            fontSize: 18,
            marginRight: '8%',
            marginLeft: '20%',
            marginTop: '8%',
            letterSpacing: 0,}}>
            how are our perspectives different or similar?
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginRight: '15%',
            marginLeft: '8%',
            marginTop: '8%',
            marginBottom: '10%',
            letterSpacing: 0,}}>
            what circumstances would lead to change?
        </Text>
        </View>
  




<View style={{backgroundColor: '#FFF5ef', marginTop:'5%', marginBottom: '5%', 
borderTopLeftRadius: 40,
borderBottomRightRadius: 40}}>


      <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 22, 
          fontWeight: '400', 
          textAlign: 'right',
          letterSpacing: 0,
          color: '#000000',
          marginRight: '8%',
          marginTop: '8%',
          marginBottom: '12%'
          }}>
          how to use nara
        </Text>

  


        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 1,}}>
              Step 1: Create Characters
        </Text>

        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontStyle: 'italic',
            fontSize: 18,
            marginTop: '8%',
            marginRight: '5%',
            marginLeft: '5%', }}>
              Click the menu button at the top left and go to the "Characters"
        </Text>

        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontStyle: 'italic',
            fontSize: 18,
            marginTop: '5%',
            marginRight: '5%',
            marginLeft: '5%', }}>
              You must create at least two characters to write a story
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          fontSize: 18,
          marginRight: '5%',
          marginLeft: '5%',
          marginTop: '5%'}}>


A character is a representation of a individual - their personality and what they value
        </Text>
                <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: '5%',
            marginRight: '5%',
            marginLeft: '5%',}}>
              There are "character types" that can help you jump start the process or you can create a character from the beginning
        </Text>
  

        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%',
            marginTop: '10%',
            letterSpacing: 1,}}>
             Step 2: Write Stories
        </Text>

        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontStyle: 'italic',
            fontSize: 18,
            marginTop: '8%',
            marginRight: '5%',
            marginLeft: '5%', }}>
           Swipe right to begin writing
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '5%', }}>
           A story is a represention of an interaction between two characters and is written from the perspective of one of the characters (i.e. the narrator)
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: '5%',
            marginRight: '5%',
            marginLeft: '5%', }}>
           A story explores one of the following questions about the narrator's perspective:
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
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
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>
- how might they feel after what happened or how they might feel if things changed?

        </Text>

          <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 0,}}>
              There are "story themes" that can help you get started or you can write a story from the beginning
        </Text>


        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%',
            marginTop: '10%',
            letterSpacing: 1,}}>
             Step 3: The Narration
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: '8%',
            marginRight: '5%',
            marginLeft: '5%', }}>
           nara reads the story and gives a narration that answers the question about the narrator's perspective
        </Text>
                <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: '5%',
            marginRight: '5%',
            marginLeft: '5%', }}>
           Both the story and the narration are comprised of a series of specific behaviors or feelings, called "plot points"
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: '5%',
            marginRight: '5%',
            marginLeft: '5%',
            marginBottom: '8%' }}>
           Each plot point has a list of specific examples that can be viewed separately
        </Text>

      </View>

      <View style={{backgroundColor: '#FFF5ef', marginTop:'0%', marginBottom: '5%', 
borderTopLeftRadius: 40,
borderBottomRightRadius: 40}}>


      <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 22, 
          fontWeight: '400', 
          textAlign: 'right',
          letterSpacing: 0,
          color: '#000000',
          marginRight: '8%',
          marginTop: '8%',
          marginBottom: '10%'
          }}>
          after the narration
        </Text>

  


        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            letterSpacing: 1,}}>
              Explore "what if"
        </Text>


        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          fontSize: 18,
          marginRight: '5%',
          marginLeft: '5%',
          marginTop: '5%'}}>


You are not limited to writing just one version of a story or character.
        </Text>
                <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: '5%',
            marginRight: '5%',
            marginLeft: '5%',}}>
              You can create as many variations of your stories and characters, whether...
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: '5%',
            marginRight: '5%',
            marginLeft: '5%',}}>
              You're curious to see how the narration would change if the story was different
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: '5%',
            marginRight: '5%',
            marginLeft: '5%',}}>
              Or you weren't sure what to add or not to add and you want multiple versions.
        </Text>
  
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 20,
            marginRight: '5%',
            marginLeft: '5%', 
            marginTop: '10%',
            letterSpacing: 1,}}>
              Compare Character's Perspectives
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          fontSize: 18,
          marginRight: '5%',
          marginLeft: '5%',
          marginTop: '5%',
       }}>


If you're interested in seeing both sides of the same story, the perspectives of both character's, you can do that by writing two opposing stories.
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          fontSize: 18,
          marginRight: '5%',
          marginLeft: '5%',
          marginTop: '5%',
          marginBottom: '8%'}}>


See "a more detailed intro" for more information
        </Text>

      </View>

      

      <View style={{alignItems: 'flex-end', justifyContent: 'center', marginBottom: '10%', marginRight: '5%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OnBoarding')
            }}
            style={{
              marginTop: '1%',
              marginBottom: '5%',
              backgroundColor: '#18163A',
              borderRadius: 50,
              width: 200,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 20,
                fontWeight: '400',
                fontSize: 18,
                letterSpacing: 1,
                color: '#FFF5EF',
                fontFamily: 'WorkSans-Regular',
              }}>
             a more detailed intro
            </Text> 
          </TouchableOpacity>
  
      </View>



      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container : {
    backgroundColor: '#FFF5EF',
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
