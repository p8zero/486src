import React, {useContext, useState} from 'react';
import {SafeAreaView, Dimensions, StyleSheet, Text, TextInput, View, Animated, StatusBar} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MenuIcon from '../../assets/menu.svg';
import BackButton from '../../components/backButton';
import firestore from '@react-native-firebase/firestore';
import BackButtonMenu from '../../components/backButtonMenu';
import NarrativeFlatList from '../../components/flatListNarratives';
import BackButtonCreateNarratives from '../../components/backButtonCreateNarratives';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserIcon from '../../components/UserIcon';
import UserFlatList from '../../components/flatListPersonas';
import FlatListCommunication from '../../components/flatListCommunication';


export default function YourCommunityScreen({navigation}) {

  const [input, setInput] = useState('')
  const [searchNarrative, doSearch] = useState('')
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <Text>Content 1</Text>;
      case 2:
        return <Text>Content 2</Text>;
      case 3:
        return (<View>
        <TouchableOpacity onPress={() => navigation.navigate('CommunityScreen')}>
        <View style={styles.button}>
          <Ionicons size={24} name="create-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Potential Connections</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CommunityScreen')}>
        <View style={styles.button}>
          <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Invitations From Others</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CommunityScreen')}>
        <View style={styles.button}>
          <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Connections In Progress</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CommunityScreen')}>
        <View style={styles.button}>
          <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>Connections</Text>
        </View>
        </TouchableOpacity>
      </View>
      );
      default:
        return <Text>Content 1</Text>;
    }
  };

  return (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor: '#EDBDBA',
        }}>
          <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          backgroundColor: '#EDBDBA',
          marginTop: '5%',
          marginLeft: '5%',
        }}>
          <BackButtonMenu
            label={'back button'}
            onPress={() => navigation.navigate('CommunityScreen')}
            icon={<Ionicons name="arrow-back-outline" size={24} color="#18163A"/>}
          />
          </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
          <View style={{
            alignItems: 'center',
            marginHorizontal: 5,
            marginTop: '8%',
          }}>
    <View style={{
      //backgroundColor: '#F3777E',
      alignItems: 'center',
      justifyContent: 'center',
      height: 75,
      width: 75,
      borderRadius: 75 / 2,
      borderColor: '#F3777E',
      borderWidth: 2,
    }}>
            <View style={{}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 30, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '5%',
          }}>
          K
        </Text>
      </View>




      {/* You can add content here if needed */}
    </View>
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontFamily: 'AppleSDGothicNeo-Light', fontSize: 20 }}>1</Text>
    </View>
  </View>


  <View style={{
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: '8%',
  }}>
    <View style={{
      //backgroundColor: '#F3777E',
      alignItems: 'center',
      justifyContent: 'center',
      height: 75,
      width: 75,
      borderRadius: 75 / 2,
      borderColor: '#F3777E',
      borderWidth: 2,
    }}>
      <View style={{}}>
        <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 30, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '5%',
          }}>
          P
        </Text>
      </View>


      {/* You can add content here if needed */}
    </View>
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontFamily: 'AppleSDGothicNeo-Light', fontSize: 20 }}>123</Text>
    </View>
  </View>
</View>

        <View>
        <ScrollView>
        <UserFlatList input = {input}/>
        {/* <FlatListCommunication input = {input}/> */}
        </ScrollView>
        </View>


    <View style={{backgroundColor:'#F6DEDC',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: '25%',
            marginTop: '8%', 
            height: 120,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,

          }}>
            <Text style={{
          fontFamily: 'WorkSans-Light', 
          fontSize: 24, 
          fontWeight: '300', 
          letterSpacing: 2,
          color: '#18163A',
          marginLeft: '5%',
          marginTop: '0%',
          }}>
          Welcome to Your Community
        </Text>

            </View>

          {/* popwindow */}
        <View style={{backgroundColor: '#FFF5EF', 
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: '0%', 
            marginRight: '0%', 
            height: 500, 
            marginTop: '5%', 
            borderRadius: 30, 
            }}>






          <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          height: '10%',
          backgroundColor: '#FFF5EF',
          marginTop: '8%',
          marginLeft: '10%',
        }}>

        <TouchableOpacity
          style={[
            marginLeft='10%',
            justifyContent= 'flex-start',

            styles.tabBarButton,
            activeTab === 1 && styles.tabBarButton,
          ]}
          onPress={() => {
            setActiveTab(1);
          }}
        >
          <Text
            style={[
              styles.tabBarButtonText,
              activeTab === 1 && styles.tabBarButtonText,
            ]}
          >
            Story
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            marginLeft='30%',
            styles.tabBarButton,
            activeTab === 2 && styles.tabBarButton,
          ]}
          onPress={() => {
            setActiveTab(2);
          }}
        >
          <Text
            style={[
              styles.tabBarButtonText,
              activeTab === 2 && styles.tabBarButtonText,
            ]}
          >
            Narration
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabBarButton,
            activeTab === 3 && styles.tabBarButton,
          ]}
          onPress={() => {
            setActiveTab(3);
          }}
        >
          <Text
            style={[
              styles.tabBarButtonText,
              activeTab === 3 && styles.tabBarButtonText,
            ]}
          >
            Connect
          </Text>
        </TouchableOpacity>
        </View>

        <View>
        <View style={{                     
                    fontFamily: 'WorkSans-Light',
                    fontWeight: '300',                                       
                    }}>
              {renderContent()}</View>

              
          </View>
      </View>

        </SafeAreaView>

        
        )
}

//const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    search:{
        backgroundColor: '#FFF5EF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#FFF5EF',
        borderWidth: 1,
        borderRadius: 50, 
        fontSize: 16, 
        fontFamily: 'WorkSans-Light',
        fontWeight: '300',
        letterSpacing: 2,
        marginBottom:20,
        marginTop:20
    },
    tabBarButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      
        },

    button: {
    marginTop: '8%',
    width: "50%",
    marginLeft: '10%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
    tabBarButtonText: {
      
      fontSize: 18,
      color: '#000',
    },

    text: {
      fontSize: 15,
      paddingLeft: '15%',
      //fontFamily: 'WorkSans-Light', 
      fontWeight: '300',
      width: 300,
      letterSpacing: 4,
      color: '#18163A'
    },

}

)