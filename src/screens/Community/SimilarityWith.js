import React, {useState, useEffect, useRef} from 'react';
import Swiper from 'react-native-swiper';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Animated,
  Image,
  useWindowDimensions,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import MenuIcon from '../../assets/menu.svg';
import { DrawerActions } from '@react-navigation/native';
//import ChooseProfiles from './chooseProfiles';
import BackButtonMenu from '../../components/backButtonMenu';
import YourCommunityScreen from './YourCommunityScreen';
import YourNarativeScreen from './YourNarativeScreen';
import BackButtonNavNarratives from "../../components/backButtonNavNarratives";
import SimilarityWithMainCharacter from './SimilarityWithMainCharacter';
import SimilarityWithStory from './SimilarityWithStory';
import SimilarityWithNarration from './SimilarityWithNarration';
import firestore from "@react-native-firebase/firestore";
//import OnBoarding from './OnBoarding';

export default function SimilarityWith({navigation, route}) {
  const {id, matchedDocument, matchedUserDetails, narrativeDetails} = route.params;
  const [thisNarrative, setThisNarrative] = useState(null);
  const [persona, setPersona] = useState(null);
  const [thisPersona, setThisPersona] = useState(null);
  const [searchNarrative, doSearch] = useState('') 


  global.clarityInTheMoment = false
  global.clarityInTheFuture = false

  useEffect(() => {
    firestore()
    .collection('Users')
    .doc(matchedDocument.userID)
    .collection('Narratives')
    .doc(matchedDocument.narrativeID)
    .get()
    .then(result => {

      setThisNarrative({id: result.id, ...result.data()})

      firestore()
      .collection('Users')
      .doc(matchedDocument.userID)
      .collection('Personas')
      .where('name', '==', result.data().mainChar)
      .limit(1)
      .get()
      .then(res => {
        if(res.docs.length > 0){
          const data = res.docs.map(doc => ({id: doc.id, ...doc.data()}))[0];
          setThisPersona(data);
        } else{
          console.log("Found Nothing 1");
        }
      }).catch(err => console.error(err));

      firestore()
      .collection('Users')
      .doc(matchedDocument.otherUserID)
      .collection('Personas')
      .where('name', 'in', narrativeDetails.mainChar)
      .limit(1)
      .get()
      .then(res => {
        if(res.docs.length > 0){
          const data = res.docs.map(doc => ({id: doc.id, ...doc.data()}))[0];
          setPersona(data);
        } else{
          console.log("Found Nothing 2", narrativeDetails.mainChar, matchedDocument.otherUserID);
        }
      }).catch(err => console.error(err));

    }).catch(err => console.error(err));


  }, [])

  if(thisNarrative == null || persona == null || thisPersona == null){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator key={id} size={'large'} />
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F6DEDC',
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginTop: '5%',
          marginLeft: '5%',
          minHeight: 75,
        }}>
            <BackButtonNavNarratives onPress={() => navigation.pop()} />
                  
        </View>
        <Swiper>
            <SimilarityWithMainCharacter
              id = {id}
              matchedDocument = {matchedDocument}
              matchedUserDetails = {matchedUserDetails}
              narrativeDetails = {narrativeDetails}
              navigation = {navigation}
              thisNarrative = {thisNarrative}
              persona={persona}
              thisPersona={thisPersona}
            />
            <SimilarityWithStory
              id = {id}
              matchedDocument = {matchedDocument}
              matchedUserDetails = {matchedUserDetails}
              narrativeDetails = {narrativeDetails}
              navigation = {navigation}
              thisNarrative = {thisNarrative}
            />
            <SimilarityWithNarration
              id = {id}
              matchedDocument = {matchedDocument}
              matchedUserDetails = {matchedUserDetails}
              narrativeDetails = {narrativeDetails}
              navigation = {navigation}
              thisNarrative = {thisNarrative}
            />
        </Swiper>
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
