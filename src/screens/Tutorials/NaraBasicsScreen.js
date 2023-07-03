import React from 'react'
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';

const NaraBasicsScreen = ({navigation}) => {
    return (
        <SafeAreaView
        style={styles.safeAreaView}>
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

      <ScrollView style={{top: '15%', left: '5%',}}>
        
      <View style={{backgroundColor: '#18163A',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            borderRadius: 40
            }}>
        <Text style = {{
            color: '#FFF5EF',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%'
        }}>The Guiding Equations
        </Text>
        </View>
        <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            letterSpacing: 2,
            fontSize: 18,
            marginTop: '10%',
            marginRight: '17%',
            marginLeft: '3%',
            color: '#18163A'
        }}>Pr (S|B,P,V)

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
        Given a person’s personality, values and set of behaviors, the circumstances of their situation that led to those behaviors can be identified with a certain degree of probability
        </Text>
        <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            letterSpacing: 1,
            fontSize: 18,
            marginTop: '10%',
            marginRight: '17%',
            marginLeft: '3%',
            color: '#18163A'
        }}>How Does Nara Use This?
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
        This is the guiding equation behind the "Why are things like this & how do we get to the kind of relationship we want?" narrative path.
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
        }}>When you construct a narrative with this path, you are defining an end relationship state (set of resulting behaviors) alongside the personas involved and Nara will provide the most likely path (circumstances of the situation) to that end state.
        </Text>
        <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            letterSpacing: 2,
            fontSize: 18,
            marginTop: '10%',
            marginRight: '17%',
            marginLeft: '3%',
            color: '#18163A'
        }}>Pr (B|S,P,V)
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
        Given a person’s personality, values and the circumstances of their situation, a set of resulting behaviors can be identified with a certain degree of probability
        </Text>
        <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            letterSpacing: 1,
            fontSize: 18,
            marginTop: '10%',
            marginRight: '17%',
            marginLeft: '3%',
            color: '#18163A'
        }}>How Does Nara Use This?

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
        This is the guiding equation behind the "Where does the status quo take us & how does it go if we did things differently?" narrative path.
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
        }}>When you construct a narrative with this path, you are defining a relationship dyanmic (the circumstances of the situation) alongside the personas involved and Nara will provide the most likely end state (set of resulting behaviors) for that path.
        </Text>
        
        <View style={{backgroundColor: '#18163A',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            marginTop: '10%',
            borderRadius: 40}}>
        <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%',
            color: '#FFF5EF'
        }}>Personality & Values
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
        Everyone has a personality and is guided by their values. Personality & social psychologists have identified a set of core personality traits and values.
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
    
Each of us exhibit a complex, unique combination of these personality traits and values. By understanding how these traits and values work with and against one another, we can begin to see how we perceive and choose to engage with the people around us.
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
        }}>
Nara is influenced by evidence-based personality & social psychology frameworks such as the Big Five Personality Traits, HEXACO and the Schwartz Values Theory.
        </Text>

 
        
        <View style={{backgroundColor: '#18163A',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '15%',
            marginTop: '10%',
            borderRadius: 40}}>
        <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 1,
            fontSize: 20,
            marginLeft: '5%',
            color: '#FFF5EF'
        }}>Situations & Behaviors
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
        }}>
We are more likely to gravitate towards behaviors that fit our personality & values and for motivations that fit our personality and values.
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
        }}>
The challenge is understanding what the specific situational & behavioral components are and how to analyze the link between those components and an individual's personality & values.
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
        }}>
Nara is influenced by evidence-based personality & social psychology frameworks that explore situational taxonomies and the link between situations, behaviors and personality, such as DIAMONDS and the Whole Trait Theory.

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
        }}>
While Nara is influenced by these frameworks, part of what makes Nara unique is the narrative elements & components that you use to build narratives. These narrative elements & components were designed specifically for Nara and make it possible to analyze the link between personality & values, situation and behaviors.
        </Text>

        </ScrollView>
        </SafeAreaView>

    )
}
export default NaraBasicsScreen;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF5EF'
    }, 
    topView: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 40,
        left: 10,
        padding: 20
    },
    title: {
        fontFamily: 'WorkSans-Light', 
        fontSize: 35, 
        marginLeft: 80
    },
    mainView: {
        position: 'absolute', 
        top: 100, 
        left: 1, 
        padding: 20
    }
});