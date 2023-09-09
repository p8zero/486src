import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import CustomButton from '../../components/LogIn/customButton';
import RCustomButton from '../../components/SignUp/rCustomButton';
import InputField from '../../components/LogIn/inputField';
import {AuthContextNew} from '../../navigation/authProvider';
import Purchases from "react-native-purchases";
import ProgressLoader from "rn-progress-loader";
import { Mixpanel } from 'mixpanel-react-native';


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

  const {login, loading} = useContext(AuthContextNew);


  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs(currentInput => {
      return {
        ...currentInput,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  }

  const colorScheme = useColorScheme();

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  async function checkSubscriptionStatus() {
    try {
      const customerInfo = await Purchases?.getCustomerInfo();
      const activeSubscription = customerInfo?.entitlements?.active;

      if (Object.keys(activeSubscription).length === 0) {
        // when user have no active subscription plan
        console.warn("no active plan");
        navigation.navigate("PaywallScreenM");
      } else {
        // when user have subscribed any plan
        console.warn("have active plan");
        submitLoginData();
      }
    } catch (e) {
      // error in fetching purchaser info
      console.log("Error fetching purchaser info", e);
    }
  }

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
    console.log("Paywall Screen Navigated");
    navigation.navigate("PaywallScreenM");
    mixpanel.track("Login", {"Login": "Login"});
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
        <CustomButton label={'Login'} onPress={() => {
          //checkSubscriptionStatus();
          submitLoginData();}}/>
        <RCustomButton label={'Sign Up'} onPress={() => navigation.navigate('RegisterScreen')}/>
      </View>
      <ProgressLoader
          visible={loading}
          isModal={true}
          isHUD={true}
          hudColor={"#18163A"}
          color={"#FFF5EF"}
        />
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
