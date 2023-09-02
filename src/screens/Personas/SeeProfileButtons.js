import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  Modal,
} from "react-native";
import ViewInfoButtonPersonas from "../../components/Personas/viewInfoButtonPg3Personas";
import BackButtonNav from "../../components/backButtonNav";
import Overview_Options from "../../components/Personas/Overview_Options";
import UserIcon from "../../components/UserIcon";
import ModalView from "../../components/ModalView";
import firestore from "@react-native-firebase/firestore";
import { AuthContextNew } from "../../navigation/authProvider";
import { useIsFocused } from "@react-navigation/native";

const SeeProfileButtons = ({ route, navigation }) => {
  const { name, age, gender, id, notes, traits } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [duplicateModal, setDuplicateModal] = useState(false);
  const [data, setData] = useState([]);

  const { user } = useContext(AuthContextNew);
  const isFocused = useIsFocused();

  const deleteFromFirebase = () => {
    firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Personas")
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
      .collection("Personas")
      .doc()
      .set({
        name: "Copy of " + name,
        age: age,
        gender: gender,
        traits: data,
      })
      .then(() => {
        console.log("Document was successfully duplicated");
        navigation.popToTop();
      })
      .catch((e) => {
        console.log(`createProfile Error ${e}`);
      });
  };

  useEffect(() => {
    const getData = () => {
      firestore()
        .collection("Users")
        .doc(user.uid)
        .collection("Personas")
        .doc(id)
        .get()
        .then((document) => {
          if (document.exists) {
            setData(document.data().traits);
          }
        });
    };

    getData();
  }, [isFocused, id, user.uid]); 

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#9CC8C6",
      }}
    >
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <ModalView
          NoPress={() => setModalVisible(!modalVisible)}
          txt="Would you like to delete this persona?"
          id={id}
          YesPress={deleteFromFirebase}
          back={() => {
            navigation.popToTop();
          }}
        />
      </Modal>

      <Modal animationType="none" transparent={true} visible={duplicateModal}>
        <ModalView
          NoPress={() => setDuplicateModal(!duplicateModal)}
          txt="Would you like to duplicate this persona?"
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
            flex:1,
            flexDirection: "row",
            top: "12%",
            marginHorizontal: "4%",
            padding: "0%",
          }}
        >
          <BackButtonNav onPress={() => navigation.pop()} />
        </View>
        <View
          style={{
            // flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "17%",
          }}
        >
          <UserIcon
            userName={name}
            inColor={"#9cc8C6"}
            outColor={"#18163A"}
            size={70}
            fontSize={35}
          />
          <Text
            style={{
              fontFamily: "WorkSans-Light",
              color: "#18163A",
              fontSize: 20,
              fontWeight: "300",
              letterSpacing: 4,
              paddingTop: 10,
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            paddingLeft: "0%",
            marginTop: "6%",
            marginBottom: "6%",
            alignItems: "center",
          }}
        >
          <ViewInfoButtonPersonas
            edit={() => {
              navigation.navigate("EditProfile", {
                id: id,
                age: age,
                gender: gender,
                name: name,
              });
            }}
            label1="Gender"
            label2="Age"
            val1={gender}
            val2={age}
          />
        </View>
      </View>

      <Overview_Options
        id={id}
        name={name}
        data={data}
        notes={notes}
        Delete={() => setModalVisible(true)}
        Duplicate={() => setDuplicateModal(true)}
        Edit={() =>
          navigation.navigate("SelectPersonas", {
            newPers: name,
            id: id,
            age: age,
            gender: gender,
            data: data,
            path: 0,
          })
        }
        style={{ flex: 1 }}
        Create={() =>           
          navigation.navigate("NotesScreen", {
            id: id,
            newPers: name,
        })}
      />
    </View>
  );
};

export default SeeProfileButtons;
