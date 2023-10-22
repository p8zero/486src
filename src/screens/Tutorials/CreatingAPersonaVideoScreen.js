import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
 
const CreatingAPersonaVideoScreen = ({navigation}) => {

    const [playing, setPlaying] = useState(false);
    const [isMute, setMute] = useState(false);
    const controlRef = useRef();

    const onStateChange = (state) => {
        if (state === 'ended') {
        setPlaying(false);
        }
        if (state !== 'playing') {
            setPlaying(false);
        }
    }

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
          onPress={() => {navigation.navigate('TutorialsScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
      </View>

    <ScrollView style={{top: '18%',}}>
    <View style={{backgroundColor: '#9cc8C6',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '80%',
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
        }}>What is a Character?
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
            marginBottom: '10%',
            marginTop: '5%'
        }}>
            A character is a representation of an individual, specifically a description of their personality and what they value.
        </Text>
    <View style={{backgroundColor: '#9cc8C6',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '80%',
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
        }}>Creating a Character
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
            Creating a character within nara involves answering a series of questions concerning the person's personality and what they value.
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
            A summary of the answers is available for every created character and the answers are also sent to the AI as part of the story to be narrated.
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
            marginTop: '3%'
        }}>
            The video below shows how to create a character by answering the questions.
        </Text>
    <View style={{marginHorizontal: '5%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'CYk3bTPaMuc'}
                onChangeState={onStateChange}
            />
</View> 

        <View style={{backgroundColor: '#9cc8C6',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '80%',
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
        }}> Character Blueprint
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
            marginTop: '5%',
            marginBottom: '5%'
        }}>
           A character blueprint represents a specific, somewhat common combination of personality traits and values.
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginTop: '0%',
            marginBottom: '0%'
        }}>
           They are not meant to be a complete description of a character, but provide a great starting point to help simplify the process.
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
            marginTop: '3%'
        }}>
            The video below shows how to create a character by using a blueprint as is.
        </Text>
        <View style={{marginHorizontal: '5%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'SmfkqbpvnNA?feature=share'}
                onChangeState={onStateChange}
            />
</View> 

        <View style={{backgroundColor: '#9cc8C6',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '80%',
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
        }}>Changing a Character Blueprint
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
            marginTop: '5%',
            marginBottom: '0%'
        }}>
          You can change the answers for any blueprint to better describe the character that you are creating.
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
            marginTop: '3%'
        }}>
            The video below shows how to start with a blueprint and then tailor it.
        </Text>
        <View style={{marginHorizontal: '5%', marginBottom: '30%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'kxOKM9tro-c'}
                onChangeState={onStateChange}
            />
</View> 
    

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