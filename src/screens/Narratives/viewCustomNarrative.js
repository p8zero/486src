import React, {useContext, useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import UserFlatList from '../../components/flatListPersonas';
import { ScrollView, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { AuthContextNarratives } from '../../navigation/AuthProviderNarratives';
import RBSheet from "react-native-raw-bottom-sheet";

export default function ViewCustomNarratives({navigation, route}) {
    const {compName, compDescription, compView} = route.params;

    const {width: SCREEN_WIDTH} = Dimensions.get('window');
    const {height: SCREEN_HEIGHT} = Dimensions.get('window');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F6DEDC',
        }}>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: '10%',
          marginHorizontal: '2.5%',
          width: '95%',
        }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.goBack('editNarratives');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />

      </View>

        <ScrollView style={{top: "10%"}}>

          <Text
            style={{
              fontFamily: 'WorkSans-Light',
              marginTop: '5%',
              fontSize: 20,
              fontWeight: '300',
              marginHorizontal: '10%',
              letterSpacing: 1,
              color: '#18163A'
            }}>
            {compDescription}
          </Text>
          <Text
            style={{
              fontFamily: 'WorkSans-Light',
              marginTop: '15%',
              fontSize: 20,
              marginHorizontal: '5%',
              fontWeight: '300',
              letterSpacing: 2,
              color: '#18163A',
              marginBottom: '3%'
            }}>
            What This Can Look Like
          </Text>
          <View style={{ 
                borderTopWidth: 1, 
                borderTopColor: '#FFF5EF',}}>
          
            <FlatList
              data={compView}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.button}>
                  <Text style={styles.textButton}>{item.val}</Text>
                </View>
              )}
              
              style={{marginHorizontal: '5%', paddingTop: '3%', paddingBottom: '3%', marginBottom: '20%'}}
              showsVerticalScrollIndicator={true}
            />
             
          </View>
          </ScrollView>
    
      </View>
      

    );}

    const styles = StyleSheet.create({
        button: {
          backgroundColor: '#FFF5EF',
          flexdirection: 'row',
          justifyContent: 'center',
          marginBottom: '3%',
          maxwidth: '95%',
          paddingHorizontal: '5%',
          height: 85,
          borderRadius: 20,
        },
    
        textButton: {
          flexWrap: 'wrap',
          textAlign: 'left',   
          marginLeft: 10, 
          marginRight: 10,
          fontWeight: '300',
          fontSize: 18,
          color: '#18163A',
          fontFamily: 'WorkSans-Light',
          letterSpacing: 0,
        },
    })