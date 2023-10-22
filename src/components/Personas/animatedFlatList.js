import React from 'react';
import {StyleSheet, FlatList, View, Text, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const newPers = 'Lisa'

const Persona_Info = [
  {
      id: '1',
      question: `Does ${newPers} work hard, put a lot of effort into achieving their goals and complete tasks successfully?`,
      yes: 'diligent',
      no: 'not diligent',
      facet: 'Industriousness/Dilligence',
      selected: false, 
    },
  {
      id: '2',
      question: `Does ${newPers} like to follow a routing or schedule, enjoy having a tidy office or home and consider many options before making a decision?`,
      yes: 'organized',
      no: 'disorganized',
      facet: 'Orderliness/Organization',
      selected: false, 
    },
  {
      id: '3',
      question: `Is ${newPers} generally an upbeat and energetic person, warms up to other quickly and shows their feelings when they are happy?`,
      yes: 'sociable',
      no: 'quiet',
      facet: 'Enthusiasm/Liveliness',
      selected: false, 
    },
  {
      id: '4',
      question: `Does ${newPers} express their opinions, is not afraid to voice opposing views and finds it easy to approach others?`,
      yes: 'bold',
      no: 'reserved',
      facet: 'Assertiveness/Social Boldness',
      selected: false, 
    },
  {
      id: '5',
      question: `Does ${newPers} try to forgive and forget when wronged, is very trusting of others and are nice to people they should be angry at?`,
      yes: 'compassionate',
      no: 'unkind',
      facet: 'Compassion/Forgiveness',
      selected: false, 
    },
  {
      id: '6',
      question: `Does ${newPers} respect the opinion of others, compromise when there are disagreements and does not react strongly to criticism?`,
      yes: 'polite',
      no: 'impolite',
      facet: 'Politeness/Flexibility',
      selected: false, 
    },
  {
      id: '7',
      question: `Does ${newPers} get easily frustrated, lose their temper and panicks under stress?`,
      yes: 'volatile',
      no: 'stable',
      facet: `"Volatility" / Emotional stability`,
      selected: false, 
    },
  {
      id: '8',
      question: `Does ${newPers} spend a lot of time thinking about past mistakes, is easily discouraged and worries about things often?`,
      yes: 'anxious',
      no: 'confident',
      facet: `"Withdrawal" / Anxiety`,
      selected: false, 
    },
  {
      id: '9',
      question: `Does ${newPers} like to constantly learn new things, enjoy thinking about things and is interested in thought-provoking discussions?`,
      yes: 'intellectual',
      no: 'simple',
      facet: 'Intellect / Inquistiveness',
      selected: false, 
    },
  {
      id: '10',
      question: `Does ${newPers} like finding new ways of doing things, have a vivid imagination and enjoys exploring unconventional views or ideas?`,
      yes: 'creative',
      no: 'conventional',
      facet: 'Creativity / Unconventionality',
      selected: false, 
    },
  {
      id: '11',
      question: `Would ${newPers} never cheat to get ahead, not take advantage of someone even if it would benefit them and try to follow the rules?`,
      yes: 'fair',
      no: 'devious',
      facet: 'Fairness/Equity',
      selected: false, 
    },
  {
      id: '12',
      question: `Would ${newPers} use flattery to get ahead, tell people what they want to hear to get them to do what they want and put on a show to impress people?`,
      yes: 'dishonest',
      no: 'honest',
      facet: 'Sincerity/Authenticity',
      selected: false, 
    },
  {
      id: '13',
      question: `Is it important to ${newPers} to form their own opinions and learn things for themselves?`,
      yes: 'have the freedom to think for themselves',
      no: 'do not have the freedom to think for themselves',
      facet: 'Thought',
      selected: false, 
    },
  {
      id: '14',
      question: `Is it important to ${newPers} to make their own decisions about their life and have freedom to choose what they do?`,
      yes: 'have independence',
      no: 'do not have independence',
      facet: 'Action',
      selected: false, 
    },
  {
      id: '15',
      question: `Is it important to ${newPers} to have all sorts of new experiences and to always look for different things to do?`,
      yes: 'have new experiences',
      no: 'do not have new experiences',
      facet: 'Stimulation',
      selected: false, 
    },
  {
      id: '16',
      question: `Is it important to ${newPers} to have a good time and enjoy the comforts, pleasures of life?`,
      yes: 'have comforts and good times',
      no: 'do not have comforts and good times',
      facet: 'Hedonism',
      selected: false, 
    },
  {
      id: '17',
      question: `Is it important to ${newPers} to be ambitious and be very successful?`,
      yes: 'have success',
      no: 'do not have success',
      facet: 'Achievement',
      selected: false, 
    },
  {
      id: '18',
      question: `Is it important to ${newPers} to be the one to tell others what to do and to be the most influential person in the group?`,
      yes: 'have influence and power',
      no: 'do not have influence and power',
      facet: 'Dominance',
      selected: false, 
    },
  {
      id: '19',
      question: `Is it important to ${newPers} to be the one to tell others what to do and to be the most influential person in the group?`,
      yes: 'have wealth and status',
      no: 'do not have wealth and status',
      facet: 'Resources',
      selected: false, 
    },
  {
      id: '20',
      question: `Is it important to ${newPers} to have high status and be wealthy because of the feeling of power it brings?`,
      yes: 'have a good reputation',
      no: 'do not have a good reputation',
      facet: 'Face',
      selected: false, 
    },
  {
      id: '21',
      question: `Is it important to ${newPers} to protect his public image and to avoid being embarrased?`,
      yes: 'have personal security and safety',
      no: 'do not have personal security and safety',
      facet: 'Personal',
      selected: false, 
    },
  {
      id: '22',
      question: `Is it important to ${newPers} to have personal security and avoid anything that might endanger their safety?`,
      yes: 'have societal security and safety',
      no: 'do not have societal security and safety',
      facet: 'Societal',
      selected: false, 
    },
  {
      id: '23',
      question: `Is it important to ${newPers} to have order and stability in their society and for their society to protect itself?`,
      yes: 'have their traditions and beliefs followed',
      no: 'do not have their traditions and beliefs followed',
      facet: 'Tradition',
      selected: false, 
    },
  {
      id: '24',
      question: `Is it important to ${newPers} to maintain and follow the traditions and beliefs of their family or culture?`,
      yes: 'have rules and laws obeyed',
      no: 'do not have rules and laws obeyed',
      facet: 'Rules',
      selected: false, 
    },
  {
      id: '25',
      question: `Is it important to ${newPers} to obey rules and laws and do what the people in positions of authority say?`,
      yes: 'avoid upsetting others',
      no: 'do not avoid upsetting others',
      facet: 'Interpersonal',
      selected: false, 
    },
  {
      id: '26',
      question: `Is it important to ${newPers} to avoid upsetting other people and to never be annoying to anyone?`,
      yes: 'have humility',
      no: 'do not have humility',
      facet: 'Humility',
      selected: false, 
    },
  {
      id: '27',
      question: `Is it important to ${newPers} to be humble, not draw attention to themselves and to be satisfied with what they have?`,
      yes: 'care for people close to them',
      no: 'do not care for people close to them',
      facet: 'Caring',
      selected: false, 
    },
  {
      id: '28',
      question: `Is it important to ${newPers} to care for those people close to them and be responsive to their needs?`,
      yes: 'be loyal and dependable',
      no: 'do not be loyal and dependable',
      facet: 'Dependability',
      selected: false, 
    },
  {
      id: '29',
      question: `Is it important to ${newPers} to be loyal, dependable and trustworthy to the people close to them?`,
      yes: 'promote justice and equality in society',
      no: 'do not promote justice and equality in society',
      facet: 'Concern',
      selected: false, 
    },
  {
      id: '30',
      question: `Is it important to ${newPers} for everyone to be treated justly, for everyone to have equal opportunities in life and to protect society's weak and vulnerable?`,
      yes: 'protect and care for nature',
      no: 'do not protect and care for nature',
      facet: 'Nature',
      selected: false, 
    },
  {
      id: '31',
      question: `Is it important to ${newPers} to listen to people who are different from them and to promote harmony and peace among diverse groups?`,
      yes: 'promote harmony and tolerance in society',
      no: 'do not promote harmony and tolerance in society',
      facet: 'Tolerance',
      selected: false, 
    },
]

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH / 1.2 ;

export const Home = () => {
  const transX = useSharedValue(0);

  const renderItem = ({item, index}) => {
    return <Item index={index} item={item} transX={transX} />;
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      transX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <AnimatedFlatList
          onScroll={scrollHandler}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={Persona_Info}
          decelerationRate="fast"
          centerContent
          snapToInterval={ITEM_WIDTH}
          scrollEventThrottle={16}
          pagingEnabled
          snapToAlignment="center"
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      </View>
    </View>
  );
};

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
      <TouchableOpacity
              onPress={() => {}}
              style={styles.optionButton}>
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 18,
                    color: '#F3777E',
                    fontFamily: 'AppleSDGothicNeo-Thin',
                  }}>
                  Sounds like {newPers}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.optionButton}>
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 18,
                    color: '#F3777E',
                    fontFamily: 'AppleSDGothicNeo-Thin',
                  }}>
                  Not like {newPers}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.optionButton}>
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 18,
                    color: '#F3777E',
                    fontFamily: 'AppleSDGothicNeo-Thin',
                  }}>
                  Not Sure
                </Text>
              </View>
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
        [0.5, 0.7, 1, 0.7, 0.5],
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
        [0, 0.5, 0.8, 1, 0.8, 0.5, 0],
        Extrapolate.CLAMP,
      );
};

const styles = StyleSheet.create({
  container: {      
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  listContainer: {
    height: ITEM_WIDTH + 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    height: ITEM_WIDTH * 2,
    flexGrow: 0,
    paddingLeft: 10, 
  },
  box: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.2,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 11,
  },
  label: {
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    marginBottom: 40,
    marginHorizontal: 20
  },
  optionButton: {
    alignItems: 'center',
    borderColor: '#F3777E',
    borderWidth: 1,
    marginBottom: 15,
    width: 200,
    height: 50,
    borderRadius: 40,
    shadowColor: 'rgba(0,0,0, 0.7)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.6,
    shadowRadius: 14,
    alignItems: 'center', 
    justifyContent: 'center'
  },
});