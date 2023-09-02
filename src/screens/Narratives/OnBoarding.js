import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';

export default function OnBoarding({navigation}) {


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>

<View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: '8%',
          marginHorizontal: '2.5%',
          width: '95%',
        }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.goBack('HomeScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />

      </View>

        
      <ScrollView style={{marginTop: '5%'}}>

      <View style={{backgroundColor:'#FFF5EF',
            justifyContent: 'center',
            width: '65%',
            marginTop: '12%', 
            height: 50,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            }}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 20,
            paddingLeft: '5%',
            paddingRight: '5%',
            letterSpacing: 1,}}>
        nara - Relationship Narrator
        </Text>
        </View>
      

        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
            If you've ever wondered...
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
            “what might have led them to feel this way?"
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
            “what has to change for them to feel differently?”
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
            “how might they feel going forward?”
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
           “how might they feel if things went differently?”
        </Text>

        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

nara can help you find some clarity

        </Text>

        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
Not to establish an objective truth, to find a cut and dry solution or to define what's right and what's wrong
        </Text>

        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

But to understand how someone might think and feel in a given moment

        </Text>

        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '10%',
          marginTop: '5%'}}>

Or discover how they might think and feel if things were different

        </Text>
        


      
        
        <View style={{backgroundColor:'#FFF5EF',
            justifyContent: 'center',
            width: '65%',
            marginTop: '0%', 
            height: 50,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            }}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#18163A', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 20,
            paddingLeft: '5%',
            paddingRight: '5%',
            letterSpacing: 1,}}>
How to Use nara

        </Text>
        </View>

        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

The purpose of nara is to gain clarity around a person's perspective, either the: 

        </Text>
        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>

Exposition - what led them to feel this way or what has to change for them to feel differently

        </Text>
        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>
Foreshadowing - how might they feel going forward or how they might feel if things went differently

        </Text>
        
        <Text style={{            
         color: '#18163A',
         fontFamily: 'WorkSans-Light',
         fontWeight: '300',
         letterSpacing: 0.5,
         fontSize: 16,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


To do this, you create characters and the stories they take part in.
        </Text>
        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

And nara gives you the most likely answer to the question - the narration.

        </Text>
        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


A character is a representation of a individual - their personality and what they value.
        </Text>
        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


A story is a representation of an interaction between two characters, whether it's a one-time thing or an ongoing pattern.
        </Text>
        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


Think of it as the story you would tell someone if they asked you "So, what happened there?".
        </Text>



        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '00%',
          marginTop: '5%'}}>

How you use nara is up to you. It will take some time and energy on your part to craft these characters, stories and to process the narrations, but it's all in the service of helping you gain clarity.

        </Text>

        <Text style={{            
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 16,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '20%',
          marginTop: '5%'}}>

And don't worry, you will find guides on key pages to help you along your way.

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
