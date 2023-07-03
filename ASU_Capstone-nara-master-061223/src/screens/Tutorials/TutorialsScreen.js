import React, {useState} from 'react'
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';
import { DrawerActions } from '@react-navigation/native';
import MenuIcon from '../../assets/menu.svg';
import CreatingAPersonaVideoScreen from './CreatingAPersonaVideoScreen';
import CreatingANarrativeVideoScreen from './CreatingANarrativeVideoScreen';
import YourNarrativesVideoScreen from './YourNarrativesVideoScreen';
import BackButtonMenu from '../../components/backButtonMenu';

const TutorialsScreen = ({navigation}) => {
    const [show, setShow] = useState(false);

    return (
        <SafeAreaView
        style={styles.safeAreaView}>
            <View style={styles.topView}>
                <BackButtonMenu
                    label={'back button'}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    icon={<MenuIcon name="menu-icon" size={24} color="#18163A" />}
                />

            </View> 
            <View style={{marginLeft: '4%', marginTop: '5%'}}>

                <TouchableOpacity
                    onPress={() => {navigation.navigate('CreatingAPersonaVideoScreen')}}
                    style={styles.touchableOpacity}>
                    <Text style={styles.opacityText}>
                        Creating Personas 
                    </Text>
                    <Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
                    {show && <CreatingAPersonaVideoScreen />}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('CreatingANarrativeVideoScreen')}}
                    style={styles.touchableOpacity}>
                <Text style={styles.opacityText}>
                        Creating Narratives
                    </Text>
                    <Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('NaraBasicsScreen')}}
                    style={styles.touchableOpacity}>
                    <Text style={styles.opacityText}>
                        The Science
                    </Text>
                    <Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
                    {show && <CreatingAPersonaVideoScreen />}
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    )
}
export default TutorialsScreen;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#FFF5EF',
    },
    topView: {
        width: '95%',
        marginLeft: '2.5%',
        top: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'WorkSans-Light', 
        fontSize: 24, 
        marginLeft: 0,
        fontWeight: '300',
        letterSpacing: 3,
        color: '#18163A'
    },
    mainView: {
        top: '15%', 
        left: 0, 
        padding: '3%'
    },
    touchableOpacity: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%',
    },
    opacityText: {
        fontFamily: 'WorkSans-Light',
        fontSize: 20, 
        color: '#18163A',
        fontWeight: '300',
        letterSpacing: 2,
    }
});


//<TouchableOpacity
//onPress={() => {navigation.navigate('NaraBasicsScreen')}}
//style={styles.touchableOpacity}>
//<Text style={styles.opacityText}>
  //  Nara Basics
//</Text>
//<Ionicons name='chevron-forward-outline' size={22} color="#18163A" /> 
//</TouchableOpacity>