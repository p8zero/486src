import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RInputField from '../../components/SignUp/rInputField';
import RCustomButton from '../../components/SignUp/rCustomButton';
import DatePicker from 'react-native-date-picker';
import Moment from 'react-moment';
import moment from 'moment';
import {AuthContextNew} from '../../navigation/authProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import TermsConditions from './TermsConditions';
import CheckBox from '@react-native-community/checkbox';
import NaraIcon from '../../assets/naraLogo.svg';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen2 = ({navigation: {goBack}}) => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    username: {
      value: '',
      isValid: true,
    },
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    gender: {
      value: '',
      isValid: true,
    },
    dob: {
      value: 'Date of Birth',
      isValid: true,
    },
    date: {
      value: new Date(),
      isValid: true,
    },
  });
  const [open, setOpen] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const {register} = useContext(AuthContextNew);

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs(currentInput => {
      return {
        ...currentInput,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  }


  function submitRegisterData() {
    const dataToVerify = {
      username: inputs.username.value,
      email: inputs.email.value,
      password: inputs.password.value,
      gender: inputs.gender.value,
      dob: inputs.dob.value,
      date: inputs.date.value,
    };

    function findAge(dob, age) {
      // dates are all converted to date objects
      var my_dob = new Date(dob);
      var today = new Date();
      var max_dob = new Date(
        today.getFullYear() - age,
        today.getMonth(),
        today.getDate()
      );
      return max_dob.getTime() > my_dob.getTime();
    }

    navigation.navigate('PaywallScreen');
    const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

    const usernameIsValid = dataToVerify.username.length > 0;
    const emailIsValid = regex.test(dataToVerify.email);
    const passwordIsValid = dataToVerify.password.length >= 6;
    const genderIsValid = dataToVerify.gender.length > 0;
    const dobIsValid = !dataToVerify.dob.match('Date of birth');
    const dateIsValid = findAge(dataToVerify.dob, 13);

    if (
      !usernameIsValid ||
      !emailIsValid ||
      !passwordIsValid ||
      //!genderIsValid ||
      !dobIsValid ||
      !dateIsValid 
    ) {
      setInputs(currentInputs => {
        return {
          username: {
            value: currentInputs.username.value,
            isValid: usernameIsValid,
          },
          email: {value: currentInputs.email.value, isValid: emailIsValid},
          password: {
            value: currentInputs.password.value,
            isValid: passwordIsValid,
          },
          gender: {
            value: currentInputs.gender.value,
            isValid: genderIsValid,
          },
          dob: {
            value: currentInputs.dob.value,
            isValid: dobIsValid,
          },
          date: {
            value: currentInputs.date.value,
            isValid: dateIsValid,
          },
        };
      });
      return;
    }

    {isSelected  
      register(
        inputs.email.value,
        inputs.password.value,
        inputs.username.value,
        inputs.dob.value,
       // inputs.gender.value,
      ) 
      //: Alert.alert("Please check the terms and conditions box")}
    }}

  const _iconStyle = (borderColor: string) => ({
    //Circles
    height: 30,
    width: 30,
    borderRadius: 12,
    borderColor: borderColor,
  });

  const horizontalStaticDataGender: ICheckboxButton[] = [
    {
      id: 0,
      text: 'Male',
      fillColor: '#F3777E',
      unfillColor: '#F3777E',
      iconStyle: _iconStyle('#FFF5EF'),
      textStyle: styles.textStyle,
      style: styles.verticalStyle,
      iconImageStyle: styles.iconImageStyle,
    },
    {
      id: 1,
      text: 'Female',
      fillColor: '#F3777E',
      unfillColor: '#F3777E',
      iconStyle: _iconStyle('#FFF5EF'),
      textStyle: styles.textStyle,
      style: styles.verticalStyle,
      iconImageStyle: styles.iconImageStyle,
    },
    {
      id: 2,
      text: 'Non-Binary',
      fillColor: '#F3777E',
      unfillColor: '#F3777E',
      iconStyle: _iconStyle('#FFF5EF'),
      textStyle: styles.textStyle,
      style: styles.verticalStyle,
      iconImageStyle: styles.iconImageStyle,
    },
  ];


  const horizontalCheckboxGroupContainerGender = () => (
    <View style={{justifyContent: 'space-between', paddingHorizontal: 0}}>
      <View
        style={{
          backgroundColor: '#FFF5EF',
          borderRadius: 30,
          paddingHorizontal: 10,
          paddingVertical: 0,
          maxHeight: '100%',
          maxWidth: '100%'
        }}>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
            marginBottom: 15,
            justifyContent: 'space-between',
          }}>
        <Text
          style={{
            fontFamily: 'WorkSans-Regular',
            fontSize: 16,
            fontWeight: '400',
            marginBottom: 20,
            paddingBottom: 0,
            paddingTop: 0,
            letterSpacing: 2,
            color: '#000000',
          }}>
          Gender
        </Text>
          <BouncyCheckboxGroup
            data={horizontalStaticDataGender}
            style={{flexDirection: 'row', flexWrap: 'wrap'}}
            value={inputs.gender.value}
            onChangeText={text => inputChangedHandler('gender', text)}
          />
        {!inputs.gender.isValid && (
          <Text style={styles.errorText}>Please Select a Gender</Text>
        )}
        </View>
      </View>
    </View>
  );


  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#F6DEDC'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginLeft: '5%', marginRight: '5%'}}>
          <View style={{
              flex:1,
              justifyContent: 'center', 
              alignItems: 'center',
              marginBottom: '15%',
              marginTop: '15%'
              }}>
            <Text style={{
              fontFamily: 'WorkSans-Light',
              color: '#18163A',
              fontSize: 70,
              fontWeight: '300',
              }}>
              nara
            </Text>
            </View>

        <RInputField
          label={'User Name'}
          keyboardType="email-address"
          value={inputs.username.value}
          onChangeText={text => inputChangedHandler('username', text)}
        />
        {!inputs.username.isValid && (
          <Text style={styles.errorText}>Username Cannot be Empty</Text>
        )}
        <RInputField
          label={'Email'}
          keyboardType="email-address"
          value={inputs.email.value}
          onChangeText={text => inputChangedHandler('email', text)}
        />
        {!inputs.email.isValid && (
          <Text style={styles.errorText}>Invalid Email</Text>
        )}
        <RInputField
          label={'Password'}
          inputType="password"
          value={inputs.password.value}
          onChangeText={text => inputChangedHandler('password', text)}
        />
        {!inputs.password.isValid && (
          <Text style={styles.errorText}>
            Password Must Contain at Least 6 Characters
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFF5EF',
            paddingBottom: 12,
            marginBottom: 15,
            padding: 15, 
            borderRadius: 30
          }}>
        
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{
                color: '#000000', 
                marginLeft: 0, 
                marginTop: 0,
                fontFamily: 'WorkSans-Light',
                fontWeight: '500',
                letterSpacing: 2,
                fontSize: 14

            }}>
              {inputs.dob.value}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={inputs.date.value}
            mode={'date'}
            minDate={moment().subtract(120, 'years')._d}
            maxDate={moment().subtract(13, 'years')._d}
            onConfirm={inputDate => {
              setOpen(false);
              inputChangedHandler('date', inputDate);
              inputChangedHandler('dob', inputDate.toDateString());
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        {!inputs.dob.isValid ? (
          <Text style={styles.errorText}>Please Select Your Date of Birth</Text>
        ) : (
          !inputs.date.isValid && (
            <Text style={styles.errorText}>
              User Must be 13 Years Old or Older
            </Text>
          )
        )}

        <View style={styles.container}>
            <View style={{}}>
              <TermsConditions
                  style={{}}>
                </TermsConditions>
            </View>
        </View>

        <View
          style={{alignItems:'center', marginTop: '3%', marginBottom: '-2%'}}>
          <RCustomButton
              label={'Sign Up'}
              onPress={() => {
                submitRegisterData();
              }}
            />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0%',
            marginBottom: 20,
          }}>
          <Text style ={{
             fontWeight: '500', 
              fontFamily: 'WorkSans-Light',
              color: '#18163A',
             fontSize: 14,
            letterSpacing: 2,
          }}>Already Have an Account?</Text>
          <TouchableOpacity 
          style={{marginTop: '2%'}}
          onPress={() => goBack()}>
            <Text style={{
              marginLeft: 10, 
              marginBottom: 1, 
              color: '#18163A', 
              fontWeight: '500', 
              fontFamily: 'WorkSans-Light',
              fontSize: 16,
              letterSpacing: 2,
                    }}> 
                    Login
                    </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen2;


const styles = StyleSheet.create({
  errorText: {
    marginBottom: 10,
    marginTop: -10,
    textAlign: 'center',
    fontFamily: 'WorkSans-Light',
    color: '#000000',
    fontWeight: '400',
    fontSize: 14,
  },
  textStyle: {
    textDecorationLine: 'none',
    fontFamily: 'WorkSans-Light',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 2,
    color: '#000000', 
    marginRight: 10,
    marginLeft: -10,
  },
  container: {
    marginBottom: '3%', 
    marginTop: '2%', 
    marginHorizontal: '5%',
    flexDirection: "row",
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: -20,
    color: '#000000'
  },
  label: {
    margin: -10,
  },
});

//For gender
//<View style={{
  //flex: 1, 
  //alignItems: 'center', 
 // }}>
//<ScrollView horizontal = {true} showsHorizontalScrollIndicator={false} 
//style={{
//  }}>
   // {horizontalCheckboxGroupContainerGender()}
//</ScrollView>
//</View>