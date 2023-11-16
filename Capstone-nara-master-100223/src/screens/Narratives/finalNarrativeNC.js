import React, { useContext, useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
  ImageComponent,
} from "react-native";
import BackButton from "../../components/backButton";
import Feather from "react-native-vector-icons/Feather";
import firestore, { firebase } from "@react-native-firebase/firestore";
import UserFlatList from "../../components/flatListPersonas";
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { AuthContextNarratives } from "../../navigation/AuthProviderNarratives";
import RBSheet from "react-native-raw-bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContextNew } from "../../navigation/authProvider";
import { Mixpanel } from 'mixpanel-react-native';

export default function FinalNarrativesNC({route, navigation}) {
  const { flow, mainChar, otherChar, environment } = useContext(
    AuthContextNarratives
  );
  const { user } = useContext(AuthContextNew);
  const {titleName, narrDesc, data, emotions, relationship } = route.params;

  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  const {height: SCREEN_HEIGHT} = Dimensions.get('window');

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  const dataToFirebase = () => {
    let posFeeling = [0, 1, 2, 3, 4].map((x) => emotions[x]);
    let negFeeling = [5, 6, 7, 8, 9].map((x) => emotions[x]);

    firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Narratives")
      .add({
        title: titleName,
        otherChar: otherChar,
        mainChar: mainChar,
        environment: relationship,
        data: data.flat(),
        positiveFeeling: posFeeling.flat(),
        negativeFeeling: negFeeling.flat(),
        flow: flow,
      })
      .then((docRef) => {
        console.log("Narrative To Firebase ID: ", docRef.id);
      })
      .catch((e) => {
        console.log(`createNarrative Error ${e}`);
      });
  };

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F6DEDC',
        }}>


<View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: '10%',
          marginHorizontal: '2.5%',
          padding: '0%',
          width: '95%',
        }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.goBack('SelectNarratives');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#000000" />}
        />
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('HomeScreen');}}
          icon={<Ionicons name="close" size={24} color="#000000" />}
          />
      </View>

        
        <View style={{flex:1, marginTop: '18%', backgroundColor: '#FFF5EF', 
        borderTopRightRadius: 50,
        borderTopLeftRadius: 0,}}>
          <Text style={styles.titleStyle}>{titleName}</Text>
          <ScrollView style={{paddingBottom: '5%', paddingTop: '10%'}}>
            <Text style={styles.descStyle}>{narrDesc}</Text>
          </ScrollView>
          <View style={{alignItems: 'flex-end',}}>

          <TouchableOpacity
                // onPress={() => {navigation.navigate('analysisSummary');}}
          onPress={() => {
            //detail();
            dataToFirebase();
            mixpanel.track("Narrative Creation");
            }}
                style={styles.continueButton}>
                <Text
                  style={styles.donebuttonText}>
                  Done
                </Text>
          </TouchableOpacity>
          </View>
        </View>

      </View>
    );}

    const styles = StyleSheet.create({
      inputButton: {
        marginHorizontal: '2.5%',
        marginTop: '5%',
        marginBottom: '2%',
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        maxwidth: '100%',
        height: 50,
    },
      shapeCircle: {
        width: 140,
        height: 140,
        borderRadius: 40,
        backgroundColor: '#F5F5F5',
        marginTop: '40%',
        marginHorizontal: '6.5%',
        alignItems: 'center',
      },
      textCircle: {
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'center',        
        paddingTop: 20,
        paddingHorizontal: 5,
        fontWeight: '300',
        fontSize: 20,
        color: '#000000',
        fontFamily: 'WorkSans-Regular',
        // fontFamily: 'AppleSDGothicNeo-Thin',
      },
      titleStyle: {
        flexWrap: 'wrap',
        textAlign: 'center',        
        paddingTop: '8%',
        marginHorizontal: '5%',
        fontWeight: '300',
        fontSize: 20,
        color: '#18163A',
        letterSpacing: 2,
        fontFamily: 'WorkSans-Regular',
        // fontFamily: 'AppleSDGothicNeo-Thin',
      },
      descStyle: {
        flexWrap: 'wrap',
        textAlign: 'left', 
        marginHorizontal: '5%',       
        marginBottom: '10%',
        marginTop: '0%',
        fontWeight: '300',
        fontSize: 18,
        color: '#18163A',
        letterSpacing: 0,
        fontFamily: 'WorkSans-Regular',
        // fontFamily: 'AppleSDGothicNeo-Medium',
      },
      continueButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDBDBA',
        width: 180,
        height: 50,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '5%'
      },
      editButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDBDBA',
        width: 150,
        height: 50,
        marginRight: '5%',
        borderRadius: 40,
        marginTop: '5%',
        marginBottom: '25%'
      },
      buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '300',
        fontSize: 18,
        color: '#18163A',
        letterSpacing: 4,
        fontFamily: 'WorkSans-Regular'
      }, 
      donebuttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '300',
        fontSize: 18,
        color: '#18163A',
        letterSpacing: 4,
        fontFamily: 'WorkSans-Regular'
      }, 
    });