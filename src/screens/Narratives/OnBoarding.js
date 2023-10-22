import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function OnBoarding({navigation}) {

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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF5EF',
      }}>

<View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: '8%',
          marginHorizontal: '2.5%',
          width: '95%',
          marginBottom: '5%'
        }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.goBack('HomeScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />

      </View>

        
      <ScrollView style={{marginTop: '5%'}}>

      <View style={{
            justifyContent: 'center',
            width: '90%',
            marginTop: '6%', 
            }}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 22,
            paddingLeft: '3%',
            paddingRight: '5%',
            letterSpacing: 0,}}>
        nara - Perspective Narrator
        </Text>
        </View>


        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

nara is a private space to help you find a clear, complete idea of what someone might be feeling and why

        </Text>

        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

within nara, you can explore these questions:

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>

- what might they be feeling about themselves, about me, about our situation?

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>
- how are our perspectives different or similar?

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>
- what circumstances would lead to change?

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
nara does not establish an objective truth or define what's right and what's wrong
        </Text>

        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '10%',
          marginTop: '5%'}}>

But helps you understand, discover or confirm what someone may be thinking and feeling in a given moment

        </Text>

        


      
        
        <View style={{
            justifyContent: 'center',
            width: '65%',
            marginTop: '0%', 
            }}>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '400', 
            fontSize: 22,
            paddingLeft: '5%',
            paddingRight: '5%',
            letterSpacing: 1,}}>
How to Use nara

        </Text>
        </View>

        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '400',
         letterSpacing: 0.5,
         fontSize: 20,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


Creating Characters
        </Text>
        
        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '300',
         letterSpacing: 0.5,
         fontSize: 18,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


You start by creating characters
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


A character is a representation of a individual - their personality and what they value.
        </Text>
        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '300',
         letterSpacing: 0.5,
         fontSize: 18,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


There are "character types" that can help you jump start the process or you can create a character from the beginning
        </Text>
        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '300',
         letterSpacing: 0.5,
         fontSize: 18,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


A character type is a character description that comes up more often than others and can be a complete character description on their own or they can provide a starting point
        </Text>

        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '400',
         letterSpacing: 0.5,
         fontSize: 20,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


Writing Stories
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


A story is a representation of an interaction between two characters and are written from the perspective of one of the characters (i.e. the narrator)
        </Text>


        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>


Think of story you would tell someone if they asked you "So, what happened there?"
        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

Stories explores one of the following questions about the narrator's perspective:

        </Text>
        
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>

- what led them to feel this way or what has to change for them to feel differently?

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '10%',
          marginBottom: '0%',
          marginTop: '5%'}}>
- how might they feel after what happened or how they might feel if things changed?

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

There are "story themes" that can help you get started or you can write a story from the beginning

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>

A story theme is a story that comes up more often than others and can be a complete story on their own or they can provide a starting point

        </Text>
        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '400',
         letterSpacing: 0.5,
         fontSize: 20,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


The Narration
        </Text>

        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '0%',
          marginTop: '5%'}}>



Once a story is written, nara reads the story and gives a narration that answers the question about the narrator's perspective
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '3%', 
            letterSpacing: 0,}}>
Both the story and the narration are comprised of a series of specific behaviors or feelings, called "plot points"
        </Text>
        <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            fontWeight: '300', 
            fontSize: 18,
            marginTop: 20,
            marginRight: '5%',
            marginLeft: '3%', 
            letterSpacing: 0,}}>
Each plot point has a list of specific examples that can be viewed separately
        </Text>

        <Text style={{            
         color: '#000000',
         fontFamily: 'WorkSans-Light',
         fontWeight: '400',
         letterSpacing: 0.5,
         fontSize: 20,
         marginRight: '10%',
         marginLeft: '3%',
         marginBottom: '0%',
         marginTop: '5%'}}>


Other notes on nara
        </Text>


        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '00%',
          marginTop: '5%'}}>

How you use nara is up to you. It will take some time and energy on your part to craft these characters, stories and to process the narrations

        </Text>
        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '00%',
          marginTop: '5%'}}>

But every part of the process was purposefully crafted to give you the clearest idea of the narrator's perspective

        </Text>

        <Text style={{            
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          fontWeight: '300',
          letterSpacing: 0.5,
          fontSize: 18,
          marginRight: '10%',
          marginLeft: '3%',
          marginBottom: '10%',
          marginTop: '5%'}}>

And don't worry, you will find guides on key pages to help you along the way

        </Text>

        <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '400',
            color: '#000000',
            letterSpacing: 0,
            fontSize: 24,
            marginLeft: '3%',
            marginBottom: '5%'
        }}>Other ways to use nara
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
        }}>Explore "what if"
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
           You are not limited to writing just one story for whatever interaction you are exploring. The same goes for characters.
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
           Maybe you weren't sure what to add or not to add in your story and you want multiple versions.
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
Maybe you're curious to see how the narration would change if the story was different
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
Maybe you know how you want things to be and would like to see how both characters might get there.
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
Whatever it is, you have the freedom to write as many stories as you need.
        </Text>
        
        <View style={{marginHorizontal: '5%', marginBottom: '0%'}}>     
    <YoutubePlayer
                height={300}
                width={"100%"}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={'YjbCAog1i-A'}
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
        }}>Compare Character's Perspectives
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
            Stories and narrations are meant to be subjective and biased. It's all from the narrator's perspective.
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
            Now if you're interested in seeing both sides of the story, the perspectives of both character's, you can do that by writing two opposing stories.
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
            The video below shows how to create a story from one character's perspective and then create the same story, but from the other character's perspective.
        </Text>
        <View style={{marginHorizontal: '5%', marginBottom: '0%'}}>     
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
    <View style={{marginHorizontal: '5%', marginBottom: '10%'}}>     
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


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container : {
    backgroundColor: '#EDBDBA',
  },
  list : {
    marginTop: 20, 
    paddingTop: 0,
  },
  text : {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20
  }
})
