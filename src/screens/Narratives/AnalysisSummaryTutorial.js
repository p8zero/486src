import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
 
const AnalysisSummaryTutorial = ({navigation}) => {

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
          onPress={() => {navigation.goBack('AnalysisSummary');}}
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
        }}>Reading the Narration Summary
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
            The narration summary captures the essence of the "exposition" or "foreshadowing" of the story.
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
            It looks not at the specific words or actions that happened, but towards the intentions and feelings behind them. 
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
            To that end, the summary is organized into specific, unique categories to help you to clearly identify each part of the narration.
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
Like the story, the narration is comprised of a series of "plot points".
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
Each plot point within the narration contains a list of what that specific behavior or feeling could look like
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
            To see these, scroll down, select "Details".
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
            Once you're done reading the summary, scroll down and select "Done" and the story + narration will be stored on the "Stories You've Written" page for you to access whenever you need.
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
        }}>Personalizing the Narration & Story
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
            If you want to personalize the narration and / or the story, there is a notes page that you use when you select the completed story on the "Stories You've Wrriten" page and go to the "Options" menu.
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
            If you're having trouble finding the words to write down, you can try the following:
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
            marginTop: '3%'
        }}>
            1. Look through the examples for each plot point and see if any of those resonate with you
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
            marginTop: '3%'
        }}>
            2. Take those examples are write them into the notes page
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
            marginTop: '3%'
        }}>
            3. Do this for every plot point in the narration and / or story summary
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
            The video below gives an example of that.
        </Text>
    <View style={{marginHorizontal: '5%', marginBottom: '20%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'cwzKpP3nyaM'}
                onChangeState={onStateChange}
            />
</View>


    </ScrollView>

        </View>
    );
};
 
export default AnalysisSummaryTutorial;
 
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