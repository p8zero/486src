import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import BackButton from "../../components/backButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContextNarratives } from "../../navigation/AuthProviderNarratives";
import { Mixpanel } from 'mixpanel-react-native';

const Perspective2 = ({ route, navigation }) => {
  const { mainChar, otherChar, environment, relationship, gender, age, trait } = route.params;
  const { createNarrative } = useContext(AuthContextNarratives);
  let flow = "";
  let posFeeling = "";
  let negFeeling = "";

  if (global.clarityInTheFuture === true) {
    flow = "clarityInTheFuture";
  } else {
    flow = "clarityInTheMoment";
  }


  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  // May not be the best way to implement this but it works and results in arrays of 0's and 1's for the AI
  const [positiveAndLively, setPositiveAndLively] = useState([0, 0, 0, 0]); // excitement, happiness, joy, pleasure
  const [positiveThoughts, setPositiveThoughts] = useState([0, 0, 0, 0, 0]); // Courage, hope, humility, satisfaction, trust
  const [quietPositive, setQuietPositive] = useState([0, 0, 0, 0, 0]); // calmness, relaxation, contentment, serenity, relief
  const [caring, setCaring] = useState([0, 0, 0, 0]); // affection, emapthy, friendliness, love
  const [reactive, setReactive] = useState([0, 0]); // interest, surprise

  const [negativeAndForceful, setNegativeAndForceful] = useState([0, 0, 0, 0]); // anger, disgust, irritation, annoyance
  const [negativeNotInControl, setNegativeNotInControl] = useState([
    0, 0, 0, 0, 0,
  ]); // anxiety, embarrasment, fear, helplessness, worry
  const [negativeThoughts, setNegativeThoughts] = useState([0, 0, 0, 0, 0]); // doubt, envy, frustration, guilt, shame
  const [negativeAndPassive, setNegativeAndPassive] = useState([0, 0, 0, 0, 0]); // boredom, despair, disappointment, hurt, sadness
  const [agitation, setAgitation] = useState([0, 0, 0]); // stress, shock, tension
  let emotions;

  const updatePositiveAndLively = (index) => {
    let newArr = [...positiveAndLively]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setPositiveAndLively(newArr);
  };
  const updatePositiveThoughts = (index) => {
    let newArr = [...positiveThoughts]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setPositiveThoughts(newArr);
  };
  const updateQuietPositive = (index) => {
    let newArr = [...quietPositive]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setQuietPositive(newArr);
  };
  const updateCaring = (index) => {
    let newArr = [...caring]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setCaring(newArr);
  };
  const updateReactive = (index) => {
    let newArr = [...reactive]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setReactive(newArr);
  };
  const updateNegativeAndForceful = (index) => {
    let newArr = [...negativeAndForceful]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setNegativeAndForceful(newArr);
  };
  const updateNegativeNotInControl = (index) => {
    let newArr = [...negativeNotInControl]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setNegativeNotInControl(newArr);
  };
  const updateNegativeThoughts = (index) => {
    let newArr = [...negativeThoughts]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setNegativeThoughts(newArr);
  };
  const updateNegativeAndPassive = (index) => {
    let newArr = [...negativeAndPassive]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setNegativeAndPassive(newArr);
  };
  const updateAgitation = (index) => {
    let newArr = [...agitation]; // copying the old datas array
    if (newArr[index] === 0) {
      newArr[index] = 1;
    } else {
      newArr[index] = 0;
    }
    setAgitation(newArr);
  };

  const getData = () => {
    emotions = [
      positiveAndLively,
      positiveThoughts,
      quietPositive,
      caring,
      reactive,
      negativeAndForceful,
      negativeNotInControl,
      negativeThoughts,
      negativeAndPassive,
      agitation,
    ];
    emotions = emotions.map((innerArray) => (innerArray.includes(1) ? 1 : 0));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F6DEDC",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: "4%",
          marginHorizontal: "2.5%",
          padding: "0%",
          width: "95%",
        }}
      >
        <BackButton
          label={"back button"}
          onPress={() => {
            navigation.goBack("Relationship");
          }}
          icon={
            <Ionicons name="chevron-back-outline" size={24} color="#000000" />
          }
        />
        <BackButton
          label={"back button"}
          onPress={() => {
            navigation.navigate("NarrativesScreen");
          }}
          icon={<Ionicons name="close" size={24} color="#000000" />}
        />
      </View>

      <View style={{marginTop: '8%',
        flexdirection: 'row',
        justifyContent: 'center',
        width: '90%',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,}}>
        <Text
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            fontFamily: "WorkSans-Regular",
            fontSize: 22,
            fontWeight: "300",
            color: "#000000",
            letterSpacing: 0,
          }}
        >
          What is {mainChar} feeling in this story?
        </Text>
        <Text
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: '1%',
            marginBottom: '2%',
            fontFamily: "WorkSans-Regular",
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: "300",
            color: "#000000",
            letterSpacing: 0,
          }}
        >
          (Select all that apply)
        </Text>
      </View>

      <ScrollView style={{marginTop: '4%'}}>


        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            marginHorizontal: "4%",
          }}
        >
          <TouchableOpacity
            style={
              positiveAndLively[0] == 1
                ? styles.buttonSelected
                : styles.button
            }
            onPress={() => updatePositiveAndLively(0)}
          >
            <Text style={styles.text}>Excited</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              positiveAndLively[1] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updatePositiveAndLively(1)}
          >
            <Text style={styles.text}>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              positiveAndLively[2] == 1
                ? styles.buttonSelected2
                : styles.button2
            }
            onPress={() => updatePositiveAndLively(2)}
          >
            <Text style={styles.text}>Joyful</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              positiveAndLively[3] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updatePositiveAndLively(3)}
          >
            <Text style={styles.text}>Delighted</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              positiveThoughts[0] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updatePositiveThoughts(0)}
          >
            <Text style={styles.text}>Brave</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              positiveThoughts[1] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updatePositiveThoughts(1)}
          >
            <Text style={styles.text}>Hopeful</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              positiveThoughts[2] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updatePositiveThoughts(2)}
          >
            <Text style={styles.text}>Humble</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              positiveThoughts[3] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updatePositiveThoughts(3)}
          >
            <Text style={styles.text}>Satisfied</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              positiveThoughts[4] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updatePositiveThoughts(4)}
          >
            <Text style={styles.text}>Trusting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              quietPositive[0] == 1 ? styles.buttonSelected2 : styles.button2
            }
            onPress={() => updateQuietPositive(0)}
          >
            <Text style={styles.text}>Calm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              quietPositive[1] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateQuietPositive(1)}
          >
            <Text style={styles.text}>Relaxed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              quietPositive[2] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateQuietPositive(2)}
          >
            <Text style={styles.text}>Content</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              quietPositive[3] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateQuietPositive(3)}
          >
            <Text style={styles.text}>Serene</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              quietPositive[4] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateQuietPositive(4)}
          >
            <Text style={styles.text}>Relieved</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={caring[0] == 1 ? styles.buttonSelected : styles.button}
            onPress={() => updateCaring(0)}
          >
            <Text style={styles.text}>Affectionate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={caring[1] == 1 ? styles.buttonSelected : styles.button}
            onPress={() => updateCaring(1)}
          >
            <Text style={styles.text}>Empathetic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={caring[2] == 1 ? styles.buttonSelected : styles.button}
            onPress={() => updateCaring(2)}
          >
            <Text style={styles.text}>Friendly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={caring[3] == 1 ? styles.buttonSelected2 : styles.button2}
            onPress={() => updateCaring(3)}
          >
            <Text style={styles.text}>Loving</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={reactive[0] == 1 ? styles.buttonSelected : styles.button}
            onPress={() => updateReactive(0)}
          >
            <Text style={styles.text}>Interested</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={reactive[1] == 1 ? styles.buttonSelected : styles.button}
            onPress={() => updateReactive(1)}
          >
            <Text style={styles.text}>Surprised</Text>
          </TouchableOpacity>
        </View>


        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            marginHorizontal: "4%",
          }}
        >
          <TouchableOpacity
            style={
              negativeAndForceful[0] == 1
                ? styles.buttonSelected
                : styles.button
            }
            onPress={() => updateNegativeAndForceful(0)}
          >
            <Text style={styles.text}>Angry</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeAndForceful[1] == 1
                ? styles.buttonSelected
                : styles.button
            }
            onPress={() => updateNegativeAndForceful(1)}
          >
            <Text style={styles.text}>Disgusted</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeAndForceful[2] == 1
                ? styles.buttonSelected
                : styles.button
            }
            onPress={() => updateNegativeAndForceful(2)}
          >
            <Text style={styles.text}>Resentful</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeAndForceful[3] == 1
                ? styles.buttonSelected
                : styles.button
            }
            onPress={() => updateNegativeAndForceful(3)}
          >
            <Text style={styles.text}>Annoyed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeNotInControl[0] == 1
                ? styles.buttonSelected
                : styles.button
            }
            onPress={() => updateNegativeNotInControl(0)}
          >
            <Text style={styles.text}>Anxious</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeNotInControl[1] == 1
                ? styles.buttonSelected3
                : styles.button3
            }
            onPress={() => updateNegativeNotInControl(1)}
          >
            <Text style={styles.text}>Embarassed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeNotInControl[2] == 1
                ? styles.buttonSelected2
                : styles.button2
            }
            onPress={() => updateNegativeNotInControl(2)}
          >
            <Text style={styles.text}>Afraid</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeNotInControl[3] == 1
                ? styles.buttonSelected
                : styles.button
            }
            onPress={() => updateNegativeNotInControl(3)}
          >
            <Text style={styles.text}>Helpless</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeNotInControl[4] == 1
                ? styles.buttonSelected
                : styles.button
            }
            onPress={() => updateNegativeNotInControl(4)}
          >
            <Text style={styles.text}>Worried</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeThoughts[0] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateNegativeThoughts(0)}
          >
            <Text style={styles.text}>Doubtful</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeThoughts[1] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateNegativeThoughts(1)}
          >
            <Text style={styles.text}>Jealous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeThoughts[2] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateNegativeThoughts(2)}
          >
            <Text style={styles.text}>Frustrated</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeThoughts[3] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateNegativeThoughts(3)}
          >
            <Text style={styles.text}>Guilty</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeThoughts[4] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateNegativeThoughts(4)}
          >
            <Text style={styles.text}>Ashamed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeAndPassive[0] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateNegativeAndPassive(0)}
          >
            <Text style={styles.text}>Bored</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeAndPassive[1] == 1 ? styles.buttonSelected : styles.button
            }
            onPress={() => updateNegativeAndPassive(1)}
          >
            <Text style={styles.text}>Lonely</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeAndPassive[2] == 1
                ? styles.buttonSelected3
                : styles.button3
            }
            onPress={() => updateNegativeAndPassive(2)}
          >
            <Text style={styles.text}>Disappointed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeAndPassive[3] == 1
                ? styles.buttonSelected2
                : styles.button2
            }
            onPress={() => updateNegativeAndPassive(3)}
          >
            <Text style={styles.text}>Hurt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              negativeAndPassive[4] == 1 ? styles.buttonSelected2 : styles.button2
            }
            onPress={() => updateNegativeAndPassive(4)}
          >
            <Text style={styles.text}>Sad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={agitation[0] == 1 ? styles.buttonSelected : styles.button}
            onPress={() => updateAgitation(0)}
          >
            <Text style={styles.text}>Stressed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={agitation[1] == 1 ? styles.buttonSelected : styles.button}
            onPress={() => updateAgitation(1)}
          >
            <Text style={styles.text}>Shocked</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={agitation[2] == 1 ? styles.buttonSelected : styles.button}
            onPress={() => updateAgitation(2)}
          >
            <Text style={styles.text}>Tense</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              getData();
              mixpanel.track("Narrative_Emotions");
              navigation.navigate("SelectNarratives", {
                relationship: relationship,
                emotions: emotions,
                mainChar: mainChar,
                otherChar: otherChar,
                environment: environment,
                posFeeling: posFeeling,
                negFeeling: negFeeling,
                flow: flow,
                gender: gender,
                age: age,
                trait: trait
              });
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "8%",
              marginBottom: "10%",
              backgroundColor: "#EDBDBA",
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              width: 175,
              height: 50,
            }}
          >
            <Text
              style={{
                fontWeight: "300",
                fontSize: 20,
                letterSpacing: 4,
                color: "#000000",
                fontFamily: "WorkSans-Regular",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Perspective2;

const styles = {
  buttonSelected: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "#EDBDBA",
    marginHorizontal: "1%",
    borderRadius: 40,
    width: 110,
    height: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "#FFF5EF",
    marginHorizontal: "1%",
    borderRadius: 40,
    width: 110,
    height: 40,
  },
  buttonSelected2: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "#EDBDBA",
    marginHorizontal: "1%",
    borderRadius: 40,
    width: 70,
    height: 40,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "#FFF5EF",
    marginHorizontal: "1%",
    borderRadius: 40,
    width: 70,
    height: 40,
  },
  buttonSelected3: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "#EDBDBA",
    marginHorizontal: "2%",
    borderRadius: 40,
    width: 150,
    height: 40,
  },
  button3: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "#FFF5EF",
    marginHorizontal: "2%",
    borderRadius: 40,
    width: 150,
    height: 40,
  },
  text: {
    fontWeight: "300",
    fontSize: 16,
    color: "#000000",
    fontFamily: "WorkSans-Regular",
    letterSpacing: 1,
  },
  textSelected: {
    paddingTop: 40,
    fontWeight: "300",
    fontSize: 16,
    color: "#000000",
    fontFamily: "WorkSans-Regular",
  },
  headertext: {
    fontWeight: "300",
    fontSize: 20,
    letterSpacing: 1,
    color: "#000000",
    fontFamily: "WorkSans-Regular",
  },
};