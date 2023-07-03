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

    <ScrollView style={{top: '18%', left: '5%', }}>
    <View style={{backgroundColor: '#EDBDBA',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40
            }}>
    <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>What is a narrative?
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
            A narrative is a representation of a relationship dynamic. This includes the outword behaviors of both individuals their internal movitations.
        </Text>
        <View style={{backgroundColor: '#EDBDBA',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40,
            marginTop: "8%",
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>Narrative Starting Point
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
        }}>The first step to creating a narrative is to decide which question you want an answer for.
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
        }}>For "How do we get to the kind of relationship we want with each other?", you are defining an end relationship state (end of the path) and Nara will provide the most likely path to that end state.
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
        }}>For "If we did things in our relationship differently, how does it go?", you are defining a relationship dyanmic (the path being taken) and Nara will provide the most likely end state for that path.
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
        }}>You can learn more about the science behind these options in "The Science" section. 
        </Text>
        <View style={{backgroundColor: '#EDBDBA',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40,
            marginTop: "8%",
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>Personas
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
        }}>For any narrative, two personas must be selected. They represent the individuals in the narrative. You can learn more in the "Creating Personas" section. 
        </Text>
        <View style={{backgroundColor: '#EDBDBA',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40,
            marginTop: "8%",
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>Main Perspective
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
        }}>A narrative is created from the perspective of one of the personas in the relationship. The resulting analysis that Nara gives will be tailored for the selected persona.
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
        }}>To see any narrative from the other persona's perspective, reconstruct the same narrative, but from the other persona's perspective.
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
        }}>(Note: When reconstructing a narrative from the other persona's perspective, many of the narrative components will have to be flipped to ensure that the external behaviors and internal motivations are attributed to the right personas.)
        </Text>
        <View style={{backgroundColor: '#EDBDBA',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40,
            marginTop: "8%",
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 1,
            color: '#18163A',
            fontSize: 20,
            marginLeft: '5%'
        }}>Relationship Type
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
        }}>The relationship type defines what kind of relationship the two personas within the narrative have with one another.
        </Text>
        <View style={{backgroundColor: '#EDBDBA',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40,
            marginTop: "8%",
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 1,
            color: '#18163A',
            fontSize: 20,
            marginLeft: '5%'
        }}>Main Persona's Emotions
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
        }}>The main persona's emotions are a representation of the feelings they are experiencing within the context of the narrative with the other persona.
        </Text>
        <View style={{backgroundColor: '#EDBDBA',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40,
            marginTop: "8%",
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>Narrative Blueprints
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
          These blueprints are a collection of pre-defined narratives. Each blueprint is designed to represent a specific relationship dynamic.
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
          The purpose of these blueprints are to give you a defined starting point for creating a narrative from which you can tailor as you see fit.
        </Text>
        <View style={{backgroundColor: '#EDBDBA',
            height: 60,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40,
            marginTop: "8%",
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#18163A',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>Narrative Elements & Components
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
        }}>Every narrative is ultimately comprised of a combination of narrative components. These components are designed to represent a specific behavior or internal motivation.
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
        }}>Narrative components are categorized into narrative elements. These elements are designed to represent the pillars of external behaviors and internal motivations that ultimately comprise nearly all relationship dyanmics.
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
        }}>You can learn more about where the narrative elements and components come from in "The Science" section.
        </Text>
        <View style={{backgroundColor: '#EDBDBA',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40,
            marginTop: "8%",
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 1,
            fontSize: 20,
            color: '#18163A',
            marginLeft: '5%'
        }}>nara's Deductions
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
        }}>This is Nara's analysis of a given narrative.
        </Text>
        <Text style = {{
           color: '#18163A',
           fontFamily: 'WorkSans-Light',
           fontWeight: '300',
           letterSpacing: 0.5,
           fontSize: 16,
           marginRight: '17%',
           marginLeft: '3%',
           marginTop: '5%',
        }}>It is the output of the AI the powers nara and is comprised of the narrative components that have exceeded a certain probability confidence level threshold.
        </Text>
        <Text style = {{
           color: '#18163A',
           fontFamily: 'WorkSans-Light',
           fontWeight: '300',
           letterSpacing: 0.5,
           fontSize: 16,
           marginRight: '17%',
           marginLeft: '3%',
           marginTop: '5%',
        }}>For the "Why are things like this & how do we get to the kind of relationship we want?" path, this means that the narrative components in the resulting path are very likely to be the set of circumstances that led to the relationship state defined in the given narrative.
        </Text>
        <Text style = {{
           color: '#18163A',
           fontFamily: 'WorkSans-Light',
           fontWeight: '300',
           letterSpacing: 0.5,
           fontSize: 16,
           marginRight: '17%',
           marginLeft: '3%',
           marginTop: '5%',
        }}>For the "Where does the status quo take us & how does it go if we did things differently?" path, this means that the narrative components in the resulting path are very likely to be the set of behaviors that are exhibited as a direct result of the given narrative.
        </Text>
        <Text style = {{
           color: '#18163A',
           fontFamily: 'WorkSans-Light',
           fontWeight: '300',
           letterSpacing: 0.5,
           fontSize: 16,
           marginRight: '17%',
           marginLeft: '3%',
           marginTop: '5%',
        }}>There is no guarantee that these results are completely accurate. What the results represent is a high-probability scenario.
        </Text>
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
        }}>There is also no timeline associated with these results, meaning that the different narrative components may occur at different times and not all at once.
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
        backgroundColor: '#FFF5EF',
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
 //   Creating a Narrative
//</Text>
//</View>