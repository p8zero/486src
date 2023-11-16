// Make PotentialConnection the default export
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import 'react-native-gesture-handler';

import firestore from "@react-native-firebase/firestore";
import UserIcon from '../UserIcon';

export default function PotentialConnection({ item, navigation, detailsScreen }) {
  const [matchedUserDetails, setMatchedUserDetails] = useState(null);
  const [narrativeDetails, setNarrativeDetails] = useState(null);

  useEffect(() => {
    firestore()
      .collection("Users")
      .doc(item.otherUserID)
      .get()
      .then(result => {
        setMatchedUserDetails({ id: result.id, ...result.data() });
      }).catch(error => console.log(error));

      firestore()
      .collection("Users")
      .doc(item.otherUserID)
      .collection("Narratives")
      .doc(item.otherNarrativeID)
      .get()
      .then(result => {
        setNarrativeDetails({id: result.id, ...result.data()});
      }).catch(error => console.log(error));
  }, []);

  if (matchedUserDetails == null || narrativeDetails == null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <TouchableOpacity style={styles.xcontainer} 
    onPress={() => navigation.navigate(detailsScreen, {
        id: item.id,
        matchedDocument: item,
        matchedUserDetails,
        narrativeDetails
     })}>
      <View style={styles.iconContainer}>
        <UserIcon userName={matchedUserDetails.username} inColor= {'#FBF2F1'} outColor= {'#F5969A'} size={70} fontSize={30}/>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{matchedUserDetails.username}</Text>
        </View>
      </View>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
            <Text style={styles.score}>{parseInt(item.score*100)}</Text>
        </View>
        <Text style={styles.matched}>Matched{'\n'}Score</Text>
      </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBF2F1',
    borderRadius: 30,
    marginBottom: '5%',
    width: '100%',
    height: 150,
  },
  xcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FBF2F1',
    borderRadius: 30,
    marginBottom: '5%',
    width: '100%',
    height: 150,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  textContainer: {
    marginLeft: 5
  },
  text: {
    fontWeight: '300',
    color: '#18163A',
    fontSize: 20,
    fontFamily: 'WorkSans-Light',
    textAlign:'left',
    marginHorizontal: '5%',
    marginBottom: '2%',
    letterSpacing: 1,
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  scoreBox: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F3777E'
  },
  score: {
    color: '#FFFFFF',
    fontSize: 20
  },
  matched: {
    textAlign: 'center',
    color: '#423E73',
    fontSize: 15
  }
});
