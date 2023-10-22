import React, {useState, useRef, useContext, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Animated,
  Image,
  useWindowDimensions,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuIcon from '../../assets/menu.svg';
import { DrawerActions } from '@react-navigation/native';
//import ChooseProfiles from './chooseProfiles';
import BackButtonMenu from '../../components/backButtonMenu';
import YourCommunityScreen from './YourCommunityScreen';
import YourNarativeScreen from './YourNarativeScreen';
import BackButtonNavNarratives from "../../components/backButtonNavNarratives";
//import OnBoarding from './OnBoarding';
import firestore from "@react-native-firebase/firestore";
import { AuthContextNew } from '../../navigation/authProvider';
import PotentialConnection from '../../components/Community/PotentialConnection';

export default function PotentialConnections({navigation}) {

  const [match, setMatch] = useState([]) 
  const { user } = useContext(AuthContextNew);
  const [searchNarrative, doSearch] = useState('') 


  useEffect(() => {
    firestore().collection("Users")
    .doc(user.uid)
    .collection("Connections")
    .where('score', '>=', 0.8)
    .orderBy('score', 'desc')
    .get()
    .then(result => {
      const data = result.docs.map(doc => ({id: doc.id, ...doc.data()}));
      setMatch(data.filter(match => match.status == 'matched'));
    }).catch(err => console.error(err));
  }, [])

  

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F6DEDC',
    }}>
      <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      //backgroundColor: '#EDBDBA',
      marginTop: '5%',
      marginLeft: '5%',
      
    }}>
      <BackButtonMenu
        label={'back button'}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
      />

      <BackButtonNavNarratives onPress={() => navigation.pop()} /> 

      </View>

      <View style={{backgroundColor:'#FFF5EF',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '35%',
            marginTop: '8%', 
            height: 70,
            //width: 200,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,

          }}>
        <Text style={{
          width: 200,
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          //marginTop: '0%',
          }}>
          Potential Connections
        </Text>
            </View>


        <View>
          <FlatList
            data={match}
            renderItem={({item}) => <PotentialConnection item = {item} navigation={navigation} detailsScreen={'MatchedStoryDetails'} />}
            initialNumToRender={6}
            keyExtractor={item => item.id}
            style={{paddingTop: '5%', paddingHorizontal: '5%', height: '80%'}}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <View style={{padding: 25}}></View>}
            scrollEnabled={true}
          />
        </View>
          


  </SafeAreaView>
  );
}