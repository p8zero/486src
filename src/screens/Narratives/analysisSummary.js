import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import BackButton from "../../components/backButton";
import firestore from "@react-native-firebase/firestore";
import Ionicons from "react-native-vector-icons/Ionicons";
import { generateDescription } from "../../components/Narratives/generateDescription";
import { AuthContextNew } from "../../navigation/authProvider";
import { Mixpanel } from "mixpanel-react-native";

export default function FinalNarrativesNC({ route, navigation }) {
  const { user } = useContext(AuthContextNew);
  const {
    id,
    titleName,
    flow,
    mainChar,
    otherChar,
    data,
    emotions,
    relationship,
    gender,
    age,
    trait,
    prediction,
    length,
    editNarr,
    deduction
  } = route.params;


  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel(
    "2100a249cd1d52d225d1c040909d6c79",
    trackAutomaticEvents
  );
  mixpanel.init();

  const checkFlow = () => {
    if (flow == "clarityInTheMoment") {
      return "might feel this way because...";
    } else if (flow == "clarityInTheFuture") {
      return "might feel like this going forward...";
    }
  };


  const dataToFirebase = () => {
    let posFeeling = emotions.slice(0, 5);
    let negFeeling = emotions.slice(5, 10);

    if(!editNarr){
      firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Narratives")
      .add({
        title: titleName,
        otherChar: otherChar,
        mainChar: mainChar,
        relationship: relationship,
        data: data.flat(),
        positiveFeeling: posFeeling.flat(),
        negativeFeeling: negFeeling.flat(),
        flow: flow,
        gender: gender,
        age: age,
        prediction: prediction,
        trait: trait,
      })
      .then((docRef) => {
        console.log("Narrative To Firebase ID: ", docRef.id);
      })
      .catch((e) => {
        console.log(`createNarrative Error ${e}`);
      });
    }else{
      firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Narratives")
      .doc(id).update({
        title: titleName,
        otherChar: otherChar,
        mainChar: mainChar,
        relationship: relationship,
        data: data.flat(),
        positiveFeeling: posFeeling.flat(),
        negativeFeeling: negFeeling.flat(),
        flow: flow,
        gender: gender,
        age: age,
        prediction: prediction,
        trait: trait,
      }).catch((e) => {
        console.log(`updateNarrative Error ${e}`);
      });
    }
    
  };

  const doneHandler = () => {
    if (!deduction){
      dataToFirebase();
    }
  }

  const convertArray = (data, lengths) => {
    const result = [];
    let currentIndex = 0;
  
    for (let i = 0; i < lengths.length; i++) {
      const currentLength = lengths[i];
      result.push(data.slice(currentIndex, currentIndex + currentLength));
      currentIndex += currentLength;
    }
    return result;
  }

  const CheckData = (data) => {
    let convertedData = []
    if (flow == "clarityInTheMoment") {
      //Convert to CIF structure
      const lengths = [3, 16, 12, 8, 8, 14, 8, 8, 10, 8, 24, 10, 8]
      convertedData = convertArray(data, lengths)
    } else if (flow == "clarityInTheFuture") {
      //Convert to CIM structure
      const lengths = [8, 9, 16, 8, 8, 4, 16, 4, 4, 6, 14];
      convertedData = convertArray(data, lengths)
    }

    return convertedData
  };



  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF5EF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          top: "10%",
          marginHorizontal: "2.5%",
          padding: "0%",
          width: "95%",
        }}
      >
        <BackButton
          label={"back button"}
          onPress={() => {
            navigation.goBack("SelectNarratives");
          }}
          icon={
            <Ionicons name="chevron-back-outline" size={24} color="#000000" />
          }
        />

      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "15%",
          marginHorizontal: "2.5%",
          padding: "0%",
          width: "95%",
          marginBottom: '2%'
        }}
      >
      <View style={{
          flexdirection: 'row',
          justifyContent: 'center',
          width: '50%',
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
      }}>
      <Text style={{fontFamily: 'WorkSans-light', 
            color: '#000000', 
            textAlign: 'left',
            justifyContent: 'center',
            fontWeight: '300', 
            fontSize: 22,
            letterSpacing: 0,
            flexWrap: 'wrap',}}>
              Narration Summary
        </Text>
      </View> 
      <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AnalysisSummaryTutorial')
            }}
            style={{
              backgroundColor: '#18163A',
              borderRadius: 50,
              width: 150,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 20,
                fontWeight: '400',
                fontSize: 16,
                letterSpacing: 0,
                color: '#FFF5EF',
                fontFamily: 'WorkSans-Regular',
              }}>
              How to Use the Summary
            </Text>
          </TouchableOpacity>
      </View>

</View>

      <View
        style={{
          flex: 1,
          marginTop: "2%",
          backgroundColor: "#F6DEDC",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 0,
        }}
      >
        <Text style={styles.titleStyle2}>
        {titleName}
          </Text>
        <Text style={styles.titleStyle}>
        {mainChar} {checkFlow()}
          </Text>
        <ScrollView style={{ paddingBottom: "3%", paddingTop: "5%" }}>
          <Text style={styles.descStyle}>{generateDescription({
              inputData: prediction,
              flow: flow == 'clarityInTheMoment' ? 'clarityInTheFuture': 'clarityInTheMoment',
              mainChar,
              otherChar,
            }) || "Narration Is Empty"}</Text>

</ScrollView>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "5%", 
              marginTop: '3%'

            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AnalysisDetails", {
                  narrData: CheckData(prediction),
                  mainChar: mainChar,
                  otherChar: otherChar,
                  relationship: relationship,
                  flow: flow == 'clarityInTheMoment' ? 'clarityInTheFuture': 'clarityInTheMoment',
                  emotions: emotions,
                  gender: gender,
                  age: age,
                  id: id,
                });
              }}

              
              style={styles.editButton}
            >
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {                
                doneHandler();
                navigation.popToTop()
                mixpanel.track("Narrative Creation");
              }}
              style={styles.continueButton}
            >
              <Text style={styles.donebuttonText}>Done</Text>
            </TouchableOpacity>
          </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingTop: "5%",
    paddingBottom: '2%',
    marginHorizontal: "5%",
    fontWeight: "300",
    fontSize: 18,
    color: "#000000",
    letterSpacing: 1,
    fontFamily: "WorkSans-Regular",
  },
  titleStyle2: {
    flexWrap: "wrap",
    textAlign: "left",
    paddingTop: "5%",
    marginHorizontal: "5%",
    fontWeight: "300",
    fontSize: 18,
    fontStyle: 'italic',
    color: "#000000",
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
    color: "#000000",
    letterSpacing: 0,
    fontFamily: "WorkSans-Regular",
  },
  continueButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#18163A",
    width: 150,
    height: 50,
    borderRadius: 40,
    marginLeft: "2.5%",
    marginTop: "3%",
    marginBottom: "3%",
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDBDBA",
    width: 150,
    height: 50,
    marginRight: "2.5%",
    borderRadius: 40,
    marginTop: "3%",
    marginBottom: "3%",
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "300",
    fontSize: 18,
    color: "#000000",
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
