import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NaraLogo from '../../../Used Fonts/logo-09 app_adobe_express.svg';
import CustomButton from '../../components/LogIn/customButton';
import RCustomButton from '../../components/SignUp/rCustomButton';
import InputField from '../../components/LogIn/inputField';
import {AuthContextNew} from '../../navigation/authProvider';
import NaraIcon from '../../assets/naraLogo.svg';

const LoginScreen2 = ({navigation}) => {
  const [inputs, setInputs] = useState({
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  });

  const {login} = useContext(AuthContextNew);


  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs(currentInput => {
      return {
        ...currentInput,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  }

  const colorScheme = useColorScheme();

  function submitLoginData() {
    const dataToVerify = {
      email: inputs.email.value,
      password: inputs.password.value,
    };

    const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

    const emailIsValid = regex.test(dataToVerify.email);

    const passwordIsValid = dataToVerify.password.length >= 6;

    if (!emailIsValid || !passwordIsValid) {
      setInputs(currentInputs => {
        return {
          email: {value: currentInputs.email.value, isValid: emailIsValid},
          password: {
            value: currentInputs.password.value,
            isValid: passwordIsValid,
          },
        };
      });
      return;
    }

    login(inputs.email.value, inputs.password.value);
  }

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#F6DEDC'}}>
      <View
        style={{marginLeft: '5%', marginRight: '5%'}}>
          <View style={{
              justifyContent: 'center', 
              alignItems: 'center',
              marginBottom: '15%',
              marginTop: '0%'
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
        <View style={{marginTop:'0%'}}>
        <InputField
          label={'Email'}
          color={colorScheme}
          keyboardType="email-address"
          value={inputs.email.value}
          onChangeText={text => inputChangedHandler('email', text)}
          containerStyle={{height: 10,}}
        />
        {!inputs.email.isValid && (
          <Text style={styles.errorText}>Invalid email</Text>
        )}
        <InputField
          label={'Password'}
          inputType="password"
          color={colorScheme}
          value={inputs.password.value}
          onChangeText={text => inputChangedHandler('password', text)}
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {navigation.navigate('ForgotPassword');}}
        />
        {!inputs.password.isValid && (
          <Text style={styles.errorText}>
            Password Must Contain at Least 6 Characters
          </Text>
        )}
</View>
      <View style={{flexDirection: 'row', justifyContent: "space-around", marginTop: 30}}>
        <CustomButton label={'Login'} onPress={() => {submitLoginData();}}/>
        <RCustomButton label={'Sign Up'} onPress={() => navigation.navigate('RegisterScreen')}/>
      </View>
     </View>
    </SafeAreaView>
  );
};

export default LoginScreen2;

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 10,
    marginTop: -10,
    textAlign: 'center',
    fontFamily: 'WorkSans-Light',
    color: '#18163A',
    fontWeight: '400',
    fontSize: 14,
  },
});
