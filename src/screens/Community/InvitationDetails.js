import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  Modal,
} from "react-native";
import BackButtonNavNarratives from "../../components/backButtonNavNarratives";
import UserIcon from "../../components/UserIcon";
import NarrativesModalView from "../../components/NarrativesModalView";
import firestore from "@react-native-firebase/firestore";
import { AuthContextNew } from "../../navigation/authProvider";
import { useIsFocused } from "@react-navigation/native";
import { generateDescription } from "../../components/Narratives/generateDescription";
import PotentialConnectionOption from "../../components/Community/PotentialConnectionOptions";

const InvitationDetails = ({ route, navigation }) => {
  let { id, matchedDocument, matchedUserDetails, narrativeDetails } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContextNew);

  const sendConnectionRequest = () => {
    firestore()
    .collection("Users")
    .doc(matchedDocument.otherUserID)
    .collection("Connections")
    .doc(matchedDocument.narrativeID)
    .set({
        lastUpdatedOn: firestore.FieldValue.serverTimestamp(),
        narrativeID: matchedDocument.otherNarrativeID,
        otherNarrativeID: matchedDocument.narrativeID,
        userID: matchedDocument.otherUserID,
        otherUserID: user.uid,
        score: matchedDocument.score,
        status: 'connected'
    }).then(result => {
        firestore()
        .collection("Users")
        .doc(user.uid)
        .collection("Connections")
        .doc(matchedDocument.otherNarrativeID)
        .update({
            status: 'connected',
            lastUpdatedOn: firestore.FieldValue.serverTimestamp(),
        })
        .then(result => {
            console.log("Connection Request Sent Successfully!");
            navigation.popToTop();
        })
        .catch(error => console.error(error));
        
    }).catch(err => console.error(err));
  };

  const similarityWith = () => {
    navigation.navigate("SimilarityWith", {
      id,
      matchedDocument,
      matchedUserDetails,
      narrativeDetails
    })
  }

  const checkFlow = () => {
    if (narrativeDetails.flow == "clarityInTheMoment") {
      return "Exposition - How did it get here";
    } else if (narrativeDetails.flow == "clarityInTheFuture") {
      return "Foreshadowing - How could it go";
    }
  };

  useEffect(() => {
  }, [route.params.narrativeDetails, route.params.matchedDocument, route.params.matchedUserDetails]);

  if(narrativeDetails == undefined || matchedDocument== undefined || matchedUserDetails == undefined){
    return(<View>
      <Text>Loading...</Text>
    </View>)
  }

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
          txt={`Would you like to accept the connection invitation of ${matchedUserDetails.username}?`}
          id={id}
          YesPress={sendConnectionRequest}
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
              userName={narrativeDetails.mainChar}
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
              {narrativeDetails.mainChar} (Nar)
            </Text>
          </View>
          <View style={{ marginLeft: "3%" }}>
            <UserIcon
              userName={narrativeDetails.otherChar}
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
              {narrativeDetails.otherChar}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: "5%",
            marginBottom: "5%",
            marginLeft: "10%",
            justifyContent: "center",
            height: 120,
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
              marginBottom: "5%",
              marginTop:'5%'
            }}
          >
            {narrativeDetails.title}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSans-Light",
              fontWeight: "300",
              fontSize: 16,
              color: "#18163A",
              marginLeft: "5%",
              marginRight: '10%',
              marginBottom: "5%",
            }}
          >
            {checkFlow()} for {narrativeDetails.mainChar}?
          </Text>
        </View>
      </View>

      <PotentialConnectionOption
        Connect={() => setModalVisible(true)}
        SimilarityWith={() => similarityWith()}
        narrativeDetails={narrativeDetails}
        matchedDocument={matchedDocument}
        matchedUserDetails={matchedUserDetails}
      />
    </View>
  );
};

export default InvitationDetails;
