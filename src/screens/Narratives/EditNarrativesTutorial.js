import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
 
const EditNarrativesTutorial = ({navigation}) => {


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
          onPress={() => {navigation.goBack('EditNarrative');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
      </View>

    <ScrollView style={{top: '18%',}}>
    <View style={{backgroundColor: '#EDBDBA',
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
        }}>What are the Plot Points?
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
            Rather than have you write out every story starting with a blank page, we've created this list of plot points with which you can build your stories.
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
            Each plot point represents a specific behavior or feeling.
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
            They are designed to be story building blocks and you simply choose which ones are part of the story.
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
            Each plot point has a detailed list of examples that illustrate what it could look like. More on how to access that below.
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
           And if you still want to write your story down, we've got a notes page that you can access after you've completed the story building process where you can do that.
        </Text>
    
      
<View style={{backgroundColor: '#EDBDBA',
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
        }}>How to Read the Plot Points
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
           Creating a story with the plot points is simple. Read through the different categories and select the ones that are relevant to the story you're writing.
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
           Remember, you're selecting the plot points from the narrator's point of view.
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
            If you select a plot point, scroll down and click "View", you'll go to a page that contains a list of what that specific behavior or feeling could look like
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
            marginTop: '3%', 
            fontStyle: 'italic'
        }}>
            (If the plot point is already selected, you might have to unselect and then reselect to see the right set of examples.)
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
            Once you've added all the plot points you want, scroll down and click "Done".
        </Text>

        <View style={{marginHorizontal: '5%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'6wUTRcQhmvs?feature=share'}
                onChangeState={onStateChange}
            />
</View> 
        
    
<View style={{backgroundColor: '#EDBDBA',
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
        }}>Notes on Story Themes
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
          If you selected a story theme as is or want to change a story theme, there will be plot points that have already been selected for you.
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '40%',
            marginTop: '3%'
        }}>
            You can unselect these and select other plot points as you wish.
        </Text>    
    

    </ScrollView>

        </View>
    );
};
 
export default EditNarrativesTutorial;
 
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