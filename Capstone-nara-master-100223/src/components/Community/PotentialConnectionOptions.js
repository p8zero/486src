import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import PotentialConnectionOptionsTab from './PotentialConnectionOptionsTab';

const PotentialConnectionOption = ({SimilarityWith, Connect, Chat, matchedDocument, matchedUserDetails, narrativeDetails}) => {
  const [selectedTab, setSelectedTab] = useState('');

  const SelectedTab = () => {
    switch (selectedTab) {
      case 'a':
        return <PotentialConnectionOptionsTab Chat={Chat} matchedDocument={matchedDocument} matchedUserDetails={matchedUserDetails} narrativeDetails={narrativeDetails} SimilarityWith={SimilarityWith} Connect={Connect}/>; //Duplicate={Duplicate}
      default:
        return <PotentialConnectionOptionsTab Chat={Chat} matchedDocument={matchedDocument} matchedUserDetails={matchedUserDetails} narrativeDetails={narrativeDetails} SimilarityWith={SimilarityWith} Connect={Connect}/>; //Duplicate={Duplicate}
    }
  };

  //Main Container for Bottom
  return (
    <View style={styles.main_container}>
      <View style={styles.top_buttons_container}>
        <TouchableOpacity onPress={() => setSelectedTab('a')}>
          <View style={styles.options_container}>
            <View style={styles.scoreBox}>
              <Text style={styles.score}>{parseInt(matchedDocument.score*100)}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={'a' ? styles.textSelected : styles.text}> Matched Score </Text>
            </View>
            
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom_container}>{SelectedTab()}</View>
    </View>
  );
};

export default PotentialConnectionOption;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#FFF5EF',
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  top_buttons_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '7%',
  },

  overview_container: {
    alignItems: 'center',
    marginRight: '10%',
  },

  options_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontFamily: 'WorkSans-Light',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 4,
    color:'#18163A'
  },

  textSelected: {
    fontFamily: 'WorkSans-Light',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 4,
    color: '#18163A'
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
});

