
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { makePurchase } from 'react-native-purchases';
import Purchases from 'react-native-purchases';
import NaraIcon from '../../assets/naraLogo.svg';
import React, { useEffect } from 'react';
import RegisterScreen2 from './registerScreen2';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';

const PaywallScreen = () => {
  const navigation = useNavigation();
  const [msg, setMsg] = React.useState('');
  

  const handleSubscription = async (productId) => {
    try {
      const offerings = await Purchases.getOfferings();
      console.log('Offerings',offerings);
      const product = offerings.current.availablePackages.find(p => p.identifier === productId);
      console.log('Product',product);
      const purchase = await Purchases.purchaseProduct(product.identifier);
      // User has subscribed successfully
      setMsg(`Successfully purchased ${product.product.title}!`);
    } catch (error) {
      // Handle error
      setMsg(`Failed to purchase: ${error.message}`);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <NaraIcon width={110} height={110} />
      </View>
      <View style={styles.BackButton}>
      <BackButton 
          label={'back button'}
          onPress={() => {navigation.goBack();}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        </View>
      <Text style={styles.title}>Unlock Premium Content {msg}</Text>
      <Text style={styles.description}>Try free for 14 days.</Text>
      <Text style={styles.description}>Cancel anytime.</Text>
      <TouchableOpacity onPress={() => handleSubscription('nara_5499_y')} style={styles.button}>
        <Text style={styles.buttonText}>Yearly Subscription</Text>
        <Text style={styles.buttonPrice}> ~ $54.99/year</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSubscription('nara_499_m')} style={styles.button}>
        <Text style={styles.buttonText}>Monthly Subscription</Text>
        <Text style={styles.buttonPrice}> ~ $4.99/month</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3777e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#282561',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonPrice: {
   color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
  BackButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});

export default PaywallScreen;