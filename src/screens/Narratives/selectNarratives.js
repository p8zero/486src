import React, { useContext, useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import BackButton from "../../components/backButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import firestore from "@react-native-firebase/firestore";
import UserFlatList from "../../components/flatListPersonas";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AuthContextNarratives } from "../../navigation/AuthProviderNarratives";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRoute } from "@react-navigation/native";
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
        "Expectations & Choice": `${mainChar} tries really hard to be what ${otherChar} wants them to be. To live up to their expectations.`,
        "Conflict": `But there's a lack of appreciation from ${otherChar} of ${mainChar}'s efforts, not to mention the criticism that's being thrown ${mainChar}'s way.`,
        "Harmony": `It doesn't matter how hard ${mainChar} tries, how much they do exactly what ${otherChar} asks.`,
        "Respect & Authority": `Even though there might be mutual love there, ${otherChar} just doesn't seem to have much respect for ${mainChar}.`,
        "Figuring Things Out": `And ${otherChar} can't seem to look at ${mainChar} in a different light. It's left ${mainChar} wondering "how did we get here"? And feeling like they'll never be good enough... `,
      },
      name: "I do what they ask, but it's never good enough… how did we get here?",
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
        "Expectations & Change": `${mainChar} has done everything that was expected of them. All the responsibilities, all the burdens, all for ${otherChar}.`,
        "Conflict": `And yet, ${otherChar} doesn't seem to really appreciate all that effort. Instead, all ${mainChar} seems to get is disrespect and criticism from ${otherChar}. And ${mainChar} can't help but throw some criticism back.`,
        "Expectations & Change": `It's clear to ${mainChar} that ${otherChar} isn't going to change anytime soon.`,
        "Talking & Listening": `Now, neither person is doing that great of a job of communicating how they're feeling nor listening to the other person.`,
        "Respect & Authority": `And what's really lacking between them is a mutual respect.`,
        "Losing Security & Trust": `Neither ${mainChar} nor ${otherChar} feels good about their relationship with one another and it's left them wondering... how did we get here?`,
      },
      name: "I've done everything for them, but we don't get along… how did we get here?",
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
        "Harmony": `${mainChar} knows that, at the end of the day, ${otherChar} cares for them. And the feeling is mutual for ${mainChar}.`,
        "Conflict": `But lately, ${mainChar} can't help but feel that their desires, their wishes are being taken into account by ${otherChar}.`,
        "Expectations & Change": `And it's because ${otherChar} has decided to put a boundary on ${mainChar} and telling them what they cannot do.`,
        "Independence & Choice": `So ${mainChar} feels restricted from doing what they want to do, from being able to make their own decisions.`,
        "Figuring Things Out": `To ${mainChar}, it feels like ${otherChar} is refusing to accept the reality that maybe, these boundaries don't need to be there anymore.`,
        "Losing Security & Trust": `The whole situation brings up the question for ${mainChar}, why is it like this?`,
      },
      name: "I know they care about me, but they won't let me be free… why is it like this?",
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
        "Conflict": `Neither person really cares about how the other person feels right now.`,
        "Expectations & Change": `The core issue, at least for ${mainChar}, is that ${otherChar} is willfully choosing to ignore their responsibilities.`,
        "Independence & Choice": `Instead, ${otherChar} is doing whatever they want to do.`,
        "Expectations & Change": `And neither ${mainChar} nor ${otherChar} is backing down.`,
        "Talking & Listening": `There's no real, productive communication taking place between them.`,
        "Respect & Authority": `Whatever respect they might have had at one point for one another is now gone.`,
        "Figuring Things Out": `Both ${mainChar} and ${otherChar} have their own version of why things are the other person's fault. `,
        "Losing Security & Trust": `It's left ${mainChar} and ${otherChar} both feeling miserable, why is it like this?`,
 
      },
      name: "They won't do as I ask and it's getting more and more infuriating…. why is it like this?",
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
        "Conflict": `There's so much that ${mainChar} is enduring from ${otherChar}. Criticism, manipulations, pressure, a lack of respect for boundaries, a complete disregard of ${mainChar}'s feelings or wishes.`,
        "Talking & Listening": `Even though it's really bad, ${mainChar} is holding back from saying anything because they feel ${otherChar} isn't listening.`,
        "Expectations & Change": `And even though ${mainChar} is working to meeting expectation, it's not good enough for ${otherChar}. In fact, ${otherChar} is using punishment as a way to get ${mainChar} to do things a certain way.`,
        "Independence & Choice": `This disparity, where ${mainChar} feels trapped, pushed down and unable to make their own decisions while ${otherChar} is doing whatever they want... is wearing heavily on ${mainChar}`,
        "Figuring Things Out": `And it doesn't seem like ${otherChar} is aware of what is happening. All of this leaves ${mainChar} without a clue of what to do about this and wondering how things got here?`,
      },
      name: "They are so controlling and I'm stuck… how did we get here?",
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
        "Conflict": `Things have gotten really bad between ${mainChar} and ${otherChar}. Criticism, blame, complete rudeness and disrespect, not to a mention a complete disregard of the other person's feelings or wishes.`,
        "Respect & Authority": `Whatever respect ${mainChar} and ${otherChar} may have had for one another, it's all gone now.`,     
        "Talking & Listening": `All this has made it really hard for any conversations to take place and both ${mainChar} and ${otherChar} have resorted to not really sharing anything.`,
        "Expectations & Change": `And neither person feels like they have to be the one to change.`,
        "Figuring Things Out": `Not only that, but both ${mainChar} and ${otherChar} have their own version of why things are the other person's fault.`,
        "Losing Security & Trust": `Nobody is happy, both ${mainChar} and ${otherChar} are stressed out of their minds because of this... why is it this way?`,
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
        "Figuring Things Out": `${mainChar} and ${otherChar} both took the time to really figure out who they need to be in order to have respectful and trusting relationship with one another.`,
        "Harmony": `One where each person is attentive and considerate of the needs and desires of the other.`,
        "Respect & Authority": `One where mutual respect is given and even grows with time.`,
        "Expectations & Change": `And one of the core foundations of this relationship is that both ${mainChar} and ${otherChar} really care about being and doing what the other person expects of them.`,
        "Finding Security & Trust": `With this, both ${mainChar} and ${otherChar} are able to trust one another and know that this is someone they can count on. But what path did they take to get here?`,
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
        "Figuring Things Out": `${mainChar} and ${otherChar} both took the time to really figure out who they need to be in order for better communication to occur between them.`,
        "Talking & Listening": `A relationship where both ${mainChar} and ${otherChar} know what to say, how to say it and to listen well to the other person.`,
        "Harmony": `All because both of them make a real effort to really know the other person. To be attentive to their needs and how they feel in any given moment. And to be honest about how they feel.`,
        "Finding Security & Trust": `A relationship where both ${mainChar} and ${otherChar} know they can say what they need to without feeling attacked or put down or ignored. But what path did they take to get here?`,
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
        "Figuring Things Out": `${mainChar} and ${otherChar} are able to work together to figure out how to come to a practical, thought out compromise.`,
        "Harmony": `A discussion where both sides are able to be considerate of what the other person needs while sacrificing some of their own desires.`,
        "Talking & Listening": `Facilitated by good communication from both sides, where both ${mainChar} and ${otherChar} are able to clearly state their thoughts and listen to the other person.`,
        "Expectations & Change": `And ultimately, this compromise allow both ${mainChar} and ${otherChar} to establish acceptable boundaries on each other.`,
        "Independence & Choice": `And while ${otherChar} is now committing to meet the expectations ${mainChar} has for them, ${otherChar} also has the freedom to live their life within those boundaries. But what path did they take to get here?`,
      },
      name: "We've reached a compromise between my expectations and their independence… how do we get here?",
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
        "Figuring Things Out": `${mainChar} and ${otherChar} both took the time to really figure out who they need to be in order to have a relationship that works for both of them.`,
        "Conflict": `A relationship where at times, it's not going to be that close and neither side is going to make much of an effort.`,
        "Harmony": `And then in other times, both ${mainChar} and ${otherChar} are going to come back to build up their relationship again.`,
        "Expectations & Change": `With a mutual understanding of what each other's boundaries are.`,
        "Independence & Choice": `So that both ${mainChar} and ${otherChar} can go and live their lives the way they want to.`,
        "Finding Security & Trust": `And ultimately gives ${mainChar} a chance to rest and heal from the past struggles of their relationship with ${otherChar}. But what path did they take to get here?`,
      },
      name: "We have an understanding between us, its not perfect, but it works… how do we get here?",
      selected: false,
      narrData: [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        "Harmony": `${mainChar} and ${otherChar} have a deep relationship that is important to both of them. They both spend a lot of time and energy for their relationship, are there for each other when things get hard and will always protect the other from potential harm.`,
        "Talking & Listening": `Both ${mainChar} and ${otherChar} know how to talk to the other person.`,
        "Respect & Authority": `And over time, both of them have grown in their respect for one another.`,
        "Finding Security & Trust": `It's a relationship that both people can put their complete trust in. But what path did they take to get here?`,
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
        "Expectations & Change": `${mainChar} is trying really hard to be what ${otherChar} wants them to be. To live up to the expectations ${otherChar} has asked them to met. Expectations that have no signs of changing.`,     
        "Conflict": `But ${otherChar} doesn't appreciate the effort that ${mainChar} is putting in. There is only criticism and blame from ${otherChar}.`,
        "Harmony": `Even though it hurts that ${otherChar} isn't seeing that effort, ${mainChar} doesn't want to do anything to upset ${otherChar}.`,
        "Talking & Listening": `And it's not like ${otherChar} is doing a great job of listening these days anyways.`,
        "Respect & Authority": `What really stings for ${mainChar} is that they really do respect ${otherChar}. It's one of the reasons they are trying so hard. But it's beginning to be clear that ${otherChar} doesn't share that same kind of respect for ${mainChar}.`,
        "Fit & Compatibility": `Even with that respect, there's little that ${mainChar} and ${otherChar} like about each other. They don't really have any common ground and ${otherChar} has a hard time understanding what ${mainChar} is going through in this relationship.`,
        "Figuring Things Out": `Not only does ${otherChar} not understand, they feel like their attitude and behavior towards ${mainChar} is rather justified.`,
        "Memories & Influences": `And this has going on for some time, so both ${mainChar} and ${otherChar} have a lot of bad memories of one another.`,
        "Losing Security & Trust": `All this leaves ${mainChar} without a sense of confidence, feeling like they've been treated unfairly and completely stuck. But it's hard for ${mainChar} to change anything because they don't want to disappoint ${otherChar}. But how does this end up?`,
      },
      name: "It's never good enough no matter what I do… how does this end up?",
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
        "Conflict": `Neither ${mainChar} nor ${otherChar} really cares about respecting the other person's wishes and they both have their reasons.`,
        "Harmony": `For ${otherChar}, its about the safety and protection of ${mainChar}.`,
        "Expectations & Change": `${otherChar} believes that ${mainChar}'s behavior is going to lead somewhere bad and is asking them to change.`,
        "Independence & Choice": `For ${mainChar}, it's about being able to live their life as they want to.`,
        "Conflict": `And ${otherChar}'s desire for them to change makes ${mainChar} feel uncomfortable.`,
        "Respect & Authority": `While ${mainChar} feels uncomfortable about all this, it doesn't change the fact that ${otherChar} has their respect and it's one of the reasons why ${mainChar} hasn't tried to push more. But that respect doesn't seem to quite be there for ${otherChar}.`,
        "Talking & Listening": `Given all this, both ${mainChar} and ${otherChar} are having a hard time listening to one another.`,
        "Fit & Compatibility": `Now, both ${mainChar} and ${otherChar} actually quite like each other. But it's hard to build on that because there's not much common ground between them and both sides are having a hard time understanding the other.`,
        "Losing Security & Trust": `It's made ${mainChar} feel much less confident in their relationship with ${otherChar}, like they have been treated unfairly and completely stuck. Both of them are quite stressed out by all this. But it's really hard for ${otherChar} to let go because they are scared of what might happen.`,
        "Finding Security & Trust": `${mainChar} really wants this to get better so that all these stressful and insecure feelings go away. But how does this end up?`,
      },
      name: "I need to be my own person, but they won't let me… how does this end up?",
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
        "Expectations & Change": `${mainChar} wants to do the right thing by trying to ensure that ${otherChar} behaves a certain way.. After all, it is what they should be doing, given the responsibility they feel for ${otherChar}. Not to mention that in ${mainChar}'s mind, ${otherChar} doesn't really know what they are doing. But ${otherChar} really has no desire to do what ${mainChar} expects of them. And neither person is willing to change.`, 
        "Conflict": `So, neither ${mainChar} nor ${otherChar} really cares about what the other person wants. It's a battle of wills. Both sides are always pushing each other's buttons and ${mainChar} can't help but tell ${otherChar} what they are doing wrong.`,
        "Independence & Choice": `It really restricts ${otherChar} from doing what they want to do.`,
        "Harmony": `And for ${mainChar}, it's also because they want to protect ${otherChar} from potential future pain. That fear of what could happen really drives ${mainChar}.`,
        "Respect & Authority": `As this has gone on, both ${mainChar} and ${otherChar} have lost a lot of respect for each other. And right now, having that respect is a big deal for ${otherChar}.`,
        "Talking & Listening": `Needless to say, both ${mainChar} and ${otherChar} are having a hard time communicating with one another.`,
        "Fit & Compatibility": `And as they grow farther apart, there is less that is keeping them together. Not to mention, it's getting harder for both of them to understand what the other person is thinking and feeling,.`,
        "Memories & Influences": `There's a cloud of bad memories that plague both ${mainChar} and ${otherChar}`,
        "Losing Security & Trust": `It makes both of them feel stressed out, completely stuck and unable to have faith and trust.`,
        "Finding Security & Trust": `Both ${mainChar} and ${otherChar} really want a way to make things more stable between them. But how does this end up?`,
      },
      name: "I think I'm doing the right thing by making sure they don't do the wrong thing… how does this end up?",
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
        "Expectations & Change": `Both ${mainChar} and ${otherChar} are trying to do what they are supposed to do. Fulfilling all their responsibilities, their duties. Working to grow and be better people.`,
        "Independence & Choice": `And while it what both of them want to be doing, it's causing both of them quite a bit of stress.`,
        "Conflict": `And there's another cost. All this means that ${mainChar} and ${otherChar} aren't able to spend much time with each other and care for each other's needs.`,
        "Harmony": `But neither of them want to start a confrontation.`,
        "Talking & Listening": `And so there are many things that are being left unsaid.`,
        "Fit & Compatibility": `Both ${mainChar} and ${otherChar} really like each other and like being around each other.`,
        "Losing Security & Trust": `But neither person can help but feel more and more insecure in their relationship with one another and that nothing is really changing. It's causing both of them to look for their own ways to escape from the stress and uncertainty.`,
        "Finding Security & Trust": `And while both ${mainChar} and ${otherChar} really wants things to be better, neither person really has a clear mind on what is truly happening. Both of them have rationalized their own way of explaining the lack of closeness in the relationship. But how does this end up?`,
      },
      name: "We're both doing so much and it seems like we're losing touch… how does this end up?",
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
        "Conflict": `For ${mainChar}, this is a bad situation. ${otherChar} does not care about what ${mainChar} feels or thinks. They are critical, manipulative, disrespectful, insensitive and controlling.`,
        "Harmony": `But ${mainChar} does not like confrontation.`,
        "Talking & Listening": `And so ${mainChar} is holding their true feelings back. It's not like they feel that ${otherChar} is going to be listening to them anyways.`,
        "Respect & Authority": `But another reason ${mainChar} doesn't say anything is that ${otherChar} commands respect. And it's clear that what ${otherChar} wants is more of that.`,
        "Expectations & Change": `So, ${otherChar} has no incentive or desire to change how they live their life or how they treat others. All ${otherChar} has to do is rationalize their behavior and they can keep going.`,
        "Independence & Choice": `As far as ${otherChar} is concerned, they have complete autonomy. But for ${mainChar}, they feel restricted and unable to live their life.`,
        "Resources & Opportunity": `And ${mainChar} feels they do not have what they need to get out of this situation.`,
        "Fit & Compatibility": `It's no secret that neither ${mainChar} nor ${otherChar} like each other that much, that there's not much common ground between them and that neither of them really cares to understand the viewpoint of the other.`,
        "Losing Security & Trust": `But while ${otherChar} can keep going, for ${mainChar} it's causing all sort of bad feelings. It's crushing ${mainChar}'s confidence, causing them stress, making them feel unfairly treated, completely trapped and ultimately, in a state of desperation. In ${mainChar}'s, this has gone too far, but because of this desperation, they are full fear of being even more hurt and are choosing to try and numb the pain somehow.`,
        "Finding Security & Trust": `While ${mainChar} wants desperately to protect themselves from this situation, they have no answers and direction on what to do. How does this end up?`,
      },
      name: "They are so controlling and there's no easy way out… how does this end up?",
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
        "Figuring Things Out": `${mainChar} has spent a lot of time reflecting on what went wrong and figuring out what they can do to mend their relationship with ${otherChar}.`,       
        "Conflict": `But ${otherChar} has been distant and doesn't really care to engage with ${mainChar}. So ${mainChar} has decided that they will make the initial effort and approach ${otherChar}. To be honest with them regardless of how it turns out.`,
        "Talking & Listening": `To explain their side of the story and how they understand ${otherChar}'s point of view.`,
        "Fit & Compatibility": `And that while there are complicated feelings on both sides and seemingly little that bonds them together anymore...`,
        "Memories & Influences": `That there were good times and memories along with the bad.`,
        "Losing Security & Trust": `Both ${mainChar} and ${otherChar} know that there is still some mistrust between them and both of them fear that they will be hurt again.`,
        "Finding Security & Trust": `But there's is a desire from both ${mainChar} and ${otherChar} to be able to trust in each other again, someday. How does this go?`,
      },
      name: "I'm taking the first step towards mending our relationship… how does this go?",
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
        "Finding Security & Trust": `Things have been really hard between ${mainChar} and ${otherChar} and both of them had decided to take some time to try and heal from everything that had happened.`,
        "Figuring Things Out": `In that time, ${otherChar} has really figured some stuff out about themselves and where things went wrong, but ${mainChar} hasn't been able to find much direction.`,
        "Conflict": `And so ${mainChar} has kept their distance.`,
        "Harmony": `But then ${otherChar} reached out and to try and mend the relationship. They were honest and explained their side of the story in a way that really resonated with ${mainChar}.`,
        "Fit & Compatibility": `Now there are still complicated feelings on both sides. Both ${mainChar} and ${otherChar} have things that they like about the other and things that they don't like. And the more time goes on, there is less and less holding them together.`,
        "Memories & Influences": `It's all made complicated by all the history and memories. Good intertwined with bad.`,
        "Losing Security & Trust": `Both ${mainChar} and ${otherChar} know that there is still some mistrust between them and both of them fear that they will be hurt again.`,
        "Finding Security & Trust": `But there's is a desire from both ${mainChar} and ${otherChar} to be able to trust in each other again, someday. How does this go?`,

      },
      name: "They're reaching out and I'm scared… how does this go?",
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
        "Harmony": `${mainChar} really cares about ${otherChar}'s well-being and wants to make sure that they are protected and taken care of.`,
        "Figuring Things Out": `${mainChar} has taken some time to reflect on themselves and what's happened in their relationship with ${otherChar} and has come up with a plan of what they want to do. ${mainChar} is hoping for the best, even though it might be wishful thinking.`,      
        "Conflict": `Because ${otherChar} wants to keep their distance from ${mainChar} and feels uncomfortable about what ${mainChar} is offering.`,
        "Respect & Authority": ` The things that happened between them has caused ${otherChar} to lose a lot of respect for ${mainChar} and that's not likely to change anytime soon.`,
        "Fit & Compatibility": `And while ${mainChar} still has a lot that they like about ${otherChar}, the same can't be said of ${otherChar}. And it's really hard for ${otherChar} to understand where ${mainChar} is coming from.`,
        "Memories & Influences": `Just thinking about ${mainChar} brings up some bad memories and feelings for ${otherChar} that they would really like to escape from.`,
        "Losing Security & Trust": `Both ${mainChar} and ${otherChar} have their insecurities when it comes to their relationship, but there is some desire within both of them to see if things might change for the better. How does this go?`,
      },
      name: "I'm going to give it my all and really try to be there for them, even though they don’t like me… how does this go?",
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
        "Beginning & End": `Maybe one day things will be different, but right now, neither ${mainChar} nor ${otherChar} wants to have a relationship with one another.`,
        "Conflict": `And neither side wants to put in any more effort into the relationship, to try and care about what the other wants.`,
        "Respect & Authority": `There's been a lot of respect lost on both sides.`,
        "Expectations & Change": `And so, both ${mainChar} and ${otherChar} have decided to take some time for themselves. To work on building better habits, to rest and heal from the pain that they've endured. To have some time to just live their own life the way they want to. And to real figure out what went wrong and their piece of it is.`,
        "Fit & Compatibility": `And even with all the bad memories and history, both ${mainChar} and ${otherChar} still like each other. They just have lost the ability to understand the other's point of view,`,
        "Finding Security & Trust": `But there's is a desire from both ${mainChar} and ${otherChar} to be able to trust in each other again, someday. How does this go?`,
      },
      name: "We need to take some time apart before we try a relationship again… how does this go?",
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
            data[narrNames[i]] += key + '\n\n'+ val + "\n\n";
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
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('HomeScreen')}}
          icon={<Ionicons name="close" size={24} color="#18163A" />}
          />
      </View>
      <View style={{top: '5%', 
      marginLeft: '4%', 
      marginRight: '15%',}}>
        <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 22,
            fontWeight: '300',
            letterSpacing: 1,
            color: '#18163A'
          }}>
          What's the narrative between {mainChar} and {otherChar}? 
        </Text>
      </View>
      <View style={{ 
        alignItems: 'center',  
          borderBottomColor: '#FFF5EF',
          borderBottomWidth: 1,
          marginTop: '12%'}}>
          </View>
      <SafeAreaView style={{marginTop: '10%'}}>
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
              width: '125%',
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
              width: '140%',
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
      

        
        <View style={{marginTop: '5%'}}>

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
        style={{alignItems: 'flex-end'}}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFF5EF',
            width: SCREEN_WIDTH*.9,
            height: SCREEN_HEIGHT*.12,
             borderTopLeftRadius: 50,
             borderBottomLeftRadius: 50,
             paddingHorizontal: '5%'}}>
            <Text style={styles.textNewNarr}>
              Build the narrative between {mainChar} and {otherChar}
            </Text>
          </View>
        </TouchableOpacity>

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
            backgroundColor: '#18163A',
          },
        }}>
          <ScrollView>
            <Text style={styles.headButtonPopUp}>{narrName}</Text>
            <Text style={styles.textButtonPopUp}>{narrValue}</Text>
          </ScrollView>
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
                    color: "#18163A",
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
      height: 250,
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
      height: 250,
      borderRadius: 30,
    },

    textButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: '10%',
      marginHorizontal: '2.5%',
      fontWeight: '300',
      fontSize: 18,
      color: '#18163A',
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
      color: '#18163A',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 1
    },

    textSelected: {
      textAlign: 'center',
      paddingTop: 5,
      fontWeight: '300',
      fontSize: 16,
      color: '#18163A',
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
      color: '#18163A',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 1,
    },
    headButtonPopUp: {
      textAlign: 'center',
      paddingTop: 20,
      paddingHorizontal: 10,
      fontWeight: '300',
      fontSize: 20,
      color: '#18163A',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 2,
    },
    textButtonPopUp: {
      textAlign: 'left',
      marginTop: '10%',
      marginHorizontal: '5%',
      fontWeight: '300',
      fontSize: 18,
      color: '#18163A',
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
      marginTop: '15%',
      marginBottom: '10%',
      marginLeft: '5%',
      marginRight: '0%',
      width: 150,
      height: 50,
      borderRadius: 50,
    },
    doneButton: {
      backgroundColor: '#18163A',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '15%',
      marginBottom: '10%',
      marginLeft: '0%',
      marginRight: '5%',
      width: 150,
      height: 50,
      borderRadius: 50,
    },
    textNewNarr: {
      textAlign: 'left',
      marginHorizontal: '5%',
      fontWeight: '300',
      fontSize: 18,
      color: '#18163A',
      fontFamily: 'WorkSans-Thin',
      letterSpacing: 0
    },
  });

