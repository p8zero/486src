import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  ScrollView,
} from "react-native-gesture-handler";

import { generateDescription } from "../Narratives/generateDescription";
import { AuthContextNew } from "../../navigation/authProvider";
import { Mixpanel } from "mixpanel-react-native";

export default function CommunityNarration({ narrativeDetails }) {
  const { user } = useContext(AuthContextNew);
  const [loaded, setLoaded] = useState(false);
  const [convertedPrediction, setConvertedPrediction] = useState(narrativeDetails.prediction.split(',').map(Number));
  const {
    id,
    title,
    flow,
    mainChar,
    otherChar,
  } = narrativeDetails;


  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel(
    "2100a249cd1d52d225d1c040909d6c79",
    trackAutomaticEvents
  );
  mixpanel.init();

  const checkFlow = () => {
    if (flow == "clarityInTheMoment") {
      return "How did it get here";
    } else if (flow == "clarityInTheFuture") {
      return "How could it go";
    }
  };

  useEffect(() => {
    setConvertedPrediction(narrativeDetails.prediction.split(',').map(Number));
    setLoaded(true);
  }, [narrativeDetails])


  if(!loaded){
    return(
        <View style={styles.main_container}>
            <Text>Loading...</Text>
        </View>
    )
  }



  return (
    <View style={styles.main_container}>
          <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 200}}>
          <Text style={xstyles.titleStyle}>
        {checkFlow()} for {mainChar}?
          </Text>
          <Text style={xstyles.titleStyle2}>
        {title}
          </Text>
          <Text style={{
          flex:1,
          fontFamily: 'WorkSans-Light', 
          fontSize: 17, 
          color:'#18163A',
          fontWeight: '300', 
          letterSpacing: 1, 
          marginTop: '5%',
          marginHorizontal: '5%'}}>{generateDescription({
              inputData: convertedPrediction,
              flow: flow == 'clarityInTheMoment' ? 'clarityInTheFuture': 'clarityInTheMoment',
              mainChar,
              otherChar,
            }) || "Narration Is Empty"}</Text>

        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    main_container: {
      marginTop: '5%',
      backgroundColor: '#FFF5EF',
    },
    button: {
      marginTop: 20,
      width: "50%",
      marginLeft: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  
    scroll_container:{
      alignItems: "center",
    },
  
    text: {
      marginTop: 40
    },
  
    text_container: {
      alignItems: "center",
    },
  });
  

const xstyles = StyleSheet.create({
  inputButton: {
    marginHorizontal: "2.5%",
    marginTop: "5%",
    marginBottom: "2%",
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    maxwidth: "100%",
    height: 50,
  },
  shapeCircle: {
    width: 140,
    height: 140,
    borderRadius: 40,
    backgroundColor: "#F5F5F5",
    marginTop: "40%",
    marginHorizontal: "6.5%",
    alignItems: "center",
  },
  textCircle: {
    flex: 1,
    flexWrap: "wrap",
    textAlign: "center",
    paddingTop: 20,
    paddingHorizontal: 5,
    fontWeight: "300",
    fontSize: 20,
    color: "#000000",
    fontFamily: "WorkSans-Regular",
    // fontFamily: 'AppleSDGothicNeo-Thin',
  },
  titleStyle: {
    flexWrap: "wrap",
    textAlign: "left",
    paddingTop: "8%",
    marginHorizontal: "5%",
    fontWeight: "300",
    fontSize: 20,
    color: "#18163A",
    letterSpacing: 2,
    fontFamily: "WorkSans-Regular",
  },
  titleStyle2: {
    flexWrap: "wrap",
    textAlign: "left",
    paddingTop: "3%",
    marginHorizontal: "5%",
    fontWeight: "300",
    fontSize: 18,
    fontStyle: 'italic',
    color: "#18163A",
    letterSpacing: 1,
    fontFamily: "WorkSans-Regular",
  },
  descStyle: {
    flexWrap: "wrap",
    textAlign: "left",
    marginHorizontal: "5%",
    marginBottom: "0%",
    marginTop: "0%",
    fontWeight: "300",
    fontSize: 18,
    color: "#18163A",
    letterSpacing: 0,
    fontFamily: "WorkSans-Regular",
    // fontFamily: 'AppleSDGothicNeo-Medium',
  },
  continueButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#18163A",
    width: 150,
    height: 50,
    borderRadius: 40,
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDBDBA",
    width: 150,
    height: 50,
    marginRight: "5%",
    borderRadius: 40,
    marginTop: "5%",
    marginBottom: "5%",
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "300",
    fontSize: 18,
    color: "#18163A",
    letterSpacing: 4,
    fontFamily: "WorkSans-Regular",
  },
  donebuttonText: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "300",
    fontSize: 18,
    color: "#FFF5EF",
    letterSpacing: 4,
    fontFamily: "WorkSans-Regular",
  },
});
