import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView} from "react-native";
import { generateDescription } from "../../components/Narratives/generateDescription";

export default SimilarityWithNarration = ({id, matchedDocument, matchedUserDetails, thisNarrative, narrativeDetails}) =>{
    const [narration, setNarration] = useState(generateDescription({
        inputData: narrativeDetails.prediction,
        flow: narrativeDetails.flow == 'clarityInTheMoment' ? 'clarityInTheFuture': 'clarityInTheMoment',
        mainChar: narrativeDetails.mainChar,
        otherChar: narrativeDetails.otherChar,
    }));
    const [thisNarration, setThisNarration] = useState(generateDescription({
        inputData: thisNarrative.prediction,
        flow: thisNarrative.flow == 'clarityInTheMoment' ? 'clarityInTheFuture': 'clarityInTheMoment',
        mainChar: thisNarrative.mainChar,
        otherChar: thisNarrative.otherChar,
    }));
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
      
    useEffect(() => {
        setSimilarityHandler(findSimilarities(narration, thisNarration));
    }, [narration, thisNarration])

    if(similarityHandler == null){
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
                    <Text style={styles.narrationText}>
                        { narration || "Narration Is Empty" }
                    </Text>
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
                    {narration.split('"').map((section, index) => {
                        if(similarityHandler[section] == 'bold'){
                            return (<Text key={index} style={styles.boldText}>{`"${section}"`}</Text>)
                        }
                        if(!section.includes('\n')){
                            return (<Text key={index} style={styles.normalText}>{`"${section}"`}</Text>)
                        }
                        return (<Text key={index} style={styles.normalText}>{section}</Text>)
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
        flex:1,
        fontFamily: 'WorkSans-Light', 
        fontSize: 17, 
        color:'#18163A',
        fontWeight: '300', 
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