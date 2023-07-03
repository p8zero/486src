import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CreateProfilePersonas from "./createProfilePersonas";
import Animated from "react-native-reanimated";
import CustomButtonPersonas from "../../components/Personas/customButtonPg1Personas";
import BackButtonPersona from "../../components/backButtonPersona";
import Ionicons from "react-native-vector-icons/Ionicons";
import firestore from "@react-native-firebase/firestore";
import Feather from "react-native-vector-icons/Feather";
import UserIcon from "../../components/UserIcon";
import { StackActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { out } from "react-native/Libraries/Animated/Easing";
import { AuthContextNew } from "../../navigation/authProvider";
import { Mixpanel } from 'mixpanel-react-native';


const FinalCustomPersona = ({ navigation, route }) => {
  const { data, PersonName, age, gender, id, path } = route.params;
  const Persona_Info_New = [
    {
      id: '0',
      question: `${PersonName} works hard and puts a lot of effort into achieving their goals`,
      yes: `A diligent and hard workering person. `,
      no: `Not the most hard working person. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Industriousness/Diligence',
  },
  {
      id: '1',
      question: `${PersonName} is organized, likes routine and pays attention to details`,
      yes: `Tends to be organized and detail oriented. `,
      no: `Not the most organized and detail oriented person. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Orderliness/Organization',
  },
  {
      id: '2',
      question: `${PersonName} is driven to be successful and show how capable they are`,
      yes: `Wants to be successful and constantly working to achieve. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Achivement',
  },
  {
      id: '3',
      question: `${PersonName} strives to be wealthy and have high social status`,
      yes: `Has a real desire to be wealthy and a member of the social elite. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Resources',
  },
  {
      id: '4',
      question: `${PersonName} makes friends easily and likes to spend their time with other people`,
      yes: `Very friendly and outgoing. `,
      no: `Can be hard to get to know and tends to be a private person. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Enthusiasm/Liveliness',
  },
  {
      id: '5',
      question: `${PersonName} is often looking for exciting and different things to do`,
      yes: `Really needs stimulation and is drawn towards new challenges and experiences. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Stimulation',
  },
  {
      id: '6',
      question: `${PersonName} is often looking to have a good time, be comfortable and enjoy their life `,
      yes: `Looks to have a good time and prioritizes the enjoyment of life. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: `Hedonism`,
  },
  {
      id: '7',
      question: `${PersonName} boldly expresses their opinions and often takes the lead`,
      yes: `Has a strong personality and says what is on their mind. `,
      no: `Finds it difficult to say what they think and lets others make the decisions. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: `Assertiveness`,
  },
  {
      id: '8',
      question: `${PersonName} desires authority, influence and to have others do what they say`,
      yes: `Wants to have power and influence. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Dominance',
  },
  {
      id: '9',
      question: `${PersonName} easily gets frustrated and can lose their temper`,
      yes: `Has a hard time managing their frustrations and temper. `,
      no: `Usually calm under pressure and rarely gets irritated. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Volatility',
  },
  {
      id: '10',
      question: `${PersonName} is generally a dishonest, insincere person and would use deceptive means to get what they want`,
      yes: `Generally dishonest and insincere. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Dishonesty',
  },
  {
      id: '11',
      question: `${PersonName} cares about maintaining their reputation and avoiding public embarrassment`,
      yes: `Cares deeply about how they look to people. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Face',
  },
  {
    id: '12',
    question: `${PersonName} is a generally an honest, honorable person and would not break the rules to get what they want`,
    yes: `Generally honest and honorable. `,
    no: ``,
    selectedN: false,
    selectedY: false,
    selectedNS: false,
    facet: 'Honesty',
},
{
    id: '13',
    question: `${PersonName} strives to be humble and to not think of themselves as better than others`,
    yes: `Modest and humble. `,
    no: ``,
    selectedN: false,
    selectedY: false,
    selectedNS: false,
    facet: 'Humility',
},
  {
      id: '14',
      question: `${PersonName} is concerned about the needs of others and tries to forgive and forget`,
      yes: `Typically a kind and forgiving person. `,
      no: `Doesn't really care about others and holds grudges. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Compassion/Forgiveness',
  },
  {
      id: '15',
      question: `${PersonName} cares about the well-being of the people in their life`,
      yes: `Really wants to be there for the people in their life. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Caring',
  },
  {
      id: '16',
      question: `${PersonName} strives to be dependable and trustworthy to the people in their life`,
      yes: `Generally a loyal and dependable person. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Dependability',
  },
  {
      id: '17',
      question: `${PersonName} doesn't usually criticize others and is easy to reason with`,
      yes: `Is polite and easy to reason with. `,
      no: `Can be critical, impolite and difficult to reason with. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Politeness/Flexibility',
  },
  {
      id: '18',
      question: `${PersonName} wants to avoid upsetting others or doing anything people would disapprove of`,
      yes: `Doesn't want to upset anyone or cause any conflict. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Interpersonal',
  },
  {
      id: '19',
      question: `${PersonName} cares about feeling safe and secure and will tend to avoid potential dangers`,
      yes: `Really cares about feeling safe and secure. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Personal Security',
  },
  {
      id: '20',
      question: `${PersonName} gets caught up in their problems and often feels worried or anxious`,
      yes: `Often feels worried or anxious. `,
      no: `Is usually confident and rarely feels worried or anxious`,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Withdrawal / Anxiety',
  },
  {
      id: '21',
      question: `${PersonName} wants to be able to think freely and form their own opinions`,
      yes: `Wants to be able to think freely and form their own opinions. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Thought',
  },
  {
      id: '22',
      question: `${PersonName} is constantly learning new things and is interested in abstract ideas`,
      yes: `Really likes to learn new things and explore abstract ideas. `,
      no: `Doesn't really enjoy exploring theoretical or abstract ideas. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Intellect',
  },
  {
      id: '23',
      question: `${PersonName} has quite creative and different than most people.`,
      yes: `Quite a creative and unique person. `,
      no: `A normal person and doesn't do a lot of creative things. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Creativity',
  },
  {
      id: '24',
      question: `${PersonName} wants to be independent and to be able to make their own decisions`,
      yes: `Really wants to be independent and make their own decisions. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Action',
  },
  {
      id: '25',
      question: `${PersonName} cares about the security and stability of their society`,
      yes: `Cares a lot about ensuring that their society is safe and stable. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Societal Security',
  },
  {
      id: '26',
      question: `${PersonName} maintains and follows the traditions of their religion or culture`,
      yes: `Follows and maintains their religious or cultural traditions. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Tradition',
  },
  {
      id: '27',
      question: `${PersonName} is about following the rules and doing what the people in authority say to do`,
      yes: `Really cares about the rules and making sure they are followed.  `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Rules',
  },
  {
      id: '28',
      question: `${PersonName} cares about protection for the vulnerable in society and for everyone to be treated equality`,
      yes: `Cares a lot about seeing equality and justice in society. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Concern',
  },
  {
      id: '29',
      question: `${PersonName} is about having peace, acceptance and understanding between all peoples. `,
      yes: `Wants peace and for everyone to be accepted and understood. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Tolerance',
  },
  {
      id: '30',
      question: `${PersonName} cares about the well-being and protection of the natural environment`,
      yes: `Cares a lot about the natural environment`,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Nature',
  },
  ];
  const { user } = useContext(AuthContextNew);

  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  //correlate array data with traits and generates a string
  const dataToText = () => {
    const ranges = [4, 7, 12, 14, 19, 21, 25, 28, 31];
    const rangeTitle = [
      "Achievement, Success & Status",
      "Sociable & Experiencing Life",
      "Power, Authority & Assertiveness",
      "Honesty & Humility",
      "Kindness & Politeness",
      "Safety & Stability",
      "Thought & Independence",
      "Tradition & Order",
      "Equality & Justice",
    ];

    let idxRange = 0;
    let anyVal = false;
    let text = rangeTitle[0] + "\n\n";
    for (let i = 0; i < Persona_Info_New.length; i++) {
      if (i >= ranges[idxRange]) {
        idxRange++;
        anyVal = false;
        text = text.concat("\n\n");
        text += rangeTitle[idxRange] + "\n\n";
      }
      if (data[i] == 0) {
        text = text.concat(Persona_Info_New[i].no, "");
        anyVal = true;
      } else if (data[i] == 1) {
        text = text.concat(Persona_Info_New[i].yes, "");
        anyVal = true;
      }
    }

    return text;
  };

  const pushTraitsToFirebase = () => {
    firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Personas")
      .doc(id)
      .update({
        traits: data,
      })
      .then(() => {
        console.log("Done pushing to firebase");
      })
      .catch((e) => {
        console.log(`submit survey Error ${e}`);
      });
  };

  const handleDone = () => {
    console.log(data);

    pushTraitsToFirebase();

    switch (path) {
      case 1:
        navigation.popToTop();
        break;
      case 2:
        navigation.pop(2);
        break;
      default:
        navigation.pop(3);
    }
  };


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#9cc8C6",
      }}
    >
      <View
        style={{
          marginTop: "13%",
          marginLeft: "2.5%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BackButtonPersona
          label={"back button"}
          onPress={() => navigation.pop()}
          icon={
            <Ionicons name="chevron-back-outline" size={24} color="#18163A" />
          }
        />
      </View>

      <View
        style={{
          flex: 1,
          marginTop: "8%",
          backgroundColor: "#FFF5EF",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 50,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: "5%", marginTop: '5%' }}>
            <UserIcon
              userName={PersonName}
              inColor={"#FFF5EF"}
              outColor={"#18163A"}
              size={70}
              fontSize={35}
            />
          </View>

          <View>
            <Text
              style={{
                fontFamily: "WorkSans-Thin",
                fontSize: 24,
                fontWeight: "300",
                marginLeft: "15%",
                color: "#18163A",
              }}
            >
              {PersonName}'s Persona
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_HEIGHT,
            marginHorizontal: "5%",
            marginBottom: "5%",
            marginTop: "5%",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontFamily: "Worksans-Thin",
                fontSize: 18,
                fontWeight: "300",
                letterSpacing: 0,
                color: "#18163A",
              }}
            >
              {dataToText()}
            </Text>
          </ScrollView>
        </View>
        <View style={{ alignItems: "flex-end", marginBottom: "10%" }}>
          <TouchableOpacity
            onPress ={() => {
              handleDone();
              mixpanel.track("Persona Creation");
              mixpanel.track("Persona_Custom_Common_End");
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              backgroundColor: "#9cc8C6",
              width: 150,
              height: 50,
            }}
          >
            <Text
              style={{
                color: "#18163A",
                fontSize: 20,
                fontFamily: "WorkSans-Thin",
                fontWeight: "300",
                letterSpacing: 3,
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default FinalCustomPersona;
