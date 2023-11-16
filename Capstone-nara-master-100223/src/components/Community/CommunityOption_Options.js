import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CommunityOptionTab from './CommunityOptionTab';
import CommunityOverviewTab from './CommunityOverviewTab';
import CommunityNarration from './CommunityNarration';

const width = Dimensions.get('window').width;

const CommunityOverview_Options = ({Matched, Invitations, Pending, Connected, id, data, notes, name, narrativeDetails}) => {
  const [selectedTab, setSelectedTab] = useState('');

  const SelectedTab = () => {
    switch (selectedTab) {
      case 'a':
        return <CommunityOverviewTab PersonName={name} data={data}/>;
      case 'b':
          return <CommunityNarration PersonName={name} data={data} narrativeDetails={narrativeDetails}/>;
      case 'c':
        return <CommunityOptionTab Matched={Matched}  Invitations={Invitations} Pending={Pending} Connected={Connected}/>;
      default:
        return <CommunityOverviewTab PersonName={name} data={data}/>;
    }
  };

  //Main Container for Bottom
  return (
    <View style={styles.main_container}>
      <View style={styles.top_buttons_container}>
      <TouchableOpacity onPress={() => setSelectedTab('a')}>
          <View style={styles.overview_container}>
            <Text style={   
              'a' ? styles.textSelected : styles.text}> Story </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('b')}>
          <View style={styles.overview_container}>
            <Text style={   
              'b' ? styles.textSelected : styles.text}> Narration </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('c')}>
          <View style={styles.options_container}>
            <Text style={'c' ? styles.textSelected : styles.text}> Options </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom_container}>{SelectedTab()}</View>
    </View>
  );
};

export default CommunityOverview_Options;

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
    alignItems: 'center',
    marginLeft: '10%',
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
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0,
    color: '#18163A'
  },
});

