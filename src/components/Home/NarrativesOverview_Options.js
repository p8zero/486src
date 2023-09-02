import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NarrativesOptionsTab from './NarrativesOptionsTab';
import NarrativesOverviewTab from './NarrativesOverviewTab';

const NarrativesOverview_Options = ({Deduction, Edit, Duplicate, Create, Delete,id, data, notes, name}) => {
  const [selectedTab, setSelectedTab] = useState('');

  const SelectedTab = () => {
    switch (selectedTab) {
      case 'a':
        return <NarrativesOverviewTab PersonName={name} data={data}/>;
      case 'b':
        return <NarrativesOptionsTab Deduction={Deduction}  Edit={Edit} Create={Create}  Delete={Delete}/>; //Duplicate={Duplicate}
      default:
        return <NarrativesOverviewTab PersonName={name} data={data}/>;
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
          <View style={styles.options_container}>
            <Text style={'b' ? styles.textSelected : styles.text}> Options </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom_container}>{SelectedTab()}</View>
    </View>
  );
};

export default NarrativesOverview_Options;

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
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 4,
    color: '#18163A'
  },
});

