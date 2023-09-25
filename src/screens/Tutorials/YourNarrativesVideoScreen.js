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
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18183A" />}
        />

      </View>

      <ScrollView style={{top: '15%',}}>
        
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
            marginLeft: '3%',
        }}>Character Updates for Stories
        </Text>
        </View>
        <Text style = {{
            color: '#18183A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '5%',
            marginTop: '5%'
        }}>
            Currently, when you complete a story, you are not able to go back and change the characters in any way. This applies when you duplicate a completed story as well.
        </Text>

        <Text style = {{
            color: '#18183A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 18,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '40%',
        }}>
This means that if you update a character that is already part of a completed story and you want to write the same story but with different characters or different versions of a character, you have the create the story from the beginning.
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