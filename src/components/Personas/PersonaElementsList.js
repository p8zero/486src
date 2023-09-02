import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const PersonaElementList = props => {
  const newPers = props.PersonName;
  const id = props.id;
  const gender = props.gender;
  const age = props.age;
  const path = props.path;
  const data = props.data

  const Persona_Info_New = [
    {
        id: '0',
        question: `Usually works hard and puts a lot of effort into achieving their goals`,
        yes: `I'm usually diligent and work hard. `,
        no: `I don't always work very hard. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Industriousness/Diligence',
    },
    {
        id: '1',
        question: `Likes to be organized, has routines and often pay attention to details`,
        yes: `I'm usually very organized and detail oriented. `,
        no: `I can be unorganized at times and tend to miss details. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Orderliness/Organization',
    },
    {
        id: '2',
        question: `Often motivated by success and has a desire to show people how capable they are`,
        yes: `I want to be successful and am constantly trying to achieve. `,
        no: `Being successful isn't typically something I'm motivated by.`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Achivement',
    },
    {
        id: '3',
        question: `Obtaining wealth and high social status is something that they really want`,
        yes: `I care a lot about being wealthy and having high social status. `,
        no: `I don't really care that much about being wealthy and having a high social status. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Resources',
    },
    {
        id: '4',
        question: `Tends to make friends easily and likes to spend time with people`,
        yes: `I'm usually very friendly and outgoing. `,
        no: `I can be hard to get to know and tend to be a private person. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Enthusiasm/Liveliness',
    },
    {
        id: '5',
        question: `Is often looking for new and exciting things to do`,
        yes: `I'm constantly drawn towards finding new and exciting experiences. `,
        no: `I don't go out of my way to look for new experiences. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Stimulation',
    },
    {
        id: '6',
        question: `Is often looking to have a good time, be comfortable and enjoy life`,
        yes: `I'm often looking good time or finding ways to enjoy my life. `,
        no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: `Hedonism`,
    },
    {
        id: '7',
        question: `Tends to say what they think and often tries to take the lead`,
        yes: `I tend to have a strong personality and I usually say what's on my mind. `,
        no: `I find it hard to say what I think and usually let other people make the decisions. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: `Assertiveness`,
    },
    {
        id: '8',
        question: `Is often motivated by authority, influence and for others to do what they say`,
        yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
        no: `I don't really have much desire to gain influence over people or have them do what I want. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dominance',
    },
    {
        id: '9',
        question: `Can get frustrated easily and can lose their temper at times`,
        yes: `I have a hard time managing my frustrations and temper. `,
        no: `I'm usually calm under pressure and rarely get irritated. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Volatility',
    },
    {
        id: '10',
        question: `Might take advantage of people or pretend to be something they are not, especially when it benefits them`,
        yes: `I can be dishonest or insincere when it might benefit me. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dishonesty',
    },
    {
        id: '11',
        question: `Tends to care about their reputation and will try hard to avoid being embarrased`,
        yes: `I care about my reputation and how I look to other people. `,
        no: `I'm not that concerned with my reputation and how I look to other people. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Face',
    },
    {
      id: '12',
      question: `Probably wouldn't cheat or lie to get what they want, even if they could get away with it`,
      yes: `I tend to be honest and sincere, even when no one is watching. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Honesty',
  },
  {
      id: '13',
      question: `Doesn't like to think of themselves as better than others and wants to stay humble`,
      yes: `I usually try to be as modest and humble as I can. `,
      no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Humility',
  },
    {
        id: '14',
        question: `Is usually concerned about the needs of others and tries to forgive and forget`,
        yes: `I try to be as kind and forgiving of others as I can be. `,
        no: `I tend not to care about others and I'm prone to holding grudges. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Compassion/Forgiveness',
    },
    {
        id: '15',
        question: `Usually cares about the well being of the people that they are close with`,
        yes: `I try to my best to care for the people in my life. `,
        no: `I'm not always motivated to care for the well-being of the people in my life.`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Caring',
    },
    {
        id: '16',
        question: `Cares about being loyal, dependable and trustworthy to the people close to them`,
        yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
        no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dependability',
    },
    {
        id: '17',
        question: `Doesn't typically criticize others and is usually easy to reason with`,
        yes: `I'm usually polite and easy to reason with. `,
        no: `I can be rude at times and can be difficult to reason with. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Politeness/Flexibility',
    },
    {
        id: '18',
        question: `Tends to not want to upset anyone or do anything people would disapprove of`,
        yes: `I try my best to not upset anyone or cause any conflict. `,
        no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Interpersonal',
    },
    {
        id: '19',
        question: `Feeling secure and avoiding potential dangers is usually very important to them`,
        yes: `I tend to care about my personal safety and security. `,
        no: `I don't usually care that much about my personal safety and security. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Personal Security',
    },
    {
        id: '20',
        question: `Typically feel anxious and is easily discouraged`,
        yes: `I have a hard time managing my anxieties and worries. `,
        no: `I'm usually confident and rarely feel worried`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Withdrawal / Anxiety',
    },
    {
        id: '21',
        question: `It's important to them that they form their own opinions and learn things for themselves`,
        yes: `I want to be able to think freely and form my own opinions. `,
        no: `I'm not that concerned with having my ideas or opinions. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Thought',
    },
    {
        id: '22',
        question: `Tends to learn things quickly and likes to solve complex problems`,
        yes: `I tend to understand things quickly and am drawn to complex problems. `,
        no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Intellect',
    },
    {
        id: '23',
        question: `Usually has a vivid imagination and tends to look for deeper meaning in things`,
        yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
        no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Creativity',
    },
    {
        id: '24',
        question: `It's important to them that they make their own decisions and have the freedom to choose`,
        yes: `I really care about being able to make my own decisions and choices. `,
        no: `It's not that important to me that I make my own decisions and choices. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Action',
    },
    {
        id: '25',
        question: `It's important to them that their society or country protects itself against all threats`,
        yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
        no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Societal Security',
    },
    {
        id: '26',
        question: `Maintaining the traditional values and customs of their family, culture or religion is important to them`,
        yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
        no: `I don't really care to follow or maintain traditional values and practices. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Tradition',
    },
    {
        id: '27',
        question: `It's important that they follow the rules and do what the people in authority say`,
        yes: `I tend to care about following the rules and doing what people in authority say.  `,
        no: `I don't really care that much about following the rules or doing what people in authority say. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Rules',
    },
    {
        id: '28',
        question: `It's important to them that everyone is treated justly and that the weak and vulnerable are protected`,
        yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
        no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Concern',
    },
    {
        id: '29',
        question: `It's important to them to be tolerant and understanding towards people who are different `,
        yes: `I tend to be tolerant and understanding towards people who are different than me. `,
        no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Tolerance',
    },
    {
        id: '30',
        question: `It's important to them that the natural environment is protected and taken care of`,
        yes: `I tend to care about protecting the natural environment. `,
        no: `I don't tend to concern myself with the protection of the natural environment. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Nature',
    },
]

  const [clicked, setClicked] = useState(
    new Array(Persona_Info_New.length).fill(0),
  );
  const [userData, setUserData] = useState(
    new Array(Persona_Info_New.length).fill(1),
  );

  const [index, setIndex] = useState(0);
  const navigation = useNavigation()
  const ref = useRef();

  useEffect(()=>{
    if(data.length > 0){
      let d = [0]
      for(i = 1; i < data.length; i++){
        d.push(data[i]+1)
      }
      setClicked(d)
      setUserData(data)
    }
    console.log('\n\n')
  }, [])

  //Handles clicks for each option
  const handleClicked = (item, val) => {
    //handles button styling (1,2,3)
    setClicked(prevState => {
      prevState[item] = val;
      return [...prevState];
    });

    //Handles userData updating [0,1,2] for each question
    setUserData(prevState => {
      if (val == 1) {
        prevState[item] = 0;
      }else if(val == 2){
        prevState[item] = 1;
      }else{
        prevState[item] = 2;
      }
      
      return [...prevState];
    });

    console.log('userData = ', userData)
    console.log('Clicked = ', clicked)

    //Increase after clicking an option
    if (index < Persona_Info_New.length-1) {
      setIndex(index + 1);
    }
  };

  const handlePrevData = () => {

  }

  //Handles BACK Button Click Event
  const backButton = () => {
    if (index == 0) {
      return;
    }
    setIndex(index - 1);
  };
  //Handles Next Button Click Event
  const nextButton = () => {
    if (index == Persona_Info_New.length-1) {
      navigation.navigate('FinalCustomPersona', {
        data: userData,
        PersonName: newPers,
        age: age,
        gender: gender,
        path: path,
        id: id
      });
      return;
    }
    setIndex(index + 1);
  };

  //Handles the scroll when buttons are clicked based on index increase
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
    });
  }, [index]);


  //Handles Text Change for when next reaches final question
  const handleNextButton = id => {
    if (id != Persona_Info_New.length-1) {
      return 'Next';
    }
    return 'Done';
  };

  //component for Progress Bar
  const ProgressBar = ({count}) => {
    const total = Persona_Info_New.length;
    const percent = ((count + 1) / total) * 100 + '%';
    return (
      <View style={{marginLeft: 20}}>
        <Text
          style={{
            fontFamily: 'WorkSans-Thin',
            fontWeight: '300',
            fontSize: 18,
            paddingBottom: 10,
            letterSpacing: 2,
            color: '#18163A',
          }}>
          Question {count + 1}/{total}
        </Text>

        <View
          style={{
            width: SCREEN_WIDTH*.85,
            height: 8,
            backgroundColor: '#FFF5ef',
            borderRadius: 40,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#18163A',
              borderRadius: 40,
              width: percent,
              height: '100%',
            }}></View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.listContainer}>
      <ProgressBar count={index} />
      <FlatList
        ref={ref}
        data={Persona_Info_New}
        extraData={clicked}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Text style={styles.label}>{item.question}</Text>
            <View style={styles.optionButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleClicked(item.id, 1);
                }}
                style={
                  clicked[item.id] == 1
                    ? styles.selectedOptionButton
                    : styles.optionButton
                }>
                <View>
                  <Text
                    style={
                      clicked[item.id] == 1
                        ? styles.optionButtonSelectedText
                        : styles.optionButtonText
                    }>
                    Not like {newPers}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleClicked(item.id, 2);
                }}
                style={
                  clicked[item.id] == 2
                    ? styles.selectedOptionButton
                    : styles.optionButton
                }>
                <View style={{}}>
                  <Text
                    style={
                      clicked[item.id] == 2
                        ? styles.optionButtonSelectedText
                        : styles.optionButtonText
                    }>
                    Sounds like {newPers}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleClicked(item.id, 3);
                }}
                style={
                  clicked[item.id] == 3
                    ? styles.selectedOptionButton
                    : styles.optionButton
                }>
                <View style={{}}>
                  <Text
                    style={
                      clicked[item.id] == 3
                        ? styles.optionButtonSelectedText
                        : styles.optionButtonText
                    }>
                    Not Sure
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.navigationContainer}>
              <TouchableOpacity
                style={item.id == 0 ? styles.hideBackButton : {}}
                onPress={backButton}
                disabled={item.id == 0 ? true : false}>
                <View style={[styles.backButton, styles.navigationButton]}>
                  <Text style={styles.NavigationText}>Back</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={nextButton}>
                <View style={[styles.nextButton, styles.navigationButton]}>
                  <Text style={styles.NavigationText}>
                    {handleNextButton(item.id)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: SCREEN_WIDTH*.85,
    height: 400,
    backgroundColor: '#FFF5EF',
    borderRadius: 30,
    alignItems: 'center',
    marginTop: '8%',
    margin: 20,
  },
  optionButtonText: {
    fontWeight: '300',
    fontSize: 18,
    letterSpacing: 0,
    color: '#18163A',
    fontFamily: 'Worksans-Thin',
  },
  optionButtonSelectedText: {
    fontWeight: '300',
    fontSize: 18,
    letterSpacing: 0,
    color: '#FFF5EF',
    fontFamily: 'Worksans-Thin',
  },
  optionButtonContainer: {
    position: 'absolute',
    bottom: '16%',
    left: '5%',
  },
  optionButton: {
    alignItems: 'center',
    borderColor: '#18163A',
    borderWidth: 0.5,
    marginBottom: '5%',
    width: 250,
    height: 45,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedOptionButton: {
    alignItems: 'center',
    backgroundColor: '#18163A',
    borderWidth: 1,
    borderColor: '#18163A',
    marginBottom: '5%',
    width: 250,
    height: 45,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    textAlign: 'left',
    fontFamily: 'WorkSans-Light',
    fontWeight: '300',
    fontSize: 20,
    letterSpacing: 0,
    color: '#18163A',
    marginTop: '9%',
    marginHorizontal: '5%',
  },

  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: SCREEN_WIDTH*.85,
    justifyContent: 'space-between',
  },
  navigationButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
  },
  backButton: {
    backgroundColor: '#18163A',
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  hideBackButton: {
    opacity: 0,
  },
  NavigationText: {
    color: '#FFF5EF',
    fontFamily: 'WorkSans-Thin',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 4,
  },
  nextButton: {
    backgroundColor: '#18163A',
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default PersonaElementList;
