import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator
} from "react-native";
import BackButton from "../../components/backButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputFieldPersonas from "../../components/Personas/inputFieldPg2Personas";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DropDownPicker from "react-native-dropdown-picker";
import CustomButtonPersonas from "../../components/Personas/customButtonPg1Personas";
import Notes from "../../components/notes";
import ViewInfoButtonNarratives from "../../components/Home/viewInfoButtonPg3Narratives";
import CustomButton2Personas from "../../components/Personas/customButtonPg3Personas";
import BackButtonNavNarratives from "../../components/backButtonNavNarratives";
import CommunityOverview_Options from "../../components/Community/CommunityOption_Options";
import UserIcon from "../../components/UserIcon";
import NarrativesModalView from "../../components/NarrativesModalView";
import { AuthContextNarratives } from "../../navigation/AuthProviderNarratives";
import firestore from "@react-native-firebase/firestore";
import { AuthContextNew } from "../../navigation/authProvider";
import { useIsFocused } from "@react-navigation/native";
import { concat } from "react-native-reanimated";
import { generateDescription } from "../../components/Narratives/generateDescription";

const SeeCommunityButton = ({ route, navigation }) => {
  const {
    mainChar,
    relationship,
    otherChar,
    id,
    notes,
    title,
    flow,
    positiveFeeling,
    negativeFeeling,
    narrDesc,
    age,
    gender,
    trait,
    prediction
  } = route.params;
  
  const [data, setData] = useState([]);
  const [narratives, setNarratives] = useState([]);
  const { user } = useContext(AuthContextNew);
  const isFocused = useIsFocused();

  const [isLoaded, setIsLoaded] = useState(false);

  const pf = positiveFeeling.split(",").map(Number);
  const nf = negativeFeeling.split(",").map(Number);

  let emotions = pf.concat(nf);
  let nTrait =  trait.split(",").map(Number);

  const convertArray = (narrData, lengths) => {
    const result = [];
    let currentIndex = 0;
  
    for (let i = 0; i < lengths.length; i++) {
      const currentLength = lengths[i];
      result.push(narrData.slice(currentIndex, currentIndex + currentLength));
      currentIndex += currentLength;
    }
    return result;
  }

  const CheckData = () => {
    let convertedData = []
    if (flow == "clarityInTheMoment") {
      const lengths = [8, 9, 16, 8, 8, 4, 16, 4, 4, 6, 14];
      convertedData = convertArray(data, lengths)
    } else if (flow == "clarityInTheFuture") {
      const lengths = [3, 16, 12, 8, 8, 14, 8, 8, 10, 8, 24, 10, 8]
      convertedData = convertArray(data, lengths)
    }

    return convertedData
  };

  const navigateToInvitations = () => {
    navigation.navigate("Invitations", {
      narrData: CheckData(),
      flow: flow,
      mainChar: mainChar,
      otherChar: otherChar,
      relationship: relationship,
      emotions: emotions,
      gender: gender,
      age: age,
      trait: nTrait,
      id: id,
      editNarr: true,
      titleName: title
    })
  }

  const navigateToConnections = () => {
    navigation.navigate("Connections", {
      data: CheckData(),
      emotions: emotions,
      relationship: relationship,
      gender: gender,
      age: age,
      flow: flow,
      mainChar: mainChar,
      otherChar: otherChar,
      trait: trait,
      id: id,
      prediction: prediction.split(',').map(Number),
      editNarr: false,
      deduction: true
    });
  }

  const navigateToInProgressConnections = () => {
    navigation.navigate("InProgressConnections", {
      data: CheckData(),
      emotions: emotions,
      relationship: relationship,
      gender: gender,
      age: age,
      flow: flow,
      mainChar: mainChar,
      otherChar: otherChar,
      trait: trait,
      id: id,
      prediction: prediction.split(',').map(Number),
      editNarr: false,
      deduction: true
    });
  }

  const navigateToPotentialConnections = () => {

    navigation.navigate("PotentialConnections", {
      data: CheckData(),
      emotions: emotions,
      relationship: relationship,
      gender: gender,
      age: age,
      flow: flow,
      mainChar: mainChar,
      otherChar: otherChar,
      trait: trait,
      id: id,
      prediction: prediction.split(',').map(Number),
      editNarr: false,
      deduction: true
    });

    
  }

  const UserMatchingAlgorithm = async (currentUser, currentNarrative) => {
    // getting all other users' IDs
    const OtherUsers = await firestore().collection('Users').where('email', '!=', currentUser.email).get();
    const OtherUsersIDs = OtherUsers.docs.map(doc => doc.id);

    //  getting all narratives of other users
    var _narratives = []
    for(var i in OtherUsersIDs){
      const response = await firestore().collection("Users").doc(OtherUsersIDs[i]).collection("Narratives").get();
      const filteredResponse = await response.docs.filter((doc) => doc.exists);
      const userNarratives = filteredResponse.map(doc => ({id: doc.id, userID: OtherUsersIDs[i], ...doc.data()}));
      for(let j=0 ; j < userNarratives.length; j++){
        _narratives.push(userNarratives[j]);
      }
      
    }

    // setting Narratives
    setNarratives(_narratives);

    // getting already matched narratives records from firebase
    const matchedRecord = await firestore().collection("Users").doc(currentUser.uid).collection("Connections").get();
    //console.log(matchedRecord.docs.map(doc => doc.data().otherNarrativeID));

    // filter out already saved records
    const newNarrativeMatches = _narratives.filter(narr => matchedRecord.docs.findIndex(doc => doc.data().otherNarrativeID == narr.id) == -1)

    // saving new matches on the database
    for(let i=0; i < newNarrativeMatches.length ;i++){
      let score = similarityScore(currentNarrative, newNarrativeMatches[i]);
      if(score>= 0.8){
        await firestore()
        .collection("Users")
        .doc(user.uid)
        .collection("Connections")
        .doc(newNarrativeMatches[i].id)
        .set({
          lastUpdatedOn: firestore.FieldValue.serverTimestamp(),
          narrativeID: id,
          otherNarrativeID: newNarrativeMatches[i].id,
          userID: user.uid,
          otherUserID: newNarrativeMatches[i].userID,
          score: score,
          status: 'matched'
        }).then(result => console.log("Processing...", i));
      }
    }

    setIsLoaded(true);
  }

  function similarityScore(narrativeOne, narrativeTwo) {
  
    // this calculates the total length of all four arrays
    var total = 0;
    
    // set the matching counter to zero
    var matching = 0;
  
    if(narrativeOne.data != undefined && narrativeTwo.data != undefined){
      for (let i = 0; i < narrativeOne.data.length; i++) {
        if (narrativeOne.data[i] === narrativeTwo.data[i]) {
          matching++;
        }
        total++;
      }
    }

    if(narrativeOne.negativeFeeling != undefined && narrativeTwo.negativeFeeling != undefined){
      for (let i = 0; i < narrativeOne.negativeFeeling.length; i++) {
        if (narrativeOne.negativeFeeling[i] === narrativeTwo.negativeFeeling[i]) {
          matching++;
        }
        total++;
      }
    }

    if(narrativeOne.positiveFeeling != undefined && narrativeTwo.positiveFeeling != undefined){
      for (let i = 0; i < narrativeOne.positiveFeeling.length; i++) {
        if (narrativeOne.positiveFeeling[i] === narrativeTwo.positiveFeeling[i]) {
          matching++;
        }
        total++;
      }
    }

    if(narrativeOne.prediction != undefined && narrativeTwo.prediction != undefined){
      for (let i = 0; i < narrativeOne.prediction.length; i++) {
        if (narrativeOne.prediction[i] === narrativeTwo.prediction[i]) {
          matching++;
        }
        total++;
      }
    }

    if(narrativeOne.trait != undefined && narrativeTwo.trait != undefined){
      for (let i = 0; i < narrativeOne.trait.length; i++) {
        if (narrativeOne.trait[i] === narrativeTwo.trait[i]) {
          matching++;
        }
        total++;
      }
    }
    // return the similarity score as number between 0 and 1
    // 0 means no matching personas or narratives
    // 1 means all personas and narratives match

    if(total == 0){
      return 0;
    }
  
    return matching / total;
  }

  useEffect(() => {
    const getData = () => {
      firestore()
        .collection("Users")
        .doc(user.uid)
        .collection("Narratives")
        .doc(id)
        .get()
        .then((document) => {
          if (document.exists) {
            setData(document.data().data);
            if(narratives.length == 0)
              UserMatchingAlgorithm(user, {id, ...document.data()});
            else
              setIsLoaded(true)
          }
        });
    };
    CheckData();
    isFocused && getData();
  }, [isFocused]);

  useEffect(() => {
    CheckData();
  }, []);

  if(!isLoaded){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6DEDC",
      }}
    >
      
      <View style={{}}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            top: "12%",
            marginHorizontal: "4%",
            padding: "0%",
          }}
        >
          <BackButtonNavNarratives onPress={() => navigation.pop()} />
        </View>
        <View
          style={{
            // flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "17%",
            flexDirection: "row",
          }}
        >
          <View style={{ marginRight: "3%" }}>
            <UserIcon
              userName={mainChar}
              inColor={"#F6DEDC"}
              outColor={"#18163A"}
              size={70}
              fontSize={35}
            />
            <Text
              style={{
                textAlign: "center",
                fontFamily: "WorkSans-Light",
                color: "#18163A",
                fontSize: 16,
                fontWeight: "300",
                letterSpacing: 4,
                paddingTop: 10,
              }}
            >
              {mainChar} (P)
            </Text>
          </View>
          <View style={{ marginLeft: "3%" }}>
            <UserIcon
              userName={otherChar}
              inColor={"#F6DEDC"}
              outColor={"#18163A"}
              size={70}
              fontSize={35}
            />
            <Text
              style={{
                textAlign: "center",
                fontFamily: "WorkSans-Light",
                color: "#18163A",
                fontSize: 16,
                fontWeight: "300",
                letterSpacing: 4,
                paddingTop: 10,
              }}
            >
              {otherChar}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: "5%",
            marginBottom: "5%",
            marginHorizontal: "5%",
            justifyContent: "center",
            height: 140,
            marginLeft: '15%',
            width: "100%",
            backgroundColor: "#EDBDBA",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <Text
      style={{
        fontWeight: '300',
        color: '#18163A',
        fontSize: 20,
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginHorizontal: '5%',
        //marginLeft:'10%',
        marginBottom: '2%',
        letterSpacing: 1,
      }}>
    {mainChar} (P) and {otherChar}'s narrative
    </Text>
    <Text
      style={{
        fontWeight: '300',
        fontSize: 16,
        color: '#18163A',
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginHorizontal: '5%',
        //marginLeft:'10%',
        marginBottom: '8%',
        letterSpacing: 1,
      }}>
    ({otherChar} is {mainChar}'s {relationship})
    </Text>
    <Text
      style={{
        fontWeight: '300',
        fontSize: 20,
        color: '#18163A',
        fontStyle: 'italic',
        fontFamily: 'WorkSans-Light',
        textAlign:'left',
        marginHorizontal: '5%',
        //marginLeft:'10%',
        letterSpacing: 1,
      }}>
      
      {title}
    </Text>
        </View>
      </View>

      <CommunityOverview_Options
        id={id}
        mainChar={mainChar}
        otherChar={otherChar}
        data={generateDescription({ inputData: data, flow, mainChar, otherChar })}
        Connected={() => navigateToConnections()}
        Pending={() => navigateToInProgressConnections()}
        Invitations={() => navigateToInvitations()}
        Matched={() => navigateToPotentialConnections()}
        narrativeDetails={route.params}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SeeCommunityButton;
