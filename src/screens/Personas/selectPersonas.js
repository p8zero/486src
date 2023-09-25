import React, { useContext, useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import BackButtonPersona from "../../components/backButtonPersona";
import Ionicons from "react-native-vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Mixpanel } from 'mixpanel-react-native';


export default function SelectPersonas({ route, navigation }) {
  const { newPers, id, age, gender, path, data } = route.params;
  const refRBSheet = useRef();

  const trackAutomaticEvents = true;
    const mixpanel = new Mixpanel("2100a249cd1d52d225d1c040909d6c79", trackAutomaticEvents);
    mixpanel.init();

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

  const Common_Personas = [
    {
        id: '1',
        name: 'The Scared and Indecisive One',
        selected: false,
        data: [
            {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'NS',
            facet: 'Industriousness/Diligence',
            },
            {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'Y',
            facet: 'Orderliness/Organization',
            },
            {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'NS',
            facet: 'Achivement',
            },
            {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'N',
            facet: 'Resources',
            },
            {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'N',
            facet: 'Enthusiasm/Liveliness',
            },
            {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'N',
            facet: 'Stimulation',
            },
            {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'N',
            facet: `Hedonism`,
            },
            {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'N',
            facet: `Assertiveness`,
            },
            {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'N',
            facet: 'Dominance',
            },
            {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'NS',
            facet: 'Volatility',
            },
            {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'NS',
            facet: 'Dishonesty',
            },
            {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'NS',
            facet: 'Face',
            },
            {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'Y',
            facet: 'Honesty',
            },
            {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'NS',
            facet: 'Humility',
            },
            {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'NS',
            facet: 'Compassion/Forgiveness',
            },
            {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'NS',
            facet: 'Caring',
            },
            {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'NS',
            facet: 'Dependability',
            },
            {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'Y',
            facet: 'Politeness/Flexibility',
            },
            {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'Y',
            facet: 'Interpersonal',
            },
            {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
            },
            {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'Y',
            facet: 'Withdrawal / Anxiety',
            },
            {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
            },
            {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'NS',
            facet: 'Intellect',
            },
            {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'NS',
            facet: 'Creativity',
            },
            {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
            },
            {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'NS',
            facet: 'Societal Security',
            },
            {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'NS',
            facet: 'Tradition',
            },
            {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'NS',
            facet: 'Rules',
            },
            {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'NS',
            facet: 'Concern',
            },
            {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'Y',
            facet: 'Tolerance',
            },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'NS',
            facet: 'Nature',
        },
        ],
    },
    {
      id: '2',
      name: 'The Angry, Controlling One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'NS',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'NS',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'NS',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'NS',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'NS',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'NS',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'NS',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'Y',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'Y',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'Y',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'NS',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'Y',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'NS',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'N',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'N',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'N',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'N',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'N',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'N',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'N',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'N',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'NS',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'N',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'NS',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'NS',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'NS',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'NS',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'NS',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'NS',
            facet: 'Nature',
        },
      ],
  },
  {
      id: '3',
      name: 'The Driven One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'Y',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'Y',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'Y',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'Y',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'NS',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'NS',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'N',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'Y',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'Y',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'NS',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'NS',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'Y',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'YS',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'N',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'N',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'NS',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'NS',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'N',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'N',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'Y',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'Y',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'NS',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'NS',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'NS',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'NS',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'NS',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'NS',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'NS',
            facet: 'Nature',
        },
      ],
  },
  {
      id: '4',
      name: 'The Steady and Responsible One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'Y',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'Y',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'Y',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'N',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'N',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'N',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'N',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'Y',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'NS',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'N',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'N',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'Y',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'Y',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'Y',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'Y',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'NS',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'Y',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'NS',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'NS',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'N',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'NS',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'N',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'NS',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'NS',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'Y',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'NS',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'NS',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'NS',
            facet: 'Nature',
        },
      ],
  },
  {
      id: '5',
      name: 'The Caring, Nurturing One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'Y',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'Y',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'NS',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'N',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'NS',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'N',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'N',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'N',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'N',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'N',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'N',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'NS',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'Y',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'Y',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'Y',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'Y',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'Y',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'Y',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'Y',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'NS',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'NS',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'N',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'NS',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'NS',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'NS',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'NS',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'NS',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'NS',
            facet: 'Nature',
        },
      ],
  },
  {
      id: '6',
      name: 'The Creative and Artistic One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'NS',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'N',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'Y',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'NS',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'N',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'Y',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'NS',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'Y',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'NS',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'NS',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'NS',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'Y',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'NS',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'NS',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'NS',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'NS',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'NS',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'NS',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'NS',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'Y',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'NS',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'Y',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'NS',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'NS',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'NS',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'NS',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'NS',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'NS',
            facet: 'Nature',
        },
      ],
  },
  {
      id: '7',
      name: 'The Fun and Excitement Loving One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'N',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'N',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'N',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'NS',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'Y',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'Y',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'Y',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'Y',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'NS',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'NS',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'NS',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'NS',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'NS',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'NS',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'NS',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'NS',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'NS',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'Y',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'Y',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'NS',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'N',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'N',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'NS',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'NS',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'NS',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'NS',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'NS',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'NS',
            facet: 'Nature',
        },
      ],
  },
  {
      id: '8',
      name: 'The Mischeivous One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'Y',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'NS',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'NS',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'NS',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'Y',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'Y',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'NS',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'Y',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'Y',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'Y',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'Y',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'NS',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'N',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'N',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'N',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'NS',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'NS',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'N',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'N',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'NS',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'NS',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'NS',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'NS',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'NS',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'NS',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'NS',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'NS',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'NS',
            facet: 'Nature',
        },
      ],
  },
  {
      id: '9',
      name: 'The Traditional One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'Y',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'NS',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'Y',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'NS',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'NS',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'N',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'N',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'Y',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'Y',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'NS',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'N',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'Y',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'Y',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'NS',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'NS',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'NS',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'NS',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'N',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'NS',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'NS',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'NS',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'N',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'Y',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'Y',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'Y',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'N',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'N',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'N',
            facet: 'Nature',
        },
      ],
  },
  {
      id: '10',
      name: 'The Progressive One',
      selected: false,
      data: [
        {
            id: '0',
            question: `I usually work hard and put a lot of effort into achieving my goals`,
            yes: `I'm usually diligent and work hard. `,
            no: `I don't always work very hard. `,
            val: 'Y',
            facet: 'Industriousness/Diligence',
        },
        {
            id: '1',
            question: `I like to be organized, have routines and often pay attention to details`,
            yes: `I'm usually very organized and detail oriented. `,
            no: `I can be unorganized at times and tend to miss details. `,
            val: 'NS',
            facet: 'Orderliness/Organization',
        },
        {
            id: '2',
            question: `I'm often motivated by success and have a desire to show people how capable I am`,
            yes: `I want to be successful and am constantly trying to achieve. `,
            no: `Being successful isn't typically something I'm motivated by.`,
            val: 'Y',
            facet: 'Achivement',
        },
        {
            id: '3',
            question: `Obtaining wealth and high social status is something that I really want`,
            yes: `I care a lot about being wealthy and having high social status. `,
            no: `I don't really care that much about being wealthy and having a high social status. `,
            val: 'NS',
            facet: 'Resources',
        },
        {
            id: '4',
            question: `I tend to make friends easily and like to spend my time with people`,
            yes: `I'm usually very friendly and outgoing. `,
            no: `I can be hard to get to know and tend to be a private person. `,
            val: 'NS',
            facet: 'Enthusiasm/Liveliness',
        },
        {
            id: '5',
            question: `I'm often looking for new and exciting things to do`,
            yes: `I'm constantly drawn towards finding new and exciting experiences. `,
            no: `I don't go out of my way to look for new experiences. `,
            val: 'N',
            facet: 'Stimulation',
        },
        {
            id: '6',
            question: `I'm often looking to have a good time, be comfortable and enjoy my life`,
            yes: `I'm often looking good time or finding ways to enjoy my life. `,
            no: `Having a good time and enjoying my life aren't things I tend to go looking for. `,
            val: 'N',
            facet: `Hedonism`,
        },
        {
            id: '7',
            question: `I tend to say what I think and often try to take the lead`,
            yes: `I tend to have a strong personality and I usually say what's on my mind. `,
            no: `I find it hard to say what I think and usually let other people make the decisions. `,
            val: 'Y',
            facet: `Assertiveness`,
        },
        {
            id: '8',
            question: `I'm often motivated by authority, influence and for others to do what I say`,
            yes: `Having people to do what I want and gaining influence over them is something I typically want. `,
            no: `I don't really have much desire to gain influence over people or have them do what I want. `,
            val: 'Y',
            facet: 'Dominance',
        },
        {
            id: '9',
            question: `I typically get frustrated easily and can lose my temper at times`,
            yes: `I have a hard time managing my frustrations and temper. `,
            no: `I'm usually calm under pressure and rarely get irritated. `,
            val: 'NS',
            facet: 'Volatility',
        },
        {
            id: '10',
            question: `I might take advantage of people or pretend to be something I'm not, especially when it benefits me`,
            yes: `I can be dishonest or insincere when it might benefit me. `,
            no: ``,
            val: 'N',
            facet: 'Dishonesty',
        },
        {
            id: '11',
            question: `I tend to care about my reputation and will try hard to avoid being embarrased`,
            yes: `I care about my reputation and how I look to other people. `,
            no: `I'm not that concerned with my reputation and how I look to other people. `,
            val: 'Y',
            facet: 'Face',
        },
        {
            id: '12',
          question: `I probably wouldn't cheat or lie to get what I want, even if I could get away with it`,
          yes: `I tend to be honest and sincere, even when no one is watching. `,
          no: ``,
            val: 'Y',
            facet: 'Honesty',
        },
        {
            id: '13',
          question: `I don't like to think of myself as better than others and want to stay humble`,
          yes: `I usually try to be as modest and humble as I can. `,
          no: `I don't usually go out of my way to ensure that I'm being modest or humble. `,
            val: 'NS',
            facet: 'Humility',
        },
        {
            id: '14',
            question: `I'm usually concerned about the needs of others and I try to forgive and forget`,
            yes: `I try to be as kind and forgiving of others as I can be. `,
            no: `I tend not to care about others and I'm prone to holding grudges. `,
            val: 'NS',
            facet: 'Compassion/Forgiveness',
        },
        {
            id: '15',
            question: `I usually care about the well-being of the people that I'm close with`,
            yes: `I try to my best to care for the people in my life. `,
            no: `I'm not always motivated to care for the well-being of the people in my life.`,
            val: 'NS',
            facet: 'Caring',
        },
        {
            id: '16',
            question: `I care about being loyal, dependable and trustworthy to the people close to me`,
            yes: `I try my best to be loyal, dependable and trustworthy to those I am close with. `,
            no: `I don't usually go out of my way to be loyal and dependable to the people I'm close with. `,
            val: 'NS',
            facet: 'Dependability',
        },
        {
            id: '17',
            question: `I don't typically criticize others and am usually easy to reason with`,
            yes: `I'm usually polite and easy to reason with. `,
            no: `I can be rude at times and can be difficult to reason with. `,
            val: 'N',
            facet: 'Politeness/Flexibility',
        },
        {
            id: '18',
            question: `I tend to not want to upset anyone or do anything people would disapprove of`,
            yes: `I try my best to not upset anyone or cause any conflict. `,
            no: `I'm not always motivated to avoid upsetting others or avoid causing conflict. `,
            val: 'NS',
            facet: 'Interpersonal',
        },
        {
            id: '19',
            question: `Feeling secure and avoiding potential dangers is usually very important to me`,
            yes: `I tend to care about my personal safety and security. `,
            no: `I don't usually care that much about my personal safety and security. `,
            val: 'Y',
            facet: 'Personal Security',
        },
        {
            id: '20',
            question: `I typically feel anxious and am easily discouraged`,
            yes: `I have a hard time managing my anxieties and worries. `,
            no: `I'm usually confident and rarely feel worried`,
            val: 'NS',
            facet: 'Withdrawal / Anxiety',
        },
        {
            id: '21',
            question: `It's important to me that I can form my own opinions and learn things for myself`,
            yes: `I want to be able to think freely and form my own opinions. `,
            no: `I'm not that concerned with having my ideas or opinions. `,
            val: 'Y',
            facet: 'Thought',
        },
        {
            id: '22',
            question: `I tend to learn things quickly and like to solve complex problems`,
            yes: `I tend to understand things quickly and am drawn to complex problems. `,
            no: `I usually learn things slowly and have a hard time understanding complex ideas. `,
            val: 'NS',
            facet: 'Intellect',
        },
        {
            id: '23',
            question: `I usually have a vivid imagination and tend to look for deeper meaning in things`,
            yes: `I have a vivid imagination and like to look for deeper meaning in things. `,
            no: `I don't have a vivid imagination and rarely look for deeper meaning in things. `,
            val: 'N',
            facet: 'Creativity',
        },
        {
            id: '24',
            question: `It's important to me that I make my own decisions and have the freedom to choose what I do`,
            yes: `I really care about being able to make my own decisions and choices. `,
            no: `It's not that important to me that I make my own decisions and choices. `,
            val: 'Y',
            facet: 'Action',
        },
        {
            id: '25',
            question: `It's important to me that my society or country protects itself against all threats`,
            yes: `I tend to care about whether or not my society or country is protecting itself against threats. `,
            no: `I don't usually care too much about whether or not my society or country is protecting itself. `,
            val: 'N',
            facet: 'Societal Security',
        },
        {
            id: '26',
            question: `Maintaining the traditional values and customs of my family, culture or religion is important to me`,
            yes: `I want to maintain the traditional values and practices of my family, culture or religion. `,
            no: `I don't really care to follow or maintain traditional values and practices. `,
            val: 'N',
            facet: 'Tradition',
        },
        {
            id: '27',
            question: `It's important that I follow the rules and do what people in authority say`,
            yes: `I tend to care about following the rules and doing what people in authority say.  `,
            no: `I don't really care that much about following the rules or doing what people in authority say. `,
            val: 'NS',
            facet: 'Rules',
        },
        {
            id: '28',
            question: `It's important to me that everyone is treated justly and that the weak and vulnerable are protected`,
            yes: `I tend to care about the weak and vulnerable in society and for everyone be treated justly. `,
            no: `I don't tend to concern myself about whether or not everyone in society is treated justly. `,
            val: 'Y',
            facet: 'Concern',
        },
        {
            id: '29',
            question: `It's important to me that I'm tolerant and understanding towards people who are different than me. `,
            yes: `I tend to be tolerant and understanding towards people who are different than me. `,
            no: `I don't go out of my way to be tolerant and understanding towards people who are different than me. `,
            val: 'Y',
            facet: 'Tolerance',
        },
        {
            id: '30',
            question: `It's important to me that the natural environment is protected and taken care of`,
            yes: `I tend to care about protecting the natural environment. `,
            no: `I don't tend to concern myself with the protection of the natural environment. `,
            val: 'Y',
            facet: 'Nature',
        },
      ],
  },
  ]

  const [personaName, setPersonaName] = useState("");
  const [personaValue, setPersonaValue] = useState("");
  const [selectedData, setSelectedData] = useState();
  const [select, setSelect] = useState(Common_Personas);
  let numData = [];
  
  const getData = (item) => {
    let data = {};
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
    const persData = item.map((item) => item.data);
    const persNames = item.map((item) => item.name);

    for (var i = 0, l = persData.length; i < l; i++) {
      let innerData = []
      let samp = persData[i];
      var count = 0;
      let idxRange = 0;
      let anyVal = false;
      data[persNames[i]] = rangeTitle[0] + "\n\n";

      for (var j = 0, m = samp.length; j < m; j++) {
        if (j >= ranges[idxRange]) {
            idxRange++;
            if (!anyVal) {
                data[persNames[i]] += "Nothing pre-selected, click 'Change' below to answer the questions";
               }
               anyVal = false;
            data[persNames[i]] = data[persNames[i]].concat("\n\n");
            data[persNames[i]] += rangeTitle[idxRange] + "\n\n";
          }

        if (samp[j].val === "Y") {
          count++;
          anyVal = true;
          innerData.push(1)
          data[persNames[i]] +=
            samp[j].yes.charAt(0).toUpperCase() + samp[j].yes.slice(1) + "";
          

        } else if (samp[j].val == "N") {
            innerData.push(0)
  
          if (samp[j].no.length != 0) {
            count++;
            anyVal = true;
            data[persNames[i]] +=
              samp[j].no.charAt(0).toUpperCase() + samp[j].no.slice(1) + "";
          }
        }
        else {
            innerData.push(2)
        }
      }
    //_____________
    //Method 1 by checking if there has been any "Y" or "N" values so far
    //   if (innerData.indexOf(1) === -1 && innerData.indexOf(0) === -1) {
    //     data[persNames[i]] += "Not Sure How to Answer This";
    //   }
    //_____________

    //Method 2 by checking the count to see if there were any "Y" or "N" values so far
      if (!anyVal) {
        data[persNames[i]] += "Nothing pre-selected, click 'Change' below to answer the questions";
      }
    //_____________
      numData.push(innerData)
    }
    return data;
  };

  const handleOnPress = (item) => {
    let localData = getData(select);
    const newItem = select.map((val) => {
      if (val.id === item.id) {
        return { ...val, selected: !val.selected };
      } else {
        return { ...val, selected: false };
      }
    });
    setSelect(newItem);
    let selectedPers = newItem.filter((item) => !(item.selected == false));
    const narrativeName = selectedPers.map((item) => item.name);
    setSelectedData(numData[selectedPers.map((item) => item.id)[0]-1])
    setPersonaName(narrativeName[0]);
    setPersonaValue(localData[narrativeName[0]]);
  };

  const handleChange = () => {
    refRBSheet.current.close()
    navigation.navigate("CreateCustomPersonas", {
        newPers: newPers,
        id: id,
        age: age,
        gender: gender,
        path: path,
        data: selectedData
      });

  }

  const handleDone = () => {
    refRBSheet.current.close()
    console.log('current: ',path)
    let p  = 2;
    if(path == 1){
      p = 1;
    }
        navigation.navigate('FinalCustomPersona', {
        data: selectedData,
        PersonName: newPers,
        age: age,
        gender: gender,
        id: id,
        path: p,
      });
  }

  const handleBuildPersona = () => {

    navigation.navigate("CreateCustomPersonas", {
      newPers: newPers,
      id: id,
      age: age,
      gender: gender,
      path: path,
      data: data
    });
  }


  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#9cc8C6",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: "2.5%",
          top: "5%",
          width: "95%",
        }}
      >
        <BackButtonPersona
          label={"back button"}
          onPress={() => {
            navigation.goBack("SeeProfileButtons");
          }}
          icon={
            <Ionicons name="chevron-back-outline" size={24} color="#000000" />
          }
        />
        <BackButtonPersona
          label={"back button"}
          onPress={() => {
            navigation.navigate("PersonasScreen");
          }}
          icon={<Ionicons name="close" size={24} color="#000000" />}
        />
      </View>
      <View style={{ top: "6%", 
        flexdirection: 'row',
        justifyContent: 'center',
        width: '60%',
        marginLeft: '5%'}}>
        <Text
          style={{
            fontFamily: "WorkSans-Light",
            fontSize: 22,
            fontWeight: "300",
            letterSpacing: 0,
            color: "#000000",
          }}
        >
          What's {newPers} like as a person?
        </Text>
      </View>

      

      <View style={{marginTop: '15%' }}>
      <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 20,
            fontWeight: '400',
            letterSpacing: 1,
            color: '#000000',
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: '2%',
            marginTop: '4%'
          }}>
          Character Types
        </Text>
        <FlatList
          data={select}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                handleOnPress(item);
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
          style={{ marginTop: '3%' }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: "100%",
                  width: 20,
                }}
              />
            );
          }}
        />
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
            marginTop: '5%'
        }}
      >

<View style={{}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectPersonasTutorial')
            }}
            style={{
              backgroundColor: '#18163A',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              width: 165,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'left',
                paddingHorizontal: 5,
                fontWeight: '400',
                fontSize: 16,
                letterSpacing: 0,
                color: '#fff5ef',
                fontFamily: 'WorkSans-Regular',
              }}>
              More info on character creation
            </Text>
          </TouchableOpacity>
      </View>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
                handleBuildPersona();
                mixpanel.track("Persona_CustomStart");
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F6DEDC",
              marginBottom: 0,
              width: 200,
              height: 60,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              paddingHorizontal: '5%'
            }}
          >
            <View style={{}}>
              <Text style={styles.textNewNarr}>
                Click here to create the character from scratch
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          dragFromTopOnly={true}
          animationType={"slide"}
          openDuration={600}
          height={SCREEN_HEIGHT * 0.85}
          closeOnPressMask={true}
          onClose={null}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            container: {
              backgroundColor: "#FFF5EF",
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              alignItems: "center",
            },
            draggableIcon: {
              backgroundColor: "#282561",
            },
          }}
        >
          <ScrollView>
            <TouchableOpacity activeOpacity={1}>
              <Text style={styles.headButtonPopUp}>{personaName}</Text>
              <Text style={styles.textButtonPopUp}>{personaValue}</Text>
            </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleChange();
                mixpanel.track("Persona_CommonChangeStart")
            }}
              style={styles.editButton}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "300",
                    fontSize: 18,
                    color: "#000000",
                    fontFamily: "Worksans-light",
                    letterSpacing: 2,
                  }}
                >
                  Change
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDone}
              style={styles.doneButton}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "300",
                    fontSize: 18,
                    color: "#000000",
                    fontFamily: "Worksans-light",
                    letterSpacing: 2,
                  }}
                >
                  Select
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </RBSheet>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonSelected: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "F6DEDC",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 30,
    width: 180,
    height: 220,
    borderRadius: 30,
  },
  textButtonSelected: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "10%",
    marginHorizontal: "5%",
    fontWeight: "300",
    fontSize: 20,
    color: "#000000",
    fontFamily: "WorkSans-Thin",
    letterSpacing: 1,
  },
  button: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#FFF5EF",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 30,
    width: 180,
    height: 220,
    borderRadius: 30,
  },
  textButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "10%",
    marginHorizontal: "5%",
    fontWeight: "300",
    fontSize: 20,
    color: "#000000",
    fontFamily: "WorkSans-Thin",
    letterSpacing: 1,
  },

  textSelected: {
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 8,
    fontWeight: "400",
    fontSize: 18,
    color: "#000000",
    fontFamily: "Worksans-light",
  },

  textUnselected: {
    textAlign: "center",
    paddingTop: 8,
    fontWeight: "400",
    fontSize: 18,
    color: "#000000",
    fontFamily: "Worksans-light",
  },
  headButtonPopUp: {
    textAlign: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
    fontWeight: "300",
    fontSize: 20,
    color: "#000000",
    fontFamily: "WorkSans-Thin",
    letterSpacing: 2,
  },
  textButtonPopUp: {
    textAlign: "left",
    marginTop: "10%",
    marginHorizontal: "6%",
    fontWeight: "300",
    fontSize: 18,
    color: "#000000",
    fontFamily: "WorkSans-Thin",
    letterSpacing: 0,
  },
  newNarrButton: {
    alignItems: "center",
    backgroundColor: "#F6DEDC",
    marginHorizontal: "0%",
    marginBottom: 0,
    width: 340,
    height: 100,
    borderRadius: 50,
  },
  editButton: {
    backgroundColor: "#EDBDBA",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "5%",
    marginRight: "2.5%",
    width: 150,
    height: 50,
    borderRadius: 50,
  },
  doneButton: {
    backgroundColor: "#9cc8C6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "2.5%",
    marginRight: "5%",
    width: 150,
    height: 50,
    borderRadius: 50,
  },
  textNewNarr: {
    textAlign: "left",
    fontWeight: "300",
    fontSize: 16,
    color: "#000000",
    fontFamily: "WorkSans-Thin",
    letterSpacing: 0,
  },
});