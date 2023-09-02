import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

 
const CreateCustomPersonasTutorial = ({navigation}) => {



    return (
        <View style={styles.container}>
        <View style={{
            flex: 1,
            width: '90%',
            marginLeft: '2.5%',
            top: '8.5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
          }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.goBack('CreateCustomPersonas');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
      </View>

    <ScrollView style={{top: '18%',}}>
    <View style={{backgroundColor: '#9cc8C6',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '65%',
          height: 50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          marginBottom: '5%'
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>Why So Many Questions?
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
            There are 31 questions to answer per character description. I know it seems like a lot, but you really can't reduce a person down to a 10 question list. 
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
            We've done what we could to minimize the number of questions to answer and our research led us to this list.
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
            nara is designed to take the narrator's character description into account when creating it's narration.
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '10%',
            marginTop: '5%'
        }}>
            You'll get the most out of nara if you can take a little time and answer the character description questions as best as you can.
        </Text>
    <View style={{backgroundColor: '#9cc8C6',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '65%',
          height: 50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          marginBottom: '5%'
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>How to Answer the Questions
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
            You may feel that you don't know a person well enough to answer certain questions or that answering them a certain way is casting a judgement on them.
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
            marginTop: '3%'
        }}>
            Rest assured, this is not the case. There is no pressure for you to have to choose the "right" answers to these questions.
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
            marginTop: '3%'
        }}>
            These character descriptions are a representation of an individual and it does not define them.
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
            marginTop: '3%'
        }}>
            Just remember these two things when you're answering the questions:
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
            marginTop: '3%'
        }}>
            1. nara is private. No one will see your answers to a question.
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '50%',
            marginTop: '3%'
        }}>
            2. You can create as many character descriptions as you want and explore a bit. If you're not sure how to answer a question, you can create another version of this character and answer the questions differently.
        </Text>



    

        

    </ScrollView>

        </View>
    );
};
 
export default CreateCustomPersonasTutorial;
 
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