import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

 
const FinalCustomPersonaTutorial = ({navigation}) => {

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
          onPress={() => {navigation.goBack('FinalCustomPersona');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#000000" />}
        />
      </View>

    <ScrollView style={{top: '18%',}}>
    <View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          width: '90%',

            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            color: '#000000',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>How to Read the Description
        </Text>
        </View>
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
            The character description is meant to be a representation of a person's personality & values. It doesn't define who they are as a person.
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
            It's designed to look at what motivates them and how they typically express themselves.
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
            To that end, the description is organized into specific, unique categories. While this doesn't always make for the best reading experience, it will help you to clearly understand each part of the description.
        </Text>
        

        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '10%',
            marginTop: '5%'
        }}>
            Once you're done reading the description, scroll down and select "Done" and the character description will be stored on the main character page for you to access whenever you need.
        </Text>

        <View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          width: '90%',
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            color: '#000000',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>Personalizing the Character Description
        </Text>
        </View>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '10%',
            marginTop: '5%'
        }}>
            If you want to personalize this character description, there is a notes page that you use when you select the completed story on the main character page and go to the "Options" menu.
        </Text>

        <View style={{marginHorizontal: '5%', marginBottom: '00%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'MatZIydKkc4?feature=share'}
                onChangeState={onStateChange}
            />
</View> 
        
<View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          width: '90%',
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            color: '#000000',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>Write as Many Descriptions as Needed
        </Text>
        </View>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginTop: '5%',
            marginBottom: '0%'
        }}>
           You are not limited to creating just one description per character.
        </Text>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginTop: '5%',
            marginBottom: '0%'
        }}>
           If you weren't sure how to answer certain questions, you can create multiple versions of the same character.
        </Text>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginTop: '5%',
            marginBottom: '0%'
        }}>
Or maybe you're curious to see what might happen if the person you're describing was a completely different person, to see how that might change the narration of the story.
        </Text>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginTop: '5%',
            marginBottom: '0%'
        }}>
Whatever it is, you have the freedom to create as many character descriptions as you need.
        </Text>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginTop: '5%',
            marginBottom: '10%'
        }}>
We've made this process easier by adding a "Duplicate" function that can be found the "Options" menu of the completed character description on the main character page.
        </Text>

        <View style={{marginHorizontal: '5%', marginBottom: '10%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'CFJX7pTD8CI'}
                onChangeState={onStateChange}
            />
</View> 


    </ScrollView>

        </View>
    );
};
 
export default FinalCustomPersonaTutorial;
 
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