import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
// importing firestore for getting user data from firebase
// this defines function to calculate the similarity score between two sets of personas and narratives
function similarityScore(personaOne, personaTwo, narrativeOne, narrativeTwo) {
  
  // this calculates the total length of all four arrays
  let total = traitOne.length + traitTwo.length + narrativeOne.length + narrativeTwo.length + predictionOne.length....;
  
  // set the matching counter to zero
  let matching = 0;

  // first  loop through personaOne and compare each element to personaTwo
  for (let i = 0; i < personaOne.length; i++) {
    if (personaOne[i] === personaTwo[i]) {
      matching++;
    }
  }

  //then  loop through narrativeOne and compare each element to narrativeTwo
  for (let i = 0; i < narrativeOne.length; i++) {
    if (narrativeOne[i] === narrativeTwo[i]) {
      matching++;
    }
  }

  // return the similarity score as number between 0 and 1
  // 0 means no matching personas or narratives
  // 1 means all personas and narratives match

  return matching / total;
}
// define the MatchScreen functional component
const MatchScreen = ({ currentUser }) => {
  const [matches, setMatches] = useState([]);
  // fetch data from firestore and update state when currentUser changes
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        // Fetch the current user's data from Firestore
        // this was reused and changed from the EditUserNameScreen.js file in the Account folder
        const currentUserData = await firestore()
          .collection('Users_matching')// new collection made in th the firestore database
          .doc(currentUser.uid)
          .get();
        const currentUserPersonas = currentUserData.data().personas;
        const currentUserNarratives = currentUserData.data().narratives;

        // Compare current user's personas and narratives to other users in Firestore
        const allUsers = await firestore()
          .collection('Users_matching')
          .where('email', '!=', currentUser.email)
          .get();

          // this is the array that will hold the user matches
          // this was reused and changed from the EditUserNameScreen.js file in the Account folder 
        const userMatches = [];
        allUsers.forEach((doc) => {
          const userData = doc.data();
          const matchPersonas = userData.personas;
          const matchNarratives = userData.narratives;

          // Calculate similarity score between current user and match personas and narratives
          const similarityScoreValue = similarityScore(
            currentUserPersonas,
            matchPersonas,
            currentUserNarratives,
            matchNarratives
          );

          // Add match to list of user matches
          
          userMatches.push({
            uid: doc.id,
            email: userData.email,
            name: userData.name,
            similarityScore: similarityScoreValue,
          });
        });

        // Sort matches by similarity score, this is in descending order
        userMatches.sort((a, b) => b.similarityScore - a.similarityScore);

        // Save top three matches to state
        setMatches(userMatches.slice(0, 3));
      } catch (error) {
        console.log('Error fetching matches:', error);
      }
    };
    // call the fetchMatches function
    fetchMatches();
  }, [currentUser]);
// for now render the top three matches as text
  return (
    <View>
      <Text>Top three matches:</Text>
      {matches.map((match, index) => (
        <View key={match.uid}>
          <Text>{index + 1}. Name: {match.name}, Email: {match.email}, Similarity Score: {match.similarityScore}</Text>
        </View>
      ))}
    </View>
  );
};

export default MatchScreen;