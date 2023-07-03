import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
 
const CreatingAPersonaVideoScreen = ({navigation}) => {


    return (
        <View style={styles.container}>
        <View style={{
            flex: 1,
            width: '90%',
            marginLeft: '5%',
            top: '8.5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
          }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('TutorialsScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
      </View>

    <ScrollView style={{top: '18%', left: '5%',}}>
    <View style={{backgroundColor: '#9cc8C6',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>What is a persona?
        </Text>
        </View>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '17%',
            marginLeft: '3%',
            marginTop: '5%'
        }}>
            A persona is a representation of an individual, specifically their personality and values.
        </Text>
        <View style={{backgroundColor: '#9cc8C6',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            marginTop: '10%',
            borderRadius: 40
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>How are Personas Used?
        </Text>
        </View>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '17%',
            marginLeft: '3%',
            marginTop: '5%'
        }}>
           Personas represent the individuals within a narrative. The personality & values of an individual greatly affect their perspective and their response to a given situation.  
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '17%',
            marginLeft: '3%',
            marginTop: '5%'
        }}>
           Nara takes the persona of the main perspective into consideration when evaluating a narrative. 
        </Text>
        <View style={{backgroundColor: '#9cc8C6',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            marginTop: '10%',
            borderRadius: 40
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>Persona Blueprints
        </Text>
        </View>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '17%',
            marginLeft: '3%',
            marginTop: '5%'
        }}>
          These blueprints are a collection of persona types. Each blueprint is designed to represent a specific, defined set of personality & values traits and do not include the nuances that exist in a real individual.
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '17%',
            marginLeft: '3%',
            marginTop: '5%'
        }}>
          The purpose of these blueprints are to give you a defined starting point for creating a persona from which you can tailor as you see fit.
        </Text>
        <View style={{backgroundColor: '#9cc8C6',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            marginTop: '10%',
            borderRadius: 40
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 1,
            color: '#18163A',
            fontSize: 20,
            marginLeft: '5%',
        }}>Questionnaire
        </Text>
        </View>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '17%',
            marginLeft: '3%',
            marginTop: '5%',
            marginBottom: '50%'
        }}>
          The questionnaire is what is used to construct personas. The questions that are asked are based on personality psychology frameworks such as HEXACO and the Schwartz Values Theory. You can learn more in "The Science" section.
        </Text>


    </ScrollView>

        </View>
    );
};
 
export default CreatingAPersonaVideoScreen;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF5eF',
    },
    backButton: {
        flexDirection: 'row',
        position: 'absolute',
        top: 40,
        left: 10,
        padding: 20,
    },
    title: {
        fontFamily: 'WorkSans-VariableFont_wght', 
        fontSize: 35, 
        marginLeft: 80
    },
});

//<View style={{flex: 1, marginLeft: '5%'}}>
//<Text style={{fontFamily: 'WorkSans-light', fontSize: 24, fontWeight:'400', marginLeft: '0%', letterSpacing: 2,}}>
  //  Creating a Persona
//</Text>
//</View> 