import React, {useContext,useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  FlatList,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { AuthContextNew } from '../../navigation/authProvider';


const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH / 1.2;
const PersonaElementList = props => {
  const newPers = props.PersonName;
  const id = props.id;
  const gender = props.gender;
  const age = props.age;
  const path = props.path;
  const data = props.data
  const {user} = useContext(AuthContextNew);

  const Persona_Info_New = [
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
            height: SCREEN_HEIGHT*.011,
            backgroundColor: '#FFF5ef',
            borderRadius: 40,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#282561',
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
    height: SCREEN_HEIGHT*.55,
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
    width: SCREEN_WIDTH*.6,
    height: SCREEN_HEIGHT*.06,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedOptionButton: {
    alignItems: 'center',
    backgroundColor: '#18163A',
    borderWidth: 1,
    borderColor: '#18163A',
    marginBottom: 15,
    width: SCREEN_WIDTH*.6,
    height: SCREEN_HEIGHT*.06,
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
    marginBottom: '10%',
    marginTop: '10%',
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
    width: SCREEN_WIDTH*.25,
    height: SCREEN_HEIGHT*.07,
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
