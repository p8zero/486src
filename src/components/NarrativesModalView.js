import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//PopUp component 


const ModalView = ({YesPress, NoPress, txt}) => {
  return (
    <View style={styles.container}>
      <View />
      <View style={styles.modalView}>
        <View style={styles.textContainer}>
          <Text style={styles.modalText}>{txt}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={YesPress} style={styles.navbar}>
            <View style={[styles.button, styles.yes]}>
              <Text
                style={{
                  fontFamily: 'worksans-light',
                  fontWeight: '300',
                  fontSize: 20,
                  color: '#18163A',
                  letterSpacing: 2,
                }}>
                Yes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={NoPress} style={styles.navbar}>
            <View style={[styles.button, styles.no]}>
              <Text
                style={{
                  fontFamily: 'worksans-light',
                  fontWeight: '300',
                  fontSize: 20,
                  color: '#FFF5EF',
                  letterSpacing: 2,
                }}>
                No
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default ModalView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#rgba(0,0,0,0.7)',
  },

  modalView: {
    margin: 20,
    backgroundColor: '#FFF5EF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    marginBottom: 200,
    width: 325,
    height: 200

  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    paddingBottom: 20
  },

  modalText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '300',
    fontFamily: 'WorkSans-light',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    width: 350,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 100,
    height: 48,
  },

  yes: {
    backgroundColor: '#EDBDBA',
    color: 'white',
  },

  no: {
    backgroundColor: '#18163A',
    color: 'white',
  },
});
