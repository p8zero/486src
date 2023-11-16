import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const PotentialConnectionOptionsTab = ({ SimilarityWith, Chat, Connect, matchedDocument, matchedUserDetails, narrativeDetails}) => {
  if(Connect != undefined){
    return (
      <View style={styles.main_container}> 
        <TouchableOpacity onPress={SimilarityWith}>
          <View style={styles.button}>
            <Ionicons size={24} name="document-text-outline" color='#18163A'></Ionicons>
            <Text style={styles.text}>{`Similarity With ${matchedUserDetails.username}`}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Connect}>
          <View style={styles.button}>
            <Ionicons size={24} name="create-outline" color='#18163A'></Ionicons>
            <Text style={styles.text}>Connect</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  if(Chat != undefined){
    return (
      <View style={styles.main_container}> 
        <TouchableOpacity onPress={SimilarityWith}>
          <View style={styles.button}>
            <Ionicons size={24} name="document-text-outline" color='#18163A'></Ionicons>
            <Text style={styles.text}>{`Similarity With ${matchedUserDetails.username}`}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Chat}>
          <View style={styles.button}>
            <Ionicons size={24} name="create-outline" color='#18163A'></Ionicons>
            <Text style={styles.text}>Chat</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.main_container}> 
      <TouchableOpacity onPress={SimilarityWith}>
        <View style={styles.button}>
          <Ionicons size={24} name="document-text-outline" color='#18163A'></Ionicons>
          <Text style={styles.text}>{`Similarity With ${matchedUserDetails.username}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  
};

const styles = StyleSheet.create({
  main_container: {
    width: "100%",
    marginTop: '3%'
  },
  button: {
    marginTop: '8%',
    width: "75%",
    marginLeft: '10%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  text: {
    fontSize: 18,
    paddingLeft: '15%',
    fontFamily: 'WorkSans-Light', 
    fontWeight: '300',
    letterSpacing: 3,
    color: '#18163A'
  },
});

export default PotentialConnectionOptionsTab;


//<TouchableOpacity onPress={Duplicate}>
//<View style={styles.button}>
 // <Ionicons size={24} name="copy-outline" color='#18163A'></Ionicons>
 // <Text style={styles.text}>Duplicate Story</Text>
//</View>
//</TouchableOpacity>