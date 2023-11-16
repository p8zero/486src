import React, {useContext, useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import BackButton from '../../components/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ViewCustomNarratives({navigation, route}) {
    const {compName, compDescription, compView} = route.params;

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
          icon={<Ionicons name="chevron-back-outline" size={24} color="#000000" />}
        />

      </View>

        <ScrollView style={{top: "10%"}}>
          <View style={{ 
      marginBottom: '2%', 
      flexdirection: 'row',
      justifyContent: 'center',
      marginLeft: '2.5%',
      height: 50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,}}>
          <Text
            style={{
              fontFamily: 'WorkSans-Light',
              fontSize: 22,
              fontWeight: '300',
              letterSpacing: 0,
              color: '#000000',
              paddingHorizontal: 10,
            }}>
            Plot Point
          </Text>
          </View>
          <Text
            style={{
              fontFamily: 'WorkSans-Light',
              marginTop: '5%',
              fontSize: 18,
              fontWeight: '300',
              marginHorizontal: '10%',
              letterSpacing: 0,
              color: '#000000'
            }}>
            {compName}
          </Text>
          <Text
            style={{
              fontFamily: 'WorkSans-Light',
              marginTop: '8%',
              fontSize: 20,
              marginHorizontal: '5%',
              fontWeight: '300',
              letterSpacing: 1,
              color: '#000000',
              marginBottom: '3%'
            }}>
            What it Feels Like
          </Text>


          <Text
            style={{
              fontFamily: 'WorkSans-Light',
              marginTop: '5%',
              fontSize: 18,
              fontWeight: '300',
              marginHorizontal: '10%',
              letterSpacing: 0,
              color: '#000000'
            }}>
            {compDescription}
          </Text>
          <Text
            style={{
              fontFamily: 'WorkSans-Light',
              marginTop: '10%',
              fontSize: 20,
              marginHorizontal: '5%',
              fontWeight: '300',
              letterSpacing: 1,
              color: '#000000',
              marginBottom: '3%'
            }}>
            What This Can Look Like
          </Text>
          <View style={{ }}>
          
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
          height: 95,
          borderRadius: 25,
        },
    
        textButton: {
          flexWrap: 'wrap',
          textAlign: 'left',   
          marginLeft: 6, 
          marginRight: 6,
          fontWeight: '300',
          fontSize: 18,
          color: '#000000',
          fontFamily: 'WorkSans-Light',
          letterSpacing: 0,
        },
    })