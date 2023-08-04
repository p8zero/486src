import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MenuIcon from '../../assets/menu.svg';
import BackButton from '../../components/backButton';
import firestore from '@react-native-firebase/firestore';
import BackButtonMenu from '../../components/backButtonMenu';
import CommunityFlatList from '../../components/flatListCommunication';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function YourNarativeScreen({navigation}) {

  const [input, setInput] = useState('')
  const [searchNarrative, doSearch] = useState('')
  
    return (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#F6DEDC',
        }}>
            <View style={{
            width: '95%',
            marginLeft: '2.5%',
            top: '5%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          
          </View>

          <View style={{backgroundColor:'#FFF5EF',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '25%',
            marginTop: '8%', 
            height: 55,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,

          }}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          //marginTop: '0%',
          }}>
          Community
        </Text>
            </View>
            <ScrollView>

            {/* <TouchableOpacity 
      style={{backgroundColor: '#FFF5EF', marginLeft: '3%', marginRight: '3%', height: 220, flexDirection: 'row', marginTop: '5%', borderRadius: 50, }}
      onPress={() => {clarityInTheMoment = true; navigation.navigate('CommunityStory'); 
                      //mixpanel.track('ClarityMoment', {'Flow': 'Moment'});
            }}>
        <View style={{flex: 1, justifyContent: 'center'}}>

        <View style={{}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '0%',
          }}>
          a's Story with b
        </Text>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 18, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '2%',
          }}>
          (b is a's r)
        </Text>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 20, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '5%',
          }}>
          short discription
        </Text>
      </View>

        <View style={{alignItems:'flex-end'}}>
        <TouchableOpacity
          // onPress={() => {
          //   getData();
          //   mixpanel.timeEvent("Narrative Creation");
          //   mixpanel.track("Narrative_ChoosePersonas")
          //   navigation.navigate('Perspective', {
          //     people: {pData},
          //     users: userNames,
          //     genders: userGenders,
          //     ages: userAges,
          //     traits: userTraits
          //   });
          // }}
            style={{
              backgroundColor: '#F6DEDC',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 125,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight:'0%',
              //marginBottom: '30%'
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '300',
                fontSize: 20,
                letterSpacing: 3,
                color: '#18163A',
                fontWeight: '300',
                fontFamily: 'WorkSans-Regular',
              }}>
              connect
            </Text>
          </TouchableOpacity>
          </View>


        </View>
      </TouchableOpacity>
          
      <TouchableOpacity 
      style={{backgroundColor: '#FFF5EF', marginLeft: '3%', marginRight: '3%', height: 220, flexDirection: 'row', marginTop: '5%', borderRadius: 50, }}
      onPress={() => {clarityInTheMoment = true; navigation.navigate('CommunityStory'); 
                      //mixpanel.track('ClarityMoment', {'Flow': 'Moment'});
            }}>
        <View style={{flex: 1, justifyContent: 'center'}}>

        <View style={{}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '0%',
          }}>
          a's Story with b
        </Text>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 18, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '2%',
          }}>
          (b is a's r)
        </Text>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 20, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '5%',
          }}>
          short discription
        </Text>
      </View>

        <View style={{alignItems:'flex-end'}}>
        <TouchableOpacity
          // onPress={() => {
          //   getData();
          //   mixpanel.timeEvent("Narrative Creation");
          //   mixpanel.track("Narrative_ChoosePersonas")
          //   navigation.navigate('Perspective', {
          //     people: {pData},
          //     users: userNames,
          //     genders: userGenders,
          //     ages: userAges,
          //     traits: userTraits
          //   });
          // }}
            style={{
              backgroundColor: '#F6DEDC',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 125,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight:'0%',
              //marginBottom: '30%'
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '300',
                fontSize: 20,
                letterSpacing: 3,
                color: '#18163A',
                fontWeight: '300',
                fontFamily: 'WorkSans-Regular',
              }}>
              connect
            </Text>
          </TouchableOpacity>
          </View>


        </View>
      </TouchableOpacity> */}
          

            
        <CommunityFlatList input = {input}/>
        </ScrollView>

        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    search:{
        backgroundColor: '#FFF5EF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#FFF5EF',
        borderWidth: 1,
        borderRadius: 50, 
        fontSize: 16, 
        fontFamily: 'WorkSans-Light',
        fontWeight: '300',
        letterSpacing: 2,
        marginBottom:20,
        marginTop:20
    },

}

)