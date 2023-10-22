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
import { Mixpanel } from 'mixpanel-react-native';

const TutorialsScreen = ({navigation}) => {
    const [show, setShow] = useState(false);

    const trackAutomaticEvents = true;
const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
mixpanel.init();

    return (
        <SafeAreaView
        style={styles.safeAreaView}>
            <View style={styles.topView}>
                <BackButtonMenu
                    label={'back button'}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    icon={<MenuIcon name="menu-icon" size={24} color="#000000" />}
                />

            </View> 
            <View style={{marginLeft: '4%', marginTop: '5%'}}>

            <TouchableOpacity
                    onPress={() => {navigation.navigate('NaraBasicsScreen'); mixpanel.track('Notes on Nara');}}
                    style={styles.touchableOpacity}>
                    <Text style={styles.opacityText}>
                        notes on nara
                    </Text>
                    <Ionicons name='chevron-forward-outline' size={22} color="#000000" /> 
                    {show && <CreatingAPersonaVideoScreen />}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('YourNarrativesVideoScreen'); mixpanel.track('Functional Notes');}}
                    style={styles.touchableOpacity}>
                    <Text style={styles.opacityText}>
                        character updates in stories
                    </Text>
                    <Ionicons name='chevron-forward-outline' size={22} color="#000000" /> 
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
        color: '#000000'
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
        color: '#000000',
        fontWeight: '300',
        letterSpacing: 2,
    }
});