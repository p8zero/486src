import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
 
const SelectNarrativesTutorial = ({navigation}) => {

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
          onPress={() => {navigation.goBack('SelectNarratives');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#000000" />}
        />
      </View>

    <ScrollView style={{top: '18%',}}>
    <View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          width: '65%',
          height: 50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            color: '#000000',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>How to Write a Story
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
            marginBottom: '00%',
            marginTop: '5%'
        }}>
            You have three ways to write a story
        </Text>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '00%',
            marginTop: '5%'
        }}>
            1. Create a story from the beginning
        </Text>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
            2. Choose a story theme and go with it as is
        </Text>
        <Text style = {{
            color: '#000000',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '10%',
            marginTop: '5%'
        }}>
            3. Choose a story theme and change it to fit your story
        </Text>

    <View style={{
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
            fontWeight: '400',
            color: '#000000',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>Create a Story from the Beginning
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
            marginTop: '3%'
        }}>
            Select the button at the bottom of the page and you will go to a page with a comprehensive list of plot points. These plot points represent specific behaviors and feelings.
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
        }}>Select all the plot points that apply to create your story.
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
        There's an explanation of how to use plot points on the next page.
        </Text>
 
   
<View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          width: '90%',
          height: 50,
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            color: '#000000',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>Choosing a Story Theme As Is
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
           A story theme is a story that comes up more often than others.
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
            They can be a complete story on their own or they can provide a starting point for the writing process.
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
           There are two sets of story themes to choose from: Understanding Conflict and Pursuing Harmony.
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
          If you see one that resonates with you, click on it and a new page will pop up with a story summary.
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
        }}>At the bottom of the page, choose "Select" and you'll go straight to the summary page.
        </Text>
        <View style={{marginHorizontal: '5%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'DDuSjusfWXU'}
                onChangeState={onStateChange}
            />
</View>
<View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          width: '90%',
          height: 50,
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            color: '#000000',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '3%'
        }}>Changing a Story Theme
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
          Select the story theme you want and at the bottom choose "Change".
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
You'll go to the plot points page, only the plot points that comprise the story theme will be selected.
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
            marginTop: '3%'
        }}>
Here you'll be able to select or unselect whatever plot points you need to write your story.
        </Text>

        <View style={{marginHorizontal: '5%', marginBottom: '40%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'-jmZp8EzjdA'}
                onChangeState={onStateChange}
            />
</View> 

    </ScrollView>

        </View>
    );
};
 
export default SelectNarrativesTutorial;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
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