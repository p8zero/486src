import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

const OverviewTab = ({data}) => {

  const Persona_Info_New = [
    {
        id: '0',
        question: `I usually work hard and put a lot of effort into achieving my goals`,
        yes: `I'm usually diligent and work hard. `,
        no: `I don't always work very hard. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Industriousness/Diligence',
    },
    {
        id: '1',
        question: `I like to be organized, have routines and often pay attention to details`,
        yes: `I'm usually very organized and detail oriented. `,
        no: `I can be unorganized at times and tend to miss details. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Orderliness/Organization',
    },
    {
        id: '2',
        question: `I'm often motivated by success and have a desire to show people how capable I am`,
        yes: `I want to be successful and am constantly trying to achieve. `,
        no: `Being successful isn't typically something I'm motivated by.`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Achivement',
    },
    {
        id: '3',
        question: `Obtaining wealth and high social status is something that I really want`,
        yes: `I care a lot about being wealthy and having high social status. `,
        no: `I don't really care that much about being wealthy and having a high social status. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Resources',
    },
    {
        id: '4',
        question: `I tend to make friends easily and like to spend my time with people`,
        yes: `I'm usually very friendly and outgoing. `,
        no: `I can be hard to get to know and tend to be a private person. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Enthusiasm/Liveliness',
    },
    {
        id: '5',
        question: `I'm often looking for new and exciting things to do`,
        yes: `I'm constantly drawn towards finding new and exciting experiences. `,
        no: `I don't go out of my way to look for new experiences. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Stimulation',
    },
    {
        id: '6',
        question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
        yes: `I'm often looking good time or finding ways to enjoy my life. `,
        no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: `Hedonism`,
    },
    {
        id: '7',
        question: `I tend to say what I think and often try to take the lead`,
        yes: `I tend to have a strong personality and I usually say what's on my mind. `,
        no: `I find it hard to say what I think and usually let other people make the decisions. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: `Assertiveness`,
    },
    {
        id: '8',
        question: `I'm often motivated by authority, influence and for others to do what I say`,
        yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
        no: `I don't really have much desire to gain influence over people or have them do what I want. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dominance',
    },
    {
        id: '9',
        question: `I typically get frustrated easily and can lose my temper at times`,
        yes: `I have a hard time managing my frustrations and temper. `,
        no: `I'm usually calm under pressure and rarely get irritated. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Volatility',
    },
    {
        id: '10',
        question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
        yes: `I can be dishonest or insincere when it might benefit me. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dishonesty',
    },
    {
        id: '11',
        question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
        yes: `I care about my reputation and how I look to other people. `,
        no: `I'm not that concerned with my reputation and how I look to other people. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Face',
    },
    {
      id: '12',
      question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
      yes: `I tend to be honest and sincere, even when no one is watching. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Honesty',
  },
  {
      id: '13',
      question: `I don't like to think of myself as better than others and want to stay humble`,
      yes: `I usually try to be as modest and humble as I can. `,
      no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Humility',
  },
    {
        id: '14',
        question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
        yes: `I try to be as kind and forgiving of others as I can be. `,
        no: `I tend not to care about others and I'm prone to holding grudges. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Compassion/Forgiveness',
    },
    {
        id: '15',
        question: `I usually care about the well-being of the people that I'm close with`,
        yes: `I try to my best to care for the people in my life. `,
        no: `I'm not always motivated to care for the well-being of the people in my life.`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Caring',
    },
    {
        id: '16',
        question: `I care about being loyal, dependable and trustworthy to the people close to me`,
        yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
        no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dependability',
    },
    {
        id: '17',
        question: `I don't typically criticize others and am usually easy to reason with`,
        yes: `I'm usually polite and easy to reason with. `,
        no: `I can be rude at times and can be difficult to reason with. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Politeness/Flexibility',
    },
    {
        id: '18',
        question: `I tend to not want to upset anyone or do anything people would disapprove of`,
        yes: `I try my best to not upset anyone or cause any conflict. `,
        no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Interpersonal',
    },
    {
        id: '19',
        question: `Feeling secure and avoiding potential dangers is usually very important to me`,
        yes: `I tend to care about my personal safety and security. `,
        no: `I don't usually care that much about my personal safety and security. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Personal Security',
    },
    {
        id: '20',
        question: `I typically feel anxious and am easily discouraged`,
        yes: `I have a hard time managing my anxieties and worries. `,
        no: `I'm usually confident and rarely feel worried`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Withdrawal / Anxiety',
    },
    {
        id: '21',
        question: `It's important to me that I can form my own opinions and learn things for myself`,
        yes: `I want to be able to think freely and form my own opinions. `,
        no: `I'm not that concerned with having my ideas or opinions. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Thought',
    },
    {
        id: '22',
        question: `I tend to learn things quickly and like to solve complex problems`,
        yes: `I tend to understand things quickly and am drawn to complex problems. `,
        no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Intellect',
    },
    {
        id: '23',
        question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
        yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
        no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Creativity',
    },
    {
        id: '24',
        question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
        yes: `I really care about being able to make my own decisions and choices. `,
        no: `It's not that important to me that I make my own decisions and choices. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Action',
    },
    {
        id: '25',
        question: `It's important to me that my society or country protects itself against all threats`,
        yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
        no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Societal Security',
    },
    {
        id: '26',
        question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
        yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
        no: `I don't really care to follow or maintain traditional values and practices. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Tradition',
    },
    {
        id: '27',
        question: `It's important that I follow the rules and do what people in authority say`,
        yes: `I tend to care about following the rules and doing what people in authority say.  `,
        no: `I don't really care that much about following the rules or doing what people in authority say. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Rules',
    },
    {
        id: '28',
        question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
        yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
        no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Concern',
    },
    {
        id: '29',
        question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
        yes: `I tend to be tolerant and understanding towards people who are different than me. `,
        no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Tolerance',
    },
    {
        id: '30',
        question: `It's important to me that the natural environment is protected and taken care of`,
        yes: `I tend to care about protecting the natural environment. `,
        no: `I don't tend to concern myself with the protection of the natural environment. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Nature',
    },
]

useEffect(()=> {
},[])

const dataToText = () => {
  const ranges = [4, 7, 12, 14, 19, 21, 25, 28, 31];
  const rangeTitle =  ["Achievement, Success & Status", "Sociable & Experiencing Life", "Power, Authority & Assertiveness", "Honesty & Humility", "Kindness & Politeness", "Safety & Stability", "Thought & Independence", "Tradition & Order", "Equality & Justice"] 
  let idxRange = 0;
  let anyVal = false;
    let text = rangeTitle[0] + "\n\n";
  for (let i = 0; i < Persona_Info_New.length; i++) { 
    if (i>=ranges[idxRange]) {
      idxRange++;
     if (!anyVal) {
       text += "Not Sure How to Answer This";
      }
      anyVal = false;
      text = text.concat("\n\n");
      text += rangeTitle[idxRange] +"\n\n";
    }
    if (data[i]==0) {
      text = text.concat(Persona_Info_New[i].no, "");
      anyVal = true;
    } else if (data[i]==1) {
      text = text.concat(Persona_Info_New[i].yes, "");
      anyVal = true;
    } else {
     // text += "Data val" + data[i];
    }
  }
  if (!anyVal) {
    text += "Not Sure How to Answer This";
}
  return text;
};

  return (
    <View style={styles.main_container}>
      
      <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 200}}>
        <View style={{}}>
          <Text style={{
          flex:1,
          fontFamily: 'WorkSans-Light', 
          fontSize: 17, 
          color:'#18163A',
          fontWeight: '300', 
          letterSpacing: 1, 
          marginTop: '5%',
          marginHorizontal: '5%'}}>
            {dataToText()}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    marginTop: '5%',
    backgroundColor: '#FFF5EF',
  },
  button: {
    marginTop: 20,
    width: "50%",
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  scroll_container:{
    alignItems: "center",
  },

  text: {
    marginTop: 40
  },

  text_container: {
    alignItems: "center",
  },
});

export default OverviewTab;
