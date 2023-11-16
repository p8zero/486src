import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BackButtonNav from '../../components/backButtonNav';
import InputFieldPersonas from '../../components/Personas/inputFieldPg2Personas';
import firestore from '@react-native-firebase/firestore';
import {AuthContextPersonas} from '../../navigation/AuthProviderPersonas';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import { AuthContextNew } from "../../navigation/authProvider";
import { Mixpanel } from 'mixpanel-react-native';


const CreateProfilePersonas = ({navigation}) => {
  //const [open, setOpen] = useState(false);
  //const [pgender, setValue] = useState(null);
  //const [items, setItems] = useState([
   // {label: 'Male', value: 'Male'},
   // {label: 'Female', value: 'Female'},
   // {label: 'Non-Binary', value: 'Non-Binary'},
 // ]);

  const [pname, setPname] = useState();
  const [page, setPage] = useState();
  const [personId, setPersonId] = useState(null);
  let pgender = '';
  const {createProfile} = useContext(AuthContextPersonas);
  const { user } = useContext(AuthContextNew);
  
  

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  
  const _iconStyle = (borderColor: string) => ({
    //Circles
    height: 30,
    width: 30,
    borderRadius: 10,
    borderColor: borderColor,
  });

  const horizontalStaticDataGender: ICheckboxButton[] = [
    {
      id: 0,
      text: 'Male',
      fillColor: '#282561',
      unfillColor: '#282561',
      iconStyle: _iconStyle('#FFF5EF'),
      textStyle: styles.textStyle,
      style: styles.verticalStyle,
      iconImageStyle: styles.iconImageStyle,
    },
    {
      id: 1,
      text: 'Female',
      fillColor: '#282561',
      unfillColor: '#282561',
      iconStyle: _iconStyle('#FFF5EF'),
      textStyle: styles.textStyle,
      style: styles.verticalStyle,
      iconImageStyle: styles.iconImageStyle,
    },
    {
      id: 2,
      text: 'Non-Binary',
      fillColor: '#282561',
      unfillColor: '#282561',
      iconStyle: _iconStyle('#FFF5EF'),
      textStyle: styles.textStyle,
      style: styles.verticalStyle,
      iconImageStyle: styles.iconImageStyle,
    },
  ];


  const horizontalCheckboxGroupContainerGender = () => (
    <View style={{paddingHorizontal: 0}}>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#FFF5EF',
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 0,
          height: 150,
          width: 220
        }}>
        <View
          style={{
            marginLeft: '3%',
            marginRight: '3%',
            marginTop: '3%',
            marginBottom: '3%',
            justifyContent: 'center',
          }}>

          <BouncyCheckboxGroup
            data={horizontalStaticDataGender}
            style={{flexDirection: 'column',}}
            value={pgender}
            onChange={(selectedItem: ICheckboxButton) => {
              pgender = selectedItem.text}}
          />
        </View>
      </View>
    </View>
  );


  const addProfile = () => {
    firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Personas")
      .add({
        name: pname,
        age: page,
        gender: pgender,
        traits:[],
        notes: "",
      })
      .then((ref) => {
        navigation.navigate('SelectPersonas', {newPers: pname, age: page, gender: pgender, id: ref.id, path: 1, data:{}})

      })
      .catch((e) => {
        console.log(`createProfile Error ${e}`);
      });
  };


  return (
    <SafeAreaView style = {styles.container}>
      
      <View style={{
        top: '3%', 
        marginHorizontal: '2.5%',
        }}>      
        <BackButtonNav onPress={() => navigation.pop()} />
      </View>
      
      <View style = {{marginTop: '10%',     
        flexdirection: 'row',
        justifyContent: 'center',
        width: '50%',
        marginLeft: '2.5%'
}}>
          <Text style={{fontFamily: 'WorkSans-Light', color: '#000000', fontSize: 24, fontWeight: '300', letterSpacing: 0, flexWrap: 'wrap'}}>
              Create a Character
          </Text>
        </View>

        
          <View style={{ marginLeft: '5%', marginTop: '8%', marginBottom: '2%'}}> 
            <InputFieldPersonas 
                label={"Person's Name"}
                name={'Name'}
                keyboardType="email-address"
                value={pname}
                onChangeText={text => setPname(text)}
              />
              <InputFieldPersonas
                label={"Person's Age"}
                name={'Age'}
                keyboardType="email-address"
                value={page}
                onChangeText={text => setPage(text)}
              />
          </View>

          <View
             style={{marginTop: '2%', marginHorizontal: '5%'}}>
            {horizontalCheckboxGroupContainerGender()}
            </View>

          <View style={styles.continue_button_container}>
              <TouchableOpacity style={styles.continue_button}
                  onPress={() => {
                    addProfile();
                    mixpanel.timeEvent("Persona Creation");
                    mixpanel.track("Persona_ProfileFinish")
                  }}>
                  <Text
                    style={styles.continue_text}>
                    Next
                  </Text>
              </TouchableOpacity>
            </View>
          
          

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CC8C6',
  },
  
  bottom_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDBDBA',
  },

  create_a_person_container: {
    left: '5%',
    top: '4%',
  },  

  gender_text: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'WorkSans-Thin',
    fontWeight: '400',
  },

  continue_button_container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: '7%'
  },

  continue_button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: 175,
    height: 50,
    backgroundColor: '#F6DEDC',
  },

  continue_text: {
    fontWeight: '300',
    fontSize: 20,
    letterSpacing: 4,
    color: '#000000',
    fontFamily: 'WorkSans-Thin',
  },
  textStyle: {
    textDecorationLine: 'none',
    fontFamily: 'WorkSans-Light',
    fontWeight: '300',
    fontSize: 18,
    letterSpacing: 1,
    color: '#000000', 
    marginRight: 20,
    marginLeft: 0,
  },
  verticalStyle: {

    marginTop: '5%'
  },
});

export default CreateProfilePersonas;


