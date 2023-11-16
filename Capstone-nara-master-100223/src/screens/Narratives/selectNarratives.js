import React, { useContext, useState, useRef, useEffect } from "react";
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
import RBSheet from "react-native-raw-bottom-sheet";
import { Mixpanel } from 'mixpanel-react-native';

export default function SelectNarratives({ route, navigation }) {
  const {environment } = useContext(
    AuthContextNarratives
  );
  const {  flow, mainChar, otherChar, relationship, emotions, gender, age, trait } = route.params;

  const [phSelect, setphSelect] = useState(true);
  const [acSelect, setacSelect] = useState(false);
  const refRBSheet = useRef();

  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
  mixpanel.init();

  const ClarityInTheMoment_AddressingConflict = [
    {
      id: "1",
      data: {
        "1": `I (${mainChar}) am trying really hard to be what you (${otherChar}) want me to be. To live up to your expectations.`,
        "2": `But you don't seem to appreciation my efforts. I can sense your disapproval of how I've been doing things.`,
        "3": `It doesn't matter how hard I try, how much I do exactly what you ask.`,
        "4": `It seems to me that you don't really respect me that much.`,
        "5": `And nothing I do seems to change your mind. It's left me feeling like I'll never be good enough. How did we get here?`,
      },
      name: "I do what you ask, but it's never good enough… how did we get here?",
      selected: false,
      narrData: [
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "2",
      data: {
        "1": `I'm (${mainChar}) doing everything that I'm supposed to do. Taking care of all the responsibilities, all the burdens. And it was all for you (${otherChar}).`,
        "Conflict": `And yet, you don't seem to show me any appreciation for it. Instead, you disappove of everything I do and you're just so mean. And in all fairness, I can respond that way to you too.`,
        "Respect & Authority": `There's a real lack of mutual respect between us.`,
        "Talking & Listening": `And it's pretty clear that neither of us is doing a great of job of listening to one each other. There's very little real communication going on.`,
        "Expectations & Change": `And as much as I hate to admit it, neither of us is likely to change anytime soon.`,
        "Losing Security & Trust": `Neither one of us feels good about our relationship. How did we get here?`,
      },
      name: "I've done everything for you, but we don't get along… how did we get here?",
      selected: false,
      narrData: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "3",
      data: {
        "Harmony": `I (${mainChar}) know that, at the end of the day, you (${otherChar}) care about me. And that feeling is mutual.`,
        "Conflict": `But lately, I can't help but feel that you don't really care about what I want.`,
        "Expectations & Change": `You just keep saying no to everything I want to do.`,
        "Independence & Choice": `And can you blame me for feeling restricted and like I don't have a say in my own life?`,
        "Figuring Things Out": `And all the reasons you give to me just don't make sense. I don't know if anyone believes them other than you.`,
        "Losing Security & Trust": `Neither of us are happy when this happens, Why is it like this?`,
      },
      name: "I know you care about me, but you won't let go… why is it like this?",
      selected: false,
      narrData: [
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "4",
      data: {
        "Conflict": `Neither you (${otherChar}) nor I (${mainChar}) really cares what the other person feels right now.`,
        "Expectations & Change": `For me, it's mainly because you're not fulfilling any of your responsibilities and doing what you're supposed to.`,
        "Independence & Choice": `You're just going around doing whatever you want.`,
        "Respect & Authority": `We've obviously lost whatever respect we once had for one another.`,
        "Expectations&Change": `And neither of us is backing down.`,
        "Talking & Listening": `There's no real, productive communication taking place between us.`,
        "Figuring Things Out": `I guess by now, we each have own version of the story and why everything is the other person's fault.`,
        "Losing Security & Trust": `And at the end of the day, we're both miserable when we're around each other, so why is it like this?`,
 
      },
      name: "You won't do as I ask and it's getting more and more infuriating…. why is it like this?",
      selected: false,
      narrData: [
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "5",
      data: {
        "Conflict": `There's so much that I (${mainChar}) feel like you (${otherChar}) are doing to me. You're critical, manipulative, controlling and don't seem to care at all about how I feel.`,
        "Expectations & Change": `If you don't like what I do, you punish me and if I do it right, it's never good enough.`,
        "Talking & Listening": `And even though it's really bad, I am holding back from saying anything because I know you're not going to listen.`,
        "Independence & Choice": `I feel so trapped and to me, you're free to do whatever you want.`,
        "Figuring Things Out": `And it really seems to me that you think that there's nothing wrong with your behavior and I'm left with no idea what to do. How did things get here?`,
      },
      name: "You are so controlling and I don't know what to do… how did we get here?",
      selected: false,
      narrData: [
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "6",
      data: {
        "Conflict": `Things have gotten really bad between us. You (${otherChar}) and I (${mainChar}) mean to each other and blame each other everything. Neither of us is really trying to make things better between us.`,
        "Respect & Authority": `Not going to lie, we're pretty disrespectful to one another.`,     
        "Talking & Listening": `All this has made it really hard to talk and both of us have resorted to not sharing anything with each other.`,
        "Expectations & Change": `And I get the sense that neither of us feels like they have to be the one to change.`,
        "Figuring Things Out": `Not only that, but we both have their own version of why things are the other person's fault.`,
        "Losing Security & Trust": `We're both stressed out of their minds because of this. Why is it this way?`,
      },
      name: "We can't talk to each other anymore… why is it like this?",
      selected: false,
      narrData: [
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
  ];

  const ClarityInTheMoment_PursuingHarmony = [
    {
      id: "1",
      data: {
        "Figuring Things Out": `We both took some time to reflect and I (${mainChar}) think we both have started to figure out how we can work together.`,
        "Harmony": `I realize, and I think you (${otherChar}) do too, that we both have to care about what the other person wants and try to compromise where we can.`,
        "Respect & Authority": `And if we do that, our respect for one another will grow.`,
        "Expectations & Change": `Because, at the end of the day, we want to be someone the other person can count on.`,
        "Finding Security & Trust": `To have someone to trust and rely on. But what path do we take to get here?`,
      },
      name: "We respect and trust each other… how do we get here?",
      selected: false,
      narrData: [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "2",
      data: {
        "Figuring Things Out": `You (${otherChar}) and I (${mainChar}) both need to take some time to think about our relationship and figure out what really happened before.`,
        "Talking & Listening": `So that we can start talking again and really be able to listen to each other.`,
        "Harmony": `Because then we can have a relationship where we build each other up and be honest about how we feel at any given moment.`,
        "Finding Security & Trust": `A relationship where, no matter what we say, we know we're not attacking or putting down the other person. What path do we take to get here?`,
      },
      name: "We can really talk to each other again… how do we get here?",
      selected: false,
      narrData: [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "3",
      data: {
        "Expectations & Change": `I (${mainChar}) need you (${otherChar}) to respect the rules and expectations that I've set for you.`,
        "Independence & Choice": `You need to feel like you have enough freedom to be able to live your life.`,
        "Harmony": `We could be at odds over this, but we both care about how the other person feels and what they need.`,
        "Talking & Listening": `And so, we were able to listen to each other and really understand what the other person had to say.`,
        "Figuring Things Out": `Ultimately we came to a practical, thought out compromise. How do we get here?`,
      },
      name: "We've reached a compromise between my expectations and your independence… how do we get here?",
      selected: false,
      narrData: [
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "4",
      data: {
        "Finding Security & Trust": `After everything that's happened, I (${mainChar}) am focused on trying to recover.`,
        "Independence & Choice": `Both of us are going on with our lives, but we do want some kind of relationship.`,
        "Conflict": `One that's probably not going to be that close at times.`,
        "Harmony": `But then in other times, we both come back to build it up again.`,
        "Expectations & Change": `With a mutual understanding of what can expect from each other.`,
        "Figuring Things Out": `We both need to figure out what that looks like for each of us. What path do we take to get here?`,
      },
      name: "We have an understanding between us, its not perfect, but it works… how do we get here?",
      selected: false,
      narrData: [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "5",
      data: {
        "Harmony": `You (${otherChar}) and I (${mainChar}) have a deep relationship that is important to both of us. We're both investing a lot of time and energy into it, are there for each other when things get hard and will always protect each other.`,
        "Talking & Listening": `It's a relationship where we really know how to talk to each other`,
        "Respect & Authority": `And one where our respect for one another just continues to grow.`,
        "Finding Security & Trust": `We can both put our complete trust in the other person. What path do we take to get here?`,
      },
      name: "We're really there for each other… how do we get here?",
      selected: false,
      narrData: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
  ];

  const ClarityInTheFuture_AddressingConflict = [
    {
      id: "1",
      data: {
        "Expectations & Change": `I (${mainChar}) tried really hard to be what you (${otherChar}) wanted me to be. I tried to live up to your expectations.`,     
        "Conflict": `But you didn't see all the effort I put in. You just disapproved of anything you didn't like.`,
        "Harmony": `And I didn't try to do anything to change it because I didn't want to upset you or disappoint you.`,
        "Talking & Listening": `Not that you actually listened to anything I had to say.`,
        "Respect & Authority": `What was really hard for me was that I really respected you. It was why I tried so hard. And I knew that you didn't have the same respect for me.`,
        "Fit & Compatibility": `I guess that's part of the reason why we didn't like each other. It didn't help that we didn't have much to bond over.`,
        "Figuring Things Out": `I could tell that you didn't really understand how I was feeling. I even got the feeling that you thought that you were doing nothing wrong.`,
        "Memories & Influences": `It's made for a lot of bad memories, for both of us.`,
        "Losing Security & Trust": `For me, this was all very unfair and I was left feeling neglected and trapped. Where does this go?`,
      },
      name: "It was never good enough no matter what I did… where does this go?",
      selected: false,
      narrData: [
        [0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0],
      ]
    },
    {
      id: "2",
      data: {
        "Expectations & Change": `You (${otherChar}) didn't like what I (${mainChar}) was doing and you tried to get me to change.`,
        "Harmony": `And I get it, you were scared of what might happen and you were trying to protect me.`,
        "Independence & Choice": `I was doing whatever I wanted and there was a chance that it could have ended badly.`,
        "Conflict": `But I was annoyed by how you tried to get me to change.`,
        "Respect & Authority": `Because I actually did respect you, but it didn't seem like you had that same respect for me in that moment.`,
        "Talking & Listening": `Given all this, we had a hard time talking and listening to one another about it.`,
        "Fit & Compatibility": `Even though we both quite liked each other, we had a hard time understanding each other.`,
        "Losing Security & Trust": `It made me feel unsure about our relationship. It was all quite stressful and I felt a bit stuck after awhile.`,
        "Finding Security & Trust": `I really wanted for us to get past this. Where does this go?`,
      },
      name: "I needed to be my own person, but you wouldn't let me… where does this go?",
      selected: false,
      narrData: [
        [0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "3",
      data: {
        "Harmony": `I (${mainChar}) wanted to do the right thing. I saw something in you (${otherChar}) that I thought was dangerous.`, 
        "Expectations & Change": `I felt like you were my responsibility and thought that you didn't know what you were doing. But you didn't do what I told you to do.`, 
        "Conflict": `Neither of us really thought about how the other person felt. Instead, we kept pushing each other and pointing out what the other person was doing wrong.`,
        "Harmony2": `I just wanted to protect you from any future pain. I was really scared for what might happen to you.`,
        "Independence & Choice": `This wasn't what I wanted. I felt like I had to do it.`,
        "Respect & Authority": `We ended up losing a lot of respect for each other. And it was clear that you really wanted that respect from me.`,
        "Talking & Listening": `Needless to say, both of us had a hard time talking to each other after a while.`,
        "Fit & Compatibility": `We grew farther apart and there was less keeping us together. And it grew harder to understand one another.`,
        "Memories & Influences": `All those tense moments really wore on us.`,
        "Losing Security & Trust": `We were stressed out around each other, couldn't trust each other and felt trapped in this cycle.`,
        "Finding Security & Trust": `We both wanted and tried to feel less troubled about the whole thing. Where does this go?`,
      },
      name: "I tried to do the right thing by making sure you didn't do the wrong thing… where does this go?",
      selected: false,
      narrData: [
        [0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "4",
      data: {
        "Expectations & Change": `You (${otherChar}) and I (${mainChar}) were both doing what we were supposed to. Fulfilling our responsibilities, focused on growing ourselves for the better.`,
        "Independence & Choice": `And while it was both of us wanted, it was very stressful.`,
        "Conflict": `It also meant that we weren't able to spend much time with each other and sustain our relationship.`,
        "Harmony": `But neither of us wanted to cause a conflict.`,
        "Talking & Listening": `So we left a great many things unsaid.`,
        "Fit & Compatibility": `We still liked each other.`,
        "Losing Security & Trust": `But nothing was really changing and it started to leave us feeling a little unsure in our relationship. And we both had our own ways to escape from those feelings.`,
        "Finding Security & Trust": `And while both of us wanted things to be better, we both started to believe that everything was alright. Where does this go?`,
      },
      name: "We were both doing so much and we lost touch… where does this go?",
      selected: false,
      narrData: [
        [0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
      ]
    },
    {
      id: "5",
      data: {
        "Conflict": `It was really bad for me (${mainChar}). You (${otherChar}) didn't care about what felt or tought. You were critical, manipulative, disrespectful, insensitive and controlling.`,
        "Harmony": `But I didn't want to upset you and make things worse.`,
        "Talking & Listening": `And so I didn't say anything. It's not like I really thought you were going to listen anyways.`,
        "Respect & Authority": `But it was also because you commanded respect and it was clear that what wanted more that. And I wanted to stay out of the way.`,
        "Expectations & Change": `All this meant that you were able to do whatever you wanted, you never had to change. And you could go on telling yourself that you're doing nothing wrong.`,
        "Independence & Choice": `But for me, I felt trapped and that nothing was my choice. None of this was fair to me.`,
        "Resources & Opportunity": `And I didn't have what I needed to get out of that situation.`,
        "Losing Security & Trust": `All this crushed my confidence, stressed me out and made me feel desperate. So I looked to other things to try and find an escape.`,
        "Finding Security & Trust": `I wanted to get out of this, but I dont' know what to do. Where does this go?`,
      },
      name: "You were so controlling and there was no easy way out… where does this go?",
      selected: false,
      narrData: [
        [0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
      ]
    },
  ];

  const ClarityInTheFuture_PursuingHarmony = [
    {
      id: "1",
      data: {
        "Figuring Things Out": `I (${mainChar}) spent a lot of time reflecting on what went wrong between us and tried to figure out what I could do to start mending things.`,       
        "Conflict": `But you (${otherChar}) were distant and didn't want to engage with me. So I took the first step and reached out to me and I was honest.`,
        "Talking & Listening": `I explained my side of the story and how I learned to see what you must have been going through.`,
        "Fit & Compatibility": `There were complicated feelings on both sides. We both had things we liked and didn't like about each other.`,
        "Memories & Influences": `Not to mention all the bad memories with some good ones in between.`,
        "Losing Security & Trust": `Neither of us could fully trust the other and we were both scared to be hurt again.`,
        "Finding Security & Trust": `But we wanted to be able to trust in each other again someday. How does this go?`,
      },
      name: "I took the first step towards mending our relationship… how does this go?",
      selected: false,
      narrData: [
        [0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0],
      ]
    },
    {
      id: "2",
      data: {
        "Finding Security & Trust": `Things have been really hard between you (${otherChar}) and me (${mainChar}) and we both took some time for ourselves.`,
        "Figuring Things Out": `You seemed to have figured some stuff out about yourself, but I haven't been able to find much direction.`,
        "Conflict": `And so I kept my distance.`,
        "Harmony": `But then you reached out to see if we could start building up our relationship again. You were honest and explained your side of the story.`,
        "Fit & Compatibility": `But there were still complicated feelings for both of us. We both had things we liked and didn't like about each other.`,
        "Memories & Influences": `Not to mention all the bad memories with some good ones in between.`,
        "Losing Security & Trust": `Neither of us could fully trust the other and we were both scared to be hurt again.`,
        "FindingSecurity & Trust": `But we wanted to be able to trust in each other again someday. How does this go?`,

      },
      name: "You reached out and I was scared to get hurt… how does this go?",
      selected: false,
      narrData: [
        [0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0],
      ]
    },
    {
      id: "3",
      data: {
        "Fit & Compatibility": `I (${mainChar}) know you (${otherChar}) didn't like me and had a hard time understanding me.`,
        "Respect & Authority": `I know that you lost a lot of respect for me after what happened.`,
        "Memories & Influences": `Seeing me must have brought up some bad memories that you would have really liked to not think about.`,
        "Conflict": `I get why you wanted to keep your distance and felt uncomfortable if I offerent any help.`,
        "Harmony": `But all I really cared was to make sure that you were safe and taken care of.`,
        "Figuring Things Out": `I thought about what I should do and decided that I was going to try and be there for you, even if you didn't want me to. There might have be some wishful thinking that maybe it would make things better eventually.`,
        "Losing Security & Trust": `Even though we didn't have the most stable relationship, I felt that we both wanted for there to be some understanding between us. How does this go?`,
      },
      name: "I gave it my all and I really try to be there for you, even though you didn't like me then… how does this go?",
      selected: false,
      narrData: [
        [0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 0, 0],
      ]
    },
    {
      id: "4",
      data: {
        "Beginning & End": `Neither you (${otherChar}) nor I (${mainChar}) wanted to have a relationship with each other.`,
        "Respect & Authority": `At that point, we had lost a lot of respect for each other.`,
        "Conflict": `So we stopped trying. We let our relationship fall apart.`,
        "Expectations & Change": `We both decided to take some time for ourselves. To work on our issues, to rest and heal from everything we had endured. To have a chance to think about what went wrong.`,
        "Fit & Compatibility": `And even with all the bad memories and history, both of us still liked each other. But we had lost the ability to understand one another.`,
        "Finding Security & Trust": `And even with all that, we wanted to be able trust in each other again someday. How does this go?`,
      },
      name: "We needed to take some time apart before we tried to have a relationship again… how does this go?",
      selected: false,
      narrData: [
        [0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
      ]
    },
  ];

  const [select, setSelect] = useState(ClarityInTheFuture_PursuingHarmony);
  const [select2, setSelect2] = useState(ClarityInTheMoment_PursuingHarmony);
  const [select3, setSelect3] = useState(ClarityInTheFuture_AddressingConflict);
  const [select4, setSelect4] = useState(ClarityInTheMoment_AddressingConflict);

  const [narrName, setNarrName] = useState("");
  const [narrValue, setNarrValue] = useState("");
  const [narrValueSend, setNarrValueSend] = useState("");

  const [narrData, setNarrData] = useState(null);

  let textValueForNarr =
    flow === "clarityInTheFuture"
      ? phSelect
        ? select
        : select3
      : phSelect
      ? select2
      : select4;

  const getData = (item) => {
    const narrData = item.map((item) => item.data);
    const narrNames = item.map((item) => item.name);

    let data = {};
    for (var i = 0, l = narrData.length; i < l; i++) {
      data[narrNames[i]] = "";

      for (let [key, val] of Object.entries(narrData[i])) {
            data[narrNames[i]] += '\n\n'+ val;
      }
        
      }

    return data;
  };

  const handleOnPress = (item, select, setSelect) => {
    const localData = getData(textValueForNarr);

    const newItem = select.map((val) => {
      if (val.id === item.id) {
        return { ...val, selected: !val.selected };
      } else {
        return { ...val, selected: false };
      }
    });

    setNarrData(item.narrData)

    setSelect(newItem);
    const selectedNarr = newItem.filter((item) => !(item.selected == false));
    const narrativeName = selectedNarr.map((item) => item.name);
    setNarrName(narrativeName[0]);
    setNarrValue(localData[narrativeName[0]]);

  };
  
// for clarityInTheFuture
const handleOnPress1 = (item) => {
  handleOnPress(item, select, setSelect);
}

  //Pursuing Harmony (moment)
  const handleOnPress2 = (item) => {
  handleOnPress(item, select2, setSelect2);
}

  //understanding conflict (future)
  const handleOnPress3 = (item) => {
  handleOnPress(item, select3, setSelect3);
}

  //Understanding Conflict (moment)
const handleOnPress4 = (item) => {
  handleOnPress(item, select4, setSelect4);
}

  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          top: '5%',
          width: '95%',
          marginHorizontal: '2.5%'
        }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.goBack('Perspective2');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#000000" />}
        />
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('HomeScreen')}}
          icon={<Ionicons name="close" size={24} color="#000000" />}
          />
      </View>
      <View style={{top: '5%', 
      marginRight: '15%', 
      marginBottom: '8%',
      flexdirection: 'row',
      justifyContent: 'center',
      width: '90%',
      height: 60,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,}}>
        <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 22,
            fontWeight: '300',
            letterSpacing: 0,
            color: '#000000',
            marginLeft: '5%',
            marginRight: '5%'
          }}>
          What's {mainChar}'s story with {otherChar}? 
        </Text>
        <Text
          style={{
             marginLeft: '5%',
            fontFamily: "WorkSans-Light",
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: "300",
            color: "#000000",
          }}
        >
          (You can change this later)
        </Text>
      </View>

      

      <SafeAreaView style={{marginTop: '0%'}}>
      <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 22,
            fontWeight: '400',
            letterSpacing: 1,
            color: '#000000',
            marginLeft: '4%',
            marginRight: '5%',
            marginBottom: '2%',
            marginTop: '8%'
          }}>
          Story Themes
        </Text>
        <ScrollView
          style={{}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              setphSelect(true);
              setacSelect(false);
            }}
            style={{
              width: '53%',
              height: 30,
            }}>
            <Text
              style={phSelect ? styles.textSelected : styles.textUnselected}>
              Pursuing Harmony
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setacSelect(true);
              setphSelect(false);
            }}
            style={{
              width: '55%',
              height: 30,
            }}>
            <Text
              style={acSelect ? styles.textSelected : styles.textUnselected}>
              Understanding Conflict
            </Text>

          </TouchableOpacity>
        </ScrollView>
        <FlatList
          data={
            flow === "clarityInTheFuture"
              ? phSelect
                ? select
                : select3
              : phSelect
              ? select2
              : select4
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                flow === "clarityInTheFuture"
                  ? phSelect
                    ? handleOnPress1(item)
                    : handleOnPress3(item)
                  : phSelect
                  ? handleOnPress2(item)
                  : handleOnPress4(item);
                !item.selected ? refRBSheet.current.open() : null;
              }}
              style={item.selected ? styles.buttonSelected : styles.button}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={
                    item.selected
                      ? styles.textButtonSelected
                      : styles.textButton
                  }
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          style={{paddingTop: '5%'}}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          ItemSeparatorComponent={() => {
            return (
                <View
                    style={{
                        height: "100%",
                        width: 20,
                    }} />
            );
        }}
        />
              <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '5%',
        }}>
      
<View style={{}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectNarrativesTutorial')
            }}
            style={{
              backgroundColor: '#18163A',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              width: 160,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'left',
                paddingHorizontal: 10,
                fontWeight: '400',
                fontSize: 16,
                color: '#fff5ef',
                fontFamily: 'WorkSans-Regular',
              }}>
              More info on how to write a story
            </Text>
          </TouchableOpacity>
      </View>
        
        <View style={{}}>

        <TouchableOpacity
       onPress={() => {
        mixpanel.track("Narrative_CustomStart");
        navigation.navigate("EditNarratives", {                
          narrData: null,
          flow: flow,
          mainChar: mainChar,
          otherChar: otherChar,
          relationship: relationship,
          emotions: emotions,
          gender: gender,
          age: age,
          trait: trait
        });
      }}
        style={{alignItems:'flex-end'}}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EDBDBA',
            width: 200,
            height: 60,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
             paddingHorizontal: 20}}>
            <Text style={styles.textNewNarr}>
              Click here to write the story from scratch
            </Text>
          </View>
        </TouchableOpacity>

        </View>
        </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        animationType={'slide'}
        openDuration={600}
        height={SCREEN_HEIGHT*.85}
        closeOnPressMask={true}
        onClose={null}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            backgroundColor: '#FFF5EF',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            alignItems: 'center',
          },
          draggableIcon: {
            backgroundColor: '#000000',
          },
        }}>
          <ScrollView>
            <Text style={styles.headButtonPopUp}>{narrName}</Text>
            <Text style={styles.textButtonPopUp}>{narrValue}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
             onPress={() => {
              refRBSheet.current.close();
              mixpanel.track("Narrative_CommonChangeStart");
              navigation.navigate("EditNarratives", {
                titleName: null,
                narrData: narrData,
                flow: flow,
                mainChar: mainChar,
                otherChar: otherChar,
                relationship: relationship,
                emotions: emotions,                
                gender: gender,
                age: age,
                trait: trait
              });
              }}
              style={styles.editButton}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "300",
                    fontSize: 20,
                    letterSpacing: 2,
                    color: "#000000",
                    fontFamily: "WorkSans-Thin",
                  }}
                >
                  Change
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
                navigation.navigate("FinalNarratives", {
                  titleName: null,
                  data: narrData,
                  emotions: emotions,
                  relationship: relationship,
                  gender: gender,
                  age: age,
                  flow: flow,
                  mainChar: mainChar,
                  otherChar: otherChar,
                  trait: trait,
                  length: narrData.flat().length
                });
              }}
              style={styles.doneButton}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "300",
                    fontSize: 20,
                    letterSpacing: 2,
                    color: "#FFF5EF",
                    fontFamily: "WorkSans-Thin",
                  }}
                >
                  Select
                </Text>
              </View>
            </TouchableOpacity>
        </View>
              </ScrollView>
      </RBSheet>

      </SafeAreaView>
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    buttonSelected: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EDBDBA',
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: -10,
      marginLeft: 15,
      marginBottom: 30,
      width: 190,
      height: 240,
      borderRadius: 30,

    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF5EF',
      paddingTop: 20,
      paddingLeft: 10, 
      paddingRight: 10,
      marginRight: -10,
      marginLeft: 15,
      marginBottom: 30,
      width: 190,
      height: 240,
      borderRadius: 30,
    },

    textButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: '10%',
      marginHorizontal: '2.5%',
      fontWeight: '300',
      fontSize: 18,
      color: '#000000',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 1
    },
    textButtonSelected: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: '10%',
      marginHorizontal: '2.5%',
      fontWeight: '300',
      fontSize: 18,
      color: '#000000',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 1
    },

    textSelected: {
      textAlign: 'center',
      paddingTop: 5,
      fontWeight: '300',
      fontSize: 16,
      color: '#000000',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 1,
      textDecorationLine: 'underline',
      textDecorationColor: '#FFF5EF',
    },

    textUnselected: {
      textAlign: 'center',
      paddingTop: 5,
      fontWeight: '300',
      fontSize: 16,
      color: '#000000',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 1,
    },
    headButtonPopUp: {
      textAlign: 'center',
      paddingTop: 20,
      paddingHorizontal: 20,
      fontWeight: '300',
      fontSize: 20,
      color: '#000000',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 1,
    },
    textButtonPopUp: {
      textAlign: 'left',
      marginHorizontal: '5%',
      marginBottom: '3%',
      fontWeight: '300',
      fontSize: 18,
      color: '#000000',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 1,
    },
    newNarrButton: {
      alignItems: 'center',
      backgroundColor: '#F6DEDC',
      marginHorizontal: '0%',
      marginBottom: 0,
      width: 340,
      height: 100,
      borderRadius: 60,
      borderWidth: 0.25,
      borderColor: '#FFF5EF'
    },
    editButton: {
      backgroundColor: '#EDBDBA',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '10%',
      marginLeft: '5%',
      marginRight: '2.5%',
      width: 150,
      height: 50,
      borderRadius: 50,
    },
    doneButton: {
      backgroundColor: '#18163A',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '10%',
      marginLeft: '2.5%',
      marginRight: '5%',
      width: 150,
      height: 50,
      borderRadius: 50,
    },
    textNewNarr: {
      textAlign: 'left',
      fontWeight: '300',
      fontSize: 16,
      color: '#000000',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 0
    },
  });

