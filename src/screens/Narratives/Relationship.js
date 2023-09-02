import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContextNarratives } from '../../navigation/AuthProviderNarratives';
import { Mixpanel } from 'mixpanel-react-native';


export default function Perspective({ route, navigation }) {
  const { mainChar, otherChar, gender, age, trait } = route.params;

  const { createNarrative } = useContext(AuthContextNarratives);
  let env = '';



  // Enumerator to prevent bugs when typing out strings.
  const relations = Object.freeze({
    PARENT: "Parent",
    CHILD: "Child",
    SIBLING: "Sibling",
    IN_LAW: "In Law",
    EXTENDED: "Extended",
    EMPLOYEE: "Employee",
    BOSS: "Boss",
    COLLEAGUE: "Colleague",
    CUSTOMER: "Customer",
    PARTNER: "Partner",
    ROMANTIC_INTEREST: "Romantic Interest",
    EX: "Ex",
    FRIEND: "Friend",
    ACQUAINTANCE: "Acquaintance",
    ALLY: "Ally",
    RIVAL: "Rival",
    SOCIETY: "Society",
    NONE: ""
  });

  // The relationship selected by the user will initially be set to .NONE = ""
  const [relationship, setRelationship] = useState(relations.NONE);

  // For debugging
  const printRealtionship = () => {
    console.log("relationship: " + relationship);

  };

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          top: '5%',
          marginHorizontal: '2.5%',
          padding: '0%',
          width: '95%',
        }}>
        <BackButton
          label={'back button'}
          onPress={() => { navigation.goBack('Perspective'); }}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        <BackButton
          label={'back button'}
          onPress={() => { navigation.navigate('NarrativesScreen') }}
          icon={<Ionicons name="close" size={24} color="#18163A" />}
        />
      </View>
      <View
        style={{ top: '5%',        marginBottom: '10%',          
        backgroundColor: '#FFF5EF',
        flexdirection: 'row',
        justifyContent: 'center',
        width: '65%',
        height: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50, }}>
        <Text
          style={{
            fontFamily: 'WorkSans-Regular',
            fontSize: 20,
            fontWeight: '300',
            marginLeft: '5%',
            marginRight: '5%',
            color: '#18163A',
            letterSpacing: 0,
          }}>
          Who is {otherChar} to {mainChar}?
        </Text>
      </View>

      <ScrollView>
        <View style={{ marginTop: '5%', marginBottom: '2%', marginHorizontal: '4%' }}>
          <Text style={styles.headertext}>
            Family
          </Text>
        </View>

        <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: '4%' }}>
          <TouchableOpacity style={relationship == relations.PARENT ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.PARENT)}>
            <Text style={styles.text}>
              Parent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.CHILD ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.CHILD)}>
            <Text style={styles.text}>
              Child
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.SIBLING ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.SIBLING)}>
            <Text style={styles.text}>
              Sibling
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.IN_LAW ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.IN_LAW)}>
            <Text style={styles.text}>
              In Law
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.EXTENDED ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.EXTENDED)}>
            <Text style={styles.text}>
              Extended
            </Text>
          </TouchableOpacity>

        </View>

        <View style={{ marginTop: '5%', marginBottom: '2%', marginHorizontal: '4%' }}>
          <Text style={styles.headertext}>
            Significant Other
          </Text>
        </View>

        <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: '4%' }}>

          <TouchableOpacity style={relationship == relations.PARTNER ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.PARTNER)}>
            <Text style={styles.text}>
              Partner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.ROMANTIC_INTEREST ? styles.buttonSelected2 : styles.button2} onPress={() => setRelationship(relations.ROMANTIC_INTEREST)}>
            <Text style={styles.text}>
              Romantic Interest
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.EX ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.EX)}>
            <Text style={styles.text}>
              Ex
            </Text>
          </TouchableOpacity>


        </View>

        <View style={{ marginTop: '5%', marginBottom: '2%', marginHorizontal: '4%' }}>
          <Text style={styles.headertext}>
            Work
          </Text>
        </View>

        <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: '4%' }}>

          <TouchableOpacity style={relationship == relations.EMPLOYEE ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.EMPLOYEE)}>
            <Text style={styles.text}>
              Employee
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.BOSS ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.BOSS)}>
            <Text style={styles.text}>
              Boss
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.COLLEAGUE ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.COLLEAGUE)}>
            <Text style={styles.text}>
              Colleague
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.CUSTOMER ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.CUSTOMER)}>
            <Text style={styles.text}>
              Customer
            </Text>
          </TouchableOpacity>


        </View>

        

        <View style={{ marginTop: '5%', marginBottom: '2%', marginHorizontal: '4%' }}>
          <Text style={styles.headertext}>
            Social
          </Text>
        </View>

        <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: '4%' }}>

          <TouchableOpacity style={relationship == relations.FRIEND ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.FRIEND)}>
            <Text style={styles.text}>
              Friend
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.ACQUAINTANCE ? styles.buttonSelected2 : styles.button2} onPress={() => setRelationship(relations.ACQUAINTANCE)}>
            <Text style={styles.text}>
              Acquaintance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.ALLY ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.ALLY)}>
            <Text style={styles.text}>
              Ally
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.RIVAL ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.RIVAL)}>
            <Text style={styles.text}>
              Rival
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={relationship == relations.SOCIETY ? styles.buttonSelected : styles.button} onPress={() => setRelationship(relations.SOCIETY)}>
            <Text style={styles.text}>
              A Group
            </Text>
          </TouchableOpacity>
        </View>


        <View style={{ alignItems: 'flex-end', justifyContent: 'center', }}>
          <TouchableOpacity
            onPress={() => {
              // Added a param for the relationship
              mixpanel.track("Narrative_Relationship");
              navigation.navigate('Perspective2', {
                mainChar,
                otherChar,
                environment: env,
                relationship: relationship,
                gender: gender,
                age: age,
                trait: trait
              })
            }
            }
            style={{
              marginTop: '8%',
              marginBottom: '10%',
              backgroundColor: '#EDBDBA',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 175,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '300',
                fontSize: 20,
                letterSpacing: 4,
                color: '#18163A',
                fontFamily: 'WorkSans-Regular',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  buttonSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    marginBottom: '1%',
    backgroundColor: '#EDBDBA',
    marginHorizontal: '1%',
    borderRadius: 40,
    width: 100,
    height: 40,
  },
  buttonSelected2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    marginBottom: '1%',
    backgroundColor: '#EDBDBA',
    marginHorizontal: '1%',
    borderRadius: 40,
    width: 160,
    height: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    marginBottom: '1%',
    backgroundColor: '#FFF5EF',
    marginHorizontal: '1%',
    borderRadius: 40,
    width: 100,
    height: 40,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    marginBottom: '1%',
    backgroundColor: '#FFF5EF',
    marginHorizontal: '1%',
    borderRadius: 40,
    width: 160,
    height: 40,
  },
  text: {
    fontWeight: '300',
    fontSize: 16,
    color: '#18163A',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 1,
  },
  textSelected: {
    paddingTop: 40,
    fontWeight: '400',
    fontSize: 16,
    color: '#18163A',
    fontFamily: 'WorkSans-Regular',
  },
  headertext: {
    fontWeight: '300',
    fontSize: 20,
    letterSpacing: 1,
    color: '#18163A',
    fontFamily: 'WorkSans-Regular',
  },
  verticalStyle: {
    justifyContent: 'flex-start',
    padding: 0,
    marginRight: 40,
    marginBottom: 10,
  },
  textStyle: {
    textDecorationLine: "none",
    fontFamily: 'WorkSans-Regular',
    fontWeight: '300',
    letterSpacing: 0,
    fontSize: 18,
    color: '#282561',
    marginRight: 20,
    marginLeft: 20,
  },
});