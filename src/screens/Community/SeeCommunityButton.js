import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [duplicateModal, setDuplicateModal] = useState(false);
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContextNew);
  const isFocused = useIsFocused();

  const pf = positiveFeeling.split(",").map(Number);
  const nf = negativeFeeling.split(",").map(Number);

  let emotions = pf.concat(nf);
  let nTrait =  trait.split(",").map(Number);

  const deleteFromFirebase = () => {
    firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Narratives")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        navigation.popToTop();
      })
      .catch((e) => {
        console.log(`Error deleting document ${e}`);
      });
  };

  const duplicatePersona = () => {
    firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Narratives")
      .doc()
      .set({
        title: "Copy of " + title,
        otherChar: otherChar,
        mainChar: mainChar,
        relationship: relationship,
        data: data.flat(),
        positiveFeeling: positiveFeeling,
        negativeFeeling: negativeFeeling,
        flow: flow,
        gender: gender,
        age: age,
        prediction: prediction,
        trait: trait,
      })
      .then(() => {
        console.log("Document was successfully duplicated");
        navigation.popToTop();
      })
      .catch((e) => {
        console.log(`createProfile Error ${e}`);
      });
  };

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

  const edit = () => {
    navigation.navigate("Invitations", {
    //   narrData: CheckData(),
    //   flow: flow,
    //   mainChar: mainChar,
    //   otherChar: otherChar,
    //   relationship: relationship,
    //   emotions: emotions,
    //   gender: gender,
    //   age: age,
    //   trait: nTrait,
    //   id: id,
    //   editNarr: true,
    //   titleName: title
    })
  }

  const naraDeduction = () => {

    navigation.navigate("PotentialConnections", {
    //   data: CheckData(),
    //   emotions: emotions,
    //   relationship: relationship,
    //   gender: gender,
    //   age: age,
    //   flow: flow,
    //   mainChar: mainChar,
    //   otherChar: otherChar,
    //   trait: trait,
    //   id: id,
    //   prediction: prediction.split(',').map(Number),
    //   editNarr: false,
    //   deduction: true
    });

    
  }

  const checkFlow = () => {
    if (flow == "clarityInTheMoment") {
      return "Why are things like this & how do we get to the kind of relationship we want?";
    } else if (flow == "clarityInTheFuture") {
      return "Where does the status quo take us & how does it go if we did things differently?";
    }
  };

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
          }
        });
    };
    CheckData();
    isFocused && getData();
  }, [isFocused]);

  useEffect(() => {
    CheckData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6DEDC",
      }}
    >
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <NarrativesModalView
          NoPress={() => setModalVisible(!modalVisible)}
          txt="Would you like to delete this Narrative?"
          id={id}
          YesPress={deleteFromFirebase}
          back={() => {
            navigation.popToTop();
          }}
        />
      </Modal>

      <Modal animationType="none" transparent={true} visible={duplicateModal}>
        <NarrativesModalView
          NoPress={() => setDuplicateModal(!duplicateModal)}
          txt="Would you like to duplicate this Narrative?"
          id={id}
          YesPress={duplicatePersona}
          back={() => {
            navigation.popToTop();
          }}
        />
      </Modal>
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
          {/* <Text
            style={{
              fontFamily: "WorkSans-Light",
              fontWeight: "300",
              fontSize: 20,
              color: "#18163A",
              fontStyle: "italic",
              marginHorizontal: "5%",
              marginBottom: "5%",
              marginTop:'5%'
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSans-Light",
              fontWeight: "300",
              fontSize: 18,
              color: "#18163A",
              marginLeft: "5%",
              marginRight: '10%',
              marginBottom: "5%",
            }}
          >
            {checkFlow()}
          </Text> */}
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
        Delete={() => setModalVisible(true)}
        Duplicate={() => setDuplicateModal(true)}
        Edit={() => edit()}
        Deduction={() => naraDeduction()}
      />
    </View>
  );
};

export default SeeCommunityButton;
