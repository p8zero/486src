import React, {useContext, useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import BackButtonPersona from '../../components/backButtonPersona';
import Navigation from '../../components/navigationBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import UserFlatList from '../../components/flatListPersonas';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContextNarratives} from '../../navigation/AuthProviderNarratives';
import RBSheet from 'react-native-raw-bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated';
import * as Progress from 'react-native-progress';
import PersonaElementList from '../../components/Personas/PersonaElementsList';
import { Mixpanel } from 'mixpanel-react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH / 1.2;

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
mixpanel.init();

export default function CreateCustomPersonas({route, navigation}) {
  const {newPers, id, age, gender, path, data} = route.params;
  
  const Persona_Info = [
    {
        id: '0',
        question: `${newPers} works hard and puts a lot of effort into achieving their goals`,
        yes: `A diligent and hard workering person.`,
        no: `Not the most hard working person. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Industriousness/Diligence',
    },
    {
        id: '1',
        question: `${newPers} is organized, likes routine and pays attention to details`,
        yes: `Tends to be organized and detail oriented. `,
        no: `Not the most organized and detail oriented person. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Orderliness/Organization',
    },
    {
        id: '2',
        question: `${newPers} is driven to be successful and show how capable they are`,
        yes: `Wants to be successful and constantly working to achieve. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Achivement',
    },
    {
        id: '3',
        question: `${newPers} strives to be wealthy and have high social status`,
        yes: `Has a real desire to be wealthy and a member of the social elite. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Resources',
    },
    {
        id: '4',
        question: `${newPers} makes friends easily and likes to spend their time with other people`,
        yes: `Very friendly and outgoing. `,
        no: `Can be hard to get to know and tends to be a private person. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Enthusiasm/Liveliness',
    },
    {
        id: '5',
        question: `${newPers} is often looking for exciting and different things to do`,
        yes: `Really needs stimulation and is drawn towards new challenges and experiences. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Stimulation',
    },
    {
        id: '6',
        question: `${newPers} is often looking to have a good time, be comfortable and enjoy their life `,
        yes: `Looks to have a good time and prioritizes the enjoyment of life. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: `Hedonism`,
    },
    {
        id: '7',
        question: `${newPers} boldly expresses their opinions and often takes the lead`,
        yes: `Has a strong personality and says what is on their mind. `,
        no: `Finds it difficult to say what they think and lets others make the decisions. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: `Assertiveness`,
    },
    {
        id: '8',
        question: `${newPers} desires authority, influence and to have others do what they say`,
        yes: `Wants to have power and influence. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dominance',
    },
    {
        id: '9',
        question: `${newPers} easily gets frustrated and can lose their temper`,
        yes: `Has a hard time managing their frustrations and temper. `,
        no: `Usually calm under pressure and rarely gets irritated. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Volatility',
    },
    {
        id: '10',
        question: `${newPers} is generally a dishonest, insincere person and would use deceptive means to get what they want`,
        yes: `Generally dishonest and insincere. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dishonesty',
    },
    {
        id: '11',
        question: `${newPers} cares about maintaining their reputation and avoiding public embarrassment`,
        yes: `Cares deeply about how they look to people. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Face',
    },
    {
      id: '12',
      question: `${newPers} is a generally an honest, honorable person and would not break the rules to get what they want`,
      yes: `Generally honest and honorable. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Honesty',
  },
  {
      id: '13',
      question: `${newPers} strives to be humble and to not think of themselves as better than others`,
      yes: `Modest and humble. `,
      no: ``,
      selectedN: false,
      selectedY: false,
      selectedNS: false,
      facet: 'Humility',
  },
    {
        id: '14',
        question: `${newPers} is concerned about the needs of others and tries to forgive and forget`,
        yes: `Typically a kind and forgiving person. `,
        no: `Doesn't really care about others and holds grudges. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Compassion/Forgiveness',
    },
    {
        id: '15',
        question: `${newPers} cares about the well-being of the people in their life`,
        yes: `Really wants to be there for the people in their life. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Caring',
    },
    {
        id: '16',
        question: `${newPers} strives to be dependable and trustworthy to the people in their life`,
        yes: `Generally a loyal and dependable person. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Dependability',
    },
    {
        id: '17',
        question: `${newPers} doesn't usually criticize others and is easy to reason with`,
        yes: `Is polite and easy to reason with. `,
        no: `Can be critical, impolite and difficult to reason with. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Politeness/Flexibility',
    },
    {
        id: '18',
        question: `${newPers} wants to avoid upsetting others or doing anything people would disapprove of`,
        yes: `Doesn't want to upset anyone or cause any conflict. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Interpersonal',
    },
    {
        id: '19',
        question: `${newPers} cares about feeling safe and secure and will tend to avoid potential dangers`,
        yes: `Really cares about feeling safe and secure. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Personal Security',
    },
    {
        id: '20',
        question: `${newPers} gets caught up in their problems and often feels worried or anxious`,
        yes: `Often feels worried or anxious. `,
        no: `Is usually confident and rarely feels worried or anxious`,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Withdrawal / Anxiety',
    },
    {
        id: '21',
        question: `${newPers} wants to be able to think freely and form their own opinions`,
        yes: `Wants to be able to think freely and form their own opinions. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Thought',
    },
    {
        id: '22',
        question: `${newPers} is constantly learning new things and is interested in abstract ideas`,
        yes: `Really likes to learn new things and explore abstract ideas. `,
        no: `Doesn't really enjoy exploring theoretical or abstract ideas. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Intellect',
    },
    {
        id: '23',
        question: `${newPers} has quite creative and different than most people.`,
        yes: `Quite a creative and unique person. `,
        no: `A normal person and doesn't do a lot of creative things. `,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Creativity',
    },
    {
        id: '24',
        question: `${newPers} wants to be independent and to be able to make their own decisions`,
        yes: `Really wants to be independent and make their own decisions. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Action',
    },
    {
        id: '25',
        question: `${newPers} cares about the security and stability of their society`,
        yes: `Cares a lot about ensuring that their society is safe and stable. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Societal Security',
    },
    {
        id: '26',
        question: `${newPers} maintains and follows the traditions of their religion or culture`,
        yes: `Follows and maintains their religious or cultural traditions. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Tradition',
    },
    {
        id: '27',
        question: `${newPers} is about following the rules and doing what the people in authority say to do`,
        yes: `Really cares about the rules and making sure they are followed.  `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Rules',
    },
    {
        id: '28',
        question: `${newPers} cares about protection for the vulnerable in society and for everyone to be treated equality`,
        yes: `Cares a lot about seeing equality and justice in society. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Concern',
    },
    {
        id: '29',
        question: `${newPers} is about having peace, acceptance and understanding between all peoples. `,
        yes: `Wants peace and for everyone to be accepted and understood. `,
        no: ``,
        selectedN: false,
        selectedY: false,
        selectedNS: false,
        facet: 'Tolerance',
    },
    {
        id: '30',
        question: `${newPers} cares about the well-being and protection of the natural environment`,
        yes: `Cares a lot about the natural environment`,
        no: ``,
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
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          top: '8%',
          marginHorizontal: '2.5%',
          padding: '0%',
          width: SCREEN_WIDTH*.95,
        }}>
        <BackButtonPersona
          label={'back button'}
          onPress={() => {navigation.goBack('SelectPersonas');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        <BackButtonPersona
          label={'back button'}
          onPress={() => {navigation.navigate('PersonasScreen')}}
          icon={<Ionicons name="close" size={24} color="#18163A" />}
          />
    </View>

      <View style={{top: '10%', left: "1%", marginRight: '5%'}}>
        <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 22,
            color: '#18163A',
            fontWeight: '300',
            letterSpacing: 0,
            marginLeft: '2.5%',
            marginRight: '15%'
          }}>
          Build a persona that represents {newPers}
        </Text>
      </View>
      <View style={{ 
        alignItems: 'center',  
          borderBottomColor: '#FFF5EF',
          borderBottomWidth: .25,
          marginTop: '20%'}}>
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
    marginTop: '10%', //to change the vertical positioning of the flatlist
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