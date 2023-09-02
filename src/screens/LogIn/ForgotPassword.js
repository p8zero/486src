import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const handleResetPassword = async (values, { setSubmitting }) => {
    try {
      await auth().sendPasswordResetEmail(values.email);
      alert('An email has been sent to reset your password.');
    } catch (error) {
      alert(error.message);
    }
    setSubmitting(false);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
  });

  return (
    <View style={styles.container}>
          <View style={{
              justifyContent: 'center', 
              alignItems: 'center',
              marginBottom: '25%',
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
      <View style={styles.BackButton}>
      <BackButton 
          label={'back button'}
          onPress={() => {navigation.goBack();}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        </View>
      <Text style={styles.title}>Forgot Password</Text>
      <Formik initialValues={{ email: '' }} onSubmit={handleResetPassword} validationSchema={validationSchema}>
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, isSubmitting }) => (
          <>
            <TextInput
              style={styles.input}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TouchableOpacity
              style={[styles.button, !isValid && styles.buttonDisabled]}
              onPress={handleSubmit}
              disabled={!isValid || isSubmitting}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6DEDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: '5%',
    letterSpacing: 1,
    color: '#18163A'
  },
  input: {
    width: '80%',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#FFF5EF',
    borderRadius: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#18163A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#FFF5EF',
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 1,
  },
  error: {
    color: '#18163A',
    marginBottom: 10,
  },
  BackButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },

});

export default ForgotPassword;