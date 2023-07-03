import React, { useContext, useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
  ImageComponent,
} from "react-native";
import BackButton from "../../components/backButton";
import Feather from "react-native-vector-icons/Feather";
import firestore, { firebase } from "@react-native-firebase/firestore";
import UserFlatList from "../../components/flatListPersonas";
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { AuthContextNarratives } from "../../navigation/AuthProviderNarratives";
import RBSheet from "react-native-raw-bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContextNew } from "../../navigation/authProvider";
import { Mixpanel } from "mixpanel-react-native";
import { generateDescription } from "../../components/Narratives/generateDescription";
import axios from "axios";
import ProgressLoader from "rn-progress-loader";

import { INFERENCE_BASE_URL, API_V1 } from "../../config";

export default function FinalNarratives({ route, navigation }) {
  const { environment } = useContext(AuthContextNarratives);
  const { user } = useContext(AuthContextNew);
  const {
    id,
    flow,
    mainChar,
    otherChar,
    data,
    emotions,
    relationship,
    gender,
    age,
    trait,
    length,
    editNarr,
    titleName
  } = route.params;
  const [customTitle, setCustomTitle] = useState(titleName);

  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel(
    "2100a249cd1d52d225d1c040909d6c79",
    trackAutomaticEvents
  );
  mixpanel.init();

  const dataForModel = async () => {
    const relationshipKey = [
      "Parent",
      "Child",
      "Sibling",
      "In Law",
      "Extended",
      "Employee",
      "Boss",
      "Colleague",
      "Customer",
      "Significant Other",
      "Romantic Interest",
      "Ex",
      "Friend",
      "Acquaintance",
      "Ally",
      "Rival",
      "Society",
    ];
    const genderArray = [0, 0, 0].map((_, i) =>
      (gender === "male" && i === 0) ||
      (gender === "female" && i === 1) ||
      (gender !== "male" && gender !== "female" && i === 2)
        ? 1
        : 0
    );
    const ageArray = [0, 0, 0].map((_, i) =>
      (age <= 20 && i === 0) ||
      (age > 20 && age <= 30 && i === 1) ||
      (age > 30 && i === 2)
        ? 1
        : 0
    );

    const relationshipArray = relationshipKey.map((key) =>
      Number(key === relationship)
    );

    let mData = [].concat(
      ageArray,
      genderArray,
      relationshipArray,
      emotions,
      trait,
      data.flat(1)
    );

    // ? Possible flow values -> clarityInTheMoment, clarityInTheFuture
    // * Send data to inference engine
    const inferenceResponse = await axios.post(
      `${INFERENCE_BASE_URL}/${API_V1}/inference`,
      { vector: mData, model: flow.toUpperCase() },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // // todo do error check on response -> check status code

    /**
     * @type {Array<number>}
     */
    const prediction = inferenceResponse.data.data.prediction;

    console.log(inferenceResponse.status, inferenceResponse.statusText);
    
    //Prediction Convertion 
    const convertedPrediction = prediction.map((value) =>
      value > 0.3 ? 1 : 0
    );
    // * Save data to firebase, added prediction array to be stored
    navigation.navigate("AnalysisSummary", {
      titleName: customTitle,
      data: data,
      emotions: emotions,
      relationship: relationship,
      gender: gender,
      age: age,
      flow: flow,
      mainChar: mainChar,
      otherChar: otherChar,
      trait: trait,
      id: id,
      prediction: convertedPrediction,
      length: length,
      editNarr: editNarr,
      deduction: false
    });
  };

  

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6DEDC",
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
            <Ionicons name="chevron-back-outline" size={24} color="#18163A" />
          }
        />
        <BackButton
          label={"back button"}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          icon={<Ionicons name="close" size={24} color="#18163A" />}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginTop: "18%",
          backgroundColor: "#FFF5EF",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 0,
        }}
      >
        <View style={styles.inputButton}>
          <TextInput
            placeholder="Enter a Title for the Narrative"
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: "4%",
              paddingLeft: "5%",
              fontSize: 18,
              fontFamily: "WorkSans-Light",
              fontWeight: "300",
              color: "#18163A",
              letterSpacing: 2,
              backgroundColor: "#F6DEDC",
              borderRadius: 40,
            }}
            keyboardType="email-address"
            onChangeText={(text) => setCustomTitle(text)}
            value={customTitle}
          />
        </View>
        <ScrollView
          style={{
            paddingBottom: "5%",
            paddingTop: "10%",
            height: SCREEN_HEIGHT,
          }}
        >
          <Text style={styles.descStyle}>
            {generateDescription({
              inputData: data,
              flow,
              mainChar,
              otherChar,
            })}
          </Text>
        </ScrollView>

        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              // dataToFirebase();
              dataForModel();
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
  },
  titleStyle: {
    flexWrap: "wrap",
    textAlign: "center",
    paddingTop: "8%",
    marginHorizontal: "5%",
    fontWeight: "300",
    fontSize: 20,
    color: "#18163A",
    letterSpacing: 2,
    fontFamily: "WorkSans-Regular",
  },
  descStyle: {
    flexWrap: "wrap",
    textAlign: "left",
    marginHorizontal: "5%",
    marginBottom: "10%",
    marginTop: "0%",
    fontWeight: "300",
    fontSize: 18,
    color: "#18163A",
    letterSpacing: 0,
    fontFamily: "WorkSans-Regular",
  },
  continueButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDBDBA",
    width: 180,
    height: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
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
    marginBottom: "25%",
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
    color: "#18163A",
    letterSpacing: 4,
    fontFamily: "WorkSans-Regular",
  },
});
