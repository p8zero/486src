import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, ScrollView} from "react-native";

export default SimilarityWithMainCharacter = ({id, matchedDocument, matchedUserDetails, thisNarrative, narrativeDetails, persona, thisPersona}) =>{
  const { mainChar } = narrativeDetails;
  const Persona_Info_New = [
    {
        id: '0',
        question: `${mainChar} usually works hard and put a lot of effort into achieving my goals`,
        yes: `${mainChar} is usually diligent and work hard. `,
        no: `${mainChar} doesn't always work very hard. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Industriousness/Diligence',
    },
    {
        id: '1',
        question: `${mainChar} likes to be organized, have routines and often pay attention to details`,
        yes: `${mainChar} is usually very organized and detail oriented. `,
        no: `${mainChar} can be unorganized at times and tend to miss details. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Orderliness/Organization',
    },
    {
        id: '2',
        question: `${mainChar} is often motivated by success and have a desire to show people how capable ${mainChar} is`,
        yes: `${mainChar} wants to be successful and is constantly trying to achieve. `,
        no: `Being successful isn't typically something ${mainChar} is motivated by.`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Achivement',
    },
    {
        id: '3',
        question: `Obtaining wealth and high social status is something that ${mainChar} really wants`,
        yes: `${mainChar} cares a lot about being wealthy and having high social status. `,
        no: `${mainChar} doesn't really care that much about being wealthy and having a high social status. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Resources',
    },
    {
        id: '4',
        question: `${mainChar} tends to make friends easily and like to spend my time with people`,
        yes: `${mainChar} is usually very friendly and outgoing. `,
        no: `${mainChar} can be hard to get to know and tend to be a private person. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Enthusiasm/Liveliness',
    },
    {
        id: '5',
        question: `${mainChar} is often looking for new and exciting things to do`,
        yes: `${mainChar} is constantly drawn towards finding new and exciting experiences. `,
        no: `${mainChar} doesn't go out of my way to look for new experiences. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Stimulation',
    },
    {
        id: '6',
        question: `${mainChar} is often looking to have a good time, be comfortable and enjoy my life`,
        yes: `${mainChar} is often looking good time or finding ways to enjoy my life. `,
        no: `Having a good time and enjoying my life aren't things ${mainChar} tends to go looking for. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: `Hedonism`,
    },
    {
        id: '7',
        question: `${mainChar} tends to say what ${mainChar} thinks and often try to take the lead`,
        yes: `${mainChar} tends to have a strong personality and ${mainChar} usually says what's on my mind. `,
        no: `${mainChar} finds it hard to say what ${mainChar} thinks and usually let other people make the decisions. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: `Assertiveness`,
    },
    {
        id: '8',
        question: `${mainChar} is often motivated by authority, influence and for others to do what ${mainChar} says`,
        yes: `Having people to do what ${mainChar} wants and gaining influence over them is something ${mainChar} typically wants. `,
        no: `${mainChar} doesn't really have much desire to gain influence over people or have them do what ${mainChar} wants. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dominance',
    },
    {
        id: '9',
        question: `${mainChar} typically gets frustrated easy and can lose my temper at times`,
        yes: `${mainChar} has a hard time managing my frustrations and temper. `,
        no: `${mainChar} is usually calm under pressure and rarely get irritated. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Volatility',
    },
    {
        id: '10',
        question: `${mainChar} might take advantage of people or pretend to be something ${mainChar} is not, especially when it benefits ${mainChar}`,
        yes: `${mainChar} can be dishonest or insincere when it might benefit ${mainChar}. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dishonesty',
    },
    {
        id: '11',
        question: `${mainChar} tends to care about my reputation and will try hard to avoid being embarrased`,
        yes: `${mainChar} cares about my reputation and how ${mainChar} looks to other people. `,
        no: `${mainChar} is not that concerned with my reputation and how ${mainChar} looks to other people. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Face',
    },
    {
      id: '12',
      question: `${mainChar} probably wouldn't cheat or lie to get what ${mainChar} wants, even if ${mainChar} could get away with it`,
      yes: `${mainChar} tends to be honest and sincere, even when no one is watching. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Honesty',
  },
  {
      id: '13',
      question: `${mainChar} doesn't like to think of myself as better than others and want to stay humble`,
      yes: `${mainChar} usually tries to be as modest and humble as ${mainChar} can. `,
      no: `${mainChar} doesn't usually go out of my way to ensure that ${mainChar} is being modest or humble. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Humility',
  },
    {
        id: '14',
        question: `${mainChar} is usually concerned about the needs of others and ${mainChar} tries to forgive and forget`,
        yes: `${mainChar} tries to be as kind and forgiving of others as ${mainChar} can be. `,
        no: `${mainChar} tends not to care about others and ${mainChar} is prone to holding grudges. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Compassion/Forgiveness',
    },
    {
        id: '15',
        question: `${mainChar} usually cares about the well-being of the people that ${mainChar} is close with`,
        yes: `${mainChar} tries to my best to care for the people in my life. `,
        no: `${mainChar} is not always motivated to care for the well-being of the people in my life.`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Caring',
    },
    {
        id: '16',
        question: `${mainChar} cares about being loyal, dependable and trustworthy to the people close to ${mainChar}`,
        yes: `${mainChar} tries my best to be loyal, dependable and trustworthy to those ${mainChar} is close with. `,
        no: `${mainChar} doesn't usually go out of my way to be loyal and dependable to the people ${mainChar} is close with. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dependability',
    },
    {
        id: '17',
        question: `${mainChar} doesn't typically criticize others and is usually easy to reason with`,
        yes: `${mainChar} is usually polite and easy to reason with. `,
        no: `${mainChar} can be rude at times and can be difficult to reason with. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Politeness/Flexibility',
    },
    {
        id: '18',
        question: `${mainChar} tends to not want to upset anyone or do anything people would disapprove of`,
        yes: `${mainChar} tries my best to not upset anyone or cause any conflict. `,
        no: `${mainChar} is not always motivated to avoid upsetting others or avoid causing conflict. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Interpersonal',
    },
    {
        id: '19',
        question: `Feeling secure and avoiding potential dangers is usually very important to ${mainChar}`,
        yes: `${mainChar} tends to care about my personal safety and security. `,
        no: `${mainChar} doesn't usually care that much about my personal safety and security. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Personal Security',
    },
    {
        id: '20',
        question: `${mainChar} typically feels anxious and is easily discouraged`,
        yes: `${mainChar} has a hard time managing my anxieties and worries. `,
        no: `${mainChar} is usually confident and rarely feel worried`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Withdrawal / Anxiety',
    },
    {
        id: '21',
        question: `It's important to ${mainChar} that ${mainChar} can form my own opinions and learn things for myself`,
        yes: `${mainChar} wants to be able to think freely and form my own opinions. `,
        no: `${mainChar} is not that concerned with having my ideas or opinions. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Thought',
    },
    {
        id: '22',
        question: `${mainChar} tends to learn things quickly and like to solve complex problems`,
        yes: `${mainChar} tends to understand things quickly and is drawn to complex problems. `,
        no: `${mainChar} usually learn things slowly and have a hard time understanding complex ideas. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Intellect',
    },
    {
        id: '23',
        question: `${mainChar} usually has a vivid imagination and tend to look for deeper meaning in things`,
        yes: `${mainChar} has a vivid imagination and like to look for deeper meaning in things. `,
        no: `${mainChar} doesn't have a vivid imagination and rarely look for deeper meaning in things. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Creativity',
    },
    {
        id: '24',
        question: `It's important to ${mainChar} that ${mainChar} makes my own decisions and have the freedom to choose what ${mainChar} does`,
        yes: `${mainChar} really cares about being able to make my own decisions and choices. `,
        no: `It's not that important to ${mainChar} that ${mainChar} makes my own decisions and choices. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Action',
    },
    {
        id: '25',
        question: `It's important to ${mainChar} that my society or country protects itself against all threats`,
        yes: `${mainChar} tends to care about whether or not my society or country is protecting itself against threats. `,
        no: `${mainChar} doesn't usually care too much about whether or not my society or country is protecting itself. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Societal Security',
    },
    {
        id: '26',
        question: `Maintaining the traditional values and customs of my family, culture or religion is important to ${mainChar}`,
        yes: `${mainChar} wants to maintain the traditional values and practices of my family, culture or religion. `,
        no: `${mainChar} doesn't really care to follow or maintain traditional values and practices. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Tradition',
    },
    {
        id: '27',
        question: `It's important that ${mainChar} follows the rules and do what people in authority say`,
        yes: `${mainChar} tends to care about following the rules and doing what people in authority say.  `,
        no: `${mainChar} doesn't really care that much about following the rules or doing what people in authority say. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Rules',
    },
    {
        id: '28',
        question: `It's important to ${mainChar} that everyone is treated justly and that the weak and vulnerable are protected`,
        yes: `${mainChar} tends to care about the weak and vulnerable in society and for everyone be treated justly. `,
        no: `${mainChar} doesn't tend to concern myself about whether or not everyone in society is treated justly. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Concern',
    },
    {
        id: '29',
        question: `It's important to ${mainChar} that ${mainChar} is tolerant and understanding towards people who are different than ${mainChar}. `,
        yes: `${mainChar} tends to be tolerant and understanding towards people who are different than ${mainChar}. `,
        no: `${mainChar} doesn't go out of my way to be tolerant and understanding towards people who are different than ${mainChar}. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Tolerance',
    },
    {
        id: '30',
        question: `It's important to ${mainChar} that the natural environment is protected and taken care of`,
        yes: `${mainChar} tends to care about protecting the natural environment. `,
        no: `${mainChar} doesn't tend to concern myself with the protection of the natural environment. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Nature',
    },
  ]

  const [similarityHandler, setSimilarityHandler] = useState(null);

    function listToDict(strings) {
        const dict = {};
        for (let i = 0; i < strings.length; i++) {
          dict[strings[i]] = 'normal';
        }
        return dict;
    }

    function tokenizeString(str) {
        // Remove punctuation and convert to lowercase
        str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        // Tokenize the string into words
        return str.split(/\s+/);
    }
    
    function calculateJaccardSimilarity(str1, str2) {
        const words1 = new Set(tokenizeString(str1));
        const words2 = new Set(tokenizeString(str2));
        
        const intersectionSize = [...words1].filter(word => words2.has(word)).length;
        const unionSize = words1.size + words2.size - intersectionSize;
        
        const similarity = intersectionSize / unionSize;
        return similarity;
    }

    function findSimilarities(str1, str2) {
        const handle = listToDict(str1.split('"'));
        const listOfStrings1 = str1.split('"');
        const txt = str2.split('"').filter(substring => !substring.includes('\n'));

        for(let i=0; i < listOfStrings1.length ; i++){
            if(!listOfStrings1[i].includes('\n')){
                for(let j=0;j<txt.length;j++){
                    if(calculateJaccardSimilarity(listOfStrings1[i], txt[j]) > 0.8){
                        handle[listOfStrings1[i]] = 'bold';
                        break;
                    }
                }
            }
        }
        return handle;
    }

  useEffect(()=> {
    setSimilarityHandler(findSimilarities(charDescription, thisCharDescription));
    console.log(similarityHandler);
  },[])

const dataToText = (data) => {
  const ranges = [4, 7, 12, 14, 19, 21, 25, 28, 31];
  const rangeTitle =  ["Achievement, Success & Status", "Sociable & Experiencing Life", "Power, Authority & Assertiveness", "Honesty & Humility", "Kindness & Politeness", "Safety & Stability", "Thought & Independence", "Tradition & Order", "Equality & Justice"] 
  let idxRange = 0;
  let anyVal = false;
    let text = rangeTitle[0] + "\n\n";
  for (let i = 0; i < Persona_Info_New.length; i++) { 
    if (i>=ranges[idxRange]) {
      idxRange++;
     if (!anyVal) {
       text += "...";
      }
      anyVal = false;
      text = text.concat("\n\n");
      text += rangeTitle[idxRange] +"\n\n";
    }
    if(data != undefined){
      if (data[i]==0) {
        text = text.concat(`"${Persona_Info_New[i].no}"`, "");
        anyVal = true;
      } else if (data[i]==1) {
        text = text.concat(`"${Persona_Info_New[i].yes}"`, "");
        anyVal = true;
      } else {
       // text += "Data val" + data[i];
      }
    }
    
    
  }
  if (!anyVal) {
    text += "...";
}


  return text;
};

const [charDescription, setCharDescription] = useState(dataToText(persona.traits));
const [thisCharDescription, setThisCharDescription] = useState(dataToText(thisPersona.traits));


  if(similarityHandler == null){
    return(
      <View style={styles.main_container}>
          <View style={styles.top_buttons_container}>
              <Text></Text>
          </View>
          <View style={styles.textContainer}>
              <Text style={styles.text}>Main Character Similarity With {narrativeDetails.mainChar}</Text>
          </View>
          <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 200}}>
            <Text style={styles.narrationText}>{dataToText(persona.traits)}</Text>
          </ScrollView>
      </View>
    )
  }

  return(
    <View style={styles.main_container}>
        <View style={styles.top_buttons_container}>
            <Text></Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Narration Similarity With {narrativeDetails.mainChar}</Text>
        </View>
        <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 200}}>
            <Text style={styles.titleStyle2}> {narrativeDetails.title} </Text>
            <View>
                {charDescription.split('"').map((section, index) => {
                    if(similarityHandler[section] == 'bold'){
                        return (<Text key={index} style={styles.boldText}>{`${section}`}</Text>)
                    }
                    if(!section.includes('\n')){
                        return (<Text key={index} style={styles.normalText}>{`${section}`}</Text>)
                    }
                    if(section.trim().length != 0){
                      return (<Text key={index} style={styles.narrationText}>{section}</Text>)
                    }
                })}
            </View>
        </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#FFF5EF',
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 0,
  },

  top_buttons_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '7%',
  },

  overview_container: {
    alignItems: 'center',
    marginRight: '10%',
  },

  options_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40
  },

  narrationText: {
      fontFamily: 'WorkSans-Light', 
      fontSize: 19, 
      color:'#18163A',
      fontWeight: '300',
      textDecorationLine: 'underline', 
      letterSpacing: 1, 
      marginTop: '5%',
      marginHorizontal: '5%'
  },
  normalText: {
      fontFamily: 'WorkSans-Light', 
      fontSize: 17, 
      color:'#18163A',
      fontWeight: '300', 
      letterSpacing: 1, 
      marginTop: '2%',
      marginHorizontal: '5%'
  },
  boldText: {
      fontFamily: 'WorkSans-Light', 
      fontSize: 17, 
      color:'#18163A',
      fontWeight: 'bold', 
      letterSpacing: 1, 
      marginTop: '2%',
      marginHorizontal: '5%'
  },

  text: {
    fontFamily: 'WorkSans-Light',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 2,
    color:'#18163A'
  },

  textSelected: {
    fontFamily: 'WorkSans-Light',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 4,
    color: '#18163A'
  },

  scoreBox: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F3777E'
  },
  score: {
    color: '#FFFFFF',
    fontSize: 20
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
});