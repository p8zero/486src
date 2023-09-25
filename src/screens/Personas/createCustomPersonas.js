import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Dimensions,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import BackButtonPersona from '../../components/backButtonPersona';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import PersonaElementList from '../../components/Personas/PersonaElementsList';
import { Mixpanel } from 'mixpanel-react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH / 1.2;

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
mixpanel.init();

export default function CreateCustomPersonas({route, navigation}) {
  const {newPers, id, age, gender, path, data} = route.params;
  
  const Persona_Info = [
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
        question: `I typically get frustrated easy and can lose my temper at times`,
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
 
const {newPers2} = route.params;
  const [select, setSelect] = useState(Persona_Info);
  const transX = useSharedValue(0);
  const [disabledButton, setDisabledButton] = useState(false);
  const [numb, setNumb] = useState(0);
  const [counterForBar, setCounterForBar] = useState(numb);

  const renderItem = ({item, index}) => {
    return <Item index={index} item={item} transX={transX} />;
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      transX.value = event.contentOffset.x;
    },
    onBeginDrag: e => {
      console.log(numb);
    },
  });

  const Item = ({index, item, transX}) => {
    const udv = useDerivedValue(() => {
      if (
        transX.value >= (index - 2) * ITEM_WIDTH &&
        transX.value <= (index + 2) * ITEM_WIDTH
      ) {
        return transX.value;
      } else if (transX.value < (index - 2) * ITEM_WIDTH) {
        return null;
      } else if (transX.value > (index + 2) * ITEM_WIDTH) {
        return null;
      }
    });

    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: opacityAnimation(udv, index),
        transform: [
          {
            scale: scaleAnimation(udv, index),
          },
        ],
      };
    });
    return (
      <Animated.View style={[styles.box, animatedStyle]} item={item}>
        <Text style={styles.label}>{item.question}</Text>
        <View style={{ right: 45}}>
        <TouchableOpacity
          onPress={() => {
            handleOnPress(item);
            getNumber();
          }}
          style={
            item.selectedN == 1
              ? styles.selectedOptionButton
              : styles.optionButton
          }>
          <View style={{}}>     
            <Text
              style={
                item.selectedN == 1
                  ? styles.optionButtonSelectedText
                  : styles.optionButtonText
              }>
              Not like {newPers}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleOnPress2(item);
            getNumber();
          }}
          style={
            item.selectedY == 1
              ? styles.selectedOptionButton
              : styles.optionButton
          }>
          <View style={{}}>
            <Text
              style={
                item.selectedY == 1
                  ? styles.optionButtonSelectedText
                  : styles.optionButtonText
              }>
              Sounds like {newPers}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleOnPress3(item);
            getNumber();
          }}
          style={
            item.selectedNS == 1
              ? styles.selectedOptionButton
              : styles.optionButton
          }>
          <View style={{}}>
            <Text
              style={
                item.selectedNS == 1
                  ? styles.optionButtonSelectedText
                  : styles.optionButtonText
              }>
              Not Sure
            </Text>
          </View>
        </TouchableOpacity> 
        </View>
        <TouchableOpacity
          style={styles.prevQuestionButton}
          onPress={()=> {}}
          underlayColor='#282561'>
          <Text style={{color: 'white', letterSpacing: 2, fontFamily: 'WorkSans-Light',}}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextQuestionButton}
          onPress={()=> {}}
          underlayColor='#F3777E'>
          <Text style={{color: 'white', letterSpacing:2, fontFamily: 'WorkSans-Light',}}>Next</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const scaleAnimation = (udv, index) => {
    'worklet';

    return udv.value === null
      ? 0
      : interpolate(
          udv.value,
          [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
            (index + 2) * ITEM_WIDTH,
          ],
          [0.5, 0.8, 1, 0.8, 0.5],
          Extrapolate.CLAMP,
        );
  };

  const opacityAnimation = (udv, index) => {
    'worklet';

    return udv.value === null
      ? 0
      : interpolate(
          udv.value,
          [
            (index - 3) * ITEM_WIDTH,
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
            (index + 2) * ITEM_WIDTH,
            (index + 3) * ITEM_WIDTH,
          ],
          [0, 0.5, 0.7, 1, 0.7, 0.5, 0],
          Extrapolate.CLAMP,
        );
  };

  const handleOnPress = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {
          ...val,
          selectedN: item.selectedN == 1 ? 0 : 1,
          selectedY: 0,
          selectedNS: 0,
        };
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };

  const handleOnPress2 = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {
          ...val,
          selectedY: item.selectedY == 1 ? 0 : 1,
          selectedN: 0,
          selectedNS: 0,
        };
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };

  const handleOnPress3 = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {
          ...val,
          selectedNS: item.selectedNS == 1 ? 0 : 1,
          selectedY: 0,
          selectedN: 0,
        };
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };

  const getNumber = () => {
    let sum = 0;
    for (var i = 0, l = select.length; i < l; i++) {
      sum += select[i].selectedY + select[i].selectedN + select[i].selectedNS;
    }
    let variable = sum / 31;
    conterVal = variable;
    setNumb(variable);
    setCounterForBar(numb);
    if (variable === 1) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  useEffect(() => {
    getNumber();
  }, [numb]);

  let personaData = [];
  let personaInfo = '';

  const getData = () => {
    let data = [];
    for (var i = 0, l = select.length; i < l; i++) {
      if (select[i].selectedN == 1) {
        data.push([
          select[i].facet,
          select[i].no,
          select[i].selectedY,
          select[i].selectedN,
          select[i].selectedNS,
        ]);
      } else if (select[i].selectedY == 1) {
        data.push([
          select[i].facet,
          select[i].yes,
          select[i].selectedY,
          select[i].selectedN,
          select[i].selectedNS,
        ]);
      } else {
        data.push([
          select[i].facet,
          select[i].no,
          select[i].selectedY,
          select[i].selectedN,
          select[i].selectedNS,
        ]);
      }
    }
    personaData = data;
    let info = '';
    for (var i = 0, l = personaData.length; i < l; i++) {
      info += personaData[i][1] + '. ';
    }
    personaInfo = info;
  };
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#9cc8C6',
      }}>
     <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          top: '5%',
          marginHorizontal: '2.5%',
          width: '95%'
        }}>
        <BackButtonPersona
          label={'back button'}
          onPress={() => {navigation.goBack('SelectPersonas');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#000000" />}
        />
        <BackButtonPersona
          label={'back button'}
          onPress={() => {navigation.navigate('PersonasScreen')}}
          icon={<Ionicons name="close" size={24} color="#000000" />}
          />
    </View>

    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '10%',
          marginBottom: '5%',
          marginHorizontal: '2.5%'
        }}>

      <View style={{
        flexdirection: 'row',
        justifyContent: 'center',
        width: '50%'}}>
        <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 22,
            color: '#000000',
            fontWeight: '300',
            letterSpacing: 0,
          }}>
          What is {newPers} like as a person?
        </Text>
      </View>

      <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateCustomPersonasTutorial')
            }}
            style={{
              backgroundColor: '#18163A',
              borderRadius: 50,
              width: 150,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 20,
                fontWeight: '400',
                fontSize: 16,
                letterSpacing: 0,
                color: '#fff5ef',
                fontFamily: 'WorkSans-Regular',
              }}>
              More info on the questions
            </Text>
          </TouchableOpacity>
      </View>
      </View>


      <View style={styles.container}>
        <View style={styles.listContainer}>
        <PersonaElementList data={data} PersonName = {newPers} id = {id} age = {age} gender = {gender} path = {path}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    height:'100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
  },
  list: {
    height: ITEM_WIDTH * 2,
    flexGrow: 0,
    paddingRight: 40,
    paddingLeft: 20
  },
  box: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.31,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flexWrap: 'wrap',
    fontFamily:'WorkSans-Light',
    fontWeight: '400',
    fontSize: 20,
    color: '#000000',
    marginBottom: 40,
    marginHorizontal: 20,
    letterSpacing: 2,
  },
  optionButton: {
    alignItems: 'center',
    borderColor: '#F3777E',
    borderWidth: 1,
    marginBottom: 15,
    width: 200,
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOptionButton: {
    alignItems: 'center',
    backgroundColor: '#F3777E',
    borderWidth: 1,
    borderColor: '#F3777E',
    marginBottom: 15,
    width: 200,
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButtonText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#F3777E',
    fontFamily: 'WorkSans-Thin',
    letterSpacing: 1,
  },
  optionButtonSelectedText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'WorkSans-Thin',
    letterSpacing: 1,
  },
  continueButtonPos: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
    left: SCREEN_WIDTH / 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  continueButtonStyle: {
    backgroundColor: '#f08080',
    padding: 20,
    borderRadius: 40,
    width: 200,
  },
  continueButtonStyleDisabled: {
    backgroundColor: '#F6D1D0',
    padding: 20,
    borderRadius: 40,
    width: 200,
  },
  continueButtonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  questionNoStyle : {
    fontSize: 8
  },
  prevQuestionButton: {
    height: 50,
    width: 95,
    backgroundColor: '#282561',
    color: 'white',
    right: 50,
  },
  nextQuestionButton: {
    height: 50,
    width: 95,
    backgroundColor: '#F3777E',
    color: 'white',
    right: 0,
  },
});