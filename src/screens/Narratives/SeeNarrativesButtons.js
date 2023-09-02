import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  Modal,
} from "react-native";
import BackButtonNavNarratives from "../../components/backButtonNavNarratives";
import NarrativesOverview_Options from "../../components/Home/NarrativesOverview_Options";
import UserIcon from "../../components/UserIcon";
import NarrativesModalView from "../../components/NarrativesModalView";
import firestore from "@react-native-firebase/firestore";
import { AuthContextNew } from "../../navigation/authProvider";
import { useIsFocused } from "@react-navigation/native";
import { generateDescription } from "../../components/Narratives/generateDescription";

const SeeNarrativesButtons = ({ route, navigation }) => {
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
    navigation.navigate("EditNarratives", {
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

  const naraDeduction = () => {

    navigation.navigate("AnalysisSummary", {
      data: CheckData(),
      emotions: emotions,
      titleName: title,
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



  const checkFlow = () => {
    if (flow == "clarityInTheMoment") {
      return "Looking for clarity around what led them to feel this way or what has to change for them to feel differently";
    } else if (flow == "clarityInTheFuture") {
      return "Looking for clarity around how might they feel going forward or how they might feel if things went differently";
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
            setNotes(document.data().notes || '');
          }
        });
    };
    CheckData();
    isFocused && getData();
  }, [isFocused, id, user.uid]);

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
              {mainChar}
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
            marginLeft: "10%",
            justifyContent: "center",
            height: 140,
            width: "100%",
            backgroundColor: "#EDBDBA",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "WorkSans-Light",
              fontWeight: "300",
              fontSize: 18,
              color: "#18163A",
              fontStyle: "italic",
              marginLeft: "5%",
              marginRight: '15%',
              marginBottom: "3%",
              marginTop:'5%'
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSans-Light",
              fontWeight: "300",
              fontSize: 16,
              color: "#18163A",
              marginLeft: "5%",
              marginRight: '10%',
              marginBottom: "2%",
            }}
          >
            {checkFlow()}
          </Text>

        </View>
      </View>

      <NarrativesOverview_Options
        id={id}
        mainChar={mainChar}
        otherChar={otherChar}
        data={generateDescription({ inputData: data, flow, mainChar, otherChar })}
        Delete={() => setModalVisible(true)}
        //Duplicate={() => setDuplicateModal(true)}
        Edit={() => edit()}
        Create={() =>  navigation.navigate("StoryNotes", {
          id: id,
          titleName: title
        })}
        Deduction={() => naraDeduction()}
      />
    </View>
  );
};

export default SeeNarrativesButtons;
