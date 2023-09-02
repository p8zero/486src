import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
 
const AnalysisDetailsTutorial = ({navigation}) => {


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
          onPress={() => {navigation.goBack('ChooseProfiles');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
      </View>

    <ScrollView style={{top: '18%',}}>
    <View style={{backgroundColor: '#EDBDBA',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '70%',
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
        }}>How to Create Characters
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
            Characters can be created in the "Character" section of the app.
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
           There will be guides there to explain what characters are and how to create them.
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
The video below will show you how to navigate from here to the characters section.
        </Text>
    
        
    
        <View style={{marginHorizontal: '5%', marginBottom: '10%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'bssHsL8IoLA?feature=share'}
                onChangeState={onStateChange}
            />
</View>

    </ScrollView>

        </View>
    );
};
 
export default AnalysisDetailsTutorial;
 
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